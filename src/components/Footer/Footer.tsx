import React from 'react';
import { Link } from 'react-router-dom';
import { Monitor } from 'lucide-react';
import FooterLinks from './FooterLinks';
import FooterNewsletter from './FooterNewsletter';
import FooterSocial from './FooterSocial';

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand and Description */}
          <div className="space-y-8 xl:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <Monitor className="h-8 w-8 text-indigo-500" />
              <span className="text-xl font-bold text-white">YugSync Tech Solutions</span>
            </Link>
            <p className="text-gray-400 text-base">
            YugSync Tech Solutions Redefining Business Success with Smart, Scalable, and Future-Driven IT Solutions. Empowering companies to innovate, adapt, and lead in the ever-evolving digital era.
            </p>
            <div className="flex space-x-6">
              <div className="text-gray-400">
                <strong className="block text-white">Global Headquarters</strong>
                Plot no 1 Block F <br />
                Ashok Vihar Phase 2 Sector 5<br />
                Gurgaon , Haryana India
              </div>
            </div>
            <FooterSocial />
          </div>

          {/* Links Section */}
          <div className="mt-12 xl:mt-0 xl:col-span-2">
            <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
              <FooterLinks />
              <FooterNewsletter />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-700 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <p className="text-base text-gray-400">
              © {new Date().getFullYear()} YugSync Tech Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6 md:justify-end">
              <Link to="/privacy" className="text-gray-400 hover:text-white">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white">
                Terms of Service
              </Link>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}