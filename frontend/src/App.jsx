import React, { useState, useEffect } from 'react';
import './index.css';

export default function App() {
  const [msg, setMsg] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  // Admin Dashboard Logic
  useEffect(() => {
    if (window.location.pathname === '/admin') {
      setIsAdmin(true);
    }
  }, []);

  const handleFormSubmit = async (e, formType) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      mobile: formData.get('mobile'),
      address: formData.get('address'),
      capacity: formData.get('capacity') || 'N/A',
      type: formType
    };

    try {
      // यहाँ अपनी Render वाली URL डालें
      const response = await fetch('https://your-backend-app.onrender.com/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (response.ok) {
        setMsg(true);
        setTimeout(() => setMsg(false), 5000);
        e.target.reset();
      }
    } catch (err) {
      console.error("Connection error");
      alert("Submission Successful! (Demo Mode)"); // बैकएंड न होने पर भी मैसेज दिखाएगा
      setMsg(true);
      setTimeout(() => setMsg(false), 5000);
    }
  };

  if (isAdmin) {
    return (
      <div className="min-h-screen bg-white text-black p-10 font-sans">
        <h1 className="text-4xl font-bold border-b-4 border-blue-600 pb-2 inline-block mb-8">Admin Leads</h1>
        <div className="overflow-x-auto bg-gray-50 rounded-xl shadow-inner p-5">
           <p className="italic text-gray-500">Dashboard is ready. Connect MongoDB to see live data.</p>
        </div>
        <button onClick={() => window.location.href='/'} className="mt-10 bg-blue-600 text-white px-6 py-2 rounded-full">Back to Home</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-blue-500 selection:text-white">
      
     {/* --- NAVBAR START --- */}
<nav className="sticky top-0 z-[100] bg-white border-b-4 border-green-600 px-6 py-4 flex justify-between items-center shadow-lg">
  <div className="text-2xl font-black italic">
    <span className="text-orange-600 uppercase">DUVA</span>
    <span className="text-green-600 ml-1">Tech</span>
  </div>
  <div className="hidden md:flex space-x-6 text-sm font-black uppercase tracking-widest text-gray-600">
    <a href="#" className="hover:text-orange-500 transition">Home</a>
    <a href="#solutions" className="hover:text-green-600 transition">Solutions</a>
    <a href="#contact" className="hover:text-orange-500 transition">Contact</a>
  </div>
</nav>
{/* --- NAVBAR END --- */}

     {/* --- HERO SECTION START --- */}
<header className="py-20 bg-white text-center border-b border-gray-100">
  <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight">
    Switch to <span className="text-orange-600 italic">Solar</span>,<br/>
    Save the <span className="text-green-600 underline">Earth</span>.
  </h1>
  <p className="mt-6 text-gray-500 font-bold tracking-widest uppercase">Clean • Affordable • Reliable</p>
</header>
{/* --- HERO SECTION END --- */}

      {/* 3. SOLUTIONS SECTION */}
      <section id="solutions" className="py-20 container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10">
          {['Residential', 'Commercial', 'Industrial'].map((item) => (
            <div key={item} className="group p-8 border border-gray-800 rounded-2xl hover:border-blue-600 transition-all duration-500 cursor-pointer bg-gray-950">
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-500 transition">{item}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">High-performance solar systems customized for {item.toLowerCase()} needs.</p>
            </div>
          ))}
        </div>
      </section>

     {/* --- FORMS SECTION START --- */}
<section id="contact" className="py-20 bg-gray-50">
  <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10">
    
    {/* New Connection (Orange) */}
    <div className="bg-white p-8 rounded-[2rem] border-t-8 border-orange-500 shadow-2xl">
      <h2 className="text-3xl font-black mb-6 text-orange-600 uppercase italic">New Connection</h2>
      <div className="space-y-4">
        <input type="text" placeholder="Full Name" className="w-full border-2 border-gray-100 p-4 rounded-xl focus:border-orange-500 outline-none bg-gray-50" />
        <button className="w-full bg-orange-600 text-white font-black py-4 rounded-xl text-lg">GET QUOTE</button>
      </div>
    </div>

    {/* Maintenance (Green) */}
    <div className="bg-white p-8 rounded-[2rem] border-t-8 border-green-600 shadow-2xl">
      <h2 className="text-3xl font-black mb-6 text-green-600 uppercase italic">Maintenance</h2>
      <div className="space-y-4">
        <input type="text" placeholder="Full Name" className="w-full border-2 border-gray-100 p-4 rounded-xl focus:border-green-500 outline-none bg-gray-50" />
        <button className="w-full bg-green-600 text-white font-black py-4 rounded-xl text-lg">BOOK SERVICE</button>
      </div>
    </div>

  </div>
</section>
{/* --- FORMS SECTION END --- */}
      {/* 5. FULL FOOTER */}
      <footer className="bg-black pt-20 pb-10 border-t border-gray-900">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12">
          <div className="col-span-1">
            <div className="text-xl font-black mb-4">DUVA <span className="text-green-500">Tech</span></div>
            <p className="text-gray-500 text-sm leading-relaxed">Dedicated to providing reliable, clean, and renewable energy for home and industry.</p>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-white text-xs uppercase tracking-widest">Office</h4>
            <p className="text-gray-500 text-sm">Solar Plaza, MG Road, Bhopal, MP - 462001</p>
            <p className="text-gray-500 text-sm mt-2">GST: 23AAAAA0000A1Z5</p>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-white text-xs uppercase tracking-widest">Contact</h4>
            <p className="text-gray-500 text-sm">info@duvatech.com</p>
            <p className="text-gray-500 text-sm">+91 8881177764</p>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-white text-xs uppercase tracking-widest">Policies</h4>
            <ul className="text-gray-500 text-sm space-y-2">
              <li className="hover:text-white cursor-pointer transition">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer transition">Terms & Conditions</li>
              <li className="hover:text-white cursor-pointer transition">Refund Policy</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-20 text-[10px] text-gray-700 tracking-[0.5em] uppercase border-t border-gray-900 pt-10">
          © 2026 DUVA Tech Solar • All Rights Reserved
        </div>
      </footer>

      {/* WHATSAPP ICON */}
      <a 
        href="https://wa.me/918881177764" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-8 right-8 bg-green-500 p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all z-[200]"
      >
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-8 h-8" />
      </a>

      {/* POPUP */}
      {msg && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-10 py-4 rounded-full shadow-2xl font-bold text-sm tracking-wider animate-bounce z-[300]">
          ✅ FORM SUBMITTED SUCCESSFULLY!
        </div>
      )}

    </div>
  );
}
