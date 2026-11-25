import type { ToolGroup } from "../types";

export const hosting: ToolGroup = {
  id: "hosting",
  code: "HOST",
  featured: true,
  name: { en: "Hosting", fr: "Hébergement" },
  tagline: {
    en: "The difference between a folder on your laptop and a link a recruiter can open.",
    fr: "La différence entre un dossier sur votre ordinateur et un lien qu'un recruteur peut ouvrir.",
  },
  why: {
    en: "Free tiers cover a portfolio. Connect a custom domain, enable HTTPS, and let every push to main deploy the site. Preview builds give you a link to send before a change goes public: that is what turns a local folder into something a recruiter can open.",
    fr: "Les offres gratuites suffisent pour un portfolio. Branchez un domaine personnalisé, activez HTTPS et laissez chaque push sur main déployer le site. Les prévisualisations vous donnent un lien à envoyer avant la mise en ligne : c'est ce qui transforme un dossier local en page qu'un recruteur peut ouvrir.",
  },
  facts: [
    {
      en: "The free tier is enough for a portfolio: static files, a custom domain and HTTPS at no cost.",
      fr: "L'offre gratuite suffit pour un portfolio : fichiers statiques, domaine personnalisé et HTTPS sans frais.",
    },
    {
      en: "HTTPS is not optional. A browser warning loses the visit before the first line.",
      fr: "HTTPS n'est pas une option. Un avertissement du navigateur fait perdre la visite avant la première ligne.",
    },
    {
      en: "Deploy on push. A merge to main publishes; a failed build leaves the last working version online.",
      fr: "Déployez à chaque push. Une fusion sur main publie ; un build en échec laisse la dernière version fonctionnelle en ligne.",
    },
    {
      en: "Every branch gets a preview URL. Send that link for feedback instead of a screenshot.",
      fr: "Chaque branche obtient une URL de prévisualisation. Envoyez ce lien pour un retour, plutôt qu'une capture d'écran.",
    },
  ],
  releases: [
    {
      what: { en: "Production deploy", fr: "Déploiement en production" },
      when: { en: "On every push to main", fr: "À chaque push sur main" },
      source: "CI",
    },
    {
      what: { en: "Preview build", fr: "Build de prévisualisation" },
      when: { en: "On every pull request", fr: "À chaque pull request" },
      source: "GitHub",
    },
    {
      what: { en: "Custom domain and HTTPS", fr: "Domaine personnalisé et HTTPS" },
      when: { en: "At launch", fr: "Au lancement" },
      source: "Cloudflare",
    },
    {
      what: { en: "Uptime check", fr: "Contrôle de disponibilité" },
      when: { en: "After each deploy", fr: "Après chaque déploiement" },
      source: "UptimeRobot",
    },
  ],
  tools: [
    {
      name: "GitHub Pages",
      url: "https://pages.github.com",
      what: {
        en: "Free static hosting straight from a repository.",
        fr: "Hébergement statique gratuit directement depuis un dépôt.",
      },
      why: {
        en: "No extra account: push to the repo and the page is online.",
        fr: "Pas de compte supplémentaire : un push dans le dépôt et la page est en ligne.",
      },
    },
    {
      name: "Cloudflare Pages",
      url: "https://pages.cloudflare.com",
      what: {
        en: "Static and full-stack hosting on Cloudflare's edge, with Workers for dynamic parts.",
        fr: "Hébergement statique et full-stack sur le réseau de Cloudflare, avec Workers pour les parties dynamiques.",
      },
      why: {
        en: "Add a contact form or redirects with a Worker, without running a server.",
        fr: "Ajoutez un formulaire de contact ou des redirections avec un Worker, sans gérer de serveur.",
      },
    },
    {
      name: "Cloudflare Workers",
      url: "https://workers.cloudflare.com",
      what: {
        en: "Serverless functions that run on Cloudflare's edge.",
        fr: "Fonctions serverless exécutées sur le réseau de Cloudflare.",
      },
      why: {
        en: "Handle forms, redirects and small APIs without a server to maintain.",
        fr: "Gérez formulaires, redirections et petites API sans serveur à maintenir.",
      },
    },
  ],
};
