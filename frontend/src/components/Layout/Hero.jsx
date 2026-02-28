import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-sky-deep">

      {/* Background Image — Unsplash Solar Panel */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1920&q=80')`,
        }}
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 z-[1] bg-sky-deep/70" />

      {/* Glow blobs */}
      <div className="absolute inset-0 z-[2] pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-solar-panel rounded-full blur-[150px] opacity-20" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-sky-light rounded-full blur-[150px] opacity-20" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none italic text-cloud-white">
            DUVA <span className="text-sun-primary animate-sun-glow">TECH</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-cloud-gray max-w-2xl mx-auto font-light tracking-widest uppercase">
            Advancing Industrial Autonomy Through{' '}
            <span className="text-cloud-white font-bold">Solar Innovation</span>
          </p>
          <div className="mt-12 flex flex-col md:flex-row gap-6 justify-center">
            <button className="bg-sun-primary text-sky-deep px-10 py-4 rounded-full font-black uppercase tracking-tighter hover:bg-sun-secondary transition-all shadow-[0_0_20px_rgba(255,179,71,0.4)]">
              Get Industrial Quote
            </button>
            <button className="border border-cloud-white/20 bg-cloud-white/5 backdrop-blur-md text-cloud-white px-10 py-4 rounded-full font-bold uppercase tracking-tighter hover:bg-cloud-white/10 transition-all">
              Our Projects
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-sun-primary/60 text-xs tracking-[0.5em] uppercase"
      >
        Scroll to Explore
      </motion.div>

    </section>
  );
};

export default Hero;