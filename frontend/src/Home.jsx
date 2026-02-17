import React, { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', phone: '', type: 'Residential' });
  const [error, setError] = useState('');

  const handleWhatsApp = async () => {
    const nameRegex = /^[A-Za-z\s]+$/;
    const phoneRegex = /^[0-9]+$/;

    if (!nameRegex.test(formData.name)) return setError("Name: Only Alphabets allowed!");
    if (!phoneRegex.test(formData.phone) || formData.phone.length < 10) return setError("Phone: Enter 10 digit number!");
    
    setError('');
    try { await axios.post('/api/leads', formData); } catch (err) { console.log(err); }

    const msg = `*NEW SOLAR INQUIRY*%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Type:* ${formData.type}`;
    window.open(`https://wa.me/918982910432?text=${msg}`, '_blank');
  };

  return (
    <main>
      {/* HERO & FORM */}
      <section style={{ padding: '60px 5%', background: '#1e293b', color: 'white', display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
        <div style={{ flex: 1 }}>
          <h1 style={{fontSize: '3rem'}}>Indore's No.1 Solar Dealer</h1>
          <p>TATA Power | Adani Solar | Waaree Authorized Vendor</p>
        </div>
        <div style={{ flex: 1, background: 'white', padding: '30px', borderRadius: '15px', color: '#333' }}>
          <h3 style={{borderBottom: '2px solid #fb923c'}}>Get New Solar Connection</h3>
          {error && <p style={{color: 'red'}}>{error}</p>}
          <input type="text" placeholder="Your Name" style={{width: '100%', padding: '10px', margin: '10px 0'}} onChange={e => setFormData({...formData, name: e.target.value})} />
          <input type="text" placeholder="Mobile Number" style={{width: '100%', padding: '10px', margin: '10px 0'}} onChange={e => setFormData({...formData, phone: e.target.value})} />
          <select style={{width: '100%', padding: '10px', margin: '10px 0'}} onChange={e => setFormData({...formData, type: e.target.value})}>
            <option>Residential</option><option>Commercial</option><option>Industrial</option>
          </select>
          <button onClick={handleWhatsApp} style={{width: '100%', background: '#25D366', color: 'white', padding: '15px', border: 'none', cursor: 'pointer', fontWeight: 'bold'}}>SUBMIT & WHATSAPP</button>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" style={{ padding: '60px 5%', background: '#f8fafc' }}>
        <h2 style={{textAlign: 'center'}}>Our Services</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          {['On-Grid Setup', 'Off-Grid Systems', 'Maintenance', 'Subsidy Help'].map(s => (
            <div key={s} style={{background: 'white', padding: '20px', borderRadius: '10px', borderLeft: '5px solid #fb923c'}}><h4>{s}</h4></div>
          ))}
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section id="products" style={{ padding: '60px 5%' }}>
        <h2 style={{textAlign: 'center'}}>Authorized Products</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
          {['TATA Solar Panels', 'Adani Mono Perc', 'Waaree Panels', 'Luminous Inverters', 'Solar Structures'].map(p => (
            <div key={p} style={{border: '1px solid #ddd', padding: '20px', textAlign: 'center'}}><h4>{p}</h4></div>
          ))}
        </div>
      </section>
    </main>
  );
}
