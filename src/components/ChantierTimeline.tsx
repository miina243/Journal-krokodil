import Link from "next/link";
import type { AnyContent } from "@/content/types";
import { formatDate } from "@/lib/format-date";
import { PlaceholderTag } from "./Tag";

export function ChantierTimeline({ items }: { items: AnyContent[] }) {
  if (items.length === 0) {
    return (
      <p className="text-sm text-ink-faint">
        Aucune publication rattachée à ce chantier pour le moment.
      </p>
    );
  }

  return (
    <ol className="relative space-y-8 border-l border-line pl-8">
      {items.map((item) => {
        const href =
          item.format === "note" ? `/notes/${item.slug}` : `/${item.rubrique}/${item.slug}`;
        return (
          <li key={`${item.format}-${item.slug}`} className="relative">
            <span className="absolute -left-[calc(2rem+3px)] top-1.5 h-1.5 w-1.5 rounded-full bg-signature" />
            <time dateTime={item.date} className="label block text-xs text-ink-faint">
              {formatDate(item.date)}
            </time>
            <Link href={href} className="mt-1 flex flex-wrap items-baseline gap-2">
              <span className="font-display text-lg leading-snug underline-hover">
                {item.titre}
              </span>
              <span className="label text-[0.625rem] text-ink-faint">
                {item.format === "note" ? "Note" : "Expérience"}
              </span>
              {item.placeholder && <PlaceholderTag />}
            </Link>
          </li>
        );
      })}
    </ol>
  );
}
