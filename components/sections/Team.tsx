'use client';

import { Mail } from 'lucide-react';
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
    },
    {
      name: 'Guilherme Cerci',
      role: 'Gestor | Cofundador',
      crm: '',
      description: 'Responsável pela gestão estratégica e operacional. Comprometido em levar medicina diagnóstica de excelência a todos.',
      email: 'guilherme@finatti.com.br',
    },
  ];

  return (
    <Section id="equipe" background="areia">
      <SectionTitle
        title="Nossa Equipe"
        subtitle="Conheça os fundadores que tornaram esse sonho realidade"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
        {team.map((member) => (
          <div key={member.name} className="bg-white finatti-border p-6 md:p-8 shadow-md border-l-4 border-terracota hover:shadow-xl transition-all">
            <h3 className="text-xl md:text-2xl font-bold text-terracota mb-2">
              {member.name}
            </h3>
            <p className="text-sm md:text-base text-teal font-medium mb-1">
              {member.role}
            </p>
            {member.crm && (
              <p className="text-xs md:text-sm text-gray-500 mb-3 md:mb-4">
                {member.crm}
              </p>
            )}
            {!member.crm && <div className="mb-3 md:mb-4" />}
            <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6 leading-relaxed">
              {member.description}
            </p>
            <a
              href={`mailto:${member.email}`}
              className="inline-flex items-center gap-2 text-terracota hover:text-terracota-dark transition-colors text-sm md:text-base"
            >
              <Mail size={18} />
              <span>Email</span>
            </a>
          </div>
        ))}
      </div>

      <div className="text-center mt-8 md:mt-12 max-w-4xl mx-auto px-4">
        <p className="text-base md:text-lg text-gray-700 italic mb-4 leading-relaxed">
          "Juntos, construímos um laboratório onde cada exame é tratado com a seriedade e o cuidado que uma vida merece. 
          Nossa missão é servir com excelência, guiados pela fé e pelo compromisso com a verdade."
        </p>
        <p className="text-terracota font-bold text-lg md:text-xl">Finatti</p>
      </div>
    </Section>
  );
}
