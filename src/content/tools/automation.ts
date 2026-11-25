import type { ToolGroup } from "../types";

export const automation: ToolGroup = {
  id: "automation",
  code: "AUTO",
  name: { en: "Automation", fr: "Automatisation" },
  tagline: {
    en: "Let the portfolio update itself.",
    fr: "Laisser le portfolio se mettre à jour tout seul.",
  },
  why: {
    en: "A portfolio dies when updating it is manual. Three small workflows keep it current: a repository watcher, a deploy check and a monthly digest. The work you ship shows up without you editing a page.",
    fr: "Un portfolio meurt quand sa mise à jour est manuelle. Trois petits flux le gardent à jour : une veille de dépôt, une vérification de déploiement et un résumé mensuel. Le travail livré apparaît sans que vous retouchiez une page.",
  },
  facts: [
    {
      en: "A webhook from GitHub to n8n is enough to detect a new push on a pinned repository.",
      fr: "Un webhook de GitHub vers n8n suffit à détecter un nouveau push sur un dépôt épinglé.",
    },
    {
      en: "GitHub Actions runs the build, the link check and the deploy on every push.",
      fr: "GitHub Actions lance le build, la vérification des liens et le déploiement à chaque push.",
    },
    {
      en: "UptimeRobot alerts you when the site or a demo goes down, before a recruiter finds it.",
      fr: "UptimeRobot vous alerte quand le site ou une démo tombe, avant qu'un recruteur ne le découvre.",
    },
    {
      en: "The AI writes the draft changelog; you check every fact before it is published.",
      fr: "L'IA rédige le brouillon du changelog ; vous vérifiez chaque fait avant publication.",
    },
  ],
  releases: [
    {
      what: { en: "Repository watcher", fr: "Veille de dépôt" },
      when: { en: "On every push to a pinned repo", fr: "À chaque push sur un dépôt épinglé" },
      source: "per push",
    },
    {
      what: { en: "Deploy check", fr: "Vérification de déploiement" },
      when: { en: "After each deploy", fr: "Après chaque déploiement" },
      source: "per deploy",
    },
    {
      what: { en: "Monthly digest", fr: "Résumé mensuel" },
      when: { en: "Once a month", fr: "Une fois par mois" },
      source: "12x/year",
    },
  ],
  tools: [
    {
      name: "n8n",
      url: "https://n8n.io",
      what: {
        en: "Workflow automation, self-hosted or cloud.",
        fr: "Automatisation de flux, auto-hébergée ou dans le cloud.",
      },
      why: {
        en: "Connect GitHub, RSS and the blog without writing a backend.",
        fr: "Reliez GitHub, RSS et le blog sans écrire de backend.",
      },
    },
    {
      name: "GitHub Actions",
      url: "https://github.com/features/actions",
      what: {
        en: "CI/CD workflows that run on every push.",
        fr: "Flux CI/CD exécutés à chaque push.",
      },
      why: {
        en: "Build, test links and deploy without touching a server.",
        fr: "Construisez, testez les liens et déployez sans toucher à un serveur.",
      },
    },
    {
      name: "UptimeRobot",
      url: "https://uptimerobot.com",
      what: {
        en: "Uptime monitor with alerts for the site and demos.",
        fr: "Surveillance de disponibilité avec alertes pour le site et les démos.",
      },
      why: {
        en: "You hear about a broken demo before a recruiter does.",
        fr: "Vous apprenez qu'une démo est cassée avant un recruteur.",
      },
    },
  ],
};
