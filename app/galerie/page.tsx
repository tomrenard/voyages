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
    {
      src: "/images/gallery-1.jpg",
      alt: "Plage tropicale aux eaux turquoise au coucher du soleil",
    },
    {
      src: "/images/gallery-2.jpg",
      alt: "Lac de montagne aux eaux turquoise dans les Rocheuses",
    },
    {
      src: "/images/gallery-3.jpg",
      alt: "Vue aérienne du front de mer de Dubaï et du Burj Al Arab",
    },
    {
      src: "/images/gallery-4.jpg",
      alt: "Vue aérienne d'une plage et de barques colorées sur un lagon turquoise",
    },
    {
      src: "/images/galerie-safari.jpg",
      alt: "Éléphants dans la savane du Serengeti, en Tanzanie",
    },
    {
      src: "/images/galerie-machu.jpg",
      alt: "Le site inca du Machu Picchu perché dans les Andes",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <PageHeader
        title="Galerie Photos"
        subtitle="Instants volés aux quatre coins du monde"
        backgroundImage="/images/hero-new.jpg"
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
