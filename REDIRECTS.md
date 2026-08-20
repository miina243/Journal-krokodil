# Redirections — Journal Crocodile → Journal Krokodil

Le domaine ne change pas (`journalcrocodile.com` conservé, cf. consigne explicite). Seule
l'architecture d'URL change. Deux couches à considérer.

## A. Depuis l'ancien WordPress.com (contenu réellement public, avec potentiel SEO/backlinks)

Toutes ces redirections sont en 308 (permanent), implémentées dans `next.config.ts`.

| Ancienne URL WordPress | Nouvelle URL Krokodil | Raison |
|---|---|---|
| `/2026/01/23/hello-world/` | `/le-journal/le-manifeste-du-journal-crocodile` | Archive du texte fondateur (voir `CONTENT_INVENTORY.md`, statut ARCHIVE) |
| `/2026/02/09/le-mythe-de-la-collaboratrice-infatigable/` | `/le-journal/le-mythe-de-la-collaboratrice-infatigable` | Expérience réelle migrée et reformattée |
| `/2026/03/07/ce-que-le-careme-ma-vraiment-appris/` | `/le-journal/ce-que-le-careme-ma-vraiment-appris` | Expérience réelle migrée et reformattée |
| `/le-chantier/` | `/chantiers` | Concept renommé et redéfini (voir note ci-dessous) |
| `/instants-crocos/` | `/notes` | Format le plus proche : instants courts |
| `/ma-rive/` | `/le-journal` | Ancien espace « refuge », fondu dans la rubrique Le Journal |
| `/category/chronique-dun-burn-out/` | `/le-journal` | Ancienne série éditoriale, archivée sous Le Journal |
| `/category/ma-rive/` | `/le-journal` | — |
| `/category/uncategorized/` | `/experiences` | Flux général |

## B. Note sur le changement de sens de `/chantiers`

Point d'attention important, propre à cette itération : lors de la première reconstruction
(session précédente), `/chantiers` listait les 5 territoires éditoriaux (l'équivalent de ce qui
s'appelle maintenant **rubrique**). Dans le nouveau modèle, ce sens est repris par `/explorer`,
et `/chantiers` désigne désormais les **projets suivis dans le temps** (Devenir développeuse,
Construire Aurora…) — un concept différent (voir `CONTENT_MODEL.md` section 1).

Cette première reconstruction n'ayant jamais été publiée publiquement (site développé en local
uniquement, aucun backlink externe possible vers ces URLs), **aucune redirection SEO n'est
nécessaire** pour cette couche interne. Par précaution pour un éventuel bookmark local, mapping
de référence :

| Route de l'itération précédente | Nouvelle route | Changement de sens ? |
|---|---|---|
| `/chantiers` (listait les 5 rubriques) | `/explorer` | Oui — `/chantiers` a maintenant un contenu différent |
| `/chantiers/maison` | `/la-maison` | Devient une vraie page rubrique |
| `/chantiers/lab` | `/latelier` | — |
| `/chantiers/travail-argent` | `/le-bureau` | — |
| `/chantiers/journal` | `/le-journal` | — |
| `/chantiers/ailleurs-objets` | `/ailleurs` | — |
| `/articles/[slug]` | `/[rubrique]/[slug]` | Le préfixe dépend désormais de la rubrique de chaque contenu |
| `/journal` (flux général) | `/experiences` | Le mot « journal » désigne maintenant uniquement la rubrique personnelle |
| `/notes`, `/notes/[slug]` | inchangé | — |
| `/a-propos`, `/recherche`, `/mentions-legales`, `/confidentialite` | inchangé | — |

## C. Nouvelles pages sans équivalent antérieur

`/methode-editoriale`, `/politique-de-correction`, `/usage-de-lia`,
`/partenariats-et-affiliation` — pages créées, pas de redirection à prévoir.
