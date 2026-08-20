# Modèle de contenu — Journal Krokodil

Ce document fixe le modèle de données. Trois dimensions sont **strictement distinctes** et ne
doivent jamais être fusionnées dans le code ou dans le CMS : **Rubrique**, **Format**,
**Chantier**. S'y ajoutent deux entités de support — **Source** et **Preuve** — qui portent la
crédibilité GEO/éditoriale du média.

## 1. Les trois dimensions

### Rubrique — « De quoi parle ce contenu ? »

Territoire éditorial. Il y en a cinq aujourd'hui, mais la liste est **une donnée de
configuration**, jamais codée en dur dans les composants.

```ts
interface Rubrique {
  slug: string;                 // "la-maison"
  numero: string;                // "01"
  nom: string;                   // "La Maison"
  description: string;           // une phrase
  descriptionLongue: string;
  actif: boolean;                // permet de désactiver une rubrique sans la supprimer
}
```

Rubriques de lancement : `la-maison`, `le-bureau`, `latelier`, `le-journal`, `ailleurs`.

### Format — « Comment traite-t-on le sujet ? »

Quatre formats, eux aussi configurables mais avec une structure de champs propre à chacun
(voir section 3).

```ts
type FormatSlug = "note" | "experience" | "dossier" | "guide";
```

- **Note** — court, une idée/observation/photo, pas de structure imposée.
- **Expérience** — format central, structure complète JE VIS → JE VÉRIFIE → J'ANALYSE.
- **Dossier** — expérience + recherche + sources, plus approfondi.
- **Guide** — uniquement quand l'expérience accumulée est suffisante pour guider quelqu'un
  d'autre. Ne jamais créer un Guide juste parce qu'une requête SEO existe (contrainte
  éditoriale, pas technique — mais le CMS peut afficher un avertissement si un Guide est créé
  sans Chantier associé ayant une historique suffisant).

### Chantier — « Quelle histoire suit-on dans le temps ? »

