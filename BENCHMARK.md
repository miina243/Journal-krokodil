# Benchmark — Journal Krokodil

Audit réalisé le 2026-08-19 par inspection directe (contenu, structure, CSS/fonts calculées via
DevTools programmatique). Aucune de ces références n'est copiée : ce document extrait des
principes, pas des gabarits.

---

## Référence 1 — Portfolio de Yasmine (Yasmine Ngandu Dos Santos)

`https://yasmine-ngandu-dos-santos-portfolio.mina243.chatgpt.site/`

Ce n'est pas un blog — c'est un portfolio professionnel (communication, communautés, projets
digitaux). La référence utile ici est **exclusivement typographique**, comme demandé.

### Typographie — relevé exact (pas une supposition)

Le fichier `styles.css` du portfolio ne charge **aucune police web** : ni `@font-face`, ni
`@import`, ni lien Google Fonts. Toute la typographie repose sur des **stacks système** :

```css
--sans: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
--serif: Iowan Old Style, Baskerville, "Times New Roman", serif;
```

| Élément | Police calculée | Taille (desktop → mobile 390px) | Graisse | Line-height | Letter-spacing |
|---|---|---|---|---|---|
| H1 | Iowan Old Style | 73px → 56.55px | 400 | ~0.98× (très serré) | ≈ -4.5 % de la taille |
| H2 | Iowan Old Style | 68px | 400 | 0.98× | ≈ -4.5 % |
| H3 | Iowan Old Style | 50px | 400 | 1.0× | normal |
| Nav / wordmark | Inter | 16px | 400 | 1.6× | normal |
| Eyebrow / labels | Inter | 10–12px | **800** | 1.6× | +0.9 à 1.2px, UPPERCASE |
| Bouton | Inter | 12px | 800 | 1.6× | +0.72px, UPPERCASE |

Autres tokens notés : `--radius: 3px` (presque droit, esprit éditorial, pas SaaS arrondi),
`--shell: min(1240px, calc(100% - 48px))` (conteneur fluide plafonné).

### Ce que ça signifie pour Krokodil

- **Iowan Old Style ne peut pas être embarquée sur le web** : c'est une police système Apple
  (macOS/iOS), sans licence de distribution web. Les visiteurs non-Apple retombent déjà sur
  Baskerville (aussi Apple) puis Times New Roman — c'est-à-dire que même le portfolio actuel
  n'affiche cette typo correctement que sur une partie des visiteurs.
