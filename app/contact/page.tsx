import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Rêves de Voyages à Bruz. Devis gratuit, prise de rendez-vous et renseignements pour votre prochain voyage.",
};

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Contactez-nous"
        subtitle="Prêt à réaliser votre rêve ? Discutons de votre projet."
        backgroundImage="/images/hero-contact.jpg"
      />

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-serif font-bold text-gray-900">
                Envoyez-nous un message
              </h2>
              <p className="text-gray-600">
                Remplissez le formulaire ci-dessous et nous vous recontacterons
                dans les plus brefs délais pour construire ensemble votre voyage
                idéal.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="firstName"
                    className="text-sm font-medium text-gray-700"
                  >
                    Prénom
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Jean"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="lastName"
                    className="text-sm font-medium text-gray-700"
                  >
                    Nom
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Dupont"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="jean.dupont@exemple.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="text-sm font-medium text-gray-700"
                >
                  Téléphone
                </label>
                <input
                  id="phone"
                  type="tel"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="06 12 34 56 78"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-700"
                >
                  Votre projet
                </label>
                <textarea
                  id="message"
                  className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Décrivez vos envies, destinations, dates..."
                  required
                ></textarea>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-white"
              >
                Envoyer ma demande
              </Button>
            </form>
          </div>

          <div className="bg-gray-50 p-8 md:p-12 rounded-2xl space-y-10 h-fit">
            <div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                Nos coordonnées
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shrink-0 shadow-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Adresse</h4>
                    <p className="text-gray-600">
                      7 rue Jean Mermoz,
                      <br />
                      35170 Bruz
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shrink-0 shadow-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Téléphone</h4>
                    <p className="text-gray-600">02 23 50 18 52</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6 flex items-center gap-2">
                Horaires d'ouverture
              </h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex justify-between items-center pb-2 border-b border-gray-200">
                  <span className="font-medium">Lundi</span>
                  <span>14:00 à 18:30</span>
                </li>
                <li className="flex justify-between items-center pb-2 border-b border-gray-200">
                  <span className="font-medium">Mardi - Vendredi</span>
                  <span className="text-right">
                    9:30 - 12:30 <br /> 14:00 - 18:30
                  </span>
                </li>
                <li className="flex justify-between items-center pb-2 border-b border-gray-200">
                  <span className="font-medium">Samedi</span>
                  <span>10:00 à 12:30</span>
                </li>
                <li className="flex justify-between items-center text-gray-400">
                  <span className="font-medium">Dimanche</span>
                  <span>Fermé</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
