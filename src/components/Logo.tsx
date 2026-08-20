import Link from "next/link";
import { cn } from "@/lib/cn";

/**
 * Placeholder typographique neutre. Le logo définitif (piste : un K retourné) est
 * conçu séparément — voir mission section 40. Ne pas styliser comme une identité figée.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "font-display text-[1.2rem] leading-none tracking-[-0.01em] text-ink no-underline",
        className,
      )}
      aria-label="Journal Krokodil — accueil"
    >
      Journal Krokodil
    </Link>
  );
}
