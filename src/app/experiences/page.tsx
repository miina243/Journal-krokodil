import type { Metadata } from "next";
import Link from "next/link";
import { getExperiences, getRubriqueBySlug } from "@/content";
import { PlaceholderTag } from "@/components/Tag";
import { formatDate } from "@/lib/format-date";

export const metadata: Metadata = {
  title: "Expériences",
  description: "Toutes les Expériences, Dossiers et Guides publiés, du plus récent au plus ancien.",
};

export default function ExperiencesPage() {
  const items = getExperiences();

  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
      <p className="label text-xs text-ink-soft">Toutes les expériences</p>
      <h1 className="mt-4 font-display text-[clamp(2rem,5vw,3.25rem)] leading-[1.02] text-balance">
        Tout, dans l&rsquo;ordre.
      </h1>
      <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-soft">
        Toutes rubriques confondues, du plus récent au plus ancien.
      </p>

      <ul className="mt-16 divide-y divide-line border-t border-line">
        {items.map((exp) => {
          const rubrique = getRubriqueBySlug(exp.rubrique);
          return (
            <li key={exp.slug}>
              <Link
                href={`/${exp.rubrique}/${exp.slug}`}
                className="group flex flex-col gap-1 py-6 sm:flex-row sm:items-baseline sm:gap-6"
              >
                <time
                  dateTime={exp.date}
                  className="label text-xs text-ink-faint sm:w-28 sm:shrink-0"
                >
                  {formatDate(exp.date)}
                </time>
                <div className="flex flex-1 flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="font-display text-xl leading-snug underline-hover">
                    {exp.titre}
                  </span>
                  <span className="label text-[0.6875rem] text-ink-soft">{rubrique?.nom}</span>
                  {exp.placeholder && <PlaceholderTag />}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
