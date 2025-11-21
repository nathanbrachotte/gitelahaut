export const NAME = "Gîte La-Haut";
export const SHORT_NAME = "La-Haut";
export const PHONE_NUMBER = "+33 6 51 47 97 43";
export const WEBSITE_ADDRESS = "https://gitelahaut.com";
export const ADDRESS = "102 Grande Rue, 25300 Les Fourgs";
export const EMAIL = "gite.larandonnee25@gmail.com";

export const MAX_PERSONS = 6;

export const IMAGES = {
  BEDROOM_DOUBLE_BED: {
    url: "/gite/bedroom-double-bed.webp",
    alt: "Chambre avec lit double",
    caption: "Chambre avec lit double",
  },
  EXTERIEUR_NEIGE_GRAND: {
    url: "/gite/exterieur-neige-grand.webp",
    alt: "Extérieur enneigé",
    caption: "Le jardin enneigé",
  },
  EXTERIEUR_SKI_DE_FOND: {
    url: "/gite/exterieur-ski-de-fond.webp",
    alt: "Extérieur ski de fond",
    caption: "Piste de ski de fond",
  },
  KITCHEN: {
    url: "/gite/kitchen.webp",
    alt: "Cuisine",
    caption: "Cuisine",
  },
  LIVING_ROOM_2: {
    url: "/gite/living-room-2.webp",
    alt: "Salon",
    caption: "Salon",
  },
  LIVING_ROOM: {
    url: "/gite/living-room.webp",
    alt: "Salon",
    caption: "Salon",
  },
  ROOM_4_BEDS: {
    url: "/gite/room-4-beds.webp",
    alt: "Chambre avec 4 lits",
    caption: "Chambre avec 4 lits",
  },
  TV_AREA: {
    url: "/gite/tv-area.webp",
    alt: "Espace télévision",
    caption: "Espace détente",
  },
  VUE_EXTERIEURE: {
    url: "/gite/vue-exterieure.webp",
    alt: "Vue extérieure",
    caption: "Vue extérieure",
  },
  ENTREE: {
    url: "/gite/entree.webp",
    alt: "Entrée",
    caption: "Entrée",
  },
  LES_FOURGS_LES_RANGS: {
    url: "/les-fourgs-les-rangs.webp",
    alt: "Les Rangs à 1km du Gîte",
    caption: "Les Rangs à 1km du Gîte",
  },
  METABIEF_NEIGE: {
    url: "/metabief-neige.webp",
    alt: "Station de ski de Métabief",
    caption: "Station de ski de Métabief",
  },
  METABIEF_FONDUE: {
    url: "/metabief-fondue.webp",
    alt: "Fondue à Métabief",
  },
  METABIEF_VIEW: {
    url: "/metabief-view.webp",
    alt: "Vue sur les Alpes depuis Métabief",
    caption: "Les Alpes depuis Métabief",
  },
  ORNANS_ETE: {
    url: "/ornans.webp",
    alt: "Ornans en été",
    caption: "Ornans en été",
  },
};

export const GALLERY = [
  IMAGES.BEDROOM_DOUBLE_BED,
  IMAGES.EXTERIEUR_NEIGE_GRAND,
  IMAGES.EXTERIEUR_SKI_DE_FOND,
  IMAGES.KITCHEN,
  IMAGES.LIVING_ROOM_2,
  IMAGES.LIVING_ROOM,
  IMAGES.ROOM_4_BEDS,
  IMAGES.TV_AREA,
  IMAGES.VUE_EXTERIEURE,
  IMAGES.ENTREE,
  IMAGES.LES_FOURGS_LES_RANGS,
  IMAGES.METABIEF_NEIGE,
  IMAGES.METABIEF_FONDUE,
  IMAGES.METABIEF_VIEW,
];

