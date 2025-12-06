import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function AboutSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-bold tracking-tight text-gray-900 sm:text-4xl">
              RÊVES DE VOYAGES, <br />
              <span className="text-primary italic">
                votre agence de voyages à Bruz
              </span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              Spécialiste de{" "}
              <strong className="font-medium text-gray-900">
                voyages personnalisés depuis 2006
              </strong>
              , l’agence RÊVES DE VOYAGES met à votre disposition divers
              programmes adaptés à toutes les envies et à tous les budgets.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Que ce soit pour un week-end, un <strong>voyage de noces</strong>{" "}
              ou des vacances, Véronique saura vous accompagner avant, pendant
              et après vos voyages et s’engage à vous assurer des prestations de
              qualité à la hauteur de vos exigences.
            </p>
            <p className="text-base text-gray-500">
              Notre agence vous propose une multitude de destinations, notamment
              : l’Australie, l’ile Maurice, les Seychelles, la République
              dominicaine, les Antilles françaises, Cuba, la Thaïlande, les
              Philippines, le Vietnam, Hong Kong, Taiwan, la Polynésie, la
              Grèce, la Turquie, Chypre, le Maroc, la Tunisie, l’Espagne,
              l’Italie, Londres, Cap Vert…
            </p>
            <div className="pt-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white rounded-full px-8"
              >
                <Link href="/reves-de-voyages">En savoir plus</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
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
