"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    text: "Votre adresse pour des voyages 100 % personnalisables !",
    subtext: "Laissez-nous réaliser vos rêves d'évasion.",
    image: "/images/slide-1.jpg",
  },
  {
    id: 2,
    text: "Vivez une expérience touristique en toute sérénité avec RÊVES DE VOYAGES !",
    subtext: "Nous nous occupons de tout, profitez de l'instant.",
    image: "/images/slide-2.jpg",
  },
  {
    id: 3,
    text: "Personnalisez vos vacances selon vos envies et votre budget !",
    subtext: "Un voyage unique qui vous ressemble.",
    image: "/images/slide-3.jpg",
  },
  {
    id: 4,
    text: "Des conseils sur-mesure pour choisir la destination de vos rêves.",
    subtext: "Notre expertise à votre service.",
    image: "/images/slide-4.jpg",
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[600px] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false}>
          <motion.div
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
              priority={true}
              quality={90}
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute inset-0 z-10 bg-black/20" />

      <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
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
                <Link href="/reves-de-voyages">Je prépare mon voyage</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="h-auto w-full rounded-full border-white bg-white/10 px-8 py-6 text-lg text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/20 hover:text-white sm:w-auto"
              >
                <Link href="/contact">Nous contacter</Link>
              </Button>
            </div>
          </motion.div>
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
            onClick={() => setCurrentSlide(index)}
            className={`h-2.5 w-2.5 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Aller à la diapositive ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
