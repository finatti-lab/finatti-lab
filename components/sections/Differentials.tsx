'use client';

import { Microscope, Clock, Shield, Users, Award, Zap } from 'lucide-react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback } from 'react';

export default function Differentials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false })
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const differentials = [
    {
      icon: Microscope,
      title: 'Credibilidade',
      description: 'Resultados que médicos e pacientes podem confiar plenamente. Nossa reputação é construída sobre precisão e excelência.',
    },
    {
      icon: Clock,
      title: 'Agilidade',
      description: 'Sem longas esperas por um resultado. Seu tempo é valioso.',
    },
    {
      icon: Shield,
      title: 'Segurança',
      description: 'Protocolos rigorosos de qualidade em todas as etapas do processo diagnóstico.',
    },
    {
      icon: Users,
      title: 'Humanização',
      description: 'Atendimento personalizado e acolhedor, porque cada paciente é único.',
    },
    {
      icon: Award,
      title: 'Excelência',
      description: 'Compromisso com os mais altos padrões de qualidade em medicina diagnóstica.',
    },
    {
      icon: Zap,
      title: 'Tecnologia',
      description: 'Equipamentos de última geração para diagnósticos cada vez mais precisos.',
    },
  ];

  return (
    <section id="diferenciais" className="bg-terracota py-12 lg:py-24 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'url(/images/20.png)',
          backgroundRepeat: 'repeat',
          backgroundSize: '150px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <h2 className="text-white text-center text-2xl lg:text-5xl font-bold mb-4">
          Nossos Diferenciais
        </h2>
        <p className="text-white/80 text-center text-base lg:text-lg mb-8 lg:mb-16 max-w-2xl mx-auto">
          Os pilares que sustentam nossa excelência em medicina diagnóstica
        </p>
        
        {/* MOBILE: Grid simples 2 colunas */}
        <div className="grid grid-cols-2 gap-3 lg:hidden">
          {differentials.map((item) => (
            <div key={item.title} className="bg-white/95 p-4 rounded-tl-xl rounded-br-xl">
              <div className="w-10 h-10 bg-terracota/10 rounded-lg flex items-center justify-center mb-2">
                <item.icon className="w-5 h-5 text-terracota" />
              </div>
              <h3 className="font-bold text-sm text-terracota mb-1">{item.title}</h3>
              <p className="text-xs text-stone-600 line-clamp-2">{item.description}</p>
            </div>
          ))}
        </div>

        {/* DESKTOP: Carrossel com Embla */}
        <div className="hidden lg:block relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {differentials.map((item) => (
                <div key={item.title} className="flex-[0_0_33.33%] px-3">
                  <div className="bg-white rounded-tl-[2rem] rounded-br-[2rem] p-6 hover:shadow-xl hover:-translate-y-2 transition-all group h-full">
                    <div className="w-12 h-12 bg-teal rounded-tl-xl rounded-br-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <item.icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-teal mb-2">{item.title}</h3>
                    <p className="text-stone-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Setas de navegação */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-terracota hover:text-white transition-colors"
            aria-label="Anterior"
          >
            ←
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-terracota hover:text-white transition-colors"
            aria-label="Próximo"
          >
            →
          </button>
        </div>

        <div className="text-center mt-12 lg:mt-16 max-w-3xl mx-auto">
          <p className="text-white text-lg lg:text-2xl font-semibold mb-3">
            Precisão. Diagnóstico é cuidado.
          </p>
          <p className="text-white/80 text-sm lg:text-lg">
            Cada um desses valores se reflete em nosso trabalho diário, garantindo que você receba não apenas um resultado, mas um cuidado completo.
          </p>
        </div>
      </div>
    </section>
  );
}
