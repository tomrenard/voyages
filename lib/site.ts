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
    capital: "7 000 €",
    siren: "484 575 998",
    siret: "484 575 998 00022",
    rcs: "RCS Rennes 484 575 998",
    ape: "79.11Z",
    atoutFrance: "IM035100033",
    guarantee: "APST (Association Professionnelle de Solidarité du Tourisme), Paris",
    insurance: "MMA — contrat n° 129590224",
    // Médiation de la consommation (art. L612-1 Code de la consommation).
    mediator: {
      name: "MTV Médiation Tourisme Voyage",
      address: "BP 80 303 — 75823 Paris Cedex 17",
      url: "https://www.mtv.travel",
    },
  },
  social: {
    instagram: "https://www.instagram.com/revesdevoyages_bruz/",
    facebook: "https://www.facebook.com/revesdevoyages",
    // TODO: replace with the Google Business Profile review short-link
    // (g.page/r/…/review) once the profile is claimed — search link until then.
    googleReviews:
      "https://www.google.com/maps/search/?api=1&query=R%C3%AAves+de+Voyages+Bruz",
  },
} as const;
