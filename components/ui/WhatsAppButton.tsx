'use client';

import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const whatsappUrl = 'https://wa.me/5544991272027?text=Finatti+Laboratório+de+Patologia+e+Citopatologia';

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 finatti-border shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 z-50 animate-pulse hover:animate-none"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}
