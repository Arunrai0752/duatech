import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll'; // Scroll ke liye library
import Logo from '../components/Logo'; 
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const productOptions = [
    { name: "Solar Panels", id: "solar-panels" },
    { name: "Inverters", id: "inverters" },
    { name: "Cables", id: "cables" },
    { name: "Structure", id: "structure" }
  ];

  return (
    <nav className="fixed w-full z-[100] bg-[#0A1F44]/90 backdrop-blur-xl border-b border-white/10 px-6 py-4 flex justify-between items-center text-white">
      
      <RouterLink to="/" onClick={() => setIsOpen(false)}>
        <Logo />
      </RouterLink>
      
      {/* DESKTOP MENU */}
      <div className="hidden md:flex gap-8 font-medium text-sm uppercase tracking-widest items-center">
        <RouterLink to="/" className="hover:text-[#00FF88] transition-colors">Home</RouterLink>

        {/* PRODUCTS DROPDOWN */}
        <div 
          className="relative group cursor-pointer"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <button className="flex items-center gap-1 hover:text-[#00FF88] transition-colors uppercase tracking-widest outline-none">
            Products <ChevronDown size={16} className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className="absolute top-full left-0 mt-2 w-56 bg-[#0A1F44] border border-white/10 rounded-xl shadow-2xl py-4 animate-in fade-in slide-in-from-top-2">
              {productOptions.map((item) => (
                <ScrollLink
                  key={item.id}
                  to={item.id}
                  spy={true} 
                  smooth={true}
                  offset={-100} // Navbar ki height ke hisab se adjust karein
                  activeClass="text-[#00FF88] bg-white/5"
                  className="block px-6 py-3 hover:bg-[#00FF88]/10 hover:text-[#00FF88] transition-all cursor-pointer"
                  onClick={() => setDropdownOpen(false)}
                >
                  {item.name}
                </ScrollLink>
              ))}
            </div>
          )}
        </div>

        <RouterLink to="/services" className="hover:text-[#00FF88] transition-colors">Services</RouterLink>
        <RouterLink to="/projects" className="hover:text-[#00FF88] transition-colors">Projects</RouterLink>
      </div>

      {/* MOBILE HAMBURGER */}
      <div className="md:hidden flex items-center gap-4">
        <button onClick={() => setIsOpen(!isOpen)} className="text-[#00FF88]">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0A1F44] border-b border-white/10 flex flex-col items-center gap-4 py-8 md:hidden">
          <RouterLink to="/" onClick={() => setIsOpen(false)}>Home</RouterLink>
          <p className="text-[#00FF88] text-xs font-bold mt-4">PRODUCTS</p>
          {productOptions.map((item) => (
            <ScrollLink
              key={item.id}
              to={item.id}
              smooth={true}
              onClick={() => setIsOpen(false)}
              className="text-lg"
            >
              {item.name}
            </ScrollLink>
          ))}
          <RouterLink to="/services" onClick={() => setIsOpen(false)}>Services</RouterLink>
          <RouterLink to="/projects" onClick={() => setIsOpen(false)}>Projects</RouterLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
