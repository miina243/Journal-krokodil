import { getRubriqueBySlug } from "@/content";
import type { RubriqueSlug } from "@/content/types";
import { cn } from "@/lib/cn";

/**
 * Remplace une vraie photo tant qu'elle n'existe pas — jamais une image de banque
 * générique. Traitement graphique assumé : numéro de rubrique + hachures.
 */
export function CoverPlaceholder({
  rubrique,
  className,
}: {
  rubrique: RubriqueSlug;
  className?: string;
}) {
  const r = getRubriqueBySlug(rubrique);

  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden bg-paper-dim",
        className,
      )}
      aria-hidden="true"
    >
      <svg className="absolute inset-0 h-full w-full opacity-[0.12]" preserveAspectRatio="none">
        <defs>
          <pattern id={`hatch-${rubrique}`} width="14" height="14" patternTransform="rotate(35)" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="14" stroke="var(--color-signature)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#hatch-${rubrique})`} />
      </svg>
      <span className="label relative text-sm text-signature">
        {r?.numero} — {r?.nom}
      </span>
    </div>
  );
}
