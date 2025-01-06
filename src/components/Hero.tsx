import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const backgrounds = [
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1462332420958-a05d1e002413?auto=format&fit=crop&q=80"
];

export function Hero({ onGetStarted }: { onGetStarted: () => void }) {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {backgrounds.map((bg, index) => (
        <div 
          key={bg}
          className="absolute inset-0 z-0 transition-opacity duration-1000"
          style={{
            backgroundImage: `url("${bg}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: currentBg === index ? 1 : 0,
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 transition-all duration-300">
          Explore the Universe of Possibilities
        </h1>
        <p className="text-xl sm:text-2xl text-gray-200 mb-8 transition-all duration-300">
          Embark on a journey to transform your digital presence
        </p>
        <button 
          onClick={onGetStarted}
          className="group inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-gray-100 hover:scale-105 hover:shadow-lg"
        >
          Get Started
          <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}