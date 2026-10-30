import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// Browse by mood rather than by country. Every entry points at a page or
// article that already exists.
const envies = [
  {
    title: "Voyage de noces",
    text: "Lagons, couchers de soleil et attentions sur mesure.",
    href: "/actualites/organiser-son-voyage-de-noces",
  },
  {
    title: "Soleil d'hiver",
    text: "Où trouver la chaleur de décembre à mars.",
    href: "/actualites/ou-partir-au-soleil-en-hiver",
  },
  {
    title: "Grands circuits",
    text: "Plusieurs étapes, un fil conducteur, aucun souci.",
    href: "/nos-voyages/circuits",
  },
  {
    title: "Croisières",
    text: "Fleuves mythiques et plus belles mers du monde.",
    href: "/croisieres",
  },
  {
    title: "Week-ends en Europe",
    text: "Une capitale, deux ou trois jours, l'esprit léger.",
    href: "/nos-voyages/week-end",
  },
];

export function EnviesSection() {
  return (
    <section className="bg-sand py-24 md:py-32">
      <div className="container mx-auto grid grid-cols-1 gap-12 px-4 md:px-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="eyebrow">Par envie</p>
          <h2 className="mt-4 font-serif text-5xl leading-tight text-gray-900">
            Et vous, de quoi avez-vous envie ?
          </h2>
          <p className="mt-6 max-w-sm text-gray-600">
            Pas encore de destination en tête ? Partez d'une envie, nous
            trouverons ensemble l'endroit qui lui ressemble.
          </p>
        </div>
        <ul className="border-b border-gray-300 lg:col-span-8">
          {envies.map((envie) => (
            <li key={envie.href} className="border-t border-gray-300">
              <Link
                href={envie.href}
                className="group flex items-center justify-between gap-6 py-6 md:py-8"
              >
                <span className="flex flex-col gap-1 md:flex-row md:items-baseline md:gap-8">
                  <span className="group-hover:text-primary font-serif text-3xl text-gray-900 transition-colors md:text-4xl">
                    {envie.title}
                  </span>
                  <span className="text-gray-600">{envie.text}</span>
                </span>
                <ArrowUpRight
                  className="group-hover:text-primary h-6 w-6 shrink-0 text-gray-500 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  aria-hidden="true"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
