import React from "react";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Compass, Heart, Globe, Award } from "lucide-react";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Voyage sur Mesure",
  description: "Créez le voyage de vos rêves avec Rêves de Voyages. Itinéraires personnalisés, hôtels de charme et expériences uniques.",
};

export default function VoyageSurMesure() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Voyage sur mesure"
        subtitle="Votre voyage ne ressemblera à aucun autre"
        backgroundImage="/images/sur-mesure.jpg"
      />

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">
                L'art du voyage personnalisé
            </h2>
             <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Parce que chacun a ses rêves, l’agence de voyage RÊVES DE VOYAGES est à l’écoute de vos envies pour créer un voyage personnalisé selon votre budget et vos désirs.
              Nous construisons avec vous l'itinéraire idéal, en choisissant chaque étape, chaque hébergement et chaque expérience.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
                <Link href="/contact">Commencer mon projet</Link>
            </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
                { icon: Compass, title: "Unique", text: "Un itinéraire conçu exclusivement pour vous, loin du tourisme de masse." },
                { icon: Heart, title: "Passion", text: "Des conseillers passionnés qui partagent leurs coups de cœur et secrets." },
                { icon: Globe, title: "Liberté", text: "Voyagez à votre rythme, avec la flexibilité de modifier votre programme." },
            ].map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                        <item.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-serif font-bold mb-4">{item.title}</h3>
                    <p className="text-gray-600">{item.text}</p>
                </div>
            ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <h3 className="text-2xl font-serif font-bold text-gray-900">Comment ça marche ?</h3>
                <div className="space-y-6">
                    {[
                        { step: "01", title: "Rencontre & Échange", text: "Nous discutons de vos envies, de votre rythme et de votre budget." },
                        { step: "02", title: "Création", text: "Nous élaborons une première proposition détaillée et sur-mesure." },
                        { step: "03", title: "Ajustements", text: "Nous affinons ensemble le projet jusqu'à ce qu'il soit parfait." },
                        { step: "04", title: "Voyage", text: "Partez l'esprit tranquille avec notre carnet de voyage et notre assistance." },
                    ].map((step) => (
                        <div key={step.step} className="flex gap-4">
                            <span className="text-2xl font-serif font-bold text-primary/30">{step.step}</span>
                            <div>
                                <h4 className="font-bold text-gray-900">{step.title}</h4>
                                <p className="text-gray-600">{step.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
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
