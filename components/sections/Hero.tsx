'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Eye } from 'lucide-react';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden w-full">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-terracota/90 via-terracota/80 to-teal/70 z-10" />
        <div className="absolute inset-0 pattern-crosses opacity-20 z-20" />
        {/* Placeholder para imagem de fundo - será substituída por imagem real */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-dark to-terracota-dark opacity-50" />
      </div>

      {/* Content */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 md:px-8 py-32 text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 text-sm md:text-base"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Eye size={18} className="text-white" />
            <span className="text-white font-medium">Seus olhos em cada exame</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-3xl md:text-5xl lg:text-7xl font-display text-white mb-4 md:mb-6 leading-tight px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Enxergamos o que
            <br />
            <span className="text-areia">outros não veem</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-base md:text-xl lg:text-2xl text-white/90 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Laboratório de patologia em Cianorte-PR. Diagnóstico preciso com propósito,
            onde cada exame é tratado com credibilidade, agilidade e humanidade.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 md:gap-4 px-4 max-w-md sm:max-w-none mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <Button variant="primary" size="lg" href="#contato" className="w-full sm:w-auto">
              Agendar Exame
              <ArrowRight size={20} />
            </Button>
            <Button variant="outline" size="lg" href="#sobre" className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-terracota">
              Nossa História
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-12 md:mt-20 pt-8 md:pt-12 border-t border-white/20 px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            {[
              { value: '100%', label: 'Credibilidade' },
              { value: '24h', label: 'Agilidade' },
              { value: '10+', label: 'Anos' },
              { value: '∞', label: 'Humanidade' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl lg:text-5xl font-display text-white mb-1 md:mb-2">
                  {stat.value}
                </div>
                <div className="text-white/80 text-xs md:text-sm lg:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.3, repeat: Infinity, repeatType: 'reverse' }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-white rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
