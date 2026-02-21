import React, { useState } from 'react';

const Services = () => {
  // यह पता रखने के लिए कि कौन सा सेक्शन खुला है
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const solarData = [
    {
      id: 'on-grid',
      title: 'On-Grid Solar System',
      desc: 'A battery-less system that works in synchronization with the government electricity grid.',
      benefits: 'Zero electricity bills via net-metering, lowest cost, and minimal maintenance.',
      drawbacks: 'No power backup during grid outages (safety shutdown).',
      suitable: 'Residential and urban areas with rare power cuts.'
    },
    {
      id: 'off-grid',
      title: 'Off-Grid Solar System',
      desc: 'A standalone system powered by heavy-duty battery storage.',
      benefits: 'Complete energy independence and 24/7 backup even during blackouts.',
      drawbacks: 'Higher initial cost due to batteries; replacement needed every 5-7 years.',
      suitable: 'Remote locations or areas with long, frequent power cuts.'
    },
    {
      id: 'hybrid',
      title: 'Hybrid Solar System',
      desc: 'Combining the best of both worlds—Net-metering plus battery backup.',
      benefits: 'Saves on bills while ensuring power backup during outages.',
      drawbacks: 'Most expensive system to install and maintain.',
      suitable: 'Critical setups where zero downtime and savings are both required.'
    },
    {
      id: 'amc',
      title: 'AMC & Solar Maintenance',
      desc: 'Professional deep cleaning and health check for all solar plants.',
      benefits: 'Increases energy efficiency by up to 25% and ensures long life.',
      drawbacks: 'Requires regular scheduling.',
      suitable: 'All existing solar owners who want maximum output.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 mt-10">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 uppercase tracking-tight">
          Our Solar Solutions
        </h2>

        <div className="space-y-4">
          {solarData.map((item) => (
            <div key={item.id} className="border border-gray-200 rounded-xl bg-white shadow-sm overflow-hidden">
              <button
                onClick={() => toggleSection(item.id)}
                className="w-full flex justify-between items-center p-6 text-left font-bold text-xl text-gray-800 hover:bg-gray-50 transition-all"
              >
                {item.title}
                <span className={`transform transition-transform duration-300 ${openSection === item.id ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>

              {/* अगर सेक्शन खुला है तभी नीचे का कंटेंट दिखेगा */}
              {openSection === item.id && (
                <div className="p-6 border-t border-gray-100 bg-white text-gray-700 space-y-3 animate-fadeIn">
                  <p><span className="font-bold text-green-600">Description:</span> {item.desc}</p>
                  <p><span className="font-bold text-green-600">Benefits:</span> {item.benefits}</p>
                  <p><span className="font-bold text-green-600">Drawbacks:</span> {item.drawbacks}</p>
                  <p><span className="font-bold text-green-600">Suitable For:</span> {item.suitable}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
