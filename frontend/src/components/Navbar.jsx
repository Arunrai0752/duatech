import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll'; 
import Logo from '../components/Logo'; 
import { Menu, X, ChevronDown, Sun, Zap, HardHat, Link as LinkIcon } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const productOptions = [
    { name: "Solar Panels", id: "solar-panels", icon: Sun },
    { name: "Inverters", id: "inverters", icon: Zap },
    { name: "Cables & Wires", id: "cables", icon: LinkIcon },
    { name: "Structures", id: "structure", icon: HardHat }
  ];

  return (
    <nav className="fixed w-full z-[100] bg-[#0A1F44]/90 backdrop-blur-xl border-b border-white/10 px-6 py-4 flex justify-between items-center">
      
      <RouterLink to="/" onClick={() => setIsOpen(false)}>
        <Logo />
      </RouterLink>
      
      {/* DESKTOP MENU */}
      <div className="hidden md:flex gap-8 font-medium text-sm uppercase tracking-widest items-center">
        <RouterLink to="/" className="hover:text-[#00FF88] transition-colors text-white">Home</RouterLink>

        {/* PRODUCTS DROPDOWN */}
        <div 
          className="relative group"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <button className="flex items-center gap-1 hover:text-[#00FF88] transition-colors text-white uppercase tracking-widest outline-none">
            Products <ChevronDown size={16} className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          {dropdownOpen && (
            <div className="absolute top-full left-0 mt-2 w-64 bg-[#0A1F44] border border-white/10 rounded-xl shadow-2xl py-4 animate-in fade-in slide-in-from-top-2">
              {productOptions.map((item) => (
                <ScrollLink
                  key={item.id}
                  to={item.id}
                  spy={true} 
                  smooth={true}
                  offset={-100}
                  activeClass="text-[#00FF88] bg-white/5 border-l-4 border-[#00FF88]"
                  className="flex items-center gap-3 px-6 py-4 hover:bg-[#00FF88]/10 hover:text-[#00FF88] transition-all cursor-pointer text-gray-300"
                  onClick={() => setDropdownOpen(false)}
                >
                  <item.icon size={18} />
                  {item.name}
                </ScrollLink>
              ))}
            </div>
          )}
        </div>

        <RouterLink to="/services" className="hover:text-[#00FF88] transition-colors text-white">Services</RouterLink>
        <RouterLink to="/projects" className="hover:text-[#00FF88] transition-colors text-white">Projects</RouterLink>
      </div>

      {/* MOBILE HAMBURGER... (Same as before) */}
    </nav>
  );
};

export default Navbar;
