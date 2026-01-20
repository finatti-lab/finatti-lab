'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
}

export default function Button({
  children,
  variant = 'primary',
  href,
  className = '',
  ...props
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300';
  
  const variants = {
    primary: 'bg-terracota text-white hover:bg-terracota-dark',
    secondary: 'bg-teal text-white hover:bg-teal-dark',
    outline: 'border-2 border-terracota text-terracota hover:bg-terracota hover:text-white',
  };

  const buttonClasses = `${baseClasses} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={buttonClasses}>
        {children}
      </a>
    );
  }

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
}
