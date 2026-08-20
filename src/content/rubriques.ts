import type { Rubrique } from "./types";

export const rubriques: Rubrique[] = [
  {
    slug: "la-maison",
    numero: "01",
    nom: "La Maison",
    description:
      "Les travaux, les objets, le jardin et cette conviction persistante qu'on peut probablement le faire nous-mêmes.",
    descriptionLongue:
      "Les travaux, les objets, le jardin et cette conviction persistante qu'on peut probablement le faire nous-mêmes.",
    cta: "Voir la maison",
    actif: true,
  },
  {
    slug: "le-bureau",
    numero: "02",
    nom: "Le Bureau",
    description:
      "Travail, argent, reconversions et toutes les questions qu'on se pose une fois qu'on ne veut plus simplement « avoir un poste ».",
    descriptionLongue:
      "Travail, argent, reconversions et toutes les questions qu'on se pose une fois qu'on ne veut plus simplement « avoir un poste ».",
    cta: "Ouvrir le bureau",
    actif: true,
  },
  {
    slug: "latelier",
    numero: "03",
    nom: "L'Atelier",
    description:
      "Code, IA, outils, prototypes et idées qui commencent généralement par « et si on essayait... ».",
    descriptionLongue:
      "Code, IA, outils, prototypes et idées qui commencent généralement par « et si on essayait... ».",
    cta: "Entrer dans l'atelier",
    actif: true,
  },
  {
    slug: "le-journal",
    numero: "04",
    nom: "Le Journal",
    description:
      "La partie moins facile à classer : famille, foi, corps, décisions et ce que la vie fait au milieu des plans.",
    descriptionLongue:
      "La partie moins facile à classer : famille, foi, corps, décisions et ce que la vie fait au milieu des plans.",
    cta: "Entrer dans le journal",
    actif: true,
  },
  {
    slug: "ailleurs",
    numero: "05",
    nom: "Ailleurs",
    description:
      "Des lieux, des cultures, des objets et tout ce qu'on ramène d'un voyage sans que cela rentre forcément dans une valise.",
    descriptionLongue:
      "Des lieux, des cultures, des objets et tout ce qu'on ramène d'un voyage sans que cela rentre forcément dans une valise.",
    cta: "Partir ailleurs",
    actif: true,
  },
];

export function getRubriqueBySlug(slug: string) {
  return rubriques.find((r) => r.slug === slug && r.actif);
}
