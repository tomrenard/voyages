import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Sun, Umbrella, Palmtree, Hotel } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Séjours",
  description:
    "Séjours tout compris, hôtels clubs, vacances farniente... Nos meilleures offres pour se détendre au soleil.",
};

export default function Sejours() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Séjours"
        subtitle="Détente absolue et farniente"
        backgroundImage="/images/sejour.jpg"
      />

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-primary mb-6">
            Vos vacances, à votre rythme
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            RÊVES DE VOYAGES vous propose une grande sélection de séjours longue
            ou courte durée dédiée à satisfaire tous les goûts et les budgets.
            Hôtels de charme, clubs tout inclus ou resorts de luxe, nous avons
            l'adresse qu'il vous faut.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: Sun,
              title: "Soleil d'hiver",
              text: "Cap vers la chaleur quand il fait froid ici.",
            },
            {
              icon: Umbrella,
              title: "Plages de rêve",
              text: "Sable fin et eaux turquoises.",
            },
            {
              icon: Palmtree,
              title: "Tout inclus",
              text: "Ne pensez à rien, profitez de tout.",
            },
            {
              icon: Hotel,
              title: "Charme & Luxe",
              text: "Des adresses exclusives pour se ressourcer.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center"
            >
              <div className="w-10 h-10 mx-auto bg-blue-50 rounded-full flex items-center justify-center text-blue-500 mb-4">
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white"
          >
            <Link href="/contact">Réserver mon séjour</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
