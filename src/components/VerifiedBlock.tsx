import type { ContentBlock } from "@/content/types";
import { ContentBlocks } from "./ContentBlocks";

/**
 * Niveau de vérité 2 — "ce que j'ai vérifié". Traitement discret mais reconnaissable,
 * jamais un encart alarmant façon fact-check (voir CONTENT_MODEL.md section 7).
 */
export function VerifiedBlock({ body }: { body: ContentBlock[] }) {
  if (!body || body.length === 0) return null;
  return (
    <div className="my-10 border-l border-gold pl-6 sm:my-14">
      <p className="label mb-3 text-[0.6875rem] text-ink-faint">Ce que j&rsquo;ai vérifié</p>
      <ContentBlocks body={body} />
    </div>
  );
}
