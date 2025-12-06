export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Rêves de Voyages",
    image: "https://www.revesdevoyages.com/images/logo.png",
    url: "https://www.revesdevoyages.com",
    telephone: "+33 2 23 50 18 52",
    address: {
      "@type": "PostalAddress",
      streetAddress: "7 rue Jean Mermoz",
      addressLocality: "Bruz",
      postalCode: "35170",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 48.0235,
      longitude: -1.7589,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday"],
        opens: "14:00",
        closes: "18:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:30",
        closes: "12:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "14:00",
        closes: "18:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "10:00",
        closes: "12:30",
      },
    ],
    priceRange: "$$$",
    sameAs: [
      "https://www.facebook.com/revesdevoyagesbruz",
      "https://www.instagram.com/revesdevoyagesbruz",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
