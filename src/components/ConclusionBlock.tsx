import type { ContentBlock } from "@/content/types";
import { ContentBlocks } from "./ContentBlocks";

/**
 * Niveau de vérité 3 — "ce que j'en conclus". C'est la destination de la lecture,
 * mise en avant sans devenir un encart criard (voir CONTENT_MODEL.md section 7).
 */
export function ConclusionBlock({ body }: { body: ContentBlock[] }) {
  if (!body || body.length === 0) return null;
  return (
    <div className="my-10 border-t-2 border-signature pt-8 sm:my-14">
      <p className="label mb-3 text-[0.6875rem] text-ink-faint">Ce que j&rsquo;en conclus</p>
      <ContentBlocks body={body} />
    </div>
  );
}
