import Link from "next/link";
import Image from "next/image";
import type { Experience } from "@/content/types";
import { getRubriqueBySlug } from "@/content";
import { formatDate } from "@/lib/format-date";
import { getExperienceReadingTime } from "@/lib/reading-time";
import { CoverPlaceholder } from "./CoverPlaceholder";
import { PlaceholderTag } from "./Tag";

export function ExperienceHeader({ experience }: { experience: Experience }) {
  const rubrique = getRubriqueBySlug(experience.rubrique);

  return (
    <header className="mx-auto max-w-3xl px-5 pt-12 sm:px-8 sm:pt-20">
      {experience.archive && (
        <div className="label mb-6 border border-dashed border-line-strong px-4 py-2 text-[0.6875rem] text-ink-faint">
          Archive — texte fondateur publié le {formatDate(experience.date)}, conservé tel quel.
        </div>
      )}

      <div className="flex flex-wrap items-center gap-3">
        <Link
          href={`/${experience.rubrique}`}
          className="label text-xs text-signature underline-hover"
        >
          {rubrique?.numero} — {rubrique?.nom}
        </Link>
        {experience.placeholder && <PlaceholderTag />}
      </div>

      <h1 className="mt-5 font-display text-[clamp(2rem,5.5vw,3.5rem)] font-normal leading-[1.02] text-balance">
        {experience.titre}
      </h1>

      {experience.chapo && (
        <p className="mt-5 max-w-xl text-xl leading-relaxed text-ink-soft">{experience.chapo}</p>
      )}

      <div className="label mt-7 flex flex-wrap items-center gap-3 border-t border-line pt-6 text-xs text-ink-faint">
        <span className="text-ink">{experience.auteur}</span>
        <span aria-hidden="true">·</span>
        <time dateTime={experience.date}>{formatDate(experience.date)}</time>
        {experience.derniereMiseAJour !== experience.date && (
          <>
            <span aria-hidden="true">·</span>
            <span>mis à jour le {formatDate(experience.derniereMiseAJour)}</span>
          </>
        )}
        <span aria-hidden="true">·</span>
        <span>{getExperienceReadingTime(experience)} min de lecture</span>
      </div>

      {experience.coverImage ? (
        <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden">
          <Image
            src={experience.coverImage.src}
            alt={experience.coverImage.alt}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
      ) : (
        <CoverPlaceholder rubrique={experience.rubrique} className="mt-10 aspect-[16/9] w-full" />
      )}
    </header>
  );
}
