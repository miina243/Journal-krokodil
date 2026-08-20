import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  rubriques,
  getRubriqueBySlug,
  getExperiencesByRubrique,
  getNotesByRubrique,
  chantiers,
} from "@/content";
import { FeatureExperience, ExperienceCard } from "@/components/ExperienceCard";
import { NoteCard } from "@/components/NoteCard";
import { ChantierStatusBadge } from "@/components/Tag";
import { EmptyState } from "@/components/EmptyState";
import Link from "next/link";

export function generateStaticParams() {
  return rubriques.map((r) => ({ rubrique: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ rubrique: string }>;
}): Promise<Metadata> {
  const { rubrique: slug } = await params;
  const rubrique = getRubriqueBySlug(slug);
  if (!rubrique) return {};
  return { title: rubrique.nom, description: rubrique.descriptionLongue };
}

export default async function RubriquePage({
  params,
}: {
  params: Promise<{ rubrique: string }>;
}) {
  const { rubrique: slug } = await params;
  const rubrique = getRubriqueBySlug(slug);
  if (!rubrique) notFound();

  const allExperiences = getExperiencesByRubrique(slug);
  const [main, ...rest] = allExperiences;
  const notesRub = getNotesByRubrique(slug);
  const chantiersRub = chantiers.filter((c) => c.rubriquesPrincipales.includes(rubrique.slug));

  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <div className="flex items-start gap-6">
        <span className="font-display text-3xl text-signature">{rubrique.numero}</span>
        <div>
          <h1 className="font-display text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.02] text-balance">
            {rubrique.nom}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
            {rubrique.descriptionLongue}
          </p>
        </div>
      </div>

      {chantiersRub.length > 0 && (
        <div className="mt-10 flex flex-wrap gap-3">
          {chantiersRub.map((c) => (
            <Link
              key={c.slug}
              href={`/chantiers/${c.slug}`}
              className="flex items-center gap-2 border border-line px-3 py-1.5 text-sm underline-hover"
            >
              {c.titre}
              <ChantierStatusBadge statut={c.statut} />
            </Link>
          ))}
        </div>
      )}

      <div className="mt-16">
        {main ? (
          <>
            <FeatureExperience experience={main} />
            {rest.length > 0 && (
              <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {rest.map((e) => (
                  <ExperienceCard key={e.slug} experience={e} />
                ))}
              </div>
            )}
          </>
        ) : (
          <EmptyState
            title="Pas encore d'expérience ici"
            description="Cette rubrique vient d'ouvrir. Reviens bientôt."
          />
        )}
      </div>

      {notesRub.length > 0 && (
        <div className="mt-20 border-t border-line pt-12">
          <h2 className="label text-xs text-ink-faint">Notes de terrain</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-4">
            {notesRub.map((n) => (
              <NoteCard key={n.slug} note={n} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
