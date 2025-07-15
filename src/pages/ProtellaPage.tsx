import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Star, Package, Shield, Award } from "lucide-react";
import protellaHero from "@/assets/protella-hero.jpg";
import proteinCakeImg from "@/assets/protella-protein-cake.jpg";
import proteinPowderImg from "@/assets/protella-protein-powder.jpg";

const products = [
  {
    id: "whey-protein-american-cookie",
    name: "Whey Protein American Cookie",
    subtitle: "100% Whey Protein with DigeZyme",
    description: "Premium 1kg whey protein with authentic American cookie flavor, enriched with DigeZyme for optimal digestion. Made in Spain with premium certifications.",
    price: "$45.99",
    features: [
      "100% whey protein concentrate",
      "DigeZyme digestive enzymes",
      "Authentic American cookie flavor",
      "1kg premium container",
      "Enhanced absorption",
      "No added sugars"
    ],
    flavors: ["American Cookie"],
    nutritionalHighlights: "High protein, enhanced digestion, premium quality",
    packageSize: "1kg container",
    category: "Whey Protein",
    image: "/lovable-uploads/b831714e-c3aa-4f5b-9f6e-ca3460a27259.png"
  },
  {
    id: "creatina-creapure-doughnut", 
    name: "Creatina Creapure® Doughnut",
    subtitle: "Premium Creatine Supplement",
    description: "300g high-quality creatine monohydrate supplement with fun doughnut flavor. Features premium Creapure® certification for maximum purity and effectiveness.",
    price: "$24.99",
    features: [
      "Creapure® certified creatine",
      "300g premium container",
      "Doughnut flavor profile",
      "Maximum purity",
      "Enhanced performance",
      "Quality guaranteed"
    ],
    flavors: ["Doughnut"],
    nutritionalHighlights: "Premium Creapure® creatine, performance enhancement",
    packageSize: "300g container",
    category: "Creatine Supplements",
    image: "/lovable-uploads/38faefc4-b43a-42da-8fe0-729f94105f33.png"
  },
  {
    id: "protein-chocolate-creams",
    name: "Protein Chocolate Creams",
    subtitle: "Premium Protein Spreads",
    description: "Luxurious protein-enriched chocolate creams available in multiple premium flavors. No added sugars, high protein content, and no palm oil for guilt-free indulgence.",
    price: "$8.99",
    features: [
      "High protein content",
      "No added sugars",
      "No palm oil",
      "Premium ingredients",
      "Multiple flavors available",
      "Creamy texture"
    ],
    flavors: ["Choco Hazelnut", "White Choco", "American Cookie"],
    nutritionalHighlights: "High protein, no added sugars, premium quality",
    packageSize: "Various sizes available",
    category: "Protein Creams",
    image: "/lovable-uploads/a9ba3227-f2a3-4533-a41e-a3d2414c511e.png"
  }
];

const companyInfo = {
  name: "Protella",
  country: "Spain",
  website: "protella.com", 
  expertise: "Premium protein products made in Spain with Creapure®, Sucramix®, DigeZyme®, and Peptan® certifications. No added sugars, high protein, no palm oil.",
  certifications: ["IFS", "Halal", "Kosher", "Creapure®", "Sucramix®", "DigeZyme®", "Peptan®"],
  specializations: ["Whey Protein Products", "Premium Protein Creams", "Creatine Supplements", "Premium Certifications"]
};

export default function ProtellaPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <div className="container mx-auto px-6 py-4">
        <Link to="/manufacturers" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Manufacturers
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-card">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                {companyInfo.country} • Premium Certified
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                {companyInfo.name}
              </h1>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                {companyInfo.expertise}
              </p>
              <div className="grid grid-cols-2 gap-2 mb-8">
                {companyInfo.specializations.map((spec) => (
                  <Badge key={spec} variant="outline">
                    <Award className="w-3 h-3 mr-1" />
                    {spec}
                  </Badge>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="px-8">
                  Contact Us for Distribution
                </Button>
                <Button variant="outline" size="lg" className="px-8">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Visit Manufacturer
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={protellaHero} 
                alt="Protella Premium Products"
                className="w-full h-auto rounded-lg shadow-elegant"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Banner */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-6">
          <div className="text-center mb-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Premium Certifications</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {companyInfo.certifications.map((cert) => (
                <Badge key={cert} variant="secondary" className="px-4 py-2">
                  <Shield className="w-4 h-4 mr-2" />
                  {cert}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Catalog */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Product Catalog
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our premium protein products including whey proteins, protein creams, and creatine supplements 
              crafted with the finest ingredients and backed by world-class certifications.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300">
                {product.image && (
                  <div className="relative h-48 overflow-visible group">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-all duration-500 ease-out hover:scale-125 hover:z-10 transform-origin-center group-hover:shadow-2xl"
                    />
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <Badge variant="outline" className="mb-2">
                        {product.category}
                      </Badge>
                      <CardTitle className="text-xl font-bold mb-2">
                        {product.name}
                      </CardTitle>
                      <p className="text-primary font-semibold">
                        {product.subtitle}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-foreground">
                        {product.price}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {product.packageSize}
                      </p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {product.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {product.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-muted-foreground">
                          <Star className="w-3 h-3 text-primary mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-2">Available Options:</h4>
                    <div className="flex flex-wrap gap-1">
                      {product.flavors.map((flavor) => (
                        <Badge key={flavor} variant="secondary" className="text-xs">
                          {flavor}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-2">Nutritional Highlights:</h4>
                    <p className="text-sm text-primary font-medium">
                      {product.nutritionalHighlights}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button className="flex-1" size="sm">
                      <Package className="mr-2 h-4 w-4" />
                      Get Distribution Pricing
                    </Button>
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-card">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Become a US Distributor
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Partner with us to bring Protella's premium certified products to the US market. 
            We're seeking qualified distributors for exclusive regional partnerships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">
              Contact Us for Distribution
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              Request Partnership Info
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}