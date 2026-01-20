'use client';

import { motion } from 'framer-motion';
import { 
  Shield, 
  Zap, 
  Lightbulb, 
  Users, 
  FolderKanban, 
  Award, 
  Heart, 
  HandHeart 
} from 'lucide-react';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';

const differentials = [
  {
    icon: Shield,
    title: 'Credibilidade',
    description: 'Resultados confiáveis que médicos e pacientes podem confiar plenamente.',
    color: 'from-terracota to-terracota-dark',
  },
  {
    icon: Zap,
    title: 'Agilidade',
    description: 'Laudos rápidos sem comprometer a qualidade. Seu tempo é valioso.',
    color: 'from-teal to-teal-dark',
  },
  {
    icon: Lightbulb,
    title: 'Inovação',
    description: 'Tecnologia de ponta e métodos atualizados para diagnósticos precisos.',
    color: 'from-terracota-light to-terracota',
  },
  {
    icon: Users,
    title: 'Acessibilidade',
    description: 'Medicina diagnóstica de qualidade ao alcance de todos.',
    color: 'from-teal-light to-teal',
  },
  {
    icon: FolderKanban,
    title: 'Organização',
    description: 'Processos estruturados para garantir eficiência em cada etapa.',
    color: 'from-terracota to-teal',
  },
  {
    icon: Award,
    title: 'Disciplina',
    description: 'Rigor técnico e científico em todos os nossos procedimentos.',
    color: 'from-teal to-terracota',
  },
  {
    icon: Heart,
    title: 'Humanidade',
    description: 'Cada exame é tratado com empatia, cuidado e atenção individual.',
    color: 'from-terracota-dark to-terracota',
  },
  {
    icon: HandHeart,
    title: 'Serviço',
    description: 'Medicina feita para servir pessoas, não para mercantilizar vidas.',
    color: 'from-teal-dark to-teal',
  },
];

export default function Differentials() {
  return (
    <Section id="diferenciais" background="pattern">
      <SectionTitle
        title="Nossos Diferenciais"
        subtitle="Os 8 pilares que sustentam nossa excelência em medicina diagnóstica"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {differentials.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col items-center text-center h-full">
                {/* Icon with Gradient Background */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 shadow-md`}>
                  <item.icon className="text-white" size={28} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-display text-terracota mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-dark/70 leading-relaxed flex-grow">
                  {item.description}
                </p>

                {/* Decorative Element */}
                <div className="mt-4 w-10 h-0.5 bg-gradient-to-r from-terracota to-teal rounded-full" />
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        className="mt-12 md:mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <p className="text-xl md:text-2xl font-display text-teal mb-3 md:mb-4">
          Precisão com propósito. Diagnóstico é cuidado.
        </p>
        <p className="text-sm md:text-base text-dark/60 max-w-2xl mx-auto px-4">
          Cada um desses valores se reflete em nosso trabalho diário, 
          garantindo que você receba não apenas um resultado, mas um cuidado completo.
        </p>
      </motion.div>
    </Section>
  );
}
