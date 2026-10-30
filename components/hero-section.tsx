import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";
import heroImg from "@/public/images/hero.jpg";

// One still photo instead of the old autoplay carousel: lighter LCP, nothing
// moving without a pause control (WCAG 2.2.2), and one clear message.
export function HeroSection() {
  return (
    <section className="relative flex h-[calc(100svh-5rem)] max-h-[900px] min-h-[560px] items-end overflow-hidden bg-gray-900 text-white">
      <Image
        src={heroImg}
        alt=""
        fill
        preload
        quality={75}
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/5" />

      <div className="relative container mx-auto px-4 pb-24 md:px-8 md:pb-20">
        <p className="eyebrow !text-white/85">
          Agence de voyages sur mesure · Près de Rennes
        </p>
        <h1 className="mt-5 max-w-4xl font-serif text-[clamp(2.75rem,7vw,6rem)] leading-[0.98]">
          Des voyages sur mesure, <em>imaginés pour vous.</em>
        </h1>
        <p className="mt-6 max-w-xl text-white/90 md:text-xl">
          Depuis {siteConfig.foundedYear}, {siteConfig.advisor} conçoit des
          voyages personnalisés, à votre rythme et selon votre budget : sur
          rendez-vous, par téléphone ou en visio.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/devis">Demander un devis gratuit</Link>
          </Button>
          {/* Phones already get "Devis gratuit" in the sticky bar; one choice here. */}
          <Button
            asChild
            size="lg"
            variant="light"
            className="hidden sm:inline-flex"
          >
            <Link href="/nos-coups-de-coeur">Nos coups de cœur</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
