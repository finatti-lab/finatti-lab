'use client';

import { MessageCircle } from 'lucide-react';
import Image from 'next/image';

export default function CTA() {
  return (
    <section className="relative py-12 md:py-16 lg:py-20 bg-gradient-to-br from-terracota via-terracota-dark to-teal overflow-hidden">
      {/* Pattern decorativo */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'url(/images/20.png)',
          backgroundRepeat: 'repeat',
          backgroundSize: '200px',
        }}
      />

      {/* Isotipo decorativo */}
      <div className="absolute right-0 bottom-0 w-48 h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 opacity-10 pointer-events-none">
        <Image 
          src="/images/05b.png" 
          alt="" 
          fill 
          className="object-contain"
        />
      </div>
      
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center text-white relative z-10">
        <h2 className="font-mefta text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
          Diagnóstico preciso.<br/>
          Cuidado humanizado.
        </h2>
        <p className="text-base md:text-lg lg:text-xl opacity-90 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
          Agende seu exame e tenha a confiança de um diagnóstico feito com propósito. Nossa equipe está pronta para cuidar de você.
        </p>
        <a 
          href="https://wa.me/5544991272027?text=Finatti+Laboratório+de+Patologia+e+Citopatologia"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 md:gap-3 bg-white text-terracota px-6 md:px-8 py-3 md:py-4 rounded-tl-[1.5rem] md:rounded-tl-[2rem] rounded-br-[1.5rem] md:rounded-br-[2rem] rounded-tr-none rounded-bl-none font-bold text-base md:text-lg hover:scale-105 transition-transform shadow-2xl"
        >
          <MessageCircle size={20} />
          Agendar pelo WhatsApp
        </a>
      </div>
    </section>
  );
}
