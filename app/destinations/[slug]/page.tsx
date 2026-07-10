import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CalendarDays, Clock, Wallet, ChevronRight } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { allDestinations } from "@/lib/destinations";
import {
  destinationContent,
  getDestinationContent,
} from "@/lib/destination-content";
import { siteConfig, siteUrl } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(destinationContent).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const content = getDestinationContent(slug);
  if (!content) return {};
  return {
    title: content.metaTitle,
    description: content.metaDescription,
    alternates: { canonical: `/destinations/${slug}` },
  };
}

export default async function DestinationPage({ params }: Props) {
  const { slug } = await params;
  const content = getDestinationContent(slug);
  const card = allDestinations.find((d) => d.slug === slug);
  if (!content || !card) notFound();

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "TouristTrip",
      name: content.metaTitle,
      description: content.metaDescription,
      image: `${siteUrl}${card.image}`,
      touristType: "Voyage sur mesure",
      provider: { "@id": `${siteUrl}/#travelagency` },
      offers: {
        "@type": "Offer",
        price: content.budgetFrom,
        priceCurrency: "EUR",
        description: "Prix indicatif par personne, selon saison et prestations",
        url: `${siteUrl}/destinations/${slug}`,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: siteUrl },
        {
          "@type": "ListItem",
          position: 2,
          name: "Nos coups de cœur",
          item: `${siteUrl}/nos-coups-de-coeur`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: card.title,
          item: `${siteUrl}/destinations/${slug}`,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: content.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ];

  // Deterministic rotation: each page cross-links the next three destinations.
  const idx = allDestinations.findIndex((d) => d.slug === slug);
  const others = [1, 2, 3].map(
    (offset) => allDestinations[(idx + offset) % allDestinations.length],
  );

  return (
    <div className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHeader
        title={card.title}
        subtitle={content.heroSubtitle}
        backgroundImage={card.image}
      />

      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* Breadcrumb */}
        <nav
          aria-label="Fil d'Ariane"
          className="mb-10 flex flex-wrap items-center gap-1 text-sm text-gray-500"
        >
          <Link href="/" className="hover:text-primary transition-colors">
            Accueil
          </Link>
          <ChevronRight className="h-4 w-4" aria-hidden />
          <Link
            href="/nos-coups-de-coeur"
            className="hover:text-primary transition-colors"
          >
            Nos coups de cœur
          </Link>
          <ChevronRight className="h-4 w-4" aria-hidden />
          <span className="text-gray-900">{card.title}</span>
        </nav>

        {/* Intro */}
        <div className="mx-auto mb-12 max-w-4xl">
          <h2 className="text-primary mb-6 text-center font-serif text-3xl font-bold">
            {content.introTitle}
          </h2>
          {content.intro.map((paragraph, idx) => (
            <p
              key={idx}
              className="mb-4 text-lg leading-relaxed text-gray-600"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Key facts */}
        <div className="mx-auto mb-16 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            {
              icon: CalendarDays,
              label: "Meilleure saison",
              value: content.bestSeason,
            },
            {
              icon: Clock,
              label: "Durée idéale",
              value: content.idealDuration,
            },
            {
              icon: Wallet,
              label: "Budget indicatif",
              value: `À partir de ${content.budgetFrom.toLocaleString("fr-FR")} € / pers.`,
            },
          ].map((fact, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-gray-100 bg-white p-6 text-center shadow-sm"
            >
              <fact.icon className="text-primary mx-auto mb-3 h-7 w-7" />
              <h3 className="mb-2 text-sm font-semibold tracking-wide text-gray-400 uppercase">
                {fact.label}
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                {fact.value}
              </p>
            </div>
          ))}
        </div>

        {/* Highlights */}
        <div className="mb-16">
          <h2 className="mb-10 text-center font-serif text-3xl font-bold text-gray-900">
            Les temps forts du voyage
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {content.highlights.map((highlight, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="text-primary/30 font-serif text-3xl font-bold">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 mb-3 font-serif text-xl font-bold text-gray-900">
                  {highlight.title}
                </h3>
                <p className="leading-relaxed text-gray-600">
                  {highlight.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mid CTA */}
        <div className="bg-primary mb-16 rounded-2xl p-10 text-center text-white md:p-14">
          <h2 className="mb-4 font-serif text-3xl font-bold">
            Envie de ce voyage ?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
            Racontez-nous vos envies et vos dates : {siteConfig.advisor} vous
            prépare une proposition personnalisée, sans engagement. Prix
            indicatifs — chaque voyage est unique, votre devis aussi.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="text-primary bg-white hover:bg-gray-100"
            >
              <Link
                href={`/devis?destination=${encodeURIComponent(card.title)}`}
              >
                Demander un devis gratuit
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <a href={`tel:${siteConfig.phoneE164}`}>{siteConfig.phone}</a>
            </Button>
          </div>
        </div>

        {/* FAQ */}
        <div className="mx-auto mb-16 max-w-3xl">
          <h2 className="mb-10 text-center font-serif text-3xl font-bold text-gray-900">
            Vos questions sur {card.title}
          </h2>
          <div className="space-y-6">
            {content.faq.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <h3 className="mb-3 font-serif text-lg font-bold text-gray-900">
                  {item.question}
                </h3>
                <p className="leading-relaxed text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Other destinations */}
        <div>
          <h2 className="mb-8 text-center font-serif text-2xl font-bold text-gray-900">
            D&apos;autres destinations à découvrir
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {others.map((destination) => (
              <Link
                key={destination.slug}
                href={`/destinations/${destination.slug}`}
                className="group relative h-48 overflow-hidden rounded-xl shadow-sm transition-shadow hover:shadow-lg"
              >
                <Image
                  src={destination.image}
                  alt={destination.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="font-serif text-lg font-bold text-white">
                    {destination.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
