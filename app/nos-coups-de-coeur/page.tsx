import Link from "next/link";

export default function NosCoupsDeCoeur() {
  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-8">Nos coups de cœur</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link href="/nos-coups-de-coeur/sejours" className="p-4 border rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 transition">Séjours</Link>
        <Link href="/nos-coups-de-coeur/circuits" className="p-4 border rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 transition">Circuits</Link>
        <Link href="/nos-coups-de-coeur/sur-mesure" className="p-4 border rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 transition">Sur-mesure</Link>
        <Link href="/nos-coups-de-coeur/croisieres" className="p-4 border rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 transition">Croisières</Link>
        <Link href="/nos-coups-de-coeur/week-end" className="p-4 border rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 transition">Week-end</Link>
      </div>
    </div>
  );
}

