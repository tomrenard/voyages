import withMDX from "@next/mdx";
import { NextConfig } from "next";

export default withMDX()({
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  turbopack: {},
  experimental: {
    mdxRs: {
      mdxType: "gfm",
    },
    turbopackFileSystemCacheForDev: true,
    turbopackFileSystemCacheForBuild: true,
  },
  transpilePackages: [],
  images: {
    qualities: [75, 90],
    // AVIF first (~20-30% smaller than WebP), WebP fallback for older clients.
    formats: ["image/avif", "image/webp"],
    // Keep optimized variants cached ~31 days so redeploys don't re-transform.
    minimumCacheTTL: 2678400,
    contentDispositionType: "inline",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async headers() {
    // Baseline security headers (HSTS is added by Vercel automatically).
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      {
        // Images in public/images/ are served at literal (non-hashed) URLs, so
        // this is a modest TTL with SWR rather than immutable — a replaced file
        // propagates within a week. Scoped to /images/ so it never overrides
        // Next's own immutable caching of /_next/static/* (fonts, JS, CSS).
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
    ];
  },
  async redirects() {
    // Legacy WordPress site (revesdevoyages.com pre-2026): every indexed URL
    // is 301-redirected to its closest equivalent to preserve ~19 years of
    // SEO history. Inventory sourced from the old wp-sitemap*.xml files.
    const legacyPosts: Record<string, string> = {
      // Croisières — conseils
      "les-meilleurs-plans-pour-une-croisiere-au-fil-de-leau":
        "/actualites/bien-choisir-sa-croisiere",
      "conseils-pratiques-pour-reserver-une-croisiere-avec-reves-de-voyages-preparez-votre-aventure-en-toute-serenite":
        "/actualites/bien-choisir-sa-croisiere",
      "5-raisons-de-choisir-une-croisiere-privee-pour-vos-vacances":
        "/actualites/bien-choisir-sa-croisiere",
      "4-avantages-dune-croisiere-de-derniere-minute":
        "/actualites/bien-choisir-sa-croisiere",
      // Croisières — destinations
      "top-croisieres-decouvrez-le-monde-lors-dun-seul-voyage": "/croisieres",
      "top-croisieres-de-reve": "/croisieres",
      "top-5-des-destinations-incontournables-pour-une-croisiere-avec-reves-de-voyages":
        "/croisieres",
      "5-idees-de-coins-pour-partir-en-croisiere-en-france": "/croisieres",
      // Voyages de noces & romantique
      "4-conseils-pour-bien-planifier-votre-voyage-de-noces":
        "/actualites/organiser-son-voyage-de-noces",
      "5-destinations-paradisiaques-pour-une-lune-de-miel-romantique":
        "/actualites/organiser-son-voyage-de-noces",
      "top-3-des-destinations-de-voyage-de-noce-en-2021":
        "/actualites/organiser-son-voyage-de-noces",
      "6-conseils-pour-reussir-votre-voyage-de-noce":
        "/actualites/organiser-son-voyage-de-noces",
      "6-destinations-pour-partir-en-voyage-en-amoureux":
        "/actualites/organiser-son-voyage-de-noces",
      "5-bons-conseils-pour-organiser-un-voyage-a-deux":
        "/actualites/organiser-son-voyage-de-noces",
      "escapades-romantiques-sejours-inoubliables-pour-amoureux":
        "/actualites/organiser-son-voyage-de-noces",
      // Océan Indien
      "organiser-un-sejour-en-ile-maurice-nos-conseils":
        "/destinations/ile-maurice",
      "sejour-a-lile-maurice-que-faire-pour-en-profiter-au-maximum":
        "/destinations/ile-maurice",
      "4-endroits-a-visiter-a-praslin": "/destinations/seychelles",
      "decouvrez-les-destinations-tropicales-incontournables-pour-vos-vacances":
        "/actualites/quand-partir-aux-seychelles",
      // Europe & week-ends
      "organiser-un-voyage-a-venise-les-elements-a-preparer":
        "/actualites/week-ends-en-europe",
      "6-erreurs-a-eviter-lors-de-votre-voyage-a-rome":
        "/actualites/week-ends-en-europe",
      "partir-en-voyage-en-italie-nos-conseils":
        "/actualites/week-ends-en-europe",
      "top-10-destinations-mediterraneennes": "/actualites/week-ends-en-europe",
      "top-5-des-destinations-les-plus-sures-en-europe-apres-le-covid-19":
        "/actualites/week-ends-en-europe",
      "ou-passer-le-reveillon-2021-2022": "/actualites/week-ends-en-europe",
      "voyage-en-islande-les-meilleurs-paysages-a-decouvrir-en-hiver":
        "/actualites/week-ends-en-europe",
      // Destinations phares
      "partir-en-voyage-a-new-york-nos-conseils-avises":
        "/destinations/new-york",
      "voyage-en-asie-ou-en-oceanie-nos-conseils-pour-un-sejour-reussi":
        "/nos-coups-de-coeur",
      "5-destinations-securisees-en-asie-des-voyages-inoubliables-en-toute-tranquillite-desprit":
        "/nos-coups-de-coeur",
      "destinations-de-reve-pour-les-amoureux-de-la-nature":
        "/nos-coups-de-coeur",
      // Maghreb & Méditerranée orientale
      "5-bonnes-raisons-de-feter-le-reveillon-a-marrakech":
        "/nos-voyages/sejours",
      "partir-en-voyage-au-maroc-nos-conseils": "/nos-voyages/sejours",
      "3-conseils-pour-bien-profiter-de-votre-voyage-en-turquie":
        "/nos-voyages/sejours",
      // Circuits
      "quels-sont-les-meilleurs-circuits-pour-cette-fin-dannee-2020":
        "/nos-voyages/circuits",
      "decouvrez-nos-meilleures-propositions-de-circuits-oenologiques":
        "/nos-voyages/circuits",
      "les-7-merveilles-du-monde-a-decouvrir": "/nos-voyages/circuits",
      "decouvrez-les-7-merveilles-du-monde-avec-reves-de-voyages":
        "/nos-voyages/circuits",
      // Rôle de l'agence / conseil
      "7-raisons-dutiliser-un-agent-de-voyages": "/voyage-sur-mesure",
      "sejour-en-grece-le-role-dune-agence-de-voyage": "/voyage-sur-mesure",
      "limportance-des-conseils-et-des-informations-fournies-par-les-agences-de-voyages":
        "/voyage-sur-mesure",
      "parcourez-le-monde-en-profitant-de-nos-conseils": "/voyage-sur-mesure",
      "realisez-votre-tour-du-monde-des-aujourdhui-grace-a-nos-conseils-dexperts":
        "/voyage-sur-mesure",
      // Local
      "4-raisons-pour-passer-votre-sejour-a-bruz": "/agence-de-voyages-rennes",
      // Conseils génériques & articles datés (Covid…) → hub actualités
      "organiser-un-voyage-pendant-la-pandemie-du-covid-19-quelles-precautions":
        "/actualites",
      "linventaire-des-pays-envisageant-la-reouverture-des-frontieres":
        "/actualites",
      "voyager-en-temps-de-crise-sanitaire-oui-cest-possible": "/actualites",
      "3-conseils-pour-organiser-un-voyage-apres-la-pandemie-du-covid-19":
        "/actualites",
      "decouvrez-les-meilleures-destinations-de-vacances-en-2021":
        "/actualites",
      "partir-en-voyage-comment-bien-preparer-votre-depart": "/actualites",
      "choisissez-votre-hebergement-avant-de-partir-en-voyage": "/actualites",
      "guide-pratique-pour-bien-preparer-ses-vacances": "/actualites",
      "9-astuces-pour-reussir-un-voyage-seminaire-dentreprise-a-letranger":
        "/actualites",
      "organiser-un-voyage-entre-amis-les-etapes-a-suivre": "/actualites",
      "5-conseils-pour-bien-preparer-votre-voyage-detudes-a-letranger":
        "/actualites",
      "4-endroits-insolites-a-decouvrir-dans-la-partie-septentrionale-de-la-france":
        "/actualites",
      "decouvrez-5-avantages-de-voyager-solo-a-letranger": "/actualites",
      "comment-planifier-un-voyage-de-groupe-en-5-etapes": "/actualites",
      "les-8-regles-essentielles-a-tout-bon-voyageur": "/actualites",
      "voyage-dimmersion-linguistique-decouvrez-les-destinations-incontournables-avec-nous":
        "/actualites",
      "voyages-en-solo-explorez-les-meilleures-destinations-possibles":
        "/actualites",
    };

    return [
      // Internal move: trip-type pages from /nos-coups-de-coeur/* to /nos-voyages/*.
      {
        source: "/nos-coups-de-coeur/sejours",
        destination: "/nos-voyages/sejours",
        permanent: true,
      },
      {
        source: "/nos-coups-de-coeur/circuits",
        destination: "/nos-voyages/circuits",
        permanent: true,
      },
      {
        source: "/nos-coups-de-coeur/week-end",
        destination: "/nos-voyages/week-end",
        permanent: true,
      },
      // Legacy WordPress pages with renamed paths.
      { source: "/reves-de-voyage", destination: "/reves-de-voyages", permanent: true },
      { source: "/croisiere", destination: "/croisieres", permanent: true },
      { source: "/blog", destination: "/actualites", permanent: true },
      { source: "/slide-anything-popup-preview", destination: "/", permanent: true },
      // Legacy WordPress content types.
      { source: "/testimonial/:slug", destination: "/avis", permanent: true },
      { source: "/category/:slug", destination: "/actualites", permanent: true },
      // Legacy WordPress blog posts (thematic mapping).
      ...Object.entries(legacyPosts).map(([slug, destination]) => ({
        source: `/${slug}`,
        destination,
        permanent: true,
      })),
    ];
  },
} satisfies NextConfig);
