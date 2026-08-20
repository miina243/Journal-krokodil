import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de correction",
  description: "Comment les erreurs sont corrigées sur Journal Krokodil.",
};

export default function CorrectionPolicyPage() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-16 sm:px-8 sm:py-24">
      <p className="label text-xs text-ink-soft">Politique de correction</p>
      <h1 className="mt-4 font-display text-4xl leading-tight text-balance">
        Ce site se trompe parfois. Voici ce qu&rsquo;on fait quand ça arrive.
      </h1>

      <div className="mt-10">
        <p className="mb-6 text-[1.0625rem] leading-relaxed text-ink">
          Un média qui documente des expériences réelles se trompe parfois — sur un chiffre, une
          date, une compréhension. Voici la règle suivie ici :
        </p>
        <ul className="mb-6 list-disc space-y-2 pl-5 text-[1.0625rem] leading-relaxed text-ink">
          <li>Une correction factuelle (chiffre, date, source) est appliquée directement dans le contenu.</li>
          <li>Le champ « dernière mise à jour », affiché sur chaque Expérience, est actualisé à chaque correction substantielle.</li>
          <li>Une conclusion ou une opinion qui change n&rsquo;est jamais effacée silencieusement : le changement de position devient lui-même un contenu, pas une réécriture invisible.</li>
          <li>Aucune source n&rsquo;est ajoutée après coup pour justifier une affirmation qui n&rsquo;en avait pas à l&rsquo;origine sans le signaler.</li>
        </ul>
        <p className="text-[1.0625rem] leading-relaxed text-ink">
          Une erreur repérée peut être signalée à{" "}
          <a href="mailto:yasminengandu@gmail.com" className="underline-hover">
            yasminengandu@gmail.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
