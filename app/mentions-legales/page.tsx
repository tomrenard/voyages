import { Metadata } from "next";
import { siteConfig, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions Légales",
  description:
    "Mentions légales du site Rêves de Voyages : éditeur, hébergeur, immatriculation et informations légales de l'agence de voyages.",
  alternates: { canonical: "/mentions-legales" },
};

const { legal } = siteConfig;

export default function MentionsLegales() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <h1 className="mb-12 text-center font-serif text-4xl font-bold text-gray-900">
          Mentions Légales
        </h1>

        <div className="space-y-10 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm md:p-12">
          <section>
            <h2 className="text-primary mb-4 font-serif text-2xl font-bold">
              1. Éditeur du site
            </h2>
            <div className="space-y-2 leading-relaxed text-gray-600">
              <p>
                En vertu de l’article 6 de la loi n° 2004-575 du 21 juin 2004
                pour la confiance dans l’économie numérique, il est précisé aux
                utilisateurs du site{" "}
                <a href={siteUrl} className="text-primary hover:underline">
                  {siteUrl}
                </a>{" "}
                l’identité des différents intervenants dans le cadre de sa
                réalisation et de son suivi :
              </p>
              <ul className="mt-2 list-inside list-disc space-y-1 pl-4">
                <li>
                  <strong>Dénomination</strong> : Rêves de Voyages — EURL{" "}
                  {siteConfig.legalName}
                </li>
                <li>
                  <strong>Forme juridique</strong> : Entreprise unipersonnelle à
                  responsabilité limitée (EURL) au capital de {legal.capital}
                </li>
                <li>
                  <strong>Siège social</strong> : {legal.address},{" "}
                  {legal.postalCode} {legal.city}
                </li>
                <li>
                  <strong>SIREN</strong> : {legal.siren}
                </li>
                <li>
                  <strong>SIRET</strong> : {legal.siret}
                </li>
                <li>
                  <strong>RCS</strong> : {legal.rcs}
                </li>
                <li>
                  <strong>Code APE</strong> : {legal.ape} (Activités des agences
                  de voyage)
                </li>
                <li>
                  <strong>Téléphone</strong> : {siteConfig.phone}
                </li>
                <li>
                  <strong>Email</strong> : {siteConfig.email}
                </li>
                <li>
                  <strong>Directrice de la publication</strong> : Véronique
                  Guyomard
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-primary mb-4 font-serif text-2xl font-bold">
              2. Immatriculation et garanties
            </h2>
            <div className="space-y-2 leading-relaxed text-gray-600">
              <p>
                Conformément au Code du tourisme, l’agence exerce son activité
                sous les références suivantes :
              </p>
              <ul className="mt-2 list-inside list-disc space-y-1 pl-4">
                <li>
                  <strong>Immatriculation Atout France</strong> :{" "}
                  {legal.atoutFrance}
                </li>
                <li>
                  <strong>Garantie financière</strong> : {legal.guarantee}
                </li>
                <li>
                  <strong>
                    Assurance responsabilité civile professionnelle
                  </strong>{" "}
                  : {legal.insurance}
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-primary mb-4 font-serif text-2xl font-bold">
              3. Hébergeur
            </h2>
            <div className="leading-relaxed text-gray-600">
              <p>
                Le site est hébergé par <strong>Vercel Inc.</strong>, 340 S
                Lemon Ave #4133, Walnut, CA 91789, États-Unis —{" "}
                <a
                  href="https://vercel.com"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  vercel.com
                </a>
                .
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-primary mb-4 font-serif text-2xl font-bold">
              4. Propriété intellectuelle
            </h2>
            <div className="space-y-4 leading-relaxed text-gray-600">
              <p>
                Rêves de Voyages est propriétaire des droits de propriété
                intellectuelle ou détient les droits d’usage sur tous les
                éléments accessibles sur le site, notamment les textes, images,
                graphismes, logo et icônes.
              </p>
              <p>
                Toute reproduction, représentation, modification, publication ou
                adaptation de tout ou partie des éléments du site, quel que soit
                le moyen ou le procédé utilisé, est interdite, sauf autorisation
                écrite préalable de Rêves de Voyages.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-primary mb-4 font-serif text-2xl font-bold">
              5. Limitation de responsabilité
            </h2>
            <div className="leading-relaxed text-gray-600">
              <p>
                Rêves de Voyages s’efforce de fournir des informations aussi
                précises que possible mais ne saurait être tenue responsable des
                omissions, des inexactitudes ou des carences dans la mise à
                jour, qu’elles soient de son fait ou du fait des tiers
                partenaires qui lui fournissent ces informations.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-primary mb-4 font-serif text-2xl font-bold">
              6. Données personnelles
            </h2>
            <div className="leading-relaxed text-gray-600">
              <p>
                Le traitement de vos données personnelles est détaillé dans
                notre{" "}
                <a
                  href="/politique-de-confidentialite"
                  className="text-primary hover:underline"
                >
                  politique de confidentialité
                </a>
                .
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-primary mb-4 font-serif text-2xl font-bold">
              7. Droit applicable
            </h2>
            <div className="leading-relaxed text-gray-600">
              <p>
                Tout litige en relation avec l’utilisation du site est soumis au
                droit français. Il est fait attribution exclusive de juridiction
                aux tribunaux compétents.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
