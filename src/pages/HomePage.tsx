import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Values from '../components/Values';




export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Values />
      <Contact />
    </>
  );
}