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
    contentDispositionType: "inline",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async redirects() {
    // Trip-type pages moved from /nos-coups-de-coeur/* to /nos-voyages/*.
    return [
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
    ];
  },
} satisfies NextConfig);
