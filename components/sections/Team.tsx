import { Mail } from 'lucide-react';
import Image from 'next/image';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';

export default function Team() {
  return (
    <Section id="equipe" background="white" className="py-12 lg:py-20">
      <SectionTitle
        title="Nossa Equipe"
        subtitle="Conheça os fundadores que tornaram esse sonho realidade"
      />

      {/* Grid 2 colunas IGUAIS - Mobile e Desktop */}
      <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto px-4">
        {/* Card Dra. Izabella */}
        <div className="bg-areia rounded-tl-3xl rounded-br-3xl overflow-hidden">
          <div className="h-[300px] md:h-[350px] relative">
            <Image 
              src="/images/dra-izabella.jpeg" 
              alt="Dra. Izabella Finatti Cerci"
              fill 
              className="object-cover object-top"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-terracota">Dra. Izabella Finatti Cerci</h3>
            <p className="text-teal font-medium">Médica Patologista e Cofundadora</p>
            <p className="text-stone-600 text-sm mt-3">
              Especialista em patologia com anos de experiência em diagnóstico. 
              Apaixonada por medicina de precisão e pelo cuidado humanizado.
            </p>
            <p className="text-stone-500 text-xs mt-3">CRM-PR 44595 / RQE 34647</p>
          </div>
        </div>
        
        {/* Card Dr. Guilherme - MESMO ESTILO */}
        <div className="bg-areia rounded-tl-3xl rounded-br-3xl overflow-hidden">
          <div className="h-[300px] md:h-[350px] relative">
            <Image 
              src="/images/dr-guilherme-cerci.jpeg" 
              alt="Dr. Guilherme Cerci"
              fill 
              className="object-cover object-[center_30%]"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-terracota">Dr. Guilherme Cerci</h3>
            <p className="text-teal font-medium">Médico, Gestor e Cofundador</p>
            <p className="text-stone-600 text-sm mt-3">
              Responsável pela gestão estratégica e operacional. 
              Comprometido em levar medicina diagnóstica de excelência a todos.
            </p>
            <p className="text-stone-500 text-xs mt-3">CRM-PR 55437</p>
          </div>
        </div>
      </div>

      {/* Citação */}
      <blockquote className="mt-12 text-center max-w-3xl mx-auto px-4">
        <p className="text-lg italic text-stone-600">
          "Juntos, construímos um laboratório onde cada exame é tratado com a seriedade que uma vida merece."
        </p>
        <cite className="text-terracota font-medium mt-2 block not-italic">— Finatti</cite>
      </blockquote>
    </Section>
  );
}
