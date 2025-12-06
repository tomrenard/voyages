import { PageHeader } from "@/components/page-header";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galerie Photos",
  description:
    "Inspirez-vous avec les photos de voyages de nos clients et de nos repérages aux quatre coins du monde.",
};

export default function Galerie() {
  const images = [
    "/images/gallery-1.jpg",
    "/images/gallery-2.jpg",
    "/images/gallery-3.jpg",
    "/images/gallery-4.jpg",
    "/images/hero-bg.jpg",
    "/images/croisiere.jpg",
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Galerie Photos"
        subtitle="Instants volés aux quatre coins du monde"
        backgroundImage="/images/gallery-1.jpg"
      />

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative h-80 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <Image
                src={src}
                alt={`Voyage ${index + 1}`}
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
