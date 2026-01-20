'use client';

import { ArrowRight, Eye } from 'lucide-react';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background com gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-terracota via-terracota-dark to-teal z-0" />
      <div className="absolute inset-0 pattern-crosses z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 py-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
          <Eye size={18} className="text-white" />
          <span className="text-white font-medium">Seus olhos em cada exame</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Enxergamos o que
          <br />
          <span className="text-areia">outros não veem</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
          Laboratório de patologia em Cianorte-PR. Diagnóstico preciso com propósito, onde cada exame é tratado com credibilidade, agilidade e humanidade.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button href="#contato" variant="primary" className="bg-white text-terracota hover:bg-areia">
            Agendar Exame
            <ArrowRight size={20} />
          </Button>
          <Button href="#sobre" variant="outline" className="border-white text-white hover:bg-white hover:text-terracota">
            Nossa História
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { value: '100%', label: 'Credibilidade' },
            { value: '24h', label: 'Agilidade' },
            { value: '10+', label: 'Anos' },
            { value: '∞', label: 'Humanidade' },
          ].map((stat) => (
            <div key={stat.label} className="text-white">
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
