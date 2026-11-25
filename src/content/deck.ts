import type { Text } from "./types";

export const ui = {
  siteName: { en: "Portfolio", fr: "Portfolio" },
  siteSub: { en: "Proof of work", fr: "Preuve par le travail" },
  prev: { en: "Previous", fr: "Précédent" },
  next: { en: "Next", fr: "Suivant" },
  fullscreen: { en: "Full screen", fr: "Plein écran" },
  exitFullscreen: { en: "Exit full screen", fr: "Quitter le plein écran" },
  backToTools: { en: "All tools", fr: "Tous les outils" },
  continue: { en: "Continue the presentation", fr: "Continuer la présentation" },
  continueShort: { en: "Continue", fr: "Continuer" },
  open: { en: "Open", fr: "Ouvrir" },
  tools: { en: "tools", fr: "outils" },
  why: { en: "Why", fr: "Pourquoi" },
  knowThis: { en: "Know this", fr: "À savoir" },
  whenNumbers: { en: "When to update", fr: "Quand mettre à jour" },
  toolsTitle: { en: "Tools in this group", fr: "Outils de ce groupe" },
  keyHint: { en: "Move · F for full screen", fr: "Avancer · F pour plein écran" },
  toolKeyHint: { en: "Esc or ← for all tools · → to continue", fr: "Échap ou ← : tous les outils · → : continuer" },
  slides: { en: "Slides", fr: "Diapositives" },
  goTo: { en: "Go to", fr: "Aller à" },
  language: { en: "Language", fr: "Langue" },
  source: { en: "Source", fr: "Source" },
  notFoundTitle: { en: "Page not found", fr: "Page introuvable" },
  notFoundBody: { en: "Everything is on one page.", fr: "Tout est sur une seule page." },
  notFoundLink: { en: "Go to the presentation", fr: "Aller à la présentation" },
} satisfies Record<string, Text>;

/** Shown next to the logo (and on the title slide on small screens). */
/** Slide order. The id is also the URL hash (#problem, #tools/build…). */
export const slideOrder = [
  "intro",
  "problem",
  "cv-problem",
  "method",
  "tools",
  "seo",
  "checklist",
] as const;

export type SlideId = (typeof slideOrder)[number];

export const slideTitles: Record<SlideId, Text> = {
  intro: { en: "Start", fr: "Début" },
  problem: { en: "The problem", fr: "Le problème" },
  "cv-problem": { en: "The CV", fr: "Le CV" },
  method: { en: "The method", fr: "La méthode" },
  tools: { en: "Tools", fr: "Outils" },
  seo: { en: "SEO & review", fr: "SEO et relecture" },
  checklist: { en: "Checklist", fr: "Check-list" },
};

export const intro = {
  kicker: { en: "Portfolio presentation · November 2026", fr: "Présentation portfolio · novembre 2026" },
  title: {
    en: "A CV is a static liability. A portfolio is a living proof of work.",
    fr: "Un CV est un passif statique. Un portfolio est une preuve vivante de votre travail.",
  },
  body: {
    en: "Methods and tools presentation",
    fr: "Présentation des méthodes et outils",
  },
  byline: {
    en: "Created by: Taha Jafy",
    fr: "Créé par : Taha Jafy",
  },
  start: { en: "Start", fr: "Commencer" },
  jump: { en: "Go straight to the tools", fr: "Aller directement aux outils" },
};

type Source = { label: string; url: string };
export type Problem = { stat: Text; title: Text; body: Text; source: Source | Source[] };

