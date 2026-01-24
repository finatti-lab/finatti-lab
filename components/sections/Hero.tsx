'use client';

import { ArrowRight, Eye } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-areia overflow-hidden">
      {/* Isotipo decorativo gigante rotacionado */}
      <div className="absolute -right-32 top-20 w-[600px] h-[600px] opacity-5 rotate-12 hidden lg:block pointer-events-none">
        <Image 
          src="/images/06.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      {/* Blob decorativo */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-terracota/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal/5 rounded-full blur-3xl" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-32">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          
          {/* Texto - 60% da largura (3 colunas) */}
          <div className="lg:col-span-3 order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-terracota/20 finatti-border px-4 py-2 mb-6 shadow-sm">
              <Eye size={18} className="text-terracota" />
              <span className="text-terracota font-semibold text-sm">Seus olhos em cada exame</span>
            </div>

            {/* Headline */}
            <h1 className="font-mefta text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-terracota mb-6 leading-[1.1]">
              Enxergamos<br />
              o que <span className="text-teal">outros<br />não veem</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-stone-700 mb-8 leading-relaxed max-w-xl">
              Laboratório de patologia em Cianorte-PR. Diagnóstico preciso com propósito, onde cada exame é tratado com credibilidade, agilidade e humanidade.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="https://wa.me/5544991272027?text=Finatti+Laboratório+de+Patologia+e+Citopatologia"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 finatti-border font-semibold transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl bg-terracota text-white hover:bg-terracota-dark"
              >
                Agendar Exame
                <ArrowRight size={22} />
              </a>
              <a 
                href="#sobre"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 finatti-border border-2 border-terracota text-terracota font-semibold hover:bg-terracota hover:text-white transition-all duration-300"
              >
                Nossa História
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-lg">
              {[
                { value: '100%', label: 'Credibilidade' },
                { value: '24h', label: 'Agilidade' },
                { value: '∞', label: 'Humanidade' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-4xl md:text-5xl font-bold text-terracota mb-2">{stat.value}</div>
                  <div className="text-sm text-stone-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Imagem - 40% da largura (2 colunas) - MAIOR e com overflow */}
          <div className="lg:col-span-2 order-1 lg:order-2 relative">
            <div className="relative lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:w-[140%] lg:-mr-20">
              {/* Isotipo atrás da imagem */}
              <div className="absolute -inset-10 -z-10 opacity-15 hidden md:block">
                <Image 
                  src="/images/06.png"
                  alt=""
                  fill
                  className="object-contain rotate-6"
                />
              </div>
              
              {/* Imagem da Dra. - MAIOR */}
              <div className="relative overflow-hidden rounded-tl-[4rem] rounded-br-[4rem] rounded-tr-none rounded-bl-none shadow-2xl border-8 border-white h-[450px] md:h-[600px] lg:h-[700px]">
                <Image 
                  src="/images/hero-dra-finatti.jpg"
                  alt="Dra. Izabella Novo Finatti - Médica Patologista"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              
              {/* Elemento decorativo */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-teal/20 rounded-tl-[3rem] rounded-br-[3rem] -z-10 hidden md:block" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
