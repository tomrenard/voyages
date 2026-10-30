import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Calendar, User, Clock, ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { articles, getArticle, type ArticleBlock } from "@/lib/articles";
import { FaqList } from "@/components/faq-list";
import { allDestinations } from "@/lib/destinations";
import { siteConfig, siteUrl } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/actualites/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      url: `${siteUrl}/actualites/${article.slug}`,
      publishedTime: article.date,
      authors: [article.author],
      images: [{ url: article.image.src }],
    },
  };
}

const dateFormatter = new Intl.DateTimeFormat("fr-FR", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

function Block({ block }: { block: ArticleBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="mt-12 mb-4 font-serif text-2xl font-bold text-gray-900 md:text-3xl">
          {block.text}
        </h2>
      );
    case "ul":
      return (
        <ul className="my-6 list-disc space-y-2 pl-6 text-lg leading-relaxed text-gray-700">
          {block.items.map((item, i) => (
            <li key={i}>
              {typeof item === "string" ? (
                item
              ) : (
                <Link
                  href={item.href}
                  className="text-primary underline underline-offset-4"
                >
                  {item.text}
                </Link>
              )}
            </li>
          ))}
        </ul>
      );
    default:
      return (
        <p className="mt-6 text-lg leading-relaxed text-gray-700">
          {block.text}
          {block.link && (
            <>
              {" "}
              <Link
                href={block.link.href}
                className="text-primary underline underline-offset-4"
              >
                {block.link.label}
              </Link>
              {/[.?!]$/.test(block.link.label) ? "" : "."}
            </>
          )}
        </p>
      );
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const formattedDate = dateFormatter.format(new Date(article.date));
  // Throws on a mistyped slug so the static build fails instead of dropping it.
  const related = (article.destinations ?? []).map((slug) => {
    const destination = allDestinations.find((d) => d.slug === slug);
    if (!destination) throw new Error(`Unknown destination slug: ${slug}`);
    return destination;
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: `${siteUrl}${article.image.src}`,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      "@type": "Person",
      name: "Véronique Guyomard",
      jobTitle: "Conseillère voyages",
      url: `${siteUrl}/reves-de-voyages`,
      worksFor: { "@id": `${siteUrl}/#travelagency` },
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/logo.png`,
      },
    },
    mainEntityOfPage: `${siteUrl}/actualites/${article.slug}`,
  };

  const faqJsonLd = article.faq?.length && {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: siteUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "Actualités",
        item: `${siteUrl}/actualites`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `${siteUrl}/actualites/${article.slug}`,
      },
    ],
  };

  return (
    <article className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            [jsonLd, breadcrumbJsonLd, faqJsonLd].filter(Boolean),
          ),
        }}
      />

      <div className="relative h-[320px] w-full overflow-hidden md:h-[440px]">
        <Image
          src={article.image}
          alt={article.imageAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-10 text-white md:pb-14">
            <span className="bg-primary mb-4 inline-block rounded-full px-3 py-1 text-xs font-semibold">
              {article.category}
            </span>
            <h1 className="max-w-3xl font-serif text-3xl font-bold md:text-5xl">
              {article.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/actualites"
            className="hover:text-primary mb-8 inline-flex items-center gap-2 text-sm text-gray-500 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour aux actualités
          </Link>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-gray-100 pb-6 text-sm text-gray-500">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              <time dateTime={article.date}>{formattedDate}</time>
            </span>
            <span className="flex items-center gap-1.5">
              <User className="h-4 w-4" />
              {article.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {article.readingTime} de lecture
            </span>
          </div>

          <div className="mt-2">
            {article.content.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </div>

          {article.faq?.length ? (
            <section className="mt-16">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Questions fréquentes
              </h2>
              <FaqList items={article.faq} />
            </section>
          ) : null}

          {related.length > 0 && (
            <nav aria-label="Destinations évoquées" className="mt-12">
              <h2 className="mb-4 font-serif text-xl font-bold text-gray-900">
                Les destinations de cet article
              </h2>
              <ul className="flex flex-wrap gap-3">
                {related.map((d) => (
                  <li key={d.slug}>
                    <Link
                      href={`/destinations/${d.slug}`}
                      className="hover:border-primary hover:text-primary inline-block rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-700 transition-colors"
                    >
                      {d.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          <div className="mt-14 flex items-start gap-5 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:p-8">
            <div className="bg-primary/10 text-primary flex h-14 w-14 shrink-0 items-center justify-center rounded-full font-serif text-xl font-bold">
              V
            </div>
            <div>
              <p className="mb-1 text-sm font-semibold tracking-wide text-gray-500 uppercase">
                À propos de l&apos;auteure
              </p>
              <h2 className="mb-2 font-serif text-lg font-bold text-gray-900">
                {article.author}, conseillère voyages
              </h2>
              <p className="text-sm leading-relaxed text-gray-600">
                Fondatrice de Rêves de Voyages en {siteConfig.foundedYear},
                Véronique conçoit des voyages sur mesure depuis la métropole
                rennaise. Chaque conseil publié ici vient de son expérience du
                terrain et de celle de ses voyageurs.{" "}
                <Link
                  href="/reves-de-voyages"
                  className="text-primary underline underline-offset-4"
                >
                  En savoir plus sur l&apos;agence
                </Link>
                .
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-gray-100 bg-gray-50 p-8 text-center">
            <h2 className="mb-3 font-serif text-2xl font-bold text-gray-900">
              Envie de partir ?
            </h2>
            <p className="mx-auto mb-6 max-w-xl text-gray-600">
              Parlons de votre projet : nous construisons avec vous un voyage
              sur mesure, à votre rythme et selon votre budget.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white"
            >
              <Link href="/devis">Demander un devis gratuit</Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
