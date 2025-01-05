import React from "react";

import { Award, Users, Target, Briefcase } from 'lucide-react';

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


export default function Values() {
    return (
        <>
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

        
        </>
    );
}