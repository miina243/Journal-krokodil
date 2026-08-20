export function TableOfContents({
  headings,
}: {
  headings: { text: string; id: string }[];
}) {
  if (headings.length < 3) return null;

  return (
    <nav aria-label="Sommaire" className="mb-12 border border-line px-6 py-5">
      <p className="label text-[0.6875rem] text-ink-faint">Sommaire</p>
      <ol className="mt-3 space-y-1.5">
        {headings.map((h, i) => (
          <li key={h.id} className="text-[0.9375rem] leading-snug">
            <a href={`#${h.id}`} className="underline-hover text-ink-soft hover:text-ink">
              <span className="label mr-2 text-xs text-ink-faint">
                {String(i + 1).padStart(2, "0")}
              </span>
              {h.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
