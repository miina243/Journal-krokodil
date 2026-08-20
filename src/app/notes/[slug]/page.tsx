import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { notes, getNoteBySlug, getRubriqueBySlug } from "@/content";
import { ContentBlocks } from "@/components/ContentBlocks";
import { PlaceholderTag } from "@/components/Tag";
import { formatDate } from "@/lib/format-date";

export function generateStaticParams() {
  return notes.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const note = getNoteBySlug(slug);
  if (!note) return {};
  return { title: note.titre, description: note.excerpt };
}

export default async function NotePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const note = getNoteBySlug(slug);
  if (!note) notFound();

  const rubrique = getRubriqueBySlug(note.rubrique);

  return (
    <article className="mx-auto max-w-2xl px-5 py-16 sm:px-8 sm:py-24">
      <div className="border-l-2 border-accent pl-6">
        <div className="flex flex-wrap items-center gap-3">
          <Link href={`/${note.rubrique}`} className="label text-xs text-signature underline-hover">
            {rubrique?.numero} — {rubrique?.nom}
          </Link>
          {note.placeholder && <PlaceholderTag />}
        </div>

        <h1 className="mt-4 font-display text-3xl leading-[1.1] text-balance sm:text-4xl">
          {note.titre}
        </h1>

        <div className="label mt-4 flex flex-wrap items-center gap-3 text-xs text-ink-faint">
          <time dateTime={note.date}>{formatDate(note.date)}</time>
          {note.location && (
            <>
              <span aria-hidden="true">·</span>
              <span>{note.location}</span>
            </>
          )}
        </div>
      </div>

      <div className="mt-10">
        <ContentBlocks body={note.corps} />
      </div>

      <div className="mt-12 border-t border-line pt-6">
        <Link href="/notes" className="underline-hover text-sm text-ink-soft">
          ← Toutes les notes
        </Link>
      </div>
    </article>
  );
}
