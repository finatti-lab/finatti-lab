'use client';

import { motion } from 'framer-motion';
import { Heart, Target, Sparkles } from 'lucide-react';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';

export default function About() {
  return (
    <Section id="sobre" background="white">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle
            title="Nossa História"
            subtitle="Medicina para servir, não para mercantilizar"
            align="left"
          />

          <div className="space-y-6 text-dark/80 leading-relaxed">
            <p className="text-lg">
              A <strong className="text-terracota">Finatti Medicina Diagnóstica</strong> nasceu do sonho de 
              dois profissionais apaixonados pela medicina: <strong>Dra. Izabella Finatti</strong> e <strong>Guilherme</strong>.
            </p>

            <p>
              Fundada em Cianorte-PR, nossa missão vai além de realizar exames. Acreditamos que 
              <strong className="text-teal"> diagnóstico é cuidado</strong>, e cada resultado que entregamos 
              carrega a responsabilidade de impactar vidas.
            </p>

            <p>
              Guiados por <strong>valores cristãos</strong> e pelo compromisso com a excelência, 
              construímos um laboratório onde credibilidade, agilidade e humanidade caminham juntas. 
              Aqui, cada exame recebe nossos olhos atentos, nossa dedicação integral.
            </p>

            <p className="text-lg font-semibold text-terracota italic">
              "Enxergamos o que outros não veem porque olhamos com propósito."
            </p>
          </div>
        </motion.div>

        {/* Right Content - Values Cards */}
        <motion.div
          className="grid gap-6"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {[
            {
              icon: Heart,
              title: 'Humanidade',
              description: 'Cada exame representa uma vida, uma história. Tratamos com o cuidado que você merece.',
            },
            {
              icon: Target,
              title: 'Precisão com Propósito',
              description: 'Tecnologia de ponta aliada à expertise médica para diagnósticos assertivos.',
            },
            {
              icon: Sparkles,
              title: 'Valores Cristãos',
              description: 'Nossa fé nos guia a servir com integridade, amor e excelência em tudo que fazemos.',
            },
          ].map((value, index) => (
            <motion.div
              key={index}
              className="bg-areia/30 rounded-2xl p-6 border border-areia hover:border-terracota transition-all duration-300"
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(224, 205, 186, 0.5)' }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-terracota rounded-xl flex items-center justify-center flex-shrink-0">
                  <value.icon className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-display text-terracota mb-2">
                    {value.title}
                  </h3>
                  <p className="text-dark/70">
                    {value.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
