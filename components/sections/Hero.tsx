'use client';

import { ArrowRight, Eye } from 'lucide-react';
import Image from 'next/image';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-areia">
      {/* Pattern decorativo */}
      <div className="absolute inset-0 pattern-crosses z-0" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Texto - Esquerda */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-terracota/10 border border-terracota/20 finatti-border px-3 py-1.5 md:px-4 md:py-2 mb-4 md:mb-6 text-xs md:text-sm">
              <Eye size={16} className="text-terracota" />
              <span className="text-terracota font-medium">Seus olhos em cada exame</span>
            </div>

            {/* Headline */}
            <h1 className="font-mefta text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-terracota mb-4 md:mb-6 leading-tight">
              Enxergamos o que
              <br />
              <span className="text-teal">outros não veem</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 md:mb-8 leading-relaxed">
              Laboratório de patologia em Cianorte-PR. Diagnóstico preciso com propósito, onde cada exame é tratado com credibilidade, agilidade e humanidade.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3 md:gap-4 mb-8 md:mb-12">
              <a
                href="https://wa.me/5544991272027?text=Finatti+Laboratório+de+Patologia+e+Citopatologia"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 finatti-border font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl bg-terracota text-white hover:bg-terracota-dark w-full sm:w-auto justify-center"
              >
                Agendar Exame
                <ArrowRight size={20} />
              </a>
              <Button href="#sobre" variant="outline" className="border-2 border-terracota text-terracota hover:bg-terracota hover:text-white w-full sm:w-auto">
                Nossa História
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-md">
              {[
                { value: '100%', label: 'Credibilidade' },
                { value: '24h', label: 'Agilidade' },
                { value: '∞', label: 'Humanidade' },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-terracota mb-1">{stat.value}</div>
                  <div className="text-xs md:text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Imagem - Direita */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg">
              {/* Isotipo decorativo atrás */}
              <div className="absolute inset-0 -z-10 opacity-20 scale-110 hidden md:block">
                <Image 
                  src="/images/06.png"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              
              {/* Imagem da Dra. com máscara estilo Finatti */}
              <div className="
                relative
                overflow-hidden 
                rounded-tl-[3rem] rounded-br-[3rem] 
                rounded-tr-none rounded-bl-none
                shadow-2xl
                border-4 border-white
                max-h-[500px] h-[400px] md:h-[500px]
              ">
                <Image 
                  src="/images/hero-dra-finatti.jpg"
                  alt="Dra. Izabella Novo Finatti - Médica Patologista"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              
              {/* Elemento decorativo */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-teal/10 rounded-tl-[2rem] rounded-br-[2rem] -z-10" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
