import { PageHeader } from "@/components/page-header";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galerie Photos",
  description:
    "Inspirez-vous avec les photos de voyages de nos clients et de nos repérages aux quatre coins du monde.",
  alternates: { canonical: "/galerie" },
};

export default function Galerie() {
  const images = [
    { src: "/images/gallery-1.jpg", alt: "Plage tropicale aux eaux turquoise" },
    {
      src: "/images/gallery-2.jpg",
      alt: "Ville historique européenne au crépuscule",
    },
    {
      src: "/images/gallery-3.jpg",
      alt: "Paysage de montagne sous un ciel dégagé",
    },
    {
      src: "/images/gallery-4.jpg",
      alt: "Ruelle pittoresque et façades colorées",
    },
    {
      src: "/images/content-sur-mesure.jpg",
      alt: "Voyageur contemplant un panorama lointain",
    },
    {
      src: "/images/content-croisiere.jpg",
      alt: "Navire de croisière voguant au coucher du soleil",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <PageHeader
        title="Galerie Photos"
        subtitle="Instants volés aux quatre coins du monde"
        backgroundImage="/images/gallery-1.jpg"
      />

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {images.map(({ src, alt }) => (
            <div
              key={src}
              className="group relative h-80 overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:shadow-xl"
            >
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
