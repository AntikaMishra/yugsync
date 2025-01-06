import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Atom } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-slate-800 fixed w-full top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center group">
            <div className="relative">
              <div className="relative transform group-hover:scale-110 transition-all duration-300">
                <Atom className="h-8 w-8 text-emerald-400 animate-pulse" />
                <div className="absolute inset-0 bg-emerald-400 blur-sm opacity-50 animate-pulse" />
              </div>
            </div>
            <span className="ml-3 text-xl font-bold text-white tracking-tight">
              <span className="font-black bg-gradient-to-r from-emerald-400 to-white bg-clip-text text-transparent">Yug</span>
              <span className="font-light">Sync</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-gray-300 hover:text-emerald-400 font-medium transition-all duration-200 relative group ${
                  location.pathname === item.href
                    ? 'text-emerald-400'
                    : 'text-gray-300'
                }`}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-emerald-400 p-2 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-emerald-400 hover:bg-gray-800 rounded-md transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
