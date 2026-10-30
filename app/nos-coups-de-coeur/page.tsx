import { PageHeader } from "@/components/page-header";
import { DestinationCard } from "@/components/destination-card";
import { coupsDeCoeur, autresDestinations } from "@/lib/destinations";
import { Metadata } from "next";
import heroCoupsDeCoeur from "@/public/images/hero-coups-de-coeur.jpg";

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
        backgroundImage={heroCoupsDeCoeur}
      />

      <div className="container mx-auto px-4 py-20 md:px-8 md:py-28">
        <p className="max-w-3xl font-serif text-3xl leading-snug text-gray-800 md:text-4xl">
          Au fil des années et des voyages, certaines destinations nous ont
          particulièrement marqués. Voici nos coups de cœur, ceux que nous
          prenons toujours autant de plaisir à faire découvrir.
        </p>

        <h2 className="sr-only">Nos six coups de cœur</h2>
        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {coupsDeCoeur.map((destination) => (
            <DestinationCard key={destination.slug} destination={destination} />
          ))}
        </div>

        <section className="mt-28 border-t border-gray-300 pt-16">
          <p className="eyebrow">Envie d&apos;ailleurs ?</p>
          <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight text-gray-900 md:text-5xl">
            D&apos;autres destinations que nous connaissons sur le bout des
            doigts
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
            {autresDestinations.map((destination) => (
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
