import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-[#050C1C] border-t border-white/10 pt-16 pb-8 mt-20 text-white">
      <div className="container mx-auto px-6">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Company Info */}
          <div className="space-y-6">
            <Logo />
            <p className="text-gray-400 text-sm leading-relaxed">
              Leading the transition to sustainable energy with cutting-edge solar solutions. Empowering industries and homes with smart, renewable power.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-[#00FF88] hover:text-[#00FF88] transition-all cursor-pointer">
                  {/* Placeholder for Social Icons using CSS circles */}
                  <div className="w-2 h-2 bg-current rounded-full"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-[#00FF88] font-bold uppercase tracking-widest text-sm mb-6">Navigation</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Solar Services</Link></li>
              <li><Link to="/projects" className="hover:text-white transition-colors">Our Projects</Link></li>
              <li><Link to="/admin" className="hover:text-white transition-colors">Portal Login</Link></li>
            </ul>
          </div>

          {/* Column 3: Solar Solutions */}
          <div>
            <h4 className="text-[#00FF88] font-bold uppercase tracking-widest text-sm mb-6">Solutions</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">On-Grid Systems</li>
              <li className="hover:text-white cursor-pointer transition-colors">Off-Grid Solutions</li>
              <li className="hover:text-white cursor-pointer transition-colors">Hybrid Solar</li>
              <li className="hover:text-white cursor-pointer transition-colors">Maintenance (AMC)</li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-[#00FF88] font-bold uppercase tracking-widest text-sm mb-6">Contact Us</h4>
            <div className="space-y-4 text-gray-400 text-sm">
              <p className="flex items-start gap-3">
                <span className="text-[#00FF88]">📍</span>
                123 Solar Street, Industrial Hub,<br />Bhopal, MP 462001
              </p>
              <p className="flex items-center gap-3">
                <span className="text-[#00FF88]">📞</span>
                +91 98765 43210
              </p>
              <p className="flex items-center gap-3">
                <span className="text-[#00FF88]">✉️</span>
                info@duvatech.com
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs tracking-wide text-center">
            © 2026 DUVA TECH SOLAR. ALL RIGHTS RESERVED. ADVANCING INDUSTRIAL AUTONOMY.
          </p>
          <div className="flex gap-8 text-[10px] text-gray-600 uppercase tracking-[0.2em]">
            <span className="hover:text-[#00FF88] cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-[#00FF88] cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
