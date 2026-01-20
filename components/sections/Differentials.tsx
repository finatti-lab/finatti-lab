'use client';

import { Shield, Zap, Lightbulb, Users, Layout, Award, Heart, Briefcase } from 'lucide-react';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';

export default function Differentials() {
  const differentials = [
    {
      icon: Shield,
      title: 'Credibilidade',
      description: 'Resultados confiáveis que médicos e pacientes podem confiar plenamente.',
    },
    {
      icon: Zap,
      title: 'Agilidade',
      description: 'Laudos rápidos sem comprometer a qualidade. Seu tempo é valioso.',
    },
    {
      icon: Lightbulb,
      title: 'Inovação',
      description: 'Tecnologia de ponta e métodos atualizados para diagnósticos precisos.',
    },
    {
      icon: Users,
      title: 'Acessibilidade',
      description: 'Medicina diagnóstica de qualidade ao alcance de todos.',
    },
    {
      icon: Layout,
      title: 'Organização',
      description: 'Processos estruturados para garantir eficiência em cada etapa.',
    },
    {
      icon: Award,
      title: 'Disciplina',
      description: 'Rigor técnico e científico em todos os nossos procedimentos.',
    },
    {
      icon: Heart,
      title: 'Humanidade',
      description: 'Cada exame é tratado com empatia, cuidado e atenção individual.',
    },
    {
      icon: Briefcase,
      title: 'Serviço',
      description: 'Medicina feita para servir pessoas, não para mercantilizar vidas.',
    },
  ];

  return (
    <Section id="diferenciais" background="areia">
      <SectionTitle
        title="Nossos Diferenciais"
        subtitle="Os 8 pilares que sustentam nossa excelência em medicina diagnóstica"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {differentials.map((item) => (
          <div key={item.title} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-teal rounded-lg flex items-center justify-center mb-4">
              <item.icon className="text-white" size={24} />
            </div>
            <h3 className="text-lg font-bold text-teal mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12 max-w-3xl mx-auto">
        <p className="text-lg text-teal-dark font-semibold mb-2">
          Precisão com propósito. Diagnóstico é cuidado.
        </p>
        <p className="text-gray-700">
          Cada um desses valores se reflete em nosso trabalho diário, garantindo que você receba não apenas um resultado, mas um cuidado completo.
        </p>
      </div>
    </Section>
  );
}
