import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight, Phone } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { FaqList } from "@/components/faq-list";
import { Button } from "@/components/ui/button";
import { formatEuros } from "@/lib/utils";
import { siteConfig, siteUrl } from "@/lib/site";
import trainImg from "@/public/images/train.jpg";
import contentTrain from "@/public/images/content-train.jpg";

const path = "/nos-voyages/voyages-en-train";
const title = "Voyages en train : Orient-Express, Scandinavie, Canada, Japon";
const description =
  "Voyages en train sur mesure : Orient-Express, boucle scandinave, Italie, Suisse panoramique, Est canadien et Japon. Train, hôtels et transferts dans un seul devis.";
const tripType = "Voyage en train";
const devisHref = (destination?: string) =>
  `/devis?type=${encodeURIComponent(tripType)}${
    destination ? `&destination=${encodeURIComponent(destination)}` : ""
  }`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  // A page openGraph replaces the layout one, so repeat its base fields.
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: siteConfig.name,
    title,
    description,
    images: [
      {
        url: trainImg.src,
        alt: "Train rouge sur le viaduc de Landwasser, en Suisse",
      },
    ],
  },
};

// Prices and contents come from Véronique's 2026 supplier brochures (Nov 2026).
// No priceFrom = "prix sur devis".
const trips: {
  title: string;
  route: string;
  duration?: string;
  priceFrom?: number;
  text: string;
  included?: string;
  link?: { href: string; label: string };
}[] = [
  {
    title: "Le Venice Simplon-Orient-Express",
    route: "Paris, Venise",
    duration: "4 jours / 3 nuits",
    priceFrom: 5760,
    text: "Une nuit à bord du train de légende entre Paris et Venise : cabine boisée, dîner en voiture-restaurant, tenue habillée de rigueur. Puis deux nuits à Venise, et le retour en avion (ou l'inverse).",
    included:
      "le train en cabine historique double en pension complète, le vol retour, les transferts à Venise, 2 nuits d'hôtel 4* avec petits déjeuners.",
  },
  {
    title: "La boucle scandinave",
    route: "Hambourg, Stockholm, Oslo, Copenhague",
    duration: "9 jours / 8 nuits",
    priceFrom: 1710,
    text: "Au départ de Paris, sans avion : un train de nuit vers Stockholm, le train à grande vitesse jusqu'à Oslo, une nuit en ferry vers Copenhague, puis le retour par Hambourg.",
    included:
      "les trains, le train de nuit, le ferry de nuit en cabine double, 6 nuits d'hôtel 3* en chambre double. En option : hôtels 4*, 1ʳᵉ classe.",
  },
  {
    title: "L'Italie en train",
    route: "Venise, Florence, Rome, Naples, Cinque Terre",
    duration: "8 à 12 jours",
    text: "Deux ou trois villes reliées en train rapide, ou un itinéraire plus libre de la Toscane à la Ligurie, de Bologne à Venise, de Rome à la baie de Naples. L'aller peut se faire à bord de l'Orient-Express.",
  },
  {
    title: "La Suisse en train panoramique",
    route: "Glacier Express, Bernina Express",
    text: "De grandes vitres, des viaducs et des glaciers. Les lignes de l'Albula et de la Bernina sont inscrites au patrimoine mondial de l'Unesco.",
  },
  {
    title: "L'Est canadien de train en train",
    route: "Toronto, Ottawa, Montréal, Québec",
    duration: "10 jours / 8 nuits",
    priceFrom: 1930,
    text: "Quatre villes, et le train entre chacune : la Tour CN à Toronto, le Parlement d'Ottawa, le Vieux-Port de Montréal et le Vieux-Québec fortifié.",
    included:
      "les vols France, Canada aller-retour, les trains en classe économique, les hôtels 3* en chambre double, une assistance francophone 7j/7.",
  },
  {
    title: "Rails d'exception, le Japon en train",
    route: "Tokyo, Nikko, Shizuoka, Kyoto, Ise, Osaka",
    duration: "19 jours / 16 nuits",
    priceFrom: 4890,
    text: "Un itinéraire où chaque trajet est une expérience : le Spacia X vers Nikko, un train à vapeur dans les plantations de thé, le Sagano Romantic Train à Kyoto, le Shimakaze vers Ise.",
    included:
      "les vols, les pass et billets de train, 16 nuits d'hôtel avec petits déjeuners, une cérémonie du thé, quelques repas, une assistance 7j/7.",
    link: { href: "/destinations/japon", label: "Voir notre page Japon" },
  },
];

