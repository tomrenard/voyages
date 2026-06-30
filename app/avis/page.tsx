import { PageHeader } from "@/components/page-header";
import { Star, Quote } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Avis Clients",
  description:
    "Découvrez les avis et témoignages des voyageurs qui ont fait confiance à Rêves de Voyages pour leurs vacances.",
  alternates: { canonical: "/avis" },
};

const testimonials = [
  {
    name: "Anne Françoise Joly",
    text: "De bon conseil, à l écoute, respecte votre budget. Je recommande sans problème.",
    date: "Il y a 2 mois",
  },
  {
    name: "Emilie Souriau carcenac",
    text: "Très bon accueil. Disponibles et de très bons conseils, Nous reviendrons avec plaisir",
    date: "Il y a 3 mois",
  },
  {
    name: "Joelle Morel",
    text: "Très bonne agence, ils s’occupent de tout. Très sympathique.",
    date: "Il y a 6 mois",
  },
  {
    name: "Michel Boudier",
    text: "Accueil agréable. Conseil efficace très professionnel",
    date: "Il y a 1 an",
  },
  {
    name: "MARTINE Lefevre",
    text: "Excellents conseils sur la destination en fonction du budget et de la saison, des coutumes locales ainsi que des visites incontournables. Je recommande Véronique et Vanessa de rêves de voyage à Bruz",
    date: "Il y a 1 an",
  },
  {
    name: "Pierre Durand",
    text: "Un voyage de noces inoubliable aux Maldives ! Tout était parfait, de l'avion à l'hôtel. Merci pour cette organisation sans faille.",
    date: "Il y a 1 an",
  },
];

export default function Avis() {
  return (
    <div className="flex min-h-screen flex-col">
      <PageHeader
        title="Avis Clients"
        subtitle="Ce que nos voyageurs disent de nous"
        backgroundImage="/images/avis.jpg"
      />

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex h-full flex-col rounded-xl border border-gray-100 bg-white p-8 shadow-sm"
            >
              <div className="mb-6 flex items-start justify-between">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <Quote className="text-primary/20 h-8 w-8" />
              </div>

              <p className="mb-6 flex-grow text-lg text-gray-700 italic">
                "{testimonial.text}"
              </p>

              <div className="mt-auto flex items-end justify-between border-t border-gray-50 pt-4">
                <p className="font-serif text-lg font-bold text-gray-900">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-400">{testimonial.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
