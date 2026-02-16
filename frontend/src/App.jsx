import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LeadForm from './components/LeadForm';
import Admin from './pages/Admin';

// Ise dhyan se copy karein
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div style={{ backgroundColor: '#1e3a8a', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white', fontFamily: 'sans-serif' }}>
            <h1 style={{ marginBottom: '20px' }}>DUVA TECH SOLAR</h1>
            <p style={{ marginBottom: '40px' }}>Welcome to our professional solar services</p>
            <div style={{ color: '#333', width: '100%', maxWidth: '400px' }}>
              <LeadForm />
            </div>
            <a href="https://wa.me/91XXXXXXXXXX" style={{ position: 'fixed', bottom: '20px', right: '20px', backgroundColor: '#25D366', padding: '15px', borderRadius: '50%', color: 'white', textDecoration: 'none', fontWeight: 'bold', boxShadow: '0 4px 10px rgba(0,0,0,0.3)' }}>WhatsApp</a>
          </div>
        } />
        <Route path="/duva-admin-786" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
