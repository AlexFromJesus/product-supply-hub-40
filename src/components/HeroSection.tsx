import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { ArrowRight, Package, Globe, TrendingUp } from "lucide-react";

export function HeroSection() {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen relative w-full overflow-hidden bg-gradient-hero flex flex-col items-center justify-center">
      <div className="absolute inset-0 w-full h-full bg-gradient-hero z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      
      {!isMobile && <Boxes />}
      
      <div className="relative z-30 text-center max-w-6xl mx-auto px-4 sm:px-6 pointer-events-none pt-16 sm:pt-4">
        <div className="animate-fade-in">
          <h1 className={cn("text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6")}>
            Official US Distributor
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Exclusive Access
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-2">
            Official US distributor for Europe's breakthrough nutrition brands. 
            Exclusive American access to PWD Nutrition, Protella & Elevenfit innovations - available only through our authorized network.
          </p>
          
          <div className="flex flex-col gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 pointer-events-auto w-full max-w-md sm:max-w-none mx-auto">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg shadow-glow transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              Access Exclusive Products
              <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white bg-white/10 text-white hover:bg-white hover:text-primary font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg transition-all duration-300 w-full sm:w-auto"
            >
              Join Authorized Network
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-16 px-2 pb-8 md:pb-0">
            <div className="text-center animate-slide-up">
              <div className="bg-white/10 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Package className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Exclusive Products</h3>
              <p className="text-sm sm:text-base text-gray-300">Official US access to Europe's breakthrough nutrition innovations</p>
            </div>
            
            <div className="text-center animate-slide-up [animation-delay:200ms]">
              <div className="bg-white/10 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Globe className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">US Compliance</h3>
              <p className="text-sm sm:text-base text-gray-300">FDA compliant operations with guaranteed US regulatory compliance</p>
            </div>
            
            <div className="text-center animate-slide-up [animation-delay:400ms]">
              <div className="bg-white/10 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Authorized Network</h3>
              <p className="text-sm sm:text-base text-gray-300">Protected territory rights with exclusive dealer benefits</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}