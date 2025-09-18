//src/app/page.js
//Homepage

import React from 'react';
import Hero from '../app/components/features/home-page/Hero';
import AboutUs from '../app/components/features/home-page/AboutUs';
import Services from '../app/components/features/home-page/Services';
import WhyUs from '../app/components/features/home-page/WhyUs';
import Education from '../app/components/features/home-page/Education';
import News from '../app/components/features/home-page/News';
import FAQ from '../app/components/features/home-page/FAQ';
import ContactUs from '../app/components/features/home-page/ContactUs';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Services />
      <WhyUs />
      <Education />
      <News />
      <FAQ />
      <ContactUs />
    </div>
  );
};

export default HomePage;