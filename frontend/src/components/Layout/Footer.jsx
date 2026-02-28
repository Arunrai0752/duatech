import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Linkedin, MapPin, Phone, Mail } from 'lucide-react';
import Logo from './Logo';

const socialLinks = [
  { icon: Facebook,  href: '#' },
  { icon: Instagram, href: '#' },
  { icon: Youtube,   href: '#' },
  { icon: Linkedin,  href: '#' },
];

const Footer = () => {
  return (
    <footer className="bg-sky-deep border-t border-solar-panel/10 pt-16 pb-8  text-cloud-white">
      <div className="container mx-auto px-6">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Column 1: Company Info */}
          <div className="space-y-5">
            <Logo />
            <p className="text-cloud-gray text-sm leading-relaxed">
              Leading the transition to sustainable energy with cutting-edge solar solutions.
              Empowering industries and homes with smart, renewable power.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-full bg-cloud-white/5 border border-solar-panel/20
                             flex items-center justify-center text-cloud-gray
                             hover:border-sun-primary hover:text-sun-primary
                             transition-all duration-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-sun-primary font-black uppercase tracking-[0.25em] text-xs mb-6">
              Navigation
            </h4>
            <ul className="space-y-3 text-cloud-gray text-sm">
              {[
                { label: 'Home',          to: '/'        },
                { label: 'Solar Services',to: '/services'},
                { label: 'Our Projects',  to: '/projects'},
                { label: 'Portal Login',  to: '/admin'   },
              ].map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="hover:text-sun-primary transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-sun-primary transition-all duration-300 inline-block" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Solutions */}
          <div>
            <h4 className="text-sun-primary font-black uppercase tracking-[0.25em] text-xs mb-6">
              Solutions
            </h4>
            <ul className="space-y-3 text-cloud-gray text-sm">
              {['On-Grid Systems', 'Off-Grid Solutions', 'Hybrid Solar', 'Maintenance (AMC)', 'Solar Street Lights', 'Water Heaters'].map((item) => (
                <li
                  key={item}
                  className="hover:text-sun-primary cursor-pointer transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-3 h-px bg-sun-primary transition-all duration-300 inline-block" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-sun-primary font-black uppercase tracking-[0.25em] text-xs mb-6">
              Contact Us
            </h4>
            <div className="space-y-4 text-cloud-gray text-sm">
              <p className="flex items-start gap-3">
                <MapPin size={15} className="text-sun-primary mt-0.5 shrink-0" />
                <span>
                  123 Solar Street, Industrial Hub,<br />
                  Bhopal, MP 462001
                </span>
              </p>
              <p className="flex items-center gap-3">
                <Phone size={15} className="text-sun-primary shrink-0" />
                <a href="tel:+919876543210" className="hover:text-sun-primary transition-colors">
                  +91 98765 43210
                </a>
              </p>
              <p className="flex items-center gap-3">
                <Mail size={15} className="text-sun-primary shrink-0" />
                <a href="mailto:info@duvatech.com" className="hover:text-sun-primary transition-colors">
                  info@duvatech.com
                </a>
              </p>
            </div>

            {/* Mini CTA */}
            <div className="mt-6 p-4 rounded-xl bg-sun-primary/10 border border-sun-primary/20">
              <p className="text-xs text-cloud-gray mb-2">Ready to go solar?</p>
              <a
                href="#lead-form"
                className="text-sun-primary font-black text-xs uppercase tracking-widest
                           hover:text-sun-secondary transition-colors"
              >
                Get Free Quote →
              </a>
            </div>
          </div>
        </div>

        {/* Divider with sun icon */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-solar-panel/10" />
          <div className="w-2 h-2 rounded-full bg-sun-primary/40 animate-sun-glow" />
          <div className="flex-1 h-px bg-solar-panel/10" />
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cloud-gray/40 text-xs tracking-wide text-center">
            © 2026 DUVA TECH SOLAR. ALL RIGHTS RESERVED. ADVANCING INDUSTRIAL AUTONOMY.
          </p>
          <div className="flex gap-6 text-[10px] text-cloud-gray/40 uppercase tracking-[0.2em]">
            <span className="hover:text-sun-primary cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-sun-primary cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;