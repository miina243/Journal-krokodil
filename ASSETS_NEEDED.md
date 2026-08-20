# Assets nécessaires — Journal Krokodil

Aucune photo de banque d'images n'est utilisée. Tant qu'une image réelle manque, un placeholder
graphique neutre et identifiable est affiché à sa place (pas une photo Unsplash générique). La
liste ci-dessous documente ce qu'il faudrait fournir, où, et dans quel format — remplace
l'ancien `CONTENT_ASSETS_NEEDED.md`, étendu à la nouvelle architecture.

## Hero de la homepage (optionnel, pas bloquant)

- **Page** : `/` (section hero)
- **Statut actuel** : hero 100% typographique, aucune image — choix assumé, pas un trou à
  combler à tout prix (« l'élégance vient aussi du silence »).
- **Si une photo est ajoutée un jour** : ratio large (16:9 ou plus), plan large ou détail —
  maison, bureau, matière, geste, carnet, ordinateur. Jamais une photo de stock « femme
  souriante devant un ordinateur ». La photo doit installer une atmosphère, pas illustrer
  littéralement le texte.

## Portrait auteure

- **Page** : `/a-propos`
- **Ratio** : 4:3
- **Résolution recommandée** : 2000×1500px minimum
- **Description** : photo réelle de Yasmine, lumière naturelle, pas de pose corporate — cohérent
  avec le ton « excellente conversation » plutôt qu'institutionnel.

## Cover par contenu (Expérience / Dossier / Guide)

- **Champ** : `coverImage` sur chaque contenu
- **Ratio** : 16:9 pour le header de page, recadré en 4:3 pour les cartes
- **Résolution recommandée** : 2400px de large max, `.jpg`/`.webp`, < 500 Ko
- Dès qu'une vraie photo existe, renseigner `{ src, alt }` sur le contenu concerné.

## Preuves visuelles (composant `ProofPhoto`, `ProofBeforeAfter`)

C'est la nouveauté la plus importante de cette itération : Krokodil valorise les preuves
originales (voir `CONTENT_MODEL.md` section 5). Chaque Expérience qui documente un avant/après,
un budget, une capture d'écran de code, etc. a besoin de ses propres visuels — ce ne sont pas
des photos d'ambiance, ce sont des preuves, donc **aucun placeholder élégant ne peut les
remplacer à terme** : tant qu'elles n'existent pas, la section « Preuves » de l'Expérience reste
absente plutôt que remplie d'un faux visuel (cohérent avec la règle « pas de section vide
affichée »).

| Type de preuve | Format recommandé |
|---|---|
| Photo | `.jpg`/`.webp`, libre, légendée |
| Capture d'écran | `.png`, résolution native, pas de recadrage qui coupe le contexte |
| Avant/Après | deux images au même ratio et au même cadrage |
| Budget / tableau | donnée structurée (pas une image de tableur — un vrai tableau HTML) |

## Image par rubrique (ambiance, usage secondaire — pages `/explorer` et landing rubrique)

| Rubrique | Ce qui conviendrait |
|---|---|
| La Maison | Un espace en travaux réel, pas un rendu déco fini |
| Le Bureau | Un poste de travail réel, un tableau de bord, pas une photo de stock « bureau » |
| L'Atelier | Un écran de code réel, pas une photo de stock « tech/IA » |
| Le Journal | Volontairement sobre — un détail, jamais un portrait mis en scène |
| Ailleurs | Les objets ou lieux eux-mêmes, photographiés simplement |

## Logo

Non traité ici — recherche de logo effectuée séparément (cf. mission section 40). Le site
utilise un placeholder typographique neutre `JOURNAL KROKODIL` jusqu'à réception d'un SVG final.
Aucun favicon dessiné n'est produit tant que le logo n'existe pas ; un favicon typographique
neutre temporaire est utilisé à la place.

## Règle

Toute image manquante reste un placeholder graphique explicite, jamais une photo de banque
d'images. Les preuves originales n'ont pas de substitut : leur absence se traduit par l'absence
de la section, pas par un visuel de remplacement.
