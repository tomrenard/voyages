import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight, Phone } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { FaqList } from "@/components/faq-list";
import { Button } from "@/components/ui/button";
import { siteConfig, siteUrl } from "@/lib/site";
import trainImg from "@/public/images/train.jpg";
import contentTrain from "@/public/images/content-train.jpg";

const path = "/nos-voyages/voyages-en-train";
const title = "Voyages en train : trains panoramiques, de légende et de nuit";
const description =
  "Voyages en train sur mesure : trains panoramiques en Suisse, trains de légende, city-breaks en Europe au départ de Rennes. Train, hôtels et visites dans un seul devis.";
const devisHref = `/devis?type=${encodeURIComponent("Voyage en train")}`;

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

// No prices until Véronique confirms them from a supplier quote.
const ideas: {
  title: string;
  text: string;
  link?: { href: string; label: string };
}[] = [
  {
    title: "Les trains de légende",
    text: "Cabines boisées, dîners à bord et escales choisies : le Venice Simplon-Orient-Express entre Paris et l'Italie, ou le Rocky Mountaineer dans les Rocheuses canadiennes. Le train est le voyage.",
  },
  {
    title: "La Suisse et les Alpes en train panoramique",
    text: "Glacier Express, Bernina Express : de grandes vitres, des viaducs et des glaciers. Les lignes de l'Albula et de la Bernina sont inscrites au patrimoine mondial de l'Unesco.",
  },
  {
    title: "L'Europe en train, au départ de Rennes",
    text: "Bruxelles, Amsterdam, Londres, Venise ou Vienne : le train, l'hôtel et les visites réunis, avec les correspondances prévues. Pour certaines villes, le train de nuit permet de partir le soir et d'arriver le matin.",
  },
  {
    title: "Les grands voyages où le train relie les étapes",
    text: "Au Japon, le Shinkansen relie Tokyo, Kyoto et Hiroshima en quelques heures. Nous construisons l'itinéraire et réservons les trains pour vous.",
    link: { href: "/destinations/japon", label: "Voir notre voyage au Japon" },
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
      "Notre métier est de construire des voyages complets : le train avec l'hébergement, les visites ou les transferts. Pour un simple aller-retour, les sites des compagnies ferroviaires restent souvent le plus simple.",
  },
  {
    question: "Combien coûte un voyage en train ?",
    answer:
      "Tout dépend du train, de la saison et de la durée : un week-end en Europe et une semaine à bord d'un train de luxe n'ont rien à voir. Nous vous envoyons un devis gratuit et détaillé, selon vos dates et vos envies.",
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
                trajet devient un moment du voyage.
              </p>
              <p>
                {siteConfig.advisor} organise des voyages où le train tient le
                premier rôle : trains panoramiques, trains de nuit, trains de
                légende, ou grands circuits dont les étapes se font en train.
                Billets, hôtels, visites et transferts : tout est réuni dans un
                seul devis.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href={devisHref}>Demander un devis train</Link>
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
          Nos idées de voyages en train
        </h2>
        <ol className="mb-20 border-b border-gray-300">
          {ideas.map((idea, idx) => (
            <li
              key={idea.title}
              className="grid grid-cols-[3rem_1fr] gap-x-4 border-t border-gray-300 py-8"
            >
              <span className="text-primary font-serif text-3xl">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-serif text-2xl text-gray-900">
                  {idea.title}
                </h3>
                <p className="mt-2 max-w-3xl leading-relaxed text-gray-600">
                  {idea.text}
                </p>
                {idea.link && (
                  <Link
                    href={idea.link.href}
                    className="text-primary mt-3 inline-flex items-center gap-1 underline-offset-4 hover:underline"
                  >
                    {idea.link.label}
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                )}
              </div>
            </li>
          ))}
        </ol>

        <div className="max-w-3xl">
          <h2 className="mb-8 font-serif text-4xl text-gray-900">
            Vos questions sur les voyages en train
          </h2>
          <FaqList items={faq} />
          <Button asChild size="lg" className="mt-10">
            <Link href={devisHref}>Demander un devis train</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
