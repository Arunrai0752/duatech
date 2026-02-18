import './index.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', address: '', type: 'Residential' });
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://duatech.onrender.com/api/leads', formData);
      alert("✅ Inquiry Received Successfully!");
    } catch (err) {
      alert("❌ Submission Failed. Check Backend Connection.");
    }
  };

  return (
    <div className="bg-[#0f172a] text-slate-200 antialiased font-sans">
      
      {/* NAVBAR */}
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-[#0f172a]/95 backdrop-blur-md shadow-2xl py-3 border-b border-white/5' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(249,115,22,0.4)]">
              <span className="text-white font-black text-xl">D</span>
            </div>
            <span className="text-2xl font-black tracking-tighter text-blue-600 uppercase italic">duva<span className="text-orange-600">Tech</span></span>
          </div>
          <div className="hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-[2px]">
            <a href="#home" className="hover:text-orange-500 transition-colors">Home</a>
            <a href="#services" className="hover:text-orange-500 transition-colors">Solutions</a>
            <a href="#contact" className="bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-500 transition shadow-lg shadow-orange-900/20">Get Survey</a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
  src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072" 
  alt="Solar Panels" 
  className="w-full h-full object-cover" 
/>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0f172a]/80 to-[#0f172a]"></div>
        
        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl md:text-[120px] font-black leading-[0.85] text-white tracking-tighter mb-8">
            SOLAR <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">EVOLUTION.</span>
          </h1>
          <p className="max-w-xl mx-auto text-lg text-slate-400 mb-10 font-light italic">Indore's most advanced solar systems. Zero bills. Zero hassle.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="px-10 py-5 bg-orange-600 text-white font-black rounded-sm hover:bg-white hover:text-orange-600 transition-all shadow-2xl">RESERVE SURVEY</a>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section id="services" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {[
            {t: 'Residential', d: 'Premium home solar with 25Y warranty.', i: '🏠'},
            {t: 'Commercial', d: 'ROI-driven solutions for offices.', i: '🏢'},
            {t: 'Industrial', d: 'MW scale setups for large factories.', i: '🏭'}
          ].map((s, idx) => (
            <div key={idx} className="bg-slate-900/50 p-12 rounded-3xl border border-white/5 hover:border-orange-500/50 transition-all group">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform inline-block">{s.i}</div>
              <h3 className="text-2xl font-black text-white mb-4 uppercase">{s.t}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LEAD FORM SECTION */}
     <section className="py-12 bg-gray-900 text-white">
  <div className="container mx-auto px-4">
    <div className="grid md:grid-cols-2 gap-8">
      
      {/* फॉर्म 1: न्यू सोलर कनेक्शन */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold mb-4 text-orange-500">New Solar Connection Enquiry</h3>
        <form onSubmit={handleFormSubmit} className="flex flex-col gap-3">
          <input type="text" placeholder="Name" className="p-2 rounded bg-gray-700 border-none outline-none" required />
          <input type="tel" placeholder="Mobile Number" className="p-2 rounded bg-gray-700 border-none outline-none" required />
          <textarea placeholder="Address" className="p-2 rounded bg-gray-700 h-24" required></textarea>
          <button type="submit" className="bg-orange-600 p-2 rounded hover:bg-orange-700 transition">Submit Enquiry</button>
        </form>
      </div>

      {/* फॉर्म 2: सर्विस एंड मेंटेनेंस */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-green-500">
        <h3 className="text-xl font-bold mb-4 text-green-500">Service & Maintenance</h3>
        <form onSubmit={handleFormSubmit} className="flex flex-col gap-3">
          <input type="text" placeholder="Name" className="p-2 rounded bg-gray-700" required />
          <input type="tel" placeholder="Mobile Number" className="p-2 rounded bg-gray-700" required />
          <input type="text" placeholder="Installed Plant Capacity (kW)" className="p-2 rounded bg-gray-700" required />
          <textarea placeholder="Address" className="p-2 rounded bg-gray-700 h-24" required></textarea>
          <button type="submit" className="bg-green-600 p-2 rounded hover:bg-green-700 transition">Submit Request</button>
        </form>
      </div>

    </div>
  </div>
</section>

      {/* --- PROFESSIONAL FOOTER START --- */}
<footer className="bg-black text-gray-400 py-12 border-t border-gray-800">
  <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8">
    
    {/* कॉलम 1: ब्रांड और लोगो */}
    <div className="space-y-4">
      <div className="text-2xl font-bold flex items-baseline">
        <span className="text-blue-600">DUVA</span>
        <span className="text-green-500 text-lg ml-1">tECH</span>
      </div>
      <p className="text-sm leading-relaxed">
        Leading the way in sustainable solar energy solutions. 
        Transforming lives with clean and affordable power.
      </p>
    </div>

    {/* कॉलम 2: संपर्क जानकारी */}
    <div>
      <h4 className="text-white font-bold mb-4 border-b border-blue-600 pb-2 w-fit">Contact Us</h4>
      <ul className="space-y-2 text-sm">
        <li>Email: info@duvatech.com</li>
        <li>Phone: +91 98765 43210</li>
        <li>GST: 23AAAAA0000A1Z5</li>
      </ul>
    </div>

    {/* कॉलम 3: पता */}
    <div>
      <h4 className="text-white font-bold mb-4 border-b border-blue-600 pb-2 w-fit">Office Address</h4>
      <p className="text-sm">
        123, Solar Plaza, Green City,<br/>
        Near Main Square, Bhopal,<br/>
        Madhya Pradesh - 462001
      </p>
    </div>

    {/* कॉलम 4: नीतियां (Policies) */}
    <div>
      <h4 className="text-white font-bold mb-4 border-b border-blue-600 pb-2 w-fit">Quick Links</h4>
      <ul className="space-y-2 text-sm italic">
        <li><a href="#" className="hover:text-blue-500 transition">Privacy Policy</a></li>
        <li><a href="#" className="hover:text-blue-500 transition">Terms & Conditions</a></li>
        <li><a href="#" className="hover:text-blue-500 transition">Refund Policy</a></li>
      </ul>
    </div>

  </div>

  {/* कॉपीराइट वाला हिस्सा */}
  <div className="text-center mt-12 pt-8 border-t border-gray-900 text-xs tracking-widest">
    © 2026 DUVAtECH SOLAR SOLUTIONS | ALL RIGHTS RESERVED.
  </div>
</footer>
{/* --- PROFESSIONAL FOOTER END --- */}
  {/* --- WHATSAPP FLOATING ICON --- */}
<a 
  href="https://wa.me/8881177764" // अपना व्हाट्सएप नंबर यहाँ बदले
  target="_blank" 
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-[9999]"
>
  <img 
    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
    alt="WhatsApp" 
    className="w-8 h-8" 
  />
</a>    
    </div>
  );
};

export default App;
