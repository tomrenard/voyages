import { siteConfig, siteUrl } from "@/lib/site";

export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "@id": `${siteUrl}/#travelagency`,
    name: siteConfig.name,
    legalName: `${siteConfig.legalName} (Rêves de Voyages)`,
    image: `${siteUrl}/images/logo.png`,
    logo: `${siteUrl}/images/logo.png`,
    url: siteUrl,
    telephone: siteConfig.phoneE164,
    email: siteConfig.email,
    description: siteConfig.description,
    foundingDate: String(siteConfig.foundedYear),
    // Registered office only — the agency receives clients on appointment,
    // by phone or by video, so no public opening hours are advertised.
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.legal.address,
      addressLocality: siteConfig.legal.city,
      postalCode: siteConfig.legal.postalCode,
      addressCountry: siteConfig.legal.country,
    },
    // Service-area business: advice by phone/video everywhere in France,
    // with a strong local anchor in the Rennes metropolitan area.
    areaServed: [
      { "@type": "City", name: "Rennes" },
      { "@type": "City", name: "Bruz" },
      { "@type": "AdministrativeArea", name: "Ille-et-Vilaine" },
      { "@type": "AdministrativeArea", name: "Bretagne" },
      { "@type": "Country", name: "France" },
    ],
    availableLanguage: "fr",
    priceRange: "€€€",
    knowsAbout: [
      "Voyages sur mesure",
      "Voyages de noces",
      "Croisières",
      "Séjours",
      "Circuits",
      "Week-ends en Europe",
    ],
    sameAs: [siteConfig.social.facebook, siteConfig.social.instagram],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
