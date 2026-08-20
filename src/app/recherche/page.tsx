import type { Metadata } from "next";
import { SearchClient } from "@/components/SearchClient";

export const metadata: Metadata = {
  title: "Recherche",
  description: "Chercher dans les expériences, notes, rubriques et tags de Journal Krokodil.",
};

export default function SearchPage() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-16 sm:px-8 sm:py-24">
      <p className="label text-xs text-ink-soft">Recherche</p>
      <h1 className="mt-4 font-display text-[clamp(2rem,5vw,3rem)] leading-[1.02] text-balance">
        Qu&rsquo;est-ce que tu cherches ?
      </h1>
      <div className="mt-10">
        <SearchClient />
      </div>
    </div>
  );
}
