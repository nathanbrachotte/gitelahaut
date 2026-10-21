export const NAME = "Gîte Là-Haut";
export const SHORT_NAME = "Là-Haut";
export const PHONE_NUMBER = "+33 6 51 47 97 43";
export const WEBSITE_ADDRESS = "https://gitelahaut.com";
export const ADDRESS = "102 Grande Rue, 25300 Les Fourgs";
export const EMAIL = "gite.larandonnee25+lahaut@gmail.com";

export const MAX_PERSONS = 6;

export const GEO = { latitude: 46.8335498, longitude: 6.411368 };

const SUMMER_WEEK = { period: "Vacances d'été", price: 550 };

const WEEKEND_ROWS = [
  { period: "Week-end en été (2 nuits)", price: 350 },
  { period: "Week-end en hiver (2 nuits)", price: 400 },
  { period: "Long week-end (3 nuits)", price: 450 },
];

const WEEK_GROUPS = [
  {
    title: "Semaine, vacances scolaires",
    rows: [
      { period: "Vacances de Pâques", price: 450 },
      SUMMER_WEEK,
      { period: "Vacances de Toussaint", price: 450 },
      { period: "Vacances de Noël", price: 800 },
      { period: "Vacances de février", price: 800 },
    ],
  },
  {
    title: "Semaine, hors vacances scolaires",
    rows: [
      { period: "Janvier, février, mars", price: 600 },
      { period: "Mai, juin et septembre", price: 450 },
      { period: "Octobre, novembre, décembre", price: 450 },
    ],
  },
];

/** Prices shown on /disponibilites/ */
export const PRICE_GROUPS = [
  ...WEEK_GROUPS,
  { title: "Week-end", rows: WEEKEND_ROWS },
];

const WEEK_PRICES = WEEK_GROUPS.flatMap((group) =>
  group.rows.map((row) => row.price),
);
const WEEKEND_PRICES = WEEKEND_ROWS.map((row) => row.price);

export const PRICES = {
  WEEK_FROM: Math.min(...WEEK_PRICES),
  WEEK_TO: Math.max(...WEEK_PRICES),
  WEEKEND_FROM: Math.min(...WEEKEND_PRICES),
};

export const PRICE_EXTRAS = [
  {
    label: "Charges, serviettes de toilette et location de draps",
    value: "compris dans le prix",
  },
  { label: "Taxe de séjour", value: "0,99 € par nuit et par adulte" },
  { label: "Forfait ménage", value: "60 €, ajouté au contrat" },
];

/** Driving distances from 102 Grande Rue (OpenStreetMap routing, October 2026) */
export const DISTANCES = [
  { name: "Station de ski des Fourgs", distance: "500 m", duration: "à pied" },
  { name: "Château de Joux", distance: "10 km", duration: "15 min" },
  {
    name: "Métabief (station de ski)",
    distance: "10 km",
    duration: "15-20 min",
  },
  { name: "Pontarlier", distance: "12 km", duration: "15 min" },
  {
    name: "Sainte-Croix / Les Rasses (Suisse)",
    distance: "14 km",
    duration: "20 min",
  },
  {
    name: "Lac de Saint-Point (Malbuisson)",
    distance: "15 km",
    duration: "20 min",
  },
  {
    name: "Gare TGV de Frasne (Paris-Lausanne)",
    distance: "30 km",
    duration: "35 min",
  },
  { name: "Lausanne", distance: "56 km", duration: "1 h" },
  { name: "Besançon", distance: "70 km", duration: "1 h 15" },
  { name: "Aéroport de Genève", distance: "103 km", duration: "1 h 30" },
];

