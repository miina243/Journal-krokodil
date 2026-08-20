import type { MetadataRoute } from "next";
import { rubriques, chantiers, getExperiences, getNotes } from "@/content";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/explorer",
    "/chantiers",
    "/experiences",
    "/notes",
    "/a-propos",
    "/methode-editoriale",
    "/politique-de-correction",
    "/usage-de-lia",
    "/partenariats-et-affiliation",
    "/recherche",
    "/mentions-legales",
    "/confidentialite",
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
  }));

  const rubriqueRoutes = rubriques.map((r) => ({
    url: `${siteConfig.url}/${r.slug}`,
    lastModified: new Date(),
  }));

  const chantierRoutes = chantiers.map((c) => ({
    url: `${siteConfig.url}/chantiers/${c.slug}`,
    lastModified: new Date(c.derniereMiseAJour),
  }));

  const experienceRoutes = getExperiences().map((e) => ({
    url: `${siteConfig.url}/${e.rubrique}/${e.slug}`,
    lastModified: new Date(e.derniereMiseAJour),
  }));

  const noteRoutes = getNotes().map((n) => ({
    url: `${siteConfig.url}/notes/${n.slug}`,
    lastModified: new Date(n.date),
  }));

  return [
    ...staticRoutes,
    ...rubriqueRoutes,
    ...chantierRoutes,
    ...experienceRoutes,
    ...noteRoutes,
  ];
}
