import type { ToolGroup } from "../types";

export const domain: ToolGroup = {
  id: "domain",
  code: "DNS",
  featured: false,
  name: { en: "Domain", fr: "Domaine" },
  tagline: {
    en: "The address you keep when the host, the job and the design change.",
    fr: "L'adresse que vous gardez quand l'hébergeur, le poste et le design changent.",
  },
  why: {
    en: "A domain is the one asset no platform can revoke. It survives a job change, a rebrand and the closure of whichever host you started on. Buy it before you need it, turn on auto-renew, and keep the DNS records where you can find them.",
    fr: "Un domaine est le seul actif qu'aucune plateforme ne peut vous retirer. Il survit à un changement de poste, à un changement de nom et à la fermeture de l'hébergeur avec lequel vous avez commencé. Achetez-le avant d'en avoir besoin, activez le renouvellement automatique et gardez les enregistrements DNS à portée de main.",
  },
  facts: [
    {
      en: "Your name may already be taken in .com. A short .dev or .fr variant still reads as you.",
      fr: "Votre nom est peut-être déjà pris en .com. Une variante courte en .dev ou en .fr vous ressemble toujours.",
    },
    {
      en: "The first year and the renewal do not always cost the same. Read the renewal price before you pay.",
      fr: "La première année et le renouvellement n'ont pas toujours le même prix. Vérifiez le tarif de renouvellement avant de payer.",
    },
    {
      en: "Turn on auto-renew and keep a calendar reminder. An expired domain can be sold to someone else.",
      fr: "Activez le renouvellement automatique et gardez un rappel au calendrier. Un domaine expiré peut être vendu à quelqu'un d'autre.",
    },
    {
      en: "Point the domain at your host with a DNS record, then enable HTTPS there. The registrar only holds the name.",
      fr: "Reliez le domaine à votre hébergeur avec un enregistrement DNS, puis activez HTTPS chez l'hébergeur. Le registrar ne fait que réserver le nom.",
    },
  ],
  releases: [
    {
      what: { en: "Domain registered", fr: "Domaine réservé" },
      when: { en: "Before the first application", fr: "Avant la première candidature" },
      source: "Namecheap",
    },
    {
      what: { en: "DNS pointed to the host", fr: "DNS relié à l'hébergeur" },
      when: { en: "The day the site goes live", fr: "Le jour de la mise en ligne" },
      source: "Cloudflare",
    },
    {
      what: { en: "Renewal reminder set", fr: "Rappel de renouvellement créé" },
      when: { en: "One month before expiry", fr: "Un mois avant l'expiration" },
      source: "Calendar",
    },
    {
      what: { en: "Login and recovery email checked", fr: "Accès et e-mail de secours vérifiés" },
      when: { en: "Once a year", fr: "Une fois par an" },
      source: "You",
    },
  ],
  tools: [
    {
      name: "Cloudflare Domains",
      url: "https://domains.cloudflare.com",
      what: {
        en: "At-cost domain registration with free DNS and no upsell.",
        fr: "Enregistrement de domaine au prix coûtant, DNS gratuit et sans options superflues.",
      },
      why: {
        en: "Renewals at cost, DNS in the same account as the site, no checkout upsell.",
        fr: "Des renouvellements au prix coûtant, le DNS dans le même compte que le site, aucune option ajoutée au paiement.",
      },
    },
    {
      name: "Namecheap",
      url: "https://www.namecheap.com",
      what: {
        en: "Registrar with cheap first-year prices and free WhoisGuard.",
        fr: "Bureau d'enregistrement aux prix d'appel et WhoisGuard offert.",
      },
      why: {
        en: "A cheap first year while you are starting out; you can keep or move the name later.",
        fr: "Une première année bon marché quand vous débutez ; vous pourrez garder ou déplacer le nom ensuite.",
      },
    },
  ],
};
