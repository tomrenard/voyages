import Link from "next/link";
import { Phone, Mail, CalendarCheck } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "@/components/social-icons";
import { TrackedLink } from "@/components/tracked-link";
import { NewsletterForm } from "@/components/newsletter-form";
import { siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12 md:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">
              Rêves de Voyages
            </h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Votre agence de voyages indépendante, spécialiste du sur-mesure
              depuis {siteConfig.foundedYear}. Un conseil personnalisé, où que
              vous soyez.
            </p>
            <div className="flex space-x-4 pt-2">
              <Link
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                <FacebookIcon className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                <InstagramIcon className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
            <a
              href={siteConfig.social.googleReviews}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary inline-block text-sm text-gray-400 underline underline-offset-4 transition-colors"
            >
              ★ Laissez-nous un avis Google
            </a>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Nous joindre</h3>
            <div className="flex items-start space-x-3">
              <CalendarCheck className="text-primary mt-0.5 h-5 w-5 shrink-0" />
              <p className="text-sm">
                Sur rendez-vous, par téléphone ou en visioconférence.
              </p>
            </div>
            <TrackedLink
              event="phone_click"
              href={`tel:${siteConfig.phoneE164}`}
              className="flex items-center space-x-3 transition-colors hover:text-white"
            >
              <Phone className="text-primary h-5 w-5" />
              <span>{siteConfig.phone}</span>
            </TrackedLink>
            <TrackedLink
              event="email_click"
              href={`mailto:${siteConfig.email}`}
              className="flex items-center space-x-3 break-all transition-colors hover:text-white"
            >
              <Mail className="text-primary h-5 w-5 shrink-0" />
              <span>{siteConfig.email}</span>
            </TrackedLink>
            <NewsletterForm />
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Informations</h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link
                href="/agence-de-voyages-rennes"
                className="transition-colors hover:text-white"
              >
                Votre agence près de Rennes
              </Link>
              <Link
                href="/mentions-legales"
                className="transition-colors hover:text-white"
              >
                Mentions légales
              </Link>
              <Link
                href="/politique-de-confidentialite"
                className="transition-colors hover:text-white"
              >
                Politique de confidentialité
              </Link>
              <Link
                href="/conditions-de-vente"
                className="transition-colors hover:text-white"
              >
                Conditions de vente
              </Link>
              <Link
                href="/plan-du-site"
                className="transition-colors hover:text-white"
              >
                Plan du site
              </Link>
              <Link
                href="/credits-photos"
                className="transition-colors hover:text-white"
              >
                Crédits photos
              </Link>
              <Link
                href="/faq"
                className="transition-colors hover:text-white"
              >
                Questions fréquentes
              </Link>
              <Link
                href="/contact"
                className="transition-colors hover:text-white"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-2 border-t border-gray-800 pt-8 text-center text-sm text-gray-500 md:flex-row md:justify-between md:text-left">
          <p>
            © {new Date().getFullYear()} Rêves de Voyages. Tous droits réservés.
          </p>
          <p className="text-xs text-gray-500">
            Immatriculation Atout France {siteConfig.legal.atoutFrance} ·
            Garantie financière APST · RCP MMA
          </p>
        </div>
      </div>
    </footer>
  );
}
