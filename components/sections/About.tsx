'use client';

import { Heart, Target } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  return (
    <section id="sobre" className="bg-white py-12 md:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Layout Editorial - Imagem + Texto */}
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Imagem GRANDE à esquerda */}
          <div className="relative h-[350px] sm:h-[400px] md:h-[500px] lg:h-[700px]">
            <Image 
              src="/images/dra-izabella.jpeg" 
              alt="Dra. Izabella Novo Finatti"
              fill 
              className="object-cover object-[center_20%] lg:rounded-tr-[5rem] lg:rounded-bl-[5rem]"
            />
          </div>
          
          {/* Texto editorial à direita */}
          <div className="bg-areia p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center relative">
            {/* Linha vertical decorativa */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-terracota hidden lg:block" />
            
            <span className="text-terracota font-semibold text-xs md:text-sm uppercase tracking-wider mb-3 md:mb-4">Nossa História</span>
            <h2 className="font-mefta text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 mb-4 md:mb-6 leading-tight">
              Medicina para servir, não para mercantilizar
            </h2>
            
            <div className="space-y-3 md:space-y-4 text-stone-700 text-sm md:text-base lg:text-lg leading-relaxed mb-6 md:mb-8">
              <p>
                A <strong className="text-terracota">Finatti Medicina Diagnóstica</strong> nasceu do sonho de 
                dois profissionais apaixonados pela medicina: <strong>Dra. Izabella Novo Finatti</strong> e <strong>Guilherme Cerci</strong>.
              </p>

              <p>
                Fundada em Cianorte-PR, nossa missão vai além de realizar exames. Acreditamos que 
                <strong className="text-teal"> diagnóstico é cuidado</strong>, e cada resultado que entregamos 
                carrega a responsabilidade de impactar vidas.
              </p>

              <p>
                Guiados pelo compromisso com a excelência e pela ética profissional, 
                construímos um laboratório onde credibilidade, agilidade e humanidade caminham juntas.
              </p>
            </div>
            
            {/* Citação destacada com aspas grandes */}
            <blockquote className="border-l-4 border-terracota pl-4 md:pl-6 relative">
              <span className="absolute -left-2 -top-3 md:-top-4 text-5xl md:text-6xl text-terracota/20 font-serif">"</span>
              <p className="text-lg md:text-xl lg:text-2xl italic text-terracota font-medium leading-relaxed">
                Enxergamos o que outros não veem porque olhamos com propósito.
              </p>
            </blockquote>
          </div>
        </div>

        {/* Values Cards - Embaixo em layout horizontal */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto mt-8 md:mt-12 lg:mt-16 px-4 md:px-8">
          {[
            {
              icon: Heart,
              title: 'Humanidade',
              description: 'Cada exame representa uma vida. Tratamos com o cuidado que você merece.',
            },
            {
              icon: Target,
              title: 'Precisão com Propósito',
              description: 'Tecnologia aliada à expertise médica para diagnósticos assertivos.',
            },
          ].map((value) => (
            <div key={value.title} className="bg-white border-2 border-areia finatti-border p-5 md:p-6 lg:p-8 hover:border-terracota hover:shadow-lg transition-all group">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-terracota finatti-border-alt flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <value.icon className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-terracota mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm md:text-base text-stone-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
