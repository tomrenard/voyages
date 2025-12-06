import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
// @ts-expect-error
import { ViewTransition } from "react";
import cn from "clsx";
import { Playfair_Display, Lato } from "next/font/google";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import JsonLd from "@/components/json-ld";
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
  title: {
    template: "%s - Rêves de Voyages",
    default: "Rêves de Voyages | Agence de voyages sur mesure à Bruz (35)",
  },
  description:
    "RÊVES DE VOYAGES, votre agence de voyages à Bruz près de Rennes. Spécialiste des voyages sur mesure, séjours, circuits, croisières et week-ends personnalisés.",
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
  authors: [{ name: "Rêves de Voyages" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.revesdevoyages.com",
    siteName: "Rêves de Voyages",
    title: "Rêves de Voyages | Agence de voyages sur mesure à Bruz",
    description:
      "Créez le voyage de vos rêves avec Rêves de Voyages. Agence spécialiste du sur-mesure à Bruz (35).",
  },
};

export const viewport: Viewport = {
  maximumScale: 1,
  colorScheme: "only light",
  themeColor: "#fcfcfc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`overflow-x-hidden touch-manipulation ${playfair.variable} ${lato.variable}`}>
      <body
        className={cn(
          "w-full min-h-screen bg-background font-sans antialiased",
          "text-neutral-900"
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