export const problem = {
  kicker: { en: "The problem", fr: "Le problème" },
  title: {
    en: "Why a CV alone is a static liability",
    fr: "Pourquoi un CV seul est un passif statique",
  },
  // Row 1: the CV. Row 2: the proof.
  // `title` names the problem; `body` continues the sentence started by `stat`.
  items: [
    {
      title: { en: "First glance", fr: "Premier regard" },
      stat: { en: "7.4 s", fr: "7,4 s" },
      body: {
        en: "is the average time a recruiter spends on a first look at a CV. Your whole career, judged before the first interview.",
        fr: "C'est le temps moyen qu'un recruteur consacre à un premier regard sur un CV. Toute une carrière, jugée avant le premier entretien.",
      },
      source: {
        label: "Ladders",
        url: "https://www.theladders.com/career-advice/why-recruiters-spend-7-seconds-on-your-resume",
      },
    },
    {
      title: { en: "Filtered by software", fr: "Filtré par un logiciel" },
      stat: { en: "75%", fr: "75%" },
      body: {
        en: "of CVs are rejected by Applicant Tracking Systems (ATS) before a human reads them. Keywords decide, not your work.",
        fr: "des CV sont rejetés par les systèmes de suivi des candidatures (ATS) avant qu'un humain ne les lise. Les mots-clés décident, pas votre travail.",
      },
      source: { label: "Jobscan", url: "https://www.jobscan.co/blog/75-resumes-rejected-by-ats/" },
    },
    {
      title: { en: "One opening, 250 CVs", fr: "Un poste, 250 CV" },
      stat: { en: "250", fr: "250" },
      body: {
        en: "applications for a single corporate opening. Your CV is one file in a stack.",
        fr: "candidatures pour un seul poste en entreprise. Votre CV est un fichier dans une pile.",
      },
      source: {
        label: "Glassdoor",
        url: "https://www.glassdoor.com/blog/250-resumes-per-corporate-job-opening/",
      },
    },
    {
      title: { en: "Few interviews", fr: "Peu d'entretiens" },
      stat: { en: "2%", fr: "2%" },
      body: {
        en: "of applicants reach the interview stage. The CV has to survive the volume before anyone sees the portfolio.",
        fr: "des candidats arrivent à l'entretien. Le CV doit survivre au volume avant que quiconque ne voie le portfolio.",
      },
      source: {
        label: "Glassdoor",
        url: "https://www.glassdoor.com/blog/250-resumes-per-corporate-job-opening/",
      },
    },
    {
      title: { en: "Screened online", fr: "Filtré en ligne" },
      stat: { en: "70%", fr: "70%" },
      body: {
        en: "of employers screen candidates on social media. What they find is often a profile, not proof of work.",
        fr: "des employeurs vérifient les candidats sur les réseaux sociaux. Ce qu'ils trouvent est souvent un profil, pas une preuve de travail.",
      },
      source: {
        label: "CareerBuilder",
        url: "https://www.careerbuilder.com/advice/employers-use-social-media-to-screen-candidates",
      },
    },
    {
      title: { en: "Rejected after a search", fr: "Rejeté après une recherche" },
      stat: { en: "57%", fr: "57%" },
      body: {
        en: "of employers say they rejected a candidate because of something they found online. A static CV cannot correct that.",
        fr: "des employeurs disent avoir rejeté un candidat à cause d'un contenu trouvé en ligne. Un CV statique ne peut pas corriger cela.",
      },
      source: {
        label: "CareerBuilder",
        url: "https://www.careerbuilder.com/advice/employers-use-social-media-to-screen-candidates",
      },
    },
    {
      title: { en: "One exaggeration", fr: "Une exagération" },
      stat: { en: "85%", fr: "85%" },
      body: {
        en: "of employers say candidates exaggerate their qualifications on a CV. A portfolio lets the work speak instead of the adjectives.",
        fr: "des employeurs disent que les candidats exagèrent leurs qualifications sur un CV. Un portfolio laisse le travail parler à la place des adjectifs.",
      },
      source: {
        label: "CareerBuilder",
        url: "https://www.careerbuilder.com/advice/employers-use-social-media-to-screen-candidates",
      },
    },
    {
      title: { en: "Frozen on send", fr: "Figé à l'envoi" },
      stat: { en: "0 update", fr: "0 mise à jour" },
      body: {
        en: "Once you send a CV, it stops changing. New project, new skill, new result: the employer still sees the old file.",
        fr: "Une fois le CV envoyé, il ne change plus. Nouveau projet, nouvelle compétence, nouveau résultat : l'employeur voit toujours l'ancien fichier.",
      },
      source: { label: "Definition", url: "https://www.merriam-webster.com/dictionary/static" },
    },
  ] satisfies Problem[],
  footer: {
    en: "The fix is not a better CV. The fix is a portfolio: a living file that shows the work, the process and the result.",
    fr: "La solution n'est pas un meilleur CV. La solution, c'est un portfolio : un dossier vivant qui montre le travail, le processus et le résultat.",
  },
};

export type CvColumn = {
  title: Text;
  tagline: Text;
  points: Text[];
};

