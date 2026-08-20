import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-start px-5 py-24 sm:px-8 sm:py-32">
      <p className="label text-xs text-ink-soft">404</p>
      <h1 className="mt-4 font-display text-[clamp(2rem,6vw,3.5rem)] leading-[1.02] text-balance">
        Ce chantier n&rsquo;existe pas (encore).
      </h1>
      <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-soft">
        La page que tu cherches a peut-être changé d&rsquo;adresse, ou n&rsquo;a jamais été
        construite.
      </p>
      <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm">
        <Link href="/" className="underline-hover text-ink">
          Retour à l&rsquo;accueil →
        </Link>
        <Link href="/chantiers" className="underline-hover text-ink">
          Voir les chantiers →
        </Link>
        <Link href="/recherche" className="underline-hover text-ink">
          Chercher →
        </Link>
      </div>
    </div>
  );
}
