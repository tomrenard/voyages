import { Star } from "lucide-react";

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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold tracking-tight text-gray-900 sm:text-5xl">
            Vos avis comptent
          </h2>
          <p className="mt-4 text-xl text-gray-600 font-light">
            Ce que nos voyageurs disent de nous
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>
              <p className="font-serif font-bold text-gray-900 text-sm uppercase tracking-wider">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
