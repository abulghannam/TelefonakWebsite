import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { AppShowcase } from "@/components/sections/app-showcase";
import { Categories } from "@/components/sections/categories";
import { Community } from "@/components/sections/community";
import { Features } from "@/components/sections/features";
import { FinalCta } from "@/components/sections/final-cta";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Sustainability } from "@/components/sections/sustainability";
import { TrustAndSafety } from "@/components/sections/trust-and-safety";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Categories />
        <HowItWorks />
        <AppShowcase />
        <Features />
        <TrustAndSafety />
        <Sustainability />
        <Community />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
