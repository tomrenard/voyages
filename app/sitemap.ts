import { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
import { articles } from "@/lib/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // route -> [priority, changeFrequency]
  const routes: Record<
    string,
    [number, MetadataRoute.Sitemap[number]["changeFrequency"]]
  > = {
    "": [1, "weekly"],
    "/reves-de-voyages": [0.9, "monthly"],
    "/voyage-sur-mesure": [0.9, "monthly"],
    "/croisieres": [0.8, "monthly"],
    "/nos-coups-de-coeur": [0.8, "monthly"],
    "/nos-coups-de-coeur/sejours": [0.7, "monthly"],
    "/nos-coups-de-coeur/circuits": [0.7, "monthly"],
    "/nos-coups-de-coeur/week-end": [0.7, "monthly"],
    "/galerie": [0.6, "monthly"],
    "/avis": [0.6, "monthly"],
    "/actualites": [0.7, "weekly"],
    "/contact": [0.8, "yearly"],
    "/mentions-legales": [0.2, "yearly"],
    "/politique-de-confidentialite": [0.2, "yearly"],
    "/plan-du-site": [0.2, "yearly"],
  };

  const staticEntries: MetadataRoute.Sitemap = Object.entries(routes).map(
    ([route, [priority, changeFrequency]]) => ({
      url: `${siteUrl}${route}`,
      lastModified: now,
      changeFrequency,
      priority,
    }),
  );

  const articleEntries: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${siteUrl}/actualites/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...staticEntries, ...articleEntries];
}
