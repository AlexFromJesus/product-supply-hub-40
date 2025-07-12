import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ManufacturerShowcase } from "@/components/ManufacturerShowcase";
import { DistributorBenefits } from "@/components/DistributorBenefits";
import { ContactSection } from "@/components/ContactSection";
import InteractiveSelector from "@/components/ui/interactive-selector";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <div id="manufacturers">
        <ManufacturerShowcase />
      </div>
      <div id="products">
        <InteractiveSelector />
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
