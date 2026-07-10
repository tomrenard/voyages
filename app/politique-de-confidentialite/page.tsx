import { Metadata } from "next";
import { siteConfig, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politique de Confidentialité",
  description:
    "Politique de confidentialité et de protection des données personnelles du site Rêves de Voyages, conformément au RGPD.",
  alternates: { canonical: "/politique-de-confidentialite" },
};

export default function PolitiqueDeConfidentialite() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <h1 className="mb-12 text-center font-serif text-4xl font-bold text-gray-900">
          Politique de Confidentialité
        </h1>

        <div className="space-y-10 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm md:p-12">
          <section>
            <h2 className="text-primary mb-4 font-serif text-2xl font-bold">
              Responsable du traitement
            </h2>
            <div className="space-y-2 leading-relaxed text-gray-600">
              <p>
                Le responsable du traitement des données collectées sur le site{" "}
                <a href={siteUrl} className="text-primary hover:underline">
                  {siteUrl}
                </a>{" "}
                est Rêves de Voyages (EURL {siteConfig.legalName}),{" "}
                {siteConfig.legal.address}, {siteConfig.legal.postalCode}{" "}
                {siteConfig.legal.city}.
              </p>
              <p>
                Pour toute question relative à vos données, vous pouvez nous
                contacter à l’adresse{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-primary break-all hover:underline"
                >
                  {siteConfig.email}
                </a>
                .
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-primary mb-4 font-serif text-2xl font-bold">
              Données collectées et finalités
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-800">
                  Formulaire de contact
                </h3>
                <p className="leading-relaxed text-gray-600">
                  Lorsque vous utilisez notre formulaire de contact, nous
                  collectons votre nom, votre prénom, votre adresse email, votre
                  numéro de téléphone (facultatif) et le contenu de votre
                  message. Ces données sont traitées dans le seul but de
                  répondre à votre demande et de préparer votre projet de
                  voyage. La base légale de ce traitement est votre consentement
                  ainsi que les mesures précontractuelles prises à votre
                  demande.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-800">
                  Newsletter
                </h3>
                <p className="leading-relaxed text-gray-600">
                  Si vous vous inscrivez à notre newsletter, nous collectons
                  votre adresse email dans le seul but de vous envoyer nos
                  idées et actualités de voyages. La base légale est votre
                  consentement ; vous pouvez vous désinscrire à tout moment via
                  le lien présent dans chaque email, ou en nous contactant.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-800">
                  Mesure d’audience
                </h3>
                <p className="leading-relaxed text-gray-600">
                  Nous utilisons une solution de mesure d’audience respectueuse
                  de la vie privée (Vercel Analytics), qui ne dépose pas de
                  cookie d’identification et ne collecte pas de données
                  personnelles directement identifiantes.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-primary mb-4 font-serif text-2xl font-bold">
              Destinataires et sous-traitants
            </h2>
            <div className="space-y-2 leading-relaxed text-gray-600">
              <p>
                Vos données ne sont jamais vendues ni cédées à des tiers à des
                fins commerciales. Elles sont uniquement accessibles à l’agence
                Rêves de Voyages et, le cas échéant, à nos prestataires
                techniques agissant en qualité de sous-traitants :
              </p>
              <ul className="mt-2 list-inside list-disc space-y-1 pl-4">
                <li>
                  <strong>Vercel Inc.</strong> — hébergement du site ;
                </li>
                <li>
                  <strong>Resend</strong> — acheminement des messages envoyés
                  via le formulaire de contact.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-primary mb-4 font-serif text-2xl font-bold">
              Durée de conservation
            </h2>
            <div className="leading-relaxed text-gray-600">
              <p>
                Les données issues du formulaire de contact sont conservées
                pendant la durée nécessaire au traitement de votre demande, puis
                archivées ou supprimées dans un délai maximum de trois ans à
                compter de notre dernier échange.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-primary mb-4 font-serif text-2xl font-bold">
              Vos droits
            </h2>
            <div className="space-y-2 leading-relaxed text-gray-600">
              <p>
                Conformément au Règlement général sur la protection des données
                (RGPD) et à la loi « Informatique et Libertés », vous disposez
                d’un droit d’accès, de rectification, d’effacement, de
                limitation et d’opposition au traitement de vos données, ainsi
                que d’un droit à la portabilité.
              </p>
              <p>
                Vous pouvez exercer ces droits en nous écrivant à{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-primary break-all hover:underline"
                >
                  {siteConfig.email}
                </a>
                . Vous disposez également du droit d’introduire une réclamation
                auprès de la CNIL (
                <a
                  href="https://www.cnil.fr"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.cnil.fr
                </a>
                ).
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
