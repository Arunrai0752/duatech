import React, { useState } from 'react';
import LeadForm from '../components/LeadForm';

const Home = () => {
  return (
    <div style={{ fontFamily: 'sans-serif', color: '#333', margin: 0, padding: 0 }}>
      {/* Navbar */}
      <nav style={{ backgroundColor: '#1e3a8a', padding: '20px', color: 'white', display: 'flex', justifyBetween: 'space-between', position: 'sticky', top: 0, zIndex: 100 }}>
        <h2 style={{ margin: 0 }}>DUVA<span style={{ color: '#f97316' }}>TECH</span> SOLAR</h2>
      </nav>

      {/* Hero Section */}
      <header style={{ backgroundColor: '#f3f4f6', padding: '80px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', color: '#1e3a8a' }}>Power Your Future With Sun</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '20px auto' }}>Professional solar installations for homes and businesses.</p>
        <a href="#contact" style={{ backgroundColor: '#f97316', color: 'white', padding: '15px 30px', borderRadius: '50px', textDecoration: 'none', fontWeight: 'bold' }}>GET FREE QUOTE</a>
      </header>

      {/* Services */}
      <section style={{ padding: '60px 20px', maxWidth: '1100px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Our Solar Solutions</h2>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {['Residential', 'Commercial', 'Industrial'].map(type => (
            <div key={type} style={{ border: '1px solid #ddd', padding: '30px', borderRadius: '15px', width: '280px', textAlign: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
              <h3>{type} Solar</h3>
              <p>Customized power solutions for your {type.toLowerCase()} needs.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Form Section */}
      <section id="contact" style={{ backgroundColor: '#1e3a8a', padding: '60px 20px', color: 'white' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2>Get in Touch</h2>
          <p>Fill the form below and we'll contact you.</p>
          <div style={{ color: '#333', marginTop: '30px' }}>
             <LeadForm />
          </div>
        </div>
      </section>

      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/91XXXXXXXXXX" 
        style={{ position: 'fixed', bottom: '20px', right: '20px', backgroundColor: '#25D366', color: 'white', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.3)', fontSize: '30px', textDecoration: 'none' }}
      >
        W
      </a>
    </div>
  );
};

export default Home;
