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
              NutriFlow
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-white/90 hover:text-white hover:bg-white/10 text-sm px-3 py-1">
                    Our Brands
                    <ChevronDown className="ml-1 h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-48">
                  <DropdownMenuItem asChild>
                    <Link to="/manufacturers" className="w-full">
                      Our Exclusive Brands
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/manufacturers/pwd-nutrition" className="w-full">
                      PWD Nutrition
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/manufacturers/protella" className="w-full">
                      Protella
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/manufacturers/elevenfit" className="w-full">
                      ElevenFit
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <button
                onClick={() => scrollToSection('dealer-benefits')}
                className="text-sm text-white/90 hover:text-white transition-colors duration-200 hover:underline underline-offset-4"
              >
                Dealer Network
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-sm text-white/90 hover:text-white transition-colors duration-200 hover:underline underline-offset-4"
              >
                Become Authorized
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
                <Link 
                  to="/manufacturers"
                  onClick={closeMenu}
                  className="text-sm text-white/90 hover:text-white transition-colors duration-200 text-left"
                >
                  Our Exclusive Brands
                </Link>
                <Link 
                  to="/manufacturers/pwd-nutrition"
                  onClick={closeMenu}
                  className="text-sm text-white/90 hover:text-white transition-colors duration-200 text-left pl-4"
                >
                  PWD Nutrition
                </Link>
                <Link 
                  to="/manufacturers/protella"
                  onClick={closeMenu}
                  className="text-sm text-white/90 hover:text-white transition-colors duration-200 text-left pl-4"
                >
                  Protella
                </Link>
                <Link 
                  to="/manufacturers/elevenfit"
                  onClick={closeMenu}
                  className="text-sm text-white/90 hover:text-white transition-colors duration-200 text-left pl-4"
                >
                  ElevenFit
                </Link>
                <button
                  onClick={() => scrollToSection('dealer-benefits')}
                  className="text-sm text-white/90 hover:text-white transition-colors duration-200 text-left"
                >
                  Dealer Network
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-sm text-white/90 hover:text-white transition-colors duration-200 text-left"
                >
                  Become Authorized
                </button>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};