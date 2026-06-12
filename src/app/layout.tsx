import type { Metadata } from "next";
import "@fontsource/mukta/400.css";
import "@fontsource/mukta/500.css";
import "@fontsource/mukta/600.css";
import "@fontsource/mukta/700.css";
import "@fontsource-variable/noto-sans-devanagari";
import "@fontsource-variable/noto-serif-devanagari";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Bhavesh Electrician, Bhosari | 24 तास Pune Electrician",
  description:
    "भोसरी, पिंपरी-चिंचवड आणि पुणे परिसरात 24 तास electrician service. Wiring, MCB, switchboard, fan-light fitting, inverter, earthing आणि emergency repair.",
  keywords: [
    "Bhavesh Electrician Bhosari",
    "electrician in Pune",
    "electrician in Bhosari",
    "Pimpri Chinchwad electrician",
    "भोसरी इलेक्ट्रिशियन",
    "पुणे electrician",
  ],
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
  },
  openGraph: {
    title: "Bhavesh Electrician, Bhosari",
    description:
      "पुणे आणि PCMC परिसरात घर, दुकान, ऑफिस आणि सोसायटीसाठी 24 तास electrician service.",
    type: "website",
    locale: "mr_IN",
    images: [
      {
        url: "/images/hero-bhaavesh-electrician-v2.png",
        width: 1536,
        height: 864,
        alt: "Bhavesh Electrician in Bhosari",
      },
    ],
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
