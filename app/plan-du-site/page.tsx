import Link from "next/link";

export default function PlanDuSite() {
  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-8">Plan du site</h1>
      <ul className="list-disc flex flex-col gap-2">
        <li><Link href="/" className="hover:underline">Accueil</Link></li>
        <li><Link href="/reves-de-voyages" className="hover:underline">Rêves de voyages</Link></li>
        <li>
          <Link href="/nos-coups-de-coeur" className="hover:underline">Nos coups de cœur</Link>
          <ul className="list-circle ml-6 mt-2">
            <li><Link href="/nos-coups-de-coeur/sejours" className="hover:underline">Séjours</Link></li>
            <li><Link href="/nos-coups-de-coeur/circuits" className="hover:underline">Circuits</Link></li>
            <li><Link href="/nos-coups-de-coeur/sur-mesure" className="hover:underline">Sur-mesure</Link></li>
            <li><Link href="/nos-coups-de-coeur/croisieres" className="hover:underline">Croisières</Link></li>
            <li><Link href="/nos-coups-de-coeur/week-end" className="hover:underline">Week-end</Link></li>
          </ul>
        </li>
        <li><Link href="/voyage-sur-mesure" className="hover:underline">Voyage sur mesure</Link></li>
        <li><Link href="/croisieres" className="hover:underline">Croisières</Link></li>
        <li><Link href="/galerie" className="hover:underline">Galerie</Link></li>
        <li><Link href="/avis" className="hover:underline">Avis</Link></li>
        <li><Link href="/actualites" className="hover:underline">Actualités</Link></li>
        <li><Link href="/contact" className="hover:underline">Contact</Link></li>
        <li><Link href="/mentions-legales" className="hover:underline">Mentions légales</Link></li>
        <li><Link href="/politique-de-confidentialite" className="hover:underline">Politique de confidentialité</Link></li>
      </ul>
    </div>
  );
}

