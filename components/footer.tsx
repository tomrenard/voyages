"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full mx-auto py-10 flex flex-col items-center gap-6 text-muted-foreground font-[family-name:var(--font-family-sans)] tracking-[-0.006em] px-4 md:px-8 border-t border-border bg-background">
      <div className="flex flex-col items-center gap-4">
        <p className="text-sm font-normal text-center">
          © {new Date().getFullYear()} Voyages. Tous droits réservés.
        </p>
        <nav className="flex flex-wrap justify-center gap-4 text-sm">
          <Link
            href="/mentions-legales"
            className="hover:text-foreground transition-colors"
          >
            Mentions légales
          </Link>
          <Link
            href="/politique-de-confidentialite"
            className="hover:text-foreground transition-colors"
          >
            Politique de confidentialité
          </Link>
          <Link
            href="/plan-du-site"
            className="hover:text-foreground transition-colors"
          >
            Plan de site
          </Link>
        </nav>
      </div>
    </footer>
  );
}
