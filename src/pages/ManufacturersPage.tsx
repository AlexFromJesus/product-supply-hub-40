import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, MapPin, ArrowRight } from "lucide-react";
import protellaHero from "@/assets/protella-hero.jpg";
import pwdHero from "@/assets/pwd-nutrition-hero.jpg";
import elevenfitHero from "@/assets/elevenfit-hero.jpg";

const manufacturers = [
  {
    id: "pwd-nutrition",
    name: "PWD Nutrition",
    country: "Spain",
    website: "pwdnutrition.com",
    description: "15 years of expertise in dietetics, nutrition and food supplements. Trusted by pharmacies and health centers across Europe for pharmaceutical-grade products.",
    specialties: ["Protein Cookies", "Specialized Supplements", "Pharmaceutical Grade"],
    image: pwdHero,
    highlightProducts: ["34% Protein Cookies (4 flavors)", "Protein Bun (20% protein)", "Specialized Supplement Lines"],
    productCount: "25+ products",
    certifications: ["Pharmaceutical Grade", "Health Center Approved"]
  },
  {
    id: "protella",
    name: "Protella",
    country: "Spain", 
    website: "protella.com",
    description: "Premium protein products made in Spain with Creapure®, Sucramix®, DigeZyme®, and Peptan® certifications. No added sugars, high protein, no palm oil.",
    specialties: ["Protein Cake", "CFM Isolate Protein", "Premium Certifications"],
    image: protellaHero,
    highlightProducts: ["Protein Cake (20% protein)", "Doughnut CFM Isolate Powder", "Premium Rice Cream"],
    productCount: "15+ products",
    certifications: ["IFS", "Halal", "Kosher", "Creapure®"]
  },
  {
    id: "elevenfit",
    name: "ElevenFit",
    country: "Spain",
    website: "elevenfit.es", 
    description: "Revolutionary sugar-free nutrition with 50 instant drink flavors. Zero sugar, zero calories, maximum flavor - perfect for modern health-conscious consumers.",
    specialties: ["50 Flavor Collection", "Sugar-Free Products", "Instant Mixes"],
    image: elevenfitHero,
    highlightProducts: ["50 Flavor Instant Drinks", "Protein Spreads", "Zero-Calorie Syrups"],
    productCount: "100+ products",
    certifications: ["Sugar-Free", "Zero Calories", "No Aspartame"]
  }
];

export default function ManufacturersPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Our Premium Partners
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            We work exclusively with Europe's leading nutrition manufacturers, bringing their 
            innovative, high-quality products to the US market with comprehensive distribution support.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
              140+ Premium Products
            </span>
            <span className="flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
              3 Elite Manufacturers
            </span>
            <span className="flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
              Pharmaceutical Grade Quality
            </span>
          </div>
        </div>
      </section>

      {/* Manufacturers Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {manufacturers.map((manufacturer) => (
              <Card key={manufacturer.id} className="overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={manufacturer.image} 
                    alt={`${manufacturer.name} products`}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-primary">
                      <MapPin className="w-3 h-3 mr-1" />
                      {manufacturer.country}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-white/90 text-foreground border-white">
                      {manufacturer.productCount}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl font-bold">{manufacturer.name}</CardTitle>
                    <ExternalLink className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {manufacturer.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {manufacturer.specialties.map((specialty) => (
                        <Badge key={specialty} variant="outline">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-2">Featured Products:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {manufacturer.highlightProducts.map((product) => (
                        <li key={product} className="flex items-center">
                          <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                          {product}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-2">Certifications:</h4>
                    <div className="flex flex-wrap gap-1">
                      {manufacturer.certifications.map((cert) => (
                        <Badge key={cert} variant="secondary" className="text-xs">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Link to={`/manufacturers/${manufacturer.id}`}>
                    <Button className="w-full" size="lg">
                      View Product Catalog
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-card">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our exclusive distribution network and bring Europe's finest nutrition products to your market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">
              Request Bulk Pricing
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}