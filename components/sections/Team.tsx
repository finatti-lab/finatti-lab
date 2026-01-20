'use client';

import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';

const team = [
  {
    name: 'Dra. Izabella Finatti',
    role: 'Médica Patologista | Cofundadora',
    bio: 'Especialista em patologia com anos de experiência em diagnóstico. Apaixonada por medicina de precisão e pelo cuidado humanizado.',
    linkedin: '#',
    email: 'izabella@finatti.com.br',
  },
  {
    name: 'Guilherme Finatti',
    role: 'Gestor | Cofundador',
    bio: 'Responsável pela gestão estratégica e operacional. Comprometido em levar medicina diagnóstica de excelência a todos.',
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
        {team.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white rounded-2xl p-6 border-l-4 border-terracota shadow-md hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-2xl font-display text-terracota mb-2">
              {member.name}
            </h3>
            <p className="text-teal font-semibold mb-4 text-sm">
              {member.role}
            </p>
            <p className="text-dark/70 leading-relaxed mb-6">
              {member.bio}
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {member.linkedin !== '#' && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-terracota hover:text-terracota-dark transition-colors"
                >
                  <Linkedin size={18} />
                  <span>LinkedIn</span>
                </a>
              )}
              <a
                href={`mailto:${member.email}`}
                className="flex items-center gap-2 text-sm text-teal hover:text-teal-dark transition-colors"
              >
                <Mail size={18} />
                <span>Email</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Team Values */}
      <motion.div
        className="text-center max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <p className="text-lg md:text-xl text-dark/80 leading-relaxed italic">
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
