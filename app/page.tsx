import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { HighlightsSection } from "@/components/highlights-section";
import { TestimonialsSection } from "@/components/testimonials-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <AboutSection />
      <HighlightsSection />
      <TestimonialsSection />
    </div>
  );
}
