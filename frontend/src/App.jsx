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
            <span className="text-2xl font-black tracking-tighter text-white uppercase italic">Dua<span className="text-orange-600">Tech</span></span>
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
           <img src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2070&auto=format&fit=crop" style={{width: '300',"w-full height:'auto'}} alt="Solar" />
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
      <section id="contact" className="py-32 px-6">
        <div className="max-w-4xl mx-auto bg-slate-900 border border-white/10 p-12 rounded-[3rem] shadow-2xl">
          <h2 className="text-4xl font-black text-white mb-10 text-center uppercase italic tracking-tighter">Request A Call Back</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input type="text" placeholder="NAME" required className="w-full bg-black/40 border border-white/5 p-5 rounded-2xl outline-none focus:border-orange-500 transition-all font-bold text-xs text-white" onChange={e => setFormData({...formData, name: e.target.value})} />
              <input type="tel" placeholder="PHONE" required className="w-full bg-black/40 border border-white/5 p-5 rounded-2xl outline-none focus:border-orange-500 transition-all font-bold text-xs text-white" onChange={e => setFormData({...formData, phone: e.target.value})} />
            </div>
            <input type="text" placeholder="ADDRESS (INDORE)" required className="w-full bg-black/40 border border-white/5 p-5 rounded-2xl outline-none focus:border-orange-500 transition-all font-bold text-xs text-white" onChange={e => setFormData({...formData, address: e.target.value})} />
            <button type="submit" className="w-full bg-orange-600 text-white font-black py-6 rounded-2xl text-xs tracking-[4px] hover:bg-white hover:text-orange-600 transition-all shadow-xl uppercase">Submit Transmission</button>
          </form>
        </div>
      </section>

      <footer className="py-20 text-center border-t border-white/5 opacity-40">
        <p className="text-[10px] font-bold uppercase tracking-[10px]">DuaTech • Indore • 2026</p>
      </footer>
    </div>
  );
};

export default App;
