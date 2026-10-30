import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ChevronRight, Phone } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { DestinationCard } from "@/components/destination-card";
import { Button } from "@/components/ui/button";
import { articles } from "@/lib/articles";
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
  const card = allDestinations.find((d) => d.slug === slug);
  if (!content || !card) return {};
  return {
    title: content.metaTitle,
    description: content.metaDescription,
    alternates: { canonical: `/destinations/${slug}` },
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      images: [{ url: card.image.src, alt: card.imageAlt }],
    },
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
      image: `${siteUrl}${card.image.src}`,
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

  const relatedArticles = articles.filter((a) =>
    a.destinations?.includes(slug),
  );

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

      <div className="container mx-auto px-4 py-12 md:px-8 md:py-16">
        <nav
          aria-label="Fil d'Ariane"
          className="mb-12 flex flex-wrap items-center gap-1 text-sm text-gray-600"
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
          <span aria-current="page" className="text-gray-900">
            {card.title}
          </span>
        </nav>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-4xl leading-tight text-gray-900 md:text-5xl">
              {content.introTitle}
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-gray-700">
              {content.intro.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <h2 className="mt-20 mb-8 font-serif text-4xl text-gray-900">
              Les temps forts du voyage
            </h2>
            <ol className="border-b border-gray-300">
              {content.highlights.map((highlight, idx) => (
                <li
                  key={idx}
                  className="grid grid-cols-[3rem_1fr] gap-x-4 border-t border-gray-300 py-8"
                >
                  <span className="text-primary font-serif text-3xl">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl text-gray-900">
                      {highlight.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-gray-600">
                      {highlight.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <h2 className="mt-20 mb-8 font-serif text-4xl text-gray-900">
              Vos questions sur {card.title}
            </h2>
            {/* Native disclosure: answers stay in the HTML for search engines. */}
            <div className="border-b border-gray-300">
              {content.faq.map((item, idx) => (
                <details
                  key={idx}
                  className="group border-t border-gray-300 py-6"
                  open={idx === 0}
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-serif text-xl text-gray-900 [&::-webkit-details-marker]:hidden">
                    <h3>{item.question}</h3>
                    <span
                      aria-hidden
                      className="text-primary mt-0.5 text-2xl leading-none transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-4 leading-relaxed text-gray-600">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-4 lg:col-start-9">
            <div className="bg-sand p-8 lg:sticky lg:top-28">
              <p className="eyebrow">En bref</p>
              <dl className="mt-6 divide-y divide-gray-300 border-y border-gray-300">
                <div className="py-4">
                  <dt className="text-xs tracking-wide text-gray-600 uppercase">
                    Budget indicatif
                  </dt>
                  <dd className="mt-1 font-serif text-2xl text-gray-900">
                    À partir de {content.budgetFrom.toLocaleString("fr-FR")} € /
                    pers.
                  </dd>
                </div>
                <div className="py-4">
                  <dt className="text-xs tracking-wide text-gray-600 uppercase">
                    Durée idéale
                  </dt>
                  <dd className="mt-1 font-serif text-2xl text-gray-900">
                    {content.idealDuration}
                  </dd>
                </div>
                <div className="py-4">
                  <dt className="text-xs tracking-wide text-gray-600 uppercase">
                    Meilleure saison
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-gray-700">
                    {content.bestSeason}
                  </dd>
                </div>
              </dl>
              <div className="mt-8 flex flex-col gap-3">
                <Button asChild size="lg">
                  <Link
                    href={`/devis?destination=${encodeURIComponent(card.title)}`}
                  >
                    Demander un devis gratuit
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={`tel:${siteConfig.phoneE164}`}>
                    <Phone className="mr-2 h-4 w-4" aria-hidden />
                    {siteConfig.phone}
                  </a>
                </Button>
              </div>
              <p className="mt-6 text-sm text-gray-600">
                Prix indicatifs : chaque voyage est unique, votre devis aussi.{" "}
                {siteConfig.advisor} vous prépare une proposition personnalisée,
                sans engagement.
              </p>
            </div>
          </aside>
        </div>

        {relatedArticles.length > 0 && (
          <section className="mt-24">
            <h2 className="mb-8 font-serif text-4xl text-gray-900">
              Nos articles pour préparer votre voyage
            </h2>
            <ul className="border-b border-gray-300">
              {relatedArticles.map((article) => (
                <li key={article.slug} className="border-t border-gray-300">
                  <Link
                    href={`/actualites/${article.slug}`}
                    className="group flex items-center justify-between gap-6 py-6"
                  >
                    <span>
                      <span className="group-hover:text-primary block font-serif text-2xl text-gray-900 transition-colors">
                        {article.title}
                      </span>
                      <span className="mt-1 block text-gray-600">
                        {article.excerpt}
                      </span>
                    </span>
                    <ArrowRight
                      className="h-5 w-5 shrink-0 text-gray-500 transition-transform group-hover:translate-x-1"
                      aria-hidden
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="mt-24">
          <p className="eyebrow">Continuer le voyage</p>
          <h2 className="mt-4 mb-12 font-serif text-4xl text-gray-900">
            D&apos;autres destinations à découvrir
          </h2>
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-3">
            {others.map((destination) => (
              <DestinationCard
                key={destination.slug}
                destination={destination}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
