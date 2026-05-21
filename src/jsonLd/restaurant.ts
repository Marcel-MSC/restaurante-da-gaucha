import {
  SITE_ORIGIN,
  IFOOD_URL,
  INSTAGRAM_URL,
  MAPS_URL,
} from "../siteConstants";

export const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": `${SITE_ORIGIN}/#restaurant`,
  name: "Restaurante da Gaucha",
  url: `${SITE_ORIGIN}/`,
  sameAs: [INSTAGRAM_URL, IFOOD_URL],
  hasMap: MAPS_URL,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Júlio Alfredo Manuel, 41",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    postalCode: "03336-030",
    addressCountry: "BR",
  },
  areaServed: "Vila Regente Feijó",
  geo: {
    "@type": "GeoCoordinates",
    latitude: -23.5533509,
    longitude: -46.5611696,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "11:00",
      closes: "15:00",
    },
  ],
  servesCuisine: "Brazilian",
  priceRange: "$$",
  image: `${SITE_ORIGIN}/favicon-restaurante-gaucha.svg`,
  logo: `${SITE_ORIGIN}/favicon-restaurante-gaucha.svg`,
} as const;
