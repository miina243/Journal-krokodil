import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Usage de l'IA",
  description: "Comment l'intelligence artificielle est utilisée sur Journal Krokodil.",
};

export default function AIUsagePage() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-16 sm:px-8 sm:py-24">
      <p className="label text-xs text-ink-soft">Usage de l&rsquo;IA</p>
      <h1 className="mt-4 font-display text-4xl leading-tight text-balance">
        Où l&rsquo;IA intervient ici, et où elle n&rsquo;intervient pas
      </h1>

      <div className="mt-10">
        <p className="mb-6 text-[1.0625rem] leading-relaxed text-ink">
          Par transparence, et parce que L&rsquo;Atelier (la rubrique technologie de ce site)
          traite justement de ces sujets : l&rsquo;intelligence artificielle est utilisée dans la
          construction de Journal Krokodil, à la fois comme outil de développement (ce site a été
          construit avec l&rsquo;assistance d&rsquo;un assistant de code IA) et, ponctuellement,
          comme outil d&rsquo;aide à l&rsquo;écriture ou à la recherche.
        </p>

        <h2 className="mb-3 mt-8 font-display text-xl">Ce que l&rsquo;IA ne fait jamais ici</h2>
        <ul className="mb-6 list-disc space-y-2 pl-5 text-[1.0625rem] leading-relaxed text-ink">
          <li>Elle n&rsquo;invente pas d&rsquo;expérience vécue à la place de Yasmine.</li>
          <li>Elle ne fabrique pas de sources, de citations ou de statistiques.</li>
          <li>Elle ne signe pas de contenu comme si elle en était l&rsquo;auteure.</li>
          <li>Elle ne remplace pas la relecture humaine avant publication.</li>
        </ul>

        <h2 className="mb-3 mt-8 font-display text-xl">Ce qu&rsquo;elle peut faire</h2>
        <p className="text-[1.0625rem] leading-relaxed text-ink">
          Aide à la recherche documentaire (avec vérification humaine des sources), assistance à
          la mise en forme, développement du site lui-même — dont le chantier{" "}
          <em>Construire Krokodil</em> documente d&rsquo;ailleurs les coulisses.
        </p>
      </div>
    </div>
  );
}
