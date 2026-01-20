import { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  background?: 'white' | 'areia' | 'pattern';
}

export default function Section({ 
  id, 
  children, 
  className = '', 
  background = 'white' 
}: SectionProps) {
  const backgrounds = {
    white: 'bg-white',
    areia: 'bg-areia',
    pattern: 'bg-areia pattern-crosses',
  };

  return (
    <section 
      id={id} 
      className={`py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 w-full ${backgrounds[background]} ${className}`}
    >
      <div className="max-w-7xl mx-auto w-full">
        {children}
      </div>
    </section>
  );
}
