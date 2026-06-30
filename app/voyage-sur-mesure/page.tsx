import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Compass, Heart, Globe } from "lucide-react";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Voyage sur Mesure",
  description:
    "Créez le voyage de vos rêves avec Rêves de Voyages. Itinéraires personnalisés, hôtels de charme et expériences uniques.",
  alternates: { canonical: "/voyage-sur-mesure" },
};

export default function VoyageSurMesure() {
  return (
    <div className="flex min-h-screen flex-col">
      <PageHeader
        title="Voyage sur mesure"
        subtitle="Votre voyage ne ressemblera à aucun autre"
        backgroundImage="/images/sur-mesure.jpg"
      />

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <h2 className="text-primary mb-6 font-serif text-3xl font-bold">
            L'art du voyage personnalisé
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-gray-600">
            Parce que chacun a ses rêves, l’agence de voyage RÊVES DE VOYAGES
            est à l’écoute de vos envies pour créer un voyage personnalisé selon
            votre budget et vos désirs. Nous construisons avec vous l'itinéraire
            idéal, en choisissant chaque étape, chaque hébergement et chaque
            expérience.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white"
          >
            <Link href="/contact">Commencer mon projet</Link>
          </Button>
        </div>

        <div className="mb-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            {
              icon: Compass,
              title: "Unique",
              text: "Un itinéraire conçu exclusivement pour vous, loin du tourisme de masse.",
            },
            {
              icon: Heart,
              title: "Passion",
              text: "Des conseillers passionnés qui partagent leurs coups de cœur et secrets.",
            },
            {
              icon: Globe,
              title: "Liberté",
              text: "Voyagez à votre rythme, avec la flexibilité de modifier votre programme.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="bg-primary/10 text-primary mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-4 font-serif text-xl font-bold">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <h3 className="font-serif text-2xl font-bold text-gray-900">
              Comment ça marche ?
            </h3>
            <div className="space-y-6">
              {[
                {
                  step: "01",
                  title: "Rencontre & Échange",
                  text: "Nous discutons de vos envies, de votre rythme et de votre budget.",
                },
                {
                  step: "02",
                  title: "Création",
                  text: "Nous élaborons une première proposition détaillée et sur-mesure.",
                },
                {
                  step: "03",
                  title: "Ajustements",
                  text: "Nous affinons ensemble le projet jusqu'à ce qu'il soit parfait.",
                },
                {
                  step: "04",
                  title: "Voyage",
                  text: "Partez l'esprit tranquille avec notre carnet de voyage et notre assistance.",
                },
              ].map((step) => (
                <div key={step.step} className="flex gap-4">
                  <span className="text-primary/30 font-serif text-2xl font-bold">
                    {step.step}
                  </span>
                  <div>
                    <h4 className="font-bold text-gray-900">{step.title}</h4>
                    <p className="text-gray-600">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[500px] overflow-hidden rounded-xl shadow-xl">
            <Image
              src="/images/content-sur-mesure.jpg"
              alt="Préparation voyage"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
