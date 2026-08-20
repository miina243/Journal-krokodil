import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  robots: { index: false },
};

export default function MentionsLegalesPage() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-16 sm:px-8 sm:py-24">
      <h1 className="font-display text-4xl leading-tight">Mentions légales</h1>

      <div className="article-prose mt-10">
        <p className="mb-4 border border-dashed border-line-strong bg-paper-dim px-4 py-3 text-sm text-ink-soft">
          Placeholder à compléter avant mise en ligne publique : ces informations sont
          obligatoires (loi n° 2004-575 du 21 juin 2004) et ne peuvent pas être inventées.
        </p>

        <h2 className="mb-3 mt-8 font-display text-xl">Éditeur du site</h2>
        <p className="mb-4 text-ink-soft">
          [Nom / raison sociale] — [adresse postale] — [contact : {" "}
          <a href="mailto:yasminengandu@gmail.com" className="underline-hover">
            yasminengandu@gmail.com
          </a>
          ]<br />
          [Numéro SIRET si activité commerciale]
        </p>

        <h2 className="mb-3 mt-8 font-display text-xl">Directrice de la publication</h2>
        <p className="mb-4 text-ink-soft">Yasmine Ngandu Dos Santos</p>

        <h2 className="mb-3 mt-8 font-display text-xl">Hébergement</h2>
        <p className="mb-4 text-ink-soft">
          [Nom de l&rsquo;hébergeur] — [adresse] — [contact de l&rsquo;hébergeur]
        </p>

        <h2 className="mb-3 mt-8 font-display text-xl">Propriété intellectuelle</h2>
        <p className="mb-4 text-ink-soft">
          L&rsquo;ensemble des textes, photographies et créations publiés sur Journal Krokodil
          sont la propriété de leur auteure, sauf mention contraire. Toute reproduction sans
          autorisation est interdite.
        </p>
      </div>
    </div>
  );
}
