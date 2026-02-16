import React, { useState } from 'react';
import { Sun, Zap, Cable, Factory, CheckCircle, Phone, Shield, Award, MessageCircle, Info, Hammer } from 'lucide-react';

const App = () => {
  const [inquiryType, setInquiryType] = useState('New Installation');
  const [activePage, setActivePage] = useState('home');
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', address: '', monthlyBill: '', currentKW: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://your-backend-url.render.com/api/leads', { // यहाँ अपना बैकएंड लिंक बदलें
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, inquiryType })
      });
      if (response.ok) {
        alert("धन्यवाद! आपकी पूछताछ सबमिट हो गई है।");
        setFormData({ name: '', phone: '', email: '', address: '', monthlyBill: '', currentKW: '' });
      }
    } catch (err) {
      alert("Error submitting form");
    }
  };

  const WhatsAppButton = () => (
    <a 
      href="https://wa.me/91XXXXXXXXXX?text=Hi, I am interested in Solar Installation." 
      target="_blank" 
      rel="noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl z-50 hover:bg-green-600 transition-all flex items-center gap-2"
    >
      <MessageCircle size={28} />
      <span className="font-bold hidden md:inline">Chat with Us</span>
    </a>
  );

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 scroll-smooth">
      <WhatsAppButton />

      {/* NAVIGATION */}
      <nav className="bg-white shadow-lg sticky top-0 z-50 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActivePage('home')}>
            <Sun className="text-orange-600" size={32} />
            <h1 className="text-2xl font-black">DUVATECH <span className="text-orange-600">SOLAR</span></h1>
          </div>
          <div className="hidden md:flex gap-6 font-bold text-gray-600 uppercase text-sm">
            <button onClick={() => setActivePage('home')} className={`hover:text-orange-600 ${activePage === 'home' ? 'text-orange-600' : ''}`}>Home</button>
            <button onClick={() => setActivePage('about')} className={`hover:text-orange-600 ${activePage === 'about' ? 'text-orange-600' : ''}`}>About Us</button>
            <button onClick={() => setActivePage('services')} className={`hover:text-orange-600 ${activePage === 'services' ? 'text-orange-600' : ''}`}>Services</button>
          </div>
          <a href="tel:+91XXXXXXXXXX" className="bg-orange-600 text-white px-5 py-2 rounded-lg font-bold flex items-center gap-2">
            <Phone size={18} /> Call Now
          </a>
        </div>
      </nav>

      {/* PAGE CONTENT */}
      {activePage === 'home' && (
        <>
          <header className="bg-slate-900 text-white py-24 px-4 text-center relative">
            <h2 className="text-5xl md:text-7xl font-black mb-6">Sustainable Energy for Life</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Authorized Dealer: Adani Solar | Tata Power | Waaree</p>
            <button onClick={() => setActivePage('services')} className="mt-8 bg-orange-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-white hover:text-orange-600 transition">Our Products</button>
          </header>

          <section className="py-20 bg-gray-100 px-4">
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-3xl shadow-xl">
              <h3 className="text-3xl font-bold text-center mb-8">Solar Inquiry Form</h3>
              <form onSubmit={handleSubmit} className="grid gap-4">
                <select 
                  value={inquiryType}
                  onChange={(e) => setInquiryType(e.target.value)}
                  className="p-4 border rounded-xl bg-gray-50 font-bold outline-none border-orange-200"
                >
                  <option value="New Installation">नया सोलर कनेक्शन (New Installation)</option>
                  <option value="Service/Repair">सोलर सर्विस/रिपेयर (Service/Repair)</option>
                </select>
                <div className="grid md:grid-cols-2 gap-4">
                  <input name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Your Name" className="p-4 border rounded-xl" required />
                  <input name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="Mobile Number" className="p-4 border rounded-xl" required />
                </div>
                <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Email Address" className="p-4 border rounded-xl" />
                <textarea name="address" value={formData.address} onChange={handleChange} placeholder="Site Address" className="p-4 border rounded-xl h-24" required></textarea>
                
                {inquiryType === 'New Installation' ? (
                  <input name="monthlyBill" value={formData.monthlyBill} onChange={handleChange} type="number" placeholder="Average Monthly Bill (₹)" className="p-4 border border-orange-300 rounded-xl" />
                ) : (
                  <input name="currentKW" value={formData.currentKW} onChange={handleChange} type="text" placeholder="Existing Capacity (e.g. 3kW)" className="p-4 border border-blue-300 rounded-xl" />
                )}
                <button type="submit" className="bg-orange-600 text-white py-4 rounded-xl font-black text-lg shadow-lg hover:bg-black transition">SUBMIT INQUIRY</button>
              </form>
            </div>
          </section>
        </>
      )}

      {activePage === 'about' && (
        <section className="max-w-5xl mx-auto py-20 px-4">
          <h2 className="text-4xl font-black mb-8 border-l-8 border-orange-600 pl-4">About Duvatech Solar</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-6">हम आपको बेहतरीन सोलर पैनल और मजबूती प्रदान करने वाले GI स्ट्रक्चर के साथ कंप्लीट इंस्टॉलेशन सर्विस देते हैं।</p>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-orange-50 p-6 rounded-2xl"><Shield className="text-orange-600 mb-4" size={40} /><h4 className="text-2xl font-bold">Genuine Brands</h4><p>Adani, Tata Power, Waaree Solar Panels.</p></div>
            <div className="bg-blue-50 p-6 rounded-2xl"><Award className="text-blue-600 mb-4" size={40} /><h4 className="text-2xl font-bold">Expert Support</h4><p>Authorized service and maintenance.</p></div>
          </div>
        </section>
      )}

      {activePage === 'services' && (
        <section className="max-w-7xl mx-auto py-20 px-4">
          <h2 className="text-4xl font-black text-center mb-16">OUR PRODUCTS</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-2 p-8 rounded-3xl"><Sun className="text-orange-600 mb-6" size={48} /><h3 className="text-2xl font-bold mb-2">Solar Panels</h3><p className="text-gray-500">Mono-Perc High Efficiency Panels.</p></div>
            <div className="border-2 p-8 rounded-3xl"><Hammer className="text-gray-700 mb-6" size={48} /><h3 className="text-2xl font-bold mb-2">GI Structure</h3><p className="text-gray-500">Heavy duty galvanized iron mounting.</p></div>
            <div className="border-2 p-8 rounded-3xl"><Cable className="text-blue-600 mb-6" size={48} /><h3 className="text-2xl font-bold mb-2">Inverters & Wires</h3><p className="text-gray-500">Havells, Polycab & Finolex Accessories.</p></div>
          </div>
        </section>
      )}

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white pt-16 pb-8 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h4 className="text-2xl font-bold text-orange-600 mb-4">DUVATECH SOLAR</h4>
            <p className="text-gray-400">Your Trusted Partner in Solar Energy.</p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><button onClick={() => setActivePage('home')}>Home</button></li>
              <li><button onClick={() => setActivePage('about')}>About Us</button></li>
              <li><button onClick={() => setActivePage('services')}>Services</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Contact</h4>
            <p className="text-gray-400">Shop No 12, Main Market, City</p>
            <p className="text-gray-400 mt-2 font-bold">Email: info@duvatechsolar.com</p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-600 text-sm">
          © 2026 Duvatech Solar. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;
