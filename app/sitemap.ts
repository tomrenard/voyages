import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.revesdevoyages.com";

  // List of all static routes
  const routes = [
    "",
    "/reves-de-voyages",
    "/nos-coups-de-coeur",
    "/nos-coups-de-coeur/sejours",
    "/nos-coups-de-coeur/circuits",
    "/nos-coups-de-coeur/week-end",
    "/voyage-sur-mesure",
    "/croisieres",
    "/galerie",
    "/avis",
    "/actualites",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
