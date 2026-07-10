import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plan du Site",
  description:
    "Plan du site de Rêves de Voyages pour naviguer facilement vers toutes nos pages.",
  alternates: { canonical: "/plan-du-site" },
};

export default function PlanDuSite() {
  return (
    <div className="flex min-h-screen flex-col">
      <PageHeader
        title="Plan du site"
        subtitle="Retrouvez toutes les pages de notre site"
        backgroundImage="/images/hero-bg.jpg"
      />

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto max-w-3xl rounded-xl border border-gray-100 bg-white p-8 shadow-sm">
          <ul className="space-y-4 text-lg">
            <li>
              <Link
                href="/"
                className="hover:text-primary font-serif font-bold text-gray-900 transition-colors"
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                href="/reves-de-voyages"
                className="hover:text-primary font-serif font-bold text-gray-900 transition-colors"
              >
                Rêves de voyages
              </Link>
            </li>
            <li>
              <Link
                href="/agence-de-voyages-rennes"
                className="hover:text-primary font-serif font-bold text-gray-900 transition-colors"
              >
                Votre agence près de Rennes
              </Link>
            </li>
            <li>
              <Link
                href="/nos-coups-de-coeur"
                className="hover:text-primary font-serif font-bold text-gray-900 transition-colors"
              >
                Nos coups de cœur
              </Link>
            </li>
            <li>
              <span className="font-serif font-bold text-gray-900">
                Nos voyages
              </span>
              <ul className="mt-2 ml-6 space-y-2 border-l-2 border-gray-100 pl-4">
                <li>
                  <Link
                    href="/nos-voyages/sejours"
                    className="hover:text-primary text-gray-600 transition-colors"
                  >
                    Séjours
                  </Link>
                </li>
                <li>
                  <Link
                    href="/nos-voyages/circuits"
                    className="hover:text-primary text-gray-600 transition-colors"
                  >
                    Circuits
                  </Link>
                </li>
                <li>
                  <Link
                    href="/croisieres"
                    className="hover:text-primary text-gray-600 transition-colors"
                  >
                    Croisières
                  </Link>
                </li>
                <li>
                  <Link
                    href="/nos-voyages/week-end"
                    className="hover:text-primary text-gray-600 transition-colors"
                  >
                    Week-end
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                href="/voyage-sur-mesure"
                className="hover:text-primary font-serif font-bold text-gray-900 transition-colors"
              >
                Voyage sur mesure
              </Link>
            </li>
            <li>
              <Link
                href="/galerie"
                className="hover:text-primary font-serif font-bold text-gray-900 transition-colors"
              >
                Galerie
              </Link>
            </li>
            <li>
              <Link
                href="/avis"
                className="hover:text-primary font-serif font-bold text-gray-900 transition-colors"
              >
                Avis
              </Link>
            </li>
            <li>
              <Link
                href="/actualites"
                className="hover:text-primary font-serif font-bold text-gray-900 transition-colors"
              >
                Actualités
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className="hover:text-primary font-serif font-bold text-gray-900 transition-colors"
              >
                Questions fréquentes
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-primary font-serif font-bold text-gray-900 transition-colors"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/devis"
                className="hover:text-primary font-serif font-bold text-gray-900 transition-colors"
              >
                Devis gratuit
              </Link>
            </li>

            <li className="mt-4 border-t border-gray-100 pt-4">
              <h3 className="mb-2 font-serif font-bold text-gray-900">
                Informations légales
              </h3>
              <ul className="ml-6 space-y-2 border-l-2 border-gray-100 pl-4">
                <li>
                  <Link
                    href="/mentions-legales"
                    className="hover:text-primary text-gray-600 transition-colors"
                  >
                    Mentions légales
                  </Link>
                </li>
                <li>
                  <Link
                    href="/politique-de-confidentialite"
                    className="hover:text-primary text-gray-600 transition-colors"
                  >
                    Politique de confidentialité
                  </Link>
                </li>
                <li>
                  <Link
                    href="/conditions-de-vente"
                    className="hover:text-primary text-gray-600 transition-colors"
                  >
                    Conditions de vente
                  </Link>
                </li>
                <li>
                  <Link
                    href="/credits-photos"
                    className="hover:text-primary text-gray-600 transition-colors"
                  >
                    Crédits photos
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
