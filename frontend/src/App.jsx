import React, { useState, useEffect } from 'react';
import './index.css';

export default function App() {
  const [msg, setMsg] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [adminInput, setAdminInput] = useState({ user: '', pass: '' });
  const [serviceType, setServiceType] = useState('new');

  useEffect(() => {
    if (window.location.pathname === '/admin') setIsAdmin(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const mobile = form.mobile.value;
    if (mobile.length !== 10) {
      alert("Mobile number sahi daalein!");
      return;
    }
    setMsg(true);
    setTimeout(() => setMsg(false), 5000);
    form.reset();
  };

  if (isAdmin && !isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md border-t-8 border-orange-500">
          <h2 className="text-2xl font-black mb-6 text-center italic">ADMIN LOGIN</h2>
          <input type="text" placeholder="User ID" className="w-full border-2 p-4 rounded-xl mb-4" onChange={(e) => setAdminInput({...adminInput, user: e.target.value})} />
          <input type="password" placeholder="Password" className="w-full border-2 p-4 rounded-xl mb-6" onChange={(e) => setAdminInput({...adminInput, pass: e.target.value})} />
          <button onClick={() => adminInput.user === 'admin' && adminInput.pass === 'solar123' ? setIsLoggedIn(true) : alert("Wrong!")} className="w-full bg-black text-white py-4 rounded-xl font-black">ENTER</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      
      {/* 1. STICKY NAVBAR */}
      <nav className="sticky top-0 z-[100] bg-white/95 backdrop-blur-md border-b-4 border-green-600 px-6 py-4 flex justify-between items-center shadow-md">
        <div className="text-2xl font-black italic"><span className="text-orange-600">DUVA</span><span className="text-green-600 ml-1">Tech</span></div>
        <div className="hidden lg:flex space-x-8 text-[11px] font-black uppercase tracking-widest text-gray-500">
          <a href="#" className="hover:text-orange-500">Home</a>
          <a href="#brands" className="hover:text-orange-500">Our Brands</a>
          <a href="#contact" className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-black transition">Get Quote</a>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <header className="relative w-full h-[35vh] bg-black flex items-center justify-center">
        <img src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072" className="absolute inset-0 w-full h-full object-cover opacity-40" alt="Solar" />
        <h1 className="relative z-10 text-4xl md:text-5xl font-black text-white italic uppercase text-center">Powering <span className="text-orange-500">India</span></h1>
      </header>

      {/* 3. CENTERED BRAND SHOWCASE (Updated with your requested brands) */}
      <section id="brands" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-black mb-16 uppercase italic border-b-8 border-green-600 inline-block pb-2">Our Trusted Partners</h2>
          
          <div className="grid md:grid-cols-3 gap-16 items-start">
            
            {/* Solar Panels Column */}
            <div className="space-y-6">
              <div className="bg-orange-500 text-white py-2 px-6 rounded-full font-black uppercase tracking-widest text-sm inline-block shadow-lg mb-4">Solar Panels</div>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex items-center space-x-3 bg-white p-4 w-full rounded-2xl shadow-sm border border-orange-100 hover:scale-105 transition cursor-default">
                   <span className="text-orange-500 text-xl">☀️</span> <span className="font-black italic text-gray-700">Adani Solar</span>
                </div>
                <div className="flex items-center space-x-3 bg-white p-4 w-full rounded-2xl shadow-sm border border-orange-100 hover:scale-105 transition cursor-default">
                   <span className="text-orange-500 text-xl">☀️</span> <span className="font-black italic text-gray-700">TATA Power Solar</span>
                </div>
                <div className="flex items-center space-x-3 bg-white p-4 w-full rounded-2xl shadow-sm border border-orange-100 hover:scale-105 transition cursor-default">
                   <span className="text-orange-500 text-xl">☀️</span> <span className="font-black italic text-gray-700">Waaree Solar</span>
                </div>
              </div>
            </div>

            {/* Inverters Column (Centered) */}
            <div className="space-y-6 md:scale-110">
              <div className="bg-green-600 text-white py-2 px-6 rounded-full font-black uppercase tracking-widest text-sm inline-block shadow-lg mb-4">Solar Inverters</div>
              <div className="flex flex-col items-center space-y-4">
                {['Havells', 'Microtek', 'Luminous', 'Growatt', 'Sungrow'].map(brand => (
                  <div key={brand} className="flex items-center space-x-3 bg-white p-4 w-full rounded-2xl shadow-md border-2 border-green-100 hover:scale-105 transition cursor-default">
                    <span className="text-green-600 text-xl">⚡</span> <span className="font-black italic text-gray-800">{brand}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Wires & Infrastructure Column */}
            <div className="space-y-6">
              <div className="bg-gray-800 text-white py-2 px-6 rounded-full font-black uppercase tracking-widest text-sm inline-block shadow-lg mb-4">Wires & Cables</div>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex items-center space-x-3 bg-white p-4 w-full rounded-2xl shadow-sm border border-gray-100 hover:scale-105 transition cursor-default">
                   <span className="text-blue-500 text-xl">🔌</span> <span className="font-black italic text-gray-700">Polycab</span>
                </div>
                <div className="flex items-center space-x-3 bg-white p-4 w-full rounded-2xl shadow-sm border border-gray-100 hover:scale-105 transition cursor-default">
                   <span className="text-blue-500 text-xl">🔌</span> <span className="font-black italic text-gray-700">KEI Wires</span>
                </div>
                <div className="flex items-center space-x-3 bg-white p-4 w-full rounded-2xl shadow-sm border border-gray-100 hover:scale-105 transition cursor-default">
                   <span className="text-blue-500 text-xl">🔌</span> <span className="font-black italic text-gray-700">Finolex</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. SMART TOGGLE FORM (Relocated below brands) */}
      <section id="contact" className="py-20 bg-white px-6">
        <div className="max-w-4xl mx-auto bg-gray-50 rounded-[3rem] shadow-2xl overflow-hidden border-2 border-gray-200">
          <div className="grid grid-cols-2">
            <button onClick={() => setServiceType('new')} className={`py-6 font-black uppercase transition ${serviceType === 'new' ? 'bg-orange-500 text-white' : 'bg-white text-gray-400'}`}>New Connection</button>
            <button onClick={() => setServiceType('old')} className={`py-6 font-black uppercase transition ${serviceType === 'old' ? 'bg-green-600 text-white' : 'bg-white text-gray-400'}`}>Old Plant Service</button>
          </div>
          <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <input name="name" type="text" pattern="[A-Za-z\s]+" placeholder="Full Name *" className="w-full border-2 p-4 rounded-2xl font-bold bg-white outline-none focus:border-orange-500" required />
              <input name="mobile" type="text" maxLength="10" placeholder="10 Digit Mobile *" className="w-full border-2 p-4 rounded-2xl font-bold bg-white outline-none focus:border-orange-500" required />
            </div>
            {serviceType === 'new' ? (
              <div className="space-y-5 animate-in fade-in">
                <select name="projectType" className="w-full border-2 p-4 rounded-2xl font-bold bg-white outline-none" required>
                  <option value="">Type of Project *</option>
                  <option>Commercial / Industrial</option><option>Institutional</option><option>Residential</option>
                </select>
                <input name="monthlyBill" type="number" placeholder="Monthly Bill (₹) *" className="w-full border-2 p-4 rounded-2xl font-bold bg-white outline-none" required />
              </div>
            ) : (
              <input name="installedSize" type="text" placeholder="Installed Plant Size (kW) *" className="w-full border-2 p-4 rounded-2xl font-bold bg-white outline-none focus:border-green-600" required />
            )}
            <button type="submit" className="w-full bg-black text-white font-black py-5 rounded-2xl text-xl hover:bg-orange-600 transition uppercase tracking-widest">Submit Request</button>
          </form>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="bg-white py-12 border-t-8 border-orange-500 text-center">
        <div className="text-3xl font-black italic mb-4"><span className="text-orange-500 uppercase">DUVA</span> <span className="text-green-600">Tech</span></div>
        <p className="font-bold text-gray-800">Bhopal, MP | +91 8881177764</p>
        <p className="mt-6 text-[10px] text-gray-300 font-black tracking-widest uppercase">© 2026 DUVA TECH SOLAR SOLUTIONS</p>
      </footer>

      {/* TOOLS */}
      <a href="https://wa.me/918881177764" className="fixed bottom-10 right-10 bg-green-500 p-5 rounded-full shadow-2xl z-[200]">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="w-8 h-8 filter brightness-0 invert" alt="WA" />
      </a>
      {msg && (
        <div className="fixed top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-10 py-4 rounded-full shadow-2xl font-black z-[300] border-2 border-orange-500 animate-bounce text-sm">
          🚀 REQUEST SUBMITTED SUCCESSFULLY!
        </div>
      )}

    </div>
  );
}
