import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales",
  description:
    "Mentions légales de Rêves de Voyages, agence de voyages à Bruz.",
};

export default function MentionsLegales() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-12 text-center">
          Mentions Légales
        </h1>

        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 space-y-10">
          <section>
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">
              1. Présentation du site
            </h2>
            <div className="text-gray-600 leading-relaxed space-y-2">
              <p>
                En vertu de l’article 6 de la loi n° 2004-575 du 21 juin 2004
                pour la confiance dans l’économie numérique, il est précisé aux
                utilisateurs du site{" "}
                <a
                  href="https://www.revesdevoyages.com"
                  className="text-primary hover:underline"
                >
                  https://www.revesdevoyages.com/
                </a>{" "}
                l’identité des différents intervenants dans le cadre de sa
                réalisation et de son suivi :
              </p>
              <ul className="list-disc list-inside pl-4 space-y-1 mt-2">
                <li>
                  <strong>Propriétaire</strong> : Rêves de voyages – 10 avenue
                  Alphonse Legault 35170 Bruz
                </li>
                <li>
                  <strong>Responsable publication</strong> : Rêves de voyages –
                  02 23 50 18 52
                </li>
                <li>
                  <strong>Hébergeur</strong> : OVH – 2 rue Kellermann 59100
                  Roubaix
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">
              2. Conditions générales d’utilisation
            </h2>
            <div className="text-gray-600 leading-relaxed space-y-4">
              <p>
                L’utilisation du site implique l’acceptation pleine et entière
                des conditions générales d’utilisation ci-après décrites. Ces
                conditions d’utilisation sont susceptibles d’être modifiées ou
                complétées à tout moment.
              </p>
              <p>
                Ce site est normalement accessible à tout moment aux
                utilisateurs. Une interruption pour raison de maintenance
                technique peut être toutefois décidée par Rêves de voyages.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">
              3. Description des services fournis
            </h2>
            <div className="text-gray-600 leading-relaxed">
              <p>
                Le site a pour objet de fournir une information concernant
                l’ensemble des activités de la société. Rêves de voyages
                s’efforce de fournir sur le site des informations aussi précises
                que possible. Toutefois, il ne pourra être tenue responsable des
                omissions, des inexactitudes et des carences dans la mise à
                jour.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">
              4. Propriété intellectuelle et contrefaçons
            </h2>
            <div className="text-gray-600 leading-relaxed space-y-4">
              <p>
                Rêves de voyages est propriétaire des droits de propriété
                intellectuelle ou détient les droits d’usage sur tous les
                éléments accessibles sur le site, notamment les textes, images,
                graphismes, logo, icônes, sons, logiciels.
              </p>
              <p>
                Toute reproduction, représentation, modification, publication,
                adaptation de tout ou partie des éléments du site, quel que soit
                le moyen ou le procédé utilisé, est interdite, sauf autorisation
                écrite préalable de Rêves de voyages.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">
              5. Limitations de responsabilité
            </h2>
            <div className="text-gray-600 leading-relaxed">
              <p>
                Rêves de voyages ne pourra être tenue responsable des dommages
                directs et indirects causés au matériel de l’utilisateur, lors
                de l’accès au site, et résultant soit de l’utilisation d’un
                matériel ne répondant pas aux spécifications indiquées, soit de
                l’apparition d’un bug ou d’une incompatibilité.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">
              6. Gestion des données personnelles
            </h2>
            <div className="text-gray-600 leading-relaxed space-y-4">
              <p>
                En France, les données personnelles sont notamment protégées par
                la loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 du 6 août
                2004, l’article L. 226-13 du Code pénal et la Directive
                Européenne du 24 octobre 1995.
              </p>
              <p>
                Conformément aux dispositions des articles 38 et suivants de la
                loi 78-17 du 6 janvier 1978 relative à l’informatique, aux
                fichiers et aux libertés, tout utilisateur dispose d’un droit
                d’accès, de rectification et d’opposition aux données
                personnelles le concernant.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">
              7. Droit applicable
            </h2>
            <div className="text-gray-600 leading-relaxed">
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
