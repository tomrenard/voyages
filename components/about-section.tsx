import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function AboutSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              RÊVES DE VOYAGES, <br />
              <span className="text-primary italic">
                votre agence de voyages à Bruz, près de Rennes
              </span>
            </h2>
            <p className="text-lg leading-relaxed font-light text-gray-600">
              Spécialiste de{" "}
              <strong className="font-medium text-gray-900">
                voyages personnalisés depuis 2006
              </strong>
              , l’agence RÊVES DE VOYAGES met à votre disposition divers
              programmes adaptés à toutes les envies et à tous les budgets.
            </p>
            <p className="text-lg leading-relaxed font-light text-gray-600">
              Que ce soit pour un week-end, un{" "}
              <strong className="font-medium text-gray-900">
                voyage de noces
              </strong>{" "}
              ou des vacances, Véronique saura vous accompagner avant, pendant
              et après vos voyages et s’engage à vous assurer des prestations de
              qualité à la hauteur de vos exigences.
            </p>
            <p className="text-lg leading-relaxed font-light text-gray-600">
              Des plages de l’océan Indien aux grandes capitales européennes, en
              passant par l’Asie et les Caraïbes, nous façonnons chaque
              itinéraire selon vos envies et votre budget.
            </p>
            <div className="pt-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 rounded-full px-8 text-white"
              >
                <Link href="/reves-de-voyages">En savoir plus</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-xl lg:h-[500px]">
            <Image
              src="/images/about-img.jpg"
              alt="Voyageurs heureux"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
