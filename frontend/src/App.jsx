import React from 'react';

function App() {
  return (
    <div style={{ backgroundColor: '#f9fafb', minHeight: '100vh', fontFamily: 'Arial' }}>
      {/* Header Section */}
      <nav style={{ background: '#0f172a', color: 'white', padding: '1.5rem', textAlign: 'center' }}>
        <h1 style={{ color: '#f97316', margin: 0, fontSize: '1.5rem' }}>DUVATECH SOLAR</h1>
      </nav>

      {/* Hero Content */}
      <div style={{ padding: '3rem 1rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: '900', color: '#1e293b' }}>
          AUTHORIZED SOLAR DEALER
        </h2>
        <p style={{ color: '#475569', fontSize: '1.2rem', marginTop: '10px' }}>
          TATA POWER | ADANI SOLAR | WAAREE
        </p>

        {/* Placeholders for Services */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginTop: '50px' }}>
          <div style={{ background: 'white', borderBottom: '4px solid #f97316', padding: '30px', borderRadius: '12px', width: '280px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
            <h3 style={{ color: '#1e293b' }}>[ SOLAR PANEL ]</h3>
            <p style={{ color: '#64748b' }}>High-efficiency modules for residential & commercial use.</p>
          </div>

          <div style={{ background: 'white', borderBottom: '4px solid #f97316', padding: '30px', borderRadius: '12px', width: '280px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
            <h3 style={{ color: '#1e293b' }}>[ INSTALLATION ]</h3>
            <p style={{ color: '#64748b' }}>Quick and professional installation by expert team.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ background: '#0f172a', color: '#94a3b8', padding: '20px', textAlign: 'center', marginTop: '50px' }}>
        <p>© 2026 DUVATECH SOLAR | INDORE, MP</p>
      </footer>
    </div>
  );
}

export default App;
