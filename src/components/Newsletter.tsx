"use client";

import { useState, type FormEvent } from "react";

export function Newsletter({ className }: { className?: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage(null);

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      setStatus("error");
      setMessage(data.message ?? "Une erreur est survenue.");
    } catch {
      setStatus("error");
      setMessage("Impossible de contacter le serveur pour le moment.");
    }
  }

  return (
    <section id="newsletter" className={className}>
      <div className="grid gap-6 border-t border-line pt-10 md:grid-cols-[1fr_1.1fr] md:gap-16 md:pt-14">
        <div>
          <h2 className="font-display text-3xl leading-tight text-balance sm:text-4xl">
            La Lettre du Chantier
          </h2>
          <p className="mt-4 max-w-sm text-[0.9375rem] leading-relaxed text-ink-soft">
            De temps en temps, je t&rsquo;écris ce que je construis, ce qui a marché, ce qui
            s&rsquo;est cassé et ce que j&rsquo;ai appris entre les deux.
          </p>
          <p className="mt-2 max-w-sm text-[0.8125rem] leading-relaxed text-ink-faint">
            Pas tous les matins. J&rsquo;ai déjà suffisamment de choses à faire.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row sm:items-start">
          <div className="flex-1">
            <label htmlFor="newsletter-email" className="sr-only">
              Adresse email
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="toi@exemple.com"
              className="w-full border-b border-ink bg-transparent py-2.5 text-[0.9375rem] text-ink placeholder:text-ink-faint focus:outline-none"
            />
          </div>
          <button
            type="submit"
            disabled={status === "loading"}
            className="shrink-0 border border-signature bg-signature px-6 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-transparent hover:text-signature disabled:opacity-50"
          >
            Recevoir la lettre
          </button>
        </form>
      </div>
      {message && (
        <p role="status" className="mt-4 text-sm text-ink-soft">
          {message}
        </p>
      )}
    </section>
  );
}
