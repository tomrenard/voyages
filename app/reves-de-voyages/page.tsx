import { PageHeader } from "@/components/page-header";
import { AboutSection } from "@/components/about-section";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Qui sommes-nous ?",
  description:
    "Découvrez Rêves de Voyages, votre agence de voyages sur mesure à Bruz depuis 2006. Véronique et son équipe vous accompagnent.",
};

export default function RevesDeVoyages() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Rêves de Voyages"
        subtitle="Votre agence de voyages 100% personnalisés à Bruz"
        backgroundImage="/images/hero-reves.jpg"
      />

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-primary mb-6">
            Bienvenue chez Rêves de Voyages
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Située à Bruz, près de Rennes (35), notre agence est spécialisée
            dans la création de voyages sur mesure depuis 2006. Nous croyons que
            chaque voyageur est unique, et que chaque voyage doit l'être aussi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/images/about-reves.jpg"
              alt="Véronique, votre conseillère voyages"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold text-gray-900">
              L'expertise de Véronique
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Que ce soit pour un <strong>week-end</strong>, un{" "}
              <strong>voyage de noces</strong> ou vos grandes vacances
              annuelles, Véronique vous accompagne avant, pendant et après votre
              séjour. Son engagement : vous assurer des prestations de qualité,
              parfaitement adaptées à vos envies et à votre budget.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Conseils personnalisés et écoute attentive
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Sélection rigoureuse des partenaires locaux
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Assistance et suivi tout au long du voyage
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Devis sur mesure gratuit
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">
            Nos destinations phares
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            Nous vous proposons une multitude de destinations pour assouvir
            votre soif de découverte :
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Australie",
              "Île Maurice",
              "Seychelles",
              "République Dominicaine",
              "Antilles Françaises",
              "Cuba",
              "Thaïlande",
              "Philippines",
              "Vietnam",
              "Hong Kong",
              "Taiwan",
              "Polynésie",
              "Grèce",
              "Turquie",
              "Chypre",
              "Maroc",
              "Tunisie",
              "Espagne",
              "Italie",
              "Londres",
              "Cap Vert",
            ].map((dest) => (
              <span
                key={dest}
                className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 shadow-sm hover:border-primary hover:text-primary transition-colors cursor-default"
              >
                {dest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
