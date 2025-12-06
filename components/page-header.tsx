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
    <div className="relative h-[300px] md:h-[400px] w-full flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/40 z-10" />
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
      {!backgroundImage && <div className="absolute inset-0 -z-0 bg-primary" />}

      <div className="relative z-20 container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 font-serif">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl max-w-2xl mx-auto font-light text-gray-100">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
