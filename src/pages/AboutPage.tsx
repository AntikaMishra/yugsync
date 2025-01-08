import React from 'react';
import { Award, Users, Target, Briefcase } from 'lucide-react';

const stats = [
  { label: 'Years of Experience', value: '6+' },
  { label: 'Successful Projects', value: '50+' },
  { label: 'Client Satisfaction', value: '98%' },
  { label: 'Team Members', value: '15+' }
];

const values = [
  {
    title: 'Innovation',
    description: 'We constantly explore and implement cutting-edge technologies to deliver the best solutions.',
    icon: Target
  },
  {
    title: 'Excellence',
    description: 'We strive for excellence in every project, ensuring the highest quality standards.',
    icon: Award
  },
  {
    title: 'Collaboration',
    description: 'We work closely with our clients, fostering strong partnerships and mutual success.',
    icon: Users
  },
  {
    title: 'Integrity',
    description: 'We conduct our business with the highest level of professionalism and ethical standards.',
    icon: Briefcase
  }
];

export default function AboutPage() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            About YugSync Tech Solutions
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Transforming Businesses With Futuristic Tech Solutions.
          </p>
        </div>

        {/* Stats Section */}
        <div className="mt-20">
          <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
                <dt className="text-lg font-medium text-gray-500">{stat.label}</dt>
                <dd className="mt-2 text-4xl font-extrabold text-indigo-600">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Story Section */}
        <div className="mt-20">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">Our Story</h2>
              <p className="mt-4 text-lg text-gray-500">
              Founded in 2025, YugSync Tech Services may be a new name in the market, but we are driven by a passion for innovation and excellence. In a short span, we’ve established ourselves as a forward-thinking provider of cutting-edge technology solutions. Our team of experts is dedicated to delivering top-notch services in software development, automation, web app development, and iOS development. We believe in transforming challenges into opportunities, helping businesses navigate the complex digital landscape and achieve measurable success. At YugSync, we’re not just another tech company-we are a dynamic partner, eager to help you grow, innovate, and stay ahead in this ever-evolving digital world. Our commitment to delivering exceptional solutions positions us as a rising star, ready to make an impact in the tech industry.
              </p>
              <p className="mt-4 text-lg text-gray-500">
              Your Ideas-Our Innovations
              </p>
            </div>
            <div className="mt-10 lg:mt-0">
              <img
                className="rounded-xl shadow-xl ring-1 ring-black ring-opacity-5"
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
                alt="Our team"
              />
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">Our Values</h2>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div key={index} className="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
                <div className="flex justify-center">
                  <value.icon className="h-12 w-12 text-indigo-600" />
                </div>
                <h3 className="mt-6 text-xl font-medium text-gray-900">{value.title}</h3>
                <p className="mt-4 text-gray-500">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

       {/* Team Section */}
        
      </div>
    </div>
  );
}