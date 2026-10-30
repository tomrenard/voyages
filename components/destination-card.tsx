import Link from "next/link";
import Image from "next/image";
import type { Destination } from "@/lib/destinations";
import { getDestinationContent } from "@/lib/destination-content";
import { formatEuros } from "@/lib/utils";

export function DestinationCard({ destination }: { destination: Destination }) {
  const content = getDestinationContent(destination.slug);

  return (
    <Link
      href={`/destinations/${destination.slug}`}
      className="group flex flex-col"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
        <Image
          src={destination.image}
          alt={destination.imageAlt}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="mt-5 flex items-baseline justify-between gap-4">
        <h3 className="group-hover:text-primary font-serif text-3xl text-gray-900 transition-colors">
          {destination.title}
        </h3>
        {content && (
          <p className="shrink-0 text-sm text-gray-600">
            dès {formatEuros(content.budgetFrom)} € / pers.
          </p>
        )}
      </div>
      <p className="mt-2 leading-relaxed text-gray-600">{destination.blurb}</p>
      {content && (
        <p className="mt-3 text-xs tracking-wide text-gray-500 uppercase">
          Durée idéale : {content.idealDuration}
        </p>
      )}
    </Link>
  );
}
