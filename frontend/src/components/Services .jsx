import React, { useState, useRef, useEffect } from 'react';

const Services = () => {
  // State to track which section is open
  const [openSection, setOpenSection] = useState(null);
  
  // Refs to track each item's position for scrolling
  const itemRefs = useRef({});

  const toggleSection = (id) => {
    setOpenSection(openSection === id ? null : id);
  };

  // Scroll effect when a section is opened
  useEffect(() => {
    if (openSection && itemRefs.current[openSection]) {
      setTimeout(() => {
        itemRefs.current[openSection].scrollIntoView({
          behavior: 'smooth',
          block: 'start', // It will scroll the item to the top of the screen
        });
      }, 100); // Small delay to allow content to render
    }
  }, [openSection]);

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
    <section className="py-20 bg-[#0A1F44] min-h-screen">
      <div className="max-w-4xl mx-auto px-6 mt-10">
        <h2 className="text-4xl font-bold text-center text-[#00FF88] mb-12 uppercase tracking-tight">
          Our Solar Solutions
        </h2>

        <div className="space-y-6">
          {solarData.map((item) => (
            <div 
              key={item.id} 
              // Store reference of this div
              ref={(el) => (itemRefs.current[item.id] = el)}
              style={{ scrollMarginTop: '20px' }} // Optional: adds a gap at the top when scrolling
              className="glass-card overflow-hidden"
            >
              <button
                onClick={() => toggleSection(item.id)}
                className="w-full flex justify-between items-center p-6 text-left font-bold text-xl text-white hover:text-[#00FF88] transition-all"
              >
                {item.title}
                <span className={`transform transition-transform duration-300 ${openSection === item.id ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>

              {/* Description Section */}
              {openSection === item.id && (
                <div className="p-6 border-t border-white/10 bg-white/5 text-gray-200 space-y-3 animate-fadeIn">
                  <p><span className="font-bold text-[#00FF88]">Description:</span> {item.desc}</p>
                  <p><span className="font-bold text-[#00FF88]">Benefits:</span> {item.benefits}</p>
                  <p><span className="font-bold text-[#00FF88]">Drawbacks:</span> {item.drawbacks}</p>
                  <p><span className="font-bold text-[#00FF88]">Suitable For:</span> {item.suitable}</p>
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
