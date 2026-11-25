"use client";

import { useEffect } from "react";
import { ArrowLeft, ArrowRight, Expand, Mark, Shrink } from "@/components/icons";
import { slideOrder, slideTitles, ui, type SlideId } from "@/content/deck";
import { findToolGroup } from "@/content/tools";
import type { Lang, ToolGroup } from "@/content/types";
import { slideComponents } from "./slides";
import { navigate, setLang, toggleFullscreen, useFullscreen, useHash, useLang } from "./stores";
import { ToolGroupView } from "./tool-group-view";

type View = { kind: "slide"; index: number } | { kind: "tool"; group: ToolGroup };

const TOOLS_INDEX = slideOrder.indexOf("tools");
const LAST_INDEX = slideOrder.length - 1;

function parseView(hash: string): View {
  if (hash.startsWith("tools/")) {
    const group = findToolGroup(hash.slice("tools/".length));
    if (group) return { kind: "tool", group };
    return { kind: "slide", index: TOOLS_INDEX };
  }
  const index = slideOrder.indexOf(hash as SlideId);
  return { kind: "slide", index: index === -1 ? 0 : index };
}

function goToIndex(index: number) {
  const clamped = Math.min(Math.max(index, 0), LAST_INDEX);
  navigate(clamped === 0 ? "" : slideOrder[clamped]);
}

function goTo(id: SlideId) {
  goToIndex(slideOrder.indexOf(id));
}

