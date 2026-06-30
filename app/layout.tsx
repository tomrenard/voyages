import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { ViewTransition } from "react";
import cn from "clsx";
import { Playfair_Display, Lato } from "next/font/google";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import JsonLd from "@/components/json-ld";
import { siteConfig, siteUrl } from "@/lib/site";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const lato = Lato({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: "%s - Rêves de Voyages",
    default:
      "Rêves de Voyages | Agence de voyages sur mesure près de Rennes (35)",
  },
  description:
    "Rêves de Voyages, votre agence de voyages indépendante près de Rennes. Spécialiste du sur mesure : séjours, circuits, croisières, voyages de noces et week-ends, sur rendez-vous, par téléphone ou en visio.",
  keywords: [
    "agence de voyage",
    "Bruz",
    "Rennes",
    "voyage sur mesure",
    "séjours",
    "circuits",
    "croisières",
    "vacances personnalisées",
    "voyage de noces",
  ],
  authors: [{ name: siteConfig.name }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: siteConfig.name,
    title: "Rêves de Voyages | Agence de voyages sur mesure près de Rennes",
    description:
      "Créez le voyage de vos rêves avec Rêves de Voyages. Agence indépendante spécialiste du sur-mesure, sur rendez-vous, par téléphone ou en visio.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  colorScheme: "only light",
  themeColor: "#fcfcfc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`touch-manipulation overflow-x-hidden ${playfair.variable} ${lato.variable}`}
    >
      <body
        className={cn(
          "bg-background min-h-screen w-full font-sans antialiased",
          "text-neutral-900",
        )}
      >
        <JsonLd />
        <div className="relative flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">
            <ViewTransition name="crossfade">{children}</ViewTransition>
          </main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
