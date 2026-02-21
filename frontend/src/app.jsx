import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// 1. Components Imports
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

// 2. Pages Imports
import Home from './pages/Home';
import Services from './components/Services';
import Admin from './pages/Admin';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Projects from './pages/Projects';
import Testimonials from './pages/Testimonials';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#0A1F44] text-white">
        {/* नेविगेशन बार हमेशा ऊपर रहेगा */}
        <Navbar />
        
        {/* यहाँ आपके सारे पेजेस बदलेंगे (Routing) */}
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* यहाँ मैंने सुधार कर दिया है: path अलग और element अलग */}
            <Route path="/services" element={<Services />} />
            
            <Route path="/products" element={<Products />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
          </Routes>
        </main>

        {/* फुटर और व्हाट्सएप बटन हमेशा नीचे रहेंगे */}
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
