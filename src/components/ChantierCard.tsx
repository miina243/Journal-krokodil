import Link from "next/link";
import type { Chantier } from "@/content/types";
import { getRubriqueBySlug } from "@/content";
import { ChantierStatusBadge } from "./Tag";
import { ProgressGauge } from "./ProgressGauge";

export function ChantierCard({ chantier, index }: { chantier: Chantier; index: number }) {
  const rubriques = chantier.rubriquesPrincipales
    .map((slug) => getRubriqueBySlug(slug))
    .filter(Boolean);

  return (
    <Link
      href={`/chantiers/${chantier.slug}`}
      className="group grid gap-6 border-t border-line py-10 first:border-t-0 sm:grid-cols-[3.5rem_1fr] sm:gap-8"
    >
      <span className="font-display text-3xl leading-none text-accent">
        {String(index).padStart(2, "0")}
      </span>

      <div className="max-w-2xl">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="font-display text-[1.75rem] leading-tight text-balance sm:text-3xl">
            <span className="underline-hover">{chantier.titre}</span>
          </h3>
          <ChantierStatusBadge statut={chantier.statut} />
        </div>

        <p className="mt-3 max-w-xl text-[0.9375rem] leading-relaxed text-ink-soft">
          {chantier.description}
        </p>

        {rubriques.length > 0 && (
          <div className="label mt-4 flex flex-wrap gap-x-3 gap-y-1 text-[0.625rem] text-signature">
            {rubriques.map((r) => (
              <span key={r!.slug}>{r!.nom}</span>
            ))}
          </div>
        )}

        <ProgressGauge value={chantier.progression} className="mt-6 max-w-xs" />
      </div>
    </Link>
  );
}
