import { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Questions Fréquentes (FAQ)",
  description:
    "Toutes les réponses à vos questions sur Rêves de Voyages : fonctionnement de l'agence, devis, garanties, paiement, assurances, modification et annulation.",
  alternates: { canonical: "/faq" },
};

const faq = [
  {
    question: "Comment fonctionne votre agence de voyages ?",
    answer:
      "Rêves de Voyages est une agence indépendante basée près de Rennes, sans boutique : les rendez-vous se font par téléphone, en visioconférence ou sur rendez-vous. Vous décrivez votre projet, Véronique construit une proposition personnalisée, vous l'affinez ensemble jusqu'à ce qu'elle soit parfaite — puis vous partez l'esprit tranquille, avec une assistance avant, pendant et après le voyage.",
  },
  {
    question: "Le devis est-il vraiment gratuit ?",
    answer:
      "Oui : la demande de devis est gratuite et sans engagement. Vous recevez une première proposition détaillée et restez libre de votre décision.",
  },
  {
    question: "Vos prix sont-ils plus chers qu'une réservation en ligne ?",
    answer:
      "Rarement, et souvent l'inverse à prestations égales : nous travaillons avec les mêmes tour-opérateurs que les grandes enseignes et négocions les tarifs pour vous. Surtout, vous gagnez un conseil expert, un itinéraire réellement adapté et un interlocuteur unique en cas d'imprévu — ce qu'aucune plateforme n'offre.",
  },
  {
    question: "Quelles garanties offre votre agence ?",
    answer:
      "Nous sommes immatriculés au registre des opérateurs de voyages d'Atout France (IM035100033), couverts par la garantie financière de l'APST — qui protège vos fonds et votre rapatriement même en cas de défaillance — et par une assurance responsabilité civile professionnelle MMA.",
  },
  {
    question: "Comment se passe le paiement ?",
    answer:
      "Un acompte est versé à la réservation, le solde avant le départ, selon les modalités précisées dans votre contrat de voyage. Les détails figurent dans nos conditions de vente et vous sont expliqués avant toute signature.",
  },
  {
    question: "Puis-je modifier ou annuler mon voyage ?",
    answer:
      "Oui, selon les conditions de l'organisateur du voyage, communiquées avant la réservation. Des frais peuvent s'appliquer selon la date de la demande. Nous vous recommandons une assurance multirisque (annulation, bagages, rapatriement) — nous vous proposons systématiquement les options adaptées.",
  },
  {
    question: "Qui s'occupe des formalités (passeport, visa, santé) ?",
    answer:
      "Nous vous indiquons précisément les formalités nécessaires pour votre destination — passeport, visa, autorisations électroniques, recommandations sanitaires — et vous accompagnons dans les démarches avant le départ.",
  },
  {
    question: "Que se passe-t-il en cas de problème pendant le voyage ?",
    answer:
      "Vous n'êtes jamais seul : l'agence et ses partenaires locaux sont joignables pendant votre voyage. En cas de non-conformité, nous intervenons auprès des prestataires pour trouver une solution rapide, comme le prévoit le Code du tourisme.",
  },
  {
    question: "Travaillez-vous uniquement avec des clients de Rennes ?",
    answer:
      "Non : si notre cœur de clientèle se trouve à Rennes et en Ille-et-Vilaine, le conseil en visio et par téléphone nous permet d'accompagner des voyageurs partout en France, avec le même niveau de service.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function Faq() {
  return (
    <div className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <PageHeader
        title="Questions fréquentes"
        subtitle="Tout ce que vous devez savoir avant de nous confier votre voyage"
        backgroundImage="/images/hero-bg.jpg"
      />

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto max-w-3xl space-y-6">
          {faq.map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm"
            >
              <h2 className="mb-3 font-serif text-lg font-bold text-gray-900">
                {item.question}
              </h2>
              <p className="leading-relaxed text-gray-600">{item.answer}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-2xl text-center">
          <h2 className="mb-4 font-serif text-2xl font-bold text-gray-900">
            Une autre question ?
          </h2>
          <p className="mb-6 text-gray-600">
            {siteConfig.advisor} vous répond avec plaisir, par téléphone au{" "}
            <a
              href={`tel:${siteConfig.phoneE164}`}
              className="text-primary font-medium hover:underline"
            >
              {siteConfig.phone}
            </a>{" "}
            ou via le formulaire de contact.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white"
          >
            <Link href="/contact">Nous contacter</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
