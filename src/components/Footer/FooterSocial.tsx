import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Github } from 'lucide-react';

const socialLinks = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'GitHub', href: '#', icon: Github }
];

export default function FooterSocial() {
  return (
    <div className="mt-8">
      <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
        Connect With Us
      </h3>
      <div className="mt-4 flex space-x-6">
        {socialLinks.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">{item.name}</span>
              <Icon className="h-6 w-6" />
            </a>
          );
        })}
      </div>
    </div>
  );
}