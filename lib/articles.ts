import { siteConfig } from "@/lib/site";
import articleBudget from "@/public/images/article-budget.jpg";
import articleCroisiere from "@/public/images/article-croisiere.jpg";
import articleEurope from "@/public/images/article-europe.jpg";
import articleNoces from "@/public/images/article-noces.jpg";
import articleSeychelles from "@/public/images/article-seychelles.jpg";
import articleSoleilHiver from "@/public/images/article-soleil-hiver.jpg";
import destThailande from "@/public/images/dest-thailande.jpg";
import type { StaticImageData } from "next/image";
import { allDestinations } from "@/lib/destinations";
import { getDestinationContent } from "@/lib/destination-content";

// Budgets come from the destination pages, so the article never drifts from them.
const lowestBudget = Math.min(
  ...allDestinations.map(
    (d) => getDestinationContent(d.slug)?.budgetFrom ?? Infinity,
  ),
);
const destinationBudgets = allDestinations.flatMap((d) => {
  const content = getDestinationContent(d.slug);
  return content
    ? [
        {
          text: `${d.title} : à partir de ${content.budgetFrom.toLocaleString("fr-FR")} € par personne`,
          href: `/destinations/${d.slug}`,
        },
      ]
    : [];
});

export type ArticleBlock =
  | { type: "p"; text: string; link?: { href: string; label: string } }
  | { type: "h2"; text: string }
  | { type: "ul"; items: (string | { text: string; href: string })[] };

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  /** ISO date (YYYY-MM-DD) */
  date: string;
  author: string;
  category: string;
  image: StaticImageData;
  imageAlt: string;
  readingTime: string;
  /** Destination slugs (lib/destinations.ts) linked under the article. */
  destinations?: string[];
  content: ArticleBlock[];
  /** Shown under the article and emitted as FAQPage JSON-LD. */
  faq?: { question: string; answer: string }[];
};

