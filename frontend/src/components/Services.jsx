import React from 'react';

const Services = () => {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-10">
          Our Solar Solutions
        </h2>
        
        <div className="grid gap-6">
          {/* On-Grid Solar System */}
          <details className="group border-2 border-orange-100 rounded-xl bg-white shadow-md overflow-hidden">
            <summary className="flex justify-between items-center p-6 cursor-pointer font-bold text-xl text-gray-800 list-none hover:bg-orange-50 transition-colors">
              On-Grid Solar System
              <span className="text-orange-500 transition-transform duration-300 group-open:rotate-180">▼</span>
            </summary>
            <div className="p-6 border-t border-gray-100 text-gray-700 space-y-3">
              <p><span className="font-bold text-orange-600">Description:</span> A battery-less system that works in synchronization with the government electricity grid.</p>
              <p><span className="font-bold text-orange-600">Benefits:</span> Drastic reduction in electricity bills via Net-Metering, lowest installation cost, and zero battery maintenance.</p>
              <p><span className="font-bold text-orange-600">Drawbacks:</span> The system shuts down during power outages for safety reasons (Anti-islanding).</p>
              <p><span className="font-bold text-orange-600">Suitable For:</span> Urban areas and industries with stable grid connectivity looking for maximum ROI.</p>
            </div>
          </details>

          {/* Off-Grid Solar System */}
          <details className="group border-2 border-orange-100 rounded-xl bg-white shadow-md overflow-hidden">
            <summary className="flex justify-between items-center p-6 cursor-pointer font-bold text-xl text-gray-800 list-none hover:bg-orange-50 transition-colors">
              Off-Grid Solar System
              <span className="text-orange-500 transition-transform duration-300 group-open:rotate-180">▼</span>
            </summary>
            <div className="p-6 border-t border-gray-100 text-gray-700 space-y-3">
              <p><span className="font-bold text-orange-600">Description:</span> An independent solar power plant supported by heavy-duty battery storage.</p>
              <p><span className="font-bold text-orange-600">Benefits:</span> Complete energy independence and 24/7 power backup even in remote locations.</p>
              <p><span className="font-bold text-orange-600">Drawbacks:</span> Higher initial investment due to batteries; requires battery replacement every 5-7 years.</p>
              <p><span className="font-bold text-orange-600">Suitable For:</span> Remote areas, farmhouses, and places with frequent or long power cuts.</p>
            </div>
          </details>

          {/* Hybrid Solar System */}
          <details className="group border-2 border-orange-100 rounded-xl bg-white shadow-md overflow-hidden">
            <summary className="flex justify-between items-center p-6 cursor-pointer font-bold text-xl text-gray-800 list-none hover:bg-orange-50 transition-colors">
              Hybrid Solar System
              <span className="text-orange-500 transition-transform duration-300 group-open:rotate-180">▼</span>
            </summary>
            <div className="p-6 border-t border-gray-100 text-gray-700 space-y-3">
              <p><span className="font-bold text-orange-600">Description:</span> Combining the best of both worlds—Grid-tied features with battery backup security.</p>
              <p><span className="font-bold text-orange-600">Benefits:</span> Saves on bills via Net-Metering while ensuring power backup during outages.</p>
              <p><span className="font-bold text-orange-600">Drawbacks:</span> Most complex installation and highest initial setup cost.</p>
              <p><span className="font-bold text-orange-600">Suitable For:</span> Critical operations and high-end residences where both savings and backup are mandatory.</p>
            </div>
          </details>

          {/* AMC & Maintenance */}
          <details className="group border-2 border-blue-100 rounded-xl bg-white shadow-md overflow-hidden">
            <summary className="flex justify-between items-center p-6 cursor-pointer font-bold text-xl text-gray-800 list-none hover:bg-blue-50 transition-colors">
              AMC & Professional Maintenance
              <span className="text-blue-500 transition-transform duration-300 group-open:rotate-180">▼</span>
            </summary>
            <div className="p-6 border-t border-gray-100 text-gray-700 space-y-3">
              <p><span className="font-bold text-blue-600">Our Service:</span> We provide professional deep cleaning of solar panels to ensure maximum solar harvest.</p>
              <p><span className="font-bold text-blue-600">Expertise:</span> Our team performs all types of solar services including wiring health checks, structure tightening, and inverter diagnostics.</p>
              <p><span className="font-bold text-blue-600">Why AMC:</span> Regular maintenance increases energy efficiency by up to 25% and ensures a 25-year lifespan.</p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Services;
