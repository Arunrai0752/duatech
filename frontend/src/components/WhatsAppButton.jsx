import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = "918881177764"; // Aapka number
  const message = "Hi, I'm interested in Solar Services. Can you provide more details?"; // Default Message
  
  // EncodeURIComponent zaroori hai taaki spaces sahi se link mein convert ho jayein
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappLink}
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.5)] hover:scale-110 active:scale-95 transition-all z-50 flex items-center justify-center border-2 border-white/20"
    >
      <MessageCircle size={30} fill="currentColor" />
    </a>
  );
};

export default WhatsAppButton;
