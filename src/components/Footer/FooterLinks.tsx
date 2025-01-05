import React from 'react';
import { Link } from 'react-router-dom';

const links = {
  services: [
    { name: 'Software Development', href: '/services#software' },
    { name: 'Automation ', href: '/services#automation' },
    { name: 'Web ', href: '/services#web' },
    { name: 'App ', href: '/services#app' },
    { name: 'IOS ', href: '/services#ios' },
    { name: 'E-commerce ', href: '/services#ecommerce' }
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/about#team' },
    { name: 'Careers', href: '/careers' },
    { name: 'News', href: '/news' },
    { name: 'Contact', href: '/contact' }
  ],
  resources: [
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Whitepapers', href: '/resources' },
    { name: 'Documentation', href: '/docs' },
    { name: 'Support', href: '/support' }
  ]
};

export default function FooterLinks() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Services</h3>
        <ul className="mt-4 space-y-3">
          {links.services.map((link) => (
            <li key={link.name}>
              <Link to={link.href} className="text-base text-gray-300 hover:text-white">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
        <ul className="mt-4 space-y-3">
          {links.company.map((link) => (
            <li key={link.name}>
              <Link to={link.href} className="text-base text-gray-300 hover:text-white">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Resources</h3>
        <ul className="mt-4 space-y-3">
          {links.resources.map((link) => (
            <li key={link.name}>
              <Link to={link.href} className="text-base text-gray-300 hover:text-white">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}