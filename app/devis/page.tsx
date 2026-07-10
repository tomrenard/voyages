import { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { DevisForm } from "@/components/devis-form";
import { ShieldCheck, Clock, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Devis Gratuit — Votre Voyage sur Mesure",
  description:
    "Demandez votre devis gratuit et sans engagement : destination, dates, budget — Rêves de Voyages construit une proposition personnalisée pour votre prochain voyage.",
  alternates: { canonical: "/devis" },
};

type Props = { searchParams: Promise<{ destination?: string }> };

export default async function Devis({ searchParams }: Props) {
  const { destination } = await searchParams;

  return (
    <div className="flex min-h-screen flex-col">
      <PageHeader
        title="Votre devis gratuit"
        subtitle="Racontez-nous votre projet : nous revenons vers vous avec une proposition sur mesure"
        backgroundImage="/images/hero-contact.jpg"
      />

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto mb-12 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            {
              icon: Clock,
              title: "Réponse rapide",
              text: "Une première proposition sous quelques jours ouvrés.",
            },
            {
              icon: Sparkles,
              title: "100 % sur mesure",
              text: `Un projet construit avec ${siteConfig.advisor}, selon vos envies.`,
            },
            {
              icon: ShieldCheck,
              title: "Sans engagement",
              text: "Le devis est gratuit — vous décidez ensuite, librement.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-gray-100 bg-white p-6 text-center shadow-sm"
            >
              <item.icon className="text-primary mx-auto mb-3 h-7 w-7" />
              <h2 className="mb-2 font-serif text-lg font-bold text-gray-900">
                {item.title}
              </h2>
              <p className="text-sm text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto max-w-3xl rounded-2xl border border-gray-100 bg-white p-8 shadow-sm md:p-12">
          <DevisForm defaultDestination={destination ?? ""} />
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-gray-500">
          Vous préférez en parler de vive voix ? Appelez-nous au{" "}
          <a
            href={`tel:${siteConfig.phoneE164}`}
            className="text-primary font-medium hover:underline"
          >
            {siteConfig.phone}
          </a>{" "}
          — {siteConfig.advisor} vous répond avec plaisir.
        </p>
      </div>
    </div>
  );
}
