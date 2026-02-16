import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [serviceData, setServiceData] = useState({ type: 'SERVICE', name: '', mobile: '', address: '', plantSize: '' });
  const [newData, setNewData] = useState({ type: 'NEW_CONNECTION', name: '', mobile: '', billAmount: '', consumerNo: '' });
  const [isAdmin, setIsAdmin] = useState(false);
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    if (window.location.hash === "#admin") {
      setIsAdmin(true);
      fetchLeads();
    }
  }, []);

  const fetchLeads = async () => {
    try {
      const res = await axios.get('https://duatech.onrender.com/api/leads');
      setLeads(res.data);
    } catch (err) { console.log("Error fetch"); }
  };

  const submitService = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://duatech.onrender.com/api/leads', serviceData);
      alert('Service Request Received! 🛠️');
      setServiceData({ type: 'SERVICE', name: '', mobile: '', address: '', plantSize: '' });
    } catch (err) { alert('Error!'); }
  };

  const submitNew = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://duatech.onrender.com/api/leads', newData);
      alert('New Connection Request Received! ☀️');
      setNewData({ type: 'NEW_CONNECTION', name: '', mobile: '', billAmount: '', consumerNo: '' });
    } catch (err) { alert('Error!'); }
  };

  if (isAdmin) {
    return (
      <div style={{ padding: '30px', fontFamily: 'sans-serif' }}>
        <h2 style={{color:'#1e3a8a'}}>Admin Panel - Leads Dashboard</h2>
        <button onClick={() => setIsAdmin(false)}>Back to Website</button>
        <div style={{overflowX: 'auto', marginTop:'20px'}}>
          <table border="1" style={{ width: '100%', borderCollapse: 'collapse', textAlign:'left' }}>
            <thead style={{backgroundColor:'#1e3a8a', color:'white'}}>
              <tr>
                <th style={{padding:'10px'}}>Type</th>
                <th style={{padding:'10px'}}>Name</th>
                <th style={{padding:'10px'}}>Mobile</th>
                <th style={{padding:'10px'}}>Details (Plant/Bill/Consumer/Addr)</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((l, i) => (
                <tr key={i}>
                  <td style={{padding:'10px'}}>{l.type || 'N/A'}</td>
                  <td style={{padding:'10px'}}>{l.name}</td>
                  <td style={{padding:'10px'}}>{l.mobile}</td>
                  <td style={{padding:'10px'}}>
                    {l.type === 'SERVICE' ? `Plant: ${l.plantSize}KW, Addr: ${l.address}` : `Bill: ${l.billAmount}, Cons#: ${l.consumerNo}`}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: 'sans-serif', scrollBehavior: 'smooth', backgroundColor: '#f4f7f6' }}>
      
      {/* Navbar */}
      <nav style={{ position: 'fixed', top: 0, width: '100%', backgroundColor: '#fff', display: 'flex', justifyContent: 'space-between', padding: '15px 5%', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', zIndex: 100, boxSizing: 'border-box' }}>
        <h2 style={{ margin: 0, color: '#1e3a8a' }}>DUVATECH <span style={{color:'#f97316'}}>SOLAR</span></h2>
        <div style={{ display: 'flex', gap: '15px' }}>
          <a href="#new" style={{ textDecoration: 'none', color: '#333', fontWeight:'bold' }}>New Connection</a>
          <a href="#service" style={{ textDecoration: 'none', color: '#333', fontWeight:'bold' }}>Service</a>
        </div>
      </nav>

      {/* Hero */}
      <header style={{ height: '50vh', backgroundColor: '#1e3a8a', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', marginTop: '60px' }}>
        <div>
          <h1 style={{fontSize:'3rem'}}>Reliable Solar Solutions</h1>
          <p style={{fontSize:'1.2rem'}}>Book a Service or Start Your Solar Journey Today</p>
        </div>
      </header>

      {/* TWO FORMS SECTION */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', padding: '50px 5%', justifyContent: 'center' }}>
        
        {/* Form 1: New Connection */}
        <div id="new" style={{ flex: '1', minWidth: '350px', maxWidth: '500px', backgroundColor: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', borderTop: '8px solid #f97316' }}>
          <h2 style={{ color: '#1e3a8a', textAlign: 'center', marginBottom: '30px' }}>New Solar Connection</h2>
          <form onSubmit={submitNew} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <input style={styles.input} placeholder="Your Name" required value={newData.name} onChange={e => setNewData({...newData, name: e.target.value})} />
            <input style={styles.input} placeholder="Mobile Number" required value={newData.mobile} onChange={e => setNewData({...newData, mobile: e.target.value})} />
            <input style={styles.input} placeholder="Avg. Monthly Bill (₹)" required value={newData.billAmount} onChange={e => setNewData({...newData, billAmount: e.target.value})} />
            <input style={styles.input} placeholder="Electricity Consumer Number" required value={newData.consumerNo} onChange={e => setNewData({...newData, consumerNo: e.target.value})} />
            <button style={styles.buttonNew}>REQUEST NEW CONNECTION</button>
          </form>
        </div>

        {/* Form 2: Service/Maintenance */}
        <div id="service" style={{ flex: '1', minWidth: '350px', maxWidth: '500px', backgroundColor: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', borderTop: '8px solid #1e3a8a' }}>
          <h2 style={{ color: '#1e3a8a', textAlign: 'center', marginBottom: '30px' }}>Solar Service/Repair</h2>
          <form onSubmit={submitService} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <input style={styles.input} placeholder="Full Name" required value={serviceData.name} onChange={e => setServiceData({...serviceData, name: e.target.value})} />
            <input style={styles.input} placeholder="Mobile Number" required value={serviceData.mobile} onChange={e => setServiceData({...serviceData, mobile: e.target.value})} />
            <input style={styles.input} placeholder="Plant Size (in KW)" required value={serviceData.plantSize} onChange={e => setServiceData({...serviceData, plantSize: e.target.value})} />
            <textarea style={{...styles.input, height: '80px'}} placeholder="Full Address" required value={serviceData.address} onChange={e => setServiceData({...serviceData, address: e.target.value})} />
            <button style={styles.buttonService}>BOOK SERVICE REQUEST</button>
          </form>
        </div>

      </div>

      <footer style={{ textAlign: 'center', padding: '40px', color: '#999', backgroundColor:'#fff' }}>
        © 2026 DUVA TECH SOLAR PVT LTD
      </footer>

      {/* Floating WhatsApp */}
      <a href="https://wa.me/91XXXXXXXXXX" target="_blank" style={styles.whatsapp}>
        <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" style={{ width: '30px', height: '30px', filter: 'invert(1)' }} alt="WA" />
      </a>

    </div>
  );
}

const styles = {
  input: { padding: '15px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '16px', outline: 'none' },
  buttonNew: { backgroundColor: '#f97316', color: 'white', padding: '15px', border: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer' },
  buttonService: { backgroundColor: '#1e3a8a', color: 'white', padding: '15px', border: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer' },
  whatsapp: { position: 'fixed', bottom: '30px', right: '30px', backgroundColor: '#25D366', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 5px 15px rgba(0,0,0,0.3)', zIndex: 1000 }
};

export default App;
