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
    description:
      "Une grande sélection de séjours longue ou courte durée dédiée à satisfaire tous les goûts et les budgets.",
    icon: Plane,
    href: "/nos-coups-de-coeur/sejours",
    color: "bg-primary/10 text-primary",
  },
  {
    title: "Circuits",
    description:
      "Découvrez le monde avec notre agence : USA, Sri Lanka, Indonésie, Cuba et bien plus encore.",
    icon: Map,
    href: "/nos-coups-de-coeur/circuits",
    color: "bg-primary/10 text-primary",
  },
  {
    title: "Sur-mesure",
    description:
      "Créez un voyage personnalisé selon votre budget et vos désirs. Parce que chacun a ses rêves.",
    icon: UserCheck,
    href: "/nos-coups-de-coeur/sur-mesure",
    color: "bg-primary/10 text-primary",
  },
  {
    title: "Croisières",
    description:
      "Tous types de croisières en tenant compte des envies, des conditions et du budget.",
    icon: Ship,
    href: "/nos-coups-de-coeur/croisieres",
    color: "bg-primary/10 text-primary",
  },
  {
    title: "Week-end",
    description:
      "Découvrez nos destinations pour un week-end et profitez d’un voyage inoubliable.",
    icon: CalendarDays,
    href: "/nos-coups-de-coeur/week-end",
    color: "bg-primary/10 text-primary",
  },
];

export function HighlightsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold tracking-tight text-gray-900 sm:text-5xl">
            Nos coups de cœur
          </h2>
          <p className="mt-4 text-xl text-gray-600 font-light max-w-2xl mx-auto">
            Découvrez nos sélections pour votre prochain voyage
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.title}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group"
            >
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${category.color} transition-transform group-hover:scale-110`}
              >
                <category.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                {category.title}
              </h3>
              <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                {category.description}
              </p>
              <Button
                variant="ghost"
                className="w-full justify-between group hover:bg-primary hover:text-white transition-colors"
                asChild
              >
                <Link href={category.href}>
                  En savoir plus
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
