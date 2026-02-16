import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('RESIDENTIAL'); // Default category
  const [serviceData, setServiceData] = useState({ type: 'SERVICE', name: '', mobile: '', address: '', plantSize: '' });
  const [newData, setNewData] = useState({ type: 'NEW_CONNECTION', name: '', mobile: '', billAmount: '', consumerNo: '', electricityBoard: '' });

  // Projects Data
  const projects = {
    RESIDENTIAL: { range: "3 KW to 10 KW", projects: ["Typical Home Installation", "Small Villa Rooftop", "Duplex Solar System"] },
    COMMERCIAL: { range: "10 KW to 100 KW", projects: ["Hospital Rooftop Setup", "Shopping Mall Solar", "Office Building Plant"] },
    INDUSTRIAL: { range: "100 KW to 1 MW", projects: ["Textile Mill Project", "Pharma Factory Plant", "Cold Storage Solar"] }
  };

  const submitService = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://duatech.onrender.com/api/leads', serviceData);
      alert('Service Request Sent! 🛠️');
      setServiceData({ type: 'SERVICE', name: '', mobile: '', address: '', plantSize: '' });
    } catch (err) { alert('Error!'); }
  };

  const submitNew = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://duatech.onrender.com/api/leads', newData);
      alert('New Connection Request Sent! ☀️');
      setNewData({ type: 'NEW_CONNECTION', name: '', mobile: '', billAmount: '', consumerNo: '', electricityBoard: '' });
    } catch (err) { alert('Error!'); }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', scrollBehavior: 'smooth', backgroundColor: '#f0f4f8', margin: 0 }}>
      
      {/* Navbar */}
      <nav style={styles.nav}>
        <h2 style={{ margin: 0, color: '#1e3a8a' }}>DUVATECH <span style={{color: '#f97316'}}>SOLAR</span></h2>
        <div style={{ display: 'flex', gap: '20px' }}>
          <a href="#projects" style={styles.navLink}>Projects</a>
          <a href="#new-connection" style={styles.navLink}>New Connection</a>
          <a href="#service-form" style={styles.navLink}>Service</a>
        </div>
      </nav>

      {/* Hero */}
      <header style={styles.hero}>
        <h1 style={{ fontSize: '3.5rem', margin: 0 }}>Bharat's Solar Power House</h1>
        <p style={{ fontSize: '1.2rem', marginTop: '10px' }}>Indore's Most Trusted EPC Partner</p>
      </header>

      {/* --- PROJECTS SECTION (Dynamic Cards) --- */}
      <section id="projects" style={{ padding: '80px 10%', textAlign: 'center' }}>
        <h2 style={{ color: '#1e3a8a', fontSize: '2.5rem', marginBottom: '40px' }}>Our Specialized Solutions</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', marginBottom: '50px' }}>
          {Object.keys(projects).map((cat) => (
            <div 
              key={cat} 
              onClick={() => setSelectedCategory(cat)}
              style={{
                ...styles.catCard,
                border: selectedCategory === cat ? '3px solid #f97316' : '1px solid #ddd',
                transform: selectedCategory === cat ? 'scale(1.05)' : 'scale(1)'
              }}
            >
              <h3 style={{ color: '#1e3a8a', margin: '0 0 10px 0' }}>{cat}</h3>
              <p style={{ color: '#f97316', fontWeight: 'bold' }}>{projects[cat].range}</p>
            </div>
          ))}
        </div>

        {/* Display Content for Selected Category */}
        <div style={styles.projectDetail}>
          <h3 style={{ color: '#1e3a8a' }}>Example Projects in {selectedCategory}:</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center', marginTop: '20px' }}>
            {projects[selectedCategory].projects.map((p, i) => (
              <div key={i} style={styles.pItem}>{p}</div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FORMS SECTION --- */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', padding: '60px 5%', justifyContent: 'center', backgroundColor: '#e2e8f0' }}>
        
        {/* New Connection Form */}
        <div id="new-connection" style={{ ...styles.formBox, borderTop: '10px solid #f97316' }}>
          <h2 style={{ color: '#1e3a8a', textAlign: 'center' }}>New Connection</h2>
          <form onSubmit={submitNew} style={styles.formStack}>
            <input style={styles.input} placeholder="Full Name" required value={newData.name} onChange={e => setNewData({...newData, name: e.target.value})} />
            <input style={styles.input} placeholder="Mobile Number" required value={newData.mobile} onChange={e => setNewData({...newData, mobile: e.target.value})} />
            <input style={styles.input} placeholder="Avg. Monthly Bill (₹)" required value={newData.billAmount} onChange={e => setNewData({...newData, billAmount: e.target.value})} />
            <input style={styles.input} placeholder="Consumer No." required value={newData.consumerNo} onChange={e => setNewData({...newData, consumerNo: e.target.value})} />
            <input style={styles.input} placeholder="Electricity Board" required value={newData.electricityBoard} onChange={e => setNewData({...newData, electricityBoard: e.target.value})} />
            <button style={styles.btnNew}>SUBMIT FOR NEW CONNECTION</button>
          </form>
        </div>

        {/* Service Form */}
        <div id="service-form" style={{ ...styles.formBox, borderTop: '10px solid #1e3a8a' }}>
          <h2 style={{ color: '#1e3a8a', textAlign: 'center' }}>Solar Service</h2>
          <form onSubmit={submitService} style={styles.formStack}>
            <input style={styles.input} placeholder="Full Name" required value={serviceData.name} onChange={e => setServiceData({...serviceData, name: e.target.value})} />
            <input style={styles.input} placeholder="Mobile Number" required value={serviceData.mobile} onChange={e => setServiceData({...serviceData, mobile: e.target.value})} />
            <input style={styles.input} placeholder="Existing Plant Size (KW)" required value={serviceData.plantSize} onChange={e => setServiceData({...serviceData, plantSize: e.target.value})} />
            <textarea style={{...styles.input, height: '100px'}} placeholder="Site Address" required value={serviceData.address} onChange={e => setServiceData({...serviceData, address: e.target.value})} />
            <button style={styles.btnService}>BOOK SERVICE NOW</button>
          </form>
        </div>

      </div>

      <footer style={{ textAlign: 'center', padding: '40px', backgroundColor: '#1e3a8a', color: 'white' }}>
        © 2026 DUVA TECH SOLAR - INDORE
      </footer>

      {/* Floating WhatsApp */}
      <a href="https://wa.me/91XXXXXXXXXX" target="_blank" style={styles.wa}>
        <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" style={{ width: '30px', height: '30px', filter: 'invert(1)' }} alt="WA" />
      </a>

    </div>
  );
}

const styles = {
  nav: { position: 'fixed', top: 0, width: '100%', backgroundColor: 'white', display: 'flex', justifyContent: 'space-between', padding: '15px 8%', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', zIndex: 1000, boxSizing: 'border-box' },
  navLink: { textDecoration: 'none', color: '#333', fontWeight: 'bold' },
  hero: { height: '50vh', marginTop: '60px', backgroundColor: '#1e3a8a', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072")', backgroundSize: 'cover' },
  catCard: { backgroundColor: 'white', padding: '30px', borderRadius: '15px', cursor: 'pointer', minWidth: '200px', transition: '0.3s', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' },
  projectDetail: { backgroundColor: '#fff', padding: '40px', borderRadius: '20px', border: '1px solid #ddd' },
  pItem: { padding: '15px 30px', backgroundColor: '#f97316', color: 'white', borderRadius: '50px', fontWeight: 'bold' },
  formBox: { flex: '1', minWidth: '350px', maxWidth: '500px', backgroundColor: 'white', padding: '35px', borderRadius: '25px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' },
  formStack: { display: 'flex', flexDirection: 'column', gap: '15px' },
  input: { padding: '15px', borderRadius: '10px', border: '1px solid #ccc', fontSize: '16px' },
  btnNew: { backgroundColor: '#f97316', color: 'white', padding: '15px', border: 'none', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' },
  btnService: { backgroundColor: '#1e3a8a', color: 'white', padding: '15px', border: 'none', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' },
  wa: { position: 'fixed', bottom: '30px', right: '30px', backgroundColor: '#25D366', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }
};

export default App;
