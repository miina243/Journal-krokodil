import type { Metadata } from "next";
import { chantiers } from "@/content";
import { ChantierCard } from "@/components/ChantierCard";

export const metadata: Metadata = {
  title: "Les Chantiers",
  description:
    "Les projets réellement suivis dans le temps — rénovation, reconversion, Aurora, modèle économique.",
};

export default function ChantiersPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <p className="label text-xs text-ink-soft">Les Chantiers</p>
      <h1 className="mt-4 max-w-2xl font-display text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.02] text-balance">
        Ce qu&rsquo;on suit dans le temps, pas juste ce qu&rsquo;on publie.
      </h1>
      <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-soft">
        Un chantier n&rsquo;est pas une rubrique. C&rsquo;est un processus réel — rénovation,
        reconversion, produit — suivi sur plusieurs semaines ou plusieurs mois, avec ses
        avancées, ses pauses, et parfois ses abandons.
      </p>

      <div className="mt-16">
        {chantiers.map((c, i) => (
          <ChantierCard key={c.slug} chantier={c} index={i + 1} />
        ))}
      </div>
    </div>
  );
}
