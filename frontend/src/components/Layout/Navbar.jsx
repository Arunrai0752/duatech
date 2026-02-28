import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import Logo from './Logo';
import {
  Menu, X, ChevronDown, Sun, Zap, HardHat,
  Link as LinkIcon, Wrench, PenTool,
  Users, Award, Clock, Shield,
} from 'lucide-react';
import { BsTools } from "react-icons/bs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [productsDropdown, setProductsDropdown] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setIsOpen(false);
    setProductsDropdown(false);
    setServicesDropdown(false);
  }, [location]);

  const productOptions = [
    { name: "Solar Panels",   id: "services", icon: Sun,      path: "/" },
    { name: "Inverters",      id: "services", icon: Zap,      path: "/" },
    { name: "Batteries",      id: "services", icon: Zap,      path: "/" },
    { name: "Structures",     id: "services", icon: HardHat,  path: "/" },
    { name: "Cables & Wires", id: "services", icon: LinkIcon, path: "/" },
    { name: "Mounting Kits",  id: "services", icon: BsTools,  path: "/" },
  ];

  const serviceOptions = [
    { name: "Installation",    id: "services", icon: Wrench,  path: "/" },
    { name: "Maintenance",     id: "services", icon: BsTools, path: "/" },
    { name: "Repair",          id: "services", icon: PenTool, path: "/" },
    { name: "24/7 Emergency",  id: "services", icon: Clock,   path: "/" },
  ];

  // Core scroll utility
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Dropdown item click handler
  const handleItemClick = (path, id) => {
    setProductsDropdown(false);
    setServicesDropdown(false);
    setIsOpen(false);

    if (location.pathname === path) {
      setTimeout(() => scrollToSection(id), 100);
    } else {
      navigate(path);
      setTimeout(() => scrollToSection(id), 500); // wait for page to render
    }
  };

  // Contact → scrolls to #lead-form on Home
  const handleContactClick = (e) => {
    e.preventDefault();
    setIsOpen(false);
    if (location.pathname === '/') {
      setTimeout(() => scrollToSection('lead-form'), 100);
    } else {
      navigate('/');
      setTimeout(() => scrollToSection('lead-form'), 500);
    }
  };

  const isActivePath = (path) => location.pathname === path;

  const getActiveClass = (path) =>
    location.pathname === path
      ? 'text-sun-primary'
      : 'text-cloud-white hover:text-sun-primary';

  return (
    <nav className="fixed w-full z-[100] bg-sky-deep/90 backdrop-blur-xl border-b border-solar-panel/10 px-6 py-4">
      <div className="max-w-7xl container mx-auto flex justify-between items-center">

        <RouterLink to="/" onClick={() => setIsOpen(false)}>
          <Logo />
        </RouterLink>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 font-medium text-sm uppercase tracking-widest items-center">

          <RouterLink to="/" className={`transition-colors ${getActiveClass('/')}`}>
            Home
          </RouterLink>

          {/* PRODUCTS DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setProductsDropdown(true)}
            onMouseLeave={() => setProductsDropdown(false)}
          >
            <button className={`flex items-center gap-1 transition-colors uppercase tracking-widest outline-none
              ${productsDropdown || isActivePath('/products') ? 'text-sun-primary' : 'text-cloud-white hover:text-sun-primary'}`}
            >
              Products
              <ChevronDown size={16} className={`transition-transform duration-300 ${productsDropdown ? 'rotate-180' : ''}`} />
            </button>

            {productsDropdown && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-sky-deep border border-solar-panel/10
                              rounded-xl shadow-2xl py-4 animate-in fade-in slide-in-from-top-2">
                <div className="flex flex-col gap-0.5 px-2">
                  {productOptions.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={`product-${index}`}
                        onClick={() => handleItemClick(item.path, item.id)}
                        className="flex items-center gap-3 px-3 py-2.5 hover:bg-solar-panel/10
                                   hover:text-sun-primary transition-all text-cloud-gray
                                   rounded-lg text-sm w-full text-left"
                      >
                        <Icon size={15} className="text-sun-primary shrink-0" />
                        {item.name}
                      </button>
                    );
                  })}
                </div>
                <div className="border-t border-solar-panel/10 mt-2 pt-2 px-4">
                  <RouterLink
                    to="/products"
                    className="flex items-center justify-between text-sun-primary hover:text-cloud-white transition-colors text-sm py-1"
                    onClick={() => { setProductsDropdown(false); setIsOpen(false); }}
                  >
                    <span>View All Products</span>
                    <span className="text-xs">→</span>
                  </RouterLink>
                </div>
              </div>
            )}
          </div>

          {/* SERVICES DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setServicesDropdown(true)}
            onMouseLeave={() => setServicesDropdown(false)}
          >
            <button className={`flex items-center gap-1 transition-colors uppercase tracking-widest outline-none
              ${servicesDropdown || isActivePath('/services') ? 'text-sun-primary' : 'text-cloud-white hover:text-sun-primary'}`}
            >
              Services
              <ChevronDown size={16} className={`transition-transform duration-300 ${servicesDropdown ? 'rotate-180' : ''}`} />
            </button>

            {servicesDropdown && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-sky-deep border border-solar-panel/10
                              rounded-xl shadow-2xl py-4 animate-in fade-in slide-in-from-top-2">
                <div className="grid grid-cols-2 gap-0.5 px-2">
                  {serviceOptions.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={`service-${index}`}
                        onClick={() => handleItemClick(item.path, item.id)}
                        className="flex items-center gap-2 px-3 py-2.5 hover:bg-solar-panel/10
                                   hover:text-sun-primary transition-all text-cloud-gray
                                   rounded-lg text-xs w-full text-left"
                      >
                        <Icon size={13} className="text-sun-primary shrink-0" />
                        {item.name}
                      </button>
                    );
                  })}
                </div>
                <div className="border-t border-solar-panel/10 mt-2 pt-2 px-4">
                  <RouterLink
                    to="/services"
                    className="flex items-center justify-between text-sun-primary hover:text-cloud-white transition-colors text-sm py-1"
                    onClick={() => { setServicesDropdown(false); setIsOpen(false); }}
                  >
                    <span>View All Services</span>
                    <span className="text-xs">→</span>
                  </RouterLink>
                </div>
              </div>
            )}
          </div>

          <RouterLink to="/projects" className={`transition-colors ${getActiveClass('/projects')}`}>
            Projects
          </RouterLink>

          {/* Contact → scrolls to lead-form */}
          <a
            href="#lead-form"
            onClick={handleContactClick}
            className="transition-colors text-cloud-white hover:text-sun-primary cursor-pointer"
          >
            Contact
          </a>

        </div>

        {/* MOBILE HAMBURGER */}
        <button
          className="md:hidden text-cloud-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-sky-deep/95 backdrop-blur-xl
                        border-t border-solar-panel/10 py-6 px-4 animate-in slide-in-from-top">
          <div className="flex flex-col gap-4">

            <RouterLink
              to="/"
              className={`px-4 py-3 rounded-lg transition-colors ${
                location.pathname === '/' ? 'bg-solar-panel/10 text-sun-primary' : 'text-cloud-white'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </RouterLink>

            {/* Mobile Products */}
            <div className="border border-solar-panel/10 rounded-lg overflow-hidden">
              <button
                onClick={() => setProductsDropdown(!productsDropdown)}
                className="w-full flex items-center justify-between px-4 py-3 text-cloud-white hover:bg-white/5 transition-colors"
              >
                <span>Products</span>
                <ChevronDown size={18} className={`transition-transform ${productsDropdown ? 'rotate-180' : ''}`} />
              </button>
              {productsDropdown && (
                <div className="bg-black/20 p-2">
                  {productOptions.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={`mob-product-${index}`}
                        onClick={() => handleItemClick(item.path, item.id)}
                        className="w-full flex items-center gap-3 px-4 py-2.5 text-cloud-gray
                                   hover:text-sun-primary hover:bg-white/5 rounded-lg transition-all text-left text-sm"
                      >
                        <Icon size={15} className="text-sun-primary" />
                        {item.name}
                      </button>
                    );
                  })}
                  <RouterLink
                    to="/products"
                    className="flex items-center justify-between px-4 py-2.5 text-sun-primary
                               hover:text-cloud-white transition-colors border-t border-solar-panel/10 mt-2 pt-2 text-sm"
                    onClick={() => { setProductsDropdown(false); setIsOpen(false); }}
                  >
                    <span>View All Products</span><span>→</span>
                  </RouterLink>
                </div>
              )}
            </div>

            {/* Mobile Services */}
            <div className="border border-solar-panel/10 rounded-lg overflow-hidden">
              <button
                onClick={() => setServicesDropdown(!servicesDropdown)}
                className="w-full flex items-center justify-between px-4 py-3 text-cloud-white hover:bg-white/5 transition-colors"
              >
                <span>Services</span>
                <ChevronDown size={18} className={`transition-transform ${servicesDropdown ? 'rotate-180' : ''}`} />
              </button>
              {servicesDropdown && (
                <div className="bg-black/20 p-2">
                  {serviceOptions.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={`mob-service-${index}`}
                        onClick={() => handleItemClick(item.path, item.id)}
                        className="w-full flex items-center gap-3 px-4 py-2.5 text-cloud-gray
                                   hover:text-sun-primary hover:bg-white/5 rounded-lg transition-all text-left text-sm"
                      >
                        <Icon size={15} className="text-sun-primary" />
                        {item.name}
                      </button>
                    );
                  })}
                  <RouterLink
                    to="/services"
                    className="flex items-center justify-between px-4 py-2.5 text-sun-primary
                               hover:text-cloud-white transition-colors border-t border-solar-panel/10 mt-2 pt-2 text-sm"
                    onClick={() => { setServicesDropdown(false); setIsOpen(false); }}
                  >
                    <span>View All Services</span><span>→</span>
                  </RouterLink>
                </div>
              )}
            </div>

            <RouterLink
              to="/projects"
              className={`px-4 py-3 rounded-lg transition-colors ${
                location.pathname === '/projects' ? 'bg-solar-panel/10 text-sun-primary' : 'text-cloud-white'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Projects
            </RouterLink>

            <a
              href="#lead-form"
              onClick={handleContactClick}
              className="px-4 py-3 rounded-lg transition-colors text-cloud-white hover:text-sun-primary"
            >
              Contact
            </a>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;