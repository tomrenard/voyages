import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-theme(spacing.32))] flex-col items-center justify-center p-24 text-center">
      <h2 className="text-4xl font-bold mb-4">Page non trouvée</h2>
      <p className="mb-8 text-muted-foreground">
        Désolé, la page que vous recherchez n'existe pas.
      </p>
      <Link href="/" className="text-primary hover:underline">
        Retour à l'accueil
      </Link>
    </div>
  );
}
