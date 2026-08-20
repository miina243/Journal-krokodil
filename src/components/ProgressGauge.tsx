import { cn } from "@/lib/cn";

export function ProgressGauge({
  value,
  className,
}: {
  value: number;
  className?: string;
}) {
  const clamped = Math.max(0, Math.min(100, value));

  return (
    <div
      className={cn("flex items-center gap-3", className)}
      role="progressbar"
      aria-valuenow={clamped}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Avancement du chantier"
    >
      <div className="h-[3px] flex-1 bg-line-strong">
        <div className="h-full bg-signature" style={{ width: `${clamped}%` }} />
      </div>
      <span className="label shrink-0 text-[0.625rem] tabular-nums text-ink-faint">
        {clamped}&nbsp;%
      </span>
    </div>
  );
}
