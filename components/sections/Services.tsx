'use client';

import { Microscope, FileText, Dna, TestTube, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Services() {
  const services = [
    {
      icon: Microscope,
      title: 'Histopatologia',
      image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&q=80',
      items: [
        'Histopatológico',
        'Biópsias',
        'Peças cirúrgicas',
      ],
    },
    {
      icon: FileText,
      title: 'Citopatologia',
      image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600&q=80',
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
      image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&q=80',
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
      image: 'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=600&q=80',
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

        {/* MOBILE: Cards com imagens */}
        <div className="space-y-4 lg:hidden">
          {services.map((service) => (
            <div key={service.title} className="bg-white border border-areia hover:border-terracota rounded-tl-2xl rounded-br-2xl overflow-hidden transition-all hover:shadow-lg group">
              {/* Imagem no topo */}
              <div className="h-32 relative overflow-hidden">
                <Image 
                  src={service.image} 
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-terracota/20 to-transparent" />
              </div>
              
              {/* Conteúdo */}
              <div className="p-4">
                <h3 className="text-lg font-bold text-terracota mb-3">{service.title}</h3>
                <ul className="space-y-1.5">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-stone-600 text-sm">
                      <span className="w-1.5 h-1.5 bg-teal rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* DESKTOP: Grid 2 colunas com imagens */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-6">
          {services.map((service) => (
            <div 
              key={service.title} 
              className="group bg-white border border-areia hover:border-terracota rounded-tl-3xl rounded-br-3xl overflow-hidden transition-all hover:shadow-lg"
            >
              {/* Imagem no topo */}
              <div className="h-40 relative overflow-hidden">
                <Image 
                  src={service.image} 
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-terracota/20 to-transparent" />
              </div>
              
              {/* Conteúdo */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-terracota mb-3">{service.title}</h3>
                
                {/* Lista de exames */}
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-stone-600 text-sm">
                      <span className="w-1.5 h-1.5 bg-teal rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
