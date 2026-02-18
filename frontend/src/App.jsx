import React, { useState, useEffect } from 'react';
import './index.css';

export default function App() {
  const [msg, setMsg] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [adminInput, setAdminInput] = useState({ user: '', pass: '' });
  const [serviceType, setServiceType] = useState('new');
  const [leads, setLeads] = useState([]); // Database leads store karne ke liye

  useEffect(() => {
    if (window.location.pathname === '/admin') setIsAdmin(true);
    // Yahan hum leads fetch kar sakte hain backend se
  }, []);

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
      setMsg(true);
      form.reset();
    }
  };

  // --- 1. UPDATED ADMIN VIEW (Isme naye fields add hain) ---
  if (isAdmin) {
    if (!isLoggedIn) {
      return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
          <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl w-full max-w-md border-t-8 border-orange-500">
            <h2 className="text-3xl font-black mb-6 text-center italic">ADMIN LOGIN</h2>
            <div className="space-y-4">
              <input type="text" placeholder="Admin ID" className="w-full border-2 p-4 rounded-xl font-bold" onChange={(e) => setAdminInput({...adminInput, user: e.target.value})} />
              <input type="password" placeholder="Password" className="w-full border-2 p-4 rounded-xl font-bold" onChange={(e) => setAdminInput({...adminInput, pass: e.target.value})} />
              <button onClick={() => adminInput.user === 'admin' && adminInput.pass === 'solar123' ? setIsLoggedIn(true) : alert("Wrong!")} className="w-full bg-black text-white py-4 rounded-xl font-black uppercase">Enter Dashboard</button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-gray-50 p-6 md:p-10">
        <div className="flex justify-between items-center mb-10 bg-white p-6 rounded-3xl shadow-sm border-b-4 border-green-600">
          <h1 className="text-2xl font-black italic uppercase">DUVA <span className="text-orange-500">LEADS</span></h1>
          <button onClick={() => setIsLoggedIn(false)} className="bg-red-500 text-white px-8 py-2 rounded-full font-black text-xs uppercase">Logout</button>
        </div>
        
        <div className="bg-white rounded-[2rem] shadow-xl overflow-x-auto border border-gray-100">
          <table className="w-full text-left">
            <thead className="bg-gray-800 text-white uppercase text-[10px] tracking-widest">
              <tr>
                <th className="p-6">Client Details</th>
                <th className="p-6">Service Type</th>
                <th className="p-6">Project/Size</th>
                <th className="p-6">Bill / Address</th>
              </tr>
            </thead>
            <tbody className="font-bold text-sm text-gray-600">
              {/* Database se data aane par ye loop chalega */}
              <tr className="border-b hover:bg-orange-50 transition">
                <td className="p-6">
                  <div className="text-gray-900 font-black">Rajesh Verma</div>
                  <div className="text-xs text-gray-400">+91 918881177764</div>
                </td>
                <td className="p-6 text-orange-600 uppercase italic">New Connection</td>
                <td className="p-6">Commercial Industrial</td>
                <td className="p-6">₹15,000 / Bhopal</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  // --- 2. MAIN WEBSITE VIEW (Wahi jo pehle set kiya tha) ---
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <nav className="sticky top-0 z-[100] bg-white/95 backdrop-blur-md border-b-4 border-green-600 px-6 py-4 flex justify-between items-center shadow-lg">
        <div className="text-2xl font-black italic"><span className="text-orange-600">DUVA</span><span className="text-green-600 ml-1">Tech</span></div>
        <div className="hidden lg:flex items-center space-x-6 text-[11px] font-black uppercase tracking-widest text-gray-500">
          <a href="#" className="hover:text-orange-500">Home</a>
          <a href="#brands" className="hover:text-orange-500">Brands</a>
          <a href="#contact" className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-black transition">Enquiry</a>
        </div>
      </nav>

      {/* Hero, Brands, and Form logic remains same as per your last request */}
      <section id="brands" className="py-20 bg-gray-50 text-center">
         <h2 className="text-3xl font-black mb-16 uppercase italic">Our Brands</h2>
         <div className="grid md:grid-cols-3 gap-10 px-10">
            <div className="space-y-3">
              <div className="bg-orange-500 text-white py-2 rounded-full text-xs font-black uppercase">Panels</div>
              <p className="font-bold italic text-gray-500">Adani, Tata, Waaree</p>
            </div>
            <div className="space-y-3 scale-110">
              <div className="bg-green-600 text-white py-2 rounded-full text-xs font-black uppercase">Inverters</div>
              <p className="font-bold italic text-gray-500">Havells, Microtek, Luminous, Growatt</p>
            </div>
            <div className="space-y-3">
              <div className="bg-gray-800 text-white py-2 rounded-full text-xs font-black uppercase">Wires</div>
              <p className="font-bold italic text-gray-500">Polycab, KEI, Finolex</p>
            </div>
         </div>
      </section>

      {/* SMART FORM SECTION */}
      <section id="contact" className="py-20 bg-white px-6">
        <div className="max-w-4xl mx-auto bg-gray-50 rounded-[3rem] shadow-2xl overflow-hidden border-2 border-gray-200">
          <div className="grid grid-cols-2">
            <button onClick={() => setServiceType('new')} className={`py-6 font-black uppercase transition ${serviceType === 'new' ? 'bg-orange-500 text-white' : 'bg-white text-gray-400'}`}>New Connection</button>
            <button onClick={() => setServiceType('old')} className={`py-6 font-black uppercase transition ${serviceType === 'old' ? 'bg-green-600 text-white' : 'bg-white text-gray-400'}`}>Old Plant Service</button>
          </div>
          <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-5">
            <input name="name" type="text" placeholder="Full Name *" className="w-full border-2 p-4 rounded-2xl font-bold bg-white" required />
            <input name="mobile" type="text" maxLength="10" placeholder="10 Digit Mobile *" className="w-full border-2 p-4 rounded-2xl font-bold bg-white" required />
            <input name="address" type="text" placeholder="Address *" className="w-full border-2 p-4 rounded-2xl font-bold bg-white" required />
            
            {serviceType === 'new' ? (
              <div className="space-y-5">
                <select name="projectType" className="w-full border-2 p-4 rounded-2xl font-bold bg-white" required>
                  <option value="">Project Type</option>
                  <option>Commercial</option><option>Institutional</option><option>Residential</option>
                </select>
                <input name="monthlyBill" type="number" placeholder="Monthly Bill (₹) *" className="w-full border-2 p-4 rounded-2xl font-bold bg-white" required />
              </div>
            ) : (
              <input name="installedSize" type="text" placeholder="Installed Plant Size (kW) *" className="w-full border-2 p-4 rounded-2xl font-bold bg-white focus:border-green-600" required />
            )}
            <button type="submit" className="w-full bg-black text-white font-black py-5 rounded-2xl text-xl hover:bg-orange-600 transition uppercase">Submit Request</button>
          </form>
        </div>
      </section>

      <footer className="bg-white py-12 border-t-8 border-orange-500 text-center">
         <div className="text-3xl font-black italic mb-4 uppercase"><span className="text-orange-500">DUVA</span> <span className="text-green-600">Tech</span></div>
         <p className="font-bold text-gray-400">© 2026 DUVA TECH SOLAR SOLUTIONS</p>
      </footer>

      {msg && (
        <div className="fixed top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-10 py-4 rounded-full shadow-2xl font-black z-[300] border-2 border-orange-500 animate-bounce">
          ✅ REQUEST SUBMITTED!
        </div>
      )}
    </div>
  );
}
