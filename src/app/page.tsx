import { StructuredData } from "@/components/StructuredData";
import { AreasSection } from "@/components/sections/AreasSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { LocalTrustSection } from "@/components/sections/LocalTrustSection";
import { MobileActionBar } from "@/components/sections/MobileActionBar";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { QuickFactsSection } from "@/components/sections/QuickFactsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SiteFooter } from "@/components/sections/SiteFooter";

export default function HomePage() {
  return (
    <main className="w-full max-w-[100vw] overflow-x-clip bg-[var(--background)] pb-24 text-[var(--foreground)] md:pb-0">
      <StructuredData />
      <HeroSection />
      <QuickFactsSection />
      <ServicesSection />
      <LocalTrustSection />
      <AreasSection />
      <ProcessSection />
      <ContactSection />
      <SiteFooter />
      <MobileActionBar />
    </main>
  );
}
