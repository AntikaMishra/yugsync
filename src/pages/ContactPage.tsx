import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Globe } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
          Let’s redefine your business together—partner with YugSync to unlock innovation and drive growth.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Contact Information</h3>
              <div className="mt-6 space-y-4">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-indigo-600" />
                  <span className="ml-4 text-gray-600">+91 6392669377</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-indigo-600" />
                  <span className="ml-4 text-gray-600">yugsync@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-indigo-600" />
                  <span className="ml-4 text-gray-600">Plot no 1 Block F Ashok Vihar Phase 2 Sector 5 Gurgaon Haryana</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900">Business Hours</h3>
              <div className="mt-6 space-y-4">
                <div className="flex items-center">
                  <Clock className="h-6 w-6 text-indigo-600" />
                  <span className="ml-4 text-gray-600">Monday - Saturday: 10:00 AM - 7:00 PM</span>
                </div>
                <div className="flex items-center">
                  <Globe className="h-6 w-6 text-indigo-600" />
                  <span className="ml-4 text-gray-600">24/7 Online Support Available</span>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-8">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  className="w-full h-64 object-cover rounded-lg"
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Office location"
                />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
          <form action="https://formbold.com/s/3ddpE" method="POST" className="space-y-6 bg-white rounded-lg px-8 py-6 shadow-lg">
            <div className="space-y-2">
              <h3 className="text-2xl font-medium text-gray-900">Send us a message</h3>
              <p className="text-base text-gray-500">Fill out this form and we will get in touch with you as soon as possible.</p>
            </div>

            <div className="mt-6 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  placeholder='John Doe'
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  placeholder='yugsync@gmail.com'
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  placeholder='+91 9393939393'
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  placeholder="Your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Send Message
              </button>
            </div>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
}