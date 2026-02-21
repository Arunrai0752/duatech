import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  // Aapka exact number aur auto-message
  const phoneNumber = "918881177764"; 
  const message = "Hi, I'm interested in Solar Services. Please provide more information.";
  
  // Ye link format sabse best hai App open karne ke liye
  const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappLink}
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_30px_rgba(37,211,102,0.6)] hover:scale-110 active:scale-95 transition-all z-[9999] flex items-center justify-center border-2 border-white/20"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle size={32} fill="currentColor" />
    </a>
  );
};

export default WhatsAppButton;
