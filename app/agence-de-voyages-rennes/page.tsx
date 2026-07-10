import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { MapPin, ShieldCheck, Video, Star } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { coupsDeCoeur } from "@/lib/destinations";

export const metadata: Metadata = {
  title: "Agence de Voyages près de Rennes (Bruz) — Sur-Mesure & Premium",
  description:
    "Votre agence de voyages à Bruz, près de Rennes, depuis 2006 : voyages sur mesure, séjours, circuits et croisières. Conseil personnalisé en visio, par téléphone ou sur rendez-vous.",
  alternates: { canonical: "/agence-de-voyages-rennes" },
};

const faq = [
  {
    question: "Où se trouve votre agence de voyages ?",
    answer:
      "Rêves de Voyages est une agence indépendante basée à Bruz, dans la métropole rennaise. Nous ne recevons pas dans une boutique : nous vous conseillons sur rendez-vous, par téléphone ou en visioconférence — un service plus souple, aux mêmes garanties qu'une agence de quartier.",
  },
  {
    question: "Quels types de voyages organisez-vous depuis Rennes ?",
    answer:
      "Voyages sur mesure, séjours balnéaires, circuits accompagnés ou en liberté, croisières maritimes et fluviales, voyages de noces et week-ends en Europe. Chaque projet est construit individuellement selon vos envies et votre budget.",
  },
  {
    question: "Quelles garanties offre votre agence ?",
    answer:
      "Nous sommes immatriculés Atout France (IM035100033), couverts par la garantie financière de l'APST et une assurance responsabilité civile professionnelle MMA. Vos fonds et votre rapatriement sont protégés, comme l'exige le Code du tourisme.",
  },
  {
    question: "Pourquoi passer par une agence plutôt que réserver en ligne ?",
    answer:
      "Un interlocuteur unique qui connaît vos envies, des itinéraires réellement personnalisés, une assistance avant, pendant et après le voyage — et la sécurité juridique et financière d'un professionnel immatriculé. En cas d'imprévu, vous n'êtes jamais seul.",
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

export default function AgenceDeVoyagesRennes() {
  return (
    <div className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <PageHeader
        title="Votre agence de voyages près de Rennes"
        subtitle="Le sur-mesure d'une agence indépendante basée à Bruz, au service des voyageurs rennais depuis 2006"
        backgroundImage="/images/hero-new.jpg"
      />

      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* Intro */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <h2 className="text-primary mb-6 font-serif text-3xl font-bold">
            Une agence de voyages indépendante, près de chez vous
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-gray-600">
            Installée à Bruz, aux portes de Rennes,{" "}
            <strong>Rêves de Voyages</strong> accompagne depuis{" "}
            {siteConfig.foundedYear} les voyageurs de Rennes, de Bruz et de
            toute l&apos;Ille-et-Vilaine dans la création de voyages qui leur
            ressemblent : séjours, circuits, croisières, voyages de noces et
            week-ends.
          </p>
          <p className="mb-8 text-lg leading-relaxed text-gray-600">
            {siteConfig.advisor}, votre conseillère dédiée, vous reçoit sur
            rendez-vous, par téléphone ou en visioconférence — la proximité
            d&apos;une agence de quartier, la liberté en plus.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white"
            >
              <Link href="/contact">Prendre rendez-vous</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={`tel:${siteConfig.phoneE164}`}>{siteConfig.phone}</a>
            </Button>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            {
              icon: MapPin,
              title: "Ancrage local",
              text: "Une agence indépendante de la métropole rennaise qui connaît ses clients par leur prénom — pas un centre d'appels.",
            },
            {
              icon: Video,
              title: "Conseil flexible",
              text: "Rendez-vous en visio, par téléphone ou en personne : votre projet avance à votre rythme, où que vous soyez.",
            },
            {
              icon: ShieldCheck,
              title: "Garanties totales",
              text: "Immatriculation Atout France, garantie financière APST et assurance RCP MMA : voyagez l'esprit tranquille.",
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

        {/* Destinations favourites */}
        <div className="mb-20">
          <h2 className="mb-4 text-center font-serif text-3xl font-bold text-gray-900">
            Les destinations préférées de nos voyageurs rennais
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-gray-600">
            Des grands classiques aux pépites confidentielles, découvrez les
            coups de cœur que {siteConfig.advisor} recommande le plus souvent.
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coupsDeCoeur.slice(0, 6).map((destination) => (
              <Link
                key={destination.slug}
                href={`/destinations/${destination.slug}`}
                className="group relative h-56 overflow-hidden rounded-xl shadow-sm transition-shadow hover:shadow-lg"
              >
                <Image
                  src={destination.image}
                  alt={destination.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="font-serif text-xl font-bold text-white">
                    {destination.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Social proof */}
        <div className="mb-20 rounded-2xl bg-gray-50 p-8 text-center md:p-12">
          <div className="mb-4 flex justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="text-primary h-6 w-6 fill-current"
                aria-hidden
              />
            ))}
          </div>
          <blockquote className="mx-auto max-w-3xl">
            <p className="mb-4 font-serif text-xl text-gray-700 italic">
              « Une agence à taille humaine où l&apos;on se sent écouté.
              Véronique a organisé notre voyage de A à Z avec un
              professionnalisme rare. Nous recommandons les yeux fermés ! »
            </p>
            <footer className="text-sm text-gray-500">
              Un couple de voyageurs rennais —{" "}
              <Link href="/avis" className="text-primary hover:underline">
                lire tous les avis
              </Link>
            </footer>
          </blockquote>
        </div>

        {/* FAQ */}
        <div className="mx-auto mb-20 max-w-3xl">
          <h2 className="mb-10 text-center font-serif text-3xl font-bold text-gray-900">
            Questions fréquentes
          </h2>
          <div className="space-y-6">
            {faq.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <h3 className="mb-3 font-serif text-lg font-bold text-gray-900">
                  {item.question}
                </h3>
                <p className="leading-relaxed text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-primary rounded-2xl p-10 text-center text-white md:p-16">
          <h2 className="mb-4 font-serif text-3xl font-bold">
            Votre prochain voyage commence ici
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
            Racontez-nous vos envies : nous vous répondons rapidement avec une
            première proposition personnalisée, sans engagement.
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="text-primary bg-white hover:bg-gray-100"
          >
            <Link href="/devis">Demander un devis gratuit</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
