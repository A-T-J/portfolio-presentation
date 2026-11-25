import type { ToolGroup } from "../types";

export const inspiration: ToolGroup = {
  id: "inspiration",
  code: "INSPO",
  name: { en: "Inspiration", fr: "Inspiration" },
  tagline: {
    en: "Study the standard before you build.",
    fr: "Étudier le niveau avant de construire.",
  },
  why: {
    en: "A gallery shows what a finished portfolio looks like: structure, hierarchy, how a case study is told. Copy the structure and the storytelling, never the visual identity.",
    fr: "Une galerie montre à quoi ressemble un portfolio abouti : structure, hiérarchie, manière de raconter une étude de cas. Copiez la structure et le récit, jamais l'identité visuelle.",
  },
  facts: [
    {
      en: "Awwwards judges design, usability and content, not only looks.",
      fr: "Awwwards juge le design, l'utilisabilité et le contenu, pas seulement l'apparence.",
    },
    {
      en: "Template galleries give a working layout in minutes; the content still has to be yours.",
      fr: "Les galeries de modèles donnent une mise en page fonctionnelle en quelques minutes ; le contenu doit rester le vôtre.",
    },
    {
      en: "Save three references and name what you like in each: layout, type, proof.",
      fr: "Enregistrez trois références et notez ce qui vous plaît dans chacune : mise en page, typographie, preuve.",
    },
    {
      en: "Look at portfolios in your field, not only the award-winning ones.",
      fr: "Regardez des portfolios de votre domaine, pas seulement les plus primés.",
    },
  ],
  releases: [
    {
      what: { en: "Reference check", fr: "Veille de références" },
      when: { en: "Before a redesign", fr: "Avant une refonte" },
      source: "per redesign",
    },
    {
      what: { en: "Template review", fr: "Revue de modèles" },
      when: { en: "When a new page is needed", fr: "Quand une nouvelle page est nécessaire" },
      source: "as needed",
    },
    {
      what: { en: "Saved links", fr: "Liens enregistrés" },
      when: { en: "Every quarter", fr: "Chaque trimestre" },
      source: "4x/year",
    },
  ],
  tools: [
    {
      name: "Awwwards",
      url: "https://www.awwwards.com",
      what: {
        en: "Curated gallery of award-winning websites.",
        fr: "Galerie sélectionnée de sites primés.",
      },
      why: {
        en: "See the ceiling: layout, typography and how work is presented.",
        fr: "Voir le plafond : mise en page, typographie et présentation du travail.",
      },
    },
    {
      name: "Dribbble",
      url: "https://dribbble.com",
      what: {
        en: "Shots and visual exploration from designers.",
        fr: "Créations et explorations visuelles de designers.",
      },
      why: {
        en: "See current visual trends and how a single screen is framed. A shot is not a full case study.",
        fr: "Voir les tendances visuelles et la composition d'un écran. Une création n'est pas une étude de cas complète.",
      },
    },
    {
      name: "Mobbin",
      url: "https://mobbin.com",
      what: {
        en: "Curated library of real app and web screens and flows.",
        fr: "Bibliothèque d'écrans et de parcours réels d'applications et de sites.",
      },
      why: {
        en: "See how real products structure navigation, onboarding and content. Useful for layout patterns.",
        fr: "Voir comment de vrais produits structurent la navigation, l'accueil et le contenu. Utile pour les schémas de mise en page.",
      },
    },
    {
      name: "Godly",
      url: "https://godly.website",
      what: {
        en: "Curated gallery of high-craft websites.",
        fr: "Galerie sélectionnée de sites très soignés.",
      },
      why: {
        en: "See ambitious layouts and motion. Take the structure, not the visual identity.",
        fr: "Voir des mises en page et des animations ambitieuses. Prenez la structure, pas l'identité visuelle.",
      },
    },
    {
      name: "Lovable templates",
      url: "https://lovable.dev/templates",
      what: {
        en: "Ready-made app and portfolio templates to start from.",
        fr: "Modèles d'applications et de portfolios prêts à l'emploi.",
      },
      why: {
        en: "A head start on structure without starting from a blank page.",
        fr: "Une longueur d'avance sur la structure sans partir d'une page blanche.",
      },
    },
    {
      name: "v0 templates",
      url: "https://v0.app/templates",
      what: {
        en: "Ready-made React and Tailwind page templates.",
        fr: "Modèles de pages React et Tailwind prêts à l'emploi.",
      },
      why: {
        en: "Start from a working component layout and keep the code.",
        fr: "Partir d'une mise en page de composants fonctionnelle et garder le code.",
      },
    },
    {
      name: "Behance",
      url: "https://www.behance.net",
      what: {
        en: "Portfolio network for design work and case studies.",
        fr: "Réseau de portfolios pour le travail de design et les études de cas.",
      },
      why: {
        en: "Read how others frame a brief, a process and a result.",
        fr: "Lire comment d'autres présentent un brief, un processus et un résultat.",
      },
    },
    {
      name: "Credly",
      url: "https://www.credly.com",
      what: {
        en: "Digital badge and credential wallet for verified certificates.",
        fr: "Portefeuille de badges numériques et de certificats vérifiés.",
      },
      why: {
        en: "Keep verified badges in one public profile and embed them in the portfolio and LinkedIn.",
        fr: "Regroupez vos badges vérifiés dans un profil public et intégrez-les au portfolio et à LinkedIn.",
      },
    },
  ],
};
