import type { Experience } from "@/content/types";
import { ExperienceCard } from "./ExperienceCard";

export function RelatedExperiences({ experiences, title = "À lire aussi" }: { experiences: Experience[]; title?: string }) {
  if (experiences.length === 0) return null;

  return (
    <section className="mx-auto max-w-6xl border-t border-line px-5 py-16 sm:px-8 sm:py-24">
      <h2 className="label mb-8 text-xs text-ink-faint">{title}</h2>
      <div className="grid gap-10 sm:grid-cols-3">
        {experiences.map((e) => (
          <ExperienceCard key={e.slug} experience={e} />
        ))}
      </div>
    </section>
  );
}
