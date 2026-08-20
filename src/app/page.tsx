import Link from "next/link";
import {
  getChantiersActifs,
  getExperienceBySlug,
  getNotes,
  rubriques,
} from "@/content";
import { ChantierMini } from "@/components/ChantierMini";
import { FeatureExperience } from "@/components/ExperienceCard";
import { PullQuoteBreak } from "@/components/PullQuoteBreak";
import { NoteCard } from "@/components/NoteCard";
import { AboutTeaser } from "@/components/AboutTeaser";
import { Newsletter } from "@/components/Newsletter";

export default function Home() {
  const chantiersActifs = getChantiersActifs().slice(0, 4);
  const main = getExperienceBySlug("ce-que-le-careme-ma-vraiment-appris")!;
  const allNotes = getNotes();

  return (
    <>
      {/* 01 — Hero */}
      <section className="mx-auto max-w-6xl px-5 pb-12 pt-16 sm:px-8 sm:pb-16 sm:pt-24">
        <h1 className="max-w-3xl font-display text-[clamp(2.5rem,6.5vw,4.75rem)] font-normal leading-[1.02] text-balance">
          J&rsquo;ose construire une vie qui me ressemble.
        </h1>
        <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl">
          Maison, travail, technologie, famille — et quelques idées probablement trop
          ambitieuses.
          <br />
          Je teste, je rate, je recommence et je documente tout.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
          <Link
            href="/chantiers"
            className="border border-signature bg-signature px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-transparent hover:text-signature"
          >
            Voir ce qui est en chantier
          </Link>
          <Link href="/experiences" className="underline-hover text-sm font-medium text-ink">
            Lire le journal
          </Link>
        </div>
      </section>

      {/* 02 — Déclaration éditoriale */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
          <p className="max-w-2xl font-display text-2xl leading-[1.35] text-balance sm:text-3xl">
            Rien n&rsquo;est vraiment terminé. Pas la maison. Pas le travail. Pas les idées. Et
            certainement pas moi.
          </p>
          <p className="mt-4 max-w-xl text-[1.0625rem] leading-relaxed text-ink-soft">
            Krokodil raconte les choses pendant qu&rsquo;elles se font — pas seulement une fois
            qu&rsquo;elles sont jolies.
          </p>
        </div>
      </section>

      {/* 03 — En ce moment */}
      {chantiersActifs.length > 0 && (
        <section className="border-t border-line bg-paper-dim">
          <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14">
            <div className="mb-6 flex items-baseline justify-between gap-4">
              <h2 className="label text-xs text-ink-faint">En ce moment</h2>
              <p className="text-xs text-ink-faint">Parce qu&rsquo;il y a toujours quelque chose en chantier.</p>
            </div>
            <div className="grid gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
              {chantiersActifs.map((c, i) => (
                <ChantierMini key={c.slug} chantier={c} index={i + 1} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 04 — À lire maintenant */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
          <h2 className="label mb-8 text-xs text-ink-faint">À lire maintenant</h2>
          <FeatureExperience experience={main} />
        </div>
      </section>

      {/* 05 — Rubriques */}
      <section className="border-t border-line bg-paper-dim">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
          <h2 className="label mb-8 text-xs text-ink-faint">Rubriques</h2>
          <div className="divide-y divide-line border-y border-line">
            {rubriques.map((r) => (
              <div key={r.slug} className="grid gap-3 py-8 sm:grid-cols-[6rem_1fr_auto] sm:items-center sm:gap-8">
                <span className="font-display text-2xl text-signature">{r.numero}</span>
                <div>
                  <h3 className="font-display text-2xl leading-tight sm:text-[1.75rem]">{r.nom}</h3>
                  <p className="mt-2 max-w-xl text-[0.9375rem] leading-relaxed text-ink-soft">
                    {r.description}
                  </p>
                </div>
                <Link
                  href={`/${r.slug}`}
                  className="underline-hover w-fit text-sm font-medium text-ink sm:text-right"
                >
                  {r.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06 — Notes de terrain */}
      {allNotes.length > 0 && (
        <section className="border-t border-line">
          <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
            <div className="mb-7 flex items-baseline justify-between gap-4">
              <div>
                <h2 className="label text-xs text-ink-faint">Notes de terrain</h2>
                <p className="mt-2 max-w-md text-sm text-ink-faint">
                  Tout ne mérite pas un dossier de 2 000 mots. Certaines choses méritent juste
                  d&rsquo;être notées.
                </p>
              </div>
              <Link href="/notes" className="underline-hover shrink-0 text-sm text-ink-soft">
                Toutes les notes
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-4">
              {allNotes.slice(0, 4).map((note) => (
                <NoteCard key={note.slug} note={note} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 07 — Phrase de rupture */}
      <PullQuoteBreak text="Je préfère une idée en chantier à une vie parfaitement rangée." />

      {/* 08 — Derrière Krokodil */}
      <AboutTeaser />

      {/* 09 — Newsletter */}
      <div className="mx-auto max-w-6xl border-t border-line px-5 py-14 sm:px-8 sm:py-20">
        <Newsletter />
      </div>
    </>
  );
}
