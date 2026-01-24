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
    <section id="diferenciais" className="bg-terracota py-16 md:py-24 relative overflow-hidden">
      {/* Pattern de fundo muito sutil */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'url(/images/20.png)',
          backgroundRepeat: 'repeat',
          backgroundSize: '150px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <h2 className="text-white text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Nossos Diferenciais
        </h2>
        <p className="text-white/80 text-center text-lg mb-12 md:mb-16 max-w-2xl mx-auto">
          Os pilares que sustentam nossa excelência em medicina diagnóstica
        </p>
        
        {/* Bento Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {/* Card GRANDE - Credibilidade com imagem */}
          <div className="col-span-2 row-span-2 bg-white rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-none rounded-bl-none overflow-hidden group hover:shadow-2xl transition-all">
            <div className="relative h-48 md:h-64 overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&q=80" 
                alt="Microscópio"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-terracota/90 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <Shield className="text-white mb-2" size={40} />
              </div>
            </div>
            <div className="p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-terracota mb-3">
                Credibilidade
              </h3>
              <p className="text-stone-600 leading-relaxed">
                Resultados confiáveis que médicos e pacientes podem confiar plenamente. Nossa reputação é construída sobre precisão e excelência.
              </p>
            </div>
          </div>
          
          {/* Cards menores */}
          {differentials.slice(1).map((item) => (
            <div key={item.title} className="bg-white rounded-tl-[2rem] rounded-br-[2rem] rounded-tr-none rounded-bl-none p-5 md:p-6 hover:shadow-xl hover:-translate-y-2 transition-all group">
              <div className="w-12 h-12 bg-teal rounded-tl-xl rounded-br-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <item.icon className="text-white" size={24} />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-teal mb-2">
                {item.title}
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16 max-w-3xl mx-auto">
          <p className="text-white text-xl md:text-2xl font-semibold mb-3">
            Precisão com propósito. Diagnóstico é cuidado.
          </p>
          <p className="text-white/80 text-base md:text-lg">
            Cada um desses valores se reflete em nosso trabalho diário, garantindo que você receba não apenas um resultado, mas um cuidado completo.
          </p>
        </div>
      </div>
    </section>
  );
}
