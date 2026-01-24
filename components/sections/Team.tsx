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
      image: '/images/dra-izabella.jpeg',
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
    <Section id="equipe" background="areia">
      <SectionTitle
        title="Nossa Equipe"
        subtitle="Conheça os fundadores que tornaram esse sonho realidade"
      />

      {/* Layout assimétrico */}
      <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
        {/* Card Dra. Izabella - GRANDE (2 colunas) */}
        <div className="lg:col-span-2 grid md:grid-cols-2 gap-0 bg-areia rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-none rounded-bl-none overflow-hidden shadow-xl hover:shadow-2xl transition-all">
          <div className="relative h-[400px] md:h-auto">
            <Image 
              src="/images/dra-izabella.jpeg" 
              alt="Dra. Izabella Novo Finatti"
              fill 
              className="object-cover"
            />
          </div>
          <div className="p-6 md:p-8 flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-bold text-terracota mb-2">
              Dra. Izabella Novo Finatti
            </h3>
            <p className="text-teal font-semibold mb-1">
              Médica Patologista | Cofundadora
            </p>
            <p className="text-sm text-stone-500 mb-4">
              CRM-PR 44595 / RQE 34647
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              Especialista em patologia com anos de experiência em diagnóstico. Apaixonada por medicina de precisão e pelo cuidado humanizado.
            </p>
            <a
              href="mailto:izabella@finatti.com.br"
              className="inline-flex items-center gap-2 text-terracota hover:text-terracota-dark transition-colors font-medium"
            >
              <Mail size={18} />
              <span>Email</span>
            </a>
          </div>
        </div>
        
        {/* Card Guilherme - MENOR (1 coluna) */}
        <div className="bg-teal text-white p-6 md:p-8 rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-none rounded-bl-none flex flex-col justify-center shadow-xl hover:shadow-2xl transition-all">
          <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-3xl font-bold mb-6">
            GC
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-2">
            Guilherme Cerci
          </h3>
          <p className="text-white/90 font-semibold mb-4">
            Gestor | Cofundador
          </p>
          <p className="text-white/80 leading-relaxed mb-6">
            Responsável pela gestão estratégica e operacional. Comprometido em levar medicina diagnóstica de excelência a todos.
          </p>
          <a
            href="mailto:guilherme@finatti.com.br"
            className="inline-flex items-center gap-2 text-white hover:text-areia transition-colors font-medium"
          >
            <Mail size={18} />
            <span>Email</span>
          </a>
        </div>
      </div>

      {/* Citação com aspas decorativas */}
      <blockquote className="mt-12 md:mt-16 text-center max-w-3xl mx-auto px-4 relative">
        <span className="text-7xl md:text-8xl text-terracota/20 font-serif absolute -top-8 left-1/2 -translate-x-1/2">"</span>
        <p className="text-xl md:text-2xl italic text-stone-700 leading-relaxed relative z-10">
          Juntos, construímos um laboratório onde cada exame é tratado com a seriedade e o cuidado que uma vida merece.
        </p>
        <p className="text-terracota font-bold text-xl md:text-2xl mt-6">— Finatti</p>
      </blockquote>
    </Section>
  );
}
