import React from 'react';
import Hero from '../components/Layout/Hero';
import LeadForm from '../components/LeadForm';
import Testimonials from './Testimonials';
import Services from './Services ';
import Brands from './Brands';

const Home = () => {
  return (
    <div className="bg-sky-deep">

      {/* Hero section */}
      <section id="hero">
        <Hero />
      </section>

      {/* Services section — navbar "Services" click yahan aayega */}
      <section id="services">
        <Services />
      </section>

      {/* Testimonials */}
      <section id="testimonials">
        <Testimonials />
      </section>

      {/* Lead Form — "Get Quote" buttons yahan scroll karte hain */}
      <section id="contact">
        <LeadForm />
      </section>

      <section id='brands'>
        <Brands/>
      </section>

    </div>
  );
};

export default Home;