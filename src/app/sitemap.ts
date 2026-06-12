import type { MetadataRoute } from "next";

const getSiteUrl = () =>
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ||
  "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const lastModified = new Date();

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      images: [
        `${siteUrl}/images/optimized/hero-bhavesh-electrician.jpg`,
        `${siteUrl}/bhavesh-electrician-logo.png`,
      ],
    },
  ];
}
