import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Globe, TrendingUp, Package, Users, Zap } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Risk Reduction",
    description: "We handle regulatory complexity, cultural barriers, and import risks so you don't have to."
  },
  {
    icon: Globe,
    title: "Simplified Operations",
    description: "One US partner vs managing multiple European relationships, languages, and time zones."
  },
  {
    icon: TrendingUp,
    title: "Established Relationships",
    description: "Years of trust-building with European manufacturers - relationships you can't replicate quickly."
  },
  {
    icon: Package,
    title: "Market Intelligence",
    description: "Deep understanding of US market demands, pricing strategies, and competitive positioning."
  },
  {
    icon: Users,
    title: "Ongoing Support",
    description: "Continuous training, marketing support, and business development you won't get going direct."
  },
  {
    icon: Zap,
    title: "Speed to Market",
    description: "Skip months of relationship building, compliance research, and trial-and-error learning."
  }
];

export function WhyChooseNutriFlow() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <Badge className="mb-4 bg-primary text-white">
            Smart Partnership Choice
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Why Join Our Network?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Going direct to European manufacturers is complex, risky, and time-consuming. 
            We've already solved these challenges - you get the benefits without the headaches.
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
              The Smart Choice vs Going Direct
            </h3>
            <div className="space-y-3 text-sm sm:text-base text-muted-foreground">
              <p>• Skip months of relationship building and trust development with European manufacturers</p>
              <p>• Avoid regulatory compliance mistakes that could cost thousands in delays or rejections</p>
              <p>• Access proven market intelligence and competitive positioning strategies</p>
              <p>• Get ongoing support and training instead of figuring it out alone</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}