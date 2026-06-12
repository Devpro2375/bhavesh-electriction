import type { Metadata } from "next";
import "@fontsource/mukta/400.css";
import "@fontsource/mukta/500.css";
import "@fontsource/mukta/600.css";
import "@fontsource/mukta/700.css";
import "@fontsource-variable/noto-sans-devanagari";
import "@fontsource-variable/noto-serif-devanagari";
import { absoluteUrl, business, seoKeywords, siteUrl } from "@/lib/business";
import "./globals.css";

const title = "Electrician in Pune & Bhosari | Bhavesh Electrician";
const description =
  "Bhavesh Electrician Bhosari: पुणे व PCMC मध्ये 24 तास electrician service. Wiring, MCB repair, switchboard, fan-light, inverter, earthing साठी फोन करा.";
const ogImage = "/images/optimized/hero-bhavesh-electrician.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: business.fullName,
  title: {
    default: title,
    template: `%s | ${business.name}`,
  },
  description,
  keywords: ["Bhavesh Electrician Bhosari", ...seoKeywords],
  alternates: {
    canonical: "/",
  },
  category: "Local Service Business",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
  },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: business.fullName,
    type: "website",
    locale: "mr_IN",
    images: [
      {
        url: ogImage,
        width: 1600,
        height: 854,
        alt: "Bhavesh Electrician Bhosari electrician service in Pune and PCMC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [absoluteUrl(ogImage)],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  other: {
    "geo.region": "IN-MH",
    "geo.placename": "Bhosari, Pimpri-Chinchwad, Pune",
    "business:contact_data:locality": "Bhosari",
    "business:contact_data:region": "Maharashtra",
    "business:contact_data:postal_code": business.address.postalCode,
    "business:contact_data:country_name": "India",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="mr-IN">
      <body>{children}</body>
    </html>
  );
}
