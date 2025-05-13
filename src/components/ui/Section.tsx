import React from 'react';

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  fullHeight?: boolean;
};

const Section: React.FC<SectionProps> = ({
  id,
  children,
  className = '',
  fullHeight = false,
}) => {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${fullHeight ? 'min-h-screen flex items-center' : ''} ${className}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        {children}
      </div>
    </section>
  );
};

export default Section;