export const GITE_FACTS: {
  label: string;
  value: string;
  icon: string;
  href?: string;
  linkLabel?: string;
}[] = [
  { label: "Capacité", icon: "users", value: `${MAX_PERSONS} personnes` },
  {
    label: "Chambres",
    icon: "bed",
    value: "2 chambres : 1 lit double, 1 chambre avec 4 lits",
  },
  { label: "Salle de bain", icon: "bath", value: "1 salle de bain" },
  {
    label: "Accès",
    icon: "door",
    value: "2e étage, entrée indépendante, sans ascenseur",
  },
  { label: "Classement", icon: "star", value: "Meublé de tourisme 2 étoiles" },
  {
    label: "Altitude",
    icon: "mountain",
    value: "1200 m, exposition plein sud",
  },
  {
    label: "Inclus",
    icon: "sparkles",
    value: "Wifi, draps et serviettes de toilette",
  },
  { label: "Parking", icon: "car", value: "Parking pour 2 voitures" },
  {
    label: "Règles",
    icon: "noSmoking",
    value: "Non-fumeur, animaux non admis",
  },
  {
    label: "Arrivée / départ",
    icon: "clock",
    href: "/disponibilites/#horaires",
    linkLabel: "Horaires week-end",
    value: "Semaine : samedi dès 16h, départ 10h",
  },
  {
    label: "Tarifs",
    icon: "euro",
    href: "/disponibilites/#tarifs",
    linkLabel: "Voir tous les tarifs",
    value: `Semaine dès ${PRICES.WEEK_FROM} €, week-end dès ${PRICES.WEEKEND_FROM} €`,
  },
  {
    label: "À proximité",
    icon: "pin",
    value:
      "Station des Fourgs à 500 m, Métabief à 10 min en voiture, frontière suisse",
  },
  {
    label: "Ski de fond",
    icon: "snow",
    value: "Pistes accessibles depuis le jardin",
  },
];

/** Room-by-room description shown on /plan-du-gite/ (from public/gite/plan.webp) */
export const ROOM_DETAILS = {
  intro:
    "Le Gîte Là-Haut accueille jusqu'à 6 personnes au 2e étage de notre maison, avec une entrée indépendante.",
  sections: [
    {
      title: "Chambres et couchages",
      items: [
        { name: "Chambre de 4", detail: "2 lits superposés" },
        { name: "Chambre de 2", detail: "1 lit double" },
        { name: "Salon", detail: "1 canapé-lit" },
      ],
    },
    {
      title: "Pièces de vie",
      items: [
        {
          name: "Cuisine équipée",
          detail: "plaques de cuisson, évier et réfrigérateur",
        },
        { name: "Salle à manger", detail: "table pour 6 personnes" },
        { name: "Salon", detail: "coin canapé et télévision" },
      ],
    },
    {
      title: "Salle d'eau",
      items: [
        { name: "Salle d'eau", detail: "douche et lavabo" },
        { name: "WC séparé" },
      ],
    },
  ],
};

export const FAQ = [
  {
    question: "Combien de personnes peut accueillir le gîte ?",
    answer:
      "Jusqu'à 6 personnes, dans 2 chambres : une chambre avec un lit double et une chambre avec 4 lits. Le gîte a une salle de bain.",
  },
  {
    question: "Comment accède-t-on au gîte ?",
    answer:
      "Le gîte est au 2e étage d'une maison, avec une entrée indépendante. Il n'y a pas d'ascenseur.",
  },
  {
    question: "Les draps et serviettes sont-ils fournis ?",
    answer:
      "Oui, les draps et les serviettes de toilette sont compris pour 6 personnes, ainsi que le wifi. Un kit literie supplémentaire coûte 8 € par lit de 90 et 16 € par lit de 140. Les sacs de couchage sont interdits.",
  },
  {
    question: "Les animaux sont-ils acceptés ?",
    answer: "Non, les animaux ne sont pas admis dans le gîte.",
  },
  {
    question: "Quels sont les horaires d'arrivée et de départ ?",
    answer:
      "À la semaine : arrivée le samedi à partir de 16h, départ avant 10h. En week-end : arrivée le vendredi à partir de 16h, départ le dimanche avant 17h.",
  },
  {
    question: "Le ménage est-il compris ?",
    answer:
      "Le forfait ménage de fin de séjour est de 60 € et sera ajouté au contrat. Merci de rendre le gîte rangé, poubelles vidées et draps retirés des lits. Une taxe de séjour de 0,99 € par nuit et par adulte s'ajoute au prix.",
  },
  {
    question: "Comment réserver ?",
    answer:
      "Par e-mail, sans frais ajoutés, avec le formulaire de la page Réserver. Nous vous répondons dans les plus brefs délais.",
    link: { href: "/disponibilites/", label: "Réserver par e-mail" },
  },
  {
    question: "Y a-t-il le wifi et un parking ?",
    answer:
      "Oui, le wifi est inclus et le gîte dispose d'un parking pour 2 voitures.",
  },
  {
    question: "Peut-on skier depuis le gîte ?",
    answer:
      "Oui. Les pistes de ski de fond partent du jardin, la station de ski des Fourgs est à 500 m et la station de Métabief à 10 km.",
  },
  {
    question: "Comment venir au gîte ?",
    answer:
      "Le gîte est au 102 Grande Rue aux Fourgs, à 12 km de Pontarlier. La gare TGV la plus proche est Frasne (ligne Paris-Lausanne), à 30 km. Lausanne est à environ 1 h et l'aéroport de Genève à 1 h 30.",
  },
  {
    question: "Peut-on fumer dans le gîte ?",
    answer:
      "Non, le gîte est non-fumeur. Un espace fumeur est prévu à l'extérieur.",
  },
  {
    question: "Nous sommes plus de 6, avez-vous une autre solution ?",
    answer:
      "Le Gîte La Randonnée, à la même adresse, accueille jusqu'à 14 personnes. Contactez-nous pour réserver les deux.",
    link: {
      href: "https://gitelarandonnee.fr/",
      label: "Découvrir le Gîte La Randonnée",
    },
  },
];