export const cvProblem = {
  kicker: { en: "CV vs portfolio", fr: "CV et portfolio" },
  title: {
    en: "The same career, two different files",
    fr: "La même carrière, deux fichiers différents",
  },
  cv: {
    title: { en: "The CV", fr: "Le CV" },
    tagline: { en: "Static by design", fr: "Statique par nature" },
    points: [
      { en: "Frozen the moment you send it", fr: "Figé au moment de l'envoi" },
      { en: "Text and adjectives, no evidence", fr: "Du texte et des adjectifs, aucune preuve" },
      { en: "One version for every employer", fr: "Une seule version pour tous les employeurs" },
      { en: "Judged in about 7 seconds", fr: "Jugé en 7 secondes environ" },
      { en: "No demo, no repository, no click", fr: "Pas de démo, pas de dépôt, pas de clic" },
      { en: "A new project changes nothing", fr: "Un nouveau projet ne change rien" },
    ],
  } satisfies CvColumn,
  portfolio: {
    title: { en: "The portfolio", fr: "Le portfolio" },
    tagline: { en: "Dynamic by design", fr: "Dynamique par nature" },
    points: [
      { en: "Updated after every project", fr: "Mis à jour après chaque projet" },
      { en: "Live demos, repositories and screenshots", fr: "Démos en ligne, dépôts et captures" },
      { en: "A page per project, with the detail", fr: "Une page par projet, avec le détail" },
      { en: "Read for as long as it takes", fr: "Lu aussi longtemps qu'il le faut" },
      { en: "Work the reviewer can click", fr: "Un travail que le lecteur peut ouvrir" },
      { en: "Grows with your career", fr: "Grandit avec votre carrière" },
    ],
  } satisfies CvColumn,
  footer: {
    en: "Send the CV to get the click. Send the portfolio to get the interview.",
    fr: "Envoyez le CV pour obtenir le clic. Envoyez le portfolio pour obtenir l'entretien.",
  },
};

export const method = {
  kicker: { en: "Portfolio method", fr: "La méthode portfolio" },
  title: { en: "Five steps from a CV to a live portfolio", fr: "Cinq étapes du CV au portfolio vivant" },
  steps: [
    {
      title: { en: "CV → truth file", fr: "CV → fichier source" },
      body: {
        en: "Save it as cv.md or cv.json. That file is the single source of truth; the portfolio site is generated from it.",
        fr: "Enregistrez-le en cv.md ou cv.json. Ce fichier est la source de vérité ; le site portfolio en est généré.",
      },
    },
    {
      title: { en: "Three projects", fr: "Trois projets" },
      body: {
        en: "In the same file, add three projects: problem, your role, stack, result and demo link.",
        fr: "Dans le même fichier, ajoutez trois projets : problème, votre rôle, stack, résultat et lien de démo.",
      },
    },
    {
      title: { en: "One page each", fr: "Une page chacun" },
      body: {
        en: "Generate a case-study page from the Markdown or JSON: context, decisions, outcome, one metric.",
        fr: "Générez une page d'étude de cas depuis le Markdown ou le JSON : contexte, décisions, résultat, un chiffre.",
      },
    },
    {
      title: { en: "Link the proof", fr: "Relier la preuve" },
      body: {
        en: "Every project gets a live URL, a repo and screenshots. A claim without a link is a rumour.",
        fr: "Chaque projet a une URL en ligne, un dépôt et des captures. Une affirmation sans lien est une rumeur.",
      },
    },
    {
      title: { en: "Publish on push", fr: "Publier à chaque push" },
      body: {
        en: "Commit the file, deploy the portfolio site, date the page. A new project is one commit.",
        fr: "Committez le fichier, déployez le site portfolio, datez la page. Un nouveau projet, c'est un commit.",
      },
    },
  ],
  rule: {
    en: "A CV stops at the file. A portfolio goes from cv.json to a live page on every push.",
    fr: "Un CV s'arrête au fichier. Un portfolio passe de cv.json à une page en ligne à chaque push.",
  },
  exampleLabel: { en: "Example: cv.json", fr: "Exemple : cv.json" },
  example: `{
  "name": "Your Name",
  "projects": [
    {
      "title": "Checkout redesign",
      "result": "+18% conversion",
      "demo": "https://demo.example"
    }
  ]
}`,
};

export const toolsSlide = {
  kicker: { en: "Tools", fr: "Outils" },
  title: { en: "Five groups of tools, five jobs", fr: "Cinq groupes d'outils, cinq fonctions" },
  body: {
    en: "A portfolio needs five jobs done: find references, create the portfolio site, buy the domain, host the portfolio site, automate the updates. Open a group to see the tools, why they matter and when to refresh them.",
    fr: "Un portfolio demande cinq choses : trouver des références, créer le site portfolio, acheter le domaine, héberger le site portfolio, automatiser les mises à jour. Ouvrez un groupe pour voir les outils, leur utilité et quand les mettre à jour.",
  },
  order: {
    en: "Follow the order: get inspired, create, name, host, automate.",
    fr: "Suivez l'ordre : s'inspirer, créer, nommer, héberger, automatiser.",
  },
};

