import React, { useState, useEffect } from 'react';
import { FaCookie, FaBreadSlice, FaVial, FaFlask, FaStar } from 'react-icons/fa';
import { Skeleton } from './skeleton';

const InteractiveSelector = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [permanentActiveIndex, setPermanentActiveIndex] = useState(0);
  const [animatedOptions, setAnimatedOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  
  const options = [
    {
      title: "Protein Cake",
      description: "Chocolate Flavor - 20% Protein",
      image: "/lovable-uploads/9c0f1d1a-3704-4fad-83cd-4ae1735d39d9.png",
      icon: <FaStar size={24} className="text-white" />
    },
    {
      title: "Protein Bun",
      description: "High Protein & Fiber - 20% Protein",
      image: "/lovable-uploads/9b3b7666-0195-439a-a498-07f51687ced3.png",
      icon: <FaBreadSlice size={24} className="text-white" />
    },
    {
      title: "CFM Isolate Protein",
      description: "Doughnut Flavor - 100% Isolate",
      image: "/lovable-uploads/b831714e-c3aa-4f5b-9f6e-ca3460a27259.png",
      icon: <FaVial size={24} className="text-white" />
    },
    {
      title: "Creatine Monohydrate",
      description: "Popping Candy - Professional Line",
      image: "/lovable-uploads/38faefc4-b43a-42da-8fe0-729f94105f33.png",
      icon: <FaFlask size={24} className="text-white" />
    },
    {
      title: "Protein Cream",
      description: "Choco Hazelnut - 23% Protein",
      image: "/lovable-uploads/a9ba3227-f2a3-4533-a41e-a3d2414c511e.png",
      icon: <FaStar size={24} className="text-white" />
    },
    {
      title: "Protein Marmalade",
      description: "Peach Flavor - 18% Protein",
      image: "/lovable-uploads/75efc5af-f0a9-4c2b-a11a-11329c0c9d7b.png",
      icon: <FaCookie size={24} className="text-white" />
    }
  ];

  const handleOptionClick = (index) => {
    setPermanentActiveIndex(index);
    setActiveIndex(index);
  };

  const handleOptionHover = (index) => {
    setActiveIndex(index);
  };

  const handleOptionLeave = () => {
    setActiveIndex(permanentActiveIndex);
  };

  // Detect mobile on mount
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Preload critical images
  useEffect(() => {
    const preloadImages = options.slice(0, 3).map(option => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = resolve;
        img.src = option.image;
      });
    });
    
    Promise.all(preloadImages).then(() => {
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    if (isLoading) return;
    
    const timers = [];
    const delay = isMobile ? 50 : 180; // Much faster on mobile
    
    // Show first option immediately on mobile
    if (isMobile) {
      setAnimatedOptions([0]);
    }
    
    options.forEach((_, i) => {
      const timer = setTimeout(() => {
        setAnimatedOptions(prev => [...prev, i]);
      }, isMobile && i === 0 ? 0 : delay * i);
      timers.push(timer);
    });
    
    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [isMobile, isLoading]);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-background font-sans text-foreground py-8 sm:py-16 overflow-x-hidden"> 
      {/* Header Section */}
      <div className="w-full max-w-4xl px-4 sm:px-6 mt-4 sm:mt-8 mb-4 sm:mb-2 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 animate-fadeInTop delay-300 px-2">Next-Gen Protein Products For America</h2>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-8 animate-fadeInTop delay-600 px-2">Bringing Europe's most innovative protein solutions to the American market with premium quality and taste.</p>
      </div>

      <div className="h-6 sm:h-12"></div>

      {/* Mobile Cards View */}
      <div className="block md:hidden w-full max-w-sm mx-auto px-4 space-y-4">
        {isLoading ? (
          // Loading skeleton for mobile
          <div className="space-y-4">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="rounded-xl overflow-hidden">
                <Skeleton className="h-48 w-full" />
              </div>
            ))}
          </div>
        ) : (
          options.map((option, index) => (
            <div
              key={index}
              className={`
                relative rounded-xl overflow-hidden transition-all duration-300 cursor-pointer
                ${activeIndex === index ? 'ring-2 ring-primary' : ''}
                ${animatedOptions.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
              `}
              style={{
                transitionDelay: `${index * 50}ms`
              }}
              onClick={() => handleOptionClick(index)}
            >
            <div className="relative h-48 overflow-visible">
              <img
                src={option.image}
                alt={option.title}
                className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-110 hover:z-10"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    {option.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg">{option.title}</h3>
                    <p className="text-white/80 text-sm">{option.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          ))
        )}
      </div>

      {/* Desktop Options Container */}
      <div className="hidden md:flex options w-full max-w-[1200px] min-w-[800px] h-[500px] mx-0 items-stretch overflow-hidden relative">
        {options.map((option, index) => (
          <div
            key={index}
            className={`
              option relative flex flex-col justify-end overflow-hidden transition-all duration-700 ease-in-out
              ${activeIndex === index ? 'active' : ''}
            `}
            style={{
              backgroundImage: `url('${option.image}')`,
              backgroundSize: activeIndex === index ? 'auto 100%' : 'auto 120%',
              transition: 'all 0.7s ease-in-out, background-size 0.3s ease-out',
              backgroundPosition: 'center',
              backfaceVisibility: 'hidden',
              opacity: animatedOptions.includes(index) ? 1 : 0,
              transform: animatedOptions.includes(index) ? 'translateX(0)' : 'translateX(-60px)',
              minWidth: '60px',
              minHeight: '100px',
              margin: 0,
              borderRadius: 0,
              borderWidth: '2px',
              borderStyle: 'solid',
              borderColor: activeIndex === index ? '#fff' : '#292929',
              cursor: 'pointer',
              backgroundColor: '#18181b',
              boxShadow: activeIndex === index 
                ? '0 20px 60px rgba(0,0,0,0.50)' 
                : '0 10px 30px rgba(0,0,0,0.30)',
              flex: activeIndex === index ? '7 1 0%' : '1 1 0%',
              zIndex: activeIndex === index ? 10 : 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              position: 'relative',
              overflow: 'hidden',
              willChange: 'flex-grow, box-shadow, background-size, background-position'
            }}
            onClick={() => handleOptionClick(index)}
            onMouseEnter={() => handleOptionHover(index)}
            onMouseLeave={handleOptionLeave}
          >
            {/* Shadow effect */}
            <div 
              className="shadow absolute left-0 right-0 pointer-events-none transition-all duration-700 ease-in-out"
              style={{
                bottom: activeIndex === index ? '0' : '-40px',
                height: '120px',
                boxShadow: activeIndex === index 
                  ? 'inset 0 -120px 120px -120px #000, inset 0 -120px 120px -80px #000' 
                  : 'inset 0 -120px 0px -120px #000, inset 0 -120px 0px -80px #000'
              }}
            ></div>
            
            {/* Label with icon and info */}
            <div className="label absolute left-0 right-0 bottom-5 flex items-center justify-start h-12 z-2 pointer-events-none px-4 gap-3 w-full">
              <div className="icon min-w-[44px] max-w-[44px] h-[44px] flex items-center justify-center rounded-full bg-[rgba(32,32,32,0.85)] backdrop-blur-[10px] shadow-[0_1px_4px_rgba(0,0,0,0.18)] border-2 border-[#444] flex-shrink-0 flex-grow-0 transition-all duration-200">
                {option.icon}
              </div>
              <div className="info text-white whitespace-pre relative">
                <div 
                  className="main font-bold text-lg transition-all duration-700 ease-in-out"
                  style={{
                    opacity: activeIndex === index ? 1 : 0,
                    transform: activeIndex === index ? 'translateX(0)' : 'translateX(25px)'
                  }}
                >
                  {option.title}
                </div>
                <div 
                  className="sub text-base text-gray-300 transition-all duration-700 ease-in-out"
                  style={{
                    opacity: activeIndex === index ? 1 : 0,
                    transform: activeIndex === index ? 'translateX(0)' : 'translateX(25px)'
                  }}
                >
                  {option.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Custom animations */}
      <style>{`
        @keyframes slideFadeIn {
          0% {
            opacity: 0;
            transform: translateX(-60px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInFromTop {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInTop {
          opacity: 0;
          transform: translateY(-20px);
          animation: fadeInFromTop 0.8s ease-in-out forwards;
        }
        
        .delay-300 {
          animation-delay: 0.3s;
        }
        
        .delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
    </div>
  );
};

export default InteractiveSelector;