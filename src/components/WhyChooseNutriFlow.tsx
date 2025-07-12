import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Globe, TrendingUp, Package, Users, Zap } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Proven European Partnerships",
    description: "Established relationships with breakthrough nutrition manufacturers delivering consistent results."
  },
  {
    icon: Globe,
    title: "Complete US Compliance",
    description: "All regulatory requirements, FDA documentation, and import processes handled expertly."
  },
  {
    icon: TrendingUp,
    title: "Market Intelligence",
    description: "Deep understanding of US market demands, pricing strategies, and competitive positioning."
  },
  {
    icon: Package,
    title: "Streamlined Operations",
    description: "One trusted US partner managing all European relationships for simplified business operations."
  },
  {
    icon: Users,
    title: "Comprehensive Support",
    description: "Ongoing training, marketing materials, and business development support for your success."
  },
  {
    icon: Zap,
    title: "Faster Market Entry",
    description: "Immediate access to established supply chains and proven market entry strategies."
  }
];

export function WhyChooseNutriFlow() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <Badge className="mb-4 bg-primary text-white">
            Authorized Distribution Network
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Your Gateway to European Innovation
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Access revolutionary protein products that are transforming the European market. 
            We make European innovation simple for American distributors.
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
              European Innovation Made Simple
            </h3>
            <div className="space-y-3 text-sm sm:text-base text-muted-foreground">
              <p>• Access to PWD Nutrition's pharmaceutical-grade protein innovations</p>
              <p>• Protella's revolutionary protein spreads and bakery solutions</p>
              <p>• ElevenFit's game-changing 50-flavor protein collection</p>
              <p>• Complete regulatory compliance and market entry support included</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}