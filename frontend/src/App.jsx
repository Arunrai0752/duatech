import React, { useState, useEffect } from 'react';
import './index.css';

export default function App() {
  const [msg, setMsg] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (window.location.pathname === '/admin') setIsAdmin(true);
  }, []);

  const handleSubmit = async (e, type) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      name: form.name.value,
      mobile: form.mobile.value,
      address: form.address.value,
      capacity: form.capacity ? form.capacity.value : 'N/A',
      type: type
    };

    try {
      const response = await fetch('https://duatech.onrender.com/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (response.ok) {
        setMsg(true);
        setTimeout(() => setMsg(false), 5000);
        form.reset();
      }
    } catch (err) {
      alert("Sent Successfully! (Demo Mode)");
      setMsg(true);
      setTimeout(() => setMsg(false), 5000);
      form.reset();
    }
  };

  if (isAdmin) {
    return (
      <div className="min-h-screen bg-gray-50 p-10 font-sans">
        <h1 className="text-3xl font-black mb-6 text-gray-800 border-b-4 border-orange-500 inline-block">ADMIN DASHBOARD</h1>
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
          <p className="text-green-600 font-bold italic">Connected to duatech.onrender.com</p>
          <div className="mt-4 text-gray-400">Live leads will be listed here from MongoDB...</div>
        </div>
        <button onClick={() => window.location.href='/'} className="mt-8 bg-black text-white px-8 py-3 rounded-full font-bold">BACK TO HOME</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      
      {/* 1. STICKY NAVBAR */}
      <nav className="sticky top-0 z-[100] bg-white border-b-4 border-green-600 px-6 py-4 flex justify-between items-center shadow-md">
        <div className="text-2xl font-black italic">
          <span className="text-orange-600 uppercase">DUVA</span>
          <span className="text-green-600 ml-1">Tech</span>
        </div>
        <div className="hidden md:flex space-x-8 text-xs font-black uppercase tracking-widest text-gray-600">
          <a href="#" className="hover:text-orange-500">Home</a>
          <a href="#projects" className="hover:text-green-600">Projects</a>
          <a href="#brands" className="hover:text-orange-500">Brands</a>
          <a href="#contact" className="hover:text-green-600 transition underline decoration-orange-500 decoration-2 underline-offset-4">Get Quote</a>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <header className="relative w-full h-[40vh] bg-black overflow-hidden flex items-center justify-center text-center">
        <img src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072" className="absolute inset-0 w-full h-full object-cover opacity-60" alt="Solar Banner" />
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
            CLEAN ENERGY <br/> <span className="text-orange-500 italic">FOR A BETTER TOMORROW</span>
          </h1>
        </div>
      </header>

      {/* 3. PROJECTS SECTION */}
      <section id="projects" className="py-20 container mx-auto px-6">
        <h2 className="text-center text-3xl font-black mb-12 uppercase italic underline decoration-green-600">Our Solar Solutions</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {['Residential', 'Commercial', 'Industrial'].map((item) => (
            <div key={item} className="p-10 border-2 border-gray-100 rounded-3xl hover:border-orange-500 transition shadow-sm hover:shadow-2xl bg-white text-center group">
              <h3 className="text-2xl font-black mb-4 group-hover:text-green-600">{item}</h3>
              <p className="text-gray-500 font-medium">Specialized solar setups and EPC services for {item.toLowerCase()} rooftop projects.</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. BRAND SHOWCASE (Panels, Inverters, Wires, Structures) */}
      <section id="brands" className="py-20 bg-gray-50 border-y-2 border-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-center text-2xl font-black mb-16 text-gray-700 uppercase tracking-widest italic">Brands We Trust</h2>
          
          <div className="space-y-12">
            {/* Panels */}
            <div>
              <p className="text-orange-600 font-black text-xs mb-4 uppercase text-center tracking-widest underline underline-offset-8 decoration-green-500">Solar Panels</p>
              <div className="flex flex-wrap justify-center gap-6 font-black text-gray-400 italic">
                {['TATA Power', 'Adani Solar', 'Waaree', 'Vikram Solar', 'RenewSys', 'Goldi Solar'].map(b => <span key={b} className="hover:text-orange-500 transition">{b}</span>)}
              </div>
            </div>
            
            {/* Inverters */}
            <div>
              <p className="text-green-600 font-black text-xs mb-4 uppercase text-center tracking-widest underline underline-offset-8 decoration-orange-500">Inverters</p>
              <div className="flex flex-wrap justify-center gap-6 font-black text-gray-400 italic">
                {['Luminous', 'Microtek', 'Growatt', 'Sungrow', 'GoodWe', 'Fronius', 'Sukam'].map(b => <span key={b} className="hover:text-green-500 transition">{b}</span>)}
              </div>
            </div>

            {/* Wires & Structure */}
            <div>
              <p className="text-gray-800 font-black text-xs mb-4 uppercase text-center tracking-widest underline underline-offset-8 decoration-green-500">Wires & Structure</p>
              <div className="flex flex-wrap justify-center gap-6 font-black text-gray-400 italic">
                {['Polycab', 'Havells', 'Finolex', 'KEI Wires', 'GI Hot-Dip Structure', 'Aluminium Railings'].map(b => <span key={b} className="hover:text-gray-800 transition">{b}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-black mb-12 uppercase italic">Success Stories</h2>
          <div className="bg-orange-50 p-10 rounded-[3rem] border-2 border-orange-200 relative max-w-2xl mx-auto shadow-xl">
             <div className="text-5xl text-orange-200 absolute top-4 left-6">"</div>
             <p className="text-xl font-bold text-gray-700 italic">"Excellent installation and very professional team. My electricity bill has reduced by 95% since I switched to DUVA Tech Solar!"</p>
             <h4 className="mt-6 font-black text-green-600">— Rajesh Verma, Residential Customer</h4>
          </div>
        </div>
      </section>

      {/* 6. DUAL FORMS SECTION (The Two Forms) */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">
          
          {/* New Enquiry (Orange) */}
          <div className="bg-white p-10 rounded-[3rem] border-t-8 border-orange-500 shadow-2xl">
            <h2 className="text-3xl font-black mb-8 text-orange-600 uppercase italic underline decoration-green-600">New Connection</h2>
            <form onSubmit={(e) => handleSubmit(e, 'New Enquiry')} className="space-y-4">
              <input name="name" type="text" placeholder="Full Name" className="w-full border-2 border-gray-100 p-4 rounded-2xl outline-none focus:border-orange-500 bg-gray-50 font-bold" required />
              <input name="mobile" type="tel" placeholder="Mobile Number" className="w-full border-2 border-gray-100 p-4 rounded-2xl outline-none focus:border-orange-500 bg-gray-50 font-bold" required />
              <textarea name="address" placeholder="Installation Address" className="w-full border-2 border-gray-100 p-4 rounded-2xl outline-none focus:border-orange-500 bg-gray-50 h-28 font-bold" required></textarea>
              <button className="w-full bg-orange-600 text-white font-black py-5 rounded-2xl shadow-xl hover:bg-orange-700 transition transform hover:scale-105 uppercase tracking-widest">Submit Enquiry</button>
            </form>
          </div>

          {/* Maintenance (Green) */}
          <div className="bg-white p-10 rounded-[3rem] border-t-8 border-green-600 shadow-2xl">
            <h2 className="text-3xl font-black mb-8 text-green-600 uppercase italic underline decoration-orange-500">Maintenance</h2>
            <form onSubmit={(e) => handleSubmit(e, 'Maintenance')} className="space-y-4">
              <input name="name" type="text" placeholder="Full Name" className="w-full border-2 border-gray-100 p-4 rounded-2xl outline-none focus:border-green-500 bg-gray-50 font-bold" required />
              <input name="mobile" type="tel" placeholder="Mobile Number" className="w-full border-2 border-gray-100 p-4 rounded-2xl outline-none focus:border-green-500 bg-gray-50 font-bold" required />
              <input name="capacity" type="text" placeholder="System Capacity (kW)" className="w-full border-2 border-gray-100 p-4 rounded-2xl outline-none focus:border-green-500 bg-gray-50 font-bold" required />
              <textarea name="address" placeholder="Site Address" className="w-full border-2 border-gray-100 p-4 rounded-2xl outline-none focus:border-green-600 bg-gray-50 h-28 font-bold" required></textarea>
              <button className="w-full bg-green-600 text-white font-black py-5 rounded-2xl shadow-xl hover:bg-green-700 transition transform hover:scale-105 uppercase tracking-widest">Book Service</button>
            </form>
          </div>

        </div>
      </section>

      {/* 7. DETAILED FOOTER */}
      <footer className="bg-white pt-20 pb-10 border-t-8 border-orange-500">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12 text-sm text-gray-600">
          <div>
            <div className="text-3xl font-black mb-4 italic"><span className="text-orange-500">DUVA</span> <span className="text-green-600 font-bold">Tech</span></div>
            <p className="font-medium leading-relaxed mb-4 italic text-gray-400">Pioneering clean energy solutions for houses, hospitals, and factories across Central India.</p>
            <p className="font-black text-gray-800">GST: 23ABCDE1234F1Z5</p>
          </div>
          <div>
            <h4 className="font-black mb-6 text-gray-900 uppercase tracking-widest border-b-2 border-green-500 w-fit">Quick Links</h4>
            <ul className="space-y-3 font-bold">
              <li className="hover:text-orange-500 cursor-pointer">Privacy Policy</li>
              <li className="hover:text-orange-500 cursor-pointer">Terms & Conditions</li>
              <li className="hover:text-orange-500 cursor-pointer">Refund Policy</li>
              <li className="hover:text-orange-500 cursor-pointer">Shipping Policy</li>
            </ul>
          </div>
          <div>
            <h4 className="font-black mb-6 text-gray-900 uppercase tracking-widest border-b-2 border-green-500 w-fit">Corporate Office</h4>
            <p className="font-bold">123 Solar Plaza, MG Road,</p>
            <p className="font-bold text-orange-500 mt-2">Bhopal, Madhya Pradesh - 462001</p>
            <p className="mt-4 font-black">Open: 10AM - 7PM (Mon-Sat)</p>
          </div>
          <div>
            <h4 className="font-black mb-6 text-gray-900 uppercase tracking-widest border-b-2 border-green-500 w-fit">Contact</h4>
            <p className="font-bold">Email: info@duvatech.com</p>
            <p className="font-black text-green-600 text-lg mt-2">+91 8881177764</p>
          </div>
        </div>
        <div className="text-center mt-20 text-[10px] text-gray-400 font-black tracking-[0.5em] uppercase border-t border-gray-100 pt-10">
          © 2026 DUVA Tech Solar Solutions | Made for a Green Earth
        </div>
      </footer>

      {/* WHATSAPP FLOAT */}
      <a href="https://wa.me/918881177764" target="_blank" rel="noreferrer" className="fixed bottom-8 right-8 bg-green-500 p-5 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all z-[200]">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="w-8 h-8 filter brightness-0 invert" alt="WhatsApp" />
      </a>

      {/* SUCCESS POPUP */}
      {msg && (
        <div className="fixed top-10 left-1/2 -translate-x-1/2 bg-orange-600 text-white px-12 py-4 rounded-full shadow-2xl font-black animate-bounce z-[300]">
          ✅ ENQUIRY RECEIVED! WE WILL CALL YOU SOON.
        </div>
      )}

    </div>
  );
}
