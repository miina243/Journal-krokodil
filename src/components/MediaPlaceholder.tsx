import { cn } from "@/lib/cn";

export function MediaPlaceholder({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden bg-paper-dim",
        className,
      )}
      role="img"
      aria-label={label}
    >
      <svg className="absolute inset-0 h-full w-full opacity-[0.12]" preserveAspectRatio="none">
        <defs>
          <pattern id="hatch-generic" width="14" height="14" patternTransform="rotate(35)" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="14" stroke="var(--color-signature)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hatch-generic)" />
      </svg>
      <span className="label relative px-6 text-center text-xs text-ink-faint">
        {label}
      </span>
    </div>
  );
}
