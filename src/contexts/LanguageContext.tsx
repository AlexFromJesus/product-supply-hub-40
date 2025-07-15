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
    'header.logo': 'Spanish Protein',
    
    // Hero
    'hero.title': 'Premium European Nutrition Brands',
    'hero.subtitle': 'Exclusive US distribution partnerships with leading European protein and nutrition manufacturers',
    'hero.cta': 'Become an Authorized Distributor',
    
    // Brands
    'brands.title': 'Our Partner Brands',
    'brands.subtitle': 'Representing premium European nutrition manufacturers with proven track records',
    'brands.pwd': 'PWD Nutrition',
    'brands.protella': 'Protella', 
    'brands.elevenfit': 'ElevenFit',
    
    // Why Choose
    'why.title': 'Why Choose NutriFlow?',
    'why.subtitle': 'Your trusted partner for premium European nutrition distribution',
    
    // Products
    'products.title': 'Product Categories',
    'products.subtitle': 'Explore our diverse range of premium nutrition products',
    
    // Dealer Benefits
    'dealer.title': 'Authorized Distributor Network',
    'dealer.subtitle': 'Join our qualified network of authorized distributors. Selective partnership means better support, training, and territorial development for serious partners only.',
    'dealer.badge': 'Partnership Program',
    'dealer.opportunities': 'Partnership Opportunities',
    'dealer.why.title': 'Why Our Authorized Network Works',
    'dealer.quality.title': 'Quality Over Quantity',
    'dealer.quality.desc': 'Selective qualification means better support for committed partners',
    'dealer.investment.title': 'Mutual Investment',
    'dealer.investment.desc': 'We invest in your success with ongoing training and development',
    'dealer.apply': 'Apply for Authorized Status',
    
    // Contact
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'Ready to explore distribution opportunities? Contact us to learn more about becoming an authorized distributor.',
    'contact.firstName': 'First Name',
    'contact.lastName': 'Last Name',
    'contact.email': 'Email',
    'contact.company': 'Company',
    'contact.territory': 'Territory/Region',
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'Tell us about your distribution experience, current market reach, and why you\'d be a good fit for our authorized network',
    'contact.send': 'Send Message',
    'contact.sending': 'Sending...',
    
    // Interactive Selector
    'selector.title': 'Premium European Product Lines',
    'selector.subtitle': 'Discover our carefully curated selection of high-quality nutrition brands',
    
    // Common
    'common.learnMore': 'Learn More',
    'common.getStarted': 'Get Started',
    'common.viewAll': 'View All',
  },
  es: {
    // Header
    'header.brands': 'Nuestras Marcas Asociadas',
    'header.partnership': 'Asociación',
    'header.contact': 'Contacto',
    'header.logo': 'Proteína Española',
    
    // Hero
    'hero.title': 'Marcas Premium de Nutrición Europea',
    'hero.subtitle': 'Asociaciones exclusivas de distribución en EE.UU. con los principales fabricantes europeos de proteínas y nutrición',
    'hero.cta': 'Conviértete en Distribuidor Autorizado',
    
    // Brands
    'brands.title': 'Nuestras Marcas Asociadas',
    'brands.subtitle': 'Representando fabricantes premium europeos de nutrición con historiales comprobados',
    'brands.pwd': 'PWD Nutrition',
    'brands.protella': 'Protella',
    'brands.elevenfit': 'ElevenFit',
    
    // Why Choose
    'why.title': '¿Por Qué Elegir NutriFlow?',
    'why.subtitle': 'Tu socio de confianza para la distribución premium de nutrición europea',
    
    // Products
    'products.title': 'Categorías de Productos',
    'products.subtitle': 'Explora nuestra diversa gama de productos premium de nutrición',
    
    // Dealer Benefits
    'dealer.title': 'Red de Distribuidores Autorizados',
    'dealer.subtitle': 'Únete a nuestra red calificada de distribuidores autorizados. La asociación selectiva significa mejor apoyo, capacitación y desarrollo territorial solo para socios serios.',
    'dealer.badge': 'Programa de Asociación',
    'dealer.opportunities': 'Oportunidades de Asociación',
    'dealer.why.title': 'Por Qué Funciona Nuestra Red Autorizada',
    'dealer.quality.title': 'Calidad Sobre Cantidad',
    'dealer.quality.desc': 'La calificación selectiva significa mejor apoyo para socios comprometidos',
    'dealer.investment.title': 'Inversión Mutua',
    'dealer.investment.desc': 'Invertimos en tu éxito con capacitación y desarrollo continuo',
    'dealer.apply': 'Solicitar Estatus Autorizado',
    
    // Contact
    'contact.title': 'Ponte en Contacto',
    'contact.subtitle': '¿Listo para explorar oportunidades de distribución? Contáctanos para aprender más sobre convertirte en un distribuidor autorizado.',
    'contact.firstName': 'Nombre',
    'contact.lastName': 'Apellido',
    'contact.email': 'Correo Electrónico',
    'contact.company': 'Empresa',
    'contact.territory': 'Territorio/Región',
    'contact.message': 'Mensaje',
    'contact.messagePlaceholder': 'Cuéntanos sobre tu experiencia en distribución, alcance de mercado actual, y por qué serías una buena opción para nuestra red autorizada',
    'contact.send': 'Enviar Mensaje',
    'contact.sending': 'Enviando...',
    
    // Interactive Selector
    'selector.title': 'Líneas de Productos Premium Europeos',
    'selector.subtitle': 'Descubre nuestra selección cuidadosamente curada de marcas de nutrición de alta calidad',
    
    // Common
    'common.learnMore': 'Aprender Más',
    'common.getStarted': 'Comenzar',
    'common.viewAll': 'Ver Todo',
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