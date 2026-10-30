import Link from "next/link";
import { Phone, Mail, CalendarCheck } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "@/components/social-icons";
import { siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="container mx-auto px-4 pt-20 pb-12 md:px-8">
        <div className="grid grid-cols-1 gap-10 border-b border-white/15 pb-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow !text-[#C5A059]">Votre prochain voyage</p>
            <p className="mt-4 font-serif text-4xl leading-tight text-white md:text-5xl">
              Racontez-nous le voyage dont vous rêvez.
            </p>
            <a
              href={`tel:${siteConfig.phoneE164}`}
              className="mt-6 inline-flex items-center gap-2 text-white underline-offset-4 hover:underline"
            >
              <Phone className="h-4 w-4 text-[#C5A059]" aria-hidden="true" />
              Ou appelez-nous au {siteConfig.phone}
            </a>
          </div>
          {/* Plain GET form, no JS: the answers prefill the full quote form. */}
          <form
            action="/devis"
            method="get"
            className="grid grid-cols-1 gap-4 self-end sm:grid-cols-3 lg:col-span-7"
          >
            <label className="flex flex-col gap-2 text-sm text-gray-300">
              Destination
              <input
                name="destination"
                type="text"
                placeholder="Japon, à définir…"
                className="h-12 w-full border border-white/30 bg-white/5 px-3.5 text-base text-white placeholder:text-gray-400"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-gray-300">
              Quand ?
              <input
                name="period"
                type="text"
                placeholder="Printemps 2027"
                className="h-12 w-full border border-white/30 bg-white/5 px-3.5 text-base text-white placeholder:text-gray-400"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-gray-300">
              Adultes
              <input
                name="adults"
                type="number"
                min={1}
                max={20}
                defaultValue={2}
                className="h-12 w-full border border-white/30 bg-white/5 px-3.5 text-base text-white placeholder:text-gray-400"
              />
            </label>
            <button
              type="submit"
              className="h-13 cursor-pointer bg-[#C5A059] px-8 text-[0.9375rem] font-medium tracking-wide text-gray-950 transition-colors hover:bg-[#d4b273] sm:col-span-3"
            >
              Continuer ma demande de devis
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 gap-10 pt-12 md:grid-cols-3">
          <div className="space-y-4">
            <h3 className="font-serif text-xl text-white">Rêves de Voyages</h3>
            <p className="text-sm leading-relaxed text-gray-300">
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
              className="inline-block text-sm text-gray-300 underline underline-offset-4 transition-colors hover:text-[#C5A059]"
            >
              ★ Laissez-nous un avis Google
            </a>
          </div>

          <div className="space-y-4">
            <h3 className="font-serif text-xl text-white">Nous joindre</h3>
            <div className="flex items-start space-x-3">
              <CalendarCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#C5A059]" />
              <p className="text-sm">
                Sur rendez-vous, par téléphone ou en visioconférence.
              </p>
            </div>
            <a
              href={`tel:${siteConfig.phoneE164}`}
              className="flex items-center space-x-3 transition-colors hover:text-white"
            >
              <Phone className="h-5 w-5 text-[#C5A059]" />
              <span>{siteConfig.phone}</span>
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center space-x-3 break-all transition-colors hover:text-white"
            >
              <Mail className="h-5 w-5 shrink-0 text-[#C5A059]" />
              <span>{siteConfig.email}</span>
            </a>
          </div>

          <div className="space-y-4">
            <h3 className="font-serif text-xl text-white">Informations</h3>
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
                href="/galerie"
                className="transition-colors hover:text-white"
              >
                Galerie photos
              </Link>
              <Link href="/faq" className="transition-colors hover:text-white">
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

        <div className="mt-12 flex flex-col items-center gap-2 border-t border-white/15 pt-8 text-center text-sm text-gray-400 md:flex-row md:justify-between md:text-left">
          <p>
            © {new Date().getFullYear()} Rêves de Voyages. Tous droits réservés.
          </p>
          <p className="text-xs text-gray-400">
            Immatriculation Atout France {siteConfig.legal.atoutFrance} ·
            Garantie financière APST · RCP MMA
          </p>
        </div>
      </div>
    </footer>
  );
}
