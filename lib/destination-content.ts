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

const coupsDeCoeurContent: Record<string, DestinationContent> = {
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

const autresDestinationsContent: Record<string, DestinationContent> = {
  "ile-maurice": {
    slug: "ile-maurice",
    metaTitle: "Voyage à l'Île Maurice sur Mesure",
    metaDescription:
      "L'île Maurice avec Rêves de Voyages : plages, lagons, Morne Brabant et douceur créole. Séjour ou voyage de noces sur mesure, devis gratuit depuis Rennes.",
    heroSubtitle:
      "Lagons émeraude et douceur créole : l'île de l'hospitalité",
    introTitle: "Pourquoi partir à l'île Maurice ?",
    intro: [
      "Maurice a ce don rare de plaire à tout le monde : plages de sable blanc ourlées de filaos, lagons paisibles, montagnes spectaculaires comme le Morne Brabant, terres aux sept couleurs de Chamarel — et surtout une hospitalité créole qui donne envie de revenir avant même d'être reparti.",
      "Chaque côte a son caractère : le nord animé et ses grands hôtels, l'est et ses plages immaculées, le sud sauvage autour de Blue Bay, l'ouest et ses couchers de soleil face au Morne. Nous choisissons avec vous la région, l'hôtel et le rythme qui correspondent à votre projet — lune de miel, vacances en famille ou pur farniente.",
    ],
    highlights: [
      {
        title: "Le Morne Brabant",
        text: "Montagne classée UNESCO plongeant dans l'un des plus beaux lagons de l'île : son ascension au lever du jour est un souvenir pour la vie.",
      },
      {
        title: "Chamarel et le sud sauvage",
        text: "Les terres aux sept couleurs, la cascade de Chamarel et le parc des gorges de Rivière Noire : le visage volcanique et verdoyant de Maurice.",
      },
      {
        title: "Lagons et activités nautiques",
        text: "Snorkeling à Blue Bay, sorties dauphins à Tamarin, catamaran vers les îlots du nord : le lagon mauricien se vit autant qu'il se contemple.",
      },
      {
        title: "La culture créole",
        text: "Marché de Port-Louis, maisons coloniales, street food indo-mauricienne et séga endiablé : une douceur de vivre métissée unique.",
      },
    ],
    bestSeason:
      "Avril-mai et septembre à novembre : saison douce et sèche, mer calme et tarifs plus doux qu'aux fêtes. L'île se visite toute l'année.",
    idealDuration: "10 à 14 jours",
    budgetFrom: 1800,
    faq: [
      {
        question: "Quelle côte choisir à l'île Maurice ?",
        answer:
          "Le nord pour l'animation et les infrastructures, l'est pour les plus belles plages et les hôtels d'exception, l'ouest pour les couchers de soleil et les activités nautiques, le sud pour l'authenticité. Nous vous orientons selon la saison et votre style de voyage.",
      },
      {
        question: "Quel budget pour un séjour à l'île Maurice ?",
        answer:
          "À partir de 1 800 € par personne pour 10 jours en hôtel 4★ avec petits-déjeuners, vols inclus. Les formules tout compris et les 5★ pieds dans l'eau se situent plutôt entre 2 500 et 4 000 € par personne.",
      },
      {
        question: "Faut-il un visa pour l'île Maurice ?",
        answer:
          "Non : pour les ressortissants français, un passeport valide couvrant la durée du séjour et un billet retour suffisent pour un séjour touristique. L'anglais et le français sont parlés partout — un dépaysement sans barrière de langue.",
      },
    ],
  },
  seychelles: {
    slug: "seychelles",
    metaTitle: "Voyage aux Seychelles sur Mesure",
    metaDescription:
      "Les Seychelles avec Rêves de Voyages : Mahé, Praslin, La Digue et leurs plages de rêve. Combiné d'îles sur mesure, devis gratuit depuis Rennes.",
    heroSubtitle:
      "Granit sculpté, sable immaculé : l'archipel hors du temps",
    introTitle: "Pourquoi partir aux Seychelles ?",
    intro: [
      "Les Seychelles ne ressemblent à aucune autre destination balnéaire : ici, les plages sont bordées de blocs de granit rose sculptés par les éléments, la végétation descend jusqu'au sable et les tortues géantes se promènent en liberté. Un paradis resté authentique, à 8 heures de vol sans décalage horaire épuisant.",
      "Le combiné d'îles est la formule reine : Mahé la montagneuse, Praslin et sa Vallée de Mai classée UNESCO, La Digue et ses plages mythiques à parcourir à vélo. Nous composons votre itinéraire entre hôtels de charme, guesthouses créoles et adresses d'exception.",
    ],
    highlights: [
      {
        title: "Anse Source d'Argent",
        text: "À La Digue, la plage la plus photographiée du monde : blocs de granit, eau turquoise peu profonde et lumière dorée en fin de journée.",
      },
      {
        title: "La Vallée de Mai à Praslin",
        text: "Forêt primaire classée UNESCO, royaume du coco de mer et du perroquet noir : une plongée dans un éden préhistorique.",
      },
      {
        title: "Mahé et ses 65 plages",
        text: "Entre le marché de Victoria, les routes de montagne du parc du Morne Seychellois et les criques secrètes du sud, l'île principale surprend.",
      },
      {
        title: "Snorkeling et tortues",
        text: "Les réserves marines de Sainte-Anne et de l'île Cocos regorgent de poissons tropicaux ; les tortues croisent régulièrement les nageurs.",
      },
    ],
    bestSeason:
      "Avril-mai et octobre-novembre, aux intersaisons : mer calme, lumière superbe et affluence modérée. Agréable toute l'année (27 °C en moyenne).",
    idealDuration: "10 à 15 jours",
    budgetFrom: 2500,
    faq: [
      {
        question: "Quelles îles choisir pour un premier voyage aux Seychelles ?",
        answer:
          "Le trio Mahé – Praslin – La Digue est le combiné idéal : liaisons faciles en ferry, trois ambiances complémentaires et les plus belles plages de l'archipel. Comptez au moins trois nuits par île pour en profiter.",
      },
      {
        question: "Quel budget pour un voyage aux Seychelles ?",
        answer:
          "À partir de 2 500 € par personne pour 10 jours en combiné 2-3 îles (vols, ferries, hôtels de charme avec petit-déjeuner). Les guesthouses créoles permettent de découvrir l'archipel à budget plus doux que sa réputation.",
      },
      {
        question: "Quand partir aux Seychelles ?",
        answer:
          "Les intersaisons (avril-mai, octobre-novembre) offrent les meilleures conditions : mer d'huile et chaleur douce. Notre article « Quand partir aux Seychelles ? » détaille la météo saison par saison — demandez-nous conseil selon vos dates.",
      },
    ],
  },
  thailande: {
    slug: "thailande",
    metaTitle: "Voyage en Thaïlande sur Mesure",
    metaDescription:
      "La Thaïlande avec Rêves de Voyages : Bangkok, temples du nord, plages de Krabi et îles du sud. Circuit et séjour sur mesure, devis gratuit depuis Rennes.",
    heroSubtitle:
      "Temples dorés, sourires et plages de rêve : le royaume aux mille visages",
    introTitle: "Pourquoi partir en Thaïlande ?",
    intro: [
      "La Thaïlande porte bien son surnom de pays du sourire : entre les temples étincelants de Bangkok, les montagnes du nord autour de Chiang Mai, les marchés flottants et les plages bordées de falaises karstiques du sud, elle offre l'un des plus beaux condensés d'Asie — accessible, accueillant et étonnamment doux pour le budget.",
      "Circuit culturel au nord puis farniente dans les îles, ou séjour balnéaire ponctué d'escapades : nous construisons l'équilibre qui vous ressemble, avec nos guides francophones, nos hôtels testés et les étapes qui évitent les foules.",
    ],
    highlights: [
      {
        title: "Bangkok la foisonnante",
        text: "Le Grand Palais et le Bouddha d'émeraude, les klongs en bateau-taxi, la street food de Chinatown : une capitale électrisante à apprivoiser en douceur.",
      },
      {
        title: "Chiang Mai et le nord",
        text: "Temples de teck, marchés nocturnes, rencontres avec les artisans et sanctuaires éthiques d'éléphants au cœur des montagnes.",
      },
      {
        title: "Krabi et la mer d'Andaman",
        text: "Railay et ses falaises légendaires, les îles Phi Phi, Koh Lanta la paisible : des paysages karstiques parmi les plus spectaculaires du monde.",
      },
      {
        title: "La cuisine thaïe",
        text: "Pad thaï au wok brûlant, curry vert, mangue au riz gluant : un voyage dans le voyage, du marché de rue au cours de cuisine.",
      },
    ],
    bestSeason:
      "Novembre à mars : saison sèche et chaleur agréable dans tout le pays. Le golfe de Thaïlande (Koh Samui) prend le relais d'avril à septembre.",
    idealDuration: "12 à 16 jours",
    budgetFrom: 1900,
    faq: [
      {
        question: "Faut-il un visa pour la Thaïlande ?",
        answer:
          "Les ressortissants français sont exemptés de visa pour les séjours touristiques courts (passeport valide 6 mois après le retour). Nous confirmons les conditions en vigueur au moment de la réservation.",
      },
      {
        question: "Quel budget pour un voyage en Thaïlande ?",
        answer:
          "À partir de 1 900 € par personne pour deux semaines combinant circuit au nord et plages au sud (vols internationaux et intérieurs, hôtels de charme, guides francophones). La Thaïlande offre un rapport qualité-prix exceptionnel.",
      },
      {
        question: "Circuit organisé ou voyage en liberté ?",
        answer:
          "Les deux se font très bien : le pays est sûr et rodé au tourisme. Nous recommandons souvent un circuit privé avec guide au nord pour la richesse culturelle, puis la liberté totale dans les îles du sud.",
      },
    ],
  },
};

/** Every destination landing page, keyed by slug (coups de cœur + autres). */
export const destinationContent: Record<string, DestinationContent> = {
  ...coupsDeCoeurContent,
  ...autresDestinationsContent,
};

export function getDestinationContent(
  slug: string,
): DestinationContent | undefined {
  return Object.hasOwn(destinationContent, slug)
    ? destinationContent[slug]
    : undefined;
}
