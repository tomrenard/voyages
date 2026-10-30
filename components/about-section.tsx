import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site";
import aboutImg from "@/public/images/about-img.jpg";

export function AboutSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="relative aspect-[4/5] overflow-hidden bg-gray-100 lg:col-span-5">
          <Image
            src={aboutImg}
            alt="Une boussole de poche en laiton ouverte sur une table en bois"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
        </div>
        <div className="lg:col-span-7">
          <p className="eyebrow">L'agence</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-gray-900 md:text-5xl">
            Rêves de Voyages, votre agence de voyages à Bruz, près de Rennes
          </h2>
          <p className="mt-8 font-serif text-2xl leading-snug text-gray-800 md:text-3xl">
            Chaque voyage commence par une conversation : nous vous écoutons,
            puis nous construisons l'itinéraire qui vous ressemble.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 text-gray-600 md:grid-cols-2">
            <p>
              Spécialiste de{" "}
              <strong className="font-medium text-gray-900">
                voyages personnalisés depuis {siteConfig.foundedYear}
              </strong>
              , l'agence met à votre disposition des programmes adaptés à toutes
              les envies et à tous les budgets.
            </p>
            <p>
              Week-end, vacances ou{" "}
              <strong className="font-medium text-gray-900">
                voyage de noces
              </strong>{" "}
              : {siteConfig.advisor} vous accompagne avant, pendant et après
              votre voyage, de l'océan Indien aux grandes capitales européennes.
            </p>
          </div>
          <Link
            href="/reves-de-voyages"
            className="group hover:text-primary mt-10 inline-flex items-center gap-2 text-sm font-medium tracking-wide text-gray-900"
          >
            Découvrir l'agence
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
