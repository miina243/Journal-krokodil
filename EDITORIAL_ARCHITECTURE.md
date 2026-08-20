# Architecture éditoriale — Journal Krokodil

## 1. Méthode

```
JE VIS → JE M'INTERROGE → JE VÉRIFIE → J'ANALYSE → JE TRANCHE / J'APPRENDS
```

Traduction dans le modèle de données (`CONTENT_MODEL.md`) :

| Étape | Champ(s) |
|---|---|
| Je vis | `contexte`, `ceQueJaiFait`, `ceQuiSestPasse` |
| Je m'interroge | `questionPrincipale` |
| Je vérifie | `ceQueJaiVerifie`, `sources` |
| J'analyse | `preuves`, `ceQuiAMarche`, `ceQuiNaPasMarche` |
| Je tranche / j'apprends | `ceQueJenConclus`, `reponseCourte`, `ceQueJeReferaisDifferemment` |

Cette méthode ne s'affiche pas comme un gabarit visible ("Étape 1 : Je vis") — elle structure le
back-office et le template, pas la lecture. Le lecteur lit un texte fluide ; le CMS, lui, sait
exactement à quel champ chaque paragraphe appartient.

## 2. Les cinq rubriques

| # | Rubrique | Slug | Contenu |
|---|---|---|---|
| 01 | La Maison | `la-maison` | Rénovation, décoration, jardin, chine, mobilier, bricolage, objets, travaux, intérieur |
| 02 | Le Bureau | `le-bureau` | Travail, carrière, emploi, reconversion, marketing, e-commerce, entrepreneuriat, argent, immobilier |
| 03 | L'Atelier | `latelier` | Technologie, IA, développement, code, outils, prototypes, expérimentations numériques |
| 04 | Le Journal | `le-journal` | Famille, foi, corps, identité, décisions, réflexions, récits personnels |
| 05 | Ailleurs | `ailleurs` | Voyages, Afrique, Portugal, villes, culture, lieux, artisanat, objets rencontrés |

