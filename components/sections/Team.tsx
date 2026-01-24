'use client';

import { Mail } from 'lucide-react';
import Image from 'next/image';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';

export default function Team() {
  const team = [
    {
      name: 'Dra. Izabella Novo Finatti',
      role: 'Médica Patologista | Cofundadora',
      crm: 'CRM-PR 44595 / RQE 34647',
      description: 'Especialista em patologia com anos de experiência em diagnóstico. Apaixonada por medicina de precisão e pelo cuidado humanizado.',
      email: 'izabella@finatti.com.br',
      image: '/images/dra-izabella-2.jpeg',
    },
    {
      name: 'Guilherme Cerci',
      role: 'Gestor | Cofundador',
      crm: '',
      description: 'Responsável pela gestão estratégica e operacional. Comprometido em levar medicina diagnóstica de excelência a todos.',
      email: 'guilherme@finatti.com.br',
      image: null,
    },
  ];

  return (
    <Section id="equipe" background="areia" className="py-12 md:py-16 lg:py-20">
      <SectionTitle
        title="Nossa Equipe"
        subtitle="Conheça os fundadores que tornaram esse sonho realidade"
      />

      {/* Layout assimétrico - Stack no mobile */}
      <div className="grid lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        {/* Card Dra. Izabella - GRANDE (2 colunas) */}
        <div className="lg:col-span-2 grid md:grid-cols-2 gap-0 bg-white rounded-tl-[2rem] md:rounded-tl-[3rem] rounded-br-[2rem] md:rounded-br-[3rem] rounded-tr-none rounded-bl-none overflow-hidden shadow-xl hover:shadow-2xl transition-all border-2 border-areia">
          <div className="relative h-[300px] sm:h-[350px] md:h-auto">
            <Image 
              src="/images/dra-izabella-2.jpeg" 
              alt="Dra. Izabella Novo Finatti"
              fill 
              className="object-cover object-center"
            />
          </div>
          <div className="p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-center bg-areia/50">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-terracota mb-2">
              Dra. Izabella Novo Finatti
            </h3>
            <p className="text-teal font-semibold text-sm md:text-base lg:text-lg mb-1">
              Médica Patologista | Cofundadora
            </p>
            <p className="text-xs md:text-sm text-stone-500 mb-4 md:mb-5">
              CRM-PR 44595 / RQE 34647
            </p>
            <p className="text-stone-700 leading-relaxed mb-5 md:mb-6 text-sm md:text-base lg:text-lg">
              Especialista em patologia com anos de experiência em diagnóstico. Apaixonada por medicina de precisão e pelo cuidado humanizado.
            </p>
            <a
              href="mailto:izabella@finatti.com.br"
              className="inline-flex items-center gap-2 text-terracota hover:text-terracota-dark transition-colors font-semibold text-sm md:text-base"
            >
              <Mail size={18} />
              <span>Enviar Email</span>
            </a>
          </div>
        </div>
        
        {/* Card Guilherme - MENOR (1 coluna) */}
        <div className="bg-teal text-white p-5 sm:p-6 md:p-8 rounded-tl-[2rem] md:rounded-tl-[3rem] rounded-br-[2rem] md:rounded-br-[3rem] rounded-tr-none rounded-bl-none flex flex-col justify-center shadow-xl hover:shadow-2xl transition-all">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-2xl md:text-3xl font-bold mb-5 md:mb-6">
            GC
          </div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
            Guilherme Cerci
          </h3>
          <p className="text-white/90 font-semibold mb-4 text-sm md:text-base">
            Gestor | Cofundador
          </p>
          <p className="text-white/80 leading-relaxed mb-5 md:mb-6 text-sm md:text-base">
            Responsável pela gestão estratégica e operacional. Comprometido em levar medicina diagnóstica de excelência a todos.
          </p>
          <a
            href="mailto:guilherme@finatti.com.br"
            className="inline-flex items-center gap-2 text-white hover:text-areia transition-colors font-medium text-sm md:text-base"
          >
            <Mail size={18} />
            <span>Email</span>
          </a>
        </div>
      </div>

      {/* Citação com aspas decorativas */}
      <blockquote className="mt-8 md:mt-12 lg:mt-16 text-center max-w-3xl mx-auto px-4 relative">
        <span className="text-5xl md:text-7xl lg:text-8xl text-terracota/20 font-serif absolute -top-6 md:-top-8 left-1/2 -translate-x-1/2">"</span>
        <p className="text-lg md:text-xl lg:text-2xl italic text-stone-700 leading-relaxed relative z-10">
          Juntos, construímos um laboratório onde cada exame é tratado com a seriedade e o cuidado que uma vida merece.
        </p>
        <p className="text-terracota font-bold text-lg md:text-xl lg:text-2xl mt-4 md:mt-6">— Finatti</p>
      </blockquote>
    </Section>
  );
}
