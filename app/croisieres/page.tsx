import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Ship, Anchor, Sun, Map } from "lucide-react";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Croisières",
  description:
    "Croisières maritimes, fluviales, tours du monde... Naviguez sur les plus belles mers avec Rêves de Voyages.",
};

export default function Croisieres() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Nos Croisières"
        subtitle="Naviguez sur les plus belles mers du monde"
        backgroundImage="/images/croisiere.jpg"
      />

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-primary">
              L'élégance au fil de l'eau
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              RÊVES DE VOYAGES organise tous types de croisière en tenant compte
              des envies, des conditions et du budget de ses clients. Que vous
              rêviez d'une traversée transatlantique, d'une exploration polaire
              ou d'une escapade en Méditerranée, nous trouvons le navire qui
              vous correspond.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Croisières maritimes",
                "Croisières fluviales",
                "Expéditions polaires",
                "Tours du monde",
                "Yachts privés",
                "Voiliers",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-gray-700"
                >
                  <Anchor className="w-4 h-4 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white mt-4"
            >
              <Link href="/contact">Demander un devis croisière</Link>
            </Button>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/images/content-croisiere.jpg"
              alt="Navire de croisière"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Ship,
              title: "Navires d'exception",
              text: "Des paquebots majestueux aux yachts intimistes.",
            },
            {
              icon: Sun,
              title: "Destinations de rêve",
              text: "Caraïbes, Méditerranée, Fjords, Asie...",
            },
            {
              icon: Map,
              title: "Escales culturelles",
              text: "Découvrez chaque jour un nouveau port et une nouvelle culture.",
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-gray-50 p-8 rounded-xl text-center">
              <div className="w-12 h-12 mx-auto bg-white rounded-full flex items-center justify-center text-primary mb-6 shadow-sm">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
