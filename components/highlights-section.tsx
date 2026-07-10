import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { coupsDeCoeur } from "@/lib/destinations";

export function HighlightsSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Nos coups de cœur
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-xl font-light text-gray-600">
            Les destinations que nous aimons faire découvrir
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {coupsDeCoeur.map((destination) => (
            <Link
              key={destination.slug}
              href={`/destinations/${destination.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={destination.image}
                  alt={destination.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="flex flex-grow flex-col p-8">
                <h3 className="group-hover:text-primary mb-3 font-serif text-2xl font-bold text-gray-900 transition-colors">
                  {destination.title}
                </h3>
                <p className="mb-6 flex-grow leading-relaxed text-gray-600">
                  {destination.blurb}
                </p>
                <span className="text-primary inline-flex items-center text-sm font-semibold">
                  Découvrir
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/nos-coups-de-coeur">
              Voir tous nos coups de cœur
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
