import { Metadata } from "next";
import { photoCredits } from "@/lib/credits";

export const metadata: Metadata = {
  title: "Crédits photos",
  description:
    "Crédits et licences des photographies utilisées sur le site Rêves de Voyages.",
  alternates: { canonical: "/credits-photos" },
};

export default function CreditsPhotos() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <h1 className="mb-6 text-center font-serif text-4xl font-bold text-gray-900">
          Crédits photos
        </h1>
        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
          Certaines photographies de ce site proviennent de Wikimedia Commons et
          sont publiées sous licence libre (Creative Commons / Licence Art
          Libre). Conformément à ces licences, nous en créditons les auteurs
          ci-dessous. Ces images ont pu être redimensionnées ou recadrées pour
          les besoins du site ; elles restent soumises à leur licence d'origine.
        </p>

        <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
          <ul className="divide-y divide-gray-100">
            {photoCredits.map((credit) => (
              <li
                key={credit.usage}
                className="flex flex-col gap-1 p-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="font-medium text-gray-900">{credit.usage}</p>
                  <p className="text-sm text-gray-600">
                    © {credit.author} —{" "}
                    <a
                      href={credit.licenseUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      {credit.license}
                    </a>
                  </p>
                </div>
                <a
                  href={credit.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary text-sm font-medium hover:underline"
                >
                  Source
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
