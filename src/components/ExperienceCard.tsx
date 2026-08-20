import Link from "next/link";
import Image from "next/image";
import type { Experience } from "@/content/types";
import { getRubriqueBySlug } from "@/content";
import { formatDate } from "@/lib/format-date";
import { CoverPlaceholder } from "./CoverPlaceholder";
import { PlaceholderTag } from "./Tag";
import { cn } from "@/lib/cn";

export function FeatureExperience({
  experience,
  className,
}: {
  experience: Experience;
  className?: string;
}) {
  const rubrique = getRubriqueBySlug(experience.rubrique);
  const href = `/${experience.rubrique}/${experience.slug}`;

  return (
    <article className={cn("group grid gap-6 md:grid-cols-2 md:gap-10", className)}>
      <Link href={href} className="relative block aspect-[4/3] overflow-hidden">
        {experience.coverImage ? (
          <Image
            src={experience.coverImage.src}
            alt={experience.coverImage.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        ) : (
          <CoverPlaceholder rubrique={experience.rubrique} className="h-full w-full" />
        )}
      </Link>

      <div className="flex flex-col justify-center">
        <div className="mb-3 flex flex-wrap items-center gap-3">
          <Link href={`/${experience.rubrique}`} className="label text-xs text-signature underline-hover">
            {rubrique?.numero} — {rubrique?.nom}
          </Link>
          <span className="label text-xs text-ink-faint">
            {experience.format === "dossier" ? "Dossier" : experience.format === "guide" ? "Guide" : "Expérience"}
          </span>
          {experience.placeholder && <PlaceholderTag />}
        </div>

        <h3 className="font-display text-3xl leading-[1.05] text-balance sm:text-4xl">
          <Link href={href} className="underline-hover">
            {experience.titre}
          </Link>
        </h3>

        <p className="mt-4 max-w-md text-[1.0625rem] leading-relaxed text-ink-soft">
          {experience.chapo ?? experience.excerpt}
        </p>

        <div className="mt-5 flex items-center gap-4">
          <span className="label text-xs text-ink-faint">{formatDate(experience.date)}</span>
          <Link href={href} className="underline-hover text-sm font-medium text-ink">
            Lire l&rsquo;expérience →
          </Link>
        </div>
      </div>
    </article>
  );
}

export function ExperienceCard({
  experience,
  className,
}: {
  experience: Experience;
  className?: string;
}) {
  const rubrique = getRubriqueBySlug(experience.rubrique);
  const href = `/${experience.rubrique}/${experience.slug}`;

  return (
    <article className={cn("group flex flex-col", className)}>
      <Link href={href} className="relative block aspect-[16/10] overflow-hidden">
        {experience.coverImage ? (
          <Image
            src={experience.coverImage.src}
            alt={experience.coverImage.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            sizes="(min-width: 768px) 33vw, 100vw"
          />
        ) : (
          <CoverPlaceholder rubrique={experience.rubrique} className="h-full w-full" />
        )}
      </Link>

      <div className="mt-4 flex flex-1 flex-col">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <Link href={`/${experience.rubrique}`} className="label text-[0.6875rem] text-signature underline-hover">
            {rubrique?.numero} — {rubrique?.nom}
          </Link>
          {experience.placeholder && <PlaceholderTag />}
        </div>

        <h3 className="font-display text-xl leading-tight text-balance">
          <Link href={href} className="underline-hover">
            {experience.titre}
          </Link>
        </h3>

        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink-soft">
          {experience.excerpt}
        </p>

        <div className="label mt-auto pt-3 text-[0.6875rem] text-ink-faint">
          <time dateTime={experience.date}>{formatDate(experience.date)}</time>
        </div>
      </div>
    </article>
  );
}
