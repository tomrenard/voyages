import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Map, Camera, Compass, Bus } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Circuits",
  description:
    "Circuits organisés, autotours, voyages itinérants... Explorez le monde avec nos circuits découverte.",
};

export default function Circuits() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Circuits Découverte"
        subtitle="Explorez le monde, étape par étape"
        backgroundImage="/images/circuit.jpg"
      />

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-primary mb-6">
            L'aventure organisée
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Découvrez le monde avec notre agence et profitez d’un service
            d’excellence à la hauteur de vos attentes. Pour ce faire, nous vous
            proposons un éventail de circuits, tels que : les USA, le Sri Lanka,
            l’Indonésie, Cuba…
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-serif font-bold mb-4 flex items-center gap-3">
              <Bus className="w-6 h-6 text-primary" /> Circuits Accompagnés
            </h3>
            <p className="text-gray-600 mb-4">
              Partez en petit groupe avec un guide francophone pour ne rien
              manquer des richesses de votre destination. Convivialité et
              sérénité garanties.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-serif font-bold mb-4 flex items-center gap-3">
              <Compass className="w-6 h-6 text-primary" /> Autotours (Roadtrips)
            </h3>
            <p className="text-gray-600 mb-4">
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
