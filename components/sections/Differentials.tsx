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
    <section id="diferenciais" className="bg-terracota py-12 md:py-16 lg:py-24 relative overflow-hidden">
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
        <h2 className="text-white text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
          Nossos Diferenciais
        </h2>
        <p className="text-white/80 text-center text-base md:text-lg mb-8 md:mb-12 lg:mb-16 max-w-2xl mx-auto px-4">
          Os pilares que sustentam nossa excelência em medicina diagnóstica
        </p>
        
        {/* Bento Grid - Ajustado para mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
          {/* Card GRANDE - Credibilidade com imagem */}
          <div className="sm:col-span-2 sm:row-span-2 bg-white rounded-tl-[2rem] md:rounded-tl-[3rem] rounded-br-[2rem] md:rounded-br-[3rem] rounded-tr-none rounded-bl-none overflow-hidden group hover:shadow-2xl transition-all">
            <div className="relative h-40 sm:h-48 md:h-64 overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&q=80" 
                alt="Microscópio"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-terracota/90 to-transparent" />
              <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 right-3 md:right-4">
                <Shield className="text-white mb-2" size={32} />
              </div>
            </div>
            <div className="p-5 md:p-6 lg:p-8">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-terracota mb-2 md:mb-3">
                Credibilidade
              </h3>
              <p className="text-sm md:text-base text-stone-600 leading-relaxed">
                Resultados confiáveis que médicos e pacientes podem confiar plenamente. Nossa reputação é construída sobre precisão e excelência.
              </p>
            </div>
          </div>
          
          {/* Cards menores */}
          {differentials.slice(1).map((item) => (
            <div key={item.title} className="bg-white rounded-tl-[1.5rem] md:rounded-tl-[2rem] rounded-br-[1.5rem] md:rounded-br-[2rem] rounded-tr-none rounded-bl-none p-4 md:p-5 lg:p-6 hover:shadow-xl hover:-translate-y-2 transition-all group">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-teal rounded-tl-xl rounded-br-xl flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                <item.icon className="text-white" size={20} />
              </div>
              <h3 className="text-base md:text-lg lg:text-xl font-bold text-teal mb-2">
                {item.title}
              </h3>
              <p className="text-stone-600 text-xs md:text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12 lg:mt-16 max-w-3xl mx-auto px-4">
          <p className="text-white text-lg md:text-xl lg:text-2xl font-semibold mb-2 md:mb-3">
            Precisão com propósito. Diagnóstico é cuidado.
          </p>
          <p className="text-white/80 text-sm md:text-base lg:text-lg">
            Cada um desses valores se reflete em nosso trabalho diário, garantindo que você receba não apenas um resultado, mas um cuidado completo.
          </p>
        </div>
      </div>
    </section>
  );
}
