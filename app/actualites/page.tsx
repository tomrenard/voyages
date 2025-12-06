import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Calendar, User } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Actualités & Blog",
  description:
    "Suivez l'actualité du tourisme et découvrez nos conseils de voyage sur le blog de Rêves de Voyages.",
};

export default function Actualites() {
  const posts = [
    {
      id: 1,
      title: "Réouverture des frontières : où partir cet été ?",
      excerpt:
        "Découvrez notre sélection de destinations ouvertes aux voyageurs français pour des vacances en toute sérénité.",
      image: "/images/sejour.jpg",
      date: "15 Juin 2025",
      author: "Véronique",
    },
    {
      id: 2,
      title: "Les plus belles croisières fluviales d'Europe",
      excerpt:
        "Laissez-vous bercer au fil de l'eau et découvrez l'Europe sous un nouvel angle, du Danube au Rhin.",
      image: "/images/croisiere.jpg",
      date: "22 Mai 2025",
      author: "Vanessa",
    },
    {
      id: 3,
      title: "Safari en Tanzanie : le guide ultime",
      excerpt:
        "Tout ce qu'il faut savoir pour préparer votre safari en Tanzanie : quand partir, quels parcs visiter, quel budget prévoir.",
      image: "/images/circuit.jpg",
      date: "10 Avril 2025",
      author: "Véronique",
    },
    {
      id: 4,
      title: "Week-end à Londres : nos adresses secrètes",
      excerpt:
        "Sortez des sentiers battus et découvrez le Londres des locaux avec nos coups de cœur shopping et gastronomie.",
      image: "/images/weekend.jpg",
      date: "05 Mars 2025",
      author: "Vanessa",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Actualités & Blog"
        subtitle="Inspirations, conseils et nouvelles du monde"
        backgroundImage="/images/actualites.jpg"
      />

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100 group"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {post.author}
                  </div>
                </div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                  {post.excerpt}
                </p>
                <Button
                  variant="link"
                  className="p-0 h-auto font-bold text-primary hover:text-primary/80 justify-start"
                  asChild
                >
                  <Link href="#">Lire la suite &rarr;</Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
