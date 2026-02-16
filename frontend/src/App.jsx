import React, { useState, useEffect } from 'react';

// Pure SVG Icons (No installation needed)
const SunIcon = () => <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>;

export default function App() {
  const [activeTab, setActiveTab] = useState('Residential');
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (window.location.hash === "#admin") setIsAdmin(true);
  }, []);

  const projectData = {
    Residential: { range: "3KW - 10KW", info: "घरेलू उपयोग के लिए सबसे अच्छा। सरकार से सब्सिडी प्राप्त करें और बिजली बिल जीरो करें।", img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800" },
    Commercial: { range: "10KW - 100KW", info: "स्कूल, अस्पताल और ऑफिस के लिए। अपने बिज़नेस का खर्च कम करें।", img: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800" },
    Industrial: { range: "100KW - 1MW+", info: "फैक्ट्री और भारी उद्योगों के लिए। सबसे ज्यादा बचत और लम्बी लाइफ।", img: "https://images.unsplash.com/photo-1509391366360-fe5bb6583e2c?w=800" }
  };

  if (isAdmin) {
    return (
      <div style={{padding: '50px', fontFamily: 'Arial'}}>
        <h1 style={{color: '#1e3a8a'}}>Admin Dashboard - DUVATECH</h1>
        <p>यहाँ आपके सभी Leads दिखाई देंगे।</p>
        <button onClick={()=>setIsAdmin(false)} style={{padding: '10px 20px', cursor: 'pointer'}}>Back to Website</button>
      </div>
    );
  }

  return (
    <div style={{ margin: 0, padding: 0, fontFamily: 'Arial, sans-serif', backgroundColor: '#f0f4f8' }}>
      
      {/* --- NAVIGATION BAR --- */}
      <nav style={navStyle}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.6rem', fontWeight: '900', color: '#1e3a8a' }}>
          <SunIcon /> DUVATECH SOLAR
        </div>
        <div style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
          <a href="#projects" style={linkStyle}>सेवाएं</a>
          <a href="#about" style={linkStyle}>हमारे बारे में</a>
          <a href="#contact" style={quoteBtn}>GET FREE QUOTE</a>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header style={heroStyle}>
        <div style={heroOverlay}>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '20px', fontWeight: '900' }}>बिजली बिल से आज़ादी <br/><span style={{color: '#f97316'}}>सोलर अपनाओ, पैसे बचाओ</span></h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto 30px' }}>इंदौर की सबसे भरोसेमंद सोलर कंपनी। 25 साल की वारंटी और बेहतरीन सर्विस के साथ।</p>
          <a href="#new-connection" style={mainBtn}>अभी सर्वे बुक करें</a>
        </div>
      </header>

      {/* --- SERVICES TABS --- */}
      <section id="projects" style={{ padding: '80px 10%', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', color: '#1e3a8a', marginBottom: '40px' }}>हमारी सोलर सेवाएं</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '40px' }}>
          {['Residential', 'Commercial', 'Industrial'].map(t => (
            <button key={t} onClick={() => setActiveTab(t)} style={{ ...tabBtn, backgroundColor: activeTab === t ? '#1e3a8a' : 'white', color: activeTab === t ? 'white' : '#64748b' }}>{t}</button>
          ))}
        </div>
        <div style={tabCard}>
          <img src={projectData[activeTab].img} style={tabImg} alt="Solar" />
          <div style={{ flex: 1, textAlign: 'left' }}>
            <h3 style={{ fontSize: '2rem', color: '#1e3a8a' }}>{activeTab} Solar Solutions</h3>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.7', color: '#475569' }}>{projectData[activeTab].info}</p>
            <div style={{ background: '#fef3c7', padding: '15px', borderRadius: '10px', borderLeft: '5px solid #f97316', marginTop: '20px' }}>
              <b>रेंज:</b> {projectData[activeTab].range}
            </div>
          </div>
        </div>
      </section>

      {/* --- DUAL FORMS --- */}
      <section id="contact" style={{ padding: '80px 5%', background: '#0f172a' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', maxWidth: '1200px', margin: '0 auto' }}>
          {/* New Connection Form */}
          <div id="new-connection" style={formCard}>
            <h3 style={{ color: '#1e3a8a', fontSize: '1.8rem' }}>नया सोलर कनेक्शन</h3>
            <p style={{color: '#64748b'}}>फ्री कोटेशन और साइट सर्वे के लिए फॉर्म भरें</p>
            <input style={inS} placeholder="आपका नाम" />
            <div style={{ display: 'flex', gap: '10px' }}>
              <input style={inS} placeholder="मोबाइल नंबर" />
              <input style={inS} placeholder="मासिक बिजली बिल (₹)" />
            </div>
            <input style={inS} placeholder="बिजली कंज्यूमर नंबर" />
            <textarea style={{ ...inS, height: '80px' }} placeholder="पूरा पता (जहाँ सोलर लगवाना है)"></textarea>
            <button style={{ ...actionBtn, background: '#f97316' }}>QUOTATION के लिए भेजें</button>
          </div>

          {/* Service Form */}
          <div id="service-form" style={{ ...formCard, background: 'rgba(255,255,255,0.05)', color: 'white', border: '1px solid rgba(255,255,255,0.1)' }}>
            <h3 style={{ color: '#3b82f6', fontSize: '1.8rem' }}>सोलर सर्विस और रिपेयर</h3>
            <p style={{color: '#94a3b8'}}>पुराने सोलर प्लांट की सर्विसिंग के लिए</p>
            <input style={darkIn} placeholder="नाम" />
            <input style={darkIn} placeholder="फोन नंबर" />
            <input style={darkIn} placeholder="सोलर प्लांट साइज (जैसे 5KW)" />
            <textarea style={{ ...darkIn, height: '100px' }} placeholder="साइट का पता"></textarea>
            <button style={{ ...actionBtn, background: '#3b82f6' }}>सर्विस बुक करें</button>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer style={{ background: '#020617', padding: '60px 10%', color: '#94a3b8', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '40px', marginBottom: '40px' }}>
          <div><h3>DUVATECH SOLAR</h3><p>विजय नगर, इंदौर, मध्य प्रदेश</p></div>
          <div><h3>संपर्क</h3><p>+91 99999 XXXXX</p><p>info@duvatech.com</p></div>
          <div><h3>लिंक्स</h3><p><a href="#admin" style={{color: '#94a3b8'}}>Admin Login</a></p><p>Privacy Policy</p></div>
        </div>
        <p style={{ borderTop: '1px solid #1e293b', paddingTop: '20px' }}>© 2026 DUVATECH SOLAR PVT LTD. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

// --- STYLES (NO EXTERNAL CSS NEEDED) ---
const navStyle = { display: 'flex', justifyContent: 'space-between', padding: '15px 8%', background: 'white', position: 'sticky', top: 0, zIndex: 1000, boxShadow: '0 4px 12px rgba(0,0,0,0.1)', alignItems: 'center' };
const linkStyle = { textDecoration: 'none', color: '#475569', fontWeight: 'bold' };
const quoteBtn = { textDecoration: 'none', background: '#f97316', color: 'white', padding: '12px 25px', borderRadius: '50px', fontWeight: 'bold' };
const heroStyle = { height: '70vh', background: 'url("https://images.unsplash.com/photo-1509391366360-fe5bb6583e2c?w=1200")', backgroundSize: 'cover', backgroundPosition: 'center' };
const heroOverlay = { height: '100%', width: '100%', background: 'linear-gradient(rgba(15,23,42,0.8), rgba(15,23,42,0.4))', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white', textAlign: 'center', padding: '0 20px' };
const mainBtn = { textDecoration: 'none', background: '#f97316', color: 'white', padding: '18px 45px', borderRadius: '50px', fontWeight: '900', fontSize: '1.2rem', boxShadow: '0 10px 20px rgba(249,115,22,0.3)' };
const tabBtn = { padding: '12px 30px', borderRadius: '10px', border: '1px solid #e2e8f0', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem' };
const tabCard = { display: 'flex', gap: '40px', background: 'white', padding: '40px', borderRadius: '30px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', flexWrap: 'wrap', alignItems: 'center' };
const tabImg = { width: '100%', maxWidth: '450px', borderRadius: '20px', height: '300px', objectFit: 'cover' };
const formCard = { flex: 1, minWidth: '350px', background: 'white', padding: '40px', borderRadius: '30px', textAlign: 'left' };
const inS = { width: '100%', padding: '15px', marginBottom: '15px', borderRadius: '10px', border: '1px solid #ddd', boxSizing: 'border-box', fontSize: '1rem' };
const darkIn = { ...inS, background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)' };
const actionBtn = { width: '100%', padding: '18px', border: 'none', color: 'white', fontWeight: 'bold', borderRadius: '10px', fontSize: '1.1rem', cursor: 'pointer' };
