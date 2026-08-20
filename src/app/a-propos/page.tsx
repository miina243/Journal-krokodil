import type { Metadata } from "next";
import Link from "next/link";
import { getChantiersActifs } from "@/content";
import { MediaPlaceholder } from "@/components/MediaPlaceholder";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Yasmine Ngandu Dos Santos, fondatrice de Journal Krokodil — dix ans de communication et de projets digitaux, aujourd'hui documentés en public.",
};

export default function AboutPage() {
  const chantiersActifs = getChantiersActifs();

  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
      <p className="label text-xs text-ink-soft">À propos</p>

      <h1 className="mt-4 font-display text-[clamp(2.25rem,6vw,4rem)] leading-[1.02] text-balance">
        Je m&rsquo;appelle Yasmine.
      </h1>

      <MediaPlaceholder label="Portrait — photo à venir" className="mt-10 aspect-[4/3] w-full" />

      <div className="mt-12">
        <p className="mb-6 text-[1.125rem] leading-[1.75] text-ink">
          Yasmine Ngandu Dos Santos, installée à Dole, en Bourgogne-Franche-Comté. Depuis près de
          dix ans, j&rsquo;interviens à l&rsquo;interface entre marketing, contenu, e-commerce,
          communautés et coordination de projets — chez Expat-Dakar (édito et communautés), chez
          Bayard (communication digitale et retail), chez API&amp;YOU (pilotage de dispositifs
          digitaux pour une trentaine de clients simultanément) et chez Sherwood (mise sur le
          marché e-commerce).
        </p>
        <p className="mb-6 text-[1.125rem] leading-[1.75] text-ink">
          Ce métier m&rsquo;a appris à structurer une réponse à partir d&rsquo;un besoin flou, à
          embarquer les bonnes personnes, et à transformer une idée en dispositif concret. Il m&rsquo;a
          aussi appris, à mes dépens, ce que coûte le fait de confondre sa valeur avec sa capacité
          à tout porter — c&rsquo;est raconté dans{" "}
          <Link href="/le-journal/le-mythe-de-la-collaboratrice-infatigable" className="underline-hover">
            Le mythe de la collaboratrice infatigable
          </Link>
          .
        </p>
        <p className="mb-6 text-[1.125rem] leading-[1.75] text-ink">
          Journal Krokodil est né de ce qui s&rsquo;est passé après : l&rsquo;idée que je
          n&rsquo;avais pas à choisir entre la personne qui pilote des projets digitaux et celle
          qui rénove une maison le samedi, code un prototype le dimanche soir, ou se pose des
          questions de foi un mercredi de Carême. La vie reste en chantier — la mienne y compris —
          et ce site documente ce chantier en cours, avec ses preuves et ses ratés.
        </p>
        <p className="mb-6 text-[1.125rem] leading-[1.75] text-ink">
          J&rsquo;ai des racines et des attaches en Afrique et au Portugal, qui nourrissent autant
          les objets que je rapporte que les questions que je me pose sur ce qu&rsquo;on
          transmet. Et depuis peu, j&rsquo;apprends à construire avec la technologie plutôt
          qu&rsquo;à seulement l&rsquo;utiliser — <strong>Aurora</strong>, un prototype
          d&rsquo;assistance IA personnelle, en est la preuve la plus concrète.
        </p>
      </div>

      <div className="mt-14 border-t border-line pt-10">
        <h2 className="label text-xs text-ink-faint">Méthode</h2>
        <p className="mt-4 max-w-xl text-[0.9375rem] leading-relaxed text-ink-soft">
          Chaque contenu suit le même principe : je vis quelque chose, je m&rsquo;interroge, je
          vérifie ce qui peut l&rsquo;être, j&rsquo;analyse, et je tranche ou j&rsquo;apprends.
          Le détail est expliqué sur la page{" "}
          <Link href="/methode-editoriale" className="underline-hover">
            méthode éditoriale
          </Link>
          .
        </p>
      </div>

      {chantiersActifs.length > 0 && (
        <div className="mt-14 border-t border-line pt-10">
          <h2 className="label text-xs text-ink-faint">Ce que je construis actuellement</h2>
          <ul className="mt-6 space-y-6">
            {chantiersActifs.map((c) => (
              <li key={c.slug} className="flex items-baseline gap-5">
                <span className="font-display text-sm text-ink-faint">→</span>
                <div>
                  <Link href={`/chantiers/${c.slug}`} className="font-display text-xl underline-hover">
                    {c.titre}
                  </Link>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">{c.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-16 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-10 text-sm">
        <Link href="/chantiers" className="underline-hover text-ink">
          Explorer les chantiers →
        </Link>
        <Link href="/experiences" className="underline-hover text-ink">
          Lire les expériences →
        </Link>
        <a href={`mailto:${siteConfig.author.email}`} className="underline-hover text-ink">
          Écrire à Yasmine →
        </a>
      </div>
    </div>
  );
}
