'use client';

import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';

const team = [
  {
    name: 'Dra. Izabella Finatti',
    role: 'Médica Patologista | Cofundadora',
    bio: 'Especialista em patologia com anos de experiência em diagnóstico. Apaixonada por medicina de precisão e pelo cuidado humanizado.',
    image: '/team/izabella.jpg', // Placeholder - será substituído
    linkedin: '#',
    email: 'izabella@finatti.com.br',
  },
  {
    name: 'Guilherme Finatti',
    role: 'Gestor | Cofundador',
    bio: 'Responsável pela gestão estratégica e operacional. Comprometido em levar medicina diagnóstica de excelência a todos.',
    image: '/team/guilherme.jpg', // Placeholder - será substituído
    linkedin: '#',
    email: 'guilherme@finatti.com.br',
  },
];

export default function Team() {
  return (
    <Section id="equipe" background="areia">
      <SectionTitle
        title="Nossa Equipe"
        subtitle="Conheça os fundadores que tornaram esse sonho realidade"
      />

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {team.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <Card className="overflow-hidden">
              {/* Image */}
              <div className="relative h-80 bg-gradient-to-br from-terracota/20 to-teal/20 flex items-center justify-center">
                {/* Placeholder para foto - será substituído por imagem real */}
                <div className="w-32 h-32 bg-terracota rounded-full flex items-center justify-center">
                  <span className="text-6xl text-white font-display">
                    {member.name.charAt(0)}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-display text-terracota mb-2">
                  {member.name}
                </h3>
                <p className="text-teal font-semibold mb-4">
                  {member.role}
                </p>
                <p className="text-dark/70 leading-relaxed mb-6">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex items-center gap-4">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-areia hover:bg-terracota rounded-lg flex items-center justify-center transition-colors group"
                  >
                    <Linkedin size={20} className="text-terracota group-hover:text-white" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="w-10 h-10 bg-areia hover:bg-teal rounded-lg flex items-center justify-center transition-colors group"
                  >
                    <Mail size={20} className="text-teal group-hover:text-white" />
                  </a>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Team Values */}
      <motion.div
        className="mt-16 text-center max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <p className="text-xl text-dark/80 leading-relaxed italic">
            "Juntos, construímos um laboratório onde cada exame é tratado com a seriedade 
            e o cuidado que uma vida merece. Nossa missão é servir com excelência, 
            guiados pela fé e pelo compromisso com a verdade."
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="w-12 h-1 bg-gradient-to-r from-terracota to-teal rounded-full" />
            <span className="text-terracota font-display text-lg">Finatti</span>
            <div className="w-12 h-1 bg-gradient-to-r from-teal to-terracota rounded-full" />
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
