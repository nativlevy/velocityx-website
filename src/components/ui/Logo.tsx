import React from 'react';

interface LogoProps {
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ showText = true, size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-7 h-7',
    md: 'w-8 h-8 md:w-10 md:h-10',
    lg: 'w-12 h-12'
  };

  return (
    <div className="flex items-center space-x-2">
      <div className={`${sizeClasses[size]} flex items-center justify-center`}>
        <div className="w-full h-full rounded-full overflow-hidden">
          <img 
            src="/images/logo.png" 
            alt="Velocity X Logo" 
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      
      {showText && (
        <div className="text-black font-light tracking-wider text-lg md:text-xl">
          Velocity<sup>x</sup>
        </div>
      )}
    </div>
  );
};

export default Logo; 