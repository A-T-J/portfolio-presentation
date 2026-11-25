import type { ToolGroup } from "../types";

export const build: ToolGroup = {
  id: "build",
  code: "BUILD",
  featured: true,
  name: { en: "Page creation", fr: "Création de page" },
  tagline: {
    en: "Generate the first version, then keep the code.",
    fr: "Générer la première version, puis garder le code.",
  },
  why: {
    en: "You do not need a frontend team to start. An AI builder turns a written brief into a working page in an afternoon; you keep the code, replace the placeholder content and host it yourself.",
    fr: "Pas besoin d'une équipe front-end pour commencer. Un générateur IA transforme un brief écrit en page fonctionnelle en un après-midi ; vous gardez le code, remplacez le contenu provisoire et hébergez le site vous-même.",
  },
  facts: [
    {
      en: "The builder writes the first draft; the projects, results and links are yours to write.",
      fr: "Le générateur écrit la première version ; les projets, les résultats et les liens restent à écrire par vous.",
    },
    {
      en: "Export the code to GitHub. A site that only lives in the builder is not yours.",
      fr: "Exportez le code vers GitHub. Un site qui ne vit que dans le générateur ne vous appartient pas.",
    },
    {
      en: "A template is a layout, not a portfolio. Swap the demo content for real case studies.",
      fr: "Un modèle est une mise en page, pas un portfolio. Remplacez le contenu de démonstration par de vraies études de cas.",
    },
    {
      en: "Check the generated page on a phone before you publish it.",
      fr: "Vérifiez la page générée sur un téléphone avant de la publier.",
    },
  ],
  releases: [
    {
      what: { en: "First version", fr: "Première version" },
      when: { en: "Before applications start", fr: "Avant de commencer à postuler" },
      source: "1x",
    },
    {
      what: { en: "Content edit", fr: "Modification du contenu" },
      when: { en: "After each project", fr: "Après chaque projet" },
      source: "per project",
    },
    {
      what: { en: "Design refresh", fr: "Refonte visuelle" },
      when: { en: "Every 6–12 months", fr: "Tous les 6 à 12 mois" },
      source: "2x/year",
    },
  ],
  tools: [
    {
      name: "Lovable",
      url: "https://lovable.dev",
      what: {
        en: "Prompt-to-app builder that generates a full React project.",
        fr: "Générateur d'applications à partir d'un prompt, qui produit un projet React complet.",
      },
      why: {
        en: "Ship a credible first portfolio in one afternoon, then export the code.",
        fr: "Publiez un premier portfolio crédible en un après-midi, puis exportez le code.",
      },
    },
    {
      name: "v0",
      url: "https://v0.app",
      what: {
        en: "Vercel's AI interface builder: prompt, edit, copy the components.",
        fr: "Générateur d'interfaces IA de Vercel : prompt, retouche, copie des composants.",
      },
      why: {
        en: "A clean layout you can drop into your own Next.js project.",
        fr: "Une mise en page propre à intégrer dans votre propre projet Next.js.",
      },
    },
    {
      name: "GitHub",
      url: "https://github.com",
      what: {
        en: "Code host and version history for the generated project.",
        fr: "Hébergement de code et historique de versions pour le projet généré.",
      },
      why: {
        en: "Export there first: the repo is the source of truth, the builder is a draft.",
        fr: "Exportez-y d'abord : le dépôt est la source de vérité, le générateur n'est qu'un brouillon.",
      },
    },
  ],
};
