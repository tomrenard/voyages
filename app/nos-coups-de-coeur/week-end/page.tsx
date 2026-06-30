import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Coffee, ShoppingBag, Landmark, Plane } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Week-end & Courts Séjours",
  description:
    "Idées de week-ends en Europe et en France. City breaks, escapades romantiques et découvertes culturelles.",
  alternates: { canonical: "/nos-coups-de-coeur/week-end" },
};

export default function Weekend() {
  return (
    <div className="flex min-h-screen flex-col">
      <PageHeader
        title="Escapades Week-end"
        subtitle="Évadez-vous le temps de quelques jours"
        backgroundImage="/images/weekend.jpg"
      />

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-primary mb-6 font-serif text-3xl font-bold">
            City Breaks & Courts Séjours
          </h2>
          <p className="text-lg leading-relaxed text-gray-600">
            Découvrez nos destinations pour un week-end et profitez d’un voyage
            inoubliable. Londres, Rome, Barcelone, Prague... L'Europe est à
            portée de main pour une pause bien méritée.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Landmark,
              title: "Culture",
              text: "Musées, monuments et histoire.",
            },
            {
              icon: ShoppingBag,
              title: "Shopping",
              text: "Les meilleures adresses mode.",
            },
            {
              icon: Coffee,
              title: "Gastronomie",
              text: "Restaurants et saveurs locales.",
            },
            { icon: Plane, title: "Proximité", text: "À moins de 2h de vol." },
          ].map((item, idx) => (
            <div key={idx} className="group">
              <div className="group-hover:bg-primary mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-100 text-gray-600 transition-colors group-hover:text-white">
                <item.icon className="h-8 w-8" />
              </div>
              <h3 className="mb-2 font-serif text-lg font-bold">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white"
          >
            <Link href="/contact">Organiser mon week-end</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
