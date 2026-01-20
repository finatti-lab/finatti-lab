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
      className={`py-20 md:py-28 px-4 md:px-8 ${backgrounds[background]} ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
}
