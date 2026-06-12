import type { MetadataRoute } from "next";
import { business } from "@/lib/business";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: business.fullName,
    short_name: "Bhavesh Electrician",
    description: business.description,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#f8f3e6",
    theme_color: "#121a27",
    icons: [
      {
        src: "/bhavesh-electrician-logo-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/bhavesh-electrician-logo.png",
        sizes: "1024x1024",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