export const seo = {
  kicker: { en: "SEO & review", fr: "SEO et relecture" },
  title: { en: "Be found, then be reviewed", fr: "Être trouvé, puis relu" },
  body: {
    en: "A portfolio nobody finds is a private notebook. SEO makes the work findable, the social profiles make it credible, and a review tells you what is not landing.",
    fr: "Un portfolio que personne ne trouve est un carnet privé. Le SEO rend le travail trouvable, les profils sociaux le rendent crédible, et une relecture dit ce qui ne passe pas.",
  },
  flows: [
    {
      title: { en: "Technical SEO", fr: "SEO technique" },
      steps: [
        { en: "One page per project, real text not images", fr: "Une page par projet, du texte réel, pas des images" },
        { en: "Title and meta description written for humans", fr: "Titre et méta-description écrits pour des humains" },
        { en: "Clean URLs, sitemap, HTTPS, Search Console", fr: "URLs propres, sitemap, HTTPS, Search Console" },
      ],
      note: {
        en: "If a page only exists as an image, no search engine can quote it.",
        fr: "Une page qui n'existe qu'en image ne peut être citée par aucun moteur.",
      },
    },
    {
      title: { en: "Social SEO", fr: "SEO social" },
      steps: [
        { en: "Same name, role and photo on every profile", fr: "Même nom, même rôle et même photo sur chaque profil" },
        { en: "Headline and bio carry the keywords of the work", fr: "Le titre et la bio portent les mots-clés du travail" },
        { en: "Portfolio link in every bio and pinned post", fr: "Lien du portfolio dans chaque bio et post épinglé" },
      ],
      note: {
        en: "LinkedIn, GitHub, Dribbble, Behance, Facebook, Instagram, X/Twitter: one identity, one link.",
        fr: "LinkedIn, GitHub, Dribbble, Behance, Facebook, Instagram, X/Twitter : une identité, un lien.",
      },
    },
    {
      title: { en: "Clean the profiles", fr: "Nettoyer les profils" },
      steps: [
        { en: "Remove old posts, dead links and unprofessional photos", fr: "Retirer les anciens posts, liens morts et photos peu professionnelles" },
        { en: "Update job titles and dates everywhere", fr: "Mettre à jour les intitulés et les dates partout" },
        { en: "Delete or archive the profiles you no longer use", fr: "Supprimer ou archiver les profils que vous n'utilisez plus" },
      ],
      note: {
        en: "A recruiter checks the profile before the portfolio. Clean it first.",
        fr: "Un recruteur vérifie le profil avant le portfolio. Nettoyez-le d'abord.",
      },
    },
    {
      title: { en: "Review loop", fr: "Boucle de relecture" },
      steps: [
        { en: "Send the link to a peer, a recruiter, a senior", fr: "Envoyer le lien à un pair, un recruteur, un senior" },
        { en: "Ask what they understood in 30 seconds", fr: "Demander ce qu'ils ont compris en 30 secondes" },
        { en: "Fix the top issue, repeat monthly", fr: "Corriger le point principal, répéter chaque mois" },
      ],
      note: {
        en: "A review is not a compliment. It is a list of what failed to land.",
        fr: "Une relecture n'est pas un compliment. C'est la liste de ce qui n'est pas passé.",
      },
    },
  ],
  rule: {
    en: "The 30-second test: a stranger opens the link. If they cannot name your role, your best project and the result, the page is not ready.",
    fr: "Le test des 30 secondes : un inconnu ouvre le lien. S'il ne peut pas nommer votre rôle, votre meilleur projet et le résultat, la page n'est pas prête.",
  },
};

export const checklist = {
  kicker: { en: "Before you publish", fr: "Avant de publier" },
  title: { en: "Six questions before you publish", fr: "Six questions avant de publier" },
  items: [
    { en: "Does every project have a result, not just a description?", fr: "Chaque projet a-t-il un résultat, pas seulement une description ?" },
    { en: "Is every link alive: demo, repository, screenshots?", fr: "Tous les liens fonctionnent-ils : démo, dépôt, captures ?" },
    { en: "Is the newest work first, with a date?", fr: "Le travail le plus récent est-il en premier, avec une date ?" },
    { en: "Can a recruiter understand it in 30 seconds?", fr: "Un recruteur comprend-il l'essentiel en 30 secondes ?" },
    { en: "Did you remove what you can't defend in an interview?", fr: "Avez-vous retiré ce que vous ne pouvez pas défendre en entretien ?" },
    { en: "Does your CV link here, and does this link back?", fr: "Votre CV renvoie-t-il ici, et l'inverse ?" },
  ],
  qrTitle: { en: "Open the portfolio on your phone", fr: "Ouvrez le portfolio sur votre téléphone" },
  qrBody: {
    en: "Every project, case study and live demo, in English and French.",
    fr: "Tous les projets, études de cas et démos en ligne, en français et en anglais.",
  },
  toTools: { en: "See all tools", fr: "Voir tous les outils" },
  restart: { en: "Back to the start", fr: "Revenir au début" },
  notes: {
    en: "Built from the case studies and repository history in this portfolio. Facts checked as of 25 November 2026.",
    fr: "Construit à partir des études de cas et de l'historique du dépôt. Faits vérifiés au 25 novembre 2026.",
  },
};
