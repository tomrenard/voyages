import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
// @ts-expect-error
import { ViewTransition } from "react";
import cn from "clsx";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s - Voyages",
    default: "Voyages",
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
    <html lang="en" className="overflow-x-hidden touch-manipulation">
      <body
        className={cn(
          "w-full min-h-screen bg-background font-sans antialiased",
          "text-neutral-900"
        )}
      >
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
