'use client';

import { Mail } from 'lucide-react';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';

export default function Team() {
  const team = [
    {
      name: 'Dra. Izabella Finatti',
      role: 'Médica Patologista | Cofundadora',
      description: 'Especialista em patologia com anos de experiência em diagnóstico. Apaixonada por medicina de precisão e pelo cuidado humanizado.',
      email: 'izabella@finatti.com.br',
    },
    {
      name: 'Guilherme Finatti',
      role: 'Gestor | Cofundador',
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

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {team.map((member) => (
          <div key={member.name} className="bg-white rounded-2xl p-8 shadow-md border-l-4 border-terracota">
            <h3 className="text-2xl font-bold text-terracota mb-2">
              {member.name}
            </h3>
            <p className="text-teal font-medium mb-4">
              {member.role}
            </p>
            <p className="text-gray-700 mb-6">
              {member.description}
            </p>
            <a
              href={`mailto:${member.email}`}
              className="inline-flex items-center gap-2 text-terracota hover:text-terracota-dark transition-colors"
            >
              <Mail size={18} />
              <span>Email</span>
            </a>
          </div>
        ))}
      </div>

      <div className="text-center mt-12 max-w-4xl mx-auto">
        <p className="text-lg text-gray-700 italic mb-4">
          "Juntos, construímos um laboratório onde cada exame é tratado com a seriedade e o cuidado que uma vida merece. 
          Nossa missão é servir com excelência, guiados pela fé e pelo compromisso com a verdade."
        </p>
        <p className="text-terracota font-bold text-xl">Finatti</p>
      </div>
    </Section>
  );
}
