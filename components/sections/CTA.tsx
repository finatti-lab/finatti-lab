'use client';

import Image from 'next/image';
import WhatsAppIcon from '../ui/WhatsAppIcon';

export default function CTA() {
  return (
    <section className="relative py-12 lg:py-20 bg-gradient-to-br from-terracota via-terracota-dark to-teal overflow-hidden">
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'url(/images/20.png)',
          backgroundRepeat: 'repeat',
          backgroundSize: '200px',
        }}
      />

      <div className="absolute right-0 bottom-0 w-96 h-96 opacity-10 pointer-events-none hidden lg:block">
        <Image src="/images/05b.png" alt="" fill className="object-contain" />
      </div>
      
      <div className="max-w-4xl mx-auto px-4 text-center text-white relative z-10">
        <h2 className="font-mefta text-2xl lg:text-5xl font-bold mb-4 lg:mb-6 leading-tight">
          Diagnóstico preciso.<br/>
          Cuidado humanizado.
        </h2>
        <p className="text-sm lg:text-xl opacity-90 mb-6 lg:mb-8 max-w-2xl mx-auto leading-relaxed">
          Agende seu exame pelo WhatsApp
        </p>
        <a 
          href="https://wa.me/5544991272027?text=Finatti+Laboratório+de+Patologia+e+Citopatologia"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full lg:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ea952] text-white px-8 py-4 rounded-tl-xl rounded-br-xl font-bold text-base lg:text-lg hover:scale-105 transition-all shadow-2xl"
        >
          <WhatsAppIcon className="w-5 h-5" />
          Chamar no WhatsApp
        </a>
      </div>
    </section>
  );
}
