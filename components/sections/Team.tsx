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
    <Section id="equipe" background="areia" className="py-12 lg:py-20">
      <SectionTitle
        title="Nossa Equipe"
        subtitle="Conheça os fundadores que tornaram esse sonho realidade"
      />

      {/* MOBILE: Cards empilhados verticalmente */}
      <div className="space-y-4 lg:hidden px-4">
        {/* Card Dra. Izabella */}
        <div className="bg-areia rounded-tl-2xl rounded-br-2xl overflow-hidden">
          <div className="h-[300px] relative">
            <Image 
              src="/images/dra-izabella-2.jpeg" 
              alt="Dra. Izabella Novo Finatti"
              fill 
              className="object-cover object-top"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-terracota">Dra. Izabella Novo Finatti</h3>
            <p className="text-teal font-medium text-sm">Médica Patologista | Cofundadora</p>
            <p className="text-stone-600 text-sm mt-2">Especialista em patologia com anos de experiência em diagnóstico.</p>
            <p className="text-xs text-stone-500 mt-2">CRM-PR 44595 / RQE 34647</p>
            <a
              href="mailto:izabella@finatti.com.br"
              className="inline-flex items-center gap-2 text-terracota hover:text-terracota-dark transition-colors font-semibold text-sm mt-4"
            >
              <Mail size={16} />
              <span>Enviar Email</span>
            </a>
          </div>
        </div>
        
        {/* Card Guilherme */}
        <div className="bg-teal text-white p-6 rounded-tl-2xl rounded-br-2xl">
          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-xl font-bold mb-4">
            GC
          </div>
          <h3 className="text-xl font-bold">Guilherme Cerci</h3>
          <p className="text-white/80 text-sm">Gestor | Cofundador</p>
          <p className="text-white/70 text-sm mt-2">Responsável pela gestão estratégica e operacional.</p>
          <a
            href="mailto:guilherme@finatti.com.br"
            className="inline-flex items-center gap-2 text-white hover:text-areia transition-colors font-medium text-sm mt-4"
          >
            <Mail size={16} />
            <span>Email</span>
          </a>
        </div>
      </div>

      {/* DESKTOP: Layout assimétrico original */}
      <div className="hidden lg:grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 grid grid-cols-2 gap-0 bg-white rounded-tl-[3rem] rounded-br-[3rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all border-2 border-areia">
          <div className="relative h-auto">
            <Image 
              src="/images/dra-izabella-2.jpeg" 
              alt="Dra. Izabella Novo Finatti"
              fill 
              className="object-cover object-center"
            />
          </div>
          <div className="p-10 flex flex-col justify-center bg-areia/50">
            <h3 className="text-4xl font-bold text-terracota mb-2">
              Dra. Izabella Novo Finatti
            </h3>
            <p className="text-teal font-semibold text-lg mb-1">
              Médica Patologista | Cofundadora
            </p>
            <p className="text-sm text-stone-500 mb-5">
              CRM-PR 44595 / RQE 34647
            </p>
            <p className="text-stone-700 leading-relaxed mb-6 text-lg">
              Especialista em patologia com anos de experiência em diagnóstico. Apaixonada por medicina de precisão e pelo cuidado humanizado.
            </p>
            <a
              href="mailto:izabella@finatti.com.br"
              className="inline-flex items-center gap-2 text-terracota hover:text-terracota-dark transition-colors font-semibold"
            >
              <Mail size={20} />
              <span>Enviar Email</span>
            </a>
          </div>
        </div>
        
        <div className="bg-teal text-white p-8 rounded-tl-[3rem] rounded-br-[3rem] flex flex-col justify-center shadow-xl hover:shadow-2xl transition-all">
          <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-3xl font-bold mb-6">
            GC
          </div>
          <h3 className="text-3xl font-bold mb-2">
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

      <blockquote className="mt-8 lg:mt-16 text-center max-w-3xl mx-auto px-4">
        <p className="text-base lg:text-2xl italic text-stone-600 leading-relaxed">
          "Juntos, construímos um laboratório onde cada exame é tratado com a seriedade que uma vida merece."
        </p>
      </blockquote>
    </Section>
  );
}
