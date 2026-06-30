import Image from "next/image";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

export function PageHeader({
  title,
  subtitle,
  backgroundImage,
}: PageHeaderProps) {
  return (
    <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden text-center text-white md:h-[400px]">
      <div className="absolute inset-0 z-10 bg-black/40" />
      {backgroundImage && (
        <div className="absolute inset-0 -z-0">
          <Image
            src={backgroundImage}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}
      {/* Fallback pattern if no image */}
      {!backgroundImage && <div className="bg-primary absolute inset-0 -z-0" />}

      <div className="relative z-20 container mx-auto px-4">
        <h1 className="mb-4 font-serif text-4xl font-bold md:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto max-w-2xl text-lg font-light text-gray-100 md:text-xl">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
