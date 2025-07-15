import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Star, Package, Shield } from "lucide-react";
import pwdHero from "@/assets/pwd-nutrition-hero.jpg";
import proteinCookiesImg from "@/assets/pwd-protein-cookies.jpg";
import proteinBunImg from "@/assets/pwd-protein-bun.jpg";

const products = [
  {
    id: "protein-cookies",
    name: "PWD Nutrition Protein Cookies",
    subtitle: "34% Protein Content",
    description: "Individual 30g cookies with 34% protein content and high satiety effect from 24% fiber. Sugar-free with only 1.6g carbohydrates per cookie.",
    price: "$3.99",
    features: [
      "34% protein content",
      "24% fiber for satiety",
      "Sugar-free formula",
      "Only 1.6g carbohydrates",
      "30g individual serving"
    ],
    flavors: ["Chocolate & Salted Caramel", "Chocolate & Toffee", "Chocolate & Coconut", "White & Milk Chocolate"],
    nutritionalHighlights: "High protein, low carb, high fiber",
    packageSize: "Individual 30g cookies",
    category: "Protein Snacks",
    image: proteinCookiesImg
  },
  {
    id: "protein-bun", 
    name: "Protein Bun",
    subtitle: "20% Protein Content",
    description: "Ultra-low sugar chocolate-filled protein bun with fluffy texture. Perfect for health-conscious consumers seeking indulgent yet nutritious options.",
    price: "$4.99",
    features: [
      "20% protein content",
      "Ultra-low sugar (<0.3g)",
      "Chocolate-filled center",
      "Fluffy, satisfying texture",
      "Individual serving size"
    ],
    flavors: ["Chocolate-filled"],
    nutritionalHighlights: "High protein, ultra-low sugar",
    packageSize: "Individual serving",
    category: "Protein Bakery",
    image: proteinBunImg
  },
  {
    id: "specialized-supplements",
    name: "Specialized Supplements",
    subtitle: "15 Years of Expertise",
    description: "Comprehensive supplement line developed over 15 years of expertise in dietetics and nutrition. Trusted by health centers and pharmacies across Europe.",
    price: "Contact for pricing",
    features: [
      "15 years of R&D expertise",
      "Pharmaceutical grade quality",
      "Health center approved",
      "European pharmacy trusted",
      "Specialized formulations"
    ],
    flavors: ["Various specialized formulas"],
    nutritionalHighlights: "Targeted nutrition solutions",
    packageSize: "Various formats available",
    category: "Supplements",
    image: null
  },
  {
    id: "protein-cake",
    name: "Protein Cake",
    subtitle: "20% Protein Content",
    description: "Traditional chocolate plum cake enhanced with 20% protein content. Sugar-free, high fiber, perfect for low-carb and diabetic diets. 400g package with 12 pre-sliced portions.",
    price: "$12.99",
    features: [
      "20% protein content",
      "Sugar-free formula",
      "High fiber content",
      "12 pre-sliced portions",
      "Traditional chocolate plum cake",
      "Diabetic-friendly"
    ],
    flavors: ["Chocolate Chips", "Orange Pieces"],
    nutritionalHighlights: "High protein, sugar-free, high fiber",
    packageSize: "400g (12 portions)",
    category: "Protein Bakery",
    image: "/lovable-uploads/9c0f1d1a-3704-4fad-83cd-4ae1735d39d9.png"
  }
];

const companyInfo = {
  name: "PWD Nutrition",
  country: "Spain",
  website: "pwdnutrition.com",
  yearsFounded: "15+ years",
  expertise: "15 years of expertise in dietetics, nutrition and food supplements. Trusted by pharmacies and health centers across Europe for pharmaceutical-grade products.",
  distribution: "Health Centers & Pharmacies across Europe",
  certifications: ["Pharmaceutical Grade", "Health Center Approved", "European Standards"]
};

export default function PWDNutritionPage() {
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
                {companyInfo.country} • {companyInfo.yearsFounded}
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                {companyInfo.name}
              </h1>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                {companyInfo.expertise}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {companyInfo.certifications.map((cert) => (
                  <Badge key={cert} variant="outline">
                    <Shield className="w-3 h-3 mr-1" />
                    {cert}
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
                src={pwdHero} 
                alt="PWD Nutrition Products"
                className="w-full h-auto rounded-lg shadow-elegant"
              />
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
              Discover our range of high-protein, pharmaceutical-grade nutrition products including 
              protein cookies, protein cake, protein buns, and specialized supplements designed for health-conscious consumers.
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
                    <h4 className="font-semibold text-foreground mb-2">Available Flavors:</h4>
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
            Partner with us to bring PWD Nutrition's pharmaceutical-grade products to the US market. 
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