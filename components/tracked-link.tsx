"use client";

import { track } from "@vercel/analytics";

/**
 * Anchor that fires a cookie-free Vercel Analytics event on click.
 * Used for conversion signals that leave the site (tel:, mailto:).
 */
export function TrackedLink({
  event,
  href,
  className,
  children,
}: {
  event: string;
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href} className={className} onClick={() => track(event)}>
      {children}
    </a>
  );
}
