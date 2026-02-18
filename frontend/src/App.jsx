import React, { useState, useEffect } from 'react';
import './index.css';

export default function App() {
  // --- STATES ---
  const [msg, setMsg] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [adminInput, setAdminInput] = useState({ user: '', pass: '' });
  const [serviceType, setServiceType] = useState('new');
  const [leads, setLeads] = useState([]);

  // --- ADMIN & DATA FETCHING ---
  useEffect(() => {
    if (window.location.pathname === '/admin') {
      setIsAdmin(true);
    }
    if (isLoggedIn) {
      fetchLeads();
    }
  }, [isLoggedIn]);

  const fetchLeads = async () => {
    try {
      const res = await fetch('https://duatech.onrender.com/api/leads');
      const data = await res.json();
      setLeads(data.reverse());
    } catch (err) {
      console.error("Data Fetch Error:", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = {
      name: form.name.value,
      mobile: form.mobile.value,
      address: form.address.value,
      serviceType: serviceType,
      projectType: serviceType === 'new' ? form.projectType.value : 'N/A',
      monthlyBill: serviceType === 'new' ? form.monthlyBill.value : 'N/A',
      sanctionLoad: serviceType === 'new' ? form.sanctionLoad.value : 'N/A',
      installedSize: serviceType === 'old' ? form.installedSize.value : 'N/A'
    };

    try {
      await fetch('https://duatech.onrender.com/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      setMsg(true);
      setTimeout(() => setMsg(false), 5000);
      form.reset();
    } catch (err) {
      alert("Submission Error!");
    }
  };

  // --- 1. ADMIN VIEW ---
  if (isAdmin) {
    if (!isLoggedIn) {
      return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
          <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl w-full max-w-md border-t-8 border-orange-500">
            <h2 className="text-3xl font-black mb-6 text-center italic uppercase">Admin <span className="text-green-600">Login</span></h2>
            <div className="space-y-4">
              <input type="text" placeholder="Admin ID" className="w-full border-2 p-4 rounded-xl font-bold outline-none" onChange={(e) => setAdminInput({...adminInput, user: e.target.value})} />
              <input type="password" placeholder="Password" className="w-full border-2 p-4 rounded-xl font-bold outline-none" onChange={(e) => setAdminInput({...adminInput, pass: e.target.value})} />
              <button onClick={() => adminInput.user === 'admin' && adminInput.pass === 'solar123' ? setIsLoggedIn(true) : alert("Invalid Login")} className="w-full bg-black text-white py-4 rounded-xl font-black uppercase tracking-widest hover:bg-orange-600 transition">Login</button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-white p-6 md:p-12 font-sans">
        <div className="flex justify-between items-center mb-8 bg-gray-900 text-white p-6 rounded-3xl shadow-xl">
          <h1 className="text-xl font-black uppercase italic">DUVA Dashboard ({leads.length})</h1>
          <button onClick={() => setIsLoggedIn(false)} className="bg-orange-500 text-white px-6 py-2 rounded-full font-black text-xs">LOGOUT</button>
        </div>
        <div className="overflow-x-auto rounded-[2rem] border-2 border-gray-100 shadow-2xl">
          <table className="w-full text-left bg-white">
            <thead className="bg-gray-100 text-gray-500 uppercase text-[10px] font-black tracking-widest">
              <tr>
                <th className="p-6">Client Info</th>
                <th className="p-6">Service</th>
                <th className="p-6">Details</th>
                <th className="p-6">Address</th>
              </tr>
            </thead>
            <tbody className="text-sm font-bold text-gray-700">
              {leads.map((lead, i) => (
                <tr key={i} className="border-b hover:bg-orange-50">
                  <td className="p-6">
                    <div className="text-black font-black uppercase">{lead.name}</div>
                    <div className="text-green-600 text-xs">{lead.mobile}</div>
                  </td>
                  <td className="p-6">
                    <span className={`px-4 py-1 rounded-full text-[10px] ${lead.serviceType === 'new' ? 'bg-orange-100 text-orange-600' : 'bg-green-100 text-green-600'}`}>
                      {lead.serviceType === 'new' ? 'NEW' : 'MAINTENANCE'}
                    </span>
                  </td>
                  <td className="p-6">{lead.projectType || lead.installedSize}</td>
                  <td className="p-6 uppercase text-[10px] text-gray-400">{lead.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  // --- 2. MAIN WEBSITE VIEW ---
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-orange-100">
      
      {/* NAVBAR */}
      <nav className="sticky top-0 z-[100] bg-white/95 backdrop-blur-md border-b-4 border-green-600 px-6 py-4 flex justify-between items-center shadow-lg">
        <div className="text-2xl font-black italic tracking-tighter shrink-0">
          <span className="text-orange-600 uppercase">DUVA</span><span className="text-green-600 ml-1">Tech</span>
        </div>
        <div className="hidden lg:flex items-center space-x-6 text-[10px] font-black uppercase tracking-widest text-gray-500">
          <a href="#" className="hover:text-orange-500">Home</a>
          <a href="#projects" className="hover:text-orange-500">Projects</a>
          <a href="#brands" className="hover:text-orange-500">Our Brands</a>
          <div className="relative group cursor-pointer py-2">
            <span className="text-green-600 underline decoration-4 underline-offset-8">Services</span>
            <div className="absolute hidden group-hover:block bg-white border-2 border-gray-100 shadow-2xl mt-4 w-60 p-5 rounded-2xl space-y-3">
              {['EPC Services', 'Sales', 'Energy Audit', 'Maintenance'].map(s => (
                <div key={s} className="hover:text-orange-500 text-[10px] font-black border-b border-gray-50 pb-1 text-gray-700">{s}</div>
              ))}
            </div>
          </div>
          <a href="#contact" className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-black transition">Enquiry Now</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="relative w-full h-[35vh] bg-black flex items-center justify-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072" className="absolute inset-0 w-full h-full object-cover opacity-40" alt="Solar" />
        <h1 className="relative z-10 text-4xl md:text-5xl font-black text-white italic uppercase tracking-tighter text-center px-4">Innovating Clean <span className="text-orange-500">Energy</span></h1>
      </header>

      {/* PROJECTS SLIDER */}
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-6 overflow-x-auto flex space-x-6 no-scrollbar pb-10">
          {[
            {t: 'Residential', img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069'},
            {t: 'Commercial', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069'},
            {t: 'Industrial', img: 'https://images.unsplash.com/photo-1566094758224-acc0cfc24208?q=80&w=2069'}
          ].map(p => (
            <div key={p.t} className="min-w-[320px] h-60 relative rounded-[2.5rem] overflow-hidden shadow-2xl group">
              <img src={p.img} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" alt={p.t} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-8 flex flex-col justify-end">
                <h3 className="text-white text-2xl font-black uppercase italic tracking-tighter">{p.t} Projects</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BRANDS SHOWCASE (Panels, Inverters, Wires) */}
      <section id="brands" className="py-20 bg-gray-50 border-y-2 border-gray-100 text-center">
        <h2 className="text-3xl font-black mb-16 uppercase italic border-b-8 border-green-600 inline-block pb-2">Our Quality Partners</h2>
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12">
          
          {/* Panels */}
          <div className="space-y-6">
            <div className="bg-orange-500 text-white py-2 px-6 rounded-full font-black uppercase tracking-widest text-xs inline-block">Solar Panels</div>
            <div className="space-y-4">
              {['Adani Solar', 'TATA Power', 'Waaree Solar'].map(b => (
                <div key={b} className="bg-white p-4 rounded-2xl shadow-sm border border-orange-100 font-black italic flex items-center justify-center space-x-2">
                  <span>☀️</span><span>{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Inverters (Centered) */}
          <div className="space-y-6 md:scale-110">
            <div className="bg-green-600 text-white py-2 px-6 rounded-full font-black uppercase tracking-widest text-xs inline-block">Inverters</div>
            <div className="space-y-4">
              {['Havells', 'Microtek', 'Luminous', 'Growatt', 'Sungrow'].map(b => (
                <div key={b} className="bg-white p-4 rounded-2xl shadow-md border-2 border-green-100 font-black italic flex items-center justify-center space-x-2">
                  <span>⚡</span><span>{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Wires */}
          <div className="space-y-6">
            <div className="bg-gray-800 text-white py-2 px-6 rounded-full font-black uppercase tracking-widest text-xs inline-block">Wires & Cables</div>
            <div className="space-y-4">
              {['Polycab', 'KEI Wires', 'Finolex'].map(b => (
                <div key={b} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 font-black italic flex items-center justify-center space-x-2">
                  <span>🔌</span><span>{b}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-4xl mx-auto bg-orange-50 p-12 rounded-[3.5rem] border-2 border-orange-200 text-center relative">
          <p className="text-xl md:text-2xl font-bold italic text-gray-700">"DUVA Tech has provided us the best solar experience. Highly satisfied with their industrial solutions."</p>
          <h5 className="mt-8 font-black text-green-600 uppercase tracking-[0.2em]">Satisfied Client, Bhopal</h5>
        </div>
      </section>

      {/* SMART TOGGLE FORM */}
      <section id="contact" className="py-20 bg-gray-50 px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-[3.5rem] shadow-2xl overflow-hidden border-2 border-gray-100">
          <div className="grid grid-cols-2">
            <button onClick={() => setServiceType('new')} className={`py-6 font-black uppercase transition ${serviceType === 'new' ? 'bg-orange-500 text-white' : 'bg-white text-gray-400'}`}>New Connection</button>
            <button onClick={() => setServiceType('old')} className={`py-6 font-black uppercase transition ${serviceType === 'old' ? 'bg-green-600 text-white' : 'bg-white text-gray-400'}`}>Old Plant Service</button>
          </div>
          <form onSubmit={handleSubmit} className="p-8 md:p-14 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input name="name" type="text" placeholder="Full Name *" className="w-full border-2 p-4 rounded-2xl font-bold bg-gray-50 outline-none" required />
              <input name="mobile" type="text" maxLength="10" placeholder="Mobile Number *" className="w-full border-2 p-4 rounded-2xl font-bold bg-gray-50 outline-none" required />
            </div>
            <input name="address" type="text" placeholder="City / Complete Address *" className="w-full border-2 p-4 rounded-2xl font-bold bg-gray-50 outline-none" required />
            
            {serviceType === 'new' ? (
              <div className="space-y-6 animate-in fade-in duration-500">
                <select name="projectType" className="w-full border-2 p-4 rounded-2xl font-bold bg-gray-50" required>
                  <option value="">Select Project Type</option>
                  <option>Industrial / Commercial</option><option>Institutional</option><option>Residential</option>
                </select>
                <div className="grid md:grid-cols-2 gap-6">
                  <input name="monthlyBill" type="number" placeholder="Monthly Bill (₹) *" className="w-full border-2 p-4 rounded-2xl font-bold bg-gray-50" required />
                  <input name="sanctionLoad" type="text" placeholder="Sanction Load (kW) *" className="w-full border-2 p-4 rounded-2xl font-bold bg-gray-50" required />
                </div>
              </div>
            ) : (
              <input name="installedSize" type="text" placeholder="Installed Plant Size (kW) *" className="w-full border-2 p-4 rounded-2xl font-bold bg-gray-50 animate-in slide-in-from-left" required />
            )}
            <button type="submit" className="w-full bg-black text-white font-black py-5 rounded-2xl text-xl hover:bg-orange-600 transition uppercase tracking-[0.3em] shadow-xl">Submit Request</button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white py-16 border-t-8 border-orange-500 text-center px-6">
        <div className="text-4xl font-black italic mb-6 tracking-tighter uppercase"><span className="text-orange-600">DUVA</span> <span className="text-green-600">Tech</span></div>
        <p className="font-bold text-gray-800">Bhopal, MP | info@duvatech.com | +91 8881177764</p>
        <p className="mt-8 text-[10px] text-gray-300 font-black tracking-[0.5em] uppercase">© 2026 DUVA TECH SOLAR SOLUTIONS</p>
      </footer>

      {/* TOOLS (Popup & WhatsApp) */}
      {msg && (
        <div className="fixed top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-12 py-5 rounded-full shadow-2xl font-black z-[300] border-2 border-orange-500 animate-bounce">
          ✅ ENQUIRY SUBMITTED!
        </div>
      )}
      <a href="https://wa.me/918881177764" target="_blank" rel="noreferrer" className="fixed bottom-10 right-10 bg-green-500 p-5 rounded-full shadow-2xl z-[200] hover:scale-110 transition">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="w-8 h-8 filter brightness-0 invert" alt="WhatsApp" />
      </a>

    </div>
  );
}
