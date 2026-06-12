export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
).replace(/\/$/, "");

export const business = {
  name: "Bhavesh Electrician",
  fullName: "Bhavesh Electrician, Bhosari",
  description:
    "Bhavesh Electrician Bhosari: पुणे, PCMC आणि पिंपरी-चिंचवडमध्ये घर, दुकान, ऑफिस आणि सोसायटीसाठी 24 तास electrician service.",
  phoneDisplay: "077989 79678",
  phoneE164: "+917798979678",
  whatsappPhone: "917798979678",
  address: {
    street: "Adarsh Nagar, Bhosari",
    locality: "Pimpri-Chinchwad",
    region: "Maharashtra",
    postalCode: "411039",
    country: "IN",
  },
  ratingValue: "4.3",
  reviewCount: "6",
};

export const phoneHref = `tel:${business.phoneE164}`;

export const createWhatsappHref = (message: string) =>
  `https://wa.me/${business.whatsappPhone}?text=${encodeURIComponent(message)}`;

export const whatsappHref = createWhatsappHref(
  "नमस्कार Bhavesh Electrician, मला भोसरी/पुणे परिसरात इलेक्ट्रिशियन सेवा हवी आहे.",
);

export const directionsHref =
  "https://www.google.com/maps/search/?api=1&query=Bhavesh%20Electrician%20Adarsh%20Nagar%20Bhosari%20Pimpri-Chinchwad%20Maharashtra%20411039";

export const serviceAreaNames = [
  "भोसरी",
  "आदर्श नगर",
  "पिंपरी-चिंचवड",
  "चिखली",
  "मोशी",
  "निगडी",
  "आकुर्डी",
  "दिघी",
  "कासारवाडी",
  "पुणे शहर",
];

export const seoAreaServed = [
  "Pune",
  "Bhosari",
  "Pimpri-Chinchwad",
  "PCMC",
  "Adarsh Nagar Bhosari",
  "Chikhali",
  "Moshi",
  "Nigdi",
  "Akurdi",
  "Dighi",
  "Kasarwadi",
  "भोसरी",
  "पुणे",
  "पिंपरी-चिंचवड",
];

export const seoKeywords = [
  "electrician in Pune",
  "electrician near me Pune",
  "24 hours electrician Pune",
  "emergency electrician Pune",
  "electrician in Bhosari",
  "Bhosari electrician",
  "Pimpri Chinchwad electrician",
  "PCMC electrician",
  "house wiring electrician Pune",
  "MCB repair Pune",
  "MCB repair Bhosari",
  "switchboard repair Pune",
  "fan installation electrician Pune",
  "light fitting electrician Pune",
  "inverter electrician Pune",
  "earthing work Pune",
  "shop electrician Pune",
  "society electrician PCMC",
  "भोसरी इलेक्ट्रिशियन",
  "पुणे इलेक्ट्रिशियन",
  "पिंपरी चिंचवड इलेक्ट्रिशियन",
  "24 तास इलेक्ट्रिशियन पुणे",
];

export const seoServiceTypes = [
  "Electrical wiring",
  "Switchboard repair",
  "MCB repair",
  "ELCB RCCB service",
  "Fan installation",
  "Light fitting",
  "Inverter wiring",
  "Battery connection",
  "Earthing work",
  "Emergency electrical repair",
  "Shop electrical maintenance",
  "Society electrical maintenance",
];

export const seoServiceItems = [
  {
    name: "Wiring आणि switchboard repair",
    serviceType: "House wiring electrician Pune",
    description:
      "पुणे, भोसरी आणि PCMC मध्ये घर, फ्लॅट आणि दुकानांसाठी loose connection, switchboard, socket, new point आणि concealed wiring repair.",
  },
  {
    name: "MCB, ELCB आणि electrical panel service",
    serviceType: "MCB repair Pune",
    description:
      "MCB trip, ELCB/RCCB replacement, distribution board, meter board आणि load balancing तपासणी.",
  },
  {
    name: "Fan, light आणि fitting",
    serviceType: "Fan and light fitting electrician Pune",
    description:
      "Ceiling fan, LED panel, tube light, exhaust fan, chandelier आणि shop lighting installation.",
  },
  {
    name: "Inverter, battery आणि earthing",
    serviceType: "Inverter electrician and earthing work Pune",
    description:
      "Inverter line, battery terminal service, earthing, voltage check आणि backup power wiring.",
  },
  {
    name: "Shop, office आणि society electrical maintenance",
    serviceType: "Commercial electrician Pune PCMC",
    description:
      "Office wiring, shop points, signage line, common lights, pump starter आणि routine maintenance visits.",
  },
  {
    name: "24 तास emergency electrical repair",
    serviceType: "24 hours emergency electrician Pune",
    description:
      "Power failure, sparking, burning smell, main switch fault, short circuit आणि urgent safety repair.",
  },
];

export const absoluteUrl = (path: string) =>
  path.startsWith("http")
    ? path
    : `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;

const serviceOffer = (service: (typeof seoServiceItems)[number]) => ({
  "@type": "Offer",
  itemOffered: {
    "@type": "Service",
    name: service.name,
    serviceType: service.serviceType,
    description: service.description,
    areaServed: seoAreaServed.map((area) => ({
      "@type": "Place",
      name: area,
    })),
    provider: { "@id": `${siteUrl}/#business` },
  },
});

export const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: business.fullName,
    url: siteUrl,
    inLanguage: "mr-IN",
    publisher: { "@id": `${siteUrl}/#business` },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteUrl}/#webpage`,
    url: siteUrl,
    name: "Electrician in Pune & Bhosari | Bhavesh Electrician",
    description: business.description,
    keywords: seoKeywords.join(", "),
    inLanguage: "mr-IN",
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: { "@id": `${siteUrl}/#business` },
    mainEntity: { "@id": `${siteUrl}/#business` },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: absoluteUrl("/images/optimized/hero-bhavesh-electrician.jpg"),
      caption: "Bhavesh Electrician Bhosari electrician service in Pune and PCMC",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Electrician",
    "@id": `${siteUrl}/#business`,
    name: business.fullName,
    alternateName: business.name,
    description: business.description,
    slogan: "भोसरी, PCMC आणि पुणे परिसरासाठी 24 तास इलेक्ट्रिशियन सेवा",
    url: siteUrl,
    image: absoluteUrl("/images/optimized/hero-bhavesh-electrician.jpg"),
    logo: absoluteUrl("/bhavesh-electrician-logo.png"),
    telephone: business.phoneE164,
    priceRange: "INR",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI",
    hasMap: directionsHref,
    openingHours: "Mo-Su 00:00-23:59",
    keywords: seoKeywords.join(", "),
    knowsAbout: seoServiceTypes,
    serviceType: seoServiceTypes,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.locality,
      addressRegion: business.address.region,
      postalCode: business.address.postalCode,
      addressCountry: business.address.country,
    },
    areaServed: seoAreaServed.map((area) => ({
      "@type": "Place",
      name: area,
    })),
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
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: business.ratingValue,
      reviewCount: business.reviewCount,
      bestRating: "5",
      worstRating: "1",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Pune, Bhosari and PCMC electrical services",
      itemListElement: seoServiceItems.map(serviceOffer),
    },
    makesOffer: seoServiceItems.map(serviceOffer),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: business.phoneE164,
      contactType: "customer service",
      areaServed: "IN-MH",
      availableLanguage: ["mr", "hi", "en"],
    },
  },
];
