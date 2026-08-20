import type { Metadata } from "next";
import Link from "next/link";
import { getNotes, getRubriqueBySlug } from "@/content";
import { PlaceholderTag } from "@/components/Tag";
import { formatDate } from "@/lib/format-date";

export const metadata: Metadata = {
  title: "Notes de terrain",
  description: "Idées, photos, observations et trouvailles — le format court de Journal Krokodil.",
};

export default function NotesPage() {
  const notes = getNotes();

  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
      <p className="label text-xs text-ink-soft">Notes de terrain</p>
      <h1 className="mt-4 font-display text-[clamp(2rem,5vw,3.25rem)] leading-[1.02] text-balance">
        Une idée. Une photo. Un instant.
      </h1>
      <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-soft">
        Pas besoin de longue démonstration pour documenter quelque chose. Les notes de terrain
        sont le format court : plus rapide qu&rsquo;une Expérience, aussi réel.
      </p>

      <ul className="mt-16 divide-y divide-line border-t border-line">
        {notes.map((note) => {
          const rubrique = getRubriqueBySlug(note.rubrique);
          return (
            <li key={note.slug}>
              <Link
                href={`/notes/${note.slug}`}
                className="group flex flex-col gap-1 py-6 sm:flex-row sm:items-baseline sm:gap-6"
              >
                <time
                  dateTime={note.date}
                  className="label text-xs text-ink-faint sm:w-24 sm:shrink-0"
                >
                  {formatDate(note.date)}
                </time>
                <div className="flex flex-1 flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="font-display text-xl leading-snug underline-hover">
                    {note.titre}
                  </span>
                  <span className="label text-xs text-ink-soft">{rubrique?.nom}</span>
                  {note.placeholder && <PlaceholderTag />}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
