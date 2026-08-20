import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Méthode éditoriale",
  description: "Comment une expérience devient un contenu sur Journal Krokodil.",
};

export default function MethodePage() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-16 sm:px-8 sm:py-24">
      <p className="label text-xs text-ink-soft">Méthode éditoriale</p>
      <h1 className="mt-4 font-display text-4xl leading-tight text-balance">
        Comment une expérience devient un contenu ici
      </h1>

      <div className="mt-10">
        <p className="mb-6 text-[1.0625rem] leading-relaxed text-ink">
          Journal Krokodil part toujours d&rsquo;une expérience réelle — vécue, testée,
          construite, ratée. Cette expérience passe ensuite par le même processus, à chaque
          fois :
        </p>

        <ol className="mb-8 space-y-4">
          {[
            ["Je vis", "Quelque chose se passe réellement — un chantier, une décision, un test."],
            ["Je m'interroge", "Une question se pose, parfois explicite, parfois implicite."],
            ["Je vérifie", "Ce qui peut être vérifié l'est, avec des sources visibles."],
            ["J'analyse", "Ce qui a marché, ce qui n'a pas marché, avec des preuves quand elles existent."],
            ["Je tranche ou j'apprends", "Une conclusion réelle, pas une pirouette — y compris quand la conclusion est « je ne sais pas encore »."],
          ].map(([step, desc]) => (
            <li key={step} className="border-l-2 border-line-strong pl-5">
              <p className="font-display text-lg">{step}</p>
              <p className="mt-1 text-sm text-ink-soft">{desc}</p>
            </li>
          ))}
        </ol>

        <h2 className="mb-3 mt-10 font-display text-xl">Trois niveaux de vérité</h2>
        <p className="mb-6 text-[1.0625rem] leading-relaxed text-ink">
          Chaque contenu distingue ce qui relève de l&rsquo;expérience personnelle, ce qui a été
          vérifié auprès de sources externes, et ce qui relève d&rsquo;une conclusion ou d&rsquo;une
          opinion. Cette distinction reste discrète dans la mise en page, mais elle est toujours
          présente.
        </p>

        <h2 className="mb-3 mt-10 font-display text-xl">Quatre formats</h2>
        <p className="mb-2 text-[1.0625rem] leading-relaxed text-ink">
          <strong>Note</strong> — une idée, une photo, une observation, sans structure imposée.
        </p>
        <p className="mb-2 text-[1.0625rem] leading-relaxed text-ink">
          <strong>Expérience</strong> — le format central, quelque chose de réellement testé ou
          vécu.
        </p>
        <p className="mb-2 text-[1.0625rem] leading-relaxed text-ink">
          <strong>Dossier</strong> — une Expérience approfondie par de la recherche et des
          sources.
        </p>
        <p className="mb-6 text-[1.0625rem] leading-relaxed text-ink">
          <strong>Guide</strong> — publié uniquement quand assez d&rsquo;expérience accumulée
          permet réellement de guider quelqu&rsquo;un d&rsquo;autre, jamais pour répondre à une
          requête de recherche à elle seule.
        </p>

        <h2 className="mb-3 mt-10 font-display text-xl">Sources</h2>
        <p className="text-[1.0625rem] leading-relaxed text-ink">
          Aucune source n&rsquo;est inventée. Si une affirmation nécessiterait une source qui
          n&rsquo;existe pas, elle est présentée comme une observation personnelle plutôt que
          comme un fait vérifié.
        </p>
      </div>
    </div>
  );
}
