# Inventaire de contenu — Journal Crocodile → Journal Krokodil

Aucune suppression automatique. Ce document classe tout ce qui existe (l'ancien WordPress *et*
le contenu déjà construit lors de la première reconstruction Next.js) selon :
**KEEP · REWRITE · UPDATE · MERGE · ARCHIVE · REMOVE**.

## A. Contenu original WordPress.com (audité le 2026-08-18)

| Contenu | Décision | Détail |
|---|---|---|
| *Le Manifeste du Journal Crocodile* (`hello-world`, 2026-01-23) | **ARCHIVE** | Texte fondateur réel, entièrement narratif, ne suit pas la méthode JE VIS→JE TRANCHE (écrit avant que la méthode existe). Conservé tel quel comme document historique sous Le Journal, non reformaté en Expérience, clairement daté comme archive. |
| *Le mythe de la collaboratrice infatigable* (2026-02-09) | **UPDATE** | Reformaté en Expérience (rubrique `le-journal`) : extraire `reponseCourte` et `ceQueJenConclus` du texte existant (la conclusion est déjà écrite, il s'agit de la faire correspondre aux champs du nouveau modèle), ajouter `sources: []` (aucune source externe utilisée à l'origine — resté un contenu niveau « vécu » uniquement, c'est cohérent). |
| *Ce que le Carême m'a vraiment appris* (2026-03-07) | **UPDATE** | Reformaté en Expérience (rubrique `le-journal`). La section « Ce que je retiens » devient `ceQueJenConclus`. Mention de l'émission EMCI TV « À table avec Anabelle » à formaliser en `Source` (titre, organisme, sans URL si non retrouvée — ne pas inventer l'URL). |
| Page « Le Chantier » | **REMOVE** | Contenu jamais audité en profondeur (page statique WP), concept renommé et redéfini entièrement dans le nouveau modèle. Redirection 301 vers `/chantiers`. |
| Page « Instants Crocos » | **REMOVE** | Redirection 301 vers `/notes`. |
| Page « Ma Rive » | **REMOVE** | Concept abandonné (trop abstrait, cf. mission). Redirection 301 vers `/le-journal`. |
| Page « Home » | **REMOVE** | Remplacée par la nouvelle homepage. |
| Catégorie « Chronique d'un Burn Out » | **ARCHIVE** | Le burn-out reste un chapitre réel (cf. mission initiale section 2), pas une identité. Les contenus qui en relèvent restent accessibles sous `le-journal`, la catégorie elle-même n'est pas recréée comme rubrique. |
| Catégorie « Ma rive » | **REMOVE** | Fondue dans `le-journal`. |
| Catégorie « Uncategorized » | **REMOVE** | Vide de sens dans le nouveau modèle. |

## B. Contenu construit lors de la première reconstruction (session précédente, Next.js)

Le premier rebuild avait déjà remplacé la structure WordPress, mais avec un modèle où
« chantier » désignait ce qui devient aujourd'hui **rubrique** — ce nommage est corrigé partout.

| Contenu (ancien) | Décision | Nouveau mapping |
|---|---|---|
| Taxonomie `chantiers.ts` (maison / lab / travail-argent / journal / ailleurs-objets) | **REWRITE** | Devient la table `rubriques.ts` : `maison→la-maison`, `lab→latelier`, `travail-argent→le-bureau`, `journal→le-journal`, `ailleurs-objets→ailleurs`. |
| `currentBuilds.ts` (4 cartes homepage « En ce moment ») | **MERGE** | Fondu dans la nouvelle entité **Chantier** (statut, dates, timeline). « Je rénove cette maison » → chantier `renover-la-maison` ; « Je deviens développeuse » → `devenir-developpeuse` ; « Je construis Aurora » → `construire-aurora` ; « Je cherche mon prochain modèle économique » → `nouveau-modele-economique`. Un cinquième chantier est ajouté : `construire-krokodil` (le rebuild du site lui-même est un chantier légitime, exemple donné par la mission section 11). |
| Article placeholder *Le budget réel des premiers mois de chantier* | **UPDATE** | rubrique `maison`→`la-maison`, format `experience`, chantier associé `renover-la-maison`, reste marqué contenu de démonstration. |
| Article placeholder *Je construis Aurora* | **UPDATE** | rubrique `lab`→`latelier`, chantier `construire-aurora`. |
| Article placeholder *Tester plusieurs pistes à la fois* | **UPDATE** | rubrique `travail-argent`→`le-bureau`, chantier `nouveau-modele-economique`. |
| Article placeholder *Ce que racontent les objets qu'on rapporte* | **UPDATE** | rubrique `ailleurs-objets`→`ailleurs`, pas de chantier associé pour l'instant. |
| 4 notes placeholder | **UPDATE** | même remapping de rubrique, `format: "note"` explicite. |
| Page À propos | **REWRITE** | Version précédente rédigée sans données vérifiées (dizaine d'années en e-commerce, sans détail). Réécrite avec des faits réels désormais disponibles via le portfolio audité (`BENCHMARK.md`) : nom complet Yasmine Ngandu Dos Santos, Dole (Bourgogne-Franche-Comté), expériences chez API & YOU, Bayard, Expat-Dakar/ROAM, Sherwood, prototype personnel Aurora. |
| Header / navigation | **REWRITE** | Nouvelle structure « Explorer » (mega-menu) décrite dans `EDITORIAL_ARCHITECTURE.md` section 3. |
| Footer | **UPDATE** | Renommage Krokodil, liens vers les nouvelles pages de confiance. |
| Pages `/mentions-legales`, `/confidentialite` | **KEEP** | Placeholders toujours signalés comme tels, structure valable, juste renommage du site. |
| Composants structurels (Header, Footer, ArticleCard, ContentBlocks, Quote, Figure, TableOfContents, Breadcrumb, EmptyState, Newsletter, SearchClient…) | **KEEP (adaptés)** | La logique est réutilisable ; ils sont mis à jour pour consommer le nouveau modèle de données (rubrique/format/chantier) sans réécriture visuelle — la DA reste non figée (cf. mission section 46). |
| Design tokens actuels (palette papier/encre/olive/argile, Fraunces/Archivo/JetBrains Mono) | **ARCHIVE (référence uniquement)** | Ce n'était qu'un point de départ posé avant que la mission Krokodil n'exige explicitement de ne rien figer tant que le portfolio et le benchmark n'étaient pas audités. Conservé comme référence de travail, remplacé par des tokens neutres en attendant la DA finale validée séparément (voir section « Design system » de `KROKODIL_REBUILD_PLAN.md`). |
| Nom de domaine / branding « Journal Crocodile » dans le code | **REWRITE** | Renommage complet en « Journal Krokodil » dans le contenu et l'UI. Le domaine technique reste `journalcrocodile.com` (aucun changement DNS demandé). |

## C. Ce qui n'existait pas et doit être créé

- Entités **Source** et **Preuve** (aucune trace dans le contenu précédent)
- Champ **réponse courte** sur les Expériences qui répondent à une question claire
- Pages de confiance manquantes : `/methode-editoriale`, `/politique-de-correction`,
  `/usage-de-lia`, `/partenariats-et-affiliation`
- Page auteur enrichie avec méthode éditoriale (section 32 de la mission)
