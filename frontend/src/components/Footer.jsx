import React from 'react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-black/40 border-t border-white/10 py-12 mt-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <Logo />
        <p className="text-gray-500 text-sm italic">
          © 2026 DUVA TECH SOLAR. Advancing Industrial Autonomy.
        </p>
        <div className="flex gap-6 text-gray-400 text-sm uppercase tracking-widest">
          <span className="hover:text-[#00FF88] cursor-pointer">Privacy Policy</span>
          <span className="hover:text-[#00FF88] cursor-pointer">Terms of Service</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
