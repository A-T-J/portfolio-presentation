import type { Text } from "./types";

export const ui = {
  siteName: { en: "Portfolio", fr: "Portfolio" },
  siteSub: { en: "Proof of work", fr: "Preuve par le travail" },
  prev: { en: "Previous", fr: "Précédent" },
  next: { en: "Next", fr: "Suivant" },
  fullscreen: { en: "Full screen", fr: "Plein écran" },
  exitFullscreen: { en: "Exit full screen", fr: "Quitter le plein écran" },
  backToRegions: { en: "All channels", fr: "Tous les canaux" },
  continue: { en: "Continue the presentation", fr: "Continuer la présentation" },
  continueShort: { en: "Continue", fr: "Continuer" },
  open: { en: "Open", fr: "Ouvrir" },
  tools: { en: "tools", fr: "outils" },
  all: { en: "All", fr: "Tous" },
  why: { en: "Why", fr: "Pourquoi" },
  knowThis: { en: "Know this", fr: "À savoir" },
  whenNumbers: { en: "When to update", fr: "Quand mettre à jour" },
  toolsTitle: { en: "Tools", fr: "Outils" },
  filterBy: { en: "Filter by category", fr: "Filtrer par catégorie" },
  keyHint: { en: "← → to move · F for full screen", fr: "← → pour avancer · F pour plein écran" },
  regionKeyHint: { en: "Esc or ← for all channels · → to continue", fr: "Échap ou ← : canaux · → : continuer" },
  slides: { en: "Slides", fr: "Diapositives" },
  goTo: { en: "Go to", fr: "Aller à" },
  language: { en: "Language", fr: "Langue" },
  source: { en: "Source", fr: "Source" },
  notFoundTitle: { en: "Page not found", fr: "Page introuvable" },
  notFoundBody: { en: "Everything is on one page.", fr: "Tout est sur une seule page." },
  notFoundLink: { en: "Go to the presentation", fr: "Aller à la présentation" },
} satisfies Record<string, Text>;

/** Shown next to the logo (and on the title slide on small screens). */
export const credits = {
  professorLabel: { en: "Professor", fr: "Professeure" },
  professor: "Dr. Ouahraoui Fatima",
  devLabel: { en: "Developer", fr: "Développeur" },
  dev: "Jafy Taha",
};

/** Slide order. The id is also the URL hash (#problem, #regions/website…). */
export const slideOrder = [
  "intro",
  "problem",
  "cv-problem",
  "method",
  "needs",
  "regions",
  "automation",
  "checklist",
] as const;

export type SlideId = (typeof slideOrder)[number];

export const slideTitles: Record<SlideId, Text> = {
  intro: { en: "Start", fr: "Début" },
  problem: { en: "The problem", fr: "Le problème" },
  "cv-problem": { en: "The CV", fr: "Le CV" },
  method: { en: "The method", fr: "La méthode" },
  needs: { en: "Which format", fr: "Quel format" },
  regions: { en: "Channels", fr: "Canaux" },
  automation: { en: "Automation", fr: "Automatisation" },
  checklist: { en: "Checklist", fr: "Check-list" },
};

