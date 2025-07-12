import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ManufacturerShowcase } from "@/components/ManufacturerShowcase";
import { WhyChooseNutriFlow } from "@/components/WhyChooseNutriFlow";
import { DistributorBenefits } from "@/components/DistributorBenefits";
import { AuthorizedDealerBenefits } from "@/components/AuthorizedDealerBenefits";
import { ContactSection } from "@/components/ContactSection";
import InteractiveSelector from "@/components/ui/interactive-selector";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <div id="brands">
        <ManufacturerShowcase />
      </div>
      <div id="why-nutriflow">
        <WhyChooseNutriFlow />
      </div>
      <div id="products">
        <InteractiveSelector />
      </div>
      <div id="dealer-benefits">
        <AuthorizedDealerBenefits />
      </div>
      <div id="benefits">
        <DistributorBenefits />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;
