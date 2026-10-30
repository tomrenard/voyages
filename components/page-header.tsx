import Image from "next/image";
import type { StaticImageData } from "next/image";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: StaticImageData;
}

export function PageHeader({
  title,
  subtitle,
  backgroundImage,
}: PageHeaderProps) {
  return (
    <div className="relative flex min-h-[340px] w-full items-end overflow-hidden bg-gray-900 text-white md:h-[58vh] md:max-h-[640px]">
      {backgroundImage && (
        <Image
          src={backgroundImage}
          // Decorative: the title right below says what the page is.
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          // `preload` supersedes `priority`, which 16.3 marks deprecated.
          // Unconditional as before — this is the page's above-fold hero.
          preload
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/10" />

      <div className="relative container mx-auto px-4 pt-24 pb-12 md:px-8 md:pb-16">
        <h1 className="max-w-4xl font-serif text-5xl leading-[1.02] md:text-7xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-lg text-white/90 md:text-xl">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
