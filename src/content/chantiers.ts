import type { Chantier } from "./types";

/**
 * Un chantier = un processus réel suivi dans le temps. Différent d'une rubrique
 * (territoire éditorial) — voir CONTENT_MODEL.md section 1.
 * Les quatre premiers sont ceux mis en avant dans "En ce moment" sur la homepage,
 * dans cet ordre précis. `progression` est une auto-évaluation indicative de Yasmine
 * (pas une mesure objective) — à ajuster au fil de l'eau depuis ce fichier.
 */
export const chantiers: Chantier[] = [
  {
    slug: "devenir-developpeuse",
    titre: "J'apprends à devenir développeuse",
    description:
      "Passer de « je sais utiliser la technologie » à « je sais réellement construire avec ». La différence est plus grande que prévu.",
    statut: "en-cours",
    dateDebut: "2026-02-01",
    derniereMiseAJour: "2026-08-01",
    resume: "Apprentissage du code, analyse du marché, premiers projets réels.",
    progression: 20,
    objectifs: ["Comprendre ce que le marché attend réellement à 34 ans", "Construire de vrais projets, pas des exercices"],
    prochaineEtape: "Publier une analyse du marché de l'emploi dev",
    rubriquesPrincipales: ["le-bureau", "latelier"],
  },
  {
    slug: "renover-la-maison",
    titre: "Cette maison n'a pas fini de nous occuper",
    description:
      "Des pièces à refaire, beaucoup d'idées, quelques décisions discutables et une préférence de plus en plus nette pour la seconde main.",
    statut: "en-cours",
    dateDebut: "2026-01-01",
    derniereMiseAJour: "2026-08-01",
    resume:
      "Une maison reprise pièce par pièce, avec un budget réel et beaucoup d'imprévus.",
    progression: 35,
    objectifs: [
      "Reprendre les pièces principales sans tout déléguer",
      "Documenter les coûts réels, pas des estimations",
    ],
    prochaineEtape: "Budget détaillé des premiers mois de travaux",
    rubriquesPrincipales: ["la-maison"],
  },
  {
    slug: "construire-aurora",
    titre: "Je construis Aurora",
    description:
      "Une idée un peu excessive : créer une intelligence personnelle qui aide sans devenir une nouvelle chose à gérer.",
    statut: "en-cours",
    dateDebut: "2026-03-01",
    derniereMiseAJour: "2026-08-01",
    resume: "Un prototype d'assistance IA contextuelle, construit et testé en conditions réelles.",
    progression: 30,
    objectifs: ["Explorer ce qu'une IA personnelle comprend et rate de nos vies"],
    prochaineEtape: "Documenter le premier échec instructif",
    rubriquesPrincipales: ["latelier"],
  },
  {
    slug: "nouveau-modele-economique",
    titre: "Je cherche ce que je veux construire ensuite",
    description:
      "Travail, projets, business, objets, numérique : j'ai arrêté de croire qu'une seule réponse devait tout résoudre.",
    statut: "en-cours",
    dateDebut: "2026-02-01",
    derniereMiseAJour: "2026-08-01",
    resume: "Plusieurs pistes testées en parallèle, sans se disperser.",
    progression: 15,
    objectifs: ["Tester sans sur-engager", "Documenter ce qui est abandonné et pourquoi"],
    prochaineEtape: "Bilan à 6 mois des pistes testées",
    rubriquesPrincipales: ["le-bureau", "ailleurs"],
  },
  {
    slug: "construire-krokodil",
    titre: "Construire Krokodil",
    description: "Le média lui-même est un chantier : architecture, contenu, méthode.",
    statut: "en-cours",
    dateDebut: "2026-01-23",
    derniereMiseAJour: "2026-08-19",
    resume:
      "De Journal Crocodile à Journal Krokodil : refonte de la marque, du modèle éditorial et de l'architecture technique.",
    progression: 70,
    objectifs: [
      "Séparer rubrique, format et chantier dans le modèle de données",
      "Construire des fondations GEO honnêtes",
    ],
    prochaineEtape: "Valider la direction artistique finale",
    rubriquesPrincipales: ["latelier", "le-bureau"],
  },
];

export function getChantierBySlug(slug: string) {
  return chantiers.find((c) => c.slug === slug);
}

export function getChantiersActifs() {
  return chantiers.filter((c) => c.statut === "en-cours");
}
