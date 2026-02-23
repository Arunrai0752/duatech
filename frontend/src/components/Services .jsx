import React, { useState, useRef, useEffect } from 'react';

const Services = () => {
  const [openSection, setOpenSection] = useState(null);
  const itemRefs = useRef({}); // Har item ke liye ref store karega

  const toggleSection = (sectionId) => {
    setOpenSection(openSection === sectionId ? null : sectionId);
  };

  // Jab openSection change ho, tab scroll kare
  useEffect(() => {
    if (openSection && itemRefs.current[openSection]) {
      setTimeout(() => {
        itemRefs.current[openSection].scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 200); // 200ms delay taaki transition smooth ho
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
