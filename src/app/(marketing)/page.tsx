import { Hero } from "@/components/marketing/hero";
import { Pricing } from "@/components/marketing/pricing";
import { Cta, Faq, Features, HowItWorks, LogoCloud, Testimonials } from "@/components/marketing/sections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoCloud />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <Faq />
      <Cta />
    </>
  );
}
