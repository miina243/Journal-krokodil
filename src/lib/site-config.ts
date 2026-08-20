/**
 * Configuration centrale du site. Aucune URL de réseau social n'est inventée :
 * tant qu'un champ est vide, le lien correspondant n'est pas affiché.
 */
export const siteConfig = {
  name: "Journal Krokodil",
  shortName: "Krokodil",
  tagline: "J'ose construire une vie qui me ressemble.",
  description:
    "Un média personnel d'expériences réelles : maison, bureau, atelier, journal, ailleurs. Vécu, vérifié, analysé — pas un blog lifestyle générique.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://journalcrocodile.com",
  author: {
    name: "Yasmine",
    fullName: "Yasmine Ngandu Dos Santos",
    email: "yasminengandu@gmail.com",
    location: "Dole, Bourgogne-Franche-Comté",
  },
  social: {
    instagram: "",
    tiktok: "",
    linkedin: "",
  },
} as const;
