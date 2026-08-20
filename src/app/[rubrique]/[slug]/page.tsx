import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  experiences,
  getExperienceBySlug,
  getExperiencesByRubrique,
  getExperiencesByChantier,
  getRubriqueBySlug,
  getChantierBySlug,
} from "@/content";
import type { ContentBlock } from "@/content/types";
import { ExperienceHeader } from "@/components/ExperienceHeader";
import { ShortAnswerBlock } from "@/components/ShortAnswerBlock";
import { ContentBlocks, extractHeadings } from "@/components/ContentBlocks";
import { TableOfContents } from "@/components/TableOfContents";
import { VerifiedBlock } from "@/components/VerifiedBlock";
import { ConclusionBlock } from "@/components/ConclusionBlock";
import { ProofList } from "@/components/ProofList";
import { SourceList } from "@/components/SourceList";
import { RelatedExperiences } from "@/components/RelatedExperiences";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return experiences.map((e) => ({ rubrique: e.rubrique, slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ rubrique: string; slug: string }>;
}): Promise<Metadata> {
  const { rubrique, slug } = await params;
  const experience = getExperienceBySlug(slug);
  if (!experience || experience.rubrique !== rubrique) return {};

  return {
    title: experience.titre,
    description: experience.excerpt,
    authors: [{ name: experience.auteur }],
    openGraph: {
      type: "article",
      title: experience.titre,
      description: experience.excerpt,
      publishedTime: experience.date,
      modifiedTime: experience.derniereMiseAJour,
      url: `${siteConfig.url}/${experience.rubrique}/${experience.slug}`,
    },
  };
}

function mainBody(exp: ReturnType<typeof getExperienceBySlug>): ContentBlock[] {
  if (!exp) return [];
  return [
    ...(exp.contexte ?? []),
    ...(exp.ceQueJaiFait ?? []),
    ...(exp.ceQuiSestPasse ?? []),
    ...(exp.ceQuiAMarche ?? []),
    ...(exp.ceQuiNaPasMarche ?? []),
  ];
}

export default async function ExperiencePage({
  params,
}: {
  params: Promise<{ rubrique: string; slug: string }>;
}) {
  const { rubrique: rubriqueSlug, slug } = await params;
  const experience = getExperienceBySlug(slug);
  if (!experience || experience.rubrique !== rubriqueSlug) notFound();

  const rubrique = getRubriqueBySlug(experience.rubrique);
  const chantier = experience.chantier ? getChantierBySlug(experience.chantier) : undefined;

  const body = mainBody(experience);
  const headings = [
    ...extractHeadings(body),
    ...extractHeadings(experience.ceQueJaiVerifie ?? []),
    ...extractHeadings(experience.ceQueJenConclus),
  ];

  let prev: typeof experience | undefined;
  let next: typeof experience | undefined;
  if (chantier) {
    const siblings = getExperiencesByChantier(chantier.slug);
    const idx = siblings.findIndex((e) => e.slug === slug);
    prev = siblings[idx + 1];
    next = siblings[idx - 1];
  }

  const rubriqueSiblings = getExperiencesByRubrique(experience.rubrique).filter(
    (e) => e.slug !== slug,
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: experience.titre,
    description: experience.excerpt,
    datePublished: experience.date,
    dateModified: experience.derniereMiseAJour,
    author: { "@type": "Person", name: experience.auteur },
    publisher: { "@type": "Organization", name: siteConfig.name },
    mainEntityOfPage: `${siteConfig.url}/${experience.rubrique}/${experience.slug}`,
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: siteConfig.url },
      {
        "@type": "ListItem",
        position: 2,
        name: rubrique?.nom,
        item: `${siteConfig.url}/${experience.rubrique}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: experience.titre,
        item: `${siteConfig.url}/${experience.rubrique}/${experience.slug}`,
      },
    ],
  };

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <ExperienceHeader experience={experience} />

      <div className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
        {experience.reponseCourte && <ShortAnswerBlock answer={experience.reponseCourte} />}
        {headings.length >= 3 && <TableOfContents headings={headings} />}

        <ContentBlocks body={body} />
        <ProofList preuves={experience.preuves} />
        <VerifiedBlock body={experience.ceQueJaiVerifie ?? []} />
        <ConclusionBlock body={experience.ceQueJenConclus} />
        {experience.ceQueJeReferaisDifferemment && experience.ceQueJeReferaisDifferemment.length > 0 && (
          <div className="mt-10">
            <p className="label mb-3 text-[0.6875rem] text-ink-faint">
              Ce que je referais différemment
            </p>
            <ContentBlocks body={experience.ceQueJeReferaisDifferemment} />
          </div>
        )}
        <SourceList sources={experience.sources ?? []} />

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-8">
          <Link href={`/${experience.rubrique}`} className="underline-hover text-sm text-ink-soft">
            ← {rubrique?.nom}
          </Link>
          <a
            href={`mailto:?subject=${encodeURIComponent(experience.titre)}&body=${encodeURIComponent(
              `${siteConfig.url}/${experience.rubrique}/${experience.slug}`,
            )}`}
            className="underline-hover text-sm text-ink-soft"
          >
            Partager par email
          </a>
        </div>
      </div>

      {chantier && (prev || next) && (
        <nav
          aria-label="Continuer ce chantier"
          className="mx-auto max-w-3xl border-t border-line px-5 py-10 sm:px-8"
        >
          <p className="label mb-4 text-xs text-ink-faint">
            Continuer le chantier « {chantier.titre} »
          </p>
          <div className="grid gap-px border border-line bg-line sm:grid-cols-2">
            {prev ? (
              <Link href={`/${prev.rubrique}/${prev.slug}`} className="bg-paper px-5 py-6">
                <span className="label text-xs text-ink-faint">← Précédent</span>
                <p className="mt-2 font-display text-lg leading-snug text-balance underline-hover">
                  {prev.titre}
                </p>
              </Link>
            ) : (
              <div className="bg-paper px-5 py-6" />
            )}
            {next ? (
              <Link href={`/${next.rubrique}/${next.slug}`} className="bg-paper px-5 py-6 text-right">
                <span className="label text-xs text-ink-faint">Suivant →</span>
                <p className="mt-2 font-display text-lg leading-snug text-balance underline-hover">
                  {next.titre}
                </p>
              </Link>
            ) : (
              <div className="bg-paper px-5 py-6" />
            )}
          </div>
        </nav>
      )}

      <RelatedExperiences
        experiences={rubriqueSiblings.slice(0, 3)}
        title={`Autres expériences — ${rubrique?.nom}`}
      />
    </article>
  );
}
