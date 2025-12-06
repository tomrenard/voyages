import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plan du Site",
  description:
    "Plan du site de Rêves de Voyages pour naviguer facilement vers toutes nos pages.",
};

export default function PlanDuSite() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Plan du site"
        subtitle="Retrouvez toutes les pages de notre site"
        backgroundImage="/images/hero-bg.jpg"
      />

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <ul className="space-y-4 text-lg">
            <li>
              <Link
                href="/"
                className="font-serif font-bold text-gray-900 hover:text-primary transition-colors"
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                href="/reves-de-voyages"
                className="font-serif font-bold text-gray-900 hover:text-primary transition-colors"
              >
                Rêves de voyages
              </Link>
            </li>
            <li>
              <Link
                href="/nos-coups-de-coeur"
                className="font-serif font-bold text-gray-900 hover:text-primary transition-colors"
              >
                Nos coups de cœur
              </Link>
              <ul className="ml-6 mt-2 space-y-2 border-l-2 border-gray-100 pl-4">
                <li>
                  <Link
                    href="/nos-coups-de-coeur/sejours"
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    Séjours
                  </Link>
                </li>
                <li>
                  <Link
                    href="/nos-coups-de-coeur/circuits"
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    Circuits
                  </Link>
                </li>
                <li>
                  <Link
                    href="/nos-coups-de-coeur/sur-mesure"
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    Sur-mesure
                  </Link>
                </li>
                <li>
                  <Link
                    href="/nos-coups-de-coeur/croisieres"
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    Croisières
                  </Link>
                </li>
                <li>
                  <Link
                    href="/nos-coups-de-coeur/week-end"
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    Week-end
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                href="/voyage-sur-mesure"
                className="font-serif font-bold text-gray-900 hover:text-primary transition-colors"
              >
                Voyage sur mesure
              </Link>
            </li>
            <li>
              <Link
                href="/croisieres"
                className="font-serif font-bold text-gray-900 hover:text-primary transition-colors"
              >
                Croisières
              </Link>
            </li>
            <li>
              <Link
                href="/galerie"
                className="font-serif font-bold text-gray-900 hover:text-primary transition-colors"
              >
                Galerie
              </Link>
            </li>
            <li>
              <Link
                href="/avis"
                className="font-serif font-bold text-gray-900 hover:text-primary transition-colors"
              >
                Avis
              </Link>
            </li>
            <li>
              <Link
                href="/actualites"
                className="font-serif font-bold text-gray-900 hover:text-primary transition-colors"
              >
                Actualités
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="font-serif font-bold text-gray-900 hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </li>

            <li className="pt-4 border-t border-gray-100 mt-4">
              <h3 className="font-serif font-bold text-gray-900 mb-2">
                Informations légales
              </h3>
              <ul className="ml-6 space-y-2 border-l-2 border-gray-100 pl-4">
                <li>
                  <Link
                    href="/mentions-legales"
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    Mentions légales
                  </Link>
                </li>
                <li>
                  <Link
                    href="/politique-de-confidentialite"
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    Politique de confidentialité
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
