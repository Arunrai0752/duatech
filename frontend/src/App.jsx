import React, { useState, useEffect } from 'react';

const SunIcon = () => <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1e3a8a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>;

export default function App() {
  const [activeTab, setActiveTab] = useState('Residential');
  const [isAdmin, setIsAdmin] = useState(window.location.hash === "#admin");

  useEffect(() => {
    const handleHashChange = () => setIsAdmin(window.location.hash === "#admin");
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const projectData = {
    Residential: { range: "3KW - 10KW", info: "Maximize savings for your home. We handle everything from subsidy paperwork to final installation.", img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800" },
    Commercial: { range: "10KW - 100KW", info: "Scalable solar solutions for schools and hospitals. Reduce fixed costs and improve your green rating.", img: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800" },
    Industrial: { range: "100KW - 1MW+", info: "Heavy-duty PV systems for factories. Built for high performance and 25+ years of durability.", img: "https://images.unsplash.com/photo-1509391366360-fe5bb6583e2c?w=800" }
  };

  if (isAdmin) {
    return (
      <div style={{padding: '40px', fontFamily: 'sans-serif', backgroundColor: '#f4f7f6', minHeight: '100vh'}}>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', background:'white', padding:'20px', borderRadius:'12px', boxShadow:'0 4px 10px rgba(0,0,0,0.05)'}}>
          <h1 style={{margin:0, color:'#1e3a8a'}}>DUVATECH Admin</h1>
          <button onClick={() => { window.location.hash = ""; }} style={{padding:'10px 20px', cursor:'pointer', background:'#1e3a8a', color:'white', border:'none', borderRadius:'5px'}}>Exit Admin</button>
        </div>
        <div style={{marginTop:'30px'}}>
           <p>Your Leads will appear here once connected to the backend.</p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ margin: 0, padding: 0, fontFamily: 'Arial, sans-serif', color: '#334155', scrollBehavior: 'smooth' }}>
      
      {/* --- NAVBAR --- */}
      <nav style={navS}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.8rem', fontWeight: '900' }}>
          <SunIcon /> <span style={{color: '#1e3a8a'}}>DUVA</span><span style={{color: '#22c55e'}}>TECH</span>
        </div>
        <div style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
          <a href="#projects" style={linkS}>Services</a>
          <a href="#about" style={linkS}>About Us</a>
          <a href="#contact" style={quoteBtnS}>GET FREE QUOTE</a>
        </div>
      </nav>

      {/* --- HERO --- */}
      <header id="home" style={heroS}>
        <div style={overlayS}>
          <h1 style={{ fontSize: '4.5rem', marginBottom: '15px', fontWeight: '900' }}>The Future is <span style={{color: '#fbbf24'}}>Bright</span></h1>
          <p style={{ fontSize: '1.4rem', maxWidth: '700px', marginBottom: '35px', opacity: 0.9 }}>Over 5 years of excellence in Solar EPC. We don't just install panels; we engineer energy independence.</p>
          <a href="#contact" style={mainBtnS}>START YOUR SOLAR JOURNEY</a>
        </div>
      </header>

      {/* --- ABOUT SECTION --- */}
      <section id="about" style={{ padding: '100px 10%', display: 'flex', flexWrap: 'wrap', gap: '50px', alignItems: 'center' }}>
        <div style={{ flex: 1, minWidth: '350px' }}>
          <h2 style={{ fontSize: '3rem', color: '#1e3a8a', marginBottom: '20px' }}>5+ Years of Trust</h2>
          <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#475569' }}>
            Founded in Indore, <b>DUVATECH</b> has been at the forefront of the solar revolution for over half a decade. We specialize in end-to-end solar solutions—from initial site survey to government subsidy approvals.
          </p>
          <div style={{ display: 'flex', gap: '30px', marginTop: '30px' }}>
            <div><h3 style={{color: '#22c55e', margin:0}}>500+</h3><p>Projects Done</p></div>
            <div><h3 style={{color: '#22c55e', margin:0}}>5MW+</h3><p>Power Installed</p></div>
            <div><h3 style={{color: '#22c55e', margin:0}}>100%</h3><p>Happy Clients</p></div>
          </div>
        </div>
        <div style={{ flex: 1, minWidth: '350px', background: '#1e3a8a', padding: '40px', borderRadius: '20px', color: 'white' }}>
          <h3>Our Commitment</h3>
          <p>We use only Tier-1 components and provide 25-year performance warranties. Our in-house maintenance team ensures your system generates maximum power, year after year.</p>
        </div>
      </section>

      {/* --- SERVICES (PROJECTS) --- */}
      <section id="projects" style={{ padding: '80px 10%', textAlign: 'center', backgroundColor: '#f8fafc' }}>
        <h2 style={{ fontSize: '2.8rem', color: '#1e3a8a', marginBottom: '40px' }}>Solution for Every Need</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '50px' }}>
          {['Residential', 'Commercial', 'Industrial'].map(t => (
            <button key={t} onClick={() => setActiveTab(t)} style={{ ...tabBtnS, backgroundColor: activeTab === t ? '#1e3a8a' : 'white', color: activeTab === t ? 'white' : '#64748b' }}>{t}</button>
          ))}
        </div>
        <div style={cardS}>
          <img src={projectData[activeTab].img} style={imgS} alt="Solar" />
          <div style={{ flex: 1, textAlign: 'left' }}>
            <h3 style={{ fontSize: '2.2rem', color: '#1e3a8a' }}>{activeTab} Installation</h3>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>{projectData[activeTab].info}</p>
            <div style={{ background: '#f0fdf4', padding: '15px', borderRadius: '12px', borderLeft: '5px solid #22c55e', marginTop: '25px' }}>
              <b style={{color:'#166534'}}>Capacity Range:</b> {projectData[activeTab].range}
            </div>
          </div>
        </div>
      </section>

      {/* --- FORMS (DUAL COLUMN) --- */}
      <section id="contact" style={{ padding: '80px 5%', background: '#0f172a' }}>
        <h2 style={{textAlign:'center', color:'white', marginBottom:'50px', fontSize:'2.5rem'}}>Get in Touch</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', maxWidth: '1200px', margin: '0 auto' }}>
          {/* Form 1 */}
          <div style={formCardS}>
            <h3 style={{ color: '#1e3a8a', fontSize: '1.8rem', marginTop:0 }}>New Installation</h3>
            <p style={{color:'#64748b'}}>Request a free site visit and customized quote.</p>
            <input style={inS} placeholder="Full Name" />
            <div style={{ display: 'flex', gap: '10px' }}>
              <input style={inS} placeholder="Phone No." />
              <input style={inS} placeholder="Monthly Bill (₹)" />
            </div>
            <textarea style={{ ...inS, height: '80px' }} placeholder="Installation Address"></textarea>
            <button style={{ ...actionBtnS, background: '#1e3a8a' }}>REQUEST SURVEY</button>
          </div>

          {/* Form 2 */}
          <div style={{ ...formCardS, background: 'rgba(255,255,255,0.05)', color: 'white', border: '1px solid rgba(255,255,255,0.1)' }}>
            <h3 style={{ color: '#22c55e', fontSize: '1.8rem', marginTop:0 }}>Expert Maintenance</h3>
            <p style={{color:'#94a3b8'}}>Service, cleaning, or repair for existing plants.</p>
            <input style={darkInS} placeholder="Name" />
            <input style={darkInS} placeholder="Phone Number" />
            <input style={darkInS} placeholder="Plant Size (e.g. 10KW)" />
            <textarea style={{ ...darkInS, height: '80px' }} placeholder="Site Location"></textarea>
            <button style={{ ...actionBtnS, background: '#22c55e' }}>BOOK SERVICE VISIT</button>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer style={{ background: '#020617', padding: '60px 10%', color: '#94a3b8' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '40px' }}>
          <div style={{maxWidth:'300px'}}>
            <h3 style={{color:'white'}}>DUVA TECH</h3>
            <p>Your local Indore partner for sustainable and affordable energy solutions since 2019.</p>
          </div>
          <div>
            <h3 style={{color:'white'}}>Head Office</h3>
            <p>Indore, Madhya Pradesh</p>
            <p>+91 99999 88888</p>
            <p>contact@duvatech.com</p>
          </div>
        </div>
        <p style={{ borderTop: '1px solid #1e293b', paddingTop: '20px', textAlign: 'center', fontSize:'0.9rem' }}>© 2026 DUVA TECH SOLAR PVT LTD.</p>
      </footer>
    </div>
  );
}

// --- CSS STYLES ---
const navS = { display: 'flex', justifyContent: 'space-between', padding: '15px 8%', background: 'white', position: 'sticky', top: 0, zIndex: 1000, boxShadow: '0 4px 12px rgba(0,0,0,0.08)', alignItems: 'center' };
const linkS = { textDecoration: 'none', color: '#475569', fontWeight: 'bold' };
const quoteBtnS = { textDecoration: 'none', background: '#1e3a8a', color: 'white', padding: '12px 25px', borderRadius: '5px', fontWeight: 'bold' };
const heroS = { height: '85vh', background: 'url("https://images.unsplash.com/photo-1509391366360-fe5bb6583e2c?w=1200")', backgroundSize: 'cover', backgroundPosition: 'center' };
const overlayS = { height: '100%', width: '100%', background: 'linear-gradient(rgba(15,23,42,0.8), rgba(15,23,42,0.3))', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white', textAlign: 'center', padding: '0 20px' };
const mainBtnS = { textDecoration: 'none', background: '#22c55e', color: 'white', padding: '18px 45px', borderRadius: '5px', fontWeight: '900', fontSize: '1.1rem' };
const tabBtnS = { padding: '12px 35px', borderRadius: '5px', border: '1px solid #e2e8f0', cursor: 'pointer', fontWeight: 'bold' };
const cardS = { display: 'flex', gap: '50px', background: 'white', padding: '50px', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', flexWrap: 'wrap', alignItems: 'center' };
const imgS = { width: '100%', maxWidth: '450px', borderRadius: '12px', height: '320px', objectFit: 'cover' };
const formCardS = { flex: 1, minWidth: '350px', background: 'white', padding: '40px', borderRadius: '20px', textAlign: 'left' };
const inS = { width: '100%', padding: '14px', marginBottom: '15px', borderRadius: '8px', border: '1px solid #ddd', boxSizing: 'border-box' };
const darkInS = { ...inS, background: 'rgba(255,255,255,0.08)', color: 'white', border: '1px solid rgba(255,255,255,0.2)' };
const actionBtnS = { width: '100%', padding: '16px', border: 'none', color: 'white', fontWeight: 'bold', borderRadius: '5px', cursor: 'pointer' };
