import type { Preuve } from "@/content/types";
import { ContentBlocks } from "./ContentBlocks";

const TYPE_LABELS: Record<Preuve["type"], string> = {
  photo: "Photo",
  "capture-ecran": "Capture d'écran",
  budget: "Budget",
  tableau: "Tableau",
  mesure: "Mesure",
  ticket: "Ticket",
  "avant-apres": "Avant / après",
  chronologie: "Chronologie",
  document: "Document",
  resultat: "Résultat",
  erreur: "Erreur",
};

/**
 * Rendu générique pour les preuves d'expérience. Des composants spécialisés
 * (ProofPhoto, ProofBudgetTable, ProofBeforeAfter…) pourront affiner l'affichage
 * par type une fois la DA validée — voir EDITORIAL_ARCHITECTURE.md section 7.
 */
export function ProofList({ preuves }: { preuves?: Preuve[] }) {
  if (!preuves || preuves.length === 0) return null;

  return (
    <section className="my-10 sm:my-14">
      <h2 className="label mb-5 text-xs text-ink-faint">Preuves</h2>
      <div className="space-y-8">
        {preuves.map((p, i) => (
          <div key={i} className="border border-line px-6 py-5">
            <div className="label mb-3 flex items-center gap-2 text-[0.625rem] text-ink-faint">
              <span>{TYPE_LABELS[p.type]}</span>
              {p.date && <span>· {p.date}</span>}
            </div>
            {p.titre && <p className="mb-2 font-display text-lg">{p.titre}</p>}
            <ContentBlocks body={p.contenu} />
            {p.legende && <p className="mt-2 text-sm text-ink-faint">{p.legende}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
