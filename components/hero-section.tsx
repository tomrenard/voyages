"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
// `m` + LazyMotion(domAnimation) is framer-motion's minimal entrypoint: it
// pulls in only the DOM animation feature set instead of the full `motion`
// bundle, which is all these opacity/transform crossfades need.
import { m, LazyMotion, domAnimation, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import slide1 from "@/public/images/slide-1.jpg";
import slide2 from "@/public/images/slide-2.jpg";
import slide3 from "@/public/images/slide-3.jpg";
import slide4 from "@/public/images/slide-4.jpg";

const slides = [
  {
    id: 1,
    text: "Votre adresse pour des voyages 100 % personnalisables !",
    subtext: "Laissez-nous réaliser vos rêves d'évasion.",
    image: slide1,
    cta: { label: "Découvrir le sur-mesure", href: "/voyage-sur-mesure" },
  },
  {
    id: 2,
    text: "Vivez une expérience touristique en toute sérénité avec RÊVES DE VOYAGES !",
    subtext: "Nous nous occupons de tout, profitez de l'instant.",
    image: slide2,
    cta: { label: "Découvrir l'agence", href: "/reves-de-voyages" },
  },
  {
    id: 3,
    text: "Personnalisez vos vacances selon vos envies et votre budget !",
    subtext: "Un voyage unique qui vous ressemble.",
    image: slide3,
    cta: { label: "Voir nos coups de cœur", href: "/nos-coups-de-coeur" },
  },
  {
    id: 4,
    text: "Des conseils sur-mesure pour choisir la destination de vos rêves.",
    subtext: "Notre expertise à votre service.",
    image: slide4,
    cta: { label: "Prendre rendez-vous", href: "/contact" },
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // The first slide's copy must be server-rendered at its animate state, or the
  // <h1> ships invisible and only appears once framer-motion has hydrated. Every
  // slide change goes through goTo(), which flips this ref, so the initial
  // render gets initial={false} (paint immediately) and later changes animate.
  //
  // State rather than a ref because it is read during render (the React
  // compiler rightly rejects reading a ref there); it is set from event
  // handlers, never from an effect. Gating `initial` on the element is
  // equivalent to AnimatePresence's own initial={false} for our purposes, but
  // keeps the flag local to the block whose first paint we care about instead
  // of changing presence behaviour for the whole group.
  const [hasAdvanced, setHasAdvanced] = useState(false);

  const goTo = (next: (prev: number) => number) => {
    setHasAdvanced(true);
    setCurrentSlide(next);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => goTo((prev) => (prev + 1) % slides.length);

  const prevSlide = () =>
    goTo((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <LazyMotion features={domAnimation}>
      <div className="relative h-[600px] w-full overflow-hidden bg-black text-white">
        <div className="absolute inset-0 z-0">
          <AnimatePresence initial={false}>
            <m.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <Image
                src={slides[currentSlide].image}
                alt="Paysage de voyage"
                fill
                className="object-cover brightness-[0.7]"
                // Only the first slide belongs on the critical path; a preload
                // hint injected for slide 2+ arrives too late to help anyway.
                // Kept eager so slides 2-4 still fetch on mount rather than
                // lazily mid-crossfade — `preload` replaces the deprecated
                // `priority` here, and the two throw if combined.
                preload={currentSlide === 0}
                loading="eager"
                // q=75 is plenty behind brightness-[0.7] + a black/20 overlay,
                // and takes ~30% off the LCP image against q=90.
                quality={75}
                sizes="100vw"
              />
            </m.div>
          </AnimatePresence>
        </div>

        <div className="absolute inset-0 z-10 bg-black/20" />

        <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 text-center">
          <AnimatePresence mode="wait">
            <m.div
              key={currentSlide}
              initial={hasAdvanced ? { opacity: 0, y: 20 } : false}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl px-4"
            >
              <h1 className="font-serif text-3xl font-bold tracking-tight text-white drop-shadow-md sm:text-5xl md:text-6xl lg:text-7xl">
                {slides[currentSlide].text}
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-snug font-light text-gray-100 drop-shadow-sm sm:mt-6 sm:text-lg sm:leading-8 md:text-xl">
                {slides[currentSlide].subtext}
              </p>
              <div className="mt-8 flex w-full flex-col items-center justify-center gap-4 sm:mt-10 sm:w-auto sm:flex-row sm:gap-6">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground h-auto w-full rounded-full px-8 py-6 text-lg shadow-lg transition-all hover:scale-105 sm:w-auto"
                >
                  <Link href="/devis">Demander un devis gratuit</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="h-auto w-full rounded-full border-white bg-white/10 px-8 py-6 text-lg text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/20 hover:text-white sm:w-auto"
                >
                  <Link href={slides[currentSlide].cta.href}>
                    {slides[currentSlide].cta.label}
                  </Link>
                </Button>
              </div>
            </m.div>
          </AnimatePresence>
        </div>

        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 z-30 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus:outline-none md:left-8"
          aria-label="Diapositive précédente"
        >
          <ChevronLeft className="h-8 w-8" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 z-30 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus:outline-none md:right-8"
          aria-label="Diapositive suivante"
        >
          <ChevronRight className="h-8 w-8" />
        </button>

        <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(() => index)}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Aller à la diapositive ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </LazyMotion>
  );
}
