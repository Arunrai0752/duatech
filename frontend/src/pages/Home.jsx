import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, BarChart3, Users, Factory } from 'lucide-react';
import Hero from '../components/Hero';
import LeadForm from '../components/LeadForm';

// KPI Counter Component (Small Helper)
const KPICounter = ({ value, title, icon: Icon }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className="bg-white/5 backdrop-blur-lg border border-[#00FF88]/20 p-8 rounded-2xl text-center flex flex-col items-center min-w-[250px]"
  >
    <Icon className="text-[#00FF88] mb-4" size={40} />
    <h3 className="text-4xl font-black text-white mb-2">{value}</h3>
    <p className="text-gray-400 uppercase tracking-widest text-sm">{title}</p>
  </motion.div>
);

const Home = () => {
  return (
    <div className="bg-[#0A1F44] text-white">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. KPI Section (Industrial Stats) */}
      <section className="py-20 px-6 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <KPICounter icon={Zap} value="500+ MW" title="Solar Installed" />
          <KPICounter icon={Users} value="1200+" title="Happy Clients" />
          <KPICounter icon={Factory} value="85+" title="Industrial Projects" />
        </div>
      </section>

      {/* 3. Services Section (Glassmorphism Cards) */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-16 italic tracking-tighter">
            OUR <span className="text-[#00FF88]">SOLAR SOLUTIONS</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "Residential", desc: "Sustainable energy for modern homes with smart monitoring." },
              { title: "Commercial", desc: "Reducing operational costs for businesses with high-efficiency PV." },
              { title: "Industrial", desc: "Heavy-duty MW scale installations for factories and plants." }
            ].map((service, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className="p-10 border border-white/10 rounded-3xl bg-gradient-to-b from-white/5 to-transparent text-left hover:border-[#00FF88]/50 transition-all"
              >
                <div className="w-12 h-12 bg-[#00FF88] rounded-lg mb-6 flex items-center justify-center text-[#0A1F44]">
                  <BarChart3 size={24} />
                </div>
                <h4 className="text-2xl font-bold mb-4">{service.title}</h4>
                <p className="text-gray-400 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Lead Generation Section (The Form) */}
      <section id="quote" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[#00FF88]/5 blur-[120px] -z-10"></div>
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#00FF88] font-bold tracking-[0.3em] uppercase text-sm">Contact Us</span>
            <h2 className="text-5xl font-black mt-4">POWER YOUR <span className="text-[#00FF88]">ENTERPRISE</span></h2>
          </div>
          <LeadForm />
        </div>
      </section>
    </div>
  );
};

export default Home;