export const LINKS = {
  LA_RANDONNEE: {
    url: "https://www.gitelarandonnee.fr/",
    maps: "https://maps.app.goo.gl/YNhS2GD18NEDYzoy6",
  },
  LES_RANGS: {
    url: "https://station-lesfourgs.fr/",
    maps: "https://maps.app.goo.gl/YV13tJYWUpUH9V1x7",
  },
  VIE_FRANCIGENE: {
    url: "https://www.viefrancigene.org/fr/",
  },
  LA_COUPE: {
    url: "https://maps.app.goo.gl/B2TySGZj9FmrR8828",
    discGolfUrl: "https://udisc.com/courses/parcours-aventure-disc-golf-l48s",
  },
  METABIEF: {
    maps: "https://g.co/kgs/zn23rn5",
  },
  ST_POINT: {
    maps: "https://maps.app.goo.gl/FfjS1SdSeWn4Uq9HA",
  },
  JOUX: {
    maps: "https://g.co/kgs/J536vFi",
  },
  OFFICE_DE_TOURISME: {
    maps: "https://maps.app.goo.gl/oxYb4H9ca2pZFcAZ8",
  },
  GTJ: {
    url: "https://www.gtj.asso.fr/en/",
  },
  VIA_FRANCIGENA: {
    url: "https://www.viefrancigene.org/en/",
  },
  GR5: {
    url: "https://www.grande-traversee-alpes.com/",
  },
  BOURGOGNE_FRANCHE_COMTE: {
    escalade_url:
      "https://www.bourgognefranchecomte.com/activites/en-hauteur/escalade-via-ferrata/",
  },
  FACEBOOK: {
    url: "https://www.facebook.com/gitelahaut.lesfourgs",
  },
  METABIEF_ADVENTURE: {
    url: "https://www.metabiefaventures.fr/",
  },
  OFFICE_TOURISME_GITE: {
    url: "https://www.destination-haut-doubs.com/reservation/gite-la-haut.html",
  },
  EXPLORE_DOUBS: {
    url: "https://explore.doubs.fr/",
  },
  INTRAMUROS: {
    url: "https://www.intramuros.org/lesfourgs",
  },
  SINGLE_TRACK: {
    url: "https://www.destination-haut-doubs.com/pumptrack-singletrack.html",
  },
} as const;

export const SEO_META = {
  INDEX: {
    title: "Gîte La-Haut | Les Fourgs, Doubs - Hébergement jusqu'à 6 personnes",
    description:
      "Découvrez le Gîte La-Haut aux Fourgs, un hébergement convivial pour 6 personnes au cœur des montagnes du Jura dans le Doubs. Idéal pour les vacances en famille, la randonnée en été, le ski de fond et alpin en hiver.",
  },
  ERROR: {
    title: "Page non trouvée | Gîte La-Haut aux Fourgs",
    description:
      "La page que vous cherchez n'existe pas. Retournez à l'accueil pour découvrir notre gîte dans le Doubs.",
  },
  DECOUVRIR: {
    title: "Activités été et hiver | Gîte La-Haut aux Fourgs, Doubs",
    description:
      "Découvrez les activités variées autour du Gîte La-Haut aux Fourgs : randonnée, ski de fond, ski alpin, raquettes, escalade et lacs en été. Un paradis pour les sportifs en toute saison dans le Doubs.",
  },
  CONDITION_GENERALE_LOCATION: {
    title: "Conditions Générales de Location | Gîte La-Haut aux Fourgs",
    description:
      "Consultez les conditions générales de location du Gîte La-Haut, hébergement pour 6 personnes aux Fourgs, dans le Doubs.",
  },
  DISPONIBILITES_TARIFS: {
    title: "Reserver | Gîte La-Haut aux Fourgs, Doubs",
    description:
      "Réservez votre séjour au Gîte La-Haut aux Fourgs. Consultez nos disponibilités et tarifs pour un hébergement de 6 personnes dans le Doubs.",
  },
  MENTIONS_LEGALES: {
    title: "Mentions Légales | Gîte La-Haut aux Fourgs, Doubs",
    description:
      "Informations légales concernant le Gîte La-Haut, hébergement de vacances pour 6 personnes aux Fourgs, dans le Doubs.",
  },
  PLAN_DU_GITE: {
    title: "Plan du Gîte | La-Haut aux Fourgs - Hébergement 6 personnes",
    description:
      "Découvrez le plan détaillé du Gîte La-Haut, un hébergement convivial pour 6 personnes aux Fourgs, dans les montagnes du Jura (Doubs).",
  },
};