Un chantier est un **processus réel**, suivi sur plusieurs semaines/mois/années, indépendant de
la rubrique et du format. Un chantier peut regrouper des contenus de rubriques différentes (ex.
le chantier « Construire Krokodil » touche à la fois L'Atelier et Le Bureau).

```ts
type ChantierStatut = "en-cours" | "en-pause" | "termine" | "abandonne";

interface Chantier {
  slug: string;
  titre: string;                      // "Devenir développeuse"
  description: string;
  statut: ChantierStatut;
  dateDebut: string;                   // ISO
  derniereMiseAJour: string;           // ISO
  resume: string;
  objectifs: string[];
  resultats?: string;                  // rempli quand statut = termine | abandonne
  raisonAbandon?: string;              // rempli quand statut = abandonne — jamais traité comme un échec éditorial
  prochaineEtape?: string;             // vide si statut = termine | abandonne
  rubriquesPrincipales: string[];      // slugs de rubrique, indicatif seulement
}
```

Un « Abandonné » avec `raisonAbandon` rempli est un contenu à part entière, pas une case vide —
le template de page Chantier doit l'afficher avec autant de soin qu'un chantier « Terminé ».

## 2. Relation entre les trois dimensions

Un contenu (Note, Expérience, Dossier ou Guide) porte :

```ts
interface ContentBase {
  slug: string;
  format: FormatSlug;         // 1 exactement
  rubrique: string;           // 1 exactement (slug de Rubrique)
  chantier?: string;          // 0 ou 1 (slug de Chantier) — optionnel
  // ...champs spécifiques au format, voir section 3
}
```

Aucun champ ne doit jamais mélanger ces trois notions (ex. ne jamais avoir une valeur qui serait
à la fois un nom de rubrique et un nom de chantier dans le même champ — erreur observée sur
l'ancien site où « Le Chantier » était à la fois une page ET une métaphore de toute la marque).

## 3. Structure d'une Expérience (le format central)

```ts
interface Experience extends ContentBase {
  format: "experience";
  titre: string;
  chapo: string;
  questionPrincipale?: string;        // "Dois-je faire cette rénovation moi-même ?"
  reponseCourte?: ShortAnswer;        // voir section 4 — vide si pas de question claire
  contexte: Block[];
  ceQueJaiFait: Block[];
  ceQuiSestPasse: Block[];
  ceQuiAMarche?: Block[];             // n'apparaît pas si vide
  ceQuiNaPasMarche?: Block[];         // n'apparaît pas si vide
  preuves: Preuve[];                  // chiffres, photos, tableaux — voir section 5
  ceQueJaiVerifie?: Block[];          // niveau de vérité 2 — vide si aucune vérification externe
  ceQueJenConclus: Block[];           // niveau de vérité 3
  ceQueJeReferaisDifferemment?: Block[];
  sources: Source[];                  // voir section 6, peut être vide
  datePublication: string;
  derniereMiseAJour: string;
  contenusConnexes: string[];         // slugs
}
```

**Règle d'affichage impérative** : une section vide ne s'affiche jamais (pas de titre "Ce qui n'a
pas marché" suivi de rien). Le composant de rendu doit omettre entièrement les sections dont le
tableau de blocs est vide ou absent.

Dossier reprend la même structure qu'Expérience en ajoutant une exigence : `sources` non vide et
`ceQueJaiVerifie` non vide (un Dossier sans recherche externe n'en est pas un). Guide reprend la
structure d'Expérience et ajoute une contrainte éditoriale : ne se crée que si un `chantier`
associé existe avec un historique (au moins 2 contenus liés). Note est volontairement libre :
`{ titre, corps: Block[], chantier?, rubrique }`, rien d'autre n'est obligatoire.

## 4. Réponse courte (Short Answer)

```ts
interface ShortAnswer {
  texte: string;         // doit être compréhensible hors contexte, 1 à 3 phrases
}
```

Affichée en évidence en haut de l'Expérience/Dossier/Guide quand elle existe. Doit rester une
phrase humaine, jamais une liste à puces mécanique de type FAQ.

## 5. Preuve

```ts
type PreuveType =
  | "photo" | "capture-ecran" | "budget" | "tableau" | "mesure"
  | "ticket" | "avant-apres" | "chronologie" | "document" | "resultat" | "erreur";

interface Preuve {
  type: PreuveType;
  titre?: string;
  contenu: string | Block[];    // image, tableau structuré, ou texte selon le type
  legende?: string;
  date?: string;
}
```

Composants de rendu dédiés par type (`ProofPhoto`, `ProofBudgetTable`, `ProofBeforeAfter`,
`ProofTimeline`…) — voir `EDITORIAL_ARCHITECTURE.md` pour la liste des composants.

## 6. Source

```ts
interface Source {
  titre: string;
  auteur?: string;
  organisme?: string;
  publication?: string;
  date?: string;
  url?: string;
  dateConsultation?: string;
  note?: string;
}
```

Règle absolue : **aucune source n'est inventée**. Si une affirmation nécessiterait une source
mais qu'aucune n'est disponible, l'affirmation est reformulée comme une observation personnelle
(niveau « vécu ») plutôt que présentée comme vérifiée. Les sources sont rendues en HTML visible
(liste en bas de contenu), pas seulement en métadonnées invisibles — c'est une exigence GEO en
plus d'une exigence de confiance.

## 7. Les trois niveaux de vérité — signature éditoriale

Chaque bloc de contenu narratif peut être implicitement rattaché à un niveau :

| Niveau | Champ porteur | Traitement visuel |
|---|---|---|
| Ce que j'ai vécu | `contexte`, `ceQueJaiFait`, `ceQuiSestPasse` | Ton narratif, première personne |
| Ce que j'ai vérifié | `ceQueJaiVerifie` + `sources` | Un traitement typographique discret mais reconnaissable (à définir avec la DA finale — ex. un letterspacing/label distinct), jamais un encart alarmant façon "fact-check" |
| Ce que j'en conclus | `ceQueJenConclus`, `reponseCourte` | Mise en avant, c'est la destination de la lecture |

Cette séparation doit rester discrète dans le design (pas de badges criards) mais repérable dans
le code (classes/composants distincts), pour que la distinction survive aux futures évolutions
de la DA.

## 8. Ce que ce modèle remplace

L'ancien modèle (`Article`/`Note` avec un seul champ `chantier` qui faisait à la fois office de
rubrique et de fil narratif — voir `src/content/types.ts` actuel) est remplacé intégralement. Le
mapping de migration est détaillé dans `CONTENT_INVENTORY.md`.
