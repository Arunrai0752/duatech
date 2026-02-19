import React from 'react';
import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-[#0A1F44]/80 backdrop-blur-xl border-b border-white/10 px-6 py-4 flex justify-between items-center">
      <Link to="/" className="flex items-center gap-2 text-2xl font-black tracking-tighter">
        <Zap className="text-[#00FF88]" fill="#00FF88" />
        DUVA<span className="text-[#00FF88]">TECH</span>
      </Link>
      
      <div className="hidden md:flex gap-8 font-medium text-sm uppercase tracking-widest">
        <Link to="/" className="hover:text-[#00FF88] transition-colors">Home</Link>
        <Link to="/products" className="hover:text-[#00FF88] transition-colors">Services</Link>
        <Link to="/projects" className="hover:text-[#00FF88] transition-colors">Projects</Link>
        <Link to="/admin" className="text-[#00FF88] border border-[#00FF88] px-4 py-1 rounded-full hover:bg-[#00FF88] hover:text-[#0A1F44] transition-all">Admin</Link>
      </div>
    </nav>
  );
};

export default Navbar;
