import type { ToolGroup } from "../types";

export const website: ToolGroup = {
  id: "website",
  code: "SITE",
  featured: true,
  name: { en: "Website creation", fr: "Création de site" },
  tagline: {
    en: "The fastest way from “I have a CV” to “I have a portfolio site”.",
    fr: "Le moyen le plus rapide de passer de « j'ai un CV » à « j'ai un site portfolio ».",
  },
  why: {
    en: "An AI or visual builder turns a prompt or a template into a working page in minutes. Use it for the first draft, then rewrite the copy, add real case studies and check every link. Export the code on day one: a portfolio site you cannot move is not really yours.",
    fr: "Un générateur IA ou visuel transforme une consigne ou un modèle en page fonctionnelle en quelques minutes. Servez-vous-en pour la première version, puis réécrivez les textes, ajoutez de vraies études de cas et vérifiez chaque lien. Exportez le code dès le premier jour : un site portfolio que vous ne pouvez pas déplacer ne vous appartient pas vraiment.",
  },
  facts: [
    {
      en: "A prompt or a template produces a layout, not evidence. Replace every placeholder with a project you can defend in an interview.",
      fr: "Une consigne ou un modèle produit une mise en page, pas une preuve. Remplacez chaque texte provisoire par un projet que vous savez défendre en entretien.",
    },
    {
      en: "Generate the shell, then write the case studies yourself. That is the part a recruiter actually reads.",
      fr: "Générez la structure, puis rédigez les études de cas vous-même. C'est la partie que le recruteur lit vraiment.",
    },
    {
      en: "Export the code before you customize anything. A drag-and-drop portfolio site that cannot leave the tool is a rental.",
      fr: "Exportez le code avant de personnaliser quoi que ce soit. Un site portfolio par glisser-déposer qui ne peut pas quitter l'outil, c'est une location.",
    },
    {
      en: "Open the result on a phone and tap every button. Generated and templated pages often ship dead links and a menu that will not close.",
      fr: "Ouvrez le résultat sur un téléphone et touchez chaque bouton. Les pages générées ou issues de modèles livrent souvent des liens morts et un menu qui ne se ferme pas.",
    },
  ],
  releases: [
    {
      what: { en: "First draft generated", fr: "Première version générée" },
      when: { en: "Day one", fr: "Le premier jour" },
      source: "Lovable",
    },
    {
      what: { en: "Copy and case studies rewritten", fr: "Textes et études de cas réécrits" },
      when: { en: "Before sharing the link", fr: "Avant de partager le lien" },
      source: "You",
    },
    {
      what: { en: "Banner and sections refined", fr: "Bannière et sections retravaillées" },
      when: { en: "After the first review", fr: "Après la première relecture" },
      source: "v0",
    },
    {
      what: { en: "Code exported to a repository", fr: "Code exporté vers un dépôt" },
      when: { en: "Once the layout is stable", fr: "Une fois la mise en page stable" },
      source: "GitHub",
    },
  ],
  tools: [
    {
      name: "Lovable",
      url: "https://lovable.dev",
      what: {
        en: "AI builder that turns a prompt into a full web app or site.",
        fr: "Générateur IA qui transforme une consigne en application ou site web complet.",
      },
      why: {
        en: "The fastest way to see your CV as a portfolio site, before you own the details.",
        fr: "Le moyen le plus rapide de voir votre CV en site portfolio, avant d'en maîtriser les détails.",
      },
    },
    {
      name: "v0",
      url: "https://v0.app",
      what: {
        en: "Vercel's AI UI generator for React and Tailwind pages and components.",
        fr: "Générateur d'interface IA de Vercel pour des pages et composants React et Tailwind.",
      },
      why: {
        en: "Borrow a clean layout and keep the code: sections you can paste into your own project.",
        fr: "Empruntez une mise en page propre et gardez le code : des sections à coller dans votre propre projet.",
      },
    },
    {
      name: "Framer",
      url: "https://www.framer.com",
      what: {
        en: "Design-first site builder with templates and a CMS.",
        fr: "Générateur de sites orienté design avec modèles et CMS.",
      },
      why: {
        en: "Build a polished site visually and publish on your own domain. Good when you want control without code.",
        fr: "Construisez un site soigné visuellement et publiez sur votre domaine. Idéal quand vous voulez le contrôle sans coder.",
      },
    },
    {
      name: "Webflow",
      url: "https://webflow.com",
      what: {
        en: "Visual site builder with a CMS and hosting.",
        fr: "Générateur de sites visuel avec CMS et hébergement.",
      },
      why: {
        en: "A professional visual builder with a real CMS. Export the code or host on your domain.",
        fr: "Un générateur visuel professionnel avec un vrai CMS. Exportez le code ou hébergez sur votre domaine.",
      },
    },
  ],
};
