import type { ContentBlock, Experience } from "@/content/types";

const WORDS_PER_MINUTE = 200;

function countWords(blocks: ContentBlock[] = []): number {
  return blocks.reduce((count, block) => {
    if (block.type === "paragraph" || block.type === "heading" || block.type === "quote") {
      return count + block.text.split(/\s+/).filter(Boolean).length;
    }
    if (block.type === "list") {
      return count + block.items.join(" ").split(/\s+/).filter(Boolean).length;
    }
    return count;
  }, 0);
}

export function getReadingTime(blocks: ContentBlock[]): number {
  return Math.max(1, Math.round(countWords(blocks) / WORDS_PER_MINUTE));
}

export function getExperienceReadingTime(exp: Experience): number {
  const words =
    countWords(exp.contexte) +
    countWords(exp.ceQueJaiFait) +
    countWords(exp.ceQuiSestPasse) +
    countWords(exp.ceQuiAMarche) +
    countWords(exp.ceQuiNaPasMarche) +
    countWords(exp.ceQueJaiVerifie) +
    countWords(exp.ceQueJenConclus) +
    countWords(exp.ceQueJeReferaisDifferemment);
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}
