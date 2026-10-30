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
    usage: "Accueil : dunes de Port Waikato (Nouvelle-Zélande)",
    author: "Petr Vyšohlíd",
    license: "Licence Unsplash",
    licenseUrl: UNSPLASH,
    sourceUrl: "https://unsplash.com/photos/9fqwGqGLUxc",
  },
  {
    usage: "L'agence : boussole",
    author: "Chris Lawton",
    license: "Licence Unsplash",
    licenseUrl: UNSPLASH,
    sourceUrl: "https://unsplash.com/photos/4ozvhBh2LoY",
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
    usage: "Article : Croisières",
    author: "Corey Seeman",
    license: "CC BY-SA 4.0",
    licenseUrl: CC_BY_SA_4,
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Icon_of_the_Seas_Puerto_Rico_2025_(cropped).jpg",
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
