import type { ShortAnswer } from "@/content/types";

export function ShortAnswerBlock({ answer }: { answer: ShortAnswer }) {
  return (
    <div className="mb-10 border border-signature-soft bg-signature-soft px-6 py-5 sm:mb-14">
      <p className="label mb-2 text-[0.6875rem] text-signature">Réponse courte</p>
      <p className="text-lg leading-relaxed text-ink">{answer.texte}</p>
    </div>
  );
}
