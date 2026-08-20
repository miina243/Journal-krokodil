"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { getAllContent, getRubriqueBySlug } from "@/content";
import { PlaceholderTag } from "./Tag";
import { EmptyState } from "./EmptyState";
import { formatDate } from "@/lib/format-date";

export function SearchClient() {
  const [query, setQuery] = useState("");
  const content = useMemo(() => getAllContent(), []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return content.filter((item) => {
      const rubrique = getRubriqueBySlug(item.rubrique);
      const haystack = [item.titre, item.excerpt, rubrique?.nom ?? "", ...item.tags]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [query, content]);

  return (
    <div>
      <label htmlFor="search-input" className="sr-only">
        Rechercher
      </label>
      <input
        id="search-input"
        type="search"
        autoFocus
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Un titre, un mot, une rubrique…"
        className="w-full border-b-2 border-ink bg-transparent py-4 font-display text-2xl text-ink placeholder:text-ink-faint focus:outline-none sm:text-3xl"
      />

      <div className="mt-10">
        {query.trim() === "" ? (
          <p className="text-sm text-ink-faint">
            Commence à taper pour chercher dans les titres, les résumés, les rubriques et les
            tags.
          </p>
        ) : results.length === 0 ? (
          <EmptyState
            title={`Rien pour « ${query} »`}
            description="Essaie un autre mot, ou explore les rubriques directement."
          />
        ) : (
          <ul className="divide-y divide-line border-t border-line">
            {results.map((item) => {
              const rubrique = getRubriqueBySlug(item.rubrique);
              const href =
                item.format === "note" ? `/notes/${item.slug}` : `/${item.rubrique}/${item.slug}`;
              return (
                <li key={`${item.format}-${item.slug}`}>
                  <Link
                    href={href}
                    className="group flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:gap-6"
                  >
                    <time className="label text-xs text-ink-faint sm:w-24 sm:shrink-0">
                      {formatDate(item.date)}
                    </time>
                    <div className="flex flex-1 flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span className="font-display text-lg leading-snug underline-hover">
                        {item.titre}
                      </span>
                      <span className="label text-[0.6875rem] text-signature">{rubrique?.nom}</span>
                      {item.placeholder && <PlaceholderTag />}
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
