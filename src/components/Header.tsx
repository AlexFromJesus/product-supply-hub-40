
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

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
