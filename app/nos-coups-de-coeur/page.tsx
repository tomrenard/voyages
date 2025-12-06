import React from "react";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { ArrowRight, Plane, Map, UserCheck, Ship, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Coups de Cœur",
  description: "Séjours, circuits, croisières, week-ends... Découvrez les coups de cœur de votre agence de voyages à Bruz.",
};

const categories = [
  {
    title: "Séjours",
    description: "RÊVES DE VOYAGES vous propose une grande sélection de séjours longue ou courte durée dédiée à satisfaire tous les goûts et les budgets.",
    icon: Plane,
    href: "/nos-coups-de-coeur/sejours",
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Circuits",
    description: "Découvrez le monde avec notre agence et profitez d’un service d’excellence à la hauteur de vos attentes. USA, Sri Lanka, Indonésie, Cuba…",
    icon: Map,
    href: "/nos-coups-de-coeur/circuits",
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Sur-mesure",
    description: "Parce que chacun a ses rêves, l’agence de voyage RÊVES DE VOYAGES est à l’écoute de vos envies pour créer un voyage personnalisé selon votre budget et vos désirs.",
    icon: UserCheck,
    href: "/nos-coups-de-coeur/sur-mesure",
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Croisières",
    description: "RÊVES DE VOYAGES organise tous types de croisière en tenant compte des envies, des conditions et du budget de ses clients.",
    icon: Ship,
    href: "/nos-coups-de-coeur/croisieres",
    color: "bg-cyan-100 text-cyan-600",
  },
  {
    title: "Week-end",
    description: "Découvrez nos destinations pour un week-end et profitez d’un voyage inoubliable. Nous vous assurons un accompagnement personnalisé et un service de qualité.",
    icon: CalendarDays,
    href: "/nos-coups-de-coeur/week-end",
    color: "bg-orange-100 text-orange-600",
  },
];

export default function NosCoupsDeCoeur() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Nos coups de cœur"
        subtitle="Laissez-vous inspirer par nos sélections exclusives"
        backgroundImage="/images/hero-coups-de-coeur.jpg"
      />

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div 
              key={category.title} 
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${category.color} transform group-hover:scale-110 transition-transform`}>
                <category.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">{category.title}</h3>
              <p className="text-gray-600 mb-8 flex-grow leading-relaxed">{category.description}</p>
              <Button variant="outline" className="w-full justify-between group-hover:bg-primary group-hover:text-white border-primary/20" asChild>
                <Link href={category.href}>
                  Explorer
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
