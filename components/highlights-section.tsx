import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { coupsDeCoeur } from "@/lib/destinations";
import { DestinationCard } from "@/components/destination-card";

export function HighlightsSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Nos coups de cœur</p>
            <h2 className="mt-4 max-w-2xl font-serif text-5xl leading-tight text-gray-900 md:text-6xl">
              Les destinations que nous aimons faire découvrir
            </h2>
          </div>
          <Link
            href="/nos-coups-de-coeur"
            className="group hover:text-primary inline-flex items-center gap-2 text-sm font-medium tracking-wide text-gray-900"
          >
            Voir tous nos coups de cœur
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {coupsDeCoeur.map((destination) => (
            <DestinationCard key={destination.slug} destination={destination} />
          ))}
        </div>
      </div>
    </section>
  );
}
