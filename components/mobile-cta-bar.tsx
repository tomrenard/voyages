"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";

// Hidden where the page itself is the form.
const hiddenOn = ["/devis", "/contact"];

export function MobileCtaBar() {
  const pathname = usePathname();
  if (hiddenOn.includes(pathname)) return null;

  return (
    <>
      {/* In-flow spacer so the fixed bar never covers the end of the page. */}
      <div className="h-16 bg-gray-950 md:hidden" aria-hidden="true" />
      <div className="bg-background/95 fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-gray-200 p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] backdrop-blur-md md:hidden">
        <a
          href={`tel:${siteConfig.phoneE164}`}
          className="flex h-12 items-center justify-center gap-2 border border-gray-300 text-sm font-medium text-gray-900"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          Appeler
        </a>
        <Link
          href="/devis"
          className="bg-primary text-primary-foreground flex h-12 items-center justify-center text-sm font-medium"
        >
          Devis gratuit
        </Link>
      </div>
    </>
  );
}
