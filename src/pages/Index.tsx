import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { WhatIsSection } from "@/components/WhatIsSection";
import { WhyItMattersSection } from "@/components/WhyItMattersSection";
import { IntroducingSection } from "@/components/IntroducingSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { SpecificationsSection } from "@/components/SpecificationsSection";
import { UseCasesSection } from "@/components/UseCasesSection";
import { MotionStylesSection } from "@/components/MotionStylesSection";
import { TrustSafetySection } from "@/components/TrustSafetySection";
import { PricingSection } from "@/components/PricingSection";
import { BestPracticesSection } from "@/components/BestPracticesSection";
import { FAQSection } from "@/components/FAQSection";
import { FutureSection } from "@/components/FutureSection";
import { FinalThoughtsSection } from "@/components/FinalThoughtsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <WhatIsSection />
      <WhyItMattersSection />
      <IntroducingSection />
      <HowItWorksSection />
      <SpecificationsSection />
      <UseCasesSection />
      <MotionStylesSection />
      <TrustSafetySection />
      <PricingSection />
      <BestPracticesSection />
      <FAQSection />
      <FutureSection />
      <FinalThoughtsSection />
      <Footer />
    </div>
  );
};

export default Index;
