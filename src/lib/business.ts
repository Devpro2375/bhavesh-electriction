export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
).replace(/\/$/, "");

export const business = {
  name: "Bhavesh Electrician",
  fullName: "Bhavesh Electrician, Bhosari",
  description:
    "भोसरी, पिंपरी-चिंचवड आणि पुणे परिसरात घर, दुकान, ऑफिस आणि सोसायटीसाठी 24 तास electrician service.",
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

export const seoServiceItems = [
  {
    name: "Wiring आणि switchboard repair",
    description:
      "घर, फ्लॅट आणि दुकानांसाठी loose connection, switchboard, socket आणि concealed wiring repair.",
  },
  {
    name: "MCB, ELCB आणि electrical panel service",
    description:
      "MCB trip, ELCB/RCCB replacement, distribution board आणि load balancing तपासणी.",
  },
  {
    name: "Fan, light आणि fitting",
    description:
      "Ceiling fan, LED panel, tube light, exhaust fan आणि shop lighting installation.",
  },
  {
    name: "Inverter, battery आणि earthing",
    description:
      "Inverter line, battery terminal service, earthing आणि voltage check.",
  },
  {
    name: "Shop, office आणि society electrical maintenance",
    description:
      "Office wiring, shop points, common lights, pump starter आणि routine maintenance visits.",
  },
  {
    name: "24 तास emergency electrical repair",
    description:
      "Power failure, sparking, burning smell, main switch fault आणि urgent safety repair.",
  },
];

export const absoluteUrl = (path: string) =>
  path.startsWith("http") ? path : `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;

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
      name: "Bhavesh Electrician, Bhosari | 24 तास Pune Electrician",
      description: business.description,
      inLanguage: "mr-IN",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#business` },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: absoluteUrl("/images/optimized/hero-bhavesh-electrician.jpg"),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Electrician",
      "@id": `${siteUrl}/#business`,
      name: business.fullName,
      alternateName: business.name,
      url: siteUrl,
      image: absoluteUrl("/images/optimized/hero-bhavesh-electrician.jpg"),
      logo: absoluteUrl("/bhavesh-electrician-logo.png"),
      telephone: business.phoneE164,
      priceRange: "INR",
      currenciesAccepted: "INR",
      paymentAccepted: "Cash, UPI",
      hasMap: directionsHref,
      address: {
        "@type": "PostalAddress",
        streetAddress: business.address.street,
        addressLocality: business.address.locality,
        addressRegion: business.address.region,
        postalCode: business.address.postalCode,
        addressCountry: business.address.country,
      },
      areaServed: serviceAreaNames.map((area) => ({
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
      makesOffer: seoServiceItems.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.description,
          areaServed: serviceAreaNames,
          provider: { "@id": `${siteUrl}/#business` },
        },
      })),
      contactPoint: {
        "@type": "ContactPoint",
        telephone: business.phoneE164,
        contactType: "customer service",
        areaServed: "IN-MH",
        availableLanguage: ["mr", "hi", "en"],
      },
    },
  ];
