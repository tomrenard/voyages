import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { HighlightsSection } from "@/components/highlights-section";
import { EnviesSection } from "@/components/envies-section";
import { ProcessSteps } from "@/components/process-steps";
import { TestimonialsSection } from "@/components/testimonials-section";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeroSection />
      <AboutSection />
      <HighlightsSection />
      <EnviesSection />
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-8">
          <p className="eyebrow">Comment ça marche</p>
          <h2 className="mt-4 mb-14 max-w-2xl font-serif text-5xl leading-tight text-gray-900">
            Un voyage construit à deux, en quatre étapes
          </h2>
          <ProcessSteps />
        </div>
      </section>
      <div className="border-t border-gray-200" />
      <TestimonialsSection />
    </div>
  );
}
