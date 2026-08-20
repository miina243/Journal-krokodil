export * from "./types";
export { rubriques, getRubriqueBySlug } from "./rubriques";
export { chantiers, getChantierBySlug, getChantiersActifs } from "./chantiers";
export {
  experiences,
  getExperiences,
  getExperienceBySlug,
  getExperiencesByRubrique,
  getExperiencesByChantier,
} from "./experiences";
export { notes, getNotes, getNoteBySlug, getNotesByRubrique } from "./notes";

import type { AnyContent } from "./types";
import { getExperiences } from "./experiences";
import { getNotes } from "./notes";

export function getAllContent(): AnyContent[] {
  return [...getExperiences(), ...getNotes()].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getContentByRubrique(rubrique: string): AnyContent[] {
  return getAllContent().filter((c) => c.rubrique === rubrique);
}

export function getContentByChantier(chantier: string): AnyContent[] {
  return getAllContent().filter((c) => c.chantier === chantier);
}
