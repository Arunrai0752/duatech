import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Battery, Zap } from 'lucide-react';
import ServiceCard from '../components/Cards/ServiceCard';

const Services = () => {
  const [openSection, setOpenSection] = useState(null);
  const itemRefs = useRef({});

  const toggleSection = (sectionId) => {
    setOpenSection(openSection === sectionId ? null : sectionId);
  };

  useEffect(() => {
    if (openSection && itemRefs.current[openSection]) {
      setTimeout(() => {
        itemRefs.current[openSection].scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 200);
    }
  }, [openSection]);

  const solarData = [
    {
      id: 'on-grid',
      title: 'On-Grid Solar System',
      desc: 'A battery-less system that works in synchronization with the government electricity grid.',
      benefits: 'Zero electricity bills via net-metering, lowest cost, and minimal maintenance.',
      drawbacks: 'No power backup during grid outages (safety shutdown).',
      suitable: 'Residential and urban areas with rare power cuts.',
      icon: Zap,
      image: null, // apni image URL yahan daal sakte ho
    },
    {
      id: 'off-grid',
      title: 'Off-Grid Solar System',
      desc: 'A standalone system powered by heavy-duty battery storage.',
      benefits: 'Complete energy independence and 24/7 backup even during blackouts.',
      drawbacks: 'Higher initial cost due to batteries; replacement needed every 5-7 years.',
      suitable: 'Remote locations or areas with long, frequent power cuts.',
      icon: Battery,
      image: null,
    },
    {
      id: 'hybrid',
      title: 'Hybrid Solar System',
      desc: 'Combining the best of both worlds — Net-metering plus battery backup.',
      benefits: 'Saves on bills while ensuring power backup during outages.',
      drawbacks: 'Most expensive system to install and maintain.',
      suitable: 'Critical setups where zero downtime and savings are both required.',
      icon: Sun,
      image: null,
    },
  ];

  return (
    <section className="min-h-screen bg-sky-deep py-24 px-6">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-5%] left-[-5%] w-[35%] h-[35%] bg-solar-panel rounded-full blur-[160px] opacity-10" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[30%] h-[30%] bg-sun-primary rounded-full blur-[160px] opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sun-primary text-xs font-black uppercase tracking-[0.4em] mb-3">
            Our Features
          </p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-cloud-white uppercase leading-none">
            Solar <span className="text-sun-primary animate-sun-glow">Systems</span>
          </h2>
          {/* Decorative line */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="w-12 h-px bg-solar-panel" />
            <span className="w-2 h-2 rounded-full bg-sun-primary animate-sun-glow" />
            <span className="w-12 h-px bg-solar-panel" />
          </div>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solarData.map((item, index) => (
            <motion.div
              key={item.id}
              ref={(el) => (itemRefs.current[item.id] = el)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <ServiceCard
                id={item.id}
                title={item.title}
                desc={item.desc}
                benefits={item.benefits}
                drawbacks={item.drawbacks}
                suitable={item.suitable}
                icon={item.icon}
                image={item.image}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;