Stockées comme données de configuration (`src/content/rubriques.ts` dans l'implémentation),
jamais codées en dur dans les composants ou les routes — une sixième rubrique doit pouvoir être
ajoutée sans toucher au code des templates.

**Point d'attention nommage** : « Le Journal » est maintenant à la fois le nom du site
(*Journal Krokodil*) et l'une des cinq rubriques. C'est assumé (cohérent avec la manière dont
Yasmine en parle), mais cela impose une règle : le mot « journal » seul, dans l'UI, ne doit
jamais désigner autre chose que soit le site entier (logo), soit cette rubrique précise — jamais
un flux générique "tous les articles". Le flux chronologique de tout le contenu (utile pour RSS,
sitemap humain, page "tout voir") vit sur une route neutre : `/experiences` (toutes les
Expériences, Dossiers, Guides confondus, hors Notes) plutôt que sur un `/journal` qui prêterait à
confusion.

## 3. Navigation — décision et justification

Proposition brute du brief (Accueil + 5 rubriques + Chantiers + Recherche) = 8 entrées. Sur un
nav horizontal desktop dans un esprit éditorial aéré, 8 libellés textuels créent une barre
chargée et concurrencent l'espace blanc voulu par la DA. Le brief invite explicitement à
proposer mieux si besoin (section 29).

**Décision retenue** :

```
Journal Krokodil        Explorer ▾        Les Chantiers        Recherche
                         │
                         ├─ La Maison
                         ├─ Le Bureau
                         ├─ L'Atelier
                         ├─ Le Journal
                         └─ Ailleurs
```

- 4 entrées de premier niveau au lieu de 8.
- « Explorer » regroupe les 5 rubriques dans un mega-menu (desktop : survol/clic révèle les 5
  liens avec leur description courte ; mobile : sous-liste dépliable dans le drawer).
- « Les Chantiers » reste une entrée de premier niveau à part entière, jamais fondue dans
  « Explorer » — conformément à la section 30 du brief (chantier ≠ rubrique, il ne doit pas être
  noyé dans « La Maison »).
- Cette structure est strictement respectueuse des noms de rubriques (aucun renommage
  générique) et reste réévaluable une fois la vraie densité de contenu connue.

## 4. Page d'accueil

Ordre des sections (aucune ne s'affiche si son contenu réel est vide — cf. section 41 de la
mission initiale, toujours valable) :

1. **Hero** — nom, promesse éditoriale en cours de construction (voir `KROKODIL_REBUILD_PLAN.md`
   pour le texte de travail, non figé tant que la DA n'est pas validée)
2. **En ce moment** — 3 à 5 Chantiers actifs (statut `en-cours`)
3. **À lire** — une Expérience mise en avant (sélection éditoriale manuelle, pas un algorithme)
4. **Les dernières expériences** — composition asymétrique (1 grande + 2–3 secondaires), format
   Expérience uniquement
5. **Notes** — formats courts, liste dense
6. **Dossiers** — mis en avant séparément des Expériences (ce sont des contenus qui méritent
   d'être trouvés même s'ils ne sont pas récents)
7. **Explorer** — les 5 rubriques, chacune avec sa description et un lien
8. **La lettre du chantier** — newsletter

## 5. Page Rubrique (`/[rubrique]`)

Une vraie landing page, jamais une archive WordPress plate :

- identité de la rubrique (nom, numéro, description)
- chantier(s) actif(s) rattaché(s) à cette rubrique (via `rubriquesPrincipales` du Chantier)
- une Expérience principale mise en avant
- dernières Expériences de la rubrique
- Notes de la rubrique
- Dossiers de la rubrique (s'il y en a)

## 6. Page Chantier (`/chantiers/[slug]`)

- titre, statut (badge textuel discret : En cours / En pause / Terminé / Abandonné), résumé,
  objectifs, dates
- **timeline** chronologique de tous les contenus liés (Notes et Expériences mélangées, dans
  l'ordre)
- résultats (si `termine`) ou raison de l'abandon (si `abandonne`, présentée avec autant de soin
  que les autres statuts — c'est une information, pas un aveu d'échec)
- prochaine étape (si `en-cours` ou `en-pause`)

## 7. Page Expérience / Dossier / Guide (`/[rubrique]/[slug]`)

Structure complète décrite dans `CONTENT_MODEL.md` section 3. Composants dédiés nécessaires
(structurels, DA à appliquer plus tard) :
`ShortAnswerBlock`, `ProofPhoto`, `ProofBudgetTable`, `ProofBeforeAfter`, `ProofTimeline`,
`SourceList`, `VerifiedBlock` (distinction visuelle discrète niveau 2 de vérité).

## 8. Maillage interne

À la fin d'un contenu, priorité à :

```
CONTINUER CE CHANTIER  (si chantier associé — épisode précédent / suivant du même chantier)
```

plutôt qu'à un bloc générique "Vous aimerez aussi". Le "Vous aimerez aussi" générique n'existe
plus : il est remplacé par une combinaison de trois blocs, affichés seulement si non vides :

1. Épisode précédent / suivant du même **chantier**
2. Autres contenus de la même **rubrique**
3. Dossier lié (si le contenu courant est une Expérience qui a inspiré ou complète un Dossier)

## 9. Pages de confiance

`/a-propos`, `/methode-editoriale`, `/politique-de-correction`, `/usage-de-lia`,
`/partenariats-et-affiliation`, `/mentions-legales`, `/confidentialite`. Contenu réel à rédiger
avec Yasmine ; voir `KROKODIL_REBUILD_PLAN.md` pour le statut de chacune (rédigée / placeholder
signalé).

## 10. Structure d'URL

```
/
/explorer                          (vue d'ensemble des 5 rubriques — sert le mega-menu "Explorer")
/la-maison
/le-bureau
/latelier
/le-journal
/ailleurs
/[rubrique]/[slug]                 (Expérience, Dossier ou Guide)
/notes
/notes/[slug]
/experiences                       (flux chronologique toutes rubriques, Expériences+Dossiers+Guides)
/chantiers
/chantiers/[slug]
/a-propos
/methode-editoriale
/politique-de-correction
/usage-de-lia
/partenariats-et-affiliation
/recherche
/mentions-legales
/confidentialite
```

`/objets` reste réservé pour une future boutique (non exposé tant qu'aucun catalogue réel
n'existe), inchangé par rapport au plan initial.
