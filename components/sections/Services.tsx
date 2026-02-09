'use client';

import { Microscope, FileText, Dna, TestTube, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Microscope,
      title: 'Histopatologia',
      items: [
        'Histopatológico',
        'Biópsias',
        'Peças cirúrgicas',
      ],
    },
    {
      icon: FileText,
      title: 'Citopatologia',
      items: [
        'Citologia oncótica',
        'Exame colpocitológico',
        'Líquidos cavitários',
        'Secreções e raspados',
      ],
    },
    {
      icon: TestTube,
      title: 'Imuno-histoquímica',
      items: [
        'Exame imuno-histoquímico',
        'Imunofluorescência direta',
        'Colorações específicas',
        'Hibridização in situ',
      ],
    },
    {
      icon: Dna,
      title: 'Patologia Molecular',
      items: [
        'PCR em doenças infecciosas',
        'Sequenciamento direto',
        'Análises moleculares',
      ],
    },
  ];

  return (
    <section id="servicos" className="py-12 lg:py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-8 lg:mb-16">
          <h2 className="text-2xl lg:text-5xl font-bold text-terracota mb-4">
            Nossos Serviços
          </h2>
          <p className="text-base lg:text-xl text-stone-600 max-w-2xl mx-auto">
            Exames especializados com tecnologia de ponta
          </p>
        </div>

        {/* MOBILE: Lista vertical compacta */}
        <div className="space-y-4 lg:hidden">
          {services.map((service) => (
            <div key={service.title} className="bg-areia/30 border border-areia hover:border-terracota rounded-tl-xl rounded-br-xl p-4 transition-all">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-12 h-12 bg-terracota/10 rounded-tl-lg rounded-br-lg flex items-center justify-center flex-shrink-0">
                  <service.icon className="w-6 h-6 text-terracota" />
                </div>
                <h3 className="font-bold text-terracota text-base">{service.title}</h3>
              </div>
              <ul className="space-y-1.5 pl-1">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-stone-600 text-sm">
                    <span className="w-1.5 h-1.5 bg-teal rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* DESKTOP: Grid 2 colunas com cards maiores */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-6">
          {services.map((service) => (
            <div 
              key={service.title} 
              className="group bg-areia/30 border-2 border-areia hover:border-terracota rounded-tl-3xl rounded-br-3xl p-8 transition-all hover:shadow-lg"
            >
              {/* Ícone grande */}
              <div className="w-16 h-16 bg-terracota/10 rounded-tl-xl rounded-br-xl flex items-center justify-center mb-4 group-hover:bg-terracota/20 transition-colors">
                <service.icon className="w-8 h-8 text-terracota" />
              </div>
              
              <h3 className="text-2xl font-bold text-terracota mb-4">{service.title}</h3>
              
              {/* Lista de exames */}
              <ul className="space-y-2.5 mb-6">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-stone-600">
                    <span className="w-1.5 h-1.5 bg-teal rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              
              <a 
                href="#contato" 
                className="inline-flex items-center gap-2 text-terracota font-medium group-hover:gap-3 transition-all"
              >
                Saiba mais <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
