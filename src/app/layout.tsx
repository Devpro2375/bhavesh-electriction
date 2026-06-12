import type { Metadata } from "next";
import "@fontsource/mukta/400.css";
import "@fontsource/mukta/500.css";
import "@fontsource/mukta/600.css";
import "@fontsource/mukta/700.css";
import "@fontsource-variable/noto-sans-devanagari";
import "@fontsource-variable/noto-serif-devanagari";
import { absoluteUrl, business, siteUrl } from "@/lib/business";
import "./globals.css";

const title = "Bhavesh Electrician, Bhosari | 24 तास Pune Electrician";
const description =
  "भोसरी, पिंपरी-चिंचवड आणि पुणे परिसरात 24 तास electrician service. Wiring, MCB, switchboard, fan-light fitting, inverter, earthing आणि emergency repair साठी फोन करा.";
const ogImage = "/images/optimized/hero-bhavesh-electrician.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: business.fullName,
  title: {
    default: title,
    template: `%s | ${business.name}`,
  },
  description,
  keywords: [
    "Bhavesh Electrician Bhosari",
    "electrician in Bhosari",
    "electrician in Pune",
    "Pimpri Chinchwad electrician",
    "emergency electrician Pune",
    "MCB repair Bhosari",
    "switchboard repair Pune",
    "भोसरी इलेक्ट्रिशियन",
    "पुणे electrician",
  ],
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
        alt: "Bhavesh Electrician Bhosari electrical service",
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
    "geo.placename": "Bhosari, Pimpri-Chinchwad",
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
