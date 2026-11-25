import type { ToolGroup } from "../types";

export const domain: ToolGroup = {
  id: "domain",
  code: "DOMAIN",
  name: { en: "Domain", fr: "Domaine" },
  tagline: {
    en: "The address you own and put on the CV.",
    fr: "L'adresse que vous possédez et inscrivez sur le CV.",
  },
  why: {
    en: "A domain is the one asset no platform can take away. It survives job changes, free-tier changes and rebrands, and it is the shortest link you can print on a CV.",
    fr: "Un domaine est le seul actif qu'aucune plateforme ne peut vous retirer. Il survit aux changements de poste, aux changements d'offre gratuite et aux refontes, et c'est le lien le plus court imprimable sur un CV.",
  },
  facts: [
    {
      en: "Prefer first name + last name, or a short professional alias. Avoid hyphens and numbers.",
      fr: "Privilégiez prénom + nom, ou un alias professionnel court. Évitez les tirets et les chiffres.",
    },
    {
      en: ".com, .dev or .fr are easy to say on the phone and to defend in an interview.",
      fr: ".com, .dev ou .fr se disent facilement au téléphone et se défendent en entretien.",
    },
    {
      en: "Keep the registrar and the DNS in one account you control, with two-factor authentication.",
      fr: "Gardez le registraire et le DNS dans un seul compte que vous contrôlez, avec la double authentification.",
    },
    {
      en: "Turn on auto-renew. An expired domain breaks every link on the CV at once.",
      fr: "Activez le renouvellement automatique. Un domaine expiré casse d'un coup tous les liens du CV.",
    },
  ],
  releases: [
    {
      what: { en: "Renewal", fr: "Renouvellement" },
      when: { en: "Every year, auto-renew on", fr: "Chaque année, renouvellement automatique" },
      source: "1x/year",
    },
    {
      what: { en: "DNS change", fr: "Changement DNS" },
      when: { en: "Only when the host changes", fr: "Uniquement en cas de changement d'hébergeur" },
      source: "rare",
    },
    {
      what: { en: "Contact details", fr: "Coordonnées" },
      when: { en: "When they change", fr: "En cas de changement" },
      source: "as needed",
    },
  ],
  tools: [
    {
      name: "Cloudflare Domains",
      url: "https://domains.cloudflare.com",
      what: {
        en: "Registrar at wholesale price, with DNS in the same dashboard.",
        fr: "Registraire au prix coûtant, avec le DNS dans le même tableau de bord.",
      },
      why: {
        en: "No upsells at checkout and one place to manage the domain and the DNS.",
        fr: "Aucune vente forcée au paiement, et un seul endroit pour gérer le domaine et le DNS.",
      },
    },
    {
      name: "Namecheap",
      url: "https://www.namecheap.com",
      what: {
        en: "Classic registrar with cheap first-year prices and free WhoisGuard.",
        fr: "Registraire classique, premier prix attractif et WhoisGuard inclus.",
      },
      why: {
        en: "A simple fallback when Cloudflare does not sell the extension you want.",
        fr: "Une solution de repli simple quand Cloudflare ne vend pas l'extension voulue.",
      },
    },
  ],
};
