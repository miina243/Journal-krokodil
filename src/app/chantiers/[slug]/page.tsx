import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { chantiers, getChantierBySlug, getContentByChantier, getRubriqueBySlug } from "@/content";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ChantierStatusBadge } from "@/components/Tag";
import { ChantierTimeline } from "@/components/ChantierTimeline";
import { ProgressGauge } from "@/components/ProgressGauge";
import { formatDate } from "@/lib/format-date";

export function generateStaticParams() {
  return chantiers.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const chantier = getChantierBySlug(slug);
  if (!chantier) return {};
  return { title: chantier.titre, description: chantier.description };
}

export default async function ChantierPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const chantier = getChantierBySlug(slug);
  if (!chantier) notFound();

  const items = getContentByChantier(slug);

  return (
    <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-24">
      <Breadcrumb items={[{ label: "Les Chantiers", href: "/chantiers" }, { label: chantier.titre }]} />

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <h1 className="font-display text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.02] text-balance">
          {chantier.titre}
        </h1>
        <ChantierStatusBadge statut={chantier.statut} />
      </div>

      <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">{chantier.resume}</p>

      <div className="label mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-ink-faint">
        <span>Démarré le {formatDate(chantier.dateDebut)}</span>
        <span>Mis à jour le {formatDate(chantier.derniereMiseAJour)}</span>
        {chantier.rubriquesPrincipales.length > 0 && (
          <span>
            {chantier.rubriquesPrincipales
              .map((r) => getRubriqueBySlug(r)?.nom)
              .filter(Boolean)
              .join(" · ")}
          </span>
        )}
      </div>

      {(chantier.statut === "en-cours" || chantier.statut === "en-pause") && (
        <ProgressGauge value={chantier.progression} className="mt-8 max-w-sm" />
      )}

      {chantier.objectifs.length > 0 && (
        <div className="mt-10 border-t border-line pt-8">
          <h2 className="label text-xs text-ink-faint">Objectifs</h2>
          <ul className="mt-4 list-disc space-y-1.5 pl-5 text-[0.9375rem] text-ink-soft">
            {chantier.objectifs.map((o, i) => (
              <li key={i}>{o}</li>
            ))}
          </ul>
        </div>
      )}

      {chantier.statut === "termine" && chantier.resultats && (
        <div className="mt-10 border-t border-line pt-8">
          <h2 className="label text-xs text-ink-faint">Résultats</h2>
          <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-soft">{chantier.resultats}</p>
        </div>
      )}

      {chantier.statut === "abandonne" && chantier.raisonAbandon && (
        <div className="mt-10 border-t border-line pt-8">
          <h2 className="label text-xs text-ink-faint">Pourquoi ce chantier s&rsquo;est arrêté</h2>
          <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-soft">
            {chantier.raisonAbandon}
          </p>
          <p className="mt-3 text-xs text-ink-faint">
            Comprendre pourquoi quelque chose a été abandonné est une information à part entière,
            pas un aveu d&rsquo;échec.
          </p>
        </div>
      )}

      {(chantier.statut === "en-cours" || chantier.statut === "en-pause") &&
        chantier.prochaineEtape && (
          <div className="mt-10 border-t border-line pt-8">
            <h2 className="label text-xs text-ink-faint">Prochaine étape</h2>
            <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-soft">
              {chantier.prochaineEtape}
            </p>
          </div>
        )}

      <div className="mt-14 border-t border-line pt-10">
        <h2 className="label text-xs text-ink-faint">Chronologie</h2>
        <div className="mt-6">
          <ChantierTimeline items={items} />
        </div>
      </div>
    </div>
  );
}
