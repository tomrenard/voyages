import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { siteConfig } from "@/lib/site";

// Destinations with a dedicated landing page — chips become internal links.
const destinationLinks: Record<string, string> = {
  Australie: "/destinations/australie",
  Vietnam: "/destinations/vietnam",
  Polynésie: "/destinations/polynesie-francaise",
  "Île Maurice": "/destinations/ile-maurice",
  Seychelles: "/destinations/seychelles",
  Thaïlande: "/destinations/thailande",
};

export const metadata: Metadata = {
  title: "Qui sommes-nous ?",
  description:
    "Découvrez Rêves de Voyages, votre agence de voyages sur mesure depuis 2006. Véronique vous accompagne avant, pendant et après votre voyage.",
  alternates: { canonical: "/reves-de-voyages" },
};

export default function RevesDeVoyages() {
  return (
    <div className="flex min-h-screen flex-col">
      <PageHeader
        title="Rêves de Voyages"
        subtitle="Votre agence de voyages 100% personnalisés, près de Rennes"
        backgroundImage="/images/hero-reves.jpg"
      />

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <h2 className="text-primary mb-6 font-serif text-3xl font-bold">
            Bienvenue chez Rêves de Voyages
          </h2>
          <p className="mb-6 text-lg leading-relaxed text-gray-600">
            Implantée dans la région de Rennes (35), notre agence indépendante
            est spécialisée dans la création de voyages sur mesure depuis 2006.
            Nous vous recevons sur rendez-vous et restons disponibles par
            téléphone ou en visioconférence ; Véronique peut aussi se déplacer à
            votre domicile. Parce que chaque voyageur est unique, chaque voyage
            doit l'être aussi.
          </p>
        </div>

        <div className="mb-20 grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="relative h-[500px] overflow-hidden rounded-xl shadow-2xl">
            <Image
              src="/images/about-reves.jpg"
              alt="Véronique, votre conseillère voyages"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="space-y-6">
            <h3 className="font-serif text-2xl font-bold text-gray-900">
              L'expertise de Véronique
            </h3>
            <p className="leading-relaxed text-gray-600">
              Que ce soit pour un <strong>week-end</strong>, un{" "}
              <strong>voyage de noces</strong> ou vos grandes vacances
              annuelles, Véronique vous accompagne avant, pendant et après votre
              séjour. Son engagement : vous assurer des prestations de qualité,
              parfaitement adaptées à vos envies et à votre budget.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-3">
                <span className="bg-primary h-2 w-2 rounded-full"></span>
                Conseils personnalisés et écoute attentive
              </li>
              <li className="flex items-center gap-3">
                <span className="bg-primary h-2 w-2 rounded-full"></span>
                Sélection rigoureuse des partenaires locaux
              </li>
              <li className="flex items-center gap-3">
                <span className="bg-primary h-2 w-2 rounded-full"></span>
                Assistance et suivi tout au long du voyage
              </li>
              <li className="flex items-center gap-3">
                <span className="bg-primary h-2 w-2 rounded-full"></span>
                Devis sur mesure gratuit
              </li>
            </ul>
          </div>
        </div>

        <div className="rounded-2xl bg-gray-50 p-8 text-center md:p-12">
          <h3 className="mb-6 font-serif text-2xl font-bold text-gray-900">
            Nos destinations phares
          </h3>
          <p className="mx-auto mb-8 max-w-3xl text-gray-600">
            Nous vous proposons une multitude de destinations pour assouvir
            votre soif de découverte :
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Australie",
              "États-Unis",
              "Canada",
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
            ].map((dest) =>
              destinationLinks[dest] ? (
                <Link
                  key={dest}
                  href={destinationLinks[dest]}
                  className="border-primary/40 text-primary hover:bg-primary rounded-full border bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:text-white"
                >
                  {dest}
                </Link>
              ) : (
                <span
                  key={dest}
                  className="hover:border-primary hover:text-primary cursor-default rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700 shadow-sm transition-colors"
                >
                  {dest}
                </span>
              ),
            )}
          </div>
        </div>

        <div className="bg-primary mt-16 rounded-2xl p-10 text-center text-white md:p-14">
          <h3 className="mb-4 font-serif text-3xl font-bold">
            Et si on parlait de votre prochain voyage ?
          </h3>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
            Racontez vos envies à {siteConfig.advisor} : vous recevrez une
            première proposition personnalisée, gratuite et sans engagement.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="text-primary bg-white hover:bg-gray-100"
            >
              <Link href="/devis">Demander un devis gratuit</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <a href={`tel:${siteConfig.phoneE164}`}>{siteConfig.phone}</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