- **Ce qui doit être testé en priorité pour Krokodil** : une serif *old-style* de la même famille
  visuelle — proportions chaleureuses, empattements doux, graisse 400 uniquement, tracking très
  négatif sur les très grands corps (effet resserré, presque "tapé à l'ancienne"). Candidats
  librement embarquables à tester en premier : **Source Serif 4** et **Lora** (les deux plus
  proches en caractère d'une old-style book serif type Iowan Old Style), puis **Spectral** en
  second choix.
- **Inter est directement réutilisable tel quel** — c'est une police Google Fonts gratuite, déjà
  exactement ce que le portfolio demande. Aucune substitution nécessaire pour la voix UI/labels.
- Le principe "grands titres en graisse 400 + tracking très négatif" + "labels en 800 UPPERCASE
  très espacés" est une signature forte et reproductible : hiérarchie par **taille et tracking**,
  pas par le gras sur les titres.
- `--radius: 3px` confirme le goût de Yasmine pour un rendu net, pas arrondi — cohérent avec le
  rejet des cartes SaaS du brief initial.

---

## Référence 2 — Louise Grenadine

`https://www.louisegrenadine.fr/`

| Critère | Constat |
|---|---|
| Proposition éditoriale | Blog "slow lifestyle" : cuisine, jardin, voyages courts, garde-robe. Voix chaleureuse et personnelle, très "je". |
| Navigation | Classique WordPress (menu horizontal + catégories) |
| Homepage | **Flux chronologique pur** : articles empilés du plus récent au plus ancien, avec vignette + titre + "LIRE LA SUITE". Répétition de blocs identiques (y compris un carrousel qui réaffiche les 3 mêmes articles en boucle). |
| Types de contenus | Recettes, guides voyage courts, listes ("5 livres pour le jardin"), pas de format long structuré |
| Photographie | Photos personnelles, lumineuses, chaleureuses, cohérentes visuellement |
| Typographie | Fallback système observé (Times New Roman) au moment de l'audit — pas de signature typo forte identifiée |
| Couleurs | Fond blanc, texte noir, peu de couleur de marque visible |
| Densité | Faible — un article à la fois, grandes images |
| Mobile | Non testé en profondeur, structure WordPress standard responsive |
| Points forts | Ton intime et chaleureux ; sensation de vraie personne qui écrit ; sujets ancrés dans un lieu réel (Ardèche) |
| Points faibles | Homepage = pure archive, aucune hiérarchie éditoriale ; répétition de blocs (le même trio d'articles apparaît 3 fois de suite) ; pas de séparation entre formats courts/longs ; aucune preuve/source visible |
| **Ce que Krokodil peut apprendre** | La chaleur du "je", l'ancrage dans un lieu et un quotidien réels, la simplicité de lecture |
| **Ce que Krokodil ne doit pas reproduire** | La homepage-archive sans hiérarchie ; l'absence de structure éditoriale (pas de rubrique/format/chantier visibles) ; la répétition de contenu |

---

## Référence 3 — Lili in Wonderland

`https://liliinwonderland.fr/`

| Critère | Constat |
|---|---|
| Proposition éditoriale | Blog déco/lifestyle/voyage, adossé à un studio photo professionnel (`wonderlandphotographie.fr`) |
| Navigation | Home, À propos, Blog, BlogRoll, Contact, Studio — simple mais un peu datée |
| Homepage | Article vedette en haut, puis liste par catégories |
| Types de contenus | Catégories nombreuses et parfois redondantes : Blabla, Déco, DIY, Lifestyle ("Les bonnes choses"), Mariage ("I do"), Shop, Voyage (avec sous-destinations Bali, Berlin, Madère…) |
| Photographie | **Point fort net** — qualité professionnelle assumée, cohérence visuelle forte, la photo porte le site |
| Typographie | Non déterminante dans l'expérience — la photo domine |
| Couleurs | Neutre, laisse la photo parler |
| Densité | Modérée, structure blog classique par catégories |
| Mobile | Structure WordPress standard |
| Points forts | Qualité photographique, mélange assumé de plusieurs sujets sans perdre l'identité, présence d'une page Studio qui légitime le rapport à l'image |
| Points faibles | Taxonomie de catégories confuse (noms cryptiques comme "Blabla", "I do") ; structure d'archive WordPress classique ; pas de hiérarchie entre formats |
| **Ce que Krokodil peut apprendre** | Que plusieurs sujets peuvent cohabiter sous une identité forte quand la photographie est le liant ; l'intérêt d'assumer une vraie compétence photo comme colonne vertébrale |
| **Ce que Krokodil ne doit pas reproduire** | Les noms de catégories obscurs ; l'esthétique bohème ; la déco qui écrase tout le reste du propos |

---

## Référence 4 — Milkywaysblueyes

`https://milkywaysblueyes.com/fr/cat/lifestyle/conseils/`

| Critère | Constat |
|---|---|
| Proposition éditoriale | Média lifestyle multi-sujets avec forte dimension commerciale/influenceuse |
| Navigation | Blog, "Mon dressing" (mode), liens réseaux sociaux nombreux et proéminents |
| Homepage | Grille d'articles par catégorie ("Conseils", "Bonnes adresses"…) |
| Types de contenus | Avis produits sponsorisés (ex. logiciel Odoo), listes cadeaux, partenariats voyage (EF Education First), conseils pratiques génériques |
| Photographie | Lifestyle soigné mais générique dans le traitement |
| Couleurs / UI | Bannière de consentement cookies imposante, formulaire d'inscription newsletter avec date de naissance/pays — collecte de données typique influenceur/marketing |
| Densité | Élevée, orientée conversion |
| Mobile | Standard |
| Points forts | Organisation claire de plusieurs verticales de contenu, régularité de publication apparente |
| Points faibles | Contenu sponsorisé non distingué du contenu éditorial ; aucune trace de méthode ou de preuve ; mécanique de collecte de données agressive (date de naissance demandée) ; voix générique |
| **Ce que Krokodil peut apprendre** | La discipline d'organisation en verticales, la régularité |
| **Ce que Krokodil ne doit pas reproduire** | La mécanique influenceuse, le contenu sponsorisé non distingué, la collecte de données intrusive, l'absence totale de preuve/source |

---

## Synthèse transversale

Aucune des trois références blogs ne fait ce que Krokodil doit faire : **aucune ne sépare
rubrique / format / chantier**, **aucune n'affiche de sources**, **aucune ne distingue
expérience vécue et information vérifiée**. C'est précisément l'angle mort que Krokodil doit
combler — c'est un différenciateur structurel, pas seulement esthétique.

Le seul actif typographique réutilisable vient du portfolio (hors-benchmark blog), et il doit
être testé, pas copié tel quel (contrainte de licence Iowan Old Style — voir section dédiée).
