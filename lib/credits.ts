/**
 * Photo attributions. The site uses freely-licensed images from Unsplash and
 * Wikimedia Commons; CC-BY / CC-BY-SA / FAL licenses require visible credit, surfaced on
 * the /credits-photos page.
 */

export type PhotoCredit = {
  usage: string;
  author: string;
  license: string;
  licenseUrl: string;
  sourceUrl: string;
};

const CC_BY_2 = "https://creativecommons.org/licenses/by/2.0/";
const CC_BY_3 = "https://creativecommons.org/licenses/by/3.0/";
const CC_BY_4 = "https://creativecommons.org/licenses/by/4.0/";
const CC_BY_SA_3 = "https://creativecommons.org/licenses/by-sa/3.0/";
const CC_BY_SA_4 = "https://creativecommons.org/licenses/by-sa/4.0/";
// Unsplash photos need no credit; listed anyway, as a courtesy.
const UNSPLASH = "https://unsplash.com/license";
const FAL = "https://artlibre.org/licence/lal/en/";

export const photoCredits: PhotoCredit[] = [
  {
    usage: "Contact et devis (clavier d'ordinateur)",
    author: "Glenn Carstens-Peters",
    license: "Licence Unsplash",
    licenseUrl: UNSPLASH,
    sourceUrl: "https://unsplash.com/photos/npxXWgQ33ZQ",
  },
  {
    usage: "FAQ et plan du site (barque, lac de Braies)",
    author: "Pietro De Grandi",
    license: "Licence Unsplash",
    licenseUrl: UNSPLASH,
    sourceUrl: "https://unsplash.com/photos/6U4wogjLArk",
  },
  {
    usage: "Avis clients",
    author: "Brooke Cagle",
    license: "Licence Unsplash",
    licenseUrl: UNSPLASH,
    sourceUrl: "https://unsplash.com/photos/g1Kr4Ozfoac",
  },
  {
    usage: "Actualités (plume)",
    author: "Aaron Burden",
    license: "Licence Unsplash",
    licenseUrl: UNSPLASH,
    sourceUrl: "https://unsplash.com/photos/y02jEX_B0O0",
  },
  {
    usage: "Croisières (navire dans la brume, Alaska)",
    author: "Robert Thiemann",
    license: "Licence Unsplash",
    licenseUrl: UNSPLASH,
    sourceUrl: "https://unsplash.com/photos/nyV8YOotRXI",
  },
  {
    usage: "Circuits (lac de Braies, Italie)",
    author: "Pietro De Grandi",
    license: "Licence Unsplash",
    licenseUrl: UNSPLASH,
    sourceUrl: "https://unsplash.com/photos/T7K4aEPoGGk",
  },
  {
    usage: "Week-end (Tower Bridge, Londres)",
    author: "Benjamin Davies",
    license: "Licence Unsplash",
    licenseUrl: UNSPLASH,
    sourceUrl: "https://unsplash.com/photos/Oja2ty_9ZLM",
  },
  {
    usage: "Voyage sur mesure (piscine à débordement, Péloponnèse)",
    author: "DD GR",
    license: "Licence Unsplash",
    licenseUrl: UNSPLASH,
    sourceUrl: "https://unsplash.com/photos/q398gpsqxeY",
  },
  {
    usage: "Séjours (villas sur pilotis, Maldives)",
    author: "Upgraded Points",
    license: "Licence Unsplash",
    licenseUrl: UNSPLASH,
    sourceUrl: "https://unsplash.com/photos/AjBzl6gdCL0",
  },
  {
    usage: "Article croisières (pont d'un navire, Caraïbes)",
    author: "AO NURA",
    license: "Licence Unsplash",
    licenseUrl: UNSPLASH,
    sourceUrl: "https://unsplash.com/photos/-ybBN9gaERY",
  },
  {
    usage: "Galerie (Oahu, Hawaï)",
    author: "Sean Oulashin",
    license: "Licence Unsplash",
    licenseUrl: UNSPLASH,
    sourceUrl: "https://unsplash.com/photos/KMn4VEeEPR8",
  },
  {
    usage: "Galerie (lac Moraine, Canada)",
    author: "James Wheeler",
    license: "Licence Unsplash",
    licenseUrl: UNSPLASH,
    sourceUrl: "https://unsplash.com/photos/AFC0XvICMgs",
  },
  {
    usage: "Galerie (Dubaï)",
    author: "Nahel Hadi",
    license: "Licence Unsplash",
    licenseUrl: UNSPLASH,
    sourceUrl: "https://unsplash.com/photos/v06n2uxb-Fs",
  },
  {
    usage: "Galerie (îles Perhentian, Malaisie)",
    author: "Muhammad Syahir Othman",
    license: "Licence Unsplash",
    licenseUrl: UNSPLASH,
    sourceUrl: "https://unsplash.com/photos/woymfMHJjuM",
  },
  {
    usage: "L'agence (aile d'avion au-dessus des nuages)",
    author: "Johny Goerend",
    license: "Licence Unsplash",
    licenseUrl: UNSPLASH,
    sourceUrl: "https://unsplash.com/photos/KB9r_hTzyeQ",
  },
  {
    usage: "Nos coups de cœur (Horseshoe Bend, Arizona)",
    author: "Fabrizio Coco",
    license: "Licence Unsplash",
    licenseUrl: UNSPLASH,
    sourceUrl: "https://unsplash.com/photos/9H2T9Yh45RM",
  },
  {
    usage: "Galerie et page Rennes (Carpates)",
    author: "R_ INVSCIMENTO",
    license: "Licence Unsplash",
    licenseUrl: UNSPLASH,
    sourceUrl: "https://unsplash.com/photos/Nuy4BBPz83A",
  },
  {
    usage: "L'agence (Pura Ulun Danu Bratan, Bali)",
    author: "Santhosh Mocharla",
    license: "Licence Unsplash",
    licenseUrl: UNSPLASH,
    sourceUrl: "https://unsplash.com/photos/tMkp36b1qRk",
  },
  {
    usage: "Croisières (Geirangerfjord, Norvège)",
    author: "Bernhard",
    license: "Licence Unsplash",
    licenseUrl: UNSPLASH,
    sourceUrl: "https://unsplash.com/photos/nOqp5DLsdcA",
  },
  {
    usage: "Voyage sur mesure (Manarola, Italie)",
    author: "Jack Ward",
    license: "Licence Unsplash",
    licenseUrl: UNSPLASH,
    sourceUrl: "https://unsplash.com/photos/rknrvCrfS1k",
  },
  {
    usage: "Accueil : dunes de Port Waikato (Nouvelle-Zélande)",
    author: "Petr Vyšohlíd",
    license: "Licence Unsplash",
    licenseUrl: UNSPLASH,
    sourceUrl: "https://unsplash.com/photos/9fqwGqGLUxc",
  },
  {
    usage: "Accueil, section agence : boussole",
    author: "Chris Lawton",
    license: "Licence Unsplash",
    licenseUrl: UNSPLASH,
    sourceUrl: "https://unsplash.com/photos/4ozvhBh2LoY",
  },
  {
    usage: "Article : Combien coûte un voyage sur mesure",
    author: "Meg von Haartman",
    license: "Licence Unsplash",
    licenseUrl: UNSPLASH,
    sourceUrl: "https://unsplash.com/photos/CUzSnBTrtwg",
  },
  {
    usage: "Coup de cœur : New York",
    author: "Mike Chavarri",
    license: "Licence Unsplash",
    licenseUrl: UNSPLASH,
    sourceUrl: "https://unsplash.com/photos/kZokA2VTKn4",
  },
  {
    usage: "Coup de cœur : Sicile orientale",
    author: "Casey Lovegrove",
    license: "Licence Unsplash",
    licenseUrl: UNSPLASH,
    sourceUrl: "https://unsplash.com/photos/1j9tiYENp6k",
  },
  {
    usage: "Coup de cœur : Vietnam",
    author: "Marina Lobato",
    license: "Licence Unsplash",
    licenseUrl: UNSPLASH,
    sourceUrl: "https://unsplash.com/photos/kG7pOXbBfNs",
  },
  {
    usage: "Coup de cœur : Australie",
    author: "Ondrej Machart",
    license: "Licence Unsplash",
    licenseUrl: UNSPLASH,
    sourceUrl: "https://unsplash.com/photos/WEtXkeIlMoM",
  },
  {
    usage: "Coup de cœur : Polynésie française",
    author: "Fabien Bellanger",
    license: "Licence Unsplash",
    licenseUrl: UNSPLASH,
    sourceUrl: "https://unsplash.com/photos/pdjx5z2fpr0",
  },
  {
    usage: "Coup de cœur : Croisière sur le Nil",
    author: "Jean Pierre Cabáni",
    license: "Licence Unsplash",
    licenseUrl: UNSPLASH,
    sourceUrl: "https://unsplash.com/photos/aeHTysv8kO4",
  },
  {
    usage: "Destination : Île Maurice",
    author: "Focus Photography Mauritius",
    license: "Licence Unsplash",
    licenseUrl: UNSPLASH,
    sourceUrl: "https://unsplash.com/photos/wVuRAom5v6U",
  },
  {
    usage: "Destination : Seychelles",
    author: "Christian Cacciamani",
    license: "Licence Unsplash",
    licenseUrl: UNSPLASH,
    sourceUrl: "https://unsplash.com/photos/jPmurJKSL_0",
  },
  {
    usage: "Destination : Thaïlande",
    author: "Robin Noguier",
    license: "Licence Unsplash",
    licenseUrl: UNSPLASH,
    sourceUrl: "https://unsplash.com/photos/sydwCr54rf0",
  },
  {
    usage: "Destination : Japon",
    author: "Nathalie Lays",
    license: "Licence Unsplash",
    licenseUrl: UNSPLASH,
    sourceUrl: "https://unsplash.com/photos/4Q-Rbu8Ipcg",
  },
  {
    usage: "Destination : Grèce",
    author: "Jason Mavrommatis",
    license: "Licence Unsplash",
    licenseUrl: UNSPLASH,
    sourceUrl: "https://unsplash.com/photos/nk3YzS10bLU",
  },
  {
    usage: "Article : Soleil en hiver",
    author: "KoS",
    license: "CC BY-SA 3.0",
    licenseUrl: CC_BY_SA_3,
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Plage_Sainte_Anne.JPG",
  },
  {
    usage: "Article : Seychelles",
    author: "A.Savin",
    license: "Free Art License",
    licenseUrl: FAL,
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:La_Digue_asv2024-10_img22_Union_Estate.jpg",
  },
  {
    usage: "Article : Voyage de noces",
    author: "TomasEE",
    license: "CC BY 3.0",
    licenseUrl: CC_BY_3,
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Oia_sunset_-_panoramio_(2).jpg",
  },
  {
    usage: "Article : Week-ends en Europe",
    author: "Moyan Brenn",
    license: "CC BY 2.0",
    licenseUrl: CC_BY_2,
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Prague_(6365119737).jpg",
  },
  {
    usage: "Galerie : Serengeti",
    author: "Mario Falcetti",
    license: "CC BY 4.0",
    licenseUrl: CC_BY_4,
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Tanzania-_Serengeti_National_Park-_elefante.jpg",
  },
  {
    usage: "Galerie : Machu Picchu",
    author: "Draceane",
    license: "CC BY-SA 4.0",
    licenseUrl: CC_BY_SA_4,
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Machu_Picchu,_2023_(012).jpg",
  },
];
