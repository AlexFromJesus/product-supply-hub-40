import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, CheckCircle, Globe, Package, Users, Award } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Exclusive US Territory Rights",
    description: "Protected market access with guaranteed exclusivity for our authorized dealer network."
  },
  {
    icon: CheckCircle,
    title: "FDA Compliance Guaranteed",
    description: "All products meet US regulatory requirements with complete documentation and support."
  },
  {
    icon: Globe,
    title: "Direct Manufacturer Relationships",
    description: "Official partnerships with Europe's leading nutrition brands ensure authentic products."
  },
  {
    icon: Package,
    title: "US Inventory & Fulfillment",
    description: "Strategic inventory positioning for fast delivery and reliable supply chain management."
  },
  {
    icon: Users,
    title: "Marketing Development Funds",
    description: "Co-op advertising support and marketing materials to grow your business."
  },
  {
    icon: Award,
    title: "Regulatory Support Included",
    description: "Complete compliance assistance and regulatory guidance for seamless operations."
  }
];

export function WhyChooseNutriFlow() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <Badge className="mb-4 bg-primary text-white">
            Official US Distributor
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Why Choose NutriFlow
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            The only authorized US source for Europe's breakthrough nutrition innovations. 
            Exclusive partnerships you can't get elsewhere.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <Card key={benefit.title} className="h-full shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="bg-primary/10 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <CardTitle className="text-lg sm:text-xl text-foreground">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 text-center">
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-primary/5 rounded-lg p-6 sm:p-8 max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
              US Market Exclusivity Guarantee
            </h3>
            <div className="space-y-3 text-sm sm:text-base text-muted-foreground">
              <p>• NutriFlow holds exclusive US distribution rights for PWD Nutrition, Protella, and ElevenFit</p>
              <p>• All products available only through our authorized dealer network</p>
              <p>• Direct manufacturer purchases not available in US market</p>
              <p>• Guaranteed authentic products with US compliance certification</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}