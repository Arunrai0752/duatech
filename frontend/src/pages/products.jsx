import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Battery, HardHat, Zap } from 'lucide-react';

const Products = () => {
  const services = [
    { title: "On-Grid Solar System", icon: Sun, desc: "Directly connected to the utility grid to save on electricity bills." },
    { title: "Off-Grid Solutions", icon: Battery, desc: "Complete energy independence with high-capacity battery storage." },
    { title: "Hybrid Systems", icon: Zap, desc: "The best of both worlds - grid connection with battery backup." },
    { title: "AMC & Maintenance", icon: HardHat, desc: "Professional industrial cleaning and health checks for your plant." }
  ];

  return (
    <div className="min-h-screen bg-[#0A1F44] py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-black text-center mb-16 uppercase tracking-tighter">
          INDUSTRIAL <span className="text-[#00FF88]">SOLAR SERVICES</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((item, i) => (
            <motion.div 
              key={i} whileHover={{ scale: 1.02 }}
              className="glass-card p-10 flex gap-6 items-start"
            >
              <div className="bg-[#00FF88]/10 p-4 rounded-lg">
                <item.icon className="text-[#00FF88]" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
