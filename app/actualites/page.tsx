import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Calendar, User } from "lucide-react";
import { Metadata } from "next";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Actualités & Blog",
  description:
    "Conseils de voyage, inspirations et guides pratiques par Rêves de Voyages : destinations, croisières, voyages de noces et week-ends.",
  alternates: { canonical: "/actualites" },
};

const dateFormatter = new Intl.DateTimeFormat("fr-FR", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export default function Actualites() {
  return (
    <div className="flex min-h-screen flex-col">
      <PageHeader
        title="Actualités & Blog"
        subtitle="Inspirations, conseils et nouvelles du monde"
        backgroundImage="/images/actualites.jpg"
      />

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {articles.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              <Link
                href={`/actualites/${post.slug}`}
                className="relative block h-64 overflow-hidden"
              >
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <span className="text-primary absolute top-4 left-4 z-10 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold">
                  {post.category}
                </span>
              </Link>
              <div className="flex flex-grow flex-col p-8">
                <div className="mb-4 flex items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <time dateTime={post.date}>
                      {dateFormatter.format(new Date(post.date))}
                    </time>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {post.author}
                  </div>
                </div>
                <h2 className="group-hover:text-primary mb-4 font-serif text-2xl font-bold text-gray-900 transition-colors">
                  <Link href={`/actualites/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="mb-6 flex-grow leading-relaxed text-gray-600">
                  {post.excerpt}
                </p>
                <Button
                  variant="link"
                  className="text-primary hover:text-primary/80 h-auto justify-start p-0 font-bold"
                  asChild
                >
                  <Link href={`/actualites/${post.slug}`}>
                    Lire la suite &rarr;
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
