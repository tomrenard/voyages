/**
 * Single source of truth for site-wide constants.
 * Avoids duplicating the domain, contact details and social links across files.
 */

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://www.revesdevoyages.com";

export const siteConfig = {
  name: "Rêves de Voyages",
  legalName: "GUYOMARD",
  url: siteUrl,
  description:
    "Agence de voyages indépendante spécialiste du sur-mesure : séjours, circuits, croisières, voyages de noces et week-ends. Conseil personnalisé, sur rendez-vous, par téléphone ou en visio.",
  phone: "02 23 50 18 52",
  phoneE164: "+33223501852",
  email: "veronique.guyomard@revesdevoyages.fr",
  advisor: "Véronique",
  foundedYear: 2006,
  // Registered office — shown only on the legal pages (no walk-in office).
  legal: {
    address: "25 Pl. Marcel Pagnol",
    postalCode: "35170",
    city: "Bruz",
    country: "FR",
    siren: "484 575 998",
    siret: "484 575 998 00022",
    rcs: "RCS Rennes 484 575 998",
    ape: "79.11Z",
    // TODO(Véronique): immatriculation Atout France obligatoire pour une agence de voyages.
    atoutFrance: "IM035XXXXXX",
    // TODO(Véronique): garantie financière et RC professionnelle.
    guarantee: "TODO — garantie financière (APST ou équivalent)",
    insurance: "TODO — assurance responsabilité civile professionnelle",
  },
  social: {
    instagram: "https://www.instagram.com/revesdevoyages_bruz/",
    facebook: "https://www.facebook.com/revesdevoyages",
  },
} as const;
