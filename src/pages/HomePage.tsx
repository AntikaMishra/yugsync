import React from 'react';
import {Hero} from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Values from '../components/Values';
import {Content} from '../components/Content';
import { useState } from 'react';





export default function HomePage() {
  const [showContent, setShowContent] = useState(false);
  return (
    <>
       <main className="pt-16">
        {showContent ? (
          <Content />
        ) : (
          <Hero onGetStarted={() => setShowContent(true)} />
        )}
      </main>
      <Services />
      <About />
      <Testimonials />
      <Values />
      <Contact />
    </>
  );
}