export const intro = {
  kicker: { en: "Class presentation · November 2026", fr: "Présentation de cours · novembre 2026" },
  title: {
    en: "A CV is a static liability. A portfolio is a living proof of work.",
    fr: "Un CV est un passif statique. Un portfolio est une preuve vivante de votre travail.",
  },
  body: {
    en: "A CV tells. A portfolio shows. This deck explains why a CV stops the moment you send it, and how a portfolio keeps working: detailed proof, visible process and a file that updates with you.",
    fr: "Un CV raconte. Un portfolio montre. Cette présentation explique pourquoi un CV s'arrête au moment de l'envoi, et comment un portfolio continue de travailler : preuve détaillée, processus visible et dossier qui évolue avec vous.",
  },
  start: { en: "Start", fr: "Commencer" },
  jump: { en: "Go straight to the channels", fr: "Aller directement aux canaux" },
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
        en: "of CVs are rejected by applicant tracking systems before a human reads them. Keywords decide, not your work.",
        fr: "des CV sont rejetés par les logiciels de suivi des candidatures avant qu'un humain ne les lise. Les mots-clés décident, pas votre travail.",
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
      title: { en: "Start from the CV", fr: "Partir du CV" },
      body: {
        en: "List roles, dates and skills. That is the skeleton, not the site.",
        fr: "Listez les postes, les dates et les compétences. C'est la charpente, pas le site.",
      },
    },
    {
      title: { en: "Pick three projects", fr: "Choisir trois projets" },
      body: {
        en: "Keep the ones that show judgment: a trade-off, a constraint, a fix. Drop the rest.",
        fr: "Gardez ceux qui montrent votre jugement : un arbitrage, une contrainte, une correction. Écartez le reste.",
      },
    },
    {
      title: { en: "Write the case", fr: "Écrire le cas" },
      body: {
        en: "Problem, constraints, your decisions, the result. Numbers where you have them.",
        fr: "Problème, contraintes, vos décisions, le résultat. Des chiffres quand vous en avez.",
      },
    },
    {
      title: { en: "Show the proof", fr: "Montrer la preuve" },
      body: {
        en: "Live demo, repository, screenshots, metrics. A claim without a link is a rumour.",
        fr: "Démo en ligne, dépôt, captures, chiffres. Une affirmation sans lien est une rumeur.",
      },
    },
    {
      title: { en: "Keep it current", fr: "Le garder à jour" },
      body: {
        en: "Add each new project within a week. Date the page and let the CV link to it.",
        fr: "Ajoutez chaque nouveau projet dans la semaine. Datez la page et faites pointer le CV dessus.",
      },
    },
  ],
  rule: {
    en: "A CV stops the moment you send it. A portfolio keeps working: dated, linked, updated. Send the CV, link the portfolio.",
    fr: "Un CV s'arrête au moment où vous l'envoyez. Un portfolio continue de travailler : daté, lié, mis à jour. Envoyez le CV, mettez le lien du portfolio.",
  },
};

export const needs = {
  kicker: { en: "Which format", fr: "Quel format" },
  title: { en: "Which format for which need", fr: "Quel format pour quel besoin" },
  headNeed: { en: "They want to check", fr: "On veut vérifier" },
  headUse: { en: "Format", fr: "Format" },
  rows: [
    {
      need: { en: "Whether you fit the role in 30 seconds", fr: "Si vous correspondez au poste en 30 secondes" },
      use: {
        en: "CV — one page, latest role first, a link to the portfolio at the top.",
        fr: "CV — une page, dernier poste en premier, le lien du portfolio en haut.",
      },
    },
    {
      need: { en: "How you reason on a real problem", fr: "Comment vous raisonnez sur un vrai problème" },
      use: {
        en: "Case study — context, constraints, decisions, result. One page.",
        fr: "Étude de cas — contexte, contraintes, décisions, résultat. Une page.",
      },
    },
    {
      need: { en: "Whether your code runs", fr: "Si votre code tourne" },
      use: {
        en: "GitHub — pinned repositories, a README with screenshots, a live demo link.",
        fr: "GitHub — dépôts épinglés, un README avec captures, un lien vers la démo.",
      },
    },
    {
      need: { en: "What your visual work looks like", fr: "À quoi ressemble votre travail visuel" },
      use: {
        en: "Behance — 6 to 10 pieces, each with the brief and the final file.",
        fr: "Behance — 6 à 10 pièces, chacune avec le brief et le fichier final.",
      },
    },
    {
      need: { en: "How you think over months", fr: "Comment vous réfléchissez dans la durée" },
      use: {
        en: "Blog — one post per project: what broke, what you changed.",
        fr: "Blog — un article par projet : ce qui a cassé, ce que vous avez changé.",
      },
    },
    {
      need: { en: "The full story of one project", fr: "L'histoire complète d'un projet" },
      use: {
        en: "Project case study — brief, process, metrics, what you would redo.",
        fr: "Étude de cas projet — brief, process, chiffres, ce que vous referiez.",
      },
    },
    {
      need: { en: "One link with everything", fr: "Un seul lien avec tout" },
      use: {
        en: "Personal site — CV, projects and contact on a domain you own.",
        fr: "Site personnel — CV, projets et contact sur un domaine qui vous appartient.",
      },
    },
  ],
};

