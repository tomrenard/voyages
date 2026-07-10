/**
 * Photo attributions. The site uses freely-licensed images from Wikimedia
 * Commons; CC-BY / CC-BY-SA / FAL licenses require visible credit, surfaced on
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
const FAL = "https://artlibre.org/licence/lal/en/";

export const photoCredits: PhotoCredit[] = [
  {
    usage: "Coup de cœur — New York",
    author: "Dllu",
    license: "CC BY-SA 4.0",
    licenseUrl: CC_BY_SA_4,
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_(cropped).jpg",
  },
  {
    usage: "Coup de cœur — Sicile orientale",
    author: "Carsten Steger",
    license: "CC BY-SA 4.0",
    licenseUrl: CC_BY_SA_4,
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Aerial_image_of_the_coast_of_Taormina_(view_from_the_southeast).jpg",
  },
  {
    usage: "Coup de cœur — Vietnam",
    author: "Taewangkorea",
    license: "CC BY-SA 4.0",
    licenseUrl: CC_BY_SA_4,
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Ha_Long_Bay_in_2019.jpg",
  },
  {
    usage: "Coup de cœur — Australie",
    author: "Ek2030372672",
    license: "CC BY-SA 4.0",
    licenseUrl: CC_BY_SA_4,
    sourceUrl: "https://commons.wikimedia.org/wiki/File:ULURU.jpg",
  },
  {
    usage: "Coup de cœur — Polynésie française",
    author: "Daniel Julie",
    license: "CC BY 2.0",
    licenseUrl: CC_BY_2,
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:DSC00042_Polyn%C3%A9sia_Moor%C3%A9a_Island_Motu_Mo%C3%A9a_Lagoon_and_transportation_Boat_(8076082190).jpg",
  },
  {
    usage: "Coup de cœur — Croisière sur le Nil",
    author: "Marc Ryckaert (MJJR)",
    license: "CC BY 3.0",
    licenseUrl: CC_BY_3,
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Felucca_R02.jpg",
  },
  {
    usage: "Destination — Île Maurice",
    author: "dronepicr",
    license: "CC BY 2.0",
    licenseUrl: CC_BY_2,
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Le_Morne_Beach_with_Le_Morne_Brabant_Mountain_in_the_background,_Mauritius_(53698223315).jpg",
  },
  {
    usage: "Destination — Seychelles",
    author: "Norbert Nagel",
    license: "CC BY-SA 4.0",
    licenseUrl: CC_BY_SA_4,
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Anse_Source_d%27Argent_-_La_Digue_-_Seychelles_-_02.jpg",
  },
  {
    usage: "Destination — Thaïlande",
    author: "kallerna",
    license: "CC BY-SA 3.0",
    licenseUrl: CC_BY_SA_3,
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Railay_Beach_5.jpg",
  },
  {
    usage: "Article — Seychelles",
    author: "A.Savin",
    license: "Free Art License",
    licenseUrl: FAL,
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:La_Digue_asv2024-10_img22_Union_Estate.jpg",
  },
  {
    usage: "Article — Croisières",
    author: "Corey Seeman",
    license: "CC BY-SA 4.0",
    licenseUrl: CC_BY_SA_4,
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Icon_of_the_Seas_Puerto_Rico_2025_(cropped).jpg",
  },
  {
    usage: "Article — Voyage de noces",
    author: "TomasEE",
    license: "CC BY 3.0",
    licenseUrl: CC_BY_3,
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Oia_sunset_-_panoramio_(2).jpg",
  },
  {
    usage: "Article — Week-ends en Europe",
    author: "Moyan Brenn",
    license: "CC BY 2.0",
    licenseUrl: CC_BY_2,
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Prague_(6365119737).jpg",
  },
  {
    usage: "Galerie — Serengeti",
    author: "Mario Falcetti",
    license: "CC BY 4.0",
    licenseUrl: CC_BY_4,
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Tanzania-_Serengeti_National_Park-_elefante.jpg",
  },
  {
    usage: "Galerie — Machu Picchu",
    author: "Draceane",
    license: "CC BY-SA 4.0",
    licenseUrl: CC_BY_SA_4,
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Machu_Picchu,_2023_(012).jpg",
  },
];
