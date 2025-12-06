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

      <div className="absolute inset-0 bg-black/20 z-10" />

      <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl font-serif font-bold tracking-tight sm:text-6xl md:text-7xl text-white drop-shadow-md">
              {slides[currentSlide].text}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-100 sm:text-xl font-light drop-shadow-sm max-w-2xl mx-auto">
              {slides[currentSlide].subtext}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full shadow-lg transition-all hover:scale-105"
              >
                <Link href="/reves-de-voyages">Je prépare mon voyage</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="text-white border-white bg-white/10 hover:bg-white/20 px-8 py-6 text-lg rounded-full backdrop-blur-sm transition-all hover:scale-105"
              >
                <Link href="/contact">Nous contacter</Link>
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 focus:outline-none md:left-8 backdrop-blur-sm transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 focus:outline-none md:right-8 backdrop-blur-sm transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-8 w-8" />
      </button>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 space-x-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2.5 w-2.5 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
