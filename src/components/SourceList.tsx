import type { Source } from "@/content/types";

export function SourceList({ sources }: { sources: Source[] }) {
  if (sources.length === 0) return null;

  return (
    <section className="mt-14 border-t border-line pt-8">
      <h2 className="label mb-4 text-xs text-ink-faint">Sources</h2>
      <ol className="space-y-3">
        {sources.map((s, i) => (
          <li key={i} className="text-sm leading-relaxed text-ink-soft">
            {s.url ? (
              <a href={s.url} target="_blank" rel="noreferrer noopener" className="underline-hover text-ink">
                {s.titre}
              </a>
            ) : (
              <span className="text-ink">{s.titre}</span>
            )}
            {s.organisme && <> — {s.organisme}</>}
            {s.auteur && <>, {s.auteur}</>}
            {s.date && <> ({s.date})</>}
            {s.dateConsultation && (
              <span className="text-ink-faint"> · consulté le {s.dateConsultation}</span>
            )}
            {s.note && <p className="mt-1 text-xs text-ink-faint">{s.note}</p>}
          </li>
        ))}
      </ol>
    </section>
  );
}
