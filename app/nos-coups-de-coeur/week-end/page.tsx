import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Coffee, ShoppingBag, Landmark, Plane } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Week-end & Courts Séjours",
  description:
    "Idées de week-ends en Europe et en France. City breaks, escapades romantiques et découvertes culturelles.",
};

export default function Weekend() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Escapades Week-end"
        subtitle="Évadez-vous le temps de quelques jours"
        backgroundImage="/images/weekend.jpg"
      />

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-primary mb-6">
            City Breaks & Courts Séjours
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Découvrez nos destinations pour un week-end et profitez d’un voyage
            inoubliable. Londres, Rome, Barcelone, Prague... L'Europe est à
            portée de main pour une pause bien méritée.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
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
              <div className="w-16 h-16 mx-auto bg-gray-100 rounded-2xl flex items-center justify-center text-gray-600 mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="font-serif font-bold text-lg mb-2">
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
