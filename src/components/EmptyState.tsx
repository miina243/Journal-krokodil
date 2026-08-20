export function EmptyState({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="border border-dashed border-line-strong px-8 py-16 text-center">
      <p className="font-display text-xl text-ink">{title}</p>
      {description && <p className="mt-2 text-sm text-ink-soft">{description}</p>}
    </div>
  );
}
