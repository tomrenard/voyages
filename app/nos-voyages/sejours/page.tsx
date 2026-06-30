import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Sun, Umbrella, Palmtree, Hotel } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Séjours",
  description:
    "Séjours tout compris, hôtels clubs, vacances farniente... Nos meilleures offres pour se détendre au soleil.",
  alternates: { canonical: "/nos-voyages/sejours" },
};

export default function Sejours() {
  return (
    <div className="flex min-h-screen flex-col">
      <PageHeader
        title="Séjours"
        subtitle="Détente absolue et farniente"
        backgroundImage="/images/sejour.jpg"
      />

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-primary mb-6 font-serif text-3xl font-bold">
            Vos vacances, à votre rythme
          </h2>
          <p className="text-lg leading-relaxed text-gray-600">
            RÊVES DE VOYAGES vous propose une grande sélection de séjours longue
            ou courte durée dédiée à satisfaire tous les goûts et les budgets.
            Hôtels de charme, clubs tout inclus ou resorts de luxe, nous avons
            l'adresse qu'il vous faut.
          </p>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
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
              className="rounded-xl border border-gray-100 bg-white p-6 text-center shadow-sm"
            >
              <div className="bg-primary/10 text-primary mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 font-serif font-bold">{item.title}</h3>
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
