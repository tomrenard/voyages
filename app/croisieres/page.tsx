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
  alternates: { canonical: "/croisieres" },
};

export default function Croisieres() {
  return (
    <div className="flex min-h-screen flex-col">
      <PageHeader
        title="Nos Croisières"
        subtitle="Naviguez sur les plus belles mers du monde"
        backgroundImage="/images/croisiere.jpg"
      />

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="mb-20 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-primary font-serif text-3xl font-bold">
              L'élégance au fil de l'eau
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              RÊVES DE VOYAGES organise tous types de croisière en tenant compte
              des envies, des conditions et du budget de ses clients. Que vous
              rêviez d'une traversée transatlantique, d'une exploration polaire
              ou d'une escapade en Méditerranée, nous trouvons le navire qui
              vous correspond.
            </p>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
                  <Anchor className="text-primary h-4 w-4" />
                  {item}
                </li>
              ))}
            </ul>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 mt-4 text-white"
            >
              <Link href="/contact">Demander un devis croisière</Link>
            </Button>
          </div>
          <div className="relative h-[400px] overflow-hidden rounded-xl shadow-xl">
            <Image
              src="/images/content-croisiere.jpg"
              alt="Navire de croisière"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
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
            <div key={idx} className="rounded-xl bg-gray-50 p-8 text-center">
              <div className="text-primary mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-3 font-serif text-xl font-bold">
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
