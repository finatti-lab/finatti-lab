'use client';

import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-areia">
      <motion.div
        className="flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Logo animado */}
        <motion.div
          className="w-20 h-20 bg-terracota rounded-2xl flex items-center justify-center shadow-xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span className="text-white font-display text-4xl">F</span>
        </motion.div>

        {/* Texto */}
        <motion.p
          className="text-terracota font-medium"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Carregando...
        </motion.p>

        {/* Barra de progresso */}
        <div className="w-48 h-1 bg-areia-dark rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-terracota to-teal"
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}
