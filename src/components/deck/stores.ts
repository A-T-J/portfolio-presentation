"use client";

import { useSyncExternalStore } from "react";
import type { Lang } from "@/content/types";

/*
 * Small external stores read with useSyncExternalStore, so the server render
 * (no hash, French, not fullscreen) hydrates cleanly and the client value
 * takes over right after.
 */

// ---- URL hash: "#problem", "#regions/website" -------------------------------

const hashListeners = new Set<() => void>();

function subscribeHash(callback: () => void) {
  hashListeners.add(callback);
  window.addEventListener("popstate", callback);
  window.addEventListener("hashchange", callback);
  return () => {
    hashListeners.delete(callback);
    window.removeEventListener("popstate", callback);
    window.removeEventListener("hashchange", callback);
  };
}

export function useHash() {
  return useSyncExternalStore(
    subscribeHash,
    () => decodeURIComponent(window.location.hash.slice(1)),
    () => "",
  );
}

/** Push a history entry so the browser Back button walks back through the deck. */
export function navigate(hash: string) {
  const current = decodeURIComponent(window.location.hash.slice(1));
  if (current === hash) return;
  const url = hash ? `#${hash}` : `${window.location.pathname}${window.location.search}`;
  window.history.pushState(null, "", url);
  hashListeners.forEach((listener) => listener());
}

// ---- Language, remembered in localStorage -----------------------------------

const LANG_KEY = "ei-lang";
const langListeners = new Set<() => void>();
// Fallback when localStorage is blocked: the choice lasts for this page view.
let sessionLang: Lang | null = null;

/** French is the default; English only when the visitor picked it. */
export const DEFAULT_LANG: Lang = "fr";

function readLang(): Lang {
  if (sessionLang) return sessionLang;
  try {
    return window.localStorage.getItem(LANG_KEY) === "en" ? "en" : DEFAULT_LANG;
  } catch {
    return DEFAULT_LANG;
  }
}

function subscribeLang(callback: () => void) {
  langListeners.add(callback);
  return () => {
    langListeners.delete(callback);
  };
}

export function useLang(): Lang {
  return useSyncExternalStore(subscribeLang, readLang, () => DEFAULT_LANG);
}

export function setLang(lang: Lang) {
  sessionLang = lang;
  try {
    window.localStorage.setItem(LANG_KEY, lang);
  } catch {
    // Storage blocked: sessionLang still holds the choice.
  }
  langListeners.forEach((listener) => listener());
}

// ---- Fullscreen --------------------------------------------------------------

function subscribeFullscreen(callback: () => void) {
  document.addEventListener("fullscreenchange", callback);
  return () => document.removeEventListener("fullscreenchange", callback);
}

export function useFullscreen() {
  const active = useSyncExternalStore(
    subscribeFullscreen,
    () => document.fullscreenElement != null,
    () => false,
  );
  const supported = useSyncExternalStore(
    subscribeFullscreen,
    () => document.fullscreenEnabled === true,
    () => false,
  );
  return { active, supported };
}

export function toggleFullscreen() {
  if (document.fullscreenElement) {
    void document.exitFullscreen().catch(() => {});
  } else {
    void document.documentElement.requestFullscreen?.().catch(() => {});
  }
}
