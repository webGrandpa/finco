// Homepage with Lazy Loading

import React from 'react';
import dynamic from 'next/dynamic';
import Hero from '../app/components/features/home-page/Hero';
import Loader from './components/loader/Loader';

// Lazy load ing
const AboutUs = dynamic(() => import('../app/components/features/home-page/AboutUs'), {
  loading: () => <Loader />,
});
const Services = dynamic(() => import('../app/components/features/home-page/Services'), {
  loading: () => <Loader />,
});
const WhyUs = dynamic(() => import('../app/components/features/home-page/WhyUs'), {
  loading: () => <Loader />,
});
const Education = dynamic(() => import('../app/components/features/home-page/Education'), {
  loading: () => <Loader />,
});
const News = dynamic(() => import('../app/components/features/home-page/News'), {
  loading: () => <Loader />,
});
const FAQ = dynamic(() => import('../app/components/features/home-page/FAQ'), {
  loading: () => <Loader />,
});
const ContactUs = dynamic(() => import('../app/components/features/home-page/ContactUs'), {
  loading: () => <Loader />,
});

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