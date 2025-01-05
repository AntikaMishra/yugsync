import React from 'react';
import { CheckCircle } from 'lucide-react';

const features = [
  'Over 7 years of industry experience',
  'Certified technology experts',
  'Proven track record of success',
  '24/7 technical support',
  'Customized solutions for your business',
  'Competitive pricing'
];

export default function About() {
  return (
    <div id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About YugSync Tech Solutions
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-600">
          Founded in 2025, YugSync Tech Services may be a new name in the market, but we are driven by a passion for innovation and excellence. In a short span, we’ve established ourselves as a forward-thinking provider of cutting-edge technology solutions.

Our team of experts is dedicated to delivering top-notch services in software development, automation, web app development, and iOS development. We believe in transforming challenges into opportunities, helping businesses navigate the complex digital landscape and achieve measurable success.

At YugSync, we’re not just another tech company-we are a dynamic partner, eager to help you grow, innovate, and stay ahead in this ever-evolving digital world. Our commitment to delivering exceptional solutions positions us as a rising star, ready to make an impact in the tech industry.
            </p>
            <div className="mt-10">
              <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-indigo-600" />
                    <span className="ml-2 text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <img
              className="rounded-lg shadow-xl"
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
              alt="Team meeting"
            />
          </div>
        </div>
      </div>
    </div>
  );
}