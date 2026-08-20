import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/2026/01/23/hello-world",
        destination: "/le-journal/le-manifeste-du-journal-crocodile",
        permanent: true,
      },
      {
        source: "/2026/02/09/le-mythe-de-la-collaboratrice-infatigable",
        destination: "/le-journal/le-mythe-de-la-collaboratrice-infatigable",
        permanent: true,
      },
      {
        source: "/2026/03/07/ce-que-le-careme-ma-vraiment-appris",
        destination: "/le-journal/ce-que-le-careme-ma-vraiment-appris",
        permanent: true,
      },
      { source: "/le-chantier", destination: "/chantiers", permanent: true },
      { source: "/instants-crocos", destination: "/notes", permanent: true },
      { source: "/ma-rive", destination: "/le-journal", permanent: true },
      {
        source: "/category/chronique-dun-burn-out",
        destination: "/le-journal",
        permanent: true,
      },
      { source: "/category/ma-rive", destination: "/le-journal", permanent: true },
      { source: "/category/uncategorized", destination: "/experiences", permanent: true },
    ];
  },
};

export default nextConfig;
