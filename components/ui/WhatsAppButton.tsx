'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);
  const whatsappNumber = '5544999999999'; // Atualizar com número real
  const message = 'Olá! Gostaria de mais informações sobre os serviços da Finatti.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal to-teal-dark rounded-full shadow-2xl hover:shadow-3xl transition-shadow group"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Pulse Animation */}
        <motion.div
          className="absolute inset-0 bg-teal rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Icon */}
        <MessageCircle className="text-white relative z-10" size={28} />

        {/* Tooltip */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute right-full mr-4 whitespace-nowrap bg-dark text-white px-4 py-2 rounded-lg shadow-xl"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-sm font-medium">Fale conosco no WhatsApp</span>
              {/* Arrow */}
              <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-dark rotate-45" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.a>
    </motion.div>
  );
}
