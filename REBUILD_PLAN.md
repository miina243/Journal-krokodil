# Journal Crocodile — Plan de reconstruction

## 1. Diagnostic

**Site actuel** : `journalcrocodile.com`, hébergé sur **WordPress.com** (thème `assembler`, pas de wp-json REST exposé publiquement — accès obtenu via l'API publique `public-api.wordpress.com/rest/v1.1/sites/journalcrocodile.com/`).

Constat après audit du contenu réel (pas du design, conformément à la consigne) :

- **3 articles réels**, tous signés Yasmine :
  1. *Le Manifeste du Journal Crocodile* (23/01/2026, `hello-world`) — texte fondateur, entièrement bâti sur la métaphore burn-out → crocodile → rive → maison-refuge.
  2. *Le mythe de la collaboratrice infatigable* (09/02/2026) — récit de burn-out professionnel, catégorie « Chronique d'un Burn Out » (série annoncée de 7 articles, dont 6 non encore écrits).
  3. *Ce que le Carême m'a vraiment appris* (07/03/2026) — foi, catégorie « Ma rive ».
- **3 catégories** : `Chronique d'un Burn Out`, `Ma rive`, `Uncategorized`.
- **4 pages statiques** : Home, Le Chantier, Instants Crocos, Ma Rive.
- Aucun plugin custom, aucune donnée e-commerce, aucun schéma exploitable au-delà du contenu texte lui-même.

**Conclusion du diagnostic** : le site est très jeune (3 articles) et son identité éditoriale actuelle *est* précisément le récit que le brief demande de dépasser (burn-out → reconstruction → rive → refuge). Il n'y a pas d'architecture technique à conserver — WordPress.com headless n'apporte aucune valeur pour 3 articles et nous enfermerait dans le vocabulaire de l'ancienne marque. Décision : **reconstruction complète**, migration du contenu réel (texte intégral récupéré), pas de migration de code.

Les 3 articles réels sont conservés comme contenu réel (pas de placeholder), reclassés dans la nouvelle taxonomie sous **Journal** (le plus personnel), avec redirection 301 documentée depuis leurs anciennes URLs (voir `REDIRECTS.md`). Le manifeste original reste lisible en archive mais n'est plus le texte de la page d'accueil ni de la page À propos — il est remplacé par une nouvelle voix éditoriale plus large, conforme à la section 2 du brief.

## 2. Contrainte d'environnement

Node.js/npm n'étaient pas installés sur la machine. Installés en cours de session (`winget install OpenJS.NodeJS.LTS`, Node v24, npm v11). Le projet est donc buildable, typecheckable et testable en localhost dès maintenant.

## 3. Choix techniques

| Domaine | Choix | Pourquoi |
|---|---|---|
| Framework | Next.js 15, App Router, TypeScript strict | Demandé explicitement, permet SSG/ISR pour la performance et de bonnes fondations SEO |
| Styles | Tailwind CSS v4 (`@theme` tokens) | Tokens centralisés sans dépendance UI lourde ; le design reste 100 % propriétaire (aucun composant Tailwind UI/shadcn générique) |
| Contenu | Fichiers TypeScript/JSON locaux (`src/content/`), typés, séparés des composants | Pas de CMS réel branché aujourd'hui (WordPress.com ne justifie pas un mode headless pour 3 articles) ; la couche de données est écrite comme une interface stable (`getArticles()`, `getChantiers()`…) pour pouvoir être remplacée demain par un vrai CMS (headless WP, Sanity, fichiers Markdown) sans toucher aux composants |
| Rich text article | Modèle de blocs typés (`paragraph`, `heading`, `quote`, `image`, `list`, `figure`) plutôt que MDX | Contrôle total du rendu éditorial (citations, légendes, sommaire auto) sans pipeline MDX supplémentaire |
| Recherche | Index client-side généré au build (JSON léger), filtrage côté client | Volume de contenu faible, pas besoin d'un service de recherche externe pour l'instant |
| Newsletter | Composant UI + endpoint API route stub (`/api/newsletter`) qui refuse proprement tant qu'aucun fournisseur n'est branché | Respect strict de la consigne « ne jamais simuler une inscription réussie » |
| Analytics | Aucun tracker chargé par défaut ; point d'intégration unique et documenté | RGPD, pas de tracker tant que non configuré |
| Boutique `/objets` | Non construite, seulement le type de contenu et la route réservée dans la doc | Pas de catalogue réel aujourd'hui (section 41 du brief) |

## 4. Architecture de l'information

Chantiers (taxonomie éditoriale, 5 univers fixes) :

1. `maison` — Maison
2. `lab` — Lab
3. `travail-argent` — Travail & Argent
4. `journal` — Journal
5. `ailleurs-objets` — Ailleurs & Objets

Types de contenu : `Article` (long format) et `Note` (format court, « Notes de terrain »), chacun rattaché à un chantier.

## 5. Routes

```
/
/chantiers
/chantiers/[slug]
/articles/[slug]
/notes
/notes/[slug]
/a-propos
/recherche
/newsletter (confirmation d'intention, pas d'inscription simulée)
/mentions-legales
/confidentialite
/sitemap.xml, /robots.txt, /feed.xml
```
`/objets` et `/objets/[slug]` : types de contenu prêts, route non exposée dans la nav tant qu'aucun catalogue réel n'existe.

## 6. Stratégie de contenu

- 3 articles réels migrés intégralement (texte original, auteur réel).
- Contenu additionnel nécessaire pour peupler les 5 chantiers et donner au site une sensation de média vivant : marqué `placeholder: true` dans les données, jamais présenté comme un fait biographique vérifié. Toute donnée inventée sur Yasmine (dates précises, détails factuels) est évitée ; les placeholders restent volontairement génériques ou clairement structurels (ex. légendes de type « Photo à venir »).
- `CONTENT_ASSETS_NEEDED.md` documente les vraies photos à fournir, avec dimensions et usage.

## 7. Design

- Palette : papier chaud (`--color-paper`), encre presque noire (`--color-ink`), vert olive minéral signature (`--color-signature`), accent argile/terracotta (`--color-accent`) — voir tokens dans `globals.css`.
- Typo : serif expressive **Fraunces** (titres, très grands corps), grotesque **Archivo** (interface, lecture), mono **JetBrains Mono** (labels, numéros de chantier, métadonnées — usage ponctuel uniquement).
- Rythme : hero → bandeau chantiers actifs → composition éditoriale asymétrique (article vedette + secondaires + notes) → notes de terrain → newsletter. Aucune section en grille uniforme répétée.
- Logo : typographique, `JOURNAL CROCODILE` en Fraunces + tracking large ; favicon = monogramme géométrique `JC` (pas de mascotte).

## 8. Risques

- Contenu encore mince (3 articles réels) → le site doit rester honnête sur son caractère naissant sans jamais paraître vide (sections masquées plutôt que fausses, cf. section 41 du brief).
- Pas de CMS branché → la mise à jour de contenu nécessite aujourd'hui d'éditer des fichiers TS ; documenté comme limite connue et prochaine itération possible.
- Aucun accès aux vraies photos → placeholders visuels explicites (voir `CONTENT_ASSETS_NEEDED.md`), jamais de photos de banque d'images générique.

## 9. Ordre d'implémentation

Design tokens → layout/Header/Footer → homepage → Chantiers → Article/Note → À propos → Recherche → SEO/sitemap/RSS → responsive/a11y → légal/redirections → QA (build + typecheck + lint) → captures d'écran de vérification.
