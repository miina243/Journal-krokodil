import { cn } from "@/lib/cn";

export function PlaceholderTag({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "label inline-flex items-center gap-1.5 rounded-[3px] border border-dashed border-ink-faint/60 px-2.5 py-1 text-[0.6875rem] text-ink-faint",
        className,
      )}
      title="Contenu de démonstration — le texte définitif reste à écrire."
    >
      En chantier
    </span>
  );
}

const STATUS_STYLES: Record<
  "en-cours" | "en-pause" | "termine" | "abandonne",
  { label: string; className: string }
> = {
  "en-cours": { label: "En cours", className: "bg-signature-soft text-signature" },
  "en-pause": { label: "En pause", className: "bg-gold-soft text-ink-soft" },
  termine: { label: "Terminé", className: "bg-accent-soft text-ink" },
  abandonne: { label: "Abandonné", className: "bg-paper-dim text-ink-faint" },
};

export function ChantierStatusBadge({
  statut,
  className,
}: {
  statut: "en-cours" | "en-pause" | "termine" | "abandonne";
  className?: string;
}) {
  const s = STATUS_STYLES[statut];
  return (
    <span className={cn("label inline-flex items-center rounded-[3px] px-2.5 py-1 text-[0.6875rem]", s.className, className)}>
      {s.label}
    </span>
  );
}
