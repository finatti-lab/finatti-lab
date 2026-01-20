'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  children: ReactNode;
  background?: 'white' | 'areia' | 'pattern';
  className?: string;
}

export default function Section({ id, children, background = 'white', className = '' }: SectionProps) {
  const backgroundClasses = {
    white: 'bg-white',
    areia: 'bg-areia',
    pattern: 'bg-areia relative overflow-hidden',
  };

  return (
    <section id={id} className={`relative w-full ${backgroundClasses[background]} ${className}`}>
      {background === 'pattern' && (
        <div className="absolute inset-0 pattern-crosses z-0" />
      )}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20 w-full"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.div>
    </section>
  );
}
