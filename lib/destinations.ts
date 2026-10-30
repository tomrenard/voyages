import coupAustralie from "@/public/images/coup-australie.jpg";
import coupNewYork from "@/public/images/coup-new-york.jpg";
import coupNil from "@/public/images/coup-nil.jpg";
import coupPolynesie from "@/public/images/coup-polynesie.jpg";
import coupSicile from "@/public/images/coup-sicile.jpg";
import coupVietnam from "@/public/images/coup-vietnam.jpg";
import destGrece from "@/public/images/dest-grece.jpg";
import destJapon from "@/public/images/dest-japon.jpg";
import destMaurice from "@/public/images/dest-maurice.jpg";
import destSeychelles from "@/public/images/dest-seychelles.jpg";
import destThailande from "@/public/images/dest-thailande.jpg";
import type { StaticImageData } from "next/image";
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
  image: StaticImageData;
  imageAlt: string;
};

export const coupsDeCoeur: Destination[] = [
  {
    slug: "new-york",
    title: "New York",
    blurb:
      "La ville qui ne dort jamais : gratte-ciel vertigineux, quartiers bouillonnants et énergie unique. L'escapade urbaine par excellence.",
    image: coupNewYork,
    imageAlt:
      "Les gratte-ciel de Lower Manhattan et le One World Trade Center au soleil couchant, vus depuis l'Hudson",
  },
  {
    slug: "sicile-orientale",
    title: "Sicile orientale",
    blurb:
      "Entre l'Etna, les villages baroques de Taormine et Syracuse et une cuisine généreuse : la Méditerranée dans ce qu'elle a de plus authentique.",
    image: coupSicile,
    imageAlt:
      "Le théâtre antique de Taormine avec l'Etna enneigé en arrière-plan, en Sicile",
  },
  {
    slug: "vietnam",
    title: "Vietnam",
    blurb:
      "Des rizières en terrasse à la baie d'Halong, un voyage haut en couleurs au cœur de paysages spectaculaires et d'une culture chaleureuse.",
    image: coupVietnam,
    imageAlt:
      "Les îlots karstiques de la baie d'Halong vus du ciel, au Vietnam",
  },
  {
    slug: "australie",
    title: "Australie",
    blurb:
      "Grands espaces, faune fascinante et villes au bord de l'océan : un voyage au long cours pour les amoureux de nature et d'aventure.",
    image: coupAustralie,
    imageAlt:
      "Le monolithe d'Uluru au soleil couchant, au cœur du désert australien",
  },
  {
    slug: "polynesie-francaise",
    title: "Polynésie française",
    blurb:
      "Lagons turquoise, bungalows sur pilotis et douceur de vivre : la destination de rêve pour un voyage de noces inoubliable.",
    image: coupPolynesie,
    imageAlt:
      "Le lagon de Bora Bora, ses bungalows sur pilotis et le mont Otemanu, en Polynésie française",
  },
  {
    slug: "croisiere-sur-le-nil",
    title: "Croisière sur le Nil",
    blurb:
      "Remontez le fil de l'Histoire entre temples millénaires et felouques, au rythme paisible du plus célèbre fleuve d'Égypte.",
    image: coupNil,
    imageAlt: "Felouques naviguant sur le Nil au coucher du soleil, à Assouan",
  },
];

/**
 * Additional destinations with a dedicated landing page, beyond the six
 * curated coups de cœur. Same shape; not shown in the navbar/homepage
 * highlights, but reachable via internal links, sitemap and redirects.
 */
export const autresDestinations: Destination[] = [
  {
    slug: "ile-maurice",
    title: "Île Maurice",
    blurb:
      "Plages de sable blanc, lagons émeraude et douceur créole : l'île de l'hospitalité par excellence, idéale en séjour comme en voyage de noces.",
    image: destMaurice,
    imageAlt:
      "Le Morne Brabant et sa plage dans la lumière du matin, à l'île Maurice",
  },
  {
    slug: "seychelles",
    title: "Seychelles",
    blurb:
      "Rochers de granit sculptés, eaux cristallines et nature préservée : un archipel hors du temps pour les amoureux de plages parfaites.",
    image: destSeychelles,
    imageAlt:
      "Rochers de granit, palmiers et eau turquoise à La Digue, aux Seychelles",
  },
  {
    slug: "thailande",
    title: "Thaïlande",
    blurb:
      "Temples dorés, cuisine de rue légendaire et plages bordées de falaises karstiques : le pays du sourire réunit culture et farniente.",
    image: destThailande,
    imageAlt:
      "Un bateau à longue queue entre les falaises karstiques du lac Cheow Lan, parc national de Khao Sok, en Thaïlande",
  },
  {
    slug: "japon",
    title: "Japon",
    blurb:
      "Temples de Kyoto, néons de Tokyo, auberges traditionnelles et sources chaudes : un pays fascinant où tradition et modernité se côtoient à chaque coin de rue.",
    image: destJapon,
    imageAlt:
      "La pagode du temple Kiyomizu-dera et les cerisiers en fleurs au coucher du soleil, à Kyoto",
  },
  {
    slug: "grece",
    title: "Grèce",
    blurb:
      "Villages blancs des Cyclades, criques turquoise et sites antiques : la Grèce se vit d'île en île, entre baignades, tavernes et histoire.",
    image: destGrece,
    imageAlt:
      "Le monastère de la Sainte-Trinité perché sur un rocher des Météores, en Grèce",
  },
];

/** Every destination with a landing page (/destinations/[slug]). */
export const allDestinations: Destination[] = [
  ...coupsDeCoeur,
  ...autresDestinations,
];
