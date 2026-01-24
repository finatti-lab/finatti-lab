'use client';

import { Microscope, FileText, Activity, Dna, Brain, Bone } from 'lucide-react';
import Image from 'next/image';

export default function Services() {
  const services = [
    {
      icon: Microscope,
      title: 'Histopatologia',
      description: 'Análise microscópica de tecidos para diagnóstico preciso de doenças.',
      items: ['Biópsias', 'Peças cirúrgicas', 'Citologia'],
      image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&q=80',
    },
    {
      icon: FileText,
      title: 'Citopatologia',
      description: 'Exame de células para detecção precoce de alterações e doenças.',
      items: ['Papanicolau', 'Punções', 'Líquidos corporais'],
      image: 'https://images.unsplash.com/photo-1578496781985-452d4a934d50?w=400&q=80',
    },
    {
      icon: Activity,
      title: 'Imuno-histoquímica',
      description: 'Técnica avançada para identificação de marcadores específicos.',
      items: ['Oncologia', 'Marcadores tumorais', 'Diagnóstico diferencial'],
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&q=80',
    },
    {
      icon: Dna,
      title: 'Patologia Molecular',
      description: 'Análises genéticas e moleculares para diagnósticos de precisão.',
      items: ['PCR', 'Sequenciamento', 'Mutações genéticas'],
      image: 'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=400&q=80',
    },
    {
      icon: Brain,
      title: 'Neuropatologia',
      description: 'Especialização em diagnóstico de doenças do sistema nervoso.',
      items: ['Tumores cerebrais', 'Doenças degenerativas', 'Biópsias neurais'],
      image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&q=80',
    },
    {
      icon: Bone,
      title: 'Patologia Óssea',
      description: 'Diagnóstico especializado de doenças ósseas e articulares.',
      items: ['Tumores ósseos', 'Inflamações', 'Doenças metabólicas'],
      image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=400&q=80',
    },
  ];

  return (
    <section id="servicos" className="bg-areia/30 py-12 lg:py-24 relative overflow-hidden">
      <div className="absolute right-0 top-20 w-96 h-96 opacity-10 pointer-events-none hidden lg:block">
        <Image src="/images/06.png" alt="" fill className="object-contain" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-8 lg:mb-16">
          <h2 className="text-2xl lg:text-5xl font-bold text-terracota mb-4">
            Nossos Serviços
          </h2>
          <p className="text-base lg:text-xl text-stone-600 max-w-2xl mx-auto">
            Exames especializados com tecnologia de ponta e olhar humanizado
          </p>
        </div>

        {/* MOBILE: Lista vertical compacta */}
        <div className="space-y-4 lg:hidden">
          {services.map((service) => (
            <div key={service.title} className="bg-white rounded-tl-xl rounded-br-xl overflow-hidden flex shadow-md">
              <div className="w-24 h-24 relative flex-shrink-0">
                <Image src={service.image} alt={service.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-terracota/60 flex items-center justify-center">
                  <service.icon className="text-white" size={24} />
                </div>
              </div>
              <div className="p-4 flex-1">
                <h3 className="font-bold text-terracota mb-1 text-sm">{service.title}</h3>
                <p className="text-xs text-stone-600 line-clamp-2">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* DESKTOP: Grid com cards elaborados */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.title} 
              className="group relative overflow-hidden rounded-tl-[3rem] rounded-br-[3rem] cursor-pointer bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-56 overflow-hidden">
                <Image 
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-terracota/90 via-terracota/50 to-transparent" />
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-tl-xl rounded-br-xl flex items-center justify-center">
                  <service.icon className="text-white" size={24} />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-terracota mb-3 group-hover:text-teal transition-colors">
                  {service.title}
                </h3>
                <p className="text-stone-600 mb-4 leading-relaxed text-base">
                  {service.description}
                </p>
                
                <ul className="space-y-2 opacity-70 group-hover:opacity-100 transition-opacity">
                  {service.items.map((item) => (
                    <li key={item} className="text-sm text-stone-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-terracota rounded-full flex-shrink-0" />
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
