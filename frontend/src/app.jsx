import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// 1. Components Imports (Paths check kar liye hain)
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

// 2. Pages Imports
import Home from './pages/Home';
import Admin from './pages/Admin';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Projects from './pages/Projects';
import Testimonials from './pages/Testimonials';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0A1F44] text-white">
        {/* Navbar har page par dikhega */}
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/services" element={<Products />} /> {/* Products ko hi services ki tarah use kar rahe ho */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>

        {/* WhatsApp Button aur Footer bhi har jagah dikhenge */}
        <WhatsAppButton />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
