import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sun, Shield, Tool, Zap, Phone, Mail, MapPin, 
  Menu, X, CheckCircle, ChevronRight, MessageCircle 
} from 'lucide-react';

// --- Reusable Components ---
const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-2xl shadow-xl p-6 border border-slate-100 ${className}`}>
    {children}
  </div>
);

const SectionTitle = ({ title, subtitle }) => (
  <div className="text-center mb-16">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-4xl font-extrabold text-slate-900 mb-4 uppercase tracking-tight"
    >
      {title}
    </motion.h2>
    <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full mb-6" />
    <p className="text-slate-600 max-w-2xl mx-auto text-lg">{subtitle}</p>
  </div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Residential');

  // Form States
  const [newConn, setNewConn] = useState({ name: '', phone: '', bill: '', consumerNo: '', address: '' });
  const [service, setService] = useState({ name: '', phone: '', size: '', address: '' });

  const projectData = {
    Residential: { range: "3KW - 10KW", desc: "Small to Medium homes, Villas, and Row houses.", img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1000" },
    Commercial: { range: "10KW - 100KW", desc: "Schools, Hospitals, Private Offices, and Showrooms.", img: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1000" },
    Industrial: { range: "100KW - 1MW+", desc: "Factories, Cold Storages, and Large Scale Warehouses.", img: "https://images.unsplash.com/photo-1509391366360-fe5bb6583e2c?q=80&w=1000" }
  };

  return (
    <div className="bg-slate-50 font-sans text-slate-900 scroll-smooth">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed w-full z-[100] bg-white/80 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="text-2xl font-black text-blue-900 flex items-center gap-2">
            <Sun className="text-orange-500 fill-orange-500" />
            DUVATECH <span className="text-slate-400 font-light">SOLAR</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 font-bold text-slate-600">
            {['Home', 'About', 'Services', 'Projects', 'Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-orange-500 transition-colors">{item}</a>
            ))}
          </div>

          <button className="hidden md:block bg-blue-900 text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-blue-200">
            GET FREE QUOTE
          </button>

          {/* Mobile Toggle */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-slate-900/40 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072" 
          className="absolute inset-0 w-full h-full object-cover scale-110 animate-pulse-slow" 
          alt="Solar"
        />
        
        <div className="relative z-20 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest">Premium Solar EPC</span>
            <h1 className="text-5xl md:text-8xl font-black text-white mt-6 mb-8 drop-shadow-2xl">
              Power Your Future <br/> <span className="text-orange-400">With The Sun</span>
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#new-connection" className="bg-orange-500 hover:bg-white hover:text-orange-500 text-white px-10 py-4 rounded-full text-lg font-black transition-all shadow-xl uppercase">Book Free Survey</a>
              <a href="#service-form" className="bg-white/20 backdrop-blur-md text-white border-2 border-white/50 px-10 py-4 rounded-full text-lg font-black hover:bg-white hover:text-blue-900 transition-all uppercase">Repair & Service</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="relative z-30 -mt-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Installs', val: '500+', icon: Zap },
            { label: 'Warranty', val: '25 Yrs', icon: Shield },
            { label: 'Savings', val: '90%', icon: Sun },
            { label: 'Support', val: '24/7', icon: Phone },
          ].map((s, i) => (
            <Card key={i} className="flex flex-col items-center text-center p-8 hover:-translate-y-2 transition-transform">
              <div className="bg-orange-100 p-3 rounded-2xl mb-4">
                <s.icon className="text-orange-600 w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-blue-900">{s.val}</h3>
              <p className="text-slate-500 font-medium">{s.label}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* --- PROJECT CATEGORIES (Tabs) --- */}
      <section id="projects" className="py-24 px-6 bg-white">
        <SectionTitle 
          title="Our Solar Expertise" 
          subtitle="Click to explore our specialized solutions tailored for your energy needs." 
        />
        
        <div className="max-w-5xl mx-auto">
          {/* Tabs */}
          <div className="flex justify-center mb-12 bg-slate-100 p-2 rounded-2xl gap-2">
            {Object.keys(projectData).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-4 rounded-xl font-bold transition-all ${activeTab === tab ? 'bg-blue-900 text-white shadow-xl' : 'text-slate-500 hover:bg-slate-200'}`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Active Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="grid md:grid-cols-2 gap-12 items-center bg-slate-50 p-8 rounded-[2.5rem]"
            >
              <img src={projectData[activeTab].img} className="rounded-3xl shadow-2xl h-80 w-full object-cover" alt={activeTab} />
              <div>
                <h3 className="text-3xl font-black text-blue-900 mb-4">{activeTab} Projects</h3>
                <div className="bg-orange-500 text-white inline-block px-4 py-1 rounded-lg font-bold mb-6 italic">Capacity: {projectData[activeTab].range}</div>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">{projectData[activeTab].desc}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-slate-700 font-bold"><CheckCircle className="text-green-500 w-5 h-5" /> Expert Installation</div>
                  <div className="flex items-center gap-2 text-slate-700 font-bold"><CheckCircle className="text-green-500 w-5 h-5" /> Subsidy Support</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* --- TWO-TYPE LEAD FORMS --- */}
      <section id="contact" className="py-24 px-6 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-600/10 blur-[120px] rounded-full" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 relative z-10">
          
          {/* Form A: New Connection */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            id="new-connection"
          >
            <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl border-t-[12px] border-orange-500">
              <h2 className="text-3xl font-black text-blue-900 mb-2">New Solar Connection</h2>
              <p className="text-slate-500 mb-8 font-medium">Get a customized proposal and free site visit.</p>
              
              <form className="space-y-4">
                <input className="w-full p-4 bg-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-orange-500 transition-all font-medium" placeholder="Your Full Name" />
                <div className="grid grid-cols-2 gap-4">
                  <input className="w-full p-4 bg-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-orange-500 transition-all font-medium" placeholder="Mobile No." />
                  <input className="w-full p-4 bg-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-orange-500 transition-all font-medium" placeholder="Avg Monthly Bill (₹)" />
                </div>
                <input className="w-full p-4 bg-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-orange-500 transition-all font-medium" placeholder="Electricity Consumer Number" />
                <textarea className="w-full p-4 bg-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-orange-500 transition-all font-medium h-24" placeholder="Installation Address"></textarea>
                <button className="w-full bg-orange-500 hover:bg-blue-900 text-white py-5 rounded-2xl font-black text-lg transition-all shadow-xl shadow-orange-200 uppercase tracking-widest">Request Quote</button>
              </form>
            </div>
          </motion.div>

          {/* Form B: Service & Repair */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            id="service-form"
          >
            <div className="bg-white/10 backdrop-blur-xl p-10 rounded-[2.5rem] shadow-2xl border border-white/20 text-white">
              <h2 className="text-3xl font-black mb-2">Service & Maintenance</h2>
              <p className="text-blue-200 mb-8 font-medium">Panel cleaning, inverter repair, or general checkup.</p>
              
              <form className="space-y-4">
                <input className="w-full p-4 bg-white/10 rounded-2xl outline-none focus:ring-2 focus:ring-blue-400 transition-all font-medium placeholder:text-blue-200 border border-white/10" placeholder="Contact Name" />
                <div className="grid grid-cols-2 gap-4">
                  <input className="w-full p-4 bg-white/10 rounded-2xl outline-none focus:ring-2 focus:ring-blue-400 transition-all font-medium placeholder:text-blue-200 border border-white/10" placeholder="Phone Number" />
                  <input className="w-full p-4 bg-white/10 rounded-2xl outline-none focus:ring-2 focus:ring-blue-400 transition-all font-medium placeholder:text-blue-200 border border-white/10" placeholder="Plant Size (KW)" />
                </div>
                <textarea className="w-full p-4 bg-white/10 rounded-2xl outline-none focus:ring-2 focus:ring-blue-400 transition-all font-medium placeholder:text-blue-200 border border-white/10 h-32" placeholder="Full Address of Site"></textarea>
                <button className="w-full bg-blue-500 hover:bg-white hover:text-blue-900 text-white py-5 rounded-2xl font-black text-lg transition-all shadow-xl shadow-blue-500/20 uppercase tracking-widest">Book Service Visit</button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-50 py-20 px-6 border-t">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <h2 className="text-3xl font-black text-blue-900 mb-6">DUVATECH SOLAR</h2>
            <p className="text-slate-500 max-w-sm mb-8 leading-relaxed">Indore's most reliable solar EPC company. We specialize in bringing the power of the sun to every home and industry.</p>
            <div className="flex gap-4">
              <MapPin className="text-orange-500" /> <span className="text-slate-600 font-bold">Indore, Madhya Pradesh, India</span>
            </div>
          </div>
          <div>
            <h4 className="font-black text-slate-900 mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-4 text-slate-500 font-medium">
              <li><a href="#projects" className="hover:text-orange-500">Residential Solar</a></li>
              <li><a href="#projects" className="hover:text-orange-500">Industrial Solar</a></li>
              <li><a href="#new-connection" className="hover:text-orange-500">Subsidy Guide</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black text-slate-900 mb-6 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4 text-slate-500 font-medium">
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-orange-500" /> +91-XXXXX-XXXXX</li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-orange-500" /> info@duvatech.com</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t mt-20 pt-10 text-center text-slate-400 font-medium text-sm">
          © 2026 DUVATECH SOLAR PVT LTD. ALL RIGHTS RESERVED.
        </div>
      </footer>

      {/* --- FLOATING WHATSAPP --- */}
      <a 
        href="https://wa.me/91XXXXXXXXXX" 
        target="_blank" 
        className="fixed bottom-8 right-8 bg-[#25D366] p-5 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all z-[1000] group"
      >
        <MessageCircle className="text-white w-8 h-8" />
        <span className="absolute right-full mr-4 bg-white text-slate-900 px-4 py-2 rounded-xl font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Chat with Experts</span>
      </a>

    </div>
  );
}
