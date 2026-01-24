'use client';

import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-white finatti-border shadow-md border border-areia-light p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${className}`}>
      {children}
    </div>
  );
}
