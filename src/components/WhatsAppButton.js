import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '260764121396'; // Using the first phone number from your contact details
    const message = encodeURIComponent('Hello! I\'m interested in your trekking and travel services. Can you help me plan my next adventure?');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="whatsapp-button" onClick={handleWhatsAppClick}>
      <FaWhatsapp className="whatsapp-icon" />
      <span className="whatsapp-tooltip">Chat with us on WhatsApp</span>
    </div>
  );
};

export default WhatsAppButton;
