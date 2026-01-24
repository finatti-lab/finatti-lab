'use client';

import { Microscope, FileText, Activity, Dna, Brain, Bone, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';

export default function Services() {
  const services = [
    {
      icon: Microscope,
      title: 'Histopatologia',
      description: 'Análise microscópica de tecidos para diagnóstico preciso de doenças.',
      items: ['Biópsias', 'Peças cirúrgicas', 'Citologia'],
    },
    {
      icon: FileText,
      title: 'Citopatologia',
      description: 'Exame de células para detecção precoce de alterações e doenças.',
      items: ['Papanicolau', 'Punções', 'Líquidos corporais'],
    },
    {
      icon: Activity,
      title: 'Imuno-histoquímica',
      description: 'Técnica avançada para identificação de marcadores específicos.',
      items: ['Oncologia', 'Marcadores tumorais', 'Diagnóstico diferencial'],
    },
    {
      icon: Dna,
      title: 'Patologia Molecular',
      description: 'Análises genéticas e moleculares para diagnósticos de precisão.',
      items: ['PCR', 'Sequenciamento', 'Mutações genéticas'],
    },
    {
      icon: Brain,
      title: 'Neuropatologia',
      description: 'Especialização em diagnóstico de doenças do sistema nervoso.',
      items: ['Tumores cerebrais', 'Doenças degenerativas', 'Biópsias neurais'],
    },
    {
      icon: Bone,
      title: 'Patologia Óssea',
      description: 'Diagnóstico especializado de doenças ósseas e articulares.',
      items: ['Tumores ósseos', 'Inflamações', 'Doenças metabólicas'],
    },
  ];

  return (
    <Section id="servicos" background="white" className="relative">
      {/* Isotipo decorativo */}
      <div className="absolute right-0 top-20 w-64 h-64 lg:w-96 lg:h-96 opacity-10 pointer-events-none hidden md:block">
        <Image 
          src="/images/06.png" 
          alt="" 
          fill 
          className="object-contain"
        />
      </div>
      <SectionTitle
        title="Nossos Serviços"
        subtitle="Exames especializados com tecnologia de ponta e olhar humanizado"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {services.map((service) => (
          <Card key={service.title}>
            <div className="w-14 h-14 md:w-16 md:h-16 bg-terracota rounded-xl flex items-center justify-center mb-4">
              <service.icon className="text-white" size={28} />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-terracota mb-3">
              {service.title}
            </h3>
            <p className="text-sm md:text-base text-gray-600 mb-4 leading-relaxed">
              {service.description}
            </p>
            <ul className="space-y-2 mb-4">
              {service.items.map((item) => (
                <li key={item} className="text-gray-700 text-xs md:text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-terracota rounded-full flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <button className="text-terracota font-medium flex items-center gap-2 hover:gap-3 transition-all text-sm md:text-base">
              Saiba mais
              <ArrowRight size={16} />
            </button>
          </Card>
        ))}
      </div>

      <div className="text-center mt-8 md:mt-12 bg-teal text-white p-6 md:p-8 finatti-border">
        <h3 className="text-xl md:text-2xl font-bold mb-3">Não encontrou o exame que procura?</h3>
        <p className="mb-6 text-sm md:text-base">
          Entre em contato conosco. Estamos prontos para atender suas necessidades com agilidade e excelência.
        </p>
        <a
          href="https://wa.me/5544991272027?text=Finatti+Laboratório+de+Patologia+e+Citopatologia"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white text-teal px-5 md:px-6 py-2.5 md:py-3 finatti-border font-medium hover:bg-areia hover:scale-105 transition-all text-sm md:text-base shadow-lg"
        >
          Falar com Especialista
          <ArrowRight size={20} />
        </a>
      </div>
    </Section>
  );
}
