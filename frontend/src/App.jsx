import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar Placeholder */}
      <nav className="bg-slate-900 text-white p-4 flex justify-between items-center shadow-lg">
        <h1 className="text-xl font-bold text-orange-500">DUVATECH SOLAR</h1>
        <div className="flex gap-4 text-sm font-semibold">
          <span>HOME</span>
          <span>ABOUT</span>
          <span>CONTACT</span>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-white py-16 px-4 text-center border-b">
        <div className="text-5xl mb-4">☀️</div> {/* Icon की जगह Emoji */}
        <h2 className="text-4xl font-black text-slate-800">AUTHORIZED SOLAR DEALER</h2>
        <p className="text-slate-600 mt-2 font-medium">TATA POWER | ADANI SOLAR | WAAREE</p>
        <button className="mt-8 bg-orange-600 text-white px-10 py-3 rounded-full font-bold shadow-md hover:bg-orange-700 transition">
          GET FREE QUOTE
        </button>
      </header>

      {/* Services Placeholders */}
      <div className="max-w-6xl mx-auto py-16 px-4 grid md:grid-cols-3 gap-8 w-full">
        {/* Card 1 */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
          <div className="text-orange-500 text-2xl mb-2 font-bold">[ SOLAR PANEL ]</div>
          <p className="text-gray-500 text-sm">High efficiency monocrystalline solar modules for home and industry.</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
          <div className="text-orange-500 text-2xl mb-2 font-bold">[ INSTALLATION ]</div>
          <p className="text-gray-500 text-sm">Professional engineering team for secure and fast rooftop setup.</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
          <div className="text-orange-500 text-2xl mb-2 font-bold">[ WARRANTY ]</div>
          <p className="text-gray-500 text-sm">Peace of mind with 25 years of performance warranty on products.</p>
        </div>
      </div>

      {/* Info Section */}
      <section className="bg-slate-100 py-12 text-center mt-auto">
        <h3 className="text-2xl font-bold text-slate-800">Ready to go Solar?</h3>
        <p className="text-slate-600 mt-2">Join 1000+ happy customers in Indore.</p>
        <div className="mt-4 font-bold text-green-600 text-xl">
          📞 WhatsApp: +91-XXXXXXXXXX
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white p-6 text-center text-sm">
        <p>© 2026 DUVATECH SOLAR | INDORE, MP | All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
