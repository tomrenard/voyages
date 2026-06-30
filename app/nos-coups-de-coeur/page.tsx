import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import {
  ArrowRight,
  Plane,
  Map,
  UserCheck,
  Ship,
  CalendarDays,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Coups de Cœur",
  description:
    "Séjours, circuits, croisières, voyages sur mesure et week-ends : explorez les sélections de Rêves de Voyages pour votre prochaine évasion.",
  alternates: { canonical: "/nos-coups-de-coeur" },
};

const categories = [
  {
    title: "Séjours",
    description:
      "Hôtels-clubs, formules tout compris ou adresses de charme : la formule séjour qui vous ressemble, au meilleur rapport qualité-prix.",
    icon: Plane,
    href: "/nos-coups-de-coeur/sejours",
  },
  {
    title: "Circuits",
    description:
      "Des itinéraires accompagnés ou en liberté pour explorer un pays en profondeur, des États-Unis au Sri Lanka.",
    icon: Map,
    href: "/nos-coups-de-coeur/circuits",
  },
  {
    title: "Sur-mesure",
    description:
      "Un voyage entièrement composé pour vous, étape par étape, à votre rythme et selon votre budget.",
    icon: UserCheck,
    href: "/voyage-sur-mesure",
  },
  {
    title: "Croisières",
    description:
      "Maritimes, fluviales ou d'expédition : une seule valise, mille horizons à découvrir au fil de l'eau.",
    icon: Ship,
    href: "/croisieres",
  },
  {
    title: "Week-end",
    description:
      "Quelques jours suffisent pour changer d'air : nos plus belles escapades en France et en Europe.",
    icon: CalendarDays,
    href: "/nos-coups-de-coeur/week-end",
  },
];

export default function NosCoupsDeCoeur() {
  return (
    <div className="flex min-h-screen flex-col">
      <PageHeader
        title="Nos coups de cœur"
        subtitle="Laissez-vous inspirer par nos sélections exclusives"
        backgroundImage="/images/hero-coups-de-coeur.jpg"
      />

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.title}
              className="group flex flex-col rounded-xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl"
            >
              <div className="bg-primary/10 text-primary mb-6 flex h-14 w-14 transform items-center justify-center rounded-2xl transition-transform group-hover:scale-110">
                <category.icon className="h-7 w-7" />
              </div>
              <h3 className="group-hover:text-primary mb-4 font-serif text-2xl font-bold text-gray-900 transition-colors">
                {category.title}
              </h3>
              <p className="mb-8 flex-grow leading-relaxed text-gray-600">
                {category.description}
              </p>
              <Button
                variant="outline"
                className="group-hover:bg-primary border-primary/20 w-full justify-between group-hover:text-white"
                asChild
              >
                <Link href={category.href}>
                  Explorer
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
