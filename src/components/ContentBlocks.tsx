import type { ContentBlock } from "@/content/types";
import { slugify } from "@/lib/slugify";
import { Quote } from "./Quote";
import { Figure, ImageGallery } from "./Figure";

export function ContentBlocks({ body }: { body: ContentBlock[] }) {
  return (
    <div className="article-prose">
      {body.map((block, i) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p key={i} className="mb-6 text-[1.125rem] leading-[1.75] text-ink">
                {block.text}
              </p>
            );
          case "heading":
            return (
              <h2
                key={i}
                id={slugify(block.text)}
                className="mb-5 mt-12 scroll-mt-24 font-display text-2xl leading-tight text-ink sm:text-[1.75rem]"
              >
                {block.text}
              </h2>
            );
          case "quote":
            return <Quote key={i} text={block.text} cite={block.cite} />;
          case "list":
            return block.style === "number" ? (
              <ol key={i} className="mb-6 list-decimal space-y-2 pl-6 text-[1.125rem] leading-[1.7] text-ink">
                {block.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ol>
            ) : (
              <ul key={i} className="mb-6 list-disc space-y-2 pl-6 text-[1.125rem] leading-[1.7] text-ink">
                {block.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            );
          case "image":
            return <Figure key={i} src={block.src} alt={block.alt} caption={block.caption} />;
          case "gallery":
            return <ImageGallery key={i} images={block.images} />;
          default:
            return null;
        }
      })}
    </div>
  );
}

export function extractHeadings(body: ContentBlock[]) {
  return body
    .filter((b): b is Extract<ContentBlock, { type: "heading" }> => b.type === "heading")
    .map((b) => ({ text: b.text, id: slugify(b.text) }));
}