const faq = [
  {
    question: "Pourquoi réserver un voyage en train avec une agence ?",
    answer: `Un voyage en train demande souvent plusieurs billets, des correspondances et des hôtels près des gares. ${siteConfig.advisor} réunit tout dans un seul dossier, choisit les bons horaires et reste votre interlocutrice en cas de retard ou de grève. Vous profitez aussi des garanties d'une agence immatriculée Atout France, avec la garantie financière de l'APST.`,
  },
  {
    question: "Vendez-vous des billets de train seuls ?",
    answer:
      "Non. Le train fait toujours partie d'un voyage complet, avec les hôtels, les transferts et parfois les vols ou les visites. C'est ce qui nous permet de tout organiser et de vous accompagner du départ au retour.",
  },
  {
    question: "Combien coûte un voyage en train ?",
    answer:
      "Comptez à partir de 1 710 € par personne pour la boucle scandinave (9 jours) et à partir de 5 760 € pour l'Orient-Express (4 jours). Le prix dépend des dates, de la classe et des hôtels : nous vous envoyons un devis gratuit et détaillé.",
  },
  {
    question: "Combien de temps à l'avance faut-il réserver ?",
    answer:
      "Les trains de légende et les trains panoramiques en été partent souvent complets plusieurs mois à l'avance : mieux vaut en parler dès que vos dates se précisent. Pour un week-end en Europe, quelques semaines suffisent souvent.",
  },
  {
    question: "Peut-on partir de Rennes ?",
    answer:
      "Oui. Les TGV relient Rennes à Paris en 1 h 30 environ, et de nombreux trains vers l'Europe partent de Paris. Nous prévoyons les correspondances, et une nuit à Paris si l'horaire l'impose.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: siteUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "Voyages en train",
        item: `${siteUrl}${path}`,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  },
];

export default function VoyagesEnTrain() {
  return (
    <div className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHeader
        title="Voyages en train"
        subtitle="Prendre le temps, regarder le paysage, arriver reposé"
        backgroundImage={trainImg}
      />

      <div className="container mx-auto px-4 py-12 md:px-8 md:py-16">
        <nav
          aria-label="Fil d'Ariane"
          className="mb-12 flex flex-wrap items-center gap-1 text-sm text-gray-600"
        >
          <Link href="/" className="hover:text-primary transition-colors">
            Accueil
          </Link>
          <ChevronRight className="h-4 w-4" aria-hidden />
          <span aria-current="page" className="text-gray-900">
            Voyages en train
          </span>
        </nav>

        <div className="mb-20 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-4xl leading-tight text-gray-900 md:text-5xl">
              Le voyage commence dès le départ
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-gray-700">
              <p>
                En train, on ne saute pas d&apos;un aéroport à l&apos;autre : on
                traverse les paysages, on arrive en plein centre-ville, et le
                trajet devient un moment du voyage. Une belle façon de partir si
                vous préférez éviter l&apos;avion, voyager plus léger pour la
                planète ou simplement prendre votre temps.
              </p>
              <p>
                {siteConfig.advisor} organise des voyages où le train tient le
                premier rôle : trains de légende, trains panoramiques, grands
                circuits dont les étapes se font en train. Trains, hôtels et
                transferts : tout est réuni dans un seul devis.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href={devisHref()}>Demander un devis train</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={`tel:${siteConfig.phoneE164}`}>
                  <Phone className="mr-2 h-4 w-4" aria-hidden />
                  {siteConfig.phone}
                </a>
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] overflow-hidden">
            <Image
              src={contentTrain}
              alt="Train rouge sur un pont métallique au-dessus du Rhin, en Suisse"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        <h2 className="mb-8 font-serif text-4xl text-gray-900">
          Nos voyages en train
        </h2>
        <ol className="border-b border-gray-300">
          {trips.map((trip, idx) => (
            <li
              key={trip.title}
              className="grid grid-cols-[3rem_1fr] gap-x-4 border-t border-gray-300 py-8"
            >
              <span className="text-primary font-serif text-3xl">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <div className="max-w-3xl">
                <h3 className="font-serif text-2xl text-gray-900">
                  {trip.title}
                </h3>
                <p className="mt-1 text-sm tracking-wide text-gray-600 uppercase">
                  {[trip.route, trip.duration].filter(Boolean).join(" · ")}
                </p>
                <p className="mt-3 leading-relaxed text-gray-600">
                  {trip.text}
                </p>
                {trip.included && (
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    <span className="font-medium text-gray-900">Compris :</span>{" "}
                    {trip.included}
                  </p>
                )}
                <div className="mt-4 flex flex-wrap items-baseline gap-x-6 gap-y-2">
                  <p className="font-serif text-xl text-gray-900">
                    {trip.priceFrom
                      ? `À partir de ${formatEuros(trip.priceFrom)} € / pers.`
                      : "Prix sur devis"}
                  </p>
                  <Link
                    href={devisHref(trip.title)}
                    className="text-primary inline-flex items-center gap-1 underline-offset-4 hover:underline"
                  >
                    Demander ce voyage
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                  {trip.link && (
                    <Link
                      href={trip.link.href}
                      className="text-primary inline-flex items-center gap-1 underline-offset-4 hover:underline"
                    >
                      {trip.link.label}
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-6 mb-20 max-w-3xl text-sm text-gray-600">
          Prix indicatifs TTC par personne, en chambre ou cabine double, selon
          les dates et les disponibilités. Chaque voyage s&apos;adapte : durée,
          hôtels, classe de train.
        </p>

        <div className="max-w-3xl">
          <h2 className="mb-8 font-serif text-4xl text-gray-900">
            Vos questions sur les voyages en train
          </h2>
          <FaqList items={faq} />
          <Button asChild size="lg" className="mt-10">
            <Link href={devisHref()}>Demander un devis train</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
