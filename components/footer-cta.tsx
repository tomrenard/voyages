"use client";

import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { hiddenOn } from "@/components/mobile-cta-bar";

export function FooterCta() {
  // The page itself is already the form there.
  if (hiddenOn.includes(usePathname())) return null;

  return (
    <div className="mb-12 grid grid-cols-1 gap-10 border-b border-white/15 pb-16 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <p className="eyebrow !text-[#C5A059]">Votre prochain voyage</p>
        <p className="mt-4 font-serif text-4xl leading-tight text-white md:text-5xl">
          Racontez-nous le voyage dont vous rêvez.
        </p>
        <a
          href={`tel:${siteConfig.phoneE164}`}
          className="mt-6 inline-flex items-center gap-2 text-white underline-offset-4 hover:underline"
        >
          <Phone className="h-4 w-4 text-[#C5A059]" aria-hidden="true" />
          Ou appelez-nous au {siteConfig.phone}
        </a>
      </div>
      {/* Plain GET form, no JS: the answers prefill the full quote form. */}
      <form
        action="/devis"
        method="get"
        className="grid grid-cols-1 gap-4 self-end sm:grid-cols-3 lg:col-span-7"
      >
        <label className="flex flex-col gap-2 text-sm text-gray-300">
          Destination
          <input
            name="destination"
            type="text"
            placeholder="Japon, à définir…"
            className="h-12 w-full border border-white/30 bg-white/5 px-3.5 text-base text-white placeholder:text-gray-400"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm text-gray-300">
          Quand ?
          <input
            name="period"
            type="text"
            placeholder="Printemps 2027"
            className="h-12 w-full border border-white/30 bg-white/5 px-3.5 text-base text-white placeholder:text-gray-400"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm text-gray-300">
          Adultes
          <input
            name="adults"
            type="number"
            min={1}
            max={20}
            defaultValue={2}
            className="h-12 w-full border border-white/30 bg-white/5 px-3.5 text-base text-white placeholder:text-gray-400"
          />
        </label>
        <button
          type="submit"
          className="h-13 cursor-pointer bg-[#C5A059] px-8 text-[0.9375rem] font-medium tracking-wide text-gray-950 transition-colors hover:bg-[#d4b273] sm:col-span-3"
        >
          Continuer ma demande de devis
        </button>
      </form>
    </div>
  );
}
