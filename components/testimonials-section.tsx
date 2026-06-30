import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Anne Françoise Joly",
    text: "De bon conseil, à l écoute, respecte votre budget. Je recommande sans problème.",
  },
  {
    name: "Emilie Souriau carcenac",
    text: "Très bon accueil. Disponibles et de très bons conseils, Nous reviendrons avec plaisir",
  },
  {
    name: "Joelle Morel",
    text: "Très bonne agence, ils s’occupent de tout. Très sympathique.",
  },
  {
    name: "Michel Boudier",
    text: "Accueil agréable. Conseil efficace très professionnel",
  },
  {
    name: "MARTINE Lefevre",
    text: "Excellents conseils sur la destination en fonction du budget et de la saison, des coutumes locales ainsi que des visites incontournables. Je recommande Véronique et Vanessa de rêves de voyage à Bruz",
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Vos avis comptent
          </h2>
          <p className="mt-4 text-xl font-light text-gray-600">
            Ce que nos voyageurs disent de nous
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-100 bg-gray-50 p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex" aria-label="Note : 5 sur 5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-primary fill-primary h-4 w-4" />
                ))}
              </div>
              <p className="mb-6 leading-relaxed text-gray-700 italic">
                "{testimonial.text}"
              </p>
              <p className="font-serif text-sm font-bold tracking-wider text-gray-900 uppercase">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/avis">
              Voir tous les avis
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
