import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partenariats & affiliation",
  description: "La politique de Journal Krokodil en matière de partenariats et de liens affiliés.",
};

export default function PartnershipsPage() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-16 sm:px-8 sm:py-24">
      <p className="label text-xs text-ink-soft">Partenariats &amp; affiliation</p>
      <h1 className="mt-4 font-display text-4xl leading-tight text-balance">
        Aucun partenariat actif aujourd&rsquo;hui
      </h1>

      <div className="mt-10">
        <p className="mb-6 text-[1.0625rem] leading-relaxed text-ink">
          Journal Krokodil ne publie aujourd&rsquo;hui aucun contenu sponsorisé, aucun lien
          affilié et n&rsquo;a aucun partenariat commercial actif. Si cela change, la règle
          suivante s&rsquo;appliquera :
        </p>
        <ul className="mb-6 list-disc space-y-2 pl-5 text-[1.0625rem] leading-relaxed text-ink">
          <li>Tout contenu sponsorisé ou lien affilié est signalé clairement, dans le contenu lui-même, pas seulement en mention légale.</li>
          <li>Un partenariat ne change jamais la conclusion d&rsquo;une Expérience — ce qui a marché ou pas continue d&rsquo;être dit tel quel.</li>
          <li>Aucun produit ou service n&rsquo;est présenté comme testé s&rsquo;il ne l&rsquo;a pas réellement été.</li>
        </ul>
        <p className="text-[1.0625rem] leading-relaxed text-ink">
          C&rsquo;est exactement le type de mécanique observée chez certains médias lifestyle
          (contenu sponsorisé non distingué de l&rsquo;éditorial) que Journal Krokodil a choisi de
          ne pas reproduire.
        </p>
      </div>
    </div>
  );
}
