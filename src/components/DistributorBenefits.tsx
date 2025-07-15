import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  TrendingUp, 
  Users, 
  Truck, 
  Award, 
  Handshake,
  Clock,
  DollarSign 
} from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Exclusive Brand Access",
    description: "Be the first to offer these premium European brands in your territory with protected distribution rights."
  },
  {
    icon: TrendingUp,
    title: "High-Margin Products", 
    description: "Premium positioning allows for attractive markup opportunities while maintaining competitive pricing."
  },
  {
    icon: Users,
    title: "Marketing Support",
    description: "Comprehensive marketing materials, product training, and promotional support to drive sales."
  },
  {
    icon: Truck,
    title: "Reliable Supply Chain",
    description: "Streamlined import process ensures consistent inventory availability and timely deliveries."
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "All products meet FDA standards with full compliance documentation and quality certifications."
  },
  {
    icon: Handshake,
    title: "Partnership Focus",
    description: "Long-term relationship building with dedicated support for your business growth and success."
  },
  {
    icon: Clock,
    title: "Fast Market Entry",
    description: "Quick onboarding process to get you selling premium products within weeks, not months."
  },
  {
    icon: DollarSign,
    title: "Volume Incentives",
    description: "Tiered pricing structure rewards growth with better margins as your volume increases."
  }
];

export function DistributorBenefits() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 px-2">
            Partner with Confidence
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-8 px-2">
            Join our network of successful distributors and unlock the potential 
            of premium European nutrition brands in the US market.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-primary text-white hover:opacity-90 px-6 sm:px-8 py-3 sm:py-4 shadow-glow text-sm sm:text-base"
            onClick={() => {
              const element = document.getElementById('contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Apply for Distribution Partnership
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16">
          {benefits.map((benefit, index) => (
            <Card key={benefit.title} className="text-center hover:shadow-card transition-all duration-300 border-0 bg-gradient-card">
              <CardHeader className="pb-3 sm:pb-4">
                <div className="bg-gradient-primary rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-glow">
                  <benefit.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <CardTitle className="text-base sm:text-lg font-bold text-foreground">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 sm:mt-16 bg-gradient-primary rounded-2xl p-6 sm:p-8 md:p-12 text-center shadow-elegant mx-4 sm:mx-0">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
            Ready to Expand Your Portfolio?
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
            Join leading distributors who are already capitalizing on the growing demand 
            for premium European nutrition products.
          </p>
          <div className="flex flex-col gap-3 sm:gap-4 justify-center max-w-md mx-auto sm:max-w-none">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 font-semibold px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
            >
              Download Partnership Info
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary font-semibold px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
            >
              Schedule a Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}