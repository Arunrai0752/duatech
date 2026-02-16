import React, { useState } from 'react';
import { Sun, Zap, Cable, Factory, CheckCircle, Phone, Shield, Award, MessageCircle, Hammer } from 'lucide-react';

export default function App() {
  const [inquiryType, setInquiryType] = useState('New Installation');
  const [activePage, setActivePage] = useState('home');
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', address: '', monthlyBill: '', currentKW: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // यहाँ अपनी Render वाली URL डालें
      const response = await fetch('https://your-backend-url.render.com/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, inquiryType })
      });
      if (response.ok) {
        alert("धन्यवाद! आपकी पूछताछ सबमिट हो गई है।");
        setFormData({ name: '', phone: '', email: '', address: '', monthlyBill: '', currentKW: '' });
      }
    } catch (err) { 
      alert("Error connecting to server"); 
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* WhatsApp Floating Button - अपना नंबर यहाँ डालें */}
      <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl z-50 transition-transform hover:scale-110">
        <MessageCircle size={30} />
      </a>

      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-40 p-4 flex justify-between items-center">
        <div className="flex items-center gap-1 cursor-pointer" onClick={() => setActivePage('home')}>
          <Sun className="text-orange-600" size={24} />
          <h1 className="text-xl font-black text-orange-600">DUVATECH SOLAR</h1>
        </div>
        <div className="flex gap-4 font-bold text-sm text-gray-600 uppercase">
          <button onClick={() => setActivePage('home')} className={activePage === 'home' ? 'text-orange-600' : ''}>Home</button>
          <button onClick={() => setActivePage('about')} className={activePage === 'about' ? 'text-orange-600' : ''}>About</button>
          <button onClick={() => setActivePage('services')} className={activePage === 'services' ? 'text-orange-600' : ''}>Services</button>
        </div>
      </nav>

      {activePage === 'home' ? (
        <>
          <header className="bg-slate-900 text-white py-20 text-center px-4">
            <h2 className="text-4xl font-black mb-4 uppercase">Authorized Solar Dealer</h2>
            <p className="text-gray-400 font-bold tracking-widest text-sm">TATA POWER | ADANI SOLAR | WAAREE</p>
          </header>

          <section className="max-w-3xl mx-auto -mt-10 p-6">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl shadow-2xl grid gap-4">
              <h3 className="text-2xl font-bold text-center border-b pb-4">Solar Inquiry Form</h3>
              <select 
                value={inquiryType} 
                onChange={(e) => setInquiryType(e.target.value)} 
                className="p-4 border rounded-xl bg-gray-50 font-bold border-orange-200 outline-none"
              >
                <option value="New Installation">New Solar Installation (नया कनेक्शन)</option>
                <option value="Service/Repair">Solar Service/Repair (सर्विस/रिपेयर)</option>
              </select>
              
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" placeholder="Your Name" className="p-4 border rounded-xl" required value={formData.name} onChange={(e)=>setFormData({...formData, name: e.target.value})} />
                <input type="tel" placeholder="Phone Number" className="p-4 border rounded-xl" required value={formData.phone} onChange={(e)=>setFormData({...formData, phone: e.target.value})} />
              </div>
              
              <input type="email" placeholder="Email Address (Optional)" className="p-4 border rounded-xl" value={formData.email} onChange={(e)=>setFormData({...formData, email: e.target.value})} />
              
              <textarea placeholder="Site Address (Full Detail)" className="p-4 border rounded-xl h-24" required value={formData.address} onChange={(e)=>setFormData({...formData, address: e.target.value})}></textarea>
              
              {inquiryType === 'New Installation' ? (
                <div className="animate-pulse">
                   <input type="number" placeholder="Avg Monthly Bill (₹)" className="p-4 border border-orange-300 rounded-xl bg-orange-50 w-full" value={formData.monthlyBill} onChange={(e)=>setFormData({...formData, monthlyBill: e.target.value})} />
                </div>
              ) : (
                <div className="animate-pulse">
                   <input type="text" placeholder="Current Solar Capacity (e.g. 3kW)" className="p-4 border border-blue-300 rounded-xl bg-blue-50 w-full" value={formData.currentKW} onChange={(e)=>setFormData({...formData, currentKW: e.target.value})} />
                </div>
              )}
              
              <button type="submit" className="bg-orange-600 text-white p-4 rounded-xl font-black shadow-lg hover:bg-black transition-all">SUBMIT NOW</button>
            </form>
          </section>
        </>
      ) : activePage === 'about' ? (
        <div className="max-w-4xl mx-auto p-10">
          <h2 className="text-4xl font-black mb-6 border-l-8 border-orange-600 pl-4">About Duvatech Solar</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">हम आपको बेहतरीन सोलर पैनल और मजबूती प्रदान करने वाले GI स्ट्रक्चर के साथ कंप्लीट इंस्टॉलेशन सर्विस देते हैं। हमारा लक्ष्य हर घर को सौर ऊर्जा से जोड़ना है।</p>
          <div className="grid md:grid-cols-2 gap-6">
             <div className="bg-white p-6 rounded-2xl shadow border"><Shield className="text-orange-600 mb-2" /><h4 className="font-bold">Authorized Dealer</h4><p className="text-sm text-gray-500">Adani, Tata & Waaree Solar.</p></div>
             <div className="bg-white p-6 rounded-2xl shadow border"><Award className="text-blue-600 mb-2" /><h4 className="font-bold">Quality Material</h4><p className="text-sm text-gray-500">Heavy duty GI Structure & branded wires.</p></div>
          </div>
        </div>
      ) : (
        <div className="max-w-6xl mx-auto p-10 grid md:grid-cols-3 gap-6">
          <div className="p-8 bg-white shadow-xl rounded-3xl border-t-8 border-orange-500 text-center">
            <Sun size={50} className="mx-auto mb-4 text-orange-500"/>
            <h3 className="text-xl font-black uppercase">Solar Panels</h3>
            <p className="text-gray-500 mt-2">Monocrystalline High Efficiency Panels (Adani/Tata).</p>
          </div>
          <div className="p-8 bg-white shadow-xl rounded-3xl border-t-8 border-gray-700 text-center">
            <Hammer size={50} className="mx-auto mb-4 text-gray-700"/>
            <h3 className="text-xl font-black uppercase">GI Structure</h3>
            <p className="text-gray-500 mt-2">Hot-dip Galvanized structures for 25+ years life.</p>
          </div>
          <div className="p-8 bg-white shadow-xl rounded-3xl border-t-8 border-blue-500 text-center">
            <Zap size={50} className="mx-auto mb-4 text-blue-500"/>
            <h3 className="text-xl font-black uppercase">Accessories</h3>
            <p className="text-gray-500 mt-2">Branded Inverters, DCDB/ACDB and Havells/Polycab wires.</p>
          </div>
        </div>
      )}

      <footer className="bg-slate-900 text-white p-12 mt-20 border-t border-gray-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 text-center md:text-left">
          <div>
             <h4 className="text-2xl font-black text-orange-600 mb-4">DUVATECH SOLAR</h4>
             <p className="text-gray-400">Authorized Partner for Green Energy Revolution.</p>
          </div>
          <div className="text-sm text-gray-500">
             <p>© 2026 DUVATECH SOLAR | All Rights Reserved.</p>
             <p className="mt-2 uppercase tracking-tighter">Shop No 12, Main Market, Indore (M.P.)</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
