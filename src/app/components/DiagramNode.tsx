interface DiagramNodeProps {
  label: string;
  sublabel?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function DiagramNode({ label, sublabel, size = 'md', className = '' }: DiagramNodeProps) {
  const sizeClasses = {
    sm: 'w-20 h-20 md:w-24 md:h-24',
    md: 'w-24 h-24 md:w-32 md:h-32',
    lg: 'w-28 h-28 md:w-40 md:h-40'
  };

  return (
    <div className={`flex flex-col items-center gap-2 md:gap-3 ${className}`}>
      <div 
        className={`${sizeClasses[size]} rounded-full border-2 flex items-center justify-center`}
        style={{ 
          borderColor: 'var(--muted-gold)',
          backgroundColor: 'rgba(184, 166, 106, 0.1)'
        }}
      >
        <span className="text-sm md:text-base text-center px-2" style={{ color: 'var(--muted-gold)' }}>
          {label}
        </span>
      </div>
      {sublabel && (
        <span className="text-sm md:text-lg text-center" style={{ color: 'var(--ivory)' }}>
          {sublabel}
        </span>
      )}
    </div>
  );
}