export const IMAGES = {
  BEDROOM_DOUBLE_BED: {
    url: "/gite/bedroom-double-bed.webp",
    alt: "Chambre avec lit double du Gîte Là-Haut",
    caption: "Chambre avec lit double",
    width: 1600,
    height: 1200,
  },
  EXTERIEUR_NEIGE_GRAND: {
    url: "/gite/exterieur-neige-grand.webp",
    alt: "Jardin enneigé du gîte aux Fourgs en hiver",
    caption: "Le jardin enneigé",
    width: 911,
    height: 684,
  },
  EXTERIEUR_SKI_DE_FOND: {
    url: "/gite/exterieur-ski-de-fond.webp",
    alt: "Piste de ski de fond au départ du jardin du gîte",
    caption: "Piste de ski de fond",
    width: 1200,
    height: 1600,
  },
  KITCHEN: {
    url: "/gite/kitchen.webp",
    alt: "Cuisine équipée du Gîte Là-Haut",
    caption: "Cuisine",
    width: 1600,
    height: 1200,
  },
  LIVING_ROOM_2: {
    url: "/gite/living-room-2.webp",
    alt: "Salon vintage avec canapé du Gîte Là-Haut",
    caption: "Salon",
    width: 1600,
    height: 1200,
  },
  LIVING_ROOM: {
    url: "/gite/living-room.webp",
    alt: "Salon et coin repas du Gîte Là-Haut aux Fourgs",
    caption: "Salon",
    width: 1600,
    height: 1200,
  },
  ROOM_4_BEDS: {
    url: "/gite/room-4-beds.webp",
    alt: "Chambre avec 4 lits",
    caption: "Chambre avec 4 lits",
    width: 1600,
    height: 1200,
  },
  TV_AREA: {
    url: "/gite/tv-area.webp",
    alt: "Espace détente avec télévision",
    caption: "Espace détente",
    width: 1600,
    height: 1200,
  },
  VUE_EXTERIEURE: {
    url: "/gite/vue-exterieure.webp",
    alt: "Façade de la maison du Gîte Là-Haut aux Fourgs",
    caption: "Vue extérieure",
    width: 1202,
    height: 1600,
  },
  ENTREE: {
    url: "/gite/entree.webp",
    alt: "Entrée indépendante du gîte",
    caption: "Entrée",
    width: 1200,
    height: 1600,
  },
  LES_FOURGS_LES_RANGS: {
    url: "/les-fourgs-les-rangs.webp",
    alt: "Les Rangs à 1km du Gîte",
    caption: "Les Rangs à 1km du Gîte",
    width: 1600,
    height: 1200,
  },
  METABIEF_FONDUE: {
    url: "/metabief-fondue.webp",
    alt: "Fondue à Métabief",
    width: 1600,
    height: 1294,
  },
  METABIEF_VIEW: {
    url: "/metabief-view.webp",
    alt: "Vue sur les Alpes depuis Métabief",
    caption: "Les Alpes depuis Métabief",
    width: 1600,
    height: 1200,
  },
  ORNANS_ETE: {
    url: "/ornans.webp",
    alt: "Ornans en été",
    caption: "Ornans en été",
    width: 1600,
    height: 1200,
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
  IMAGES.METABIEF_FONDUE,
  IMAGES.METABIEF_VIEW,
];

export const LINKS = {
  LA_RANDONNEE: {
    url: "https://gitelarandonnee.fr/",
    maps: "https://maps.app.goo.gl/YNhS2GD18NEDYzoy6",
  },
  LES_RANGS: {
    url: "https://station-lesfourgs.fr/",
    maps: "https://maps.app.goo.gl/YV13tJYWUpUH9V1x7",
  },
  PLAN_PISTES_LES_FOURGS: {
    url: "http://www.skiinfo.fr/jura/les-fourgs/plans-des-pistes",
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
    url: "https://www.facebook.com/larandonnee.lesfourgs",
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
  LES_RASSES: {
    url: "https://www.stations-de-ski.ch/stations-de-ski-vaudoises/station-de-ski-sainte-croix-les-rasses/",
  },
  GITE_LA_HAUT: {
    reviewUrl: "https://maps.app.goo.gl/qMUVEo7cDwtYHdhZ8",
    maps: "https://maps.app.goo.gl/tVdBEsWJFt4T7SuPA",
  },
} as const;

export const SEO_META = {
  INDEX: {
    title: "Gîte Là-Haut | Location 6 personnes aux Fourgs, près de Métabief",
    description:
      "Gîte 2 étoiles pour 6 personnes aux Fourgs (Doubs), à 10 min de Métabief. Ski de fond depuis le jardin, randonnée en été. Réservation directe sans frais.",
  },
  ERROR: {
    title: "Page non trouvée | Gîte Là-Haut aux Fourgs",
    description:
      "La page que vous cherchez n'existe pas. Retournez à l'accueil pour découvrir notre gîte dans le Doubs.",
  },
  DECOUVRIR: {
    title: "Activités aux Fourgs et à Métabief | Gîte Là-Haut, Doubs",
    description:
      "Ski alpin et de fond, raquettes, VTT, lac Saint-Point, château de Joux : que faire autour du Gîte Là-Haut aux Fourgs, été comme hiver.",
  },
  CONDITION_GENERALE_LOCATION: {
    title: "Conditions générales de location | Gîte Là-Haut aux Fourgs",
    description:
      "Consultez les conditions générales de location du Gîte Là-Haut, hébergement pour 6 personnes aux Fourgs, dans le Doubs.",
  },
  DISPONIBILITES_TARIFS: {
    title: "Réserver/Disponibilités | Gîte Là-Haut aux Fourgs, Doubs",
    description:
      "Tarifs et disponibilités du Gîte Là-Haut aux Fourgs (6 personnes). Semaine dès 450 €, week-end dès 350 €. Réservation directe par e-mail, sans frais.",
  },
  MENTIONS_LEGALES: {
    title: "Mentions légales | Gîte Là-Haut aux Fourgs, Doubs",
    description:
      "Informations légales concernant le Gîte Là-Haut, hébergement de vacances pour 6 personnes aux Fourgs, dans le Doubs.",
  },
  PLAN_DU_GITE: {
    title: "Plan du Gîte Là-Haut | 2 chambres, 6 personnes aux Fourgs",
    description:
      "Plan du Gîte Là-Haut aux Fourgs : 2 chambres (1 lit double, 1 chambre de 4 lits), 1 salle de bain, au 2e étage avec entrée indépendante.",
  },
  AVIS: {
    title: "Votre avis nous intéresse | Gîte Là-Haut",
    description:
      "Partagez votre expérience au Gîte Là-Haut. Votre avis nous aide à améliorer nos services.",
  },
};
