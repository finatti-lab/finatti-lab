'use client';

import { ReactNode } from 'react';
import { motion, MotionProps } from 'framer-motion';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  href,
  className = '',
  disabled = false,
  type = 'button',
  onClick,
}: ButtonProps) {
  const baseStyles = "font-semibold rounded-lg transition-all duration-300 inline-flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-terracota hover:bg-terracota-dark text-white shadow-lg hover:shadow-xl",
    secondary: "bg-teal hover:bg-teal-dark text-white shadow-lg hover:shadow-xl",
    outline: "border-2 border-terracota text-terracota hover:bg-terracota hover:text-white",
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const motionProps: MotionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        className={buttonClasses}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={buttonClasses}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
