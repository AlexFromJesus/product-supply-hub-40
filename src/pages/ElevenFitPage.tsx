import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Star, Package, Zap, Droplet } from "lucide-react";
import elevenfitHero from "@/assets/elevenfit-hero.jpg";
import flavorsImg from "@/assets/elevenfit-flavors.jpg";
import proteinSpreadImg from "@/assets/elevenfit-protein-spread.jpg";

const products = [
  {
    id: "instant-mix-drinks",
    name: "Instant Mix Drinks - 50 Flavor Collection",
    subtitle: "50 Sugar-Free Flavors",
    description: "Revolutionary 50-flavor collection with no aspartame and less than 5 calories per 250ml serving. Each 9g sachet creates 1.5L of beverage. 24 sachets per box provides 36L total.",
    price: "$0.19",
    priceNote: "per sachet (distributor cost)",
    features: [
      "50 unique sugar-free flavors",
      "No aspartame formula",
      "<5 calories per 250ml",
      "Each sachet makes 1.5L",
      "24-month shelf life",
      "Multiple applications"
    ],
    flavors: ["50 unique flavors available"],
    applications: ["Beverages", "Baking", "Dessert Flavoring", "Cocktail Mixers"],
    nutritionalHighlights: "Zero sugar, minimal calories, no artificial sweeteners",
    packageSize: "24 sachets/box (36L total)",
    category: "Instant Drinks",
    image: flavorsImg
  },
  {
    id: "sugar-free-product-line",
    name: "Sugar-Free Product Line",
    subtitle: "Zero Sugar, Maximum Flavor",
    description: "Comprehensive sugar-free product range including zero-calorie syrups, sauces, and protein-enriched oatmeal in 18 flavors. The motto: 'Zero sugar, zero calories, maximum flavor.'",
    price: "Contact for pricing",
    features: [
      "Zero-calorie syrups",
      "Sugar-free sauces",
      "Protein oatmeal (18 flavors)",
      "Maximum flavor retention",
      "Health-conscious formulations",
      "Versatile applications"
    ],
    flavors: ["18 oatmeal flavors + various syrups/sauces"],
    nutritionalHighlights: "Zero sugar, zero calories, protein-enhanced",
    packageSize: "Various formats available",
    category: "Sugar-Free Line",
    image: null
  }
];

const companyInfo = {
  name: "ElevenFit",
  country: "Spain",
  website: "elevenfit.es",
  motto: "Zero sugar, zero calories, maximum flavor",
  expertise: "Sugar-Free & Zero-Calorie Nutrition Products",
  specializations: ["50 Flavor Innovation", "No Aspartame", "Sugar-Free Technology", "Zero Calories"]
};

export default function ElevenFitPage() {
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
                {companyInfo.country} • Innovation Leader
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                {companyInfo.name}
              </h1>
              <p className="text-xl text-muted-foreground mb-4 leading-relaxed">
                {companyInfo.expertise}
              </p>
              <blockquote className="text-2xl font-semibold text-primary mb-6 italic border-l-4 border-primary pl-4">
                "{companyInfo.motto}"
              </blockquote>
              <div className="grid grid-cols-2 gap-2 mb-8">
                {companyInfo.specializations.map((spec) => (
                  <Badge key={spec} variant="outline">
                    <Zap className="w-3 h-3 mr-1" />
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
                src={elevenfitHero} 
                alt="ElevenFit 50 Flavor Collection"
                className="w-full h-auto rounded-lg shadow-elegant"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Highlights */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="flex items-center">
              <Droplet className="w-6 h-6 text-primary mr-2" />
              <div>
                <p className="font-bold text-2xl text-foreground">50</p>
                <p className="text-sm text-muted-foreground">Unique Flavors</p>
              </div>
            </div>
            <div className="flex items-center">
              <Zap className="w-6 h-6 text-primary mr-2" />
              <div>
                <p className="font-bold text-2xl text-foreground">0</p>
                <p className="text-sm text-muted-foreground">Sugar & Calories</p>
              </div>
            </div>
            <div className="flex items-center">
              <Package className="w-6 h-6 text-primary mr-2" />
              <div>
                <p className="font-bold text-2xl text-foreground">24</p>
                <p className="text-sm text-muted-foreground">Month Shelf Life</p>
              </div>
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
              Revolutionary sugar-free nutrition products that prove you don't need to sacrifice 
              flavor for health. Zero compromises, maximum satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300">
                {product.image && (
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
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
                      {product.priceNote && (
                        <p className="text-xs text-muted-foreground">
                          {product.priceNote}
                        </p>
                      )}
                      <p className="text-sm text-muted-foreground mt-1">
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

                  {product.applications && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-foreground mb-2">Applications:</h4>
                      <div className="flex flex-wrap gap-1">
                        {product.applications.map((app) => (
                          <Badge key={app} variant="outline" className="text-xs">
                            {app}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

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
            Partner with us to bring ElevenFit's revolutionary sugar-free innovation to the US market. 
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