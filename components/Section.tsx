import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  glass?: boolean;
}

export const Section: React.FC<SectionProps> = ({ children, className = '', id, glass = false }) => {
  return (
    <section id={id} className={`py-10 md:py-22 px-6 md:px-12 relative overflow-hidden ${glass ? 'bg-white/[0.02] backdrop-blur-sm border-y border-white/5' : ''} ${className}`}>
      <div className="max-w-6xl mx-auto relative z-10">
        {children}
      </div>
    </section>
  );
};