'use client';

import { motion } from 'framer-motion';
import { 
  Microscope, 
  Stethoscope, 
  Activity, 
  Droplet, 
  Brain, 
  Bone,
  ArrowRight
} from 'lucide-react';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import Button from '../ui/Button';

const services = [
  {
    icon: Microscope,
    title: 'Histopatologia',
    description: 'Análise microscópica de tecidos para diagnóstico preciso de doenças.',
    features: ['Biópsias', 'Peças cirúrgicas', 'Citologia'],
  },
  {
    icon: Stethoscope,
    title: 'Citopatologia',
    description: 'Exame de células para detecção precoce de alterações e doenças.',
    features: ['Papanicolau', 'Punções', 'Líquidos corporais'],
  },
  {
    icon: Activity,
    title: 'Imuno-histoquímica',
    description: 'Técnica avançada para identificação de marcadores específicos.',
    features: ['Oncologia', 'Marcadores tumorais', 'Diagnóstico diferencial'],
  },
  {
    icon: Droplet,
    title: 'Patologia Molecular',
    description: 'Análises genéticas e moleculares para diagnósticos de precisão.',
    features: ['PCR', 'Sequenciamento', 'Mutações genéticas'],
  },
  {
    icon: Brain,
    title: 'Neuropatologia',
    description: 'Especialização em diagnóstico de doenças do sistema nervoso.',
    features: ['Tumores cerebrais', 'Doenças degenerativas', 'Biópsias neurais'],
  },
  {
    icon: Bone,
    title: 'Patologia Óssea',
    description: 'Diagnóstico especializado de doenças ósseas e articulares.',
    features: ['Tumores ósseos', 'Inflamações', 'Doenças metabólicas'],
  },
];

export default function Services() {
  return (
    <Section id="servicos" background="white">
      <SectionTitle
        title="Nossos Serviços"
        subtitle="Exames especializados com tecnologia de ponta e olhar humanizado"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full p-6 group hover:shadow-xl transition-all duration-300">
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-terracota to-teal rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="text-white" size={32} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-display text-terracota mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-dark/70 mb-5 leading-relaxed text-sm">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-5">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-dark/60">
                    <div className="w-1.5 h-1.5 bg-teal rounded-full flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover Arrow */}
              <div className="flex items-center gap-2 text-terracota font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Saiba mais</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        className="bg-gradient-to-br from-terracota to-teal rounded-3xl p-12 text-center text-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-3xl md:text-4xl font-display mb-4">
          Não encontrou o exame que procura?
        </h3>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Entre em contato conosco. Estamos prontos para atender suas necessidades 
          com agilidade e excelência.
        </p>
        <Button 
          variant="outline" 
          size="lg"
          href="#contato"
          className="bg-white text-terracota hover:bg-areia border-white"
        >
          Falar com Especialista
          <ArrowRight size={20} />
        </Button>
      </motion.div>
    </Section>
  );
}
