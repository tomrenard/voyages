/**
 * Editorial content for the individual destination landing pages
 * (/destinations/[slug]). Complements lib/destinations.ts (cards data):
 * same slugs, deeper content. Budgets are indicative, per person, and always
 * presented as starting points — the real offer is the personalised quote.
 */

export type DestinationContent = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  heroSubtitle: string;
  introTitle: string;
  intro: string[];
  highlights: { title: string; text: string }[];
  bestSeason: string;
  idealDuration: string;
  budgetFrom: number;
  faq: { question: string; answer: string }[];
};

export const destinationContent: Record<string, DestinationContent> = {
  "new-york": {
    slug: "new-york",
    metaTitle: "Voyage à New York sur Mesure",
    metaDescription:
      "Partez à New York avec Rêves de Voyages : séjour sur mesure, hôtels bien situés, conseils d'experte et bonnes adresses. Devis gratuit depuis Rennes.",
    heroSubtitle:
      "La ville qui ne dort jamais, taillée à votre rythme",
    introTitle: "Pourquoi partir à New York ?",
    intro: [
      "Première fois à Manhattan ou retour aux sources new-yorkaises : la ville se réinvente à chaque visite. Entre les classiques incontournables — Times Square, Central Park, la statue de la Liberté — et les quartiers qui montent, Brooklyn en tête, New York récompense ceux qui savent où aller.",
      "Nous construisons votre séjour selon vos envies : l'hôtel au bon emplacement (le nerf de la guerre à New York), les pass qui valent vraiment le coup, les réservations à faire des semaines à l'avance et les adresses que l'on ne trouve pas dans les guides.",
    ],
    highlights: [
      {
        title: "Manhattan d'en haut",
        text: "Empire State Building au coucher du soleil, Top of the Rock face à Central Park ou SUMMIT One Vanderbilt : choisir son observatoire, c'est déjà voyager.",
      },
      {
        title: "Brooklyn authentique",
        text: "Traverser le pont de Brooklyn à pied au lever du jour, flâner à Williamsburg et Dumbo : l'autre visage de New York, créatif et attachant.",
      },
      {
        title: "Comédies musicales à Broadway",
        text: "Un spectacle à Broadway se prépare : nous vous aidons à choisir le show et à réserver les bonnes places au bon prix.",
      },
      {
        title: "La ville verte",
        text: "Central Park à vélo, la High Line au-dessus de Chelsea, les ferries vers Staten Island : New York se découvre aussi au grand air.",
      },
    ],
    bestSeason:
      "Mai-juin et septembre-octobre pour la douceur, décembre pour la magie de Noël — chaque saison a son New York.",
    idealDuration: "5 à 8 jours",
    budgetFrom: 1400,
    faq: [
      {
        question: "Quelles formalités pour partir à New York ?",
        answer:
          "Un passeport valide et une autorisation ESTA (à demander en ligne au moins 72 h avant le départ) suffisent pour un séjour touristique de moins de 90 jours. Nous vérifions vos formalités avec vous avant la réservation.",
      },
      {
        question: "Quel budget prévoir pour un séjour à New York ?",
        answer:
          "Comptez à partir de 1 400 € par personne pour un séjour de 5-6 jours (vols + hôtel bien situé), selon la saison et la catégorie d'hébergement. Le devis personnalisé affine ce budget selon vos envies.",
      },
      {
        question: "Quel quartier choisir pour dormir à New York ?",
        answer:
          "Midtown pour tout faire à pied, Chelsea ou SoHo pour le charme, Brooklyn pour l'ambiance locale et des tarifs plus doux. Nous vous orientons selon votre programme et votre budget.",
      },
    ],
  },
  "sicile-orientale": {
    slug: "sicile-orientale",
    metaTitle: "Voyage en Sicile Orientale sur Mesure",
    metaDescription:
      "La Sicile orientale avec Rêves de Voyages : Taormine, l'Etna, Syracuse et Noto en liberté ou en circuit sur mesure. Devis gratuit depuis Rennes.",
    heroSubtitle:
      "Baroque, volcans et dolce vita : la Méditerranée authentique",
    introTitle: "Pourquoi partir en Sicile orientale ?",
    intro: [
      "De Taormine, suspendue entre mer et Etna, aux ruelles baroques de Noto et de Raguse, la Sicile orientale concentre le meilleur de l'île : des paysages spectaculaires, un patrimoine exceptionnel classé à l'UNESCO et une cuisine qui, à elle seule, justifie le voyage.",
      "En autotour, en circuit privé avec chauffeur ou en séjour rayonnant depuis une adresse de charme, nous composons l'itinéraire qui vous ressemble — avec nos maisons d'hôtes préférées, nos tables testées et les visites qui font la différence.",
    ],
    highlights: [
      {
        title: "Taormine et son théâtre antique",
        text: "La perle de la côte ionienne : le théâtre gréco-romain face à l'Etna, les jardins de la villa Comunale et l'Isola Bella en contrebas.",
      },
      {
        title: "L'ascension de l'Etna",
        text: "Le plus haut volcan actif d'Europe se gravit en 4x4, à pied ou en téléphérique — une expérience lunaire inoubliable, dégustation de vins de l'Etna en prime.",
      },
      {
        title: "Syracuse et Ortigia",
        text: "La ville de Cicéron et son île historique : marché animé, duomo baroque posé sur un temple grec, bains de mer au pied des remparts.",
      },
      {
        title: "Le baroque du Val di Noto",
        text: "Noto, Modica, Raguse Ibla : un triangle d'or baroque reconstruit après le séisme de 1693, entre granités d'amande et chocolat aztèque.",
      },
    ],
    bestSeason:
      "Avril à juin et septembre-octobre : chaleur douce, lumière superbe et sites paisibles. L'été pour les amoureux de la mer.",
    idealDuration: "7 à 10 jours",
    budgetFrom: 1200,
    faq: [
      {
        question: "Faut-il louer une voiture en Sicile orientale ?",
        answer:
          "C'est la formule la plus libre pour rayonner entre Catane, Taormine, Syracuse et le Val di Noto. Si vous préférez ne pas conduire, nous organisons circuits privés avec chauffeur ou excursions à la journée.",
      },
      {
        question: "Quel budget pour un voyage en Sicile ?",
        answer:
          "À partir de 1 200 € par personne pour une semaine en autotour (vols, voiture, hébergements de charme avec petit-déjeuner), selon la saison. Le sur-mesure permet d'ajuster chaque poste.",
      },
      {
        question: "La Sicile orientale convient-elle à un voyage en famille ?",
        answer:
          "Parfaitement : plages de sable, visites courtes et vivantes, cuisine adorée des enfants et distances raisonnables. Nous adaptons le rythme et les étapes à l'âge de vos enfants.",
      },
    ],
  },
  vietnam: {
    slug: "vietnam",
    metaTitle: "Voyage au Vietnam sur Mesure",
    metaDescription:
      "Le Vietnam sur mesure avec Rêves de Voyages : baie d'Halong, rizières de Sapa, Hoi An et delta du Mékong. Circuit personnalisé, devis gratuit depuis Rennes.",
    heroSubtitle:
      "Du delta du Mékong à la baie d'Halong, un voyage haut en couleurs",
    introTitle: "Pourquoi partir au Vietnam ?",
    intro: [
      "Peu de pays offrent une telle densité d'émotions : les pitons karstiques de la baie d'Halong, les rizières en terrasse du Tonkin, les lanternes de Hoi An, l'énergie de Hanoï et de Saïgon, la douceur du delta du Mékong. Le Vietnam se vit du nord au sud, à votre rythme.",
      "Avec nos partenaires francophones sur place, nous créons votre itinéraire : guides privés, jonque de charme dans la baie, nuits chez l'habitant ou adresses d'exception, rencontres authentiques loin des sentiers battus.",
    ],
    highlights: [
      {
        title: "La baie d'Halong en jonque",
        text: "Une nuit à bord d'une jonque traditionnelle au cœur des 2 000 pitons calcaires — préférez la baie de Lan Ha ou de Bai Tu Long, plus confidentielles.",
      },
      {
        title: "Les rizières du Haut-Tonkin",
        text: "Sapa, Mu Cang Chai ou Pu Luong : randonnées douces entre villages ethniques et amphithéâtres de rizières sculptées à flanc de montagne.",
      },
      {
        title: "Hoi An, la romantique",
        text: "Maisons jaunes, lampions multicolores et tailleurs légendaires : la vieille ville classée UNESCO est une escale hors du temps.",
      },
      {
        title: "Le delta du Mékong",
        text: "Marchés flottants, vergers luxuriants et vie au fil de l'eau : le grenier du Vietnam se découvre en sampan, de préférence tôt le matin.",
      },
    ],
    bestSeason:
      "Octobre à avril pour le sud et le centre ; septembre-novembre et mars-mai pour le nord. Nous calons l'itinéraire sur les saisons de chaque région.",
    idealDuration: "12 à 18 jours",
    budgetFrom: 2200,
    faq: [
      {
        question: "Faut-il un visa pour le Vietnam ?",
        answer:
          "Les ressortissants français sont exemptés de visa pour les séjours courts ; au-delà, l'e-visa s'obtient en ligne en quelques jours. Nous vous confirmons les formalités en vigueur au moment de la réservation.",
      },
      {
        question: "Quel budget pour un circuit au Vietnam ?",
        answer:
          "À partir de 2 200 € par personne pour un circuit privé de deux semaines (vols internationaux, guides francophones, hébergements de charme, jonque dans la baie d'Halong), selon saison et prestations.",
      },
      {
        question: "Le Vietnam est-il adapté à un premier voyage en Asie ?",
        answer:
          "C'est même l'une des meilleures portes d'entrée : accueil chaleureux, circuits rodés, cuisine accessible et grande sécurité. Un itinéraire bien construit rend le voyage très fluide.",
      },
    ],
  },
  australie: {
    slug: "australie",
    metaTitle: "Voyage en Australie sur Mesure",
    metaDescription:
      "L'Australie sur mesure avec Rêves de Voyages : Sydney, la Grande Barrière de corail, Uluru et la côte ouest. Autotour ou circuit privé, devis gratuit.",
    heroSubtitle:
      "Le voyage d'une vie, aux antipodes",
    introTitle: "Pourquoi partir en Australie ?",
    intro: [
      "L'Australie ne se visite pas, elle se vit : plonger sur la Grande Barrière de corail, veiller le coucher de soleil sur Uluru, longer la Great Ocean Road, croiser kangourous et koalas en liberté, vibrer à Sydney et Melbourne. Un continent entier à apprivoiser.",
      "Parce qu'on ne part pas aux antipodes sur un coup de tête, nous construisons votre itinéraire étape par étape : le bon sens de visite selon la saison, les vols intérieurs bien enchaînés, les lodges et adresses qui font la différence, et le rythme juste pour profiter sans courir.",
    ],
    highlights: [
      {
        title: "Sydney et sa baie",
        text: "L'Opéra, le Harbour Bridge, les plages de Bondi et Manly : une entrée en matière spectaculaire, entre océan et gratte-ciel.",
      },
      {
        title: "La Grande Barrière de corail",
        text: "Depuis Cairns ou Port Douglas, plongée ou snorkeling sur le plus grand récif corallien du monde — et les forêts tropicales du Daintree juste à côté.",
      },
      {
        title: "Uluru et le Centre Rouge",
        text: "Le monolithe sacré des Anangu au lever du soleil, les dômes de Kata Tjuta et le silence du désert : le cœur spirituel de l'Australie.",
      },
      {
        title: "La Great Ocean Road",
        text: "Douze Apôtres, plages sauvages et forêts d'eucalyptus : l'un des plus beaux road trips du monde, au départ de Melbourne.",
      },
    ],
    bestSeason:
      "Septembre à novembre et mars à mai pour combiner sud et nord dans de bonnes conditions — nous optimisons l'itinéraire selon vos dates.",
    idealDuration: "3 semaines et plus",
    budgetFrom: 3500,
    faq: [
      {
        question: "Combien de temps faut-il pour visiter l'Australie ?",
        answer:
          "Trois semaines permettent un beau combiné Sydney – Barrière de corail – Centre Rouge – Melbourne. Deux semaines suffisent pour un focus sur la côte est. Nous priorisons ensemble selon vos envies.",
      },
      {
        question: "Quel budget pour un voyage en Australie ?",
        answer:
          "À partir de 3 500 € par personne pour trois semaines (vols internationaux et intérieurs, voiture, hébergements), selon la saison et le niveau de confort. Un devis précis se construit avec votre itinéraire.",
      },
      {
        question: "Faut-il un visa pour l'Australie ?",
        answer:
          "Oui, l'eVisitor (gratuit) s'obtient en ligne avant le départ pour les séjours touristiques jusqu'à 3 mois. Nous vous guidons dans la démarche au moment de la réservation.",
      },
    ],
  },
  "polynesie-francaise": {
    slug: "polynesie-francaise",
    metaTitle: "Voyage en Polynésie Française sur Mesure",
    metaDescription:
      "La Polynésie avec Rêves de Voyages : Tahiti, Moorea, Bora Bora et les Tuamotu. Voyage de noces et combinés d'îles sur mesure, devis gratuit depuis Rennes.",
    heroSubtitle:
      "Lagons turquoise et bungalows sur pilotis : le paradis existe",
    introTitle: "Pourquoi partir en Polynésie française ?",
    intro: [
      "Tahiti, Moorea, Bora Bora, Rangiroa… Ces noms font rêver depuis toujours, et la réalité dépasse l'imaginaire : lagons irréels, pensions de famille accueillantes ou resorts d'exception, culture polynésienne vivante et générosité des habitants.",
      "Spécialistes des voyages de noces et des grands combinés d'îles, nous composons votre périple : le bon équilibre entre îles de la Société et atolls des Tuamotu, les pensions et hôtels adaptés à votre budget, les vols inter-îles et les expériences qui marquent une vie.",
    ],
    highlights: [
      {
        title: "Bora Bora, la mythique",
        text: "Son lagon aux cinquante nuances de bleu et son mont Otemanu : la carte postale absolue, à vivre en bungalow sur pilotis au moins une fois.",
      },
      {
        title: "Moorea, l'île sœur",
        text: "À 30 minutes de ferry de Tahiti : baies spectaculaires, plantations d'ananas, raies et requins pointes noires dans un lagon accessible.",
      },
      {
        title: "Les Tuamotu, paradis des plongeurs",
        text: "Rangiroa, Fakarava et leurs passes classées réserve de biosphère : murs de requins gris, dauphins et jardins de corail intacts.",
      },
      {
        title: "La culture polynésienne",
        text: "Danse, tatouage, va'a et ukulélé : au-delà des lagons, une culture vivante à rencontrer dans les pensions de famille et sur les marchés.",
      },
    ],
    bestSeason:
      "Mai à octobre : saison sèche, alizés doux et lumière idéale. Les mariés apprécient aussi novembre, plus calme et souvent plus doux côté tarifs.",
    idealDuration: "12 à 16 jours",
    budgetFrom: 4500,
    faq: [
      {
        question: "Quel budget pour un voyage en Polynésie ?",
        answer:
          "À partir de 4 500 € par personne pour un combiné de 3 îles en pensions et hôtels 3-4★ (vols internationaux et inter-îles inclus). Les voyages de noces en resorts avec pilotis se situent plutôt entre 6 000 et 9 000 € par personne.",
      },
      {
        question: "Combien d'îles visiter en un séjour ?",
        answer:
          "Trois à quatre îles sur deux semaines est l'équilibre idéal : au-delà, on passe son temps en transferts. Un duo Société + Tuamotu offre le plus beau contraste lagon/océan.",
      },
      {
        question: "La Polynésie, seulement pour les voyages de noces ?",
        answer:
          "Pas du tout : familles, plongeurs et amoureux de nature y trouvent leur bonheur, notamment en pensions de famille, bien plus abordables que les resorts. Nous adaptons la formule à votre projet.",
      },
    ],
  },
  "croisiere-sur-le-nil": {
    slug: "croisiere-sur-le-nil",
    metaTitle: "Croisière sur le Nil sur Mesure",
    metaDescription:
      "Croisière sur le Nil avec Rêves de Voyages : Louxor, Assouan, temples et vallée des Rois, en bateau 5★ ou dahabieh de charme. Devis gratuit depuis Rennes.",
    heroSubtitle:
      "Remonter le fleuve des pharaons, au fil de 5 000 ans d'histoire",
    introTitle: "Pourquoi choisir une croisière sur le Nil ?",
    intro: [
      "Entre Louxor et Assouan, le Nil déroule le plus fabuleux des musées à ciel ouvert : Karnak et la vallée des Rois, Edfou, Kom Ombo, Philae… Chaque escale est un chef-d'œuvre, chaque coucher de soleil sur le fleuve un souvenir gravé.",
      "Bateau 5 étoiles avec pont-piscine, dahabieh intimiste à voile ou combiné Le Caire + croisière : nous choisissons avec vous la formule, la meilleure saison et l'égyptologue francophone qui donnera vie aux temples.",
    ],
    highlights: [
      {
        title: "Louxor et la vallée des Rois",
        text: "Karnak et ses forêts de colonnes, les tombeaux peints de la rive ouest, Hatchepsout : la plus grande concentration de merveilles d'Égypte.",
      },
      {
        title: "Les temples du fleuve",
        text: "Edfou dédié à Horus, Kom Ombo le temple double, Philae sauvé des eaux : les escales mythiques de la croisière, souvent au lever du jour.",
      },
      {
        title: "Assouan la nubienne",
        text: "Felouques autour de l'île Éléphantine, jardins de Kitchener, villages nubiens colorés — et l'excursion inoubliable vers Abou Simbel.",
      },
      {
        title: "La vie à bord",
        text: "Thé à la menthe au coucher du soleil, rives défilant au rythme lent du fleuve : la croisière est un voyage dans le voyage.",
      },
    ],
    bestSeason:
      "Octobre à avril : ciel limpide et chaleur douce. L'été est très chaud mais offre des tarifs attractifs pour les amateurs avertis.",
    idealDuration: "8 à 12 jours",
    budgetFrom: 1500,
    faq: [
      {
        question: "Bateau de croisière ou dahabieh : que choisir ?",
        answer:
          "Le bateau 5★ offre confort et animations à prix doux ; la dahabieh, voilier d'une dizaine de cabines, privilégie le charme et les escales confidentielles. Deux ambiances, deux budgets — nous vous aidons à trancher.",
      },
      {
        question: "Quel budget pour une croisière sur le Nil ?",
        answer:
          "À partir de 1 500 € par personne pour 8 jours en pension complète sur un bateau 5★, vols et excursions guidées inclus. Comptez davantage pour une dahabieh ou un combiné avec Le Caire et Abou Simbel.",
      },
      {
        question: "Faut-il un visa pour l'Égypte ?",
        answer:
          "Oui : l'e-visa s'obtient en ligne avant le départ (ou à l'arrivée dans certains cas). Passeport valide 6 mois après le retour. Nous vous accompagnons dans ces démarches.",
      },
    ],
  },
};

export function getDestinationContent(
  slug: string,
): DestinationContent | undefined {
  return destinationContent[slug];
}
