import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "Anne Françoise Joly",
    text: "De bon conseil, à l’écoute, respecte votre budget. Je recommande sans problème.",
  },
  {
    name: "Emilie Souriau Carcenac",
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
    name: "Martine Lefevre",
    text: "Excellents conseils sur la destination en fonction du budget et de la saison, des coutumes locales ainsi que des visites incontournables. Je recommande Véronique et Vanessa de rêves de voyage à Bruz",
  },
];

export function TestimonialsSection() {
  const [featured, ...others] = [...testimonials].reverse();

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <p className="eyebrow">Ils ont voyagé avec nous</p>
        <h2 className="sr-only">Avis de nos voyageurs</h2>
        <figure className="mt-8 max-w-5xl">
          <div className="flex gap-1" role="img" aria-label="Note : 5 sur 5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="text-primary fill-primary h-4 w-4" />
            ))}
          </div>
          <blockquote className="mt-6 !shadow-none">
            <p className="font-serif text-3xl leading-snug text-gray-900 md:text-5xl md:leading-tight">
              « {featured.text} »
            </p>
          </blockquote>
          <figcaption className="mt-6 text-sm tracking-wide text-gray-600 uppercase">
            {featured.name}
          </figcaption>
        </figure>

        <div className="mt-20 grid grid-cols-1 gap-x-8 md:grid-cols-2 lg:grid-cols-4">
          {others.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="border-t border-gray-300 pt-6 pb-10"
            >
              <blockquote className="!shadow-none">
                <p className="leading-relaxed text-gray-700">
                  « {testimonial.text} »
                </p>
              </blockquote>
              <figcaption className="mt-4 text-xs tracking-wide text-gray-600 uppercase">
                {testimonial.name}
              </figcaption>
            </figure>
          ))}
        </div>

        <Link
          href="/avis"
          className="group hover:text-primary inline-flex items-center gap-2 text-sm font-medium tracking-wide text-gray-900"
        >
          Voir tous les avis
          <ArrowRight
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>
      </div>
    </section>
  );
}
