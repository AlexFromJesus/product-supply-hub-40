
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/contexts/LanguageContext";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

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
            <div className="hidden md:flex items-center space-x-6">
              <nav className="flex items-center space-x-6">
                <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-white/90 hover:text-white hover:bg-white/10 text-sm px-3 py-1">
                    {t('header.brands')}
                    <ChevronDown className="ml-1 h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-48 bg-background/95 backdrop-blur-sm border border-white/20">
                  <DropdownMenuItem asChild>
                    <button 
                      onClick={() => scrollToSection('brands')}
                      className="w-full text-left"
                    >
                      {t('header.brands')}
                    </button>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <button 
                      onClick={() => scrollToSection('brands')}
                      className="w-full text-left"
                    >
                      PWD Nutrition
                    </button>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <button 
                      onClick={() => scrollToSection('brands')}
                      className="w-full text-left"
                    >
                      Protella
                    </button>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <button 
                      onClick={() => scrollToSection('brands')}
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
                  {t('header.partnership')}
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-sm text-white/90 hover:text-white transition-colors duration-200 hover:underline underline-offset-4"
                >
                  {t('header.contact')}
                </button>
              </nav>

              {/* Language Toggle */}
              <div className="flex items-center space-x-2 text-sm">
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-2 py-1 rounded transition-colors ${
                    language === 'en' 
                      ? "bg-white/20 text-white" 
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  EN
                </button>
                <span className="text-white/50">|</span>
                <button
                  onClick={() => setLanguage('es')}
                  className={`px-2 py-1 rounded transition-colors ${
                    language === 'es' 
                      ? "bg-white/20 text-white" 
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  ES
                </button>
              </div>
            </div>

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
                  {t('header.brands')}
                </button>
                <button 
                  onClick={() => scrollToSection('brands')}
                  className="text-sm text-white/90 hover:text-white transition-colors duration-200 text-left pl-4"
                >
                  PWD Nutrition
                </button>
                <button 
                  onClick={() => scrollToSection('brands')}
                  className="text-sm text-white/90 hover:text-white transition-colors duration-200 text-left pl-4"
                >
                  Protella
                </button>
                <button 
                  onClick={() => scrollToSection('brands')}
                  className="text-sm text-white/90 hover:text-white transition-colors duration-200 text-left pl-4"
                >
                  ElevenFit
                </button>
                <button
                  onClick={() => scrollToSection('dealer-benefits')}
                  className="text-sm text-white/90 hover:text-white transition-colors duration-200 text-left"
                >
                  {t('header.partnership')}
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-sm text-white/90 hover:text-white transition-colors duration-200 text-left"
                >
                  {t('header.contact')}
                </button>
                
                {/* Mobile Language Toggle */}
                <div className="pt-2 border-t border-white/10">
                  <div className="flex items-center space-x-3">
                    <span className="text-sm text-white/90">Language:</span>
                    <button
                      onClick={() => setLanguage('en')}
                      className={`text-sm px-2 py-1 rounded transition-colors ${
                        language === 'en' 
                          ? "bg-white/20 text-white" 
                          : "text-white/70 hover:text-white"
                      }`}
                    >
                      EN
                    </button>
                    <span className="text-white/50">|</span>
                    <button
                      onClick={() => setLanguage('es')}
                      className={`text-sm px-2 py-1 rounded transition-colors ${
                        language === 'es' 
                          ? "bg-white/20 text-white" 
                          : "text-white/70 hover:text-white"
                      }`}
                    >
                      ES
                    </button>
                  </div>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
