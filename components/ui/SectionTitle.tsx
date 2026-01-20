interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export default function SectionTitle({ 
  title, 
  subtitle, 
  align = 'center' 
}: SectionTitleProps) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left';

  return (
    <div className={`mb-8 md:mb-12 lg:mb-16 ${alignClass} px-4`}>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-terracota mb-3 md:mb-4 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
