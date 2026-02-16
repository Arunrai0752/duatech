import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState({ name: '', email: '', mobile: '' });

  const submit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://duatech.onrender.com/api/leads', data);
      alert('Solar Inquiry Sent! ☀️');
      setData({ name: '', email: '', mobile: '' });
    } catch (err) { alert('Error! Please try again.'); }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-sm border-b py-4 px-6 flex justify-between items-center shadow-sm">
        <h1 className="text-2xl font-black text-blue-900">DUVA<span className="text-orange-500">TECH</span> SOLAR</h1>
        <div className="hidden md:flex space-x-6 font-bold text-gray-600">
          <a href="#services" className="hover:text-orange-500 transition">Solutions</a>
          <a href="#contact" className="bg-blue-900 text-white px-6 py-2 rounded-full hover:bg-orange-500 transition shadow-lg">Free Quote</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white bg-blue-900">
        <div className="absolute inset-0 opacity-40 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1509391366360-fe5bb6583e2c?q=80&w=1920')"}}></div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">Save Earth, <br/><span className="text-orange-400 font-serif">Save Electricity</span></h2>
          <p className="text-xl md:text-2xl mb-10 text-blue-100 font-medium">Get high-efficiency Solar Rooftop solutions with up to 40% Subsidy.</p>
          <a href="#contact" className="bg-orange-500 hover:scale-110 transform transition text-white px-10 py-4 rounded-full text-xl font-black shadow-2xl inline-block">GO SOLAR NOW</a>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-16 uppercase tracking-widest">Our Solar Solutions</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {['Residential', 'Commercial', 'Industrial'].map((type) => (
            <div key={type} className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition border-t-8 border-orange-500">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">{type} Solar</h3>
              <p className="text-gray-600 mb-6 font-medium text-lg italic">The best way to power your {type.toLowerCase()} space with clean energy.</p>
              <div className="w-12 h-1 bg-blue-900 rounded-full"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="bg-blue-900 py-24 px-6">
        <div className="max-w-xl mx-auto bg-white p-10 rounded-3xl shadow-2xl">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">Get Free Site Survey</h2>
          <form onSubmit={submit} className="space-y-5">
            <input className="w-full p-4 bg-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-orange-500 transition" placeholder="Full Name" required value={data.name} onChange={e => setData({...data, name: e.target.value})} />
            <input className="w-full p-4 bg-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-orange-500 transition" placeholder="Mobile Number" required value={data.mobile} onChange={e => setData({...data, mobile: e.target.value})} />
            <button className="w-full bg-orange-500 text-white py-4 rounded-xl font-black text-lg hover:bg-blue-900 transition-all shadow-xl uppercase tracking-widest">Submit Request</button>
          </form>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a href="https://wa.me/91XXXXXXXXXX" target="_blank" className="fixed bottom-10 right-10 bg-[#25D366] p-5 rounded-full shadow-2xl hover:scale-110 transition z-50 border-4 border-white">
        <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" className="w-8 h-8 invert" alt="WhatsApp" />
      </a>

      <footer className="py-12 bg-gray-100 text-center border-t border-gray-200 font-bold text-gray-400 uppercase tracking-widest">
        © 2026 DUVA TECH SOLAR PVT LTD
      </footer>
    </div>
  );
}

export default App;
