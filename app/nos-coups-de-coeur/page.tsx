import Link from "next/link";
import Image from "next/image";
import { PageHeader } from "@/components/page-header";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { coupsDeCoeur } from "@/lib/destinations";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Coups de Cœur",
  description:
    "Les destinations coups de cœur de Rêves de Voyages : New York, la Sicile orientale, le Vietnam, l'Australie, la Polynésie et la croisière sur le Nil.",
  alternates: { canonical: "/nos-coups-de-coeur" },
};

export default function NosCoupsDeCoeur() {
  return (
    <div className="flex min-h-screen flex-col">
      <PageHeader
        title="Nos coups de cœur"
        subtitle="Les destinations que nous aimons par-dessus tout"
        backgroundImage="/images/hero-coups-de-coeur.jpg"
      />

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="text-lg leading-relaxed text-gray-600">
            Au fil des années et des voyages, certaines destinations nous ont
            particulièrement marqués. Voici nos coups de cœur — ceux que nous
            prenons toujours autant de plaisir à faire découvrir.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {coupsDeCoeur.map((destination) => (
            <article
              key={destination.slug}
              className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={destination.image}
                  alt={destination.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="flex flex-grow flex-col p-8">
                <h2 className="group-hover:text-primary mb-3 font-serif text-2xl font-bold text-gray-900 transition-colors">
                  <Link href={`/destinations/${destination.slug}`}>
                    {destination.title}
                  </Link>
                </h2>
                <p className="mb-8 flex-grow leading-relaxed text-gray-600">
                  {destination.blurb}
                </p>
                <Button
                  variant="outline"
                  className="group-hover:bg-primary border-primary/20 w-full justify-between group-hover:text-white"
                  asChild
                >
                  <Link href={`/destinations/${destination.slug}`}>
                    Découvrir la destination
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
