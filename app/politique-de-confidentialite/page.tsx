import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Confidentialité",
  description:
    "Politique de confidentialité et de protection des données de Rêves de Voyages.",
};

export default function PolitiqueDeConfidentialite() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-12 text-center">
          Politique de Confidentialité
        </h1>

        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 space-y-10">
          <section>
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">
              Qui sommes-nous ?
            </h2>
            <div className="text-gray-600 leading-relaxed space-y-2">
              <p>
                <strong>L’adresse de notre site Web est :</strong>{" "}
                https://www.revesdevoyages.com/
              </p>
              <p>
                <strong>Propriétaire :</strong> Rêves de voyages – 10 avenue
                Alphonse Legault 35170 Bruz
              </p>
              <p>
                <strong>Responsable publication :</strong> Rêves de voyages – 02
                23 50 18 52
              </p>
              <p>
                <strong>Hébergeur :</strong> OVH – 2 rue Kellermann 59100
                Roubaix
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">
              Utilisation des données personnelles collectées
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Formulaires de contact
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Lorsque vous utilisez notre formulaire de contact, nous
                  collectons les données renseignées (nom, email, téléphone,
                  message) afin de pouvoir traiter votre demande et vous
                  recontacter. Ces données sont conservées pendant une durée
                  nécessaire au traitement de votre dossier.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Cookies
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Si vous déposez un commentaire sur notre site, il vous sera
                  proposé d’enregistrer votre nom, adresse de messagerie et site
                  web dans des cookies. C’est uniquement pour votre confort afin
                  de ne pas avoir à saisir ces informations si vous déposez un
                  autre commentaire plus tard. Ces cookies expirent au bout d’un
                  an.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Contenu embarqué depuis d’autres sites
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Les articles de ce site peuvent inclure des contenus intégrés
                  (par exemple des vidéos, images, articles…). Le contenu
                  intégré depuis d’autres sites se comporte de la même manière
                  que si le visiteur se rendait sur cet autre site.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">
              Utilisation et transmission de vos données personnelles
            </h2>
            <div className="text-gray-600 leading-relaxed">
              <p>
                Rêves de voyages ne commercialise pas vos données personnelles.
                Elles sont uniquement utilisées par nécessité pour le bon
                fonctionnement de nos services (demandes de devis,
                réservations).
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">
              Durées de stockage de vos données
            </h2>
            <div className="text-gray-600 leading-relaxed">
              <p>
                Pour les utilisateurs et utilisatrices qui s’enregistrent sur
                notre site (si cela est possible), nous stockons également les
                données personnelles indiquées dans leur profil. Tous les
                utilisateurs et utilisatrices peuvent voir, modifier ou
                supprimer leurs informations personnelles à tout moment.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">
              Les droits que vous avez sur vos données
            </h2>
            <div className="text-gray-600 leading-relaxed">
              <p>
                Si vous avez un compte ou si vous avez laissé des commentaires
                sur le site, vous pouvez demander à recevoir un fichier
                contenant toutes les données personnelles que nous possédons à
                votre sujet, incluant celles que vous nous avez fournies. Vous
                pouvez également demander la suppression des données
                personnelles vous concernant. Cela ne prend pas en compte les
                données stockées à des fins administratives, légales ou pour des
                raisons de sécurité.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">
              Transmission de vos données personnelles
            </h2>
            <div className="text-gray-600 leading-relaxed">
              <p>
                Les commentaires des visiteurs peuvent être vérifiés à l’aide
                d’un service automatisé de détection des commentaires
                indésirables.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
