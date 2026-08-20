export function PullQuoteBreak({ text, cite }: { text: string; cite?: string }) {
  return (
    <section className="border-y border-line bg-paper-dim">
      <div className="mx-auto max-w-4xl px-5 py-14 text-center sm:px-8 sm:py-20">
        <span className="font-display text-4xl text-accent" aria-hidden="true">
          &laquo;
        </span>
        <p className="font-display text-[clamp(1.6rem,4.5vw,2.75rem)] italic leading-[1.2] text-ink text-balance">
          {text}
        </p>
        {cite && <p className="label mt-6 text-xs text-ink-faint">{cite}</p>}
      </div>
    </section>
  );
}
