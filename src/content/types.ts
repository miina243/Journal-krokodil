export type RubriqueSlug = "la-maison" | "le-bureau" | "latelier" | "le-journal" | "ailleurs";

export interface Rubrique {
  slug: RubriqueSlug;
  numero: string;
  nom: string;
  description: string;
  descriptionLongue: string;
  /** Verbe d'action contextualisé pour le CTA d'entrée dans la rubrique (ex. "Entrer dans l'atelier") */
  cta: string;
  actif: boolean;
}

export type ChantierStatut = "en-cours" | "en-pause" | "termine" | "abandonne";

export interface Chantier {
  slug: string;
  titre: string;
  description: string;
  statut: ChantierStatut;
  dateDebut: string;
  derniereMiseAJour: string;
  resume: string;
  objectifs: string[];
  /** Avancement estimé (0-100), auto-évalué par Yasmine — indicatif, pas une mesure objective */
  progression: number;
  resultats?: string;
  raisonAbandon?: string;
  prochaineEtape?: string;
  rubriquesPrincipales: RubriqueSlug[];
}

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "quote"; text: string; cite?: string }
  | { type: "list"; style: "bullet" | "number"; items: string[] }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "gallery"; images: { src: string; alt: string; caption?: string }[] };

export interface Source {
  titre: string;
  auteur?: string;
  organisme?: string;
  publication?: string;
  date?: string;
  url?: string;
  dateConsultation?: string;
  note?: string;
}

export type PreuveType =
  | "photo"
  | "capture-ecran"
  | "budget"
  | "tableau"
  | "mesure"
  | "ticket"
  | "avant-apres"
  | "chronologie"
  | "document"
  | "resultat"
  | "erreur";

export interface Preuve {
  type: PreuveType;
  titre?: string;
  contenu: ContentBlock[];
  legende?: string;
  date?: string;
}

export interface ShortAnswer {
  texte: string;
}

export type FormatSlug = "note" | "experience" | "dossier" | "guide";

export interface ContentBase {
  slug: string;
  titre: string;
  rubrique: RubriqueSlug;
  chantier?: string;
  date: string;
  excerpt: string;
  tags: string[];
  placeholder?: boolean;
  coverImage?: { src: string; alt: string } | null;
  auteur: string;
}

export interface Experience extends ContentBase {
  format: "experience" | "dossier" | "guide";
  chapo?: string;
  questionPrincipale?: string;
  reponseCourte?: ShortAnswer;
  contexte: ContentBlock[];
  ceQueJaiFait?: ContentBlock[];
  ceQuiSestPasse?: ContentBlock[];
  ceQuiAMarche?: ContentBlock[];
  ceQuiNaPasMarche?: ContentBlock[];
  preuves?: Preuve[];
  ceQueJaiVerifie?: ContentBlock[];
  ceQueJenConclus: ContentBlock[];
  ceQueJeReferaisDifferemment?: ContentBlock[];
  sources?: Source[];
  derniereMiseAJour: string;
  contenusConnexes?: string[];
  archive?: boolean;
}

export interface Note extends ContentBase {
  format: "note";
  location?: string;
  corps: ContentBlock[];
}

export type AnyContent = Experience | Note;
