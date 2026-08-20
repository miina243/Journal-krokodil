# GEO Guidelines — Journal Krokodil

GEO (Generative Engine Optimization) n'est pas une technique séparée du SEO ou de l'éditorial.
Sur Krokodil, **le GEO est une conséquence de l'architecture éditoriale** (`CONTENT_MODEL.md`,
`EDITORIAL_ARCHITECTURE.md|), jamais une couche de hacks ajoutée après coup. Ce document ne
contient aucune technique de manipulation des moteurs — uniquement des règles de structure et de
rendu qui rendent un contenu authentiquement plus facile à comprendre, citer et attribuer,
pour un humain comme pour un système de recherche génératif.

## 1. Principe directeur

> Human-first, GEO-friendly par construction.

Un contenu qui répond bien au test humain (section 5 de ce document) répond presque toujours
bien au test GEO. L'inverse n'est pas vrai : optimiser pour la citation par un moteur sans se
soucier du lecteur produit exactement les « usines à SEO » que Krokodil refuse d'être.

## 2. Ce qui rend un contenu GEO-friendly ici

| Exigence | Comment le modèle de contenu la porte |
|---|---|
| **Original** | Expérience vécue en premier ; jamais de reformulation d'un contenu déjà existant ailleurs |
| **Identifiable** | Auteure nommée sur chaque page (`Person` schema), pas de contenu anonyme |
| **Attribuable** | `Source[]` visible en HTML sur chaque Dossier/Expérience qui cite de l'externe |
| **Lisible** | Un texte fluide, pas un empilement de mots-clés ; la méthode JE VIS→JE TRANCHE structure en coulisses, pas à l'écran |
| **Structuré** | Titres hiérarchisés, `reponseCourte` isolable, sections nommées de façon constante d'un contenu à l'autre |
| **Compréhensible hors contexte** | La `reponseCourte`, quand elle existe, doit pouvoir être citée seule et rester vraie et complète |
| **Techniquement accessible** | Rendu HTML côté serveur, pas de contenu qui n'existe qu'après hydratation JS (cf. section 34 de la mission initiale, toujours valable avec Next.js App Router / RSC) |
| **Actualisable** | Chaque Expérience/Dossier/Guide porte `datePublication` ET `derniereMiseAJour`, les deux affichées |

## 3. Structured data — règle stricte

Utiliser Schema.org **uniquement quand ça correspond au contenu réel** :

- `WebSite` — toujours (site entier)
- `Person` — toujours (Yasmine, page auteur)
- `Article` / `BlogPosting` — sur Expérience, Dossier, Guide (pas sur Note, trop courte pour
  justifier ce schéma — une Note reste un `CreativeWork` simple si besoin)
- `BreadcrumbList` — sur toute page profonde (rubrique, chantier, contenu)

**Interdits absolus, sans exception** : `Review`/`AggregateRating` (aucun système de notation
n'existe sur Krokodil), `FAQPage` (le format Q/R n'est pas un FAQ généré, ne pas le simuler),
`Product` (pas de boutique active — voir section 41 de la mission initiale sur `/objets`),
`HowTo` (réservé au jour où le format Guide sera assez mûr pour le justifier réellement, jamais
ajouté par anticipation).

## 4. Le test GEO (à appliquer à chaque contenu avant publication)

Une bonne page Krokodil permet de répondre sans ambiguïté à :

1. Qui parle ? → `Person` + byline visible
2. Qu'a-t-elle réellement vécu ? → `contexte` / `ceQueJaiFait`
3. Quelle question traite-t-elle ? → `questionPrincipale`
4. Quelle est la réponse principale ? → `reponseCourte`
5. Qu'est-ce qui relève de son expérience ? → blocs niveau 1 (« vécu »)
6. Qu'est-ce qui vient de sources externes ? → blocs niveau 2 (« vérifié »)
7. Quelles sont les sources ? → `Source[]` rendu en HTML
8. Quand cela a-t-il été publié ? → `datePublication`
9. Quand cela a-t-il été vérifié ou mis à jour ? → `derniereMiseAJour`
10. Existe-t-il des preuves originales ? → `Preuve[]`
11. Quelle conclusion tire-t-elle ? → `ceQueJenConclus`

Si une de ces onze réponses est structurellement absente d'un contenu qui devrait la porter
(ex. un Dossier sans source), le contenu n'est pas prêt à publier au niveau de format annoncé —
il doit redescendre en Expérience ou en Note plutôt que d'afficher une section vide.

## 5. Le test humain — toujours prioritaire

> Est-ce que j'ai envie de continuer à lire ?

Si non, le GEO n'a aucune importance : on ne publie pas. Ce test passe avant le test GEO dans
l'ordre de relecture éditoriale, jamais après.

## 6. Ce qu'on ne fait jamais

- Générer du contenu uniquement pour capter une requête, sans expérience réelle derrière.
- Multiplier les variantes d'un même sujet pour couvrir plus de mots-clés.
- Ajouter des données structurées qui ne correspondent à rien de visible sur la page.
- Cacher du texte (contenu invisible bourré de mots-clés, texte blanc sur blanc, etc.).
- Publier une `reponseCourte` qui simplifie au point de devenir fausse ou trompeuse hors
  contexte.

## 7. Relation avec `CRAWLER_POLICY.md`

L'accessibilité technique du contenu (rendu serveur, pas de contenu JS-only) est une condition
nécessaire mais séparée de la question de savoir **qui a le droit de le crawler et pourquoi** —
traitée entièrement dans `CRAWLER_POLICY.md`, où la décision finale revient à Yasmine.
