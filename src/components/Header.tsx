
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 animate-fade-in">
      <div className="bg-white/5 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-12 sm:h-16">
            {/* Logo/Brand */}
            <Link to="/" className="text-lg font-bold text-white hover:text-primary transition-colors">
              Spanish Protein
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-white/90 hover:text-white hover:bg-white/10 text-sm px-3 py-1">
                    Our Partner Brands
                    <ChevronDown className="ml-1 h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-48">
                  <DropdownMenuItem asChild>
                    <button 
                      onClick={() => scrollToSection('brands')}
                      className="w-full text-left"
                    >
                      Our Partner Brands
                    </button>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <button 
                      onClick={() => scrollToSection('pwd-nutrition')}
                      className="w-full text-left"
                    >
                      PWD Nutrition
                    </button>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <button 
                      onClick={() => scrollToSection('protella')}
                      className="w-full text-left"
                    >
                      Protella
                    </button>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <button 
                      onClick={() => scrollToSection('elevenfit')}
                      className="w-full text-left"
                    >
                      ElevenFit
                    </button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <button
                onClick={() => scrollToSection('dealer-benefits')}
                className="text-sm text-white/90 hover:text-white transition-colors duration-200 hover:underline underline-offset-4"
              >
                Partnership
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-sm text-white/90 hover:text-white transition-colors duration-200 hover:underline underline-offset-4"
              >
                Contact
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white/90 hover:text-white transition-colors duration-200"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-white/10 animate-fade-in">
              <nav className="flex flex-col space-y-3 px-2">
                <button 
                  onClick={() => scrollToSection('brands')}
                  className="text-sm text-white/90 hover:text-white transition-colors duration-200 text-left"
                >
                  Our Partner Brands
                </button>
                <button 
                  onClick={() => scrollToSection('pwd-nutrition')}
                  className="text-sm text-white/90 hover:text-white transition-colors duration-200 text-left pl-4"
                >
                  PWD Nutrition
                </button>
                <button 
                  onClick={() => scrollToSection('protella')}
                  className="text-sm text-white/90 hover:text-white transition-colors duration-200 text-left pl-4"
                >
                  Protella
                </button>
                <button 
                  onClick={() => scrollToSection('elevenfit')}
                  className="text-sm text-white/90 hover:text-white transition-colors duration-200 text-left pl-4"
                >
                  ElevenFit
                </button>
                <button
                  onClick={() => scrollToSection('dealer-benefits')}
                  className="text-sm text-white/90 hover:text-white transition-colors duration-200 text-left"
                >
                  Partnership
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-sm text-white/90 hover:text-white transition-colors duration-200 text-left"
                >
                  Contact
                </button>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
