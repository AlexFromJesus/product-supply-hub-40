import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    'header.brands': 'Our Partner Brands',
    'header.partnership': 'Partnership',
    'header.contact': 'Contact',
    
    // Hero
    'hero.title': 'Premium European Nutrition Brands',
    'hero.subtitle': 'Exclusive US distribution partnerships with leading European protein and nutrition manufacturers',
    'hero.cta': 'Become an Authorized Distributor',
    
    // Brands
    'brands.title': 'Our Partner Brands',
    'brands.subtitle': 'Representing premium European nutrition manufacturers with proven track records',
    
    // Why Choose
    'why.title': 'Why Choose NutriFlow?',
    'why.subtitle': 'Your trusted partner for premium European nutrition distribution',
    
    // Products
    'products.title': 'Product Categories',
    
    // Dealer Benefits
    'dealer.title': 'Authorized Distributor Network',
    
    // Contact
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'Ready to explore distribution opportunities?',
    'contact.firstName': 'First Name',
    'contact.lastName': 'Last Name',
    'contact.email': 'Email',
    'contact.company': 'Company',
    'contact.territory': 'Territory/Region',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
  },
  es: {
    // Header
    'header.brands': 'Nuestras Marcas Asociadas',
    'header.partnership': 'Sociedad',
    'header.contact': 'Contacto',
    
    // Hero
    'hero.title': 'Marcas Premium de Nutrición Europea',
    'hero.subtitle': 'Socios exclusivos de distribución en EE.UU. con los principales fabricantes europeos de proteínas y nutrición',
    'hero.cta': 'Conviértete en Distribuidor Autorizado',
    
    // Brands
    'brands.title': 'Nuestras Marcas Asociadas',
    'brands.subtitle': 'Representando fabricantes premium europeos de nutrición con historiales comprobados',
    
    // Why Choose
    'why.title': '¿Por Qué Elegir NutriFlow?',
    'why.subtitle': 'Tu socio de confianza para la distribución premium de nutrición europea',
    
    // Products
    'products.title': 'Categorías de Productos',
    
    // Dealer Benefits
    'dealer.title': 'Red de Distribuidores Autorizados',
    
    // Contact
    'contact.title': 'Ponte en Contacto',
    'contact.subtitle': '¿Listo para explorar oportunidades de distribución?',
    'contact.firstName': 'Nombre',
    'contact.lastName': 'Apellido',
    'contact.email': 'Correo Electrónico',
    'contact.company': 'Empresa',
    'contact.territory': 'Territorio/Región',
    'contact.message': 'Mensaje',
    'contact.send': 'Enviar Mensaje',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};