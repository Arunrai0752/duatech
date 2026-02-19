import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Tech Animation */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#00FF88] rounded-full blur-[150px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-blue-500 rounded-full blur-[150px]"></div>
      </div>

      <div className="container mx-auto px-6 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none italic">
            DUVA <span className="text-[#00FF88]">TECH</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light tracking-widest uppercase">
            Advancing Industrial Autonomy Through <span className="text-white font-bold">Solar Innovation</span>
          </p>
          <div className="mt-12 flex flex-col md:flex-row gap-6 justify-center">
            <button className="bg-[#00FF88] text-[#0A1F44] px-10 py-4 rounded-full font-black uppercase tracking-tighter hover:bg-white transition-all shadow-[0_0_20px_rgba(0,255,136,0.4)]">
              Get Industrial Quote
            </button>
            <button className="border border-white/20 bg-white/5 backdrop-blur-md text-white px-10 py-4 rounded-full font-bold uppercase tracking-tighter hover:bg-white/10 transition-all">
              Our Projects
            </button>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#00FF88]/50 text-xs tracking-[0.5em] uppercase"
      >
        Scroll to Explore
      </motion.div>
    </section>
  );
};

export default Hero;
