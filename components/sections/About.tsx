'use client';

import { motion } from 'framer-motion';
import { Heart, Target, Sparkles } from 'lucide-react';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';

export default function About() {
  return (
    <Section id="sobre" background="white">
      <SectionTitle
        title="Nossa História"
        subtitle="Medicina para servir, não para mercantilizar"
        align="center"
      />

      <div className="max-w-4xl mx-auto">
        <motion.div
          className="space-y-6 text-dark/80 leading-relaxed text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
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

          <p className="text-xl font-semibold text-terracota italic pt-4">
            "Enxergamos o que outros não veem porque olhamos com propósito."
          </p>
        </motion.div>

        {/* Values Cards */}
        <div className="grid md:grid-cols-3 gap-6">
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
              className="bg-areia/30 rounded-2xl p-6 border border-areia hover:border-terracota transition-all duration-300 hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-terracota rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="text-white" size={28} />
                </div>
                <h3 className="text-lg font-display text-terracota mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-dark/70">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
