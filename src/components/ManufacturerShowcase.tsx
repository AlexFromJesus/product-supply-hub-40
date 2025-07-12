import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Shield, Star } from "lucide-react";
import protellaImage from "/lovable-uploads/3e471310-2c1b-4607-9f54-f251614841b8.png";
import pwdImage from "/lovable-uploads/a3fa7e2c-f897-4f11-b53d-6155e3de4cdb.png";
import elevenfitImage from "@/assets/elevenfit-hero.jpg";

const manufacturers = [
  {
    name: "PWD Nutrition", 
    country: "Spain",
    title: "US Specialist Partner - PWD Nutrition",
    description: "15 years of expertise in dietetics, nutrition and food supplements. NutriFlow specializes in bringing PWD's pharmaceutical-grade products to American markets with full regulatory support.",
    specialties: ["Protein Cookies", "Protein Cake", "Pharmaceutical Grade"],
    image: pwdImage,
    highlightProducts: ["34% Protein Cookies (4 flavors)", "Protein Cake (20% protein)", "Protein Bun (20% protein)"],
    exclusiveText: "Trusted US market specialist"
  },
  {
    name: "Protella",
    country: "Spain",
    title: "US Specialist Partner - Protella",
    description: "Premium protein products made in Spain with Creapure®, Sucramix®, DigeZyme®, and Peptan® certifications. We handle all US market requirements for Protella's premium protein innovations, ensuring seamless market entry.",
    specialties: ["Whey Protein Products", "Premium Protein Creams", "Creatine Supplements"],
    image: protellaImage,
    highlightProducts: ["Whey Protein American Cookie", "Protein Chocolate Creams", "Creatina Creapure® Doughnut"],
    exclusiveText: "Expert US market guidance"
  },
  {
    name: "ElevenFit",
    country: "Spain", 
    title: "US Specialist Partner - ElevenFit",
    description: "Revolutionary sugar-free nutrition with 50 instant drink flavors. NutriFlow manages US distribution strategy for ElevenFit's revolutionary 50-flavor collection.",
    specialties: ["50 Flavor Collection", "Sugar-Free Products", "Instant Mixes"],
    image: elevenfitImage,
    highlightProducts: ["50 Flavor Instant Drinks", "Zero-Calorie Syrups", "Individual Flavor Collections"],
    exclusiveText: "Proven US distribution expertise"
  }
];

export function ManufacturerShowcase() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-card overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 px-2">
            Our Partner Brands
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-8 px-2">
            Trusted US specialist for Europe's leading nutrition brands. 
            Your expert pathway to proven European innovation in American markets.
          </p>
          
          {/* Partner Logos */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 mb-6 sm:mb-8">
            <div className="bg-background/80 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
              <img 
                src="/lovable-uploads/877c5a9b-b6a9-4526-b797-107c115d75a3.png" 
                alt="PWD Nutrition" 
                className="h-8 sm:h-10 md:h-12 w-auto object-contain"
              />
            </div>
            <div className="bg-background/80 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
              <img 
                src="/lovable-uploads/de083fa8-a756-4d5d-a367-f497f75d3cfa.png" 
                alt="Protella" 
                className="h-8 sm:h-10 md:h-12 w-auto object-contain"
              />
            </div>
            <div className="bg-background/80 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
              <img 
                src="/lovable-uploads/693b2dcd-156b-4fa9-8c06-5edbd6e1cf7c.png" 
                alt="ElevenFit" 
                className="h-8 sm:h-10 md:h-12 w-auto object-contain"
              />
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {manufacturers.map((manufacturer, index) => (
            <Card key={manufacturer.name} className="overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <img 
                  src={manufacturer.image} 
                  alt={`${manufacturer.name} products`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <Badge variant="secondary" className="bg-white/90 text-primary">
                    <MapPin className="w-3 h-3 mr-1" />
                    {manufacturer.country}
                  </Badge>
                  <Badge className="bg-primary text-white">
                    <Shield className="w-3 h-3 mr-1" />
                    Trusted US Specialist
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground">{manufacturer.name}</h3>
                    <p className="text-sm text-primary font-medium">{manufacturer.title}</p>
                  </div>
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                </div>
                
                <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
                  {manufacturer.description}
                </p>
                
                <div className="mb-3 sm:mb-4">
                  <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Specialties:</h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {manufacturer.specialties.map((specialty) => (
                      <Badge key={specialty} variant="outline" className="text-xs sm:text-sm">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Featured Products:</h4>
                  <ul className="text-xs sm:text-sm text-muted-foreground space-y-1">
                    {manufacturer.highlightProducts.map((product) => (
                      <li key={product} className="flex items-start">
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mr-2 mt-1.5 sm:mt-2 flex-shrink-0"></span>
                        <span className="leading-relaxed">{product}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <Badge variant="outline" className="text-xs text-primary border-primary mb-2">
                    {manufacturer.exclusiveText}
                  </Badge>
                  <p className="text-xs text-muted-foreground">
                    Specialist guidance for US market success
                  </p>
                </div>
                
                <Button className="w-full" variant="outline">
                  Request Product Information
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
