import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Battery, HardHat, Zap, ArrowRight } from 'lucide-react';

const Products = () => {
  const [openSection, setOpenSection] = useState(null);
  const itemRefs = useRef({});

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  // Lead Form par scroll karne ke liye function
  const scrollToLeadForm = (e) => {
    e.stopPropagation(); // Isse card toggle nahi hoga, sirf scroll hoga
    const leadForm = document.getElementById('lead-form');
    if (leadForm) {
      leadForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (openSection !== null && itemRefs.current[openSection]) {
      setTimeout(() => {
        itemRefs.current[openSection].scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }, 300);
    }
  }, [openSection]);

  const services = [
    { 
      title: "On-Grid Solar System", 
      icon: Sun, 
      desc: "Directly connected to the utility grid to save on electricity bills.",
      moreInfo: "A battery-less system that works in synchronization with the government electricity grid. Ideal for zero electricity bills via net-metering." 
    },
    { 
      title: "Off-Grid Solutions", 
      icon: Battery, 
      desc: "Complete energy independence with high-capacity battery storage.",
      moreInfo: "A standalone system powered by heavy-duty battery storage. Complete energy independence and 24/7 backup even during blackouts."
    },
    { 
      title: "Hybrid Systems", 
      icon: Zap, 
      desc: "The best of both worlds - grid connection with battery backup.",
      moreInfo: "Combining net-metering plus battery backup. Saves on bills while ensuring power backup during outages."
    },
    { 
      title: "AMC & Maintenance", 
      icon: HardHat, 
      desc: "Professional industrial cleaning and health checks for your plant.",
      moreInfo: "Professional deep cleaning and health check for all solar plants. Increases energy efficiency by up to 25%."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A1F44] py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-black text-center mb-16 uppercase tracking-tighter text-white">
          INDUSTRIAL <span className="text-[#00FF88]">SOLAR SERVICES</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((item, i) => (
            <motion.div 
              key={i}
              ref={(el) => (itemRefs.current[i] = el)}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => toggleSection(i)}
              className={`glass-card p-10 flex flex-col gap-6 cursor-pointer transition-all duration-300 relative ${
                openSection === i 
                ? 'border-[#00FF88] shadow-[0_0_30px_rgba(0,255,136,0.2)] bg-white/10' 
                : 'border-white/10'
              }`}
            >
              <div className="flex gap-6 items-start">
                <div className={`p-4 rounded-lg transition-colors ${
                  openSection === i ? 'bg-[#00FF88] text-[#0A1F44]' : 'bg-[#00FF88]/10 text-[#00FF88]'
                }`}>
                  <item.icon size={32} />
                </div>
                <div className="flex-1">
                  <h3 className={`text-2xl font-bold mb-3 ${openSection === i ? 'text-[#00FF88]' : 'text-white'}`}>
                    {item.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">{item.desc}</p>
                </div>
              </div>

              <AnimatePresence>
                {openSection === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-6 border-t border-white/10 mt-2 space-y-6">
                      <p className="text-white/80 leading-relaxed bg-white/5 p-4 rounded-lg italic">
                        "{item.moreInfo}"
                      </p>
                      
                      {/* Industrial Get Quote Button */}
                      <motion.button
                        initial={{ y: 20 }}
                        animate={{ y: 0 }}
                        onClick={scrollToLeadForm}
                        className="w-full btn-industrial flex items-center justify-center gap-3 group"
                      >
                        GET FREE QUOTATION
                        <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex justify-between items-center text-[10px] font-black tracking-widest text-[#00FF88]/50">
                <span>{openSection === i ? 'ACTIVE SELECTION' : 'EXPLORE SYSTEM'}</span>
                <span>{openSection === i ? '▲' : '▼'}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
