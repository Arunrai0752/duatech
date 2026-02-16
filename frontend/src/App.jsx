import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* diwakar */}
        <Route path="/duva-admin-786" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
