# Plan directeur — Journal Krokodil

Document de synthèse. Le détail de chaque sujet vit dans son propre fichier :
`BENCHMARK.md` · `CONTENT_MODEL.md` · `EDITORIAL_ARCHITECTURE.md` · `GEO_GUIDELINES.md` ·
`CRAWLER_POLICY.md` · `CONTENT_INVENTORY.md` · `REDIRECTS.md` · `ASSETS_NEEDED.md`.

## 1. Ce qui change par rapport à la première reconstruction

La session précédente avait déjà remplacé WordPress par un Next.js propriétaire (voir historique
dans `CONTENT_INVENTORY.md`). Cette itération ne repart pas de zéro sur la partie technique
(Next.js/TypeScript/Tailwind reste le bon choix), mais change trois choses en profondeur :

1. **La marque** : Journal Crocodile → **Journal Krokodil** (alphabet latin), domaine technique
   inchangé (`journalcrocodile.com`), logo non conçu ici (placeholder typographique neutre en
   attendant un SVG final, cf. section 40 de la mission).
2. **Le modèle de données** : séparation stricte rubrique / format / chantier (`CONTENT_MODEL.md`)
   là où l'itération précédente confondait rubrique et chantier sous un seul champ.
3. **La DA n'est plus figée à ce stade** : palette, photographie, typographie définitive
   attendent la validation séparée annoncée par la mission (section 46). Le code doit rester
   modulaire pour accueillir cette DA sans réécriture structurelle.

## 2. Diagnostic reconduit

Contenu réel disponible à ce jour : 3 Expériences réelles (ex-articles WordPress, voir
`CONTENT_INVENTORY.md`), aucune Source formalisée, aucune Preuve structurée, aucun Chantier
avec timeline. Le site reste un média naissant — l'architecture doit être prête à grandir, pas
remplie de faux contenu pour paraître plus mature qu'il ne l'est.

Nouveau fait vérifié cette itération : le portfolio professionnel de Yasmine (Yasmine Ngandu
Dos Santos, Dole, Bourgogne-Franche-Comté) donne des informations biographiques réelles et
vérifiables (API & YOU, Bayard, Expat-Dakar/ROAM, Sherwood, prototype personnel Aurora) qui
remplacent les généralités précédemment utilisées sur la page À propos.

## 3. Choix techniques (reconduits, voir REBUILD_PLAN.md original pour le détail)

Next.js App Router + TypeScript strict + Tailwind v4, contenu en fichiers TypeScript typés
(architecture prête pour un futur CMS headless — voir section 6), pas de dépendance UI lourde.
Nouveauté : `src/content/rubriques.ts`, `src/content/chantiers.ts` (nouvelle définition),
`src/content/sources.ts` (utilitaires), types stricts pour `Experience | Dossier | Guide | Note`
au lieu de l'ancien `Article | Note`.

## 4. Design system — ce qui est posé vs ce qui reste ouvert

**Posé maintenant (structurel, neutre)** :
- tokens de layout (spacing, breakpoints, radius neutre proche de ce qu'utilise le portfolio :
  3px, pas de bulle SaaS)
- structure de composants (`ShortAnswerBlock`, `ProofPhoto`, `ProofBudgetTable`,
  `ProofBeforeAfter`, `ProofTimeline`, `SourceList`, `VerifiedBlock`, `ChantierTimeline`,
  `RubriqueHero`…)
- comportement responsive, accessibilité, animations discrètes

**Non figé, en attente de validation séparée** :
- palette finale de couleurs
- typographie définitive (piste prioritaire à tester : une old-style book serif proche
  d'Iowan Old Style — **Source Serif 4** ou **Lora** — + **Inter** pour l'UI, voir `BENCHMARK.md`
  section Portfolio)
- traitement photographique définitif
- logo (placeholder typographique neutre « JOURNAL KROKODIL » en attendant le SVG final, piste
  graphique du K retourné non tentée ici)

Un résumé visuel de ces conclusions (sans figer) est livré séparément en Artifact.

## 5. Ordre d'implémentation de cette itération

1. Documents de fondation (ce plan + les 8 autres fichiers) — **fait**
2. Résumé visuel des conclusions — Artifact
3. Rebrand du code : renommage Krokodil partout (site-config, metadata, UI)
4. Nouveau modèle de données : rubriques, chantiers (nouvelle définition), types
   Expérience/Dossier/Guide/Note, sources, preuves
5. Migration du contenu existant selon `CONTENT_INVENTORY.md`
6. Nouvelle navigation (« Explorer » mega-menu, voir `EDITORIAL_ARCHITECTURE.md` section 3)
7. Nouvelles routes et templates (`/[rubrique]`, `/[rubrique]/[slug]`, `/chantiers/[slug]` avec
   timeline, `/experiences`)
8. Composants de preuve et de source
9. Page À propos réécrite avec les faits vérifiés
10. Pages de confiance manquantes (méthode éditoriale, politique de correction, usage de l'IA,
    partenariats/affiliation)
11. SEO/GEO : structured data mis à jour (Article/BlogPosting par Expérience, BreadcrumbList),
    `robots.txt` piloté par `CRAWLER_POLICY.md`
12. Redirections mises à jour (`next.config.ts`)
13. QA : build, typecheck, lint, responsive, a11y

## 6. CMS — note d'architecture (pas encore implémenté)

Le contenu reste en fichiers TypeScript pour cette itération (cohérent avec le volume réel :
quelques contenus). L'architecture de données (types stricts, séparation rubrique/format/
chantier/source/preuve) est conçue pour qu'un futur back-office (Git-based CMS type Tina/
Sanity/Payload, ou headless WordPress) puisse s'y brancher en implémentant les mêmes
interfaces sans changer les composants de rendu. Ne pas construire ce CMS avant qu'il y ait
suffisamment de contenu pour que la friction de l'édition manuelle par fichier devienne réelle.

## 7. Ce qui n'est pas fait dans cette itération

- DA finale (couleurs/typo/photo définitives, logo) — attend validation séparée
- CMS avec interface d'administration
- Boutique `/objets`
- Contenu réel pour Dossier et Guide (formats qui exigent un historique que le site n'a pas
  encore) — seules des Expériences et Notes existent à ce stade, ce qui est cohérent avec la
  règle « ne jamais publier de Guide générique »
