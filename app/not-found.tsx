import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-24 text-center">
      <div className="bg-primary/10 text-primary mb-6 flex h-16 w-16 items-center justify-center rounded-full">
        <Compass className="h-8 w-8" />
      </div>
      <p className="text-primary mb-2 text-sm font-semibold tracking-widest uppercase">
        Erreur 404
      </p>
      <h1 className="mb-4 font-serif text-4xl font-bold text-gray-900">
        Cette destination est introuvable
      </h1>
      <p className="mb-8 max-w-md text-gray-600">
        La page que vous recherchez n’existe pas ou a été déplacée. Reprenons la
        route ensemble.
      </p>
      <div className="flex flex-col gap-4 sm:flex-row">
        <Button
          asChild
          size="lg"
          className="bg-primary hover:bg-primary/90 text-white"
        >
          <Link href="/">Retour à l’accueil</Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="/contact">Nous contacter</Link>
        </Button>
      </div>
    </div>
  );
}
