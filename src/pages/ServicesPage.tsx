import React from 'react';
import { Code2, Database, Cloud, Shield, LineChart, Settings, Server, Cpu, Network, Users, Workflow, Lock } from 'lucide-react';

const services = [
  {
    title: 'Custom Software Development',
    description: 'Tailored software solutions designed to meet your specific business needs. Our expert developers create scalable, maintainable, and efficient applications using the latest technologies.',
    icon: Code2,
    features: ['Web Applications', 'Mobile Apps', 'Desktop Software', 'API Development'],
    image: 'https://res.cloudinary.com/dsfxndyhf/image/upload/v1736180285/internet-4463031_640_l1bfsv.webp'
  },
  {
    title: 'Automation Solutions',
    description: 'Automation solutions that automate your business processes. Our team of experts creates custom automation solutions using the latest automation technologies',
    icon: Cloud,
    features: ['Process Optimization', 'Real-Time Monitoring', 'Customization', 'Integration Capabilities'],
    image: 'https://res.cloudinary.com/dsfxndyhf/image/upload/v1736104448/cloud-8598424_1280_koocok.jpg'
  },
  {
    title: 'Web Development',
    description: 'We bring your vision to life with cutting-edge web development solutions. Our team of experts delivers modern, responsive, and user-friendly web applications using the latest web technologies.',
    icon: LineChart,
    features: ['User-Friendly Interface', 'Mobile Responsiveness', 'High Performance', 'Security'],
    image:'https://res.cloudinary.com/dsfxndyhf/image/upload/v1736180785/website-3374825_640_d8joxt.webp'
  },
  {
    title: 'App Development',
    description: 'Mobile apps that bring your business to life on the go. Our team of experts creates cross-platform apps using the latest mobile technologies.',
    icon: Shield,
    features: ['User-Centric Design', 'Cross-Platform Compatibility', 'Performance Optimization', 'Robust Security'],
    image:'https://res.cloudinary.com/dsfxndyhf/image/upload/v1736180728/smartphone-6701409_640_e9depm.webp'
  },
  {
    title: 'IOS Development',
    description: 'iOS apps that bring your business to life on the go. Our team of experts creates cross-platform apps using the latest mobile technologies.',
    icon: Server,
    features: ['Seamless User Experience', 'High Performance', 'App Store Integration', 'Advanced Security'],
    image:'https://res.cloudinary.com/dsfxndyhf/image/upload/v1736180747/ui-771829_640_sjrjss.webp'
  },
  {
    title: 'Ecommerce Websites',
    description: 'E-commerce websites that bring your business to life online. Our team of experts creates responsive and user-friendly e-commerce solutions using the latest web technologies.',
    icon: Workflow,
    features: ['User-Friendly Navigation', 'Secure Payment Gateway', 'Product Search & Filtering', 'Mobile Responsiveness'],
    image: 'https://res.cloudinary.com/dsfxndyhf/image/upload/v1736180635/ecommerce-2140603_640_v6xgg3.jpg'
  }
];
export default function ServicesPage() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Our Services
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
          Innovative IT solutions to accelerate your business growth
          </p>
        </div>

        <div className="mt-20 space-y-16">
          {services.map((service, index) => (
            <div key={index} className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className={index % 2 === 0 ? '' : 'lg:order-2'}>
                <div className="relative">
                  <div className="relative bg-white p-8 border border-gray-200 rounded-2xl shadow-lg">
                    <div className="absolute -top-4 -left-4 bg-indigo-600 rounded-xl p-4">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="mt-4 text-2xl font-bold text-gray-900">{service.title}</h3>
                    <p className="mt-4 text-gray-500">{service.description}</p>
                    <ul className="mt-8 space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <div className="flex-shrink-0">
                            <svg className="h-5 w-5 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="ml-3 text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className={`mt-10 ${index % 2 === 0 ? 'lg:order-2' : ''} lg:mt-0`}>
              <img
                  className="rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 w-full h-[300px] object-cover"
                  src={`${service.image}`}
                  alt={service.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