export const articles: Article[] = [
  {
    slug: "combien-coute-un-voyage-sur-mesure",
    title: "Combien coûte un voyage sur mesure ? Prix par destination",
    excerpt:
      "Vols, hébergement, saison : ce qui fait le prix d'un voyage sur mesure, nos budgets de départ par destination et nos conseils pour maîtriser votre budget.",
    date: "2026-10-30",
    author: siteConfig.advisor,
    category: "Sur-mesure",
    image: articleBudget,
    imageAlt:
      "Petit-déjeuner servi sur la terrasse d'un hôtel, face aux palmiers et à l'océan",
    readingTime: "4 min",
    destinations: [
      "sicile-orientale",
      "vietnam",
      "japon",
      "polynesie-francaise",
    ],
    content: [
      {
        type: "p",
        text: "C'est souvent la première question : combien coûte un voyage sur mesure ? La réponse dépend de vos envies, de la saison et de la durée. Voici ce qui fait le prix d'un voyage, nos budgets de départ par destination et ce qu'ils ne comprennent pas.",
      },
      {
        type: "h2",
        text: "Ce qui fait le prix d'un voyage",
      },
      {
        type: "ul",
        items: [
          "Les vols : la période, la classe et la date de réservation pèsent le plus sur un long-courrier.",
          "L'hébergement : d'une chambre chez l'habitant à un palace, c'est souvent le poste qui varie le plus.",
          "La saison : haute saison, vacances scolaires et fêtes font monter les prix, l'intersaison les fait baisser.",
          "La durée : chaque nuit et chaque étape en plus s'ajoutent au budget, mais un long vol demande assez de jours sur place.",
          "Les prestations sur place : guide privé, chauffeur, excursions, transferts, pension.",
          "Le nombre de voyageurs : certaines prestations privées coûtent moins cher par personne à quatre qu'à deux.",
        ],
      },
      {
        type: "h2",
        text: "Nos budgets de départ par destination",
      },
      {
        type: "p",
        text: "Ces budgets sont indicatifs, par personne, vols compris. Chaque page destination précise la formule de départ (durée, hébergement, prestations). Le prix réel dépend de la saison et de vos choix.",
      },
      {
        type: "ul",
        items: destinationBudgets,
      },
      {
        type: "h2",
        text: "Ce que les budgets ne comprennent pas",
      },
      {
        type: "p",
        text: "Sauf mention contraire, nos prix ne comprennent pas :",
      },
      {
        type: "ul",
        items: [
          "les frais de formalités (passeport, visas, vaccins) ;",
          "les assurances facultatives ;",
          "les dépenses personnelles et les pourboires ;",
          "les excursions non prévues au programme.",
        ],
      },
      {
        type: "p",
        text: "Les éventuels frais de dossier figurent sur le devis et dans nos",
        link: { href: "/conditions-de-vente", label: "conditions de vente" },
      },
      {
        type: "h2",
        text: "Le sur-mesure coûte-t-il plus cher qu'un circuit catalogue ?",
      },
      {
        type: "p",
        text: "Cela dépend. Un circuit catalogue partage certains coûts entre de nombreux voyageurs. En sur-mesure, vous choisissez chaque étape : vous pouvez dormir dans un hôtel simple et bien situé pour vous offrir une nuit d'exception ailleurs, ou remplacer une excursion de groupe par une journée libre. Découvrez",
        link: {
          href: "/voyage-sur-mesure",
          label: "notre approche du voyage sur mesure",
        },
      },
      {
        type: "h2",
        text: "Nos conseils pour maîtriser votre budget",
      },
      {
        type: "ul",
        items: [
          "Réservez tôt : plusieurs mois à l'avance pour un long-courrier ou les vacances scolaires.",
          "Partez en intersaison : le climat est souvent agréable et les prix plus doux.",
          "Choisissez la bonne durée : mieux vaut moins d'étapes, bien choisies, que trop de trajets.",
          "Mélangez les hébergements : une belle adresse pour les moments forts, des hôtels simples pour les étapes.",
          "Donnez-nous votre budget dès le départ : nous construisons la proposition en fonction de ce budget.",
        ],
      },
      {
        type: "h2",
        text: "Obtenir le prix exact de votre voyage",
      },
      {
        type: "p",
        text: "Le devis est gratuit et sans engagement. Indiquez votre destination, votre période et votre budget, et nous vous envoyons une première proposition personnalisée :",
        link: { href: "/devis", label: "demander votre devis gratuit" },
      },
      {
        type: "p",
        text: "Vous habitez Rennes ou la Bretagne ? Nous vous recevons sur rendez-vous, et restons joignables par téléphone ou en visio. Découvrez",
        link: {
          href: "/agence-de-voyages-rennes",
          label: "votre agence de voyages près de Rennes",
        },
      },
    ],
    faq: [
      {
        question: "Le prix comprend-il les vols ?",
        answer:
          "Oui. Nos budgets de départ comprennent les vols internationaux. Chaque page destination détaille ce que comprend la formule.",
      },
      {
        question: "Qu'est-ce qui n'est pas compris dans le prix ?",
        answer:
          "Sauf mention contraire : les frais de formalités (passeport, visas, vaccins), les assurances facultatives, les dépenses personnelles, les pourboires et les excursions non prévues au programme.",
      },
      {
        question: "À partir de quel budget partir en voyage sur mesure ?",
        answer: `Sur nos destinations, les budgets de départ commencent à ${lowestBudget.toLocaleString("fr-FR")} € par personne, vols compris.`,
      },
    ],
  },
  {
    slug: "ou-partir-au-soleil-en-hiver",
    title: "Où partir au soleil en hiver ? Notre guide mois par mois",
    excerpt:
      "Antilles, Canaries, Égypte, Thaïlande… Où trouver le soleil en décembre, en février ou en mars, à moins de cinq heures de vol ou à l'autre bout du monde. Notre sélection mois par mois.",
    date: "2026-10-18",
    author: siteConfig.advisor,
    category: "Séjours",
    image: articleSoleilHiver,
    imageAlt:
      "Le lagon turquoise et les cocotiers de la plage de Sainte-Anne, en Guadeloupe",
    readingTime: "4 min",
    destinations: [
      "croisiere-sur-le-nil",
      "thailande",
      "vietnam",
      "seychelles",
      "ile-maurice",
    ],
    content: [
      {
        type: "p",
        text: "Quand la Bretagne passe en mode pluie et ciel bas, l'envie de soleil devient pressante. Bonne nouvelle : de décembre à mars, il fait beau et chaud dans beaucoup d'endroits du monde. Le piège, c'est que la saison idéale change d'une destination à l'autre, et qu'un mois parfait pour la Thaïlande peut tomber en pleine saison des pluies à l'île Maurice. Voici où partir selon le temps de vol que vous êtes prêt à accepter, et les erreurs de calendrier à éviter.",
      },
      {
        type: "h2",
        text: "À moins de cinq heures de vol : les Canaries et l'Égypte",
      },
      {
        type: "p",
        text: "Les Canaries sont la valeur sûre de l'hiver européen. Comptez autour de 20 à 23 °C en journée tout l'hiver, sans décalage horaire avec la France, ou presque : une heure de moins seulement. Tenerife et Grande Canarie offrent le plus de variété, entre volcans, villages et plages ; Lanzarote et Fuerteventura séduisent par leurs paysages lunaires et leurs longues plages battues par le vent. La mer reste fraîche, autour de 19 °C : idéal pour la randonnée et le farniente, moins pour de longues baignades.",
      },
      {
        type: "p",
        text: "L'Égypte est l'autre grande option proche. L'hiver est la meilleure saison pour visiter Louxor, Assouan et la vallée des Rois : il fait autour de 23 à 26 °C le jour, loin des chaleurs écrasantes de l'été. C'est le moment parfait pour une croisière sur le Nil, que l'on peut prolonger par quelques jours au bord de la mer Rouge, où l'eau reste agréable pour le snorkeling. Prévoyez une petite laine : les nuits dans le désert sont fraîches.",
      },
      {
        type: "h2",
        text: "Les Antilles françaises : le soleil sans passeport",
      },
      {
        type: "p",
        text: "De décembre à avril, la Guadeloupe et la Martinique vivent leur saison sèche, le « carême » : 27 à 30 °C, une mer à 26 °C et des alizés qui rafraîchissent l'air. Huit heures et demie de vol depuis Paris, pas de passeport, l'euro et le français : c'est la destination soleil la plus simple pour une famille. On y combine facilement plage, randonnée dans la forêt tropicale, distilleries et îles voisines comme Marie-Galante ou les Saintes. Seul bémol, c'est la haute saison : les vols et les hébergements des vacances de février partent très tôt.",
      },
      {
        type: "h2",
        text: "Le grand départ : l'Asie en saison sèche",
      },
      {
        type: "p",
        text: "L'hiver est la meilleure période pour une grande partie de l'Asie du Sud-Est. En Thaïlande, la côte andamane (Phuket, Krabi, Koh Lanta) est au sommet de sa forme de décembre à mars, avec une mer calme et un ciel dégagé. Au Sri Lanka, c'est la saison idéale pour la côte ouest et le sud, et aux Maldives la saison sèche s'installe pour plusieurs mois.",
      },
      {
        type: "p",
        text: "Le Vietnam demande plus de finesse, car le pays s'étire sur près de 1 700 kilomètres. Le sud (Hô Chi Minh-Ville, le delta du Mékong, Phú Quốc) est chaud et sec tout l'hiver, alors que le nord est frais : Hanoï et la baie d'Halong tournent autour de 15 à 20 °C en février, souvent sous un ciel gris. Un circuit du nord au sud reste tout à fait possible, à condition de prévoir quelques couches et de finir par le soleil du sud.",
      },
      {
        type: "h2",
        text: "Océan Indien et Pacifique : attention au calendrier",
      },
      {
        type: "p",
        text: "C'est là que les mauvaises surprises arrivent. De janvier à mars, l'île Maurice, La Réunion et la Polynésie française sont en été austral : il fait très chaud, l'humidité est forte et c'est la période où le risque de cyclone est le plus élevé. On peut tout à fait y partir, mais en connaissance de cause et avec une assurance adaptée. Pour Maurice, novembre et décembre sont un bien meilleur choix que février. Aux Seychelles, plus proches de l'équateur et hors de la trajectoire des cyclones, l'hiver est chaud et ponctué d'averses souvent brèves : la destination reste très agréable, même si avril et mai sont encore plus calmes.",
      },
      {
        type: "h2",
        text: "Notre sélection mois par mois",
      },
      {
        type: "ul",
        items: [
          "Décembre : île Maurice, Antilles, Thaïlande, Égypte, Canaries. Pour les fêtes, réservez le plus tôt possible : les places partent dès la fin de l'été.",
          "Janvier : Antilles, Thaïlande, sud du Vietnam, Sri Lanka. Le mois le plus calme et souvent le plus abordable après les fêtes.",
          "Février : Antilles, Canaries, croisière sur le Nil, Thaïlande, Maldives. Le mois le plus demandé à cause des vacances scolaires.",
          "Mars : Antilles, Égypte, Thaïlande, Vietnam. Les prix baissent, la météo reste excellente presque partout.",
        ],
      },
      {
        type: "h2",
        text: "Nos conseils avant de réserver",
      },
      {
        type: "ul",
        items: [
          "Pour les vacances de février (zone B pour l'académie de Rennes), réservez dès l'automne : les meilleurs vols et les hébergements familiaux partent en premier.",
          "Regardez la température de l'eau, pas seulement celle de l'air : 22 °C dehors aux Canaries ne veut pas dire une mer chaude.",
          "Comparez le temps de vol et la durée du séjour : une semaine suffit pour les Canaries ou l'Égypte, comptez au moins dix jours pour les Antilles et deux semaines pour l'Asie.",
          "Vérifiez les formalités de chaque pays (passeport, visa, validité du passeport) bien avant le départ, surtout pour les enfants.",
        ],
      },
      {
        type: "p",
        text: "Vous hésitez entre deux destinations ou vous ne savez pas laquelle tombe au bon moment pour vos dates ? C'est notre métier : nous partons de vos dates, de votre budget et de vos envies pour vous proposer le bon soleil, au bon endroit. Parlons-en, sans engagement.",
      },
    ],
  },
  {
    slug: "quand-partir-en-thailande",
    title: "Quand partir en Thaïlande ? Le guide par saison et par région",
    excerpt:
      "Côte andamane, îles du golfe, nord du pays : la Thaïlande ne se visite pas au même moment selon la région. Notre guide saison par saison.",
    date: "2026-08-28",
    author: siteConfig.advisor,
    category: "Circuits",
    image: destThailande,
    imageAlt:
      "Un bateau à longue queue entre les falaises karstiques du lac Cheow Lan, parc national de Khao Sok, en Thaïlande",
    readingTime: "6 min",
    destinations: ["thailande"],
    content: [
      {
        type: "p",
        text: "La Thaïlande se visite toute l'année, mais pas partout au même moment. Le pays s'étire sur plus de 1 600 kilomètres du nord au sud et connaît deux moussons qui n'arrivent pas en même temps sur ses deux façades maritimes. Résultat : un mois catastrophique pour Phuket peut être excellent pour Koh Samui, et une période idéale pour les plages du sud peut coïncider avec la saison des brûlis dans le nord. Voici comment choisir votre fenêtre de départ selon la région et le voyage que vous avez en tête.",
      },
      {
        type: "h2",
        text: "De novembre à février : la meilleure période, presque partout",
      },
      {
        type: "p",
        text: "C'est la saison sèche et « fraîche », et la fenêtre la plus sûre si vous ne partez qu'une fois. Les températures oscillent entre 25 et 32 °C, l'humidité retombe, le ciel est dégagé et la mer est calme sur la côte ouest. Bangkok devient beaucoup plus agréable à parcourir à pied, les temples d'Ayutthaya et de Sukhothai se visitent sans souffrir de la chaleur, et le nord affiche des matinées presque fraîches. C'est aussi la haute saison : vols, hôtels et transferts se réservent plusieurs mois à l'avance, en particulier pour les vacances de Noël et de février.",
      },
      {
        type: "h2",
        text: "De mars à mai : la saison chaude, à réserver aux amateurs",
      },
      {
        type: "p",
        text: "Le thermomètre grimpe franchement, souvent au-delà de 35 °C à Bangkok et dans les plaines centrales, avec une humidité lourde en fin de période. Les journées de visite intensive deviennent éprouvantes, surtout avec de jeunes enfants. En revanche, la mer est chaude, les tarifs baissent et les sites touristiques respirent, en gardant en tête que le mois de mai est déjà nettement arrosé sur la côte andamane. Deux points à connaître : le nord (Chiang Mai, Chiang Rai) subit de fin février à avril la saison des brûlis agricoles, qui dégrade nettement la qualité de l'air et les panoramas ; et Songkran, le nouvel an thaï célébré à la mi-avril, transforme le pays en gigantesque bataille d'eau, une expérience mémorable, mais qui perturbe les transports.",
      },
      {
        type: "h2",
        text: "De juin à octobre : la mousson, plus nuancée qu'on ne le croit",
      },
      {
        type: "p",
        text: "La mousson du sud-ouest arrose surtout la côte andamane (Phuket, Krabi, Khao Lak, Koh Lanta), avec un pic en septembre et octobre. Les averses sont souvent brèves et concentrées en fin de journée, mais la mer se creuse et certaines excursions en bateau sont annulées ; les îles Similan, par exemple, ferment une bonne partie de cette période. C'est aussi la saison la plus verte, la plus photogénique et la moins chère : pour un circuit culturel entre Bangkok, Chiang Mai et l'Isan, les mois de juin à août restent tout à fait praticables, à condition d'accepter une averse quotidienne.",
      },
      {
        type: "h2",
        text: "Le cas des îles du golfe : un calendrier décalé",
      },
      {
        type: "p",
        text: "Koh Samui, Koh Phangan et Koh Tao suivent un rythme différent du reste du pays. Elles restent belles et baignables une bonne partie de l'été, avec une météo souvent clémente de juin à août, alors que la côte ouest est sous la pluie. Leur véritable saison humide arrive plus tard, portée par la mousson du nord-est : octobre, novembre et début décembre y sont les mois les plus arrosés, novembre étant généralement le plus difficile. Une bonne raison de ne pas combiner Phuket et Koh Samui n'importe quand dans l'année.",
      },
      {
        type: "h2",
        text: "Combien de temps prévoir ?",
      },
      {
        type: "ul",
        items: [
          "Dix jours : un premier aperçu, en se limitant à deux étapes (Bangkok et une île, ou Bangkok et le nord).",
          "Deux semaines : le format le plus équilibré, avec un circuit culturel suivi d'une semaine de plage pour finir en douceur.",
          "Trois semaines : de quoi ajouter l'Isan, le Triangle d'or ou une extension au Laos ou au Cambodge sans courir.",
          "Comptez toujours un temps d'acclimatation à l'arrivée : le décalage horaire est de cinq à six heures, et le premier jour se passe rarement à visiter.",
        ],
      },
      {
        type: "h2",
        text: "Nos conseils avant de réserver",
      },
      {
        type: "ul",
        items: [
          "Choisissez d'abord la façade maritime, puis les dates : c'est la côte, andamane ou golfe, qui dicte le calendrier, pas l'inverse.",
          "Évitez de finir un circuit par une île en pleine mousson locale : mieux vaut inverser l'ordre des étapes que subir cinq jours de pluie au moment de se reposer.",
          "En haute saison, réservez les vols intérieurs en même temps que le vol international : ils se remplissent vite et leurs tarifs s'envolent.",
          "Prévoyez une assurance couvrant les activités nautiques et une trousse adaptée à la chaleur humide ; une nuit d'hôtel avant le vol retour évite bien des imprévus.",
        ],
      },
      {
        type: "p",
        text: "Vous hésitez entre plusieurs périodes ou plusieurs régions ? C'est exactement le genre d'arbitrage que nous faisons avec vous : nous partons de vos dates et de vos envies pour construire un itinéraire qui tombe au bon moment, avec les bonnes étapes dans le bon ordre. Parlons-en, sans engagement.",
      },
    ],
  },
  {
    slug: "quand-partir-aux-seychelles",
    title: "Quand partir aux Seychelles ? Le guide saison par saison",
    excerpt:
      "Lagons turquoise, plages de sable blanc et nature préservée : découvrez la meilleure période pour profiter pleinement de l'archipel seychellois.",
    date: "2026-06-12",
    author: siteConfig.advisor,
    category: "Séjours",
    image: articleSeychelles,
    imageAlt:
      "Rochers de granit, cocotiers et eaux turquoise sur une plage des Seychelles",
    readingTime: "5 min",
    destinations: ["seychelles"],
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
          "Combinez plusieurs îles (Mahé, Praslin et La Digue) pour varier les paysages et les ambiances.",
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
    image: articleCroisiere,
    imageAlt: "Grand navire de croisière moderne naviguant en pleine mer",
    readingTime: "6 min",
    destinations: ["croisiere-sur-le-nil"],
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
    image: articleNoces,
    imageAlt: "Coucher de soleil sur les maisons blanches d'Oia, à Santorin",
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
    image: articleEurope,
    imageAlt: "Le pont Charles et le château de Prague au coucher du soleil",
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
