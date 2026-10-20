import {
  EMAIL,
  GEO,
  IMAGES,
  LINKS,
  MAX_PERSONS,
  NAME,
  PHONE_NUMBER,
  PRICES,
  WEBSITE_ADDRESS,
} from "@/data.constants";

const SITE_URL = `${WEBSITE_ADDRESS}/`;
const WEBSITE_ID = `${SITE_URL}#website`;
const RENTAL_ID = `${SITE_URL}#gite`;

const absolute = (path: string) => `${WEBSITE_ADDRESS}${path}`;

const website = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: NAME,
  url: SITE_URL,
  inLanguage: "fr-FR",
};

const vacationRental = {
  "@type": ["VacationRental", "LodgingBusiness"],
  "@id": RENTAL_ID,
  name: NAME,
  description:
    "Meublé de tourisme 2 étoiles d'inspiration vintage pour 6 personnes, au 2e étage d'une maison avec entrée indépendante, à 1200 m d'altitude aux Fourgs (Doubs), près de Métabief et de la frontière suisse.",
  url: SITE_URL,
  telephone: PHONE_NUMBER.replace(/\s/g, ""),
  email: EMAIL,
  image: [
    IMAGES.LIVING_ROOM.url,
    IMAGES.VUE_EXTERIEURE.url,
    IMAGES.KITCHEN.url,
    IMAGES.BEDROOM_DOUBLE_BED.url,
    IMAGES.ROOM_4_BEDS.url,
  ].map(absolute),
  address: {
    "@type": "PostalAddress",
    streetAddress: "102 Grande Rue",
    postalCode: "25300",
    addressLocality: "Les Fourgs",
    addressRegion: "Bourgogne-Franche-Comté",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: GEO.latitude,
    longitude: GEO.longitude,
  },
  hasMap: LINKS.GITE_LA_HAUT.maps,
  checkinTime: "16:00",
  checkoutTime: "10:00",
  petsAllowed: false,
  smokingAllowed: false,
  starRating: { "@type": "Rating", ratingValue: 2 },
  priceRange: `${PRICES.WEEKEND_FROM} € - 800 €`,
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Wifi gratuit", value: true },
    { "@type": "LocationFeatureSpecification", name: "Draps et serviettes fournis", value: true },
    { "@type": "LocationFeatureSpecification", name: "Cuisine équipée", value: true },
    { "@type": "LocationFeatureSpecification", name: "Jardin", value: true },
    { "@type": "LocationFeatureSpecification", name: "Télévision", value: true },
  ],
  sameAs: [LINKS.OFFICE_TOURISME_GITE.url],
  containsPlace: {
    "@type": "Accommodation",
    additionalType: "https://schema.org/Apartment",
    name: `${NAME} - logement entier`,
    occupancy: { "@type": "QuantitativeValue", maxValue: MAX_PERSONS },
    numberOfBedrooms: 2,
    numberOfBathroomsTotal: 1,
    floorLevel: "2",
    bed: [
      { "@type": "BedDetails", numberOfBeds: 1, typeOfBed: "Lit double" },
      { "@type": "BedDetails", numberOfBeds: 4, typeOfBed: "Lit" },
    ],
  },
};

export const getHomeSchema = () => ({
  "@context": "https://schema.org",
  "@graph": [website, vacationRental],
});

export const getPageSchema = ({
  name,
  url,
}: {
  name: string;
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@graph": [
    website,
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
        { "@type": "ListItem", position: 2, name, item: url },
      ],
    },
  ],
});
