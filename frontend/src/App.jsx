import React, { useState, useEffect } from 'react';
import axios from 'axios';

// --- Icons ---
const SunIcon = () => <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1e3a8a" strokeWidth="2.5"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>;
const WhatsAppIcon = () => <svg viewBox="0 0 24 24" width="35" height="35" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.558 0 11.894-5.335 11.897-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>;

export default function App() {
  const [isAdmin, setIsAdmin] = useState(window.location.hash === "#admin");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [leads, setLeads] = useState([]);
  const [password, setPassword] = useState('');

  // Auto-configured API link
  const API_URL = "https://duatech.onrender.com/api/leads";

  useEffect(() => {
    const handleHash = () => setIsAdmin(window.location.hash === "#admin");
    window.addEventListener("hashchange", handleHash);
    if (isLoggedIn) fetchLeads();
    return () => window.removeEventListener("hashchange", handleHash);
  }, [isLoggedIn]);

  const fetchLeads = async () => {
    try {
      const res = await axios.get(API_URL);
      setLeads(res.data);
    } catch (err) { console.error("Error fetching MongoDB cluster data."); }
  };

  const handleLogout = () => {
    window.history.pushState("", document.title, window.location.pathname); // Clear #admin from URL
    setIsAdmin(false);
    setIsLoggedIn(false);
  };

  // --- ADMIN VIEW ---
  if (isAdmin) {
    if (!isLoggedIn) {
      return (
        <div style={{height:'100vh', display:'flex', justifyContent:'center', alignItems:'center', background:'#f0f2f5', fontFamily:'sans-serif'}}>
          <form onSubmit={(e) => { e.preventDefault(); if(password === "admin123") setIsLoggedIn(true); else alert("Wrong Password!"); }} style={{background:'white', padding:'40px', borderRadius:'15px', textAlign:'center', width:'320px', boxShadow:'0 10px 25px rgba(0,0,0,0.1)'}}>
            <SunIcon />
            <h2 style={{color:'#1e3a8a', marginTop:'10px'}}>Admin Login</h2>
            <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} style={{width:'100%', padding:'12px', margin:'20px 0', borderRadius:'8px', border:'1px solid #ddd', boxSizing:'border-box'}} />
            <button type="submit" style={{width:'100%', padding:'12px', background:'#1e3a8a', color:'white', border:'none', borderRadius:'8px', cursor:'pointer', fontWeight:'bold'}}>UNFOLD LEADS</button>
            <p onClick={handleLogout} style={{marginTop:'15px', color:'#666', cursor:'pointer', fontSize:'14px'}}>← Back to Website</p>
          </form>
        </div>
      );
    }
    return (
      <div style={{padding:'40px', fontFamily:'sans-serif', background:'#f4f7f6', minHeight:'100vh'}}>
        <div style={{display:'flex', justifyContent:'space-between', background:'white', padding:'20px', borderRadius:'10px', alignItems:'center'}}>
          <h2 style={{margin:0, color:'#1e3a8a'}}>MongoDB Cluster Leads</h2>
          <button onClick={handleLogout} style={{background:'#dc2626', color:'white', border:'none', padding:'10px 20px', borderRadius:'5px', cursor:'pointer', fontWeight:'bold'}}>Logout & Clear URL</button>
        </div>
        <div style={{marginTop:'30px', overflowX:'auto'}}>
          <table style={{width:'100%', background:'white', borderRadius:'10px', overflow:'hidden', borderCollapse:'collapse'}}>
            <thead style={{background:'#1e3a8a', color:'white'}}>
              <tr><th style={tdS}>Customer Name</th><th style={tdS}>Mobile</th><th style={tdS}>Site Address</th></tr>
            </thead>
            <tbody>
              {leads.length > 0 ? leads.map((l, i) => (
                <tr key={i} style={{borderBottom:'1px solid #eee'}}>
                  <td style={tdS}>{l.name}</td><td style={tdS}>{l.mobile || l.phone}</td><td style={tdS}>{l.address}</td>
                </tr>
              )) : <tr><td colSpan="3" style={{padding:'30px', textAlign:'center', color:'#666'}}>No data in Cluster or Backend is sleeping...</td></tr>}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  // --- MAIN WEBSITE ---
  return (
    <div style={{fontFamily:'sans-serif', color:'#334155'}}>
      {/* Floating WhatsApp */}
      <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noreferrer" style={waBtnS}><WhatsAppIcon /></a>

      {/* Nav */}
      <nav style={navS}>
        <div style={{display:'flex', alignItems:'center', gap:'8px', fontSize:'1.6rem', fontWeight:'900'}}>
          <SunIcon /> <span style={{color:'#1e3a8a'}}>DUVA</span><span style={{color:'#22c55e'}}>TECH</span>
        </div>
        <div style={{display:'flex', gap:'25px', alignItems:'center'}}>
          <a href="#about" style={linkS}>About</a>
          <a href="#projects" style={linkS}>Services</a>
          <a href="mailto:info@duvatech.com" style={{...linkS, color:'#1e3a8a'}}>Email Us</a>
          <a href="#contact" style={quoteBtnS}>GET QUOTE</a>
        </div>
      </nav>

      {/* Hero */}
      <header id="home" style={heroS}>
        <div style={heroOverlayS}>
          <h1 style={{fontSize:'3.5rem', fontWeight:'900', margin:0}}>Reliable Solar Power <br/><span style={{color:'#fbbf24'}}>For Your Home</span></h1>
          <p style={{fontSize:'1.2rem', margin:'20px 0', opacity:0.9}}>5+ Years of Excellence in Solar EPC Installations.</p>
          <a href="#contact" style={ctaBtnS}>START SAVING TODAY</a>
        </div>
      </header>

      {/* About Us */}
      <section id="about" style={{padding:'80px 10%', display:'flex', flexWrap:'wrap', gap:'50px', alignItems:'center'}}>
        <div style={{flex:1, minWidth:'300px'}}>
          <h2 style={{fontSize:'2.5rem', color:'#1e3a8a'}}>Over 5 Years of Trust</h2>
          <p style={{lineHeight:1.8, fontSize:'1.1rem'}}>Founded in Indore, DUVA TECH has delivered 500+ successful projects. We specialize in end-to-end solar solutions with full subsidy support and 25-year warranties.</p>
        </div>
        <div style={{flex:1, background:'#1e3a8a', color:'white', padding:'40px', borderRadius:'20px'}}>
          <h3>Our Experience</h3>
          <p>Managed 5MW+ installations across residential and commercial sectors. Our in-house maintenance team ensures 24/7 efficiency for your solar plant.</p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{padding:'50px', background:'#0f172a', color:'#94a3b8', textAlign:'center'}}>
        <p>© 2026 DUVA TECH SOLAR PVT LTD. Indore, MP.</p>
        <span onClick={() => window.location.hash="admin"} style={{cursor:'pointer', color:'#1e3a8a', fontSize:'10px'}}>Staff Login</span>
      </footer>
    </div>
  );
}

