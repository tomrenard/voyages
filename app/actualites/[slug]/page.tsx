import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Calendar, User, Clock, ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { articles, getArticle, type ArticleBlock } from "@/lib/articles";
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
      images: [{ url: article.image }],
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
        <ul className="my-6 list-disc space-y-2 pl-6 leading-relaxed text-gray-700">
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    default:
      return (
        <p className="mt-6 text-lg leading-relaxed text-gray-700">
          {block.text}
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: `${siteUrl}${article.image}`,
    datePublished: article.date,
    dateModified: article.date,
    author: { "@type": "Person", name: article.author },
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

  return (
    <article className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-gray-100 pb-6 text-sm text-gray-400">
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

          <div className="mt-14 rounded-2xl border border-gray-100 bg-gray-50 p-8 text-center">
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
              <Link href="/contact">Demander un devis gratuit</Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
