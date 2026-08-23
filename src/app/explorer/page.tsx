import type { Metadata } from "next";
import Link from "next/link";
import { rubriques, getContentByRubrique } from "@/content";

export const metadata: Metadata = {
  title: "Explorer",
  description:
    "Cinq rubriques : La Maison, Le Bureau, L'Atelier, Le Journal, Ailleurs.",
};

export default function ExplorerPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <p className="label text-xs text-ink-soft">Explorer</p>
      <h1 className="mt-4 max-w-2xl font-display text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.02] text-balance">
        Cinq rubriques. Un seul fil : construire, tester, comprendre.
      </h1>
      <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-soft">
        Chaque rubrique répond à la même question : de quoi parle-t-on ? Ce que l&rsquo;on
        suit dans le temps, les chantiers, traverse souvent plusieurs rubriques à la fois.
      </p>

      <div className="mt-16 divide-y divide-line border-y border-line">
        {rubriques.map((r) => {
          const count = getContentByRubrique(r.slug).length;
          return (
            <Link
              key={r.slug}
              href={`/${r.slug}`}
              className="group grid gap-2 py-10 sm:grid-cols-[5rem_1fr_auto] sm:items-center sm:gap-8"
            >
              <span className="font-display text-2xl text-signature">{r.numero}</span>
              <div>
                <h2 className="font-display text-3xl leading-tight sm:text-4xl">
                  <span className="underline-hover">{r.nom}</span>
                </h2>
                <p className="mt-2 max-w-lg text-[0.9375rem] leading-relaxed text-ink-soft">
                  {r.description}
                </p>
              </div>
              <span className="label mt-3 text-xs text-ink-faint sm:mt-0 sm:text-right">
                {count} {count > 1 ? "publications" : "publication"}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