// Styles
const navS = { display:'flex', justifyContent:'space-between', padding:'15px 8%', background:'white', position:'sticky', top:0, zIndex:1000, boxShadow:'0 2px 10px rgba(0,0,0,0.05)', alignItems:'center' };
const linkS = { textDecoration:'none', color:'#475569', fontWeight:'bold' };
const quoteBtnS = { textDecoration:'none', background:'#1e3a8a', color:'white', padding:'10px 20px', borderRadius:'5px', fontWeight:'bold' };
const heroS = { height:'70vh', background:'url("https://images.unsplash.com/photo-1509391366360-fe5bb6583e2c?w=1200") center/cover no-repeat' };
const heroOverlayS = { height:'100%', width:'100%', background:'rgba(0,0,0,0.5)', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', textAlign:'center', color:'white' };
const ctaBtnS = { background:'#22c55e', color:'white', padding:'15px 35px', borderRadius:'5px', textDecoration:'none', fontWeight:'bold', marginTop:'20px' };
const waBtnS = { position:'fixed', bottom:'30px', right:'30px', background:'#25D366', width:'60px', height:'60px', borderRadius:'50%', display:'flex', justifyContent:'center', alignItems:'center', boxShadow:'0 10px 20px rgba(0,0,0,0.2)', zIndex:9999 };
const tdS = { padding:'15px', textAlign:'left' };
