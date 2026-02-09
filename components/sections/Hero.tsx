'use client';

import { Shield, Clock, Heart, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-areia overflow-hidden pt-20 md:pt-24">
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

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-12 md:py-16 lg:py-20">
        {/* MOBILE: Layout vertical simples */}
        <div className="lg:hidden">
          {/* Badge */}
          <div className="text-center mb-6">
            <span className="text-sm text-terracota font-semibold">Seus olhos em cada exame</span>
          </div>

          {/* Headline */}
          <h1 className="font-mefta text-3xl md:text-4xl font-bold text-stone-900 mb-6 leading-tight text-center max-w-md mx-auto">
            A resposta que você<br/>precisa, no tempo<br/><span className="text-teal">que você merece</span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm md:text-base text-stone-700 mb-6 leading-relaxed text-center">
            Laboratório de Patologia e Citopatologia em Cianorte-PR. Diagnóstico preciso, onde cada exame é tratado com credibilidade, agilidade e humanidade.
          </p>

          {/* CTAs */}
          <div className="flex flex-col gap-3 mb-8">
            <a
              href="https://wa.me/5544991272027?text=Finatti+Laboratório+de+Patologia+e+Citopatologia"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3 finatti-border font-semibold bg-terracota text-white"
            >
              Agendar Exame
            </a>
            <a 
              href="#sobre"
              className="w-full text-center py-3 finatti-border border-2 border-terracota text-terracota font-semibold"
            >
              Nossa História
            </a>
          </div>

          {/* Imagem centralizada 70% */}
          <div className="flex justify-center mb-8">
            <div className="relative w-[70%] aspect-[3/4] rounded-tl-[2.5rem] rounded-br-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
              <Image 
                src="/images/dra-izabella.jpeg"
                alt="Dra. Izabella Finatti Cerci"
                fill
                className="object-cover object-[center_20%]"
                priority
                quality={90}
              />
            </div>
          </div>

          {/* Stats compactos com ícones */}
          <div className="grid grid-cols-3 gap-4 text-center">
            {[
              { icon: Shield, label: 'Credibilidade' },
              { icon: Clock, label: 'Agilidade' },
              { icon: Heart, label: 'Humanidade' },
            ].map((stat) => (
              <div key={stat.label}>
                <stat.icon className="w-8 h-8 text-terracota mx-auto mb-2" />
                <div className="text-xs text-stone-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* DESKTOP: Layout original */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-terracota/20 finatti-border px-4 py-2 mb-6 shadow-sm">
              <Shield size={16} className="text-terracota" />
              <span className="text-terracota font-semibold text-sm">Seus olhos em cada exame</span>
            </div>

            <h1 className="font-mefta text-5xl lg:text-6xl font-bold text-stone-900 mb-6 leading-tight max-w-2xl">
              A resposta que você<br/>precisa, no tempo<br/><span className="text-teal">que você merece</span>
            </h1>

            <p className="text-lg text-stone-700 mb-8 leading-relaxed max-w-xl">
              Laboratório de Patologia e Citopatologia em Cianorte-PR. Diagnóstico preciso, onde cada exame é tratado com credibilidade, agilidade e humanidade.
            </p>

            <div className="flex gap-4 mb-12">
              <a
                href="https://wa.me/5544991272027?text=Finatti+Laboratório+de+Patologia+e+Citopatologia"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 finatti-border font-semibold transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl bg-terracota text-white hover:bg-terracota-dark"
              >
                Agendar Exame
                <ArrowRight size={20} />
              </a>
              <a 
                href="#sobre"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 finatti-border border-2 border-terracota text-terracota font-semibold hover:bg-terracota hover:text-white transition-all duration-300"
              >
                Nossa História
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8 max-w-lg">
              {[
                { icon: Shield, label: 'Credibilidade' },
                { icon: Clock, label: 'Agilidade' },
                { icon: Heart, label: 'Humanidade' },
              ].map((stat) => (
                <div key={stat.label}>
                  <stat.icon className="w-12 h-12 text-terracota mb-3" />
                  <div className="text-sm text-stone-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 relative">
            <div className="relative lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:w-[140%] lg:-mr-20">
              <div className="absolute -inset-10 -z-10 opacity-15">
                <Image src="/images/06.png" alt="" fill className="object-contain rotate-6" />
              </div>
              
              <div className="relative overflow-hidden rounded-tl-[4rem] rounded-br-[4rem] shadow-2xl border-8 border-white h-[550px]">
                <Image 
                  src="/images/dra-izabella.jpeg"
                  alt="Dra. Izabella Finatti Cerci - Médica Patologista"
                  fill
                  className="object-cover object-[center_20%]"
                  priority
                  quality={90}
                />
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-teal/20 rounded-tl-[3rem] rounded-br-[3rem] -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
