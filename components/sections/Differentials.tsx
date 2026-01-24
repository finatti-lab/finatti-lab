'use client';

import { Shield, Zap, Lightbulb, Users, Layout, Award, Heart, Briefcase } from 'lucide-react';
import Image from 'next/image';

export default function Differentials() {
  const differentials = [
    {
      icon: Shield,
      title: 'Credibilidade',
      description: 'Resultados confiáveis que médicos e pacientes podem confiar plenamente.',
      featured: true,
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
  ];

  return (
    <section id="diferenciais" className="bg-terracota py-12 lg:py-24 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'url(/images/20.png)',
          backgroundRepeat: 'repeat',
          backgroundSize: '150px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <h2 className="text-white text-center text-2xl lg:text-5xl font-bold mb-4">
          Nossos Diferenciais
        </h2>
        <p className="text-white/80 text-center text-base lg:text-lg mb-8 lg:mb-16 max-w-2xl mx-auto">
          Os pilares que sustentam nossa excelência em medicina diagnóstica
        </p>
        
        {/* MOBILE: Grid simples 2 colunas */}
        <div className="grid grid-cols-2 gap-3 lg:hidden">
          {differentials.map((item) => (
            <div key={item.title} className="bg-white/95 p-4 rounded-tl-xl rounded-br-xl">
              <div className="w-10 h-10 bg-terracota/10 rounded-lg flex items-center justify-center mb-2">
                <item.icon className="w-5 h-5 text-terracota" />
              </div>
              <h3 className="font-bold text-sm text-terracota mb-1">{item.title}</h3>
              <p className="text-xs text-stone-600 line-clamp-2">{item.description}</p>
            </div>
          ))}
        </div>

        {/* DESKTOP: Bento Grid original */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6">
          <div className="col-span-2 row-span-2 bg-white rounded-tl-[3rem] rounded-br-[3rem] overflow-hidden group hover:shadow-2xl transition-all">
            <div className="relative h-64 overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&q=80" 
                alt="Microscópio"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-terracota/90 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <Shield className="text-white mb-2" size={40} />
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-3xl font-bold text-terracota mb-3">Credibilidade</h3>
              <p className="text-base text-stone-600 leading-relaxed">
                Resultados confiáveis que médicos e pacientes podem confiar plenamente. Nossa reputação é construída sobre precisão e excelência.
              </p>
            </div>
          </div>
          
          {differentials.slice(1).map((item) => (
            <div key={item.title} className="bg-white rounded-tl-[2rem] rounded-br-[2rem] p-6 hover:shadow-xl hover:-translate-y-2 transition-all group">
              <div className="w-12 h-12 bg-teal rounded-tl-xl rounded-br-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <item.icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-teal mb-2">{item.title}</h3>
              <p className="text-stone-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 lg:mt-16 max-w-3xl mx-auto">
          <p className="text-white text-lg lg:text-2xl font-semibold mb-3">
            Precisão com propósito. Diagnóstico é cuidado.
          </p>
          <p className="text-white/80 text-sm lg:text-lg">
            Cada um desses valores se reflete em nosso trabalho diário, garantindo que você receba não apenas um resultado, mas um cuidado completo.
          </p>
        </div>
      </div>
    </section>
  );
}
