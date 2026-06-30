import { siteConfig } from "@/lib/site";

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  /** ISO date (YYYY-MM-DD) */
  date: string;
  author: string;
  category: string;
  image: string;
  imageAlt: string;
  readingTime: string;
  content: ArticleBlock[];
};

export const articles: Article[] = [
  {
    slug: "quand-partir-aux-seychelles",
    title: "Quand partir aux Seychelles ? Le guide saison par saison",
    excerpt:
      "Lagons turquoise, plages de sable blanc et nature préservée : découvrez la meilleure période pour profiter pleinement de l'archipel seychellois.",
    date: "2026-06-12",
    author: siteConfig.advisor,
    category: "Séjours",
    image: "/images/sejour.jpg",
    imageAlt:
      "Plage de sable blanc bordée de cocotiers et d'un lagon turquoise aux Seychelles",
    readingTime: "5 min",
    content: [
      {
        type: "p",
        text: "Les Seychelles font partie de ces destinations qui se savourent toute l'année. Situées à proximité de l'équateur, les 115 îles de l'archipel bénéficient d'un climat tropical clément, avec des températures qui oscillent entre 24 et 32 °C quelle que soit la saison. Reste que le choix de la période influence beaucoup l'ambiance de votre séjour : ensoleillement, force du vent, fréquentation et tarifs varient sensiblement au fil des mois.",
      },
      {
        type: "h2",
        text: "D'avril à mai et d'octobre à novembre : les saisons idéales",
      },
      {
        type: "p",
        text: "Ces deux intersaisons constituent la meilleure fenêtre pour découvrir les Seychelles. Les alizés faiblissent, la mer est calme et limpide, et l'humidité reste modérée. C'est la période rêvée pour la plongée, le snorkeling et les longues journées de farniente sur les plages d'Anse Lazio ou d'Anse Source d'Argent.",
      },
      {
        type: "h2",
        text: "De mai à septembre : la saison sèche et fraîche",
      },
      {
        type: "p",
        text: "Portée par l'alizé du sud-est, cette période est plus venteuse et légèrement plus fraîche. Elle ravira les amateurs de randonnée et de voile, ainsi que les voyageurs en quête de prix plus doux. Les plages exposées au nord-ouest restent abritées et parfaitement baignables.",
      },
      {
        type: "h2",
        text: "De décembre à mars : chaleur et nature luxuriante",
      },
      {
        type: "p",
        text: "C'est la saison la plus chaude et la plus humide, ponctuée d'averses tropicales souvent brèves. La végétation est éclatante et les fonds marins offrent une visibilité exceptionnelle entre deux ondées. Une période parfaite pour les couples en quête d'intimité, la fréquentation étant plus discrète.",
      },
      {
        type: "h2",
        text: "Nos conseils pour composer votre séjour",
      },
      {
        type: "ul",
        items: [
          "Combinez plusieurs îles — Mahé, Praslin et La Digue — pour varier les paysages et les ambiances.",
          "Réservez tôt pour les périodes de fêtes et les intersaisons, très demandées.",
          "Prévoyez au moins dix jours pour profiter sereinement, transferts inter-îles compris.",
        ],
      },
      {
        type: "p",
        text: "Envie d'un séjour aux Seychelles taillé pour vous ? Nous construisons chaque itinéraire sur mesure, en fonction de vos envies et de votre budget. Parlons-en ensemble.",
      },
    ],
  },
  {
    slug: "bien-choisir-sa-croisiere",
    title: "Croisière : nos conseils pour bien choisir la vôtre",
    excerpt:
      "Maritime, fluviale, expédition… Toutes les croisières ne se ressemblent pas. Voici comment trouver celle qui correspond vraiment à vos envies.",
    date: "2026-05-28",
    author: siteConfig.advisor,
    category: "Croisières",
    image: "/images/croisiere.jpg",
    imageAlt:
      "Navire de croisière naviguant au coucher du soleil sur une mer calme",
    readingTime: "6 min",
    content: [
      {
        type: "p",
        text: "La croisière séduit par sa promesse : défaire ses valises une seule fois tout en découvrant plusieurs destinations. Mais derrière ce mot se cache une grande diversité d'expériences. Choisir la bonne formule, le bon bateau et le bon itinéraire fait toute la différence entre un voyage agréable et un voyage inoubliable.",
      },
      {
        type: "h2",
        text: "Définir le type de croisière qui vous correspond",
      },
      {
        type: "ul",
        items: [
          "Croisière maritime : idéale pour combiner plusieurs pays, avec des navires offrant restaurants, spa et animations.",
          "Croisière fluviale : plus intimiste, au fil du Danube, du Rhin, du Nil ou du Mékong, au plus près des villes et des paysages.",
          "Croisière d'expédition : pour les destinations polaires ou reculées, à bord de petits navires tournés vers la nature.",
        ],
      },
      {
        type: "h2",
        text: "Bien choisir sa cabine",
      },
      {
        type: "p",
        text: "Cabine intérieure pour optimiser le budget, cabine extérieure avec hublot, balcon privatif pour profiter de la vue, ou suite avec services dédiés : le choix dépend du temps que vous comptez passer dans votre cabine. Sur une croisière où vous êtes souvent à terre, une cabine plus simple suffit largement.",
      },
      {
        type: "h2",
        text: "Anticiper le budget réel",
      },
      {
        type: "p",
        text: "Le prix affiché ne dit pas tout. Pensez aux excursions à terre, aux boissons, aux pourboires d'équipage et aux éventuels forfaits (Wi-Fi, restaurants de spécialité). Certaines compagnies proposent des formules tout inclus qui simplifient grandement la gestion du budget.",
      },
      {
        type: "h2",
        text: "Notre accompagnement",
      },
      {
        type: "p",
        text: "Nous travaillons avec l'ensemble des grandes compagnies et sélectionnons pour vous l'itinéraire, la cabine et la période qui correspondent à vos attentes et à votre budget. Un conseil neutre et personnalisé, sans surcoût.",
      },
    ],
  },
  {
    slug: "organiser-son-voyage-de-noces",
    title: "Voyage de noces sur-mesure : nos étapes pour le réussir",
    excerpt:
      "Le voyage de noces est un moment unique. Voici notre méthode pour le préparer sereinement et en faire un souvenir à la hauteur de l'événement.",
    date: "2026-05-09",
    author: siteConfig.advisor,
    category: "Sur-mesure",
    image: "/images/sur-mesure.jpg",
    imageAlt:
      "Couple admirant un paysage tropical depuis une terrasse au coucher du soleil",
    readingTime: "5 min",
    content: [
      {
        type: "p",
        text: "Après des mois de préparatifs de mariage, le voyage de noces est cette parenthèse que l'on s'offre à deux. Pour qu'il soit parfaitement à votre image, mieux vaut s'y prendre tôt et confier l'organisation à un spécialiste du sur-mesure.",
      },
      {
        type: "h2",
        text: "1. Définir vos envies à deux",
      },
      {
        type: "p",
        text: "Farniente sur une plage de l'océan Indien, road trip à travers les grands espaces, immersion culturelle en Asie ou combiné plusieurs étapes : tout commence par un échange pour cerner ce qui vous fait rêver, ensemble.",
      },
      {
        type: "h2",
        text: "2. Construire un itinéraire équilibré",
      },
      {
        type: "p",
        text: "Nous composons un programme qui alterne moments forts et temps de repos, en tenant compte de la durée du vol, du décalage horaire et de la saison. L'objectif : un voyage fluide, sans fatigue inutile.",
      },
      {
        type: "h2",
        text: "3. Soigner les attentions",
      },
      {
        type: "ul",
        items: [
          "Surclassement et attentions « jeunes mariés » négociés auprès des hôtels.",
          "Dîners romantiques, excursions privées ou nuit insolite pour marquer le voyage.",
          "Assistance pendant tout le séjour, en cas d'imprévu.",
        ],
      },
      {
        type: "h2",
        text: "4. Anticiper les formalités",
      },
      {
        type: "p",
        text: "Passeport, visa, vaccins recommandés, validité des documents au nom d'épouse ou d'époux : nous vous accompagnons sur chaque détail administratif pour partir l'esprit tranquille.",
      },
      {
        type: "p",
        text: "Vous préparez votre mariage ? Parlons de votre voyage de noces dès maintenant : plus nous anticipons, plus les possibilités sont belles.",
      },
    ],
  },
  {
    slug: "week-ends-en-europe",
    title: "Nos plus belles idées de week-ends en Europe",
    excerpt:
      "Deux ou trois jours suffisent pour changer d'air. Tour d'horizon de destinations européennes parfaites pour une escapade réussie.",
    date: "2026-04-22",
    author: siteConfig.advisor,
    category: "Week-end",
    image: "/images/weekend.jpg",
    imageAlt:
      "Ruelle pittoresque d'une vieille ville européenne aux façades colorées",
    readingTime: "4 min",
    content: [
      {
        type: "p",
        text: "Pas besoin de partir loin ni longtemps pour vivre une vraie évasion. L'Europe regorge de villes et de régions accessibles en quelques heures, idéales pour un week-end prolongé. Voici nos coups de cœur.",
      },
      {
        type: "h2",
        text: "Pour les amateurs de villes d'art",
      },
      {
        type: "p",
        text: "Lisbonne et ses ruelles baignées de lumière, Florence et ses trésors de la Renaissance, Prague et son centre médiéval : ces capitales se découvrent à pied, au gré des cafés et des musées. Un format court qui invite à revenir.",
      },
      {
        type: "h2",
        text: "Pour se mettre au vert",
      },
      {
        type: "p",
        text: "Les lacs italiens, les fjords accessibles depuis les capitales nordiques ou les côtes découpées de l'Algarve offrent un dépaysement immédiat, à deux pas de la nature.",
      },
      {
        type: "h2",
        text: "Nos conseils pour un week-end réussi",
      },
      {
        type: "ul",
        items: [
          "Privilégiez les vols directs pour ne pas perdre de temps en transit.",
          "Choisissez un hôtel central afin de tout faire à pied.",
          "Réservez quelques incontournables à l'avance pour éviter les files d'attente.",
        ],
      },
      {
        type: "p",
        text: "Envie d'une escapade clés en main ? Nous nous occupons des vols, de l'hébergement et des bonnes adresses : il ne vous reste qu'à profiter.",
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}
