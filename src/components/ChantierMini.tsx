import Link from "next/link";
import type { Chantier } from "@/content/types";
import { ChantierStatusBadge } from "./Tag";
import { ProgressGauge } from "./ProgressGauge";

/**
 * Bande "En ce moment" — des sujets éditoriaux vivants, pas des cartes produit :
 * pas d'image, pas de cadre, juste un numéro, un titre affirmatif et une vraie phrase.
 */
export function ChantierMini({ chantier, index }: { chantier: Chantier; index: number }) {
  return (
    <Link
      href={`/chantiers/${chantier.slug}`}
      className="group flex flex-col gap-2.5 border-t border-line py-6 first:border-t-0 sm:border-l sm:border-t-0 sm:px-6 sm:py-0 sm:first:border-l-0 sm:first:pl-0"
    >
      <span className="font-display text-xl text-accent">{String(index).padStart(2, "0")}</span>
      <h3 className="font-display text-xl leading-[1.15] text-balance">
        <span className="underline-hover">{chantier.titre}</span>
      </h3>
      <p className="text-sm leading-relaxed text-ink-soft">{chantier.description}</p>
      <ChantierStatusBadge statut={chantier.statut} className="w-fit" />
      <ProgressGauge value={chantier.progression} className="mt-1" />
    </Link>
  );
}
