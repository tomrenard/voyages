import Link from "next/link";
import {
  ArrowRight,
  Plane,
  Map,
  UserCheck,
  Ship,
  CalendarDays,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  {
    title: "Séjours",
    description: "Farniente ou découverte, la bonne formule au bon prix.",
    icon: Plane,
    href: "/nos-coups-de-coeur/sejours",
  },
  {
    title: "Circuits",
    description: "Explorez un pays en profondeur, accompagné ou en liberté.",
    icon: Map,
    href: "/nos-coups-de-coeur/circuits",
  },
  {
    title: "Sur-mesure",
    description: "Un voyage composé pour vous, du premier au dernier jour.",
    icon: UserCheck,
    href: "/voyage-sur-mesure",
  },
  {
    title: "Croisières",
    description: "Une seule valise, mille horizons au fil de l'eau.",
    icon: Ship,
    href: "/croisieres",
  },
  {
    title: "Week-end",
    description: "Quelques jours pour s'évader, en France comme en Europe.",
    icon: CalendarDays,
    href: "/nos-coups-de-coeur/week-end",
  },
];

export function HighlightsSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Nos coups de cœur
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-xl font-light text-gray-600">
            Découvrez nos sélections pour votre prochain voyage
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.title}
              className="group flex flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl"
            >
              <div className="bg-primary/10 text-primary mb-6 flex h-14 w-14 items-center justify-center rounded-2xl transition-transform group-hover:scale-110">
                <category.icon className="h-7 w-7" />
              </div>
              <h3 className="group-hover:text-primary mb-4 font-serif text-2xl font-bold text-gray-900 transition-colors">
                {category.title}
              </h3>
              <p className="mb-8 flex-grow leading-relaxed text-gray-600">
                {category.description}
              </p>
              <Button
                variant="ghost"
                className="group hover:bg-primary w-full justify-between transition-colors hover:text-white"
                asChild
              >
                <Link href={category.href}>
                  En savoir plus
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
