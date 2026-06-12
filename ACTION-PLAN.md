# SEO Action Plan - Bhavesh Electrician

## Done In This Pass

1. Componentized homepage into reusable sections and shared business data.
2. Added `robots.ts`, `sitemap.ts`, `manifest.ts`, `llms.txt`, and structured JSON-LD.
3. Added canonical, Open Graph, Twitter card, local geo metadata, and crawler directives.
4. Optimized source images and switched page usage to `next/image` with Next 16 `preload`.
5. Added image config for AVIF/WebP and security headers in `next.config.ts`.
6. Improved form input autocomplete and phone validation.

## Before Deployment

1. Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS domain.
2. Confirm Google Business Profile NAP exactly matches: `Bhavesh Electrician, Adarsh Nagar, Bhosari, Pimpri-Chinchwad 411039, +91 77989 79678`.
3. Deploy on HTTPS and verify `/robots.txt`, `/sitemap.xml`, `/llms.txt`, and `/manifest.webmanifest`.

## After Deployment

1. Submit `/sitemap.xml` in Google Search Console.
2. Run PageSpeed Insights mobile and desktop for the deployed URL.
3. Test schema in Google Rich Results Test and Schema.org Validator.
4. Add focused service/location pages only when there is enough unique content, for example:
   - `/services/wiring-bhosari`
   - `/services/mcb-repair-bhosari`
   - `/services/emergency-electrician-bhosari`

## Ongoing

1. Keep review count/rating in schema aligned with visible Google reviews.
2. Add real work photos over time for stronger E-E-A-T and local trust.
3. Track calls, WhatsApp clicks, and enquiry submissions after launch.
