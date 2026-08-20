/**
 * Politique de crawl IA — source unique de vérité, lue par src/app/robots.ts.
 * Détail et justification dans CRAWLER_POLICY.md. Modifier cette liste (donnée),
 * jamais le comportement de robots.ts (code), pour changer la politique.
 */
export type CrawlerRule = { userAgent: string; allow: boolean; usage: string };

export const crawlerPolicy: CrawlerRule[] = [
  // Recherche / citation — visibilité, trafic de référence
  { userAgent: "OAI-SearchBot", allow: true, usage: "Indexation ChatGPT Search" },
  { userAgent: "Claude-SearchBot", allow: true, usage: "Indexation recherche Claude" },
  { userAgent: "PerplexityBot", allow: true, usage: "Citations Perplexity" },
  // Récupération déclenchée par un utilisateur
  { userAgent: "ChatGPT-User", allow: true, usage: "Navigation utilisateur ChatGPT" },
  { userAgent: "Claude-User", allow: true, usage: "Navigation utilisateur Claude" },
  { userAgent: "Perplexity-User", allow: true, usage: "Navigation utilisateur Perplexity" },
  // Entraînement — décision de Yasmine, par défaut autorisé (cf. CRAWLER_POLICY.md section 2)
  { userAgent: "GPTBot", allow: true, usage: "Entraînement OpenAI" },
  { userAgent: "ClaudeBot", allow: true, usage: "Entraînement Anthropic" },
  { userAgent: "Google-Extended", allow: true, usage: "Entraînement Gemini" },
  { userAgent: "Applebot-Extended", allow: true, usage: "Entraînement Apple Intelligence" },
  { userAgent: "CCBot", allow: true, usage: "Common Crawl (réutilisé pour entraînement)" },
];
