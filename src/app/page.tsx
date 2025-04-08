import AboutSection  from "@/components/sections/AboutSection";
import AsSeenInSection from "@/components/sections/AsSeenInSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import BenefitsThreeSection from "@/components/sections/BenefitsThreeSection";
import BenefitsTwoSection from "@/components/sections/BenefitsTwoSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { HeroSection } from "@/components/sections/HeroSection";
// Assuming only one Hero variant for now, but could wrap if needed
// import HeroTwoSection from "@/components/sections/HeroTwoSection"; // Example if you had more
import ProblemSection from "@/components/sections/ProblemSection";
import ProblemTwoSection from "@/components/sections/ProblemTwoSection";
import ProblemThreeSection from "@/components/sections/ProblemThreeSection";
import ProblemFourSection from "@/components/sections/ProblemFourSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { SectionVariantWrapper } from "@/components/dev/SectionVariantWrapper";
import HeroSectionTwo from "@/components/sections/HeroSectionTwo";

// Import the wrapper

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* --- Hero Section --- */}
        {/* If you only have one hero, you might not wrap it,
            or wrap it if you anticipate more variants */}
        <SectionVariantWrapper title="Hero Section">
           <HeroSectionTwo />
           <HeroSection />
        </SectionVariantWrapper>

        {/* --- Problem Section Variants --- */}
        <SectionVariantWrapper title="Problem Section">
          <ProblemSection/>
          <ProblemTwoSection/>
          <ProblemThreeSection />
          <ProblemFourSection />
        </SectionVariantWrapper>

        {/* --- Benefits Section Variants --- */}
        <SectionVariantWrapper title="Benefits Section">
          <BenefitsSection />
          <BenefitsTwoSection />
          <BenefitsThreeSection />
        </SectionVariantWrapper>

        {/* --- Standalone Sections (assuming only one variant shown) --- */}

        <AboutSection />
        <AsSeenInSection />
        <TestimonialsSection />
        <CtaSection />
        <FaqSection />
        <FinalCtaSection />

      </main>
    </div>
  );
}