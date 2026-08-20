import Link from "next/link";
import { MediaPlaceholder } from "./MediaPlaceholder";

export function AboutTeaser() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
          <MediaPlaceholder label="Portrait — photo à venir" className="aspect-[4/5] w-full" />

          <div className="flex flex-col justify-center">
            <h2 className="label text-xs text-ink-faint">Derrière Krokodil</h2>
            <p className="mt-5 max-w-xl font-display text-2xl leading-[1.35] text-balance sm:text-[1.75rem]">
              Moi, c&rsquo;est Yasmine. J&rsquo;ai longtemps essayé de faire entrer mes intérêts
              dans une seule case. Ça n&rsquo;a pas très bien marché. Krokodil est né de
              l&rsquo;idée inverse&nbsp;: peut-être que maison, technologie, travail, famille,
              voyages et projets n&rsquo;ont pas besoin de vivre séparément.
            </p>
            <p className="mt-5 max-w-lg text-[1.0625rem] leading-relaxed text-ink-soft">
              Je documente ce que j&rsquo;apprends en essayant de construire tout ça — sans
              prétendre connaître la fin de l&rsquo;histoire.
            </p>
            <Link href="/a-propos" className="underline-hover mt-6 w-fit text-sm font-medium text-ink">
              Un peu plus sur moi →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
