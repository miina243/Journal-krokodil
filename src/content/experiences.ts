import type { Experience } from "./types";

/**
 * Les 3 premières Expériences (careme, mythe-collaboratrice, manifeste) sont le texte intégral
 * publié sur l'ancien journalcrocodile.com, migré et reformaté dans le nouveau modèle de champs
 * (voir CONTENT_MODEL.md et CONTENT_INVENTORY.md). Auteure réelle : Yasmine. Aucun mot n'a été
 * inventé pour ces trois textes — seule la répartition entre champs a changé.
 * Les autres Expériences sont du contenu démonstratif (`placeholder: true`).
 */
export const experiences: Experience[] = [
  {
    slug: "ce-que-le-careme-ma-vraiment-appris",
    titre: "Ce que le Carême m'a vraiment appris",
    format: "experience",
    rubrique: "le-journal",
    date: "2026-03-07",
    derniereMiseAJour: "2026-03-07",
    auteur: "Yasmine",
    chapo: "Se redécouvrir, revenir à l'essentiel, et recommencer à prier pour les autres.",
    excerpt:
      "Cinq leçons tirées d'un Carême qui ne ressemblait à aucun des précédents : sur la prière, le jeûne, le temps, et la parabole de Marthe et Marie.",
    tags: ["foi", "récit", "famille"],
    coverImage: null,
    contexte: [
      { type: "paragraph", text: "Je n'avais pas prévu d'écrire cet article." },
      {
        type: "paragraph",
        text: "Parler de spiritualité ou de religion en public, c'est compliqué. On se fait juger, dans un sens ou dans l'autre. Pendant longtemps, j'ai préféré rester neutre sur ce sujet. Ne pas exposer ma foi, ne pas en faire un sujet de blog. La garder pour moi, bien rangée dans la partie privée de ma vie.",
      },
      {
        type: "paragraph",
        text: "Et puis cette année, quelque chose a changé. Le Carême 2025 a été différent des précédents. Il m'a traversée d'une façon que je n'attendais pas. Et je me suis dit que si je tenais un média qui parle de transformation, de reconstruction, de vie réelle, alors je ne pouvais pas faire l'impasse sur ce qui m'a réellement transformée. Même si c'est inconfortable à écrire… Surtout parce que c'est inconfortable.",
      },
      {
        type: "paragraph",
        text: "Alors voilà. Je parle de foi aujourd'hui. Pas pour convaincre qui que ce soit. Juste pour témoigner de ce que j'ai vécu.",
      },
      { type: "heading", text: "Les trois piliers du Carême : un rappel" },
      {
        type: "paragraph",
        text: "Le Carême s'articule autour de trois pratiques fondamentales : la prière, le jeûne et l'aumône. Ce n'est pas une liste de contraintes, c'est une architecture. Trois façons de faire de la place.",
      },
      {
        type: "paragraph",
        text: "La prière, c'est se tourner vers Dieu. Créer du silence intérieur dans une vie souvent saturée de bruit. Le jeûne, c'est se confronter à ses dépendances : pas nécessairement à la nourriture, mais à tout ce qui anesthésie. L'aumône, c'est regarder au-delà de soi, se rappeler qu'on n'est pas seul sur terre.",
      },
    ],
    ceQuiSestPasse: [
      { type: "heading", text: "1. Me redécouvrir" },
      {
        type: "paragraph",
        text: "La première leçon, c'est la plus fondamentale : je m'étais perdue. Pas dramatiquement, pas d'un coup, mais progressivement, à force d'être dans l'action, dans la performance, dans le faire. Je savais qui j'étais pour les autres. Je ne savais plus très bien qui j'étais pour moi.",
      },
      {
        type: "paragraph",
        text: "Le Carême m'a offert un espace pour poser la question. Pas pour trouver une réponse définitive : il n'y en a pas ! Mais pour recommencer à chercher. Remettre des bases. Revenir à des gestes simples, à des silences choisis, à une intériorité que j'avais mise en veille.",
      },
      { type: "paragraph", text: "On ne se redécouvre pas en une semaine. Mais on peut commencer." },
      { type: "heading", text: "2. Prier pour lui aussi" },
      { type: "paragraph", text: "Celui-là, je ne l'avais pas vu venir." },
      {
        type: "paragraph",
        text: "Le Carême m'a rappelé quelque chose d'évident que j'avais oublié : mon mari et moi, nous sommes une team… Pas seulement dans le sens courant du terme, dans le sens profond. Deux personnes qui partagent une vie, une maison en chantier, des enfants, des doutes et des rêves. Deux personnes liées.",
      },
      {
        type: "paragraph",
        text: "Et pourtant, dans ma pratique spirituelle, j'avais glissé vers quelque chose de très individuel. Je priais pour moi. Pour ma reconstruction, mes projets, mes peurs, mes enfants. Ce n'est pas mal, c'est même nécessaire. Mais j'avais oublié de prier pour lui. De l'accompagner spirituellement, pas seulement logistiquement.",
      },
      {
        type: "quote",
        text: "« L'amour ne cherche pas son intérêt. » (1 Co 13,5)",
        cite: "ça vaut aussi dans la prière.",
      },
      { type: "heading", text: "3. Le jeûne : faire moins pour entendre plus" },
      {
        type: "paragraph",
        text: "On vit dans une époque de trop. Trop d'informations, trop de bruit, trop de sollicitations. Et dans ce trop, on perd le contact avec soi-même. Ce qui m'a frappée cette année, c'est que Jésus lui-même pratiquait ce retrait : non pas pour fuir, mais pour se reconcentrer sur sa mission.",
      },
      {
        type: "quote",
        text: "« Après avoir renvoyé la foule, il monta dans la montagne, à l'écart, pour prier. » (Mt 14,23)",
      },
      { type: "heading", text: "4. Le temps travaille pour toi" },
      {
        type: "paragraph",
        text: "J'ai une relation compliquée avec le temps : je veux toujours aller vite. Le Carême, c'est 40 jours pour une raison : certaines choses ont besoin de durée pour prendre racine. On ne reconstruit pas une foi, une confiance en soi, une relation en claquant des doigts.",
      },
      { type: "heading", text: "5. Marthe et Marie : la parabole de mon burnout" },
      {
        type: "paragraph",
        text: "C'est en écoutant une émission sur EMCI TV que j'ai enfin saisi la vraie profondeur de ce passage. Marthe ne faisait pas mal : elle s'était laissé emporter par ce que tout ça représentait aux yeux des autres. Marie avait choisi ce qui comptait vraiment, même moins visible.",
      },
      {
        type: "paragraph",
        text: "Quand j'ai compris ça, j'ai reconnu exactement où j'en étais en 2025, quand le burnout m'a rattrapée. J'étais Marthe. Entièrement. Je fonctionnais au devoir de loyauté, à l'image, à ce que ça représentait. Pas par sens profond. Par obligation intériorisée.",
      },
      {
        type: "quote",
        text: "« Marie a choisi la meilleure part, et elle ne lui sera pas enlevée. » (Lc 10,42)",
      },
    ],
    ceQueJenConclus: [
      {
        type: "paragraph",
        text: "Ce Carême ne ressemblait pas aux précédents. Il était moins propre, moins linéaire. Il s'est passé dans une maison en travaux, dans une vie en reconstruction, avec des doutes vrais et des silences parfois inconfortables. Mais c'est peut-être pour ça qu'il a été le plus utile.",
      },
      {
        type: "paragraph",
        text: "Je ne sais pas où tu en es avec ta foi (ou si tu en as une). Mais je crois que ces cinq leçons n'appartiennent pas qu'au Carême. Elles appartiennent à n'importe quelle période où on essaie de revenir à soi.",
      },
    ],
    sources: [
      {
        titre: "À table avec Anabelle",
        organisme: "EMCI TV",
        note: "Émission qui a permis de comprendre la profondeur de la parabole de Marthe et Marie.",
      },
    ],
  },
  {
    slug: "le-mythe-de-la-collaboratrice-infatigable",
    titre: "Le mythe de la collaboratrice infatigable",
    format: "experience",
    rubrique: "le-journal",
    date: "2026-02-09",
    derniereMiseAJour: "2026-02-09",
    auteur: "Yasmine",
    chapo: "Ou comment j'ai appris à confondre ma valeur avec ma capacité à encaisser.",
    questionPrincipale: "Pourquoi ai-je fini par m'effondrer alors que je « gérais » tout ?",
    reponseCourte: {
      texte:
        "Parce que l'endurance n'est pas une compétence mais une ressource, et qu'elle s'épuise. Pendant dix ans, j'ai confondu ma valeur avec ma capacité à tout porter, jusqu'à ce que le corps pose la limite que je refusais de poser moi-même.",
    },
    excerpt:
      "Dix ans à porter le travail de plusieurs personnes avec le titre d'une seule. Le récit d'un mécanisme, pas d'un règlement de comptes.",
    tags: ["travail", "récit", "burnout"],
    coverImage: null,
    contexte: [
      {
        type: "paragraph",
        text: "Il existe un profil que beaucoup d'organisations adorent. Celui qui dit oui. Celui qui reste tard. Celui dont on dit en réunion : « elle va gérer ». Trois syllabes qui tiennent lieu de fiche de poste, de remerciement et de plan de carrière.",
      },
      {
        type: "paragraph",
        text: "Pendant dix ans, dans différentes entreprises, j'ai été ce profil. Je pensais sincèrement que ma capacité à tout porter prouvait ma valeur. C'était faux. Et il m'a fallu un effondrement pour le comprendre.",
      },
    ],
    ceQueJaiFait: [
      { type: "heading", text: "Le pacte que j'ai signé avec moi-même" },
      {
        type: "paragraph",
        text: "Quand tu entres dans un environnement où le numérique est encore peu structuré, et que tu sais faire, un pacte se noue, pas avec l'entreprise, mais avec toi-même. Tu te dis : je vais prouver. Je vais prendre ce périmètre, et tout ce qui déborde avec.",
      },
      { type: "heading", text: "Ce que je portais, concrètement" },
      {
        type: "paragraph",
        text: "Pendant plusieurs années, j'ai occupé un poste de responsabilité digitale dans une organisation où le numérique était encore peu structuré : créer de zéro une présence e-commerce, lancer des canaux de vente, ouvrir des partenariats, piloter des intégrations techniques. Le tout avec une équipe réduite à sa plus simple expression : moi.",
      },
      {
        type: "paragraph",
        text: "Je faisais le travail de plusieurs personnes, avec le titre d'une seule et le budget d'aucune. Quand tu fais bien le travail de trois, on ne te donne pas deux collègues. On te donne un quatrième dossier. Et je le prenais, à chaque fois.",
      },
    ],
    ceQuiSestPasse: [
      { type: "heading", text: "Le signal que j'ai refusé d'entendre" },
      {
        type: "paragraph",
        text: "À un moment de grande vulnérabilité personnelle, j'ai senti que ma place dans l'organisation n'était plus évidente, pas à cause d'un événement brutal, mais par accumulation de micro-signaux. Mon réflexe a été celui de toujours : compenser, serrer les dents, me dire que ça allait s'arranger.",
      },
      { type: "heading", text: "Le retour, et la désillusion" },
      {
        type: "paragraph",
        text: "Après une absence de plusieurs mois, je suis revenue, fatiguée mais déterminée à reprendre ma place. Sauf que le décalage ressenti avant mon départ s'était amplifié. Chaque initiative me coûtait plus d'énergie que jamais.",
      },
      { type: "heading", text: "La séparation, et ce qu'elle m'a révélé" },
      {
        type: "paragraph",
        text: "J'ai vécu la séparation professionnelle comme un mélange de soulagement et de honte. Épuisement professionnel. Arrêt. Puis départ. Je n'étais pas seulement en difficulté dans un cadre exigeant : j'ai aussi participé, par mes propres mécanismes, à me placer dans une position intenable.",
      },
    ],
    ceQueJenConclus: [
      { type: "heading", text: "Le mythe, démonté" },
      {
        type: "paragraph",
        text: "L'endurance n'est pas une compétence. C'est une ressource, et comme toute ressource, elle s'épuise. Confondre les deux, c'est croire que tu vaux ce que tu supportes. C'est faux : ta valeur, c'est ce que tu sais faire, ce que tu construis, pas le nombre d'heures que tu tiens debout.",
      },
      {
        type: "paragraph",
        text: "Le plus dangereux dans ce mécanisme, ce n'est pas le cadre professionnel. C'est l'histoire que tu te racontes pour y rester : celle où tu es irremplaçable, où tout ira mieux si tu tiens juste un peu plus longtemps. Cette histoire est un mythe. Et ce mythe m'a coûté ma santé.",
      },
      {
        type: "quote",
        text: "Si tu es cette personne qui « gère », demande-toi ce que ça te coûte. Et demande-toi surtout : est-ce que tu tiens parce que tu construis quelque chose, ou est-ce que tu tiens parce que tu ne sais plus comment t'arrêter ?",
      },
      {
        type: "paragraph",
        text: "Yasmine, maman de deux enfants. Dix ans d'e-commerce. Complice involontaire d'un mythe qui récompense l'endurance, jamais la lucidité.",
      },
    ],
  },
  {
    slug: "le-manifeste-du-journal-crocodile",
    titre: "Le Manifeste du Journal Crocodile",
    format: "experience",
    rubrique: "le-journal",
    date: "2026-01-23",
    derniereMiseAJour: "2026-01-23",
    auteur: "Yasmine",
    excerpt:
      "Le texte fondateur du site, publié avant même le premier coup de peinture. Une archive : le burn-out est un chapitre, pas une marque.",
    tags: ["archive", "récit"],
    coverImage: null,
    archive: true,
    contexte: [
      {
        type: "paragraph",
        text: "Si on m'avait dit, il y a encore quelques mois, que j'en arriverais à un burn-out après m'être donnée corps et âme pour une société… je ne l'aurais pas cru.",
      },
      {
        type: "paragraph",
        text: "J'ai passé neuf ans à monter des murs, à sécuriser des systèmes et à porter des projets de croissance à bout de bras. J'ai cru que ma valeur était égale à ma résistance.",
      },
      { type: "paragraph", text: "Mais le corps a une vérité que la tête refuse d'entendre." },
      {
        type: "paragraph",
        text: "Pourquoi Journal Crocodile ? Parce que le crocodile est un survivant millénaire. Il ne s'agite pas. Il ne cherche pas à prouver sa force par le bruit. Pendant trop longtemps, j'ai été un crocodile en alerte, les yeux rivés sur le danger. Aujourd'hui, je choisis la rive.",
      },
      {
        type: "paragraph",
        text: "Ici, on ne va pas seulement parler de travaux et de décoration. On va parler de la reconstruction d'un sanctuaire.",
      },
    ],
    ceQueJenConclus: [
      {
        type: "paragraph",
        text: "Je n'écris pas pour vous montrer une vie parfaite façon catalogue. J'écris pour documenter le passage du mode « survie » au mode « vie ».",
      },
      {
        type: "paragraph",
        text: "Bienvenue sur la rive. On ne va pas juste rénover une maison, on va construire une liberté.",
      },
    ],
  },
  {
    slug: "budget-reel-premiers-mois-de-chantier",
    titre: "Le budget réel des premiers mois de chantier",
    format: "experience",
    rubrique: "la-maison",
    chantier: "renover-la-maison",
    date: "2026-04-02",
    derniereMiseAJour: "2026-04-02",
    auteur: "Yasmine",
    chapo: "Chiffres à l'appui, sans filtre esthétique.",
    excerpt:
      "Ce que coûte vraiment un début de rénovation quand on additionne les devis, les imprévus et les envies qu'on n'avait pas prévues.",
    tags: ["rénovation", "budget"],
    coverImage: null,
    placeholder: true,
    contexte: [
      {
        type: "paragraph",
        text: "Contenu de démonstration : la structure (budget prévisionnel, dérapages, preuves chiffrées) est prête, les vraies données restent à saisir.",
      },
    ],
    ceQueJenConclus: [
      {
        type: "list",
        style: "bullet",
        items: [
          "Le tableau de budget réel, poste par poste",
          "Les trois erreurs qui ont coûté le plus cher",
          "Ce qu'on garderait, ce qu'on referait",
        ],
      },
    ],
  },
  {
    slug: "je-construis-aurora",
    titre: "Je construis Aurora",
    format: "experience",
    rubrique: "latelier",
    chantier: "construire-aurora",
    date: "2026-04-10",
    derniereMiseAJour: "2026-04-10",
    auteur: "Yasmine",
    chapo: "Les coulisses de création d'une intelligence personnelle.",
    excerpt:
      "Apprendre à coder pour construire l'outil qu'on n'a trouvé nulle part ailleurs, et documenter chaque étape, y compris les ratés.",
    tags: ["ia", "code", "produit"],
    coverImage: null,
    placeholder: true,
    contexte: [
      {
        type: "paragraph",
        text: "Contenu de démonstration : la structure éditoriale est prête (contexte, décisions techniques, ce qui échoue), le contenu réel sur Aurora reste à écrire.",
      },
    ],
    ceQueJenConclus: [
      {
        type: "paragraph",
        text: "À venir : pourquoi construire plutôt qu'utiliser un outil existant, et ce qui a déjà changé de direction.",
      },
    ],
  },
  {
    slug: "tester-plusieurs-pistes-a-la-fois",
    titre: "Tester plusieurs pistes à la fois, sans se disperser",
    format: "experience",
    rubrique: "le-bureau",
    chantier: "nouveau-modele-economique",
    date: "2026-03-20",
    derniereMiseAJour: "2026-03-20",
    auteur: "Yasmine",
    excerpt:
      "Contenu, e-commerce, objets, immobilier : comment tester plusieurs modèles économiques en parallèle sans perdre le fil.",
    tags: ["entrepreneuriat", "business"],
    coverImage: null,
    placeholder: true,
    contexte: [
      {
        type: "paragraph",
        text: "Contenu de démonstration. Les pistes réellement testées, les résultats et les abandons restent à documenter au fur et à mesure.",
      },
    ],
    ceQueJenConclus: [{ type: "paragraph", text: "À venir." }],
  },
  {
    slug: "ce-que-racontent-les-objets-quon-rapporte",
    titre: "Ce que racontent les objets qu'on rapporte",
    format: "experience",
    rubrique: "ailleurs",
    date: "2026-03-28",
    derniereMiseAJour: "2026-03-28",
    auteur: "Yasmine",
    excerpt:
      "D'un marché à Kinshasa à une brocante au Portugal, comment un objet trouvé ailleurs finit par raconter une maison entière.",
    tags: ["voyage", "objets", "afrique"],
    coverImage: null,
    placeholder: true,
    contexte: [
      { type: "paragraph", text: "Contenu de démonstration. Le contenu réel sur le sourcing d'objets reste à écrire." },
    ],
    ceQueJenConclus: [{ type: "paragraph", text: "À venir." }],
  },
];

export function getExperiences(): Experience[] {
  return [...experiences].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getExperienceBySlug(slug: string): Experience | undefined {
  return experiences.find((e) => e.slug === slug);
}

export function getExperiencesByRubrique(rubrique: string): Experience[] {
  return getExperiences().filter((e) => e.rubrique === rubrique);
}

export function getExperiencesByChantier(chantier: string): Experience[] {
  return getExperiences().filter((e) => e.chantier === chantier);
}
