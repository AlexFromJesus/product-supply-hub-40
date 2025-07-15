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
    'hero.title1': 'Europe\'s Next-Gen',
    'hero.title2': 'Protein Innovations',
    'hero.subtitle': 'Revolutionary protein products from PWD Nutrition, Protella & ElevenFit. Join America\'s premier authorized distributor network for exclusive access.',
    'hero.cta1': 'Join Authorized Network',
    'hero.cta2': 'View Network Benefits',
    'hero.feature1.title': 'Proven European Partnerships',
    'hero.feature1.desc': 'Established relationships with breakthrough nutrition innovators',
    'hero.feature2.title': 'US Market Expertise',
    'hero.feature2.desc': 'FDA compliance, import regulations, and market intelligence handled',
    'hero.feature3.title': 'Authorized Network Benefits',
    'hero.feature3.desc': 'Training, support, and territorial development you can\'t get elsewhere',
    
    // Brands
    'brands.title': 'Our Partner Brands',
    'brands.subtitle': 'Trusted US specialist for Europe\'s leading nutrition brands. Your expert pathway to proven European innovation in American markets.',
    'brands.pwd.title': 'US Specialist Partner - PWD Nutrition',
    'brands.pwd.desc': '15 years of expertise in dietetics, nutrition and food supplements. NutriFlow specializes in bringing PWD\'s pharmaceutical-grade products to American markets with full regulatory support.',
    'brands.pwd.specialty1': 'Protein Cookies',
    'brands.pwd.specialty2': 'Protein Cake',
    'brands.pwd.specialty3': 'Pharmaceutical Grade',
    'brands.pwd.product1': '34% Protein Cookies (4 flavors)',
    'brands.pwd.product2': 'Protein Cake (20% protein)',
    'brands.pwd.product3': 'Protein Bun (20% protein)',
    'brands.pwd.exclusive': 'Trusted US market specialist',
    'brands.protella.title': 'US Specialist Partner - Protella',
    'brands.protella.desc': 'Premium protein products made in Spain with Creapure®, Sucramix®, DigeZyme®, and Peptan® certifications. We handle all US market requirements for Protella\'s premium protein innovations, ensuring seamless market entry.',
    'brands.protella.specialty1': 'Whey Protein Products',
    'brands.protella.specialty2': 'Premium Protein Creams',
    'brands.protella.specialty3': 'Creatine Supplements',
    'brands.protella.product1': 'Whey Protein American Cookie',
    'brands.protella.product2': 'Protein Chocolate Creams',
    'brands.protella.product3': 'Creatina Creapure® Doughnut',
    'brands.protella.exclusive': 'Expert US market guidance',
    'brands.elevenfit.title': 'US Specialist Partner - ElevenFit',
    'brands.elevenfit.desc': 'Revolutionary sugar-free nutrition with 50 instant drink flavors. NutriFlow manages US distribution strategy for ElevenFit\'s revolutionary 50-flavor collection.',
    'brands.elevenfit.specialty1': '50 Flavor Collection',
    'brands.elevenfit.specialty2': 'Sugar-Free Products',
    'brands.elevenfit.specialty3': 'Instant Mixes',
    'brands.elevenfit.product1': '50 Flavor Instant Drinks',
    'brands.elevenfit.product2': 'Zero-Calorie Syrups',
    'brands.elevenfit.product3': 'Individual Flavor Collections',
    'brands.elevenfit.exclusive': 'Proven US distribution expertise',
    'brands.specialties': 'Specialties:',
    'brands.featured': 'Featured Products:',
    'brands.guidance': 'Specialist guidance for US market success',
    'brands.request': 'Request Product Information',
    'brands.trusted': 'Trusted US Specialist',
    
    // Why Choose
    'why.title': 'Your Gateway to European Innovation',
    'why.subtitle': 'Access revolutionary protein products that are transforming the European market. We make European innovation simple for American distributors.',
    'why.badge': 'Authorized Distribution Network',
    'why.benefit1.title': 'Proven European Partnerships',
    'why.benefit1.desc': 'Established relationships with breakthrough nutrition manufacturers delivering consistent results.',
    'why.benefit2.title': 'Complete US Compliance',
    'why.benefit2.desc': 'All regulatory requirements, FDA documentation, and import processes handled expertly.',
    'why.benefit3.title': 'Market Intelligence',
    'why.benefit3.desc': 'Deep understanding of US market demands, pricing strategies, and competitive positioning.',
    'why.benefit4.title': 'Streamlined Operations',
    'why.benefit4.desc': 'One trusted US partner managing all European relationships for simplified business operations.',
    'why.benefit5.title': 'Comprehensive Support',
    'why.benefit5.desc': 'Ongoing training, marketing materials, and business development support for your success.',
    'why.benefit6.title': 'Faster Market Entry',
    'why.benefit6.desc': 'Immediate access to established supply chains and proven market entry strategies.',
    'why.innovation.title': 'European Innovation Made Simple',
    'why.innovation.point1': 'Access to PWD Nutrition\'s pharmaceutical-grade protein innovations',
    'why.innovation.point2': 'Protella\'s revolutionary protein spreads and bakery solutions',
    'why.innovation.point3': 'ElevenFit\'s game-changing 50-flavor protein collection',
    'why.innovation.point4': 'Complete regulatory compliance and market entry support included',
    
    // Dealer Benefits
    'dealer.title': 'Authorized Distributor Network',
    'dealer.subtitle': 'Join our qualified network of authorized distributors. Selective partnership means better support, training, and territorial development for serious partners only.',
    'dealer.badge': 'Partnership Program',
    'dealer.opportunity': 'Partnership Opportunities',
    'dealer.urgency1': 'Limited network positions available',
    'dealer.urgency2': 'Qualification process ensures selectivity',
    'dealer.urgency3': 'Territory development support included',
    'dealer.urgency4': 'Exclusive training and certification programs',
    'dealer.benefit1.title': 'Qualification Process',
    'dealer.benefit1.desc': 'Selective vetting ensures you\'re partnering with serious, committed distributors only.',
    'dealer.benefit1.highlight': 'Quality Partners',
    'dealer.benefit2.title': 'Network Priority Access',
    'dealer.benefit2.desc': 'First access to new products, launches, and exclusive opportunities within our network.',
    'dealer.benefit2.highlight': 'Member Benefits',
    'dealer.benefit3.title': 'Marketing & Sales Support',
    'dealer.benefit3.desc': 'Product knowledge, sales training, and promotional materials to help you succeed in the market.',
    'dealer.benefit3.highlight': 'Marketing Support',
    'dealer.benefit4.title': 'Certification & Training',
    'dealer.benefit4.desc': 'Ongoing education, product certification, and European manufacturer knowledge sharing.',
    'dealer.benefit4.highlight': 'Expert Training',
    'dealer.benefit5.title': 'Territory Development',
    'dealer.benefit5.desc': 'Strategic market development support and business growth planning assistance.',
    'dealer.benefit5.highlight': 'Growth Support',
    'dealer.benefit6.title': 'Network Events & Knowledge',
    'dealer.benefit6.desc': 'Exclusive distributor events, market intelligence sharing, and peer networking opportunities.',
    'dealer.benefit6.highlight': 'Community Benefits',
    'dealer.network.title': 'Why Our Authorized Network Works',
    'dealer.network.quality.title': 'Quality Over Quantity',
    'dealer.network.quality.desc': 'Selective qualification means better support for committed partners',
    'dealer.network.investment.title': 'Mutual Investment',
    'dealer.network.investment.desc': 'We invest in your success with ongoing training and development',
    'dealer.apply': 'Apply for Authorized Status',
    
    // Contact
    'contact.title': 'Join Our Authorized Network',
    'contact.subtitle': 'Apply for authorized distributor status and access the European nutrition brands your market demands. Selective qualification ensures better support for committed partners.',
    'contact.form.title': 'Authorized Distributor Application',
    'contact.firstName': 'First Name',
    'contact.lastName': 'Last Name',
    'contact.email': 'Email',
    'contact.company': 'Company',
    'contact.territory': 'Territory/Region',
    'contact.message': 'Message',
    'contact.message.placeholder': 'Tell us about your distribution experience, current market reach, and why you\'d be a good fit for our authorized network',
    'contact.submit': 'Apply for Authorized Status',
    'contact.submitting': 'Sending Application...',
    'contact.info.email': 'Email',
    'contact.info.phone': 'Phone',
    'contact.info.office': 'Office',
    'contact.info.hours': 'Business Hours',
    'contact.info.office.address': 'Green Bay, Wisconsin\nUnited States',
    'contact.info.hours.schedule': 'Mon - Fri: 9:00 AM - 6:00 PM EST\nSat: 10:00 AM - 2:00 PM EST',
  },
  es: {
    // Header
    'header.brands': 'Nuestras Marcas Asociadas',
    'header.partnership': 'Sociedad',
    'header.contact': 'Contacto',
    
    // Hero
    'hero.title1': 'Innovaciones Proteicas',
    'hero.title2': 'Europeas de Nueva Generación',
    'hero.subtitle': 'Productos proteicos revolucionarios de PWD Nutrition, Protella y ElevenFit. Únete a la red de distribuidores autorizados líder en América para acceso exclusivo.',
    'hero.cta1': 'Únete a la Red Autorizada',
    'hero.cta2': 'Ver Beneficios de la Red',
    'hero.feature1.title': 'Asociaciones Europeas Comprobadas',
    'hero.feature1.desc': 'Relaciones establecidas con innovadores nutricionales revolucionarios',
    'hero.feature2.title': 'Experiencia en el Mercado de EE.UU.',
    'hero.feature2.desc': 'Cumplimiento de la FDA, regulaciones de importación e inteligencia de mercado manejadas',
    'hero.feature3.title': 'Beneficios de la Red Autorizada',
    'hero.feature3.desc': 'Entrenamiento, apoyo y desarrollo territorial que no puedes obtener en otro lugar',
    
    // Brands
    'brands.title': 'Nuestras Marcas Asociadas',
    'brands.subtitle': 'Especialista de confianza en EE.UU. para las marcas de nutrición líderes de Europa. Tu camino experto hacia la innovación europea comprobada en mercados americanos.',
    'brands.pwd.title': 'Socio Especialista en EE.UU. - PWD Nutrition',
    'brands.pwd.desc': '15 años de experiencia en dietética, nutrición y suplementos alimenticios. NutriFlow se especializa en traer los productos de grado farmacéutico de PWD a los mercados americanos con soporte regulatorio completo.',
    'brands.pwd.specialty1': 'Galletas Proteicas',
    'brands.pwd.specialty2': 'Pastel Proteico',
    'brands.pwd.specialty3': 'Grado Farmacéutico',
    'brands.pwd.product1': 'Galletas Proteicas 34% (4 sabores)',
    'brands.pwd.product2': 'Pastel Proteico (20% proteína)',
    'brands.pwd.product3': 'Pan Proteico (20% proteína)',
    'brands.pwd.exclusive': 'Especialista confiable en el mercado de EE.UU.',
    'brands.protella.title': 'Socio Especialista en EE.UU. - Protella',
    'brands.protella.desc': 'Productos proteicos premium hechos en España con certificaciones Creapure®, Sucramix®, DigeZyme® y Peptan®. Manejamos todos los requisitos del mercado de EE.UU. para las innovaciones proteicas premium de Protella, asegurando una entrada perfecta al mercado.',
    'brands.protella.specialty1': 'Productos de Proteína de Suero',
    'brands.protella.specialty2': 'Cremas Proteicas Premium',
    'brands.protella.specialty3': 'Suplementos de Creatina',
    'brands.protella.product1': 'Proteína de Suero Galleta Americana',
    'brands.protella.product2': 'Cremas de Chocolate Proteicas',
    'brands.protella.product3': 'Creatina Creapure® Rosquilla',
    'brands.protella.exclusive': 'Orientación experta en el mercado de EE.UU.',
    'brands.elevenfit.title': 'Socio Especialista en EE.UU. - ElevenFit',
    'brands.elevenfit.desc': 'Nutrición revolucionaria sin azúcar con 50 sabores de bebidas instantáneas. NutriFlow maneja la estrategia de distribución en EE.UU. para la colección revolucionaria de 50 sabores de ElevenFit.',
    'brands.elevenfit.specialty1': 'Colección de 50 Sabores',
    'brands.elevenfit.specialty2': 'Productos Sin Azúcar',
    'brands.elevenfit.specialty3': 'Mezclas Instantáneas',
    'brands.elevenfit.product1': 'Bebidas Instantáneas de 50 Sabores',
    'brands.elevenfit.product2': 'Jarabes Cero Calorías',
    'brands.elevenfit.product3': 'Colecciones de Sabores Individuales',
    'brands.elevenfit.exclusive': 'Experiencia comprobada en distribución de EE.UU.',
    'brands.specialties': 'Especialidades:',
    'brands.featured': 'Productos Destacados:',
    'brands.guidance': 'Orientación especializada para el éxito en el mercado de EE.UU.',
    'brands.request': 'Solicitar Información del Producto',
    'brands.trusted': 'Especialista Confiable en EE.UU.',
    
    // Why Choose
    'why.title': 'Tu Puerta de Entrada a la Innovación Europea',
    'why.subtitle': 'Accede a productos proteicos revolucionarios que están transformando el mercado europeo. Hacemos que la innovación europea sea simple para los distribuidores americanos.',
    'why.badge': 'Red de Distribución Autorizada',
    'why.benefit1.title': 'Asociaciones Europeas Comprobadas',
    'why.benefit1.desc': 'Relaciones establecidas con fabricantes de nutrición revolucionarios que entregan resultados consistentes.',
    'why.benefit2.title': 'Cumplimiento Completo en EE.UU.',
    'why.benefit2.desc': 'Todos los requisitos regulatorios, documentación de la FDA y procesos de importación manejados expertamente.',
    'why.benefit3.title': 'Inteligencia de Mercado',
    'why.benefit3.desc': 'Comprensión profunda de las demandas del mercado de EE.UU., estrategias de precios y posicionamiento competitivo.',
    'why.benefit4.title': 'Operaciones Simplificadas',
    'why.benefit4.desc': 'Un socio confiable en EE.UU. manejando todas las relaciones europeas para operaciones comerciales simplificadas.',
    'why.benefit5.title': 'Soporte Integral',
    'why.benefit5.desc': 'Entrenamiento continuo, materiales de marketing y soporte de desarrollo empresarial para tu éxito.',
    'why.benefit6.title': 'Entrada Más Rápida al Mercado',
    'why.benefit6.desc': 'Acceso inmediato a cadenas de suministro establecidas y estrategias comprobadas de entrada al mercado.',
    'why.innovation.title': 'Innovación Europea Simplificada',
    'why.innovation.point1': 'Acceso a las innovaciones proteicas de grado farmacéutico de PWD Nutrition',
    'why.innovation.point2': 'Soluciones revolucionarias de untables proteicos y panadería de Protella',
    'why.innovation.point3': 'Colección revolucionaria de 50 sabores proteicos de ElevenFit',
    'why.innovation.point4': 'Cumplimiento regulatorio completo y soporte de entrada al mercado incluido',
    
    // Dealer Benefits
    'dealer.title': 'Red de Distribuidores Autorizados',
    'dealer.subtitle': 'Únete a nuestra red calificada de distribuidores autorizados. La asociación selectiva significa mejor soporte, entrenamiento y desarrollo territorial solo para socios serios.',
    'dealer.badge': 'Programa de Sociedad',
    'dealer.opportunity': 'Oportunidades de Sociedad',
    'dealer.urgency1': 'Posiciones limitadas en la red disponibles',
    'dealer.urgency2': 'El proceso de calificación asegura selectividad',
    'dealer.urgency3': 'Soporte de desarrollo territorial incluido',
    'dealer.urgency4': 'Programas exclusivos de entrenamiento y certificación',
    'dealer.benefit1.title': 'Proceso de Calificación',
    'dealer.benefit1.desc': 'La evaluación selectiva asegura que te asocies solo con distribuidores serios y comprometidos.',
    'dealer.benefit1.highlight': 'Socios de Calidad',
    'dealer.benefit2.title': 'Acceso Prioritario a la Red',
    'dealer.benefit2.desc': 'Primer acceso a nuevos productos, lanzamientos y oportunidades exclusivas dentro de nuestra red.',
    'dealer.benefit2.highlight': 'Beneficios de Membresía',
    'dealer.benefit3.title': 'Soporte de Marketing y Ventas',
    'dealer.benefit3.desc': 'Conocimiento del producto, entrenamiento en ventas y materiales promocionales para ayudarte a tener éxito en el mercado.',
    'dealer.benefit3.highlight': 'Soporte de Marketing',
    'dealer.benefit4.title': 'Certificación y Entrenamiento',
    'dealer.benefit4.desc': 'Educación continua, certificación de productos y compartir conocimiento de fabricantes europeos.',
    'dealer.benefit4.highlight': 'Entrenamiento Experto',
    'dealer.benefit5.title': 'Desarrollo Territorial',
    'dealer.benefit5.desc': 'Soporte estratégico de desarrollo de mercado y asistencia en planificación de crecimiento empresarial.',
    'dealer.benefit5.highlight': 'Soporte de Crecimiento',
    'dealer.benefit6.title': 'Eventos de Red y Conocimiento',
    'dealer.benefit6.desc': 'Eventos exclusivos para distribuidores, compartir inteligencia de mercado y oportunidades de networking entre pares.',
    'dealer.benefit6.highlight': 'Beneficios de Comunidad',
    'dealer.network.title': 'Por Qué Funciona Nuestra Red Autorizada',
    'dealer.network.quality.title': 'Calidad Sobre Cantidad',
    'dealer.network.quality.desc': 'La calificación selectiva significa mejor soporte para socios comprometidos',
    'dealer.network.investment.title': 'Inversión Mutua',
    'dealer.network.investment.desc': 'Invertimos en tu éxito con entrenamiento y desarrollo continuos',
    'dealer.apply': 'Solicitar Estatus Autorizado',
    
    // Contact
    'contact.title': 'Únete a Nuestra Red Autorizada',
    'contact.subtitle': 'Solicita el estatus de distribuidor autorizado y accede a las marcas de nutrición europeas que tu mercado demanda. La calificación selectiva asegura mejor soporte para socios comprometidos.',
    'contact.form.title': 'Solicitud de Distribuidor Autorizado',
    'contact.firstName': 'Nombre',
    'contact.lastName': 'Apellido',
    'contact.email': 'Correo Electrónico',
    'contact.company': 'Empresa',
    'contact.territory': 'Territorio/Región',
    'contact.message': 'Mensaje',
    'contact.message.placeholder': 'Cuéntanos sobre tu experiencia de distribución, alcance actual del mercado y por qué serías una buena opción para nuestra red autorizada',
    'contact.submit': 'Solicitar Estatus Autorizado',
    'contact.submitting': 'Enviando Solicitud...',
    'contact.info.email': 'Correo Electrónico',
    'contact.info.phone': 'Teléfono',
    'contact.info.office': 'Oficina',
    'contact.info.hours': 'Horario Comercial',
    'contact.info.office.address': 'Green Bay, Wisconsin\nEstados Unidos',
    'contact.info.hours.schedule': 'Lun - Vie: 9:00 AM - 6:00 PM EST\nSáb: 10:00 AM - 2:00 PM EST',
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