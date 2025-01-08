import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const backgrounds = [
  "https://res.cloudinary.com/ddmhkcwad/image/upload/v1736346214/digital-8560051_640_qafkhc.webp",
  "https://res.cloudinary.com/ddmhkcwad/image/upload/v1736346234/macbook-2573421_640_k8ec97.jpg",
  "https://res.cloudinary.com/ddmhkcwad/image/upload/v1736346249/technology-8676540_640_epktsj.webp"
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

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 transition-all duration-300">
          Your Idea Our Innovation
        </h1>
        <p className="text-xl sm:text-3xl text-gray-200 mb-8 transition-all duration-300">
          Innovate Beyond Boundaries
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