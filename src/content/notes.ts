import type { Note } from "./types";

/**
 * Notes de terrain — format court. Toutes marquées `placeholder` : exemples de format,
 * pas des faits vécus rapportés comme vérifiés.
 */
export const notes: Note[] = [
  {
    slug: "carrelage-trouve-un-dimanche",
    titre: "Le carrelage trouvé un dimanche, cassé le lundi",
    format: "note",
    rubrique: "la-maison",
    chantier: "renover-la-maison",
    date: "2026-04-14",
    auteur: "Yasmine",
    excerpt: "Une trouvaille, une erreur de manipulation, une leçon sur la patience.",
    tags: ["chine", "erreur"],
    coverImage: null,
    placeholder: true,
    corps: [
      { type: "paragraph", text: "Note de démonstration : format court, une idée ou une photo, pas un article complet." },
    ],
  },
  {
    slug: "aurora-a-refuse-une-evidence",
    titre: "Aurora vient de refuser une évidence. C'est bon signe.",
    format: "note",
    rubrique: "latelier",
    chantier: "construire-aurora",
    date: "2026-04-11",
    auteur: "Yasmine",
    excerpt: "Un petit désaccord avec l'outil qu'on construit, et ce qu'il révèle.",
    tags: ["ia", "test"],
    coverImage: null,
    placeholder: true,
    corps: [{ type: "paragraph", text: "Note de démonstration illustrant le format court de L'Atelier." }],
  },
  {
    slug: "tabouret-rapporte-de-kinshasa",
    titre: "Trouvé à Kinshasa : un tabouret qui pèse le poids d'un tronc",
    format: "note",
    rubrique: "ailleurs",
    date: "2026-03-30",
    location: "Kinshasa",
    auteur: "Yasmine",
    excerpt: "Un objet, un lieu, une raison de le ramener.",
    tags: ["afrique", "objets"],
    coverImage: null,
    placeholder: true,
    corps: [{ type: "paragraph", text: "Note de démonstration illustrant le format Ailleurs." }],
  },
  {
    slug: "budget-du-mois-qui-derape",
    titre: "Le budget du mois qui dérape (encore)",
    format: "note",
    rubrique: "le-bureau",
    chantier: "nouveau-modele-economique",
    date: "2026-03-25",
    auteur: "Yasmine",
    excerpt: "Un chiffre, une observation, sans grand article autour.",
    tags: ["budget"],
    coverImage: null,
    placeholder: true,
    corps: [{ type: "paragraph", text: "Note de démonstration illustrant le format court." }],
  },
];

export function getNotes(): Note[] {
  return [...notes].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getNoteBySlug(slug: string): Note | undefined {
  return notes.find((n) => n.slug === slug);
}

export function getNotesByRubrique(rubrique: string): Note[] {
  return getNotes().filter((n) => n.rubrique === rubrique);
}
