/**
 * Véronique's hand-picked favourite destinations ("Nos coups de cœur").
 * Single source of truth — consumed by the navbar, the homepage section and
 * the /nos-coups-de-coeur page, so the list is never duplicated.
 *
 * Photos are freely-licensed (Wikimedia Commons) — see CREDITS.md for
 * attribution. Swap for the agency's own photography when available.
 */

export type Destination = {
  slug: string;
  title: string;
  blurb: string;
  image: string;
  imageAlt: string;
};

export const coupsDeCoeur: Destination[] = [
  {
    slug: "new-york",
    title: "New York",
    blurb:
      "La ville qui ne dort jamais : gratte-ciel vertigineux, quartiers bouillonnants et énergie unique. L'escapade urbaine par excellence.",
    image: "/images/coup-new-york.jpg",
    imageAlt:
      "L'Empire State Building et les gratte-ciel de New York au coucher du soleil",
  },
  {
    slug: "sicile-orientale",
    title: "Sicile orientale",
    blurb:
      "Entre l'Etna, les villages baroques de Taormine et Syracuse et une cuisine généreuse : la Méditerranée dans ce qu'elle a de plus authentique.",
    image: "/images/coup-sicile.jpg",
    imageAlt:
      "Vue aérienne de la côte de Taormine et de la mer, en Sicile orientale",
  },
  {
    slug: "vietnam",
    title: "Vietnam",
    blurb:
      "Des rizières en terrasse à la baie d'Halong, un voyage haut en couleurs au cœur de paysages spectaculaires et d'une culture chaleureuse.",
    image: "/images/coup-vietnam.jpg",
    imageAlt:
      "Les pitons karstiques de la baie d'Halong émergeant des eaux émeraude, au Vietnam",
  },
  {
    slug: "australie",
    title: "Australie",
    blurb:
      "Grands espaces, faune fascinante et villes au bord de l'océan : un voyage au long cours pour les amoureux de nature et d'aventure.",
    image: "/images/coup-australie.jpg",
    imageAlt: "Le monolithe d'Uluru au cœur du désert australien",
  },
  {
    slug: "polynesie-francaise",
    title: "Polynésie française",
    blurb:
      "Lagons turquoise, bungalows sur pilotis et douceur de vivre : la destination de rêve pour un voyage de noces inoubliable.",
    image: "/images/coup-polynesie.jpg",
    imageAlt:
      "Lagon turquoise et pirogue traditionnelle devant les montagnes de Moorea, en Polynésie française",
  },
  {
    slug: "croisiere-sur-le-nil",
    title: "Croisière sur le Nil",
    blurb:
      "Remontez le fil de l'Histoire entre temples millénaires et felouques, au rythme paisible du plus célèbre fleuve d'Égypte.",
    image: "/images/coup-nil.jpg",
    imageAlt: "Felouque traditionnelle naviguant à la voile sur le Nil",
  },
];
