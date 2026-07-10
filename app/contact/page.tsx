import { PageHeader } from "@/components/page-header";
import { ContactForm } from "@/components/contact-form";
import { TrackedLink } from "@/components/tracked-link";
import { siteConfig } from "@/lib/site";
import { Phone, Mail, CalendarCheck, Video, Clock } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Rêves de Voyages pour préparer votre prochain voyage : devis gratuit, conseil sur mesure, sur rendez-vous, par téléphone ou en visioconférence.",
  alternates: { canonical: "/contact" },
};

const channels = [
  {
    icon: CalendarCheck,
    title: "Sur rendez-vous",
    text: "Prenez rendez-vous pour un échange dédié à votre projet de voyage.",
  },
  {
    icon: Phone,
    title: "Par téléphone",
    text: "Un conseil direct et personnalisé, où que vous soyez en France.",
  },
  {
    icon: Video,
    title: "En visioconférence",
    text: "Préparez votre voyage confortablement, depuis chez vous.",
  },
];

export default function Contact() {
  return (
    <div className="flex min-h-screen flex-col">
      <PageHeader
        title="Contactez-nous"
        subtitle="Prêt à réaliser votre rêve ? Discutons de votre projet."
        backgroundImage="/images/hero-contact.jpg"
      />

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-serif text-3xl font-bold text-gray-900">
                Envoyez-nous un message
              </h2>
              <p className="text-gray-600">
                Remplissez le formulaire ci-dessous et nous vous recontacterons
                dans les plus brefs délais pour construire ensemble votre voyage
                idéal.
              </p>
            </div>

            <ContactForm />
          </div>

          <div className="h-fit space-y-10 rounded-2xl bg-gray-50 p-8 md:p-12">
            <div>
              <h3 className="mb-6 font-serif text-2xl font-bold text-gray-900">
                Comment nous joindre
              </h3>
              <p className="mb-6 text-gray-600">
                Agence indépendante, nous vous recevons sur rendez-vous et
                restons disponibles par téléphone ou en visioconférence pour
                préparer votre voyage en toute simplicité.
              </p>
              <div className="space-y-4">
                {channels.map(({ icon: Icon, title, text }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div className="text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{title}</h4>
                      <p className="text-sm text-gray-600">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 border-t border-gray-200 pt-8">
              <TrackedLink
                event="phone_click"
                href={`tel:${siteConfig.phoneE164}`}
                className="group flex items-center gap-4"
              >
                <div className="text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Téléphone</h4>
                  <p className="group-hover:text-primary text-gray-600 transition-colors">
                    {siteConfig.phone}
                  </p>
                </div>
              </TrackedLink>
              <TrackedLink
                event="email_click"
                href={`mailto:${siteConfig.email}`}
                className="group flex items-center gap-4"
              >
                <div className="text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Email</h4>
                  <p className="group-hover:text-primary break-all text-gray-600 transition-colors">
                    {siteConfig.email}
                  </p>
                </div>
              </TrackedLink>
            </div>

            <div className="flex items-start gap-3 rounded-xl border border-gray-100 bg-white p-4 text-sm text-gray-500">
              <Clock className="text-primary mt-0.5 h-5 w-5 shrink-0" />
              <p>
                Nous répondons généralement sous 24&nbsp;à&nbsp;48&nbsp;heures
                ouvrées.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
