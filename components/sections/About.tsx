'use client';

import { Heart, Target, Sparkles } from 'lucide-react';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';

export default function About() {
  return (
    <Section id="sobre" background="white">
      <SectionTitle
        title="Nossa História"
        subtitle="Medicina para servir, não para mercantilizar"
      />

      <div className="max-w-4xl mx-auto">
        <div className="space-y-4 md:space-y-6 text-gray-700 text-base md:text-lg leading-relaxed text-center mb-8 md:mb-12 px-2">
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

          <p className="text-lg md:text-xl font-semibold text-terracota italic pt-2 md:pt-4">
            "Enxergamos o que outros não veem porque olhamos com propósito."
          </p>
        </div>

        {/* Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto">
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
            <div key={value.title} className="bg-areia/30 rounded-xl p-5 md:p-6 border border-areia hover:border-terracota transition-all text-center">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-terracota rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                <value.icon className="text-white" size={24} />
              </div>
              <h3 className="text-base md:text-lg font-bold text-terracota mb-2">
                {value.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
