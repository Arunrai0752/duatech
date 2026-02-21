import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials'; // Import pehle se tha
import LeadForm from '../components/LeadForm';

const Home = () => {
  return (
    <div className="bg-[#0A1F44]">
      <Hero />

      {/* Services Section */}
      <section className="py-20 px-6 container mx-auto">
        <h2 className="text-3xl font-black mb-12 text-center">
          INDUSTRIAL <span className="text-[#00FF88]">SERVICES</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="glass-card p-6">
            <div className="w-full h-48 img-placeholder mb-4 rounded-xl flex items-center justify-center bg-gray-800 text-gray-500">
               INDUSTRIAL IMAGE 1
            </div>
            <h3 className="text-[#00FF88] font-bold text-xl mb-2">Residential Solar</h3>
            <p className="text-gray-400 text-sm">High-efficiency panels for modern homes.</p>
          </div>

          {/* Card 2 */}
          <div className="glass-card p-6">
            <div className="w-full h-48 img-placeholder mb-4 rounded-xl flex items-center justify-center bg-gray-800 text-gray-500">
               INDUSTRIAL IMAGE 2
            </div>
            <h3 className="text-[#00FF88] font-bold text-xl mb-2">Commercial Solar</h3>
            <p className="text-gray-400 text-sm">Scalable energy solutions for businesses.</p>
          </div>

          {/* Card 3 */}
          <div className="glass-card p-6">
            <div className="w-full h-48 img-placeholder mb-4 rounded-xl flex items-center justify-center bg-gray-800 text-gray-500">
               INDUSTRIAL IMAGE 3
            </div>
            <h3 className="text-[#00FF88] font-bold text-xl mb-2">MW Scale Plants</h3>
            <p className="text-gray-400 text-sm">Utility-scale solar farms for factories.</p>
          </div>
        </div>
      </section>

      {/* Yahan Testimonials add kar diya hai */}
      <Testimonials />

      <LeadForm />
    </div>
  );
};

export default Home;