export function Deck() {
  const hash = useHash();
  const lang = useLang();
  const fullscreen = useFullscreen();
  const view = parseView(hash);
  const index = view.kind === "slide" ? view.index : TOOLS_INDEX;
  const viewKey = view.kind === "slide" ? slideOrder[view.index] : `tool-${view.group.id}`;
  const label = view.kind === "slide" ? slideTitles[slideOrder[view.index]][lang] : view.group.name[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    document.title = `${label} · ${ui.siteName[lang]}`;
  }, [label, lang]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey) return;
      const target = event.target as HTMLElement | null;
      const tag = target?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || target?.isContentEditable) return;
      const onControl = tag === "BUTTON" || tag === "A";
      const { key } = event;

      if (key === "f" || key === "F") {
        event.preventDefault();
        toggleFullscreen();
        return;
      }

      if (view.kind === "tool") {
        // Space and PageDown keep scrolling the tool list.
        if (key === "Escape" || key === "ArrowLeft") {
          event.preventDefault();
          goTo("tools");
        } else if (key === "ArrowRight") {
          event.preventDefault();
          goToIndex(TOOLS_INDEX + 1);
        }
        return;
      }

      if (key === "ArrowRight" || key === "PageDown" || (key === " " && !onControl)) {
        event.preventDefault();
        goToIndex(view.index + 1);
      } else if (key === "ArrowLeft" || key === "PageUp") {
        event.preventDefault();
        goToIndex(view.index - 1);
      } else if (key === "Home") {
        event.preventDefault();
        goToIndex(0);
      } else if (key === "End") {
        event.preventDefault();
        goToIndex(LAST_INDEX);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [view]);

  const Slide = view.kind === "slide" ? slideComponents[slideOrder[view.index]] : null;

  return (
    <div className="flex h-dvh flex-col">
      <header className="shrink-0 border-b border-line bg-paper/95 backdrop-blur">
        <div className="wrap flex h-14 items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-4">
            <button type="button" onClick={() => goToIndex(0)} className="flex shrink-0 items-center gap-2.5 text-left">
              <Mark className="h-7 w-7 text-accent" />
              <span className="leading-none">
                <span className="block text-sm font-semibold text-ink">{ui.siteName[lang]}</span>
                <span className="mt-0.5 block font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                  {ui.siteSub[lang]}
                </span>
              </span>
            </button>
          </div>

          <p className="hidden font-mono text-[11px] uppercase tracking-[0.14em] text-muted lg:block">
            {view.kind === "slide" ? `${index + 1} / ${slideOrder.length} · ` : `${slideTitles.tools[lang]} · `}
            <span className="text-ink">{label}</span>
          </p>

          <div className="flex items-center gap-2">
            <LangToggle lang={lang} />
            {fullscreen.supported ? (
              <button
                type="button"
                onClick={toggleFullscreen}
                className="icon-btn"
                aria-label={fullscreen.active ? ui.exitFullscreen[lang] : ui.fullscreen[lang]}
                title={`${fullscreen.active ? ui.exitFullscreen[lang] : ui.fullscreen[lang]} (F)`}
              >
                {fullscreen.active ? <Shrink /> : <Expand />}
              </button>
            ) : null}
          </div>
        </div>
      </header>

      <p className="sr-only" aria-live="polite">
        {label}
      </p>

      <main id="main" key={viewKey} className="slide-in flex-1 overflow-y-auto [scrollbar-gutter:stable_both-edges]">
        {view.kind === "tool" ? (
          <ToolGroupView group={view.group} lang={lang} onBack={() => goTo("tools")} />
        ) : Slide ? (
          <Slide lang={lang} onNext={() => goToIndex(view.index + 1)} goTo={goTo} />
        ) : null}
      </main>

      <footer className="shrink-0 border-t border-line bg-paper/95 backdrop-blur">
        <div className="wrap flex h-14 items-center justify-between gap-3">
          {view.kind === "tool" ? (
            <>
              <button type="button" onClick={() => goTo("tools")} className="btn btn-outline py-2 text-xs">
                <ArrowLeft />
                {ui.backToTools[lang]}
              </button>
              <span className="hidden font-mono text-[10px] uppercase tracking-[0.14em] text-muted lg:block">
                {ui.toolKeyHint[lang]}
              </span>
              <button type="button" onClick={() => goToIndex(TOOLS_INDEX + 1)} className="btn btn-solid py-2 text-xs">
                <span className="hidden sm:inline">{ui.continue[lang]}</span>
                <span className="sm:hidden">{ui.continueShort[lang]}</span>
                <ArrowRight />
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={() => goToIndex(index - 1)}
                disabled={index === 0}
                className="icon-btn"
                aria-label={ui.prev[lang]}
              >
                <ArrowLeft />
              </button>

              <nav aria-label={ui.slides[lang]} className="flex items-center gap-1.5">
                {slideOrder.map((id, dotIndex) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => goToIndex(dotIndex)}
                    aria-label={`${ui.goTo[lang]}: ${slideTitles[id][lang]}`}
                    aria-current={dotIndex === index ? "step" : undefined}
                    title={slideTitles[id][lang]}
                    className="group flex h-6 items-center px-0.5"
                  >
                    <span
                      className={`block h-1.5 rounded-full transition-all ${
                        dotIndex === index ? "w-6 bg-ink" : "w-1.5 bg-line group-hover:bg-muted"
                      }`}
                    />
                  </button>
                ))}
              </nav>

              <div className="flex items-center gap-3">
                <span className="hidden font-mono text-[10px] uppercase tracking-[0.14em] text-muted lg:block">
                  {ui.keyHint[lang]}
                </span>
                <button
                  type="button"
                  onClick={() => goToIndex(index + 1)}
                  disabled={index === LAST_INDEX}
                  className="icon-btn icon-btn-solid"
                  aria-label={ui.next[lang]}
                >
                  <ArrowRight />
                </button>
              </div>
            </>
          )}
        </div>
      </footer>
    </div>
  );
}

function LangToggle({ lang }: { lang: Lang }) {
  const options: { value: Lang; label: string }[] = [
    { value: "fr", label: "FR" },
    { value: "en", label: "EN" },
  ];
  return (
    <div role="group" aria-label={ui.language[lang]} className="flex rounded-full border border-line bg-card p-0.5">
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          lang={option.value}
          aria-pressed={lang === option.value}
          onClick={() => setLang(option.value)}
          className={`rounded-full px-3 py-1 font-mono text-[11px] font-semibold tracking-[0.08em] transition-colors ${
            lang === option.value ? "bg-ink text-paper" : "text-muted hover:text-ink"
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
