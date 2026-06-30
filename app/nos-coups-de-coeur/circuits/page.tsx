import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Compass, Bus } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Circuits",
  description:
    "Circuits organisés, autotours, voyages itinérants... Explorez le monde avec nos circuits découverte.",
  alternates: { canonical: "/nos-coups-de-coeur/circuits" },
};

export default function Circuits() {
  return (
    <div className="flex min-h-screen flex-col">
      <PageHeader
        title="Circuits Découverte"
        subtitle="Explorez le monde, étape par étape"
        backgroundImage="/images/circuit.jpg"
      />

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-primary mb-6 font-serif text-3xl font-bold">
            L'aventure organisée
          </h2>
          <p className="text-lg leading-relaxed text-gray-600">
            Découvrez le monde avec notre agence et profitez d’un service
            d’excellence à la hauteur de vos attentes. Pour ce faire, nous vous
            proposons un éventail de circuits, tels que : les USA, le Sri Lanka,
            l’Indonésie, Cuba…
          </p>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-xl bg-gray-50 p-8">
            <h3 className="mb-4 flex items-center gap-3 font-serif text-2xl font-bold">
              <Bus className="text-primary h-6 w-6" /> Circuits Accompagnés
            </h3>
            <p className="mb-4 text-gray-600">
              Partez en petit groupe avec un guide francophone pour ne rien
              manquer des richesses de votre destination. Convivialité et
              sérénité garanties.
            </p>
          </div>
          <div className="rounded-xl bg-gray-50 p-8">
            <h3 className="mb-4 flex items-center gap-3 font-serif text-2xl font-bold">
              <Compass className="text-primary h-6 w-6" /> Autotours (Roadtrips)
            </h3>
            <p className="mb-4 text-gray-600">
              Prenez le volant et suivez notre itinéraire détaillé. Nous
              réservons vos hébergements et votre véhicule, vous profitez de la
              route en toute liberté.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white"
          >
            <Link href="/contact">Créer mon circuit</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
