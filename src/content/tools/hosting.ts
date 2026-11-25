import type { ToolGroup } from "../types";

export const hosting: ToolGroup = {
  id: "hosting",
  code: "HOST",
  featured: true,
  name: { en: "Hosting", fr: "Hébergement" },
  tagline: {
    en: "Serve the site from the repository, for free.",
    fr: "Servir le site depuis le dépôt, gratuitement.",
  },
  why: {
    en: "A portfolio is a static site most of the time. Static hosting is free, fast and needs no server to patch; the deploy runs on every push, so the live site always matches the code.",
    fr: "Un portfolio est le plus souvent un site statique. L'hébergement statique est gratuit, rapide et sans serveur à maintenir ; le déploiement se lance à chaque push, donc le site en ligne correspond toujours au code.",
  },
  facts: [
    {
      en: "GitHub Pages serves a repository directly; a custom domain and HTTPS are included.",
      fr: "GitHub Pages sert directement un dépôt ; domaine personnalisé et HTTPS sont inclus.",
    },
    {
      en: "Cloudflare Pages adds a global CDN, a preview URL per branch and Workers for dynamic routes.",
      fr: "Cloudflare Pages ajoute un CDN mondial, une URL de prévisualisation par branche et Workers pour les routes dynamiques.",
    },
    {
      en: "Cloudflare Workers run small functions at the edge when a static page is not enough.",
      fr: "Cloudflare Workers exécutent de petites fonctions en périphérie quand une page statique ne suffit pas.",
    },
    {
      en: "The free tier is enough for a portfolio. Pay only if traffic or build minutes grow.",
      fr: "L'offre gratuite suffit pour un portfolio. Payez seulement si le trafic ou les minutes de build augmentent.",
    },
  ],
  releases: [
    {
      what: { en: "Deploy", fr: "Déploiement" },
      when: { en: "On every push to main", fr: "À chaque push sur main" },
      source: "per push",
    },
    {
      what: { en: "Custom domain", fr: "Domaine personnalisé" },
      when: { en: "Once, at setup", fr: "Une fois, à l'installation" },
      source: "1x",
    },
    {
      what: { en: "Build settings", fr: "Réglages de build" },
      when: { en: "Only when dependencies change", fr: "Uniquement quand les dépendances changent" },
      source: "rare",
    },
  ],
  tools: [
    {
      name: "GitHub Pages",
      url: "https://pages.github.com",
      what: {
        en: "Static hosting straight from a repository.",
        fr: "Hébergement statique directement depuis un dépôt.",
      },
      why: {
        en: "The shortest path from code to a live URL, with no extra account.",
        fr: "Le chemin le plus court du code à une URL en ligne, sans compte supplémentaire.",
      },
    },
    {
      name: "Cloudflare Pages",
      url: "https://pages.cloudflare.com",
      what: {
        en: "Static hosting with previews and Workers support.",
        fr: "Hébergement statique avec prévisualisations et support des Workers.",
      },
      why: {
        en: "Fast CDN and functions when the portfolio needs a small backend.",
        fr: "CDN rapide et fonctions quand le portfolio a besoin d'un petit backend.",
      },
    },
  ],
};
