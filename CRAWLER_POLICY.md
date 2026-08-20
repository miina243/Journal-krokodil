# Politique de crawl IA — Journal Krokodil

Vérifié par recherche web le 2026-08-19 (pas de liste mémorisée) — sources en bas de document.
Ce document distingue explicitly, pour chaque acteur, les bots d'**entraînement**, de
**recherche/citation**, et de **récupération déclenchée par un utilisateur**, parce que ce sont
trois usages différents qui appellent des décisions différentes. **La décision finale
d'autoriser ou non chaque bot appartient à Yasmine** — ce document sert de base informée, pas de
politique imposée.

## 1. Panorama par organisation (état 2026)

| Organisation | Bot | Usage | Respecte robots.txt |
|---|---|---|---|
| OpenAI | `GPTBot` | Entraînement des modèles | Oui |
| OpenAI | `OAI-SearchBot` | Indexation pour ChatGPT Search | Oui |
| OpenAI | `ChatGPT-User` | Récupération déclenchée par un utilisateur ChatGPT | Oui |
| Anthropic | `ClaudeBot` | Collecte pour entraînement | Oui |
| Anthropic | `Claude-SearchBot` | Indexation pour la recherche dans Claude | Oui |
| Anthropic | `Claude-User` | Récupération déclenchée par un utilisateur Claude | Oui (documenté explicitement par Anthropic) |
| Perplexity | `PerplexityBot` | Indexation pour citations Perplexity | Oui (déclaré) |
| Perplexity | `Perplexity-User` | Récupération déclenchée par un utilisateur | Cas signalés de non-respect quand une URL précise est fournie par l'utilisateur — point de vigilance, pas un motif de blocage à lui seul |
| Google | `Google-Extended` | Autorise/refuse l'usage du crawl Google existant pour l'entraînement Gemini (n'affecte pas l'indexation Search classique) | Oui |
| Apple | `Applebot-Extended` | Entraînement des modèles Apple Intelligence (n'affecte pas Siri/Spotlight classique) | Oui |
| Common Crawl | `CCBot` | Jeu de données open, réutilisé par de nombreux labs pour l'entraînement | Oui |
| ByteDance | `Bytespider` | Entraînement | Variable selon les rapports |

Chaque bot se contrôle indépendamment dans `robots.txt` — bloquer l'entraînement d'un acteur ne
bloque pas sa capacité de citation, et inversement.

## 2. Recommandation par défaut (à valider par Yasmine)

Principe : rester **visible dans les moteurs de réponse** (search/citation), rester **libre de
refuser l'entraînement** si souhaité — ce sont deux décisions distinctes.

```
# Recherche / citation — autorisés par défaut (visibilité, trafic de référence)
User-agent: OAI-SearchBot
Allow: /

User-agent: Claude-SearchBot
Allow: /

User-agent: PerplexityBot
Allow: /

# Récupération déclenchée par un utilisateur — autorisés par défaut
User-agent: ChatGPT-User
Allow: /

User-agent: Claude-User
Allow: /

User-agent: Perplexity-User
Allow: /

# Entraînement — à trancher par Yasmine (proposition par défaut : autorisé, cohérent avec
# l'esprit "média qui veut être cité et utile", à revoir si la position change)
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: CCBot
Allow: /
```

Si Yasmine préfère refuser l'entraînement tout en gardant la citation, remplacer les blocs
« Entraînement » par `Disallow: /` — c'est un changement de configuration, pas de code.

## 3. Implémentation technique

Le `robots.txt` de Krokodil (`src/app/robots.ts` dans l'implémentation) doit lire cette matrice
depuis un fichier de configuration unique (`src/lib/crawler-policy.ts`), pas une valeur codée en
dur — pour que changer la décision soit un changement de données, pas de code.

## 4. `llms.txt`

`llms.txt` (fichier Markdown à la racine, résumé + liens vers les pages clés) n'est **pas** un
mécanisme d'opt-out — c'est une aide à la navigation pour les agents IA au moment de la requête,
complémentaire à `robots.txt`, pas un substitut. Recommandation : le mettre en place une fois le
contenu réel suffisant (au moins les 5 rubriques peuplées), pas dès le lancement avec un
inventaire vide.

## 5. À revoir

Cette matrice doit être revérifiée périodiquement (nouveaux bots, changements de politique) —
elle n'est pas figée. Ne jamais réutiliser cette liste telle quelle dans un an sans revérifier.

## Sources

- [Tracking OpenAI – ChatGPT Bots – A Fresh Guide for Webmasters, Site Owners, and SEO's](https://www.searchengineworld.com/tracking-openai-chatgpt-bots-a-fresh-guide-for-webmasters-site-owners-and-seos)
- [AI Bot User Agents List 2026 — Complete Reference](https://www.openshadow.io/guides/ai-bot-user-agents-2026)
- [Anthropic's Claude Bots Make Robots.txt Decisions More Granular](https://www.searchenginejournal.com/anthropics-claude-bots-make-robots-txt-decisions-more-granular/568253/)
- [Anthropic clarifies what its three web crawlers do - and how to block them](https://ppc.land/anthropic-clarifies-what-its-three-web-crawlers-do-and-how-to-block-them/)
- [AI Crawler Access Control: The 2026 Decision Matrix](https://www.digitalapplied.com/blog/ai-crawler-access-control-2026-robots-llms-txt-decision-matrix)
- [Is ChatGPT, Claude & Perplexity reading your site?](https://aibotaccess.com/)
