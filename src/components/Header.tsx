"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "./Logo";
import { rubriques } from "@/content/rubriques";
import { cn } from "@/lib/cn";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);
  const exploreRef = useRef<HTMLDivElement>(null);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
    setExploreOpen(false);
  }

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!exploreOpen) return;

    function handlePointerDown(e: PointerEvent) {
      if (exploreRef.current && !exploreRef.current.contains(e.target as Node)) {
        setExploreOpen(false);
      }
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setExploreOpen(false);
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKey);
    };
  }, [exploreOpen]);

  const rubriqueActive = rubriques.some((r) => pathname.startsWith(`/${r.slug}`));

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navigation principale">
          <Link
            href="/"
            className={cn(
              "underline-hover text-[0.9375rem] text-ink-soft",
              pathname === "/" && "text-signature font-medium",
            )}
            aria-current={pathname === "/" ? "page" : undefined}
          >
            Accueil
          </Link>

          <div ref={exploreRef}>
            <button
              type="button"
              className={cn(
                "underline-hover flex items-center gap-1.5 text-[0.9375rem] text-ink-soft",
                (rubriqueActive || exploreOpen) && "text-signature font-medium",
              )}
              aria-expanded={exploreOpen}
              aria-haspopup="true"
              onClick={() => setExploreOpen((v) => !v)}
            >
              Explorer
              <span aria-hidden="true" className={cn("text-xs transition-transform", exploreOpen && "-rotate-180")}>
                ▾
              </span>
            </button>
          </div>

          <Link
            href="/chantiers"
            className={cn(
              "underline-hover text-[0.9375rem] text-ink-soft",
              pathname.startsWith("/chantiers") && "text-signature font-medium",
            )}
          >
            Les Chantiers
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/recherche"
            className="hidden text-sm text-ink-soft underline-hover md:inline-flex"
          >
            Recherche
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          >
            <span className="relative block h-3.5 w-5">
              <span
                className={cn(
                  "absolute left-0 top-0 h-[1.5px] w-5 bg-ink transition-transform",
                  open && "translate-y-[6.5px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 bottom-0 h-[1.5px] w-5 bg-ink transition-transform",
                  open && "-translate-y-[6.5px] -rotate-45",
                )}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Panneau "Explorer" — pleine largeur, intégré à la nav, aucune ombre flottante */}
      {exploreOpen && (
        <div className="hidden border-t border-line bg-paper md:block">
          <div className="mx-auto grid max-w-6xl grid-cols-5 gap-px bg-line px-5 sm:px-8">
            {rubriques.map((r) => (
              <Link
                key={r.slug}
                href={`/${r.slug}`}
                className="group flex flex-col gap-2 bg-paper px-5 py-7 hover:bg-paper-dim"
              >
                <span className="font-display text-lg text-signature">{r.numero}</span>
                <span className="font-display text-xl leading-none">
                  <span className="underline-hover">{r.nom}</span>
                </span>
                <span className="text-xs leading-relaxed text-ink-faint">{r.description}</span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {open && (
        <nav
          id="mobile-nav"
          className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-line bg-paper px-5 py-6 md:hidden"
          aria-label="Navigation mobile"
        >
          <ul className="flex flex-col gap-1">
            <li>
              <Link href="/" className="block py-2.5 font-display text-2xl text-ink">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/chantiers" className="block py-2.5 font-display text-2xl text-ink">
                Les Chantiers
              </Link>
            </li>
            <li>
              <Link href="/recherche" className="block py-2.5 font-display text-2xl text-ink">
                Recherche
              </Link>
            </li>
          </ul>
          <p className="label mt-6 text-xs text-ink-faint">Explorer</p>
          <ul className="mt-2 flex flex-col gap-1">
            {rubriques.map((r) => (
              <li key={r.slug}>
                <Link href={`/${r.slug}`} className="block py-2 font-display text-xl text-ink">
                  {r.nom}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
