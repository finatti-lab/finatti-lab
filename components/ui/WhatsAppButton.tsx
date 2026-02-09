'use client';

import WhatsAppIcon from './WhatsAppIcon';

export default function WhatsAppButton() {
  const whatsappUrl = 'https://wa.me/5544991272027?text=Finatti+Laboratório+de+Patologia+e+Citopatologia';

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-tl-2xl rounded-br-2xl shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 z-50"
      aria-label="Falar no WhatsApp"
      title="Fale conosco no WhatsApp"
    >
      <WhatsAppIcon className="w-7 h-7" />
    </a>
  );
}