export const regionsSlide = {
  kicker: { en: "Channels", fr: "Canaux" },
  title: { en: "Pick the channels that prove the work", fr: "Choisissez les canaux qui prouvent le travail" },
  body: {
    en: "Each channel has a different job: the site is the hub, the repository proves the code, the network brings the visitors. Open one, then come back or continue.",
    fr: "Chaque canal a un rôle : le site est le hub, le dépôt prouve le code, le réseau amène les visiteurs. Ouvrez-en un, puis revenez ou continuez.",
  },
};

export const automation = {
  kicker: { en: "Automate", fr: "Automatiser" },
  title: { en: "Keep the portfolio alive", fr: "Gardez le portfolio vivant" },
  body: {
    en: "Short version. Three workflows so the site never goes stale.",
    fr: "Version courte. Trois flux pour que le site ne se fige jamais.",
  },
  flows: [
    {
      title: { en: "Repository watcher", fr: "Veille de dépôt" },
      steps: [
        { en: "New push to a pinned repository", fr: "Nouveau push sur un dépôt épinglé" },
        { en: "GitHub webhook to n8n", fr: "Webhook GitHub vers n8n" },
        { en: "Check README, screenshots, demo link", fr: "Vérifier le README, les captures, le lien de démo" },
        { en: "Add it to the work list", fr: "L'ajouter à la liste des projets" },
      ],
      note: {
        en: "A finished project shows up on the site without you editing a page.",
        fr: "Un projet terminé apparaît sur le site sans retoucher une page.",
      },
    },
    {
      title: { en: "Deploy watcher", fr: "Veille de déploiement" },
      steps: [
        { en: "After each deploy of the site", fr: "Après chaque déploiement du site" },
        { en: "Check status, links, demo pages", fr: "Vérifier le statut, les liens, les pages de démo" },
        { en: "Broken link or 404", fr: "Lien cassé ou 404" },
        { en: "Alert on Telegram, update the date", fr: "Alerte sur Telegram, mise à jour de la date" },
      ],
      note: {
        en: "A recruiter should never find the broken demo first.",
        fr: "Un recruteur ne doit jamais tomber sur la démo cassée en premier.",
      },
    },
    {
      title: { en: "Monthly digest", fr: "Résumé mensuel" },
      steps: [
        { en: "Commits, posts and case studies from 30 days", fr: "Commits, articles et études de cas des 30 derniers jours" },
        { en: "n8n sends them to an AI model", fr: "n8n les envoie à un modèle d'IA" },
        { en: "3-line draft for /now or LinkedIn", fr: "Brouillon de 3 lignes pour /now ou LinkedIn" },
        { en: "You edit and publish", fr: "Vous relisez et publiez" },
      ],
      note: {
        en: "One 15-minute pass a month keeps the site credible.",
        fr: "Un passage de 15 minutes par mois suffit à garder le site crédible.",
      },
    },
  ],
  costs: {
    en: "Cost: n8n self-hosted is free (cloud from about $20 a month). GitHub Actions is free on public repositories. UptimeRobot checks 50 monitors for free. The digest costs one hour a month.",
    fr: "Coût : n8n auto-hébergé est gratuit (cloud à partir d'environ 20 $ par mois). GitHub Actions est gratuit sur les dépôts publics. UptimeRobot surveille 50 sites gratuitement. Le résumé coûte une heure par mois.",
  },
  aiRule: {
    en: "Rule for AI: let it draft the changelog and the digest. It never invents a project, a metric or a date.",
    fr: "Règle pour l'IA : lui faire rédiger le changelog et le résumé. Jamais inventer un projet, un chiffre ou une date.",
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
  toRegions: { en: "See all channels", fr: "Voir tous les canaux" },
  restart: { en: "Back to the start", fr: "Revenir au début" },
  notes: {
    en: "Built from the case studies and repository history in this portfolio. Facts checked as of 25 November 2026.",
    fr: "Construit à partir des études de cas et de l'historique du dépôt. Faits vérifiés au 25 novembre 2026.",
  },
};
