import type { MetadataRoute } from "next";

const blockedPaths = ["/api/"];

const aiCrawlerUserAgents = [
  "GPTBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "anthropic-ai",
  "PerplexityBot",
  "Applebot-Extended",
  "Google-Extended",
  "Bytespider",
  "CCBot",
  "FacebookBot",
  "Amazonbot",
];

const getSiteUrl = () =>
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ||
  "http://localhost:3000";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: blockedPaths,
      },
      ...aiCrawlerUserAgents.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: blockedPaths,
      })),
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
