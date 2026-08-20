import Link from "next/link";
import type { Note } from "@/content/types";
import { getRubriqueBySlug } from "@/content";
import { formatDateShort } from "@/lib/format-date";
import { cn } from "@/lib/cn";

export function NoteCard({ note, className }: { note: Note; className?: string }) {
  const rubrique = getRubriqueBySlug(note.rubrique);

  return (
    <Link
      href={`/notes/${note.slug}`}
      className={cn(
        "group block border-t border-line py-5 first:border-t-0 md:border-t-0 md:border-l md:py-0 md:pl-6",
        className,
      )}
    >
      <div className="label flex items-center gap-2 text-[0.6875rem] text-ink-faint">
        <time dateTime={note.date}>{formatDateShort(note.date)}</time>
        <span aria-hidden="true">·</span>
        <span className="text-signature">{rubrique?.nom}</span>
      </div>
      <p className="mt-2 font-display text-lg leading-snug text-balance underline-hover">
        {note.titre}
      </p>
      {note.location && (
        <p className="label mt-1 text-xs text-ink-faint">{note.location}</p>
      )}
    </Link>
  );
}
