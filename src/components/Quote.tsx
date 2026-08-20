export function Quote({ text, cite }: { text: string; cite?: string }) {
  return (
    <figure className="my-10 border-l-2 border-accent pl-6 sm:my-14 sm:pl-8">
      <blockquote className="font-display text-2xl italic leading-snug text-ink text-balance sm:text-3xl">
        {text}
      </blockquote>
      {cite && <figcaption className="label mt-3 text-xs text-ink-faint">{cite}</figcaption>}
    </figure>
  );
}
