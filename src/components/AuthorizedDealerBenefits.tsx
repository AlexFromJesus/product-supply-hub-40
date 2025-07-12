import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Shield, TrendingUp, BookOpen, DollarSign, FileText, Clock, Star } from "lucide-react";

const dealerBenefits = [
  {
    icon: MapPin,
    title: "Qualification Process",
    description: "Selective vetting ensures you're partnering with serious, committed distributors only.",
    highlight: "Quality Partners"
  },
  {
    icon: Shield,
    title: "Network Priority Access",
    description: "First access to new products, launches, and exclusive opportunities within our network.",
    highlight: "Member Benefits"
  },
  {
    icon: TrendingUp,
    title: "Marketing Development Funds",
    description: "Co-op advertising, promotional materials, and marketing support exclusive to authorized partners.",
    highlight: "Marketing Support"
  },
  {
    icon: BookOpen,
    title: "Certification & Training",
    description: "Ongoing education, product certification, and European manufacturer knowledge sharing.",
    highlight: "Expert Training"
  },
  {
    icon: DollarSign,
    title: "Territory Development",
    description: "Strategic market development support and business growth planning assistance.",
    highlight: "Growth Support"
  },
  {
    icon: FileText,
    title: "Network Events & Knowledge",
    description: "Exclusive distributor events, market intelligence sharing, and peer networking opportunities.",
    highlight: "Community Benefits"
  }
];

const urgencyItems = [
  "Limited network positions available",
  "Qualification process ensures selectivity", 
  "Territory development support included",
  "Exclusive training and certification programs"
];

export function AuthorizedDealerBenefits() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-card">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <Badge className="mb-4 bg-primary text-white">
            Partnership Program
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Authorized Distributor Network
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Join our qualified network of authorized distributors. Selective partnership means 
            better support, training, and territorial development for serious partners only.
          </p>
          
          {/* Urgency Section */}
          <div className="bg-primary/10 rounded-lg p-4 sm:p-6 max-w-2xl mx-auto mb-8">
            <div className="flex items-center justify-center mb-3">
              <Clock className="h-5 w-5 text-primary mr-2" />
              <span className="font-semibold text-primary">Partnership Opportunities</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
              {urgencyItems.map((item, index) => (
                <div key={index} className="flex items-center">
                  <Star className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {dealerBenefits.map((benefit, index) => (
            <Card key={benefit.title} className="h-full shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Badge variant="secondary" className="text-xs bg-primary/10 text-primary">
                  {benefit.highlight}
                </Badge>
              </div>
              
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
          <div className="bg-background/80 backdrop-blur-sm rounded-lg p-6 sm:p-8 max-w-4xl mx-auto border">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
              Why Our Authorized Network Works
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="text-left">
                <h4 className="font-semibold text-primary mb-2">Quality Over Quantity</h4>
                <p className="text-sm text-muted-foreground">Selective qualification means better support for committed partners</p>
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-primary mb-2">Mutual Investment</h4>
                <p className="text-sm text-muted-foreground">We invest in your success with ongoing training and development</p>
              </div>
            </div>
            
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
              Apply for Authorized Status
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}