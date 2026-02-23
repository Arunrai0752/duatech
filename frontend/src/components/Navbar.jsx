import React, { useState } from 'react'; // useState joda hai toggle ke liye
import { Link } from 'react-router-dom';
import Logo from '../components/Logo'; 
import { Menu, X } from 'lucide-react'; // Teen line icons ke liye

const Navbar = () => {
  // Mobile menu open/close karne ki state
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-[#0A1F44]/80 backdrop-blur-xl border-b border-white/10 px-6 py-4 flex justify-between items-center">
      
      {/* Logo Section - जैसा तूने दिया था वैसी ही है */}
      <Link to="/" onClick={() => setIsOpen(false)}>
        <Logo />
      </Link>
      
      {/* DESKTOP MENU - तेरा ओरिजिनल कोड */}
      <div className="hidden md:flex gap-8 font-medium text-sm uppercase tracking-widest">
        <Link to="/" className="hover:text-[#00FF88] transition-colors text-white">Home</Link>
        <Link to="/services" className="hover:text-[#00FF88] transition-colors text-white">Services</Link>
        <Link to="/projects" className="hover:text-[#00FF88] transition-colors text-white">Projects</Link>
        
      </div>

      {/* MOBILE HAMBURGER BUTTON - ये नया joda hai mobile ke liye */}
      <div className="md:hidden flex items-center">
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="text-[#00FF88] focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN - जब मोबाइल पर Menu दबेगा तब ये खुलेगा */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0A1F44] border-b border-white/10 flex flex-col items-center gap-6 py-8 md:hidden animate-in fade-in slide-in-from-top-4 duration-300">
          <Link to="/" onClick={() => setIsOpen(false)} className="text-white uppercase tracking-widest hover:text-[#00FF88]">Home</Link>
          <Link to="/services" onClick={() => setIsOpen(false)} className="text-white uppercase tracking-widest hover:text-[#00FF88]">Services</Link>
          <Link to="/projects" onClick={() => setIsOpen(false)} className="text-white uppercase tracking-widest hover:text-[#00FF88]">Projects</Link>
          <Link to="/admin" onClick={() => setIsOpen(false)} className="text-[#00FF88] border border-[#00FF88] px-8 py-2 rounded-full">Admin</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
