'use client';

import { WhatsappLogo } from "@phosphor-icons/react";

export default function WhatsAppWidget() {
  const phoneNumber = '5511999999999'; // Replace with your WhatsApp number
  const message = 'Olá! Gostaria de saber mais sobre o Pediu.'; // Default message

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-[#7C3AED] p-4 rounded-full shadow-lg hover:bg-[#6D28D9] transition-all transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/20"
      aria-label="Abrir WhatsApp"
    >
      <WhatsappLogo size={32} weight="fill" className="text-white" />
    </button>
  );
} 