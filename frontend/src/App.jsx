import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';

// --- 1. HOME PAGE COMPONENT ---
const Home = ({ addLead }) => {
  const [formData, setFormData] = useState({ name: '', phone: '', type: 'Residential' });

 const handleWhatsApp = async () => {
    // 1. Sending to Database
    try {
      await axios.post('/api/leads', formData);
      console.log("Lead Saved Successfully!");
    } catch (err) {
      console.error("Database connection failed, but proceeding to WhatsApp.");
    }

    // 2. Direct Redirect to Your WhatsApp (8982910432)
    const msg = `*NEW SOLAR INQUIRY* ☀️%0A%0A*Name:* ${formData.name}%0A*Mobile:* ${formData.phone}%0A*Type:* ${formData.type}`;
    window.open(`https://wa.me/918982910432?text=${msg}`, '_blank');
  };

  return (
    <div style={{ scrollBehavior: 'smooth' }}>
      {/* Hero & Lead Form */}
      <section style={{ background: 'linear-gradient(45deg, #1e293b, #334155)', color: 'white', padding: '80px 5%', display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
        <div style={{ flex: 2, minWidth: '300px' }}>
          <h1 style={{ fontSize: '3rem', color: '#fb923c' }}>DUVATECH SOLAR</h1>
          <p style={{ fontSize: '1.5rem' }}>Indore's Authorized Dealer for TATA, ADANI & WAAREE</p>
          <div style={{ marginTop: '30px', display: 'flex', gap: '15px' }}>
            <span style={{ border: '1px solid #fb923c', padding: '5px 15px' }}>Residential</span>
            <span style={{ border: '1px solid #fb923c', padding: '5px 15px' }}>Commercial</span>
            <span style={{ border: '1px solid #fb923c', padding: '5px 15px' }}>Industrial</span>
          </div>
        </div>

        <div style={{ flex: 1, minWidth: '300px', background: 'white', padding: '30px', borderRadius: '12px', color: '#333', boxShadow: '0 10px 25px rgba(0,0,0,0.5)' }}>
          <h3 style={{ marginBottom: '20px', borderBottom: '2px solid #fb923c' }}>Get Solar Connection</h3>
          <label>Full Name</label>
          <input type="text" style={{ width: '100%', padding: '12px', margin: '8px 0', border: '1px solid #ddd' }} onChange={(e) => setFormData({...formData, name: e.target.value})} />
          <label>Phone Number</label>
          <input type="text" style={{ width: '100%', padding: '12px', margin: '8px 0', border: '1px solid #ddd' }} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
          <label>Category</label>
          <select style={{ width: '100%', padding: '12px', margin: '8px 0' }} onChange={(e) => setFormData({...formData, type: e.target.value})}>
            <option>Residential</option>
            <option>Commercial</option>
            <option>Industrial</option>
          </select>
          <button onClick={handleWhatsApp} style={{ width: '100%', background: '#25D366', color: 'white', border: 'none', padding: '15px', fontWeight: 'bold', marginTop: '10px', cursor: 'pointer', borderRadius: '5px' }}>SUBMIT & CHAT ON WHATSAPP</button>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" style={{ padding: '60px 5%', background: '#f8fafc' }}>
        <h2 style={{ textAlign: 'center' }}>Our Product Range</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginTop: '40px' }}>
          {['High-Efficiency Panels', 'On-Grid Inverters', 'MS/GI Structures', 'Solar Batteries'].map(p => (
            <div key={p} style={{ background: 'white', padding: '25px', borderRadius: '10px', textAlign: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
              <div style={{ background: '#fb923c', height: '10px', width: '50px', margin: '0 auto 15px' }}></div>
              <h4>{p}</h4>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

// --- 2. ADMIN PANEL COMPONENT ---
const AdminPanel = ({ leads }) => {
  return (
    <div style={{ padding: '40px 5%' }}>
      <h2 style={{ color: '#1e293b' }}>Admin Dashboard - Customer Leads</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr style={{ background: '#1e293b', color: 'white' }}>
            <th style={{ padding: '15px', border: '1px solid #ddd' }}>Name</th>
            <th style={{ padding: '15px', border: '1px solid #ddd' }}>Phone</th>
            <th style={{ padding: '15px', border: '1px solid #ddd' }}>Type</th>
            <th style={{ padding: '15px', border: '1px solid #ddd' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {leads.length === 0 ? <tr><td colSpan="4" style={{ textAlign: 'center', padding: '20px' }}>No leads yet.</td></tr> : 
            leads.map((l, i) => (
              <tr key={i}>
                <td style={{ padding: '15px', border: '1px solid #ddd' }}>{l.name}</td>
                <td style={{ padding: '15px', border: '1px solid #ddd' }}>{l.phone}</td>
                <td style={{ padding: '15px', border: '1px solid #ddd' }}>{l.type}</td>
                <td style={{ padding: '15px', border: '1px solid #ddd', color: 'green' }}>New</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

// --- MAIN APP COMPONENT ---
export default function App() {
  const [leads, setLeads] = useState([]);

  const addLead = (newLead) => {
    setLeads([...leads, newLead]);
  };

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* HEADER */}
      <header style={{ background: '#0f172a', color: 'white', padding: '15px 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ color: '#fb923c', textDecoration: 'none', fontSize: '1.5rem', fontWeight: 'bold' }}>DUVATECH SOLAR</Link>
        <nav style={{ display: 'flex', gap: '20px' }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
          <Link to="/admin" style={{ color: 'white', textDecoration: 'none', border: '1px solid #fb923c', padding: '2px 10px' }}>Admin Login</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home addLead={addLead} />} />
        <Route path="/admin" element={<AdminPanel leads={leads} />} />
      </Routes>

      {/* WHATSAPP FLOAT */}
      <a href="https://wa.me/919000000000" style={{ position: 'fixed', bottom: '20px', right: '20px', background: '#25D366', color: 'white', padding: '15px 25px', borderRadius: '50px', fontWeight: 'bold', textDecoration: 'none', boxShadow: '0 5px 15px rgba(0,0,0,0.3)' }}>WhatsApp Help</a>
    </div>
  );
}
