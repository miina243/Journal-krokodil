import Link from "next/link";
import { Logo } from "./Logo";
import { rubriques } from "@/content/rubriques";
import { siteConfig } from "@/lib/site-config";

const socialLinks = [
  { key: "instagram", label: "Instagram" },
  { key: "tiktok", label: "TikTok" },
  { key: "linkedin", label: "LinkedIn" },
] as const;

export function Footer() {
  const activeSocial = socialLinks.filter((s) => siteConfig.social[s.key]);

  return (
    <footer className="border-t border-line bg-paper-dim">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-soft">
              Les choses que je construis, celles que je casse et celles que je recommence.
            </p>
          </div>

          <div>
            <h2 className="label text-xs text-ink-faint">Explorer</h2>
            <ul className="mt-4 space-y-2.5">
              {rubriques.map((r) => (
                <li key={r.slug}>
                  <Link href={`/${r.slug}`} className="underline-hover text-[0.9375rem]">
                    {r.nom}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="label text-xs text-ink-faint">Le média</h2>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link href="/chantiers" className="underline-hover text-[0.9375rem]">
                  Les Chantiers
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="underline-hover text-[0.9375rem]">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/methode-editoriale" className="underline-hover text-[0.9375rem]">
                  Méthode éditoriale
                </Link>
              </li>
              <li>
                <Link href="/#newsletter" className="underline-hover text-[0.9375rem]">
                  Newsletter
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="label text-xs text-ink-faint">Confiance</h2>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link href="/politique-de-correction" className="underline-hover text-[0.9375rem]">
                  Politique de correction
                </Link>
              </li>
              <li>
                <Link href="/usage-de-lia" className="underline-hover text-[0.9375rem]">
                  Usage de l&rsquo;IA
                </Link>
              </li>
              <li>
                <Link href="/partenariats-et-affiliation" className="underline-hover text-[0.9375rem]">
                  Partenariats &amp; affiliation
                </Link>
              </li>
              {activeSocial.map((s) => (
                <li key={s.key}>
                  <a
                    href={siteConfig.social[s.key]}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="underline-hover text-[0.9375rem]"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
              <li>
                <Link href="/mentions-legales" className="underline-hover text-[0.9375rem]">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="/confidentialite" className="underline-hover text-[0.9375rem]">
                  Confidentialité
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-line pt-6 text-xs text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Journal Krokodil.</p>
          <p>Un chantier permanent, documenté.</p>
        </div>
      </div>
    </footer>
  );
}
