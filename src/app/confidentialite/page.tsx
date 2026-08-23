import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Confidentialité",
  robots: { index: false },
};

export default function ConfidentialitePage() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-16 sm:px-8 sm:py-24">
      <h1 className="font-display text-4xl leading-tight">Confidentialité</h1>

      <div className="article-prose mt-10">
        <p className="mb-6 text-ink-soft">
          Journal Krokodil respecte ta vie privée. Ce site ne charge aucun outil de suivi
          publicitaire, et ne revend aucune donnée.
        </p>

        <h2 className="mb-3 mt-8 font-display text-xl">Ce qui est collecté aujourd&rsquo;hui</h2>
        <p className="mb-4 text-ink-soft">
          Rien, par défaut. Aucun tracker analytics n&rsquo;est actif tant qu&rsquo;il
          n&rsquo;a pas été explicitement configuré et annoncé ici. Le formulaire newsletter ne
          transmet ton email à aucun service tant qu&rsquo;aucun fournisseur d&rsquo;envoi
          n&rsquo;a été branché (voir le composant correspondant).
        </p>

        <h2 className="mb-3 mt-8 font-display text-xl">Si un outil de mesure d&rsquo;audience est activé un jour</h2>
        <p className="mb-4 text-ink-soft">
          Il sera choisi pour son respect du RGPD (ex. Plausible ou Matomo, hébergement européen,
          pas de cookie de traçage individuel), annoncé sur cette page, et son activation sera
          documentée avant tout déploiement.
        </p>

        <p className="mt-8 border border-dashed border-line-strong bg-paper-dim px-4 py-3 text-sm text-ink-soft">
          Placeholder : les coordonnées du responsable de traitement et la procédure d&rsquo;exercice
          des droits RGPD (accès, rectification, suppression) restent à compléter avec les
          informations légales définitives.
        </p>
      </div>
    </div>
  );
}
