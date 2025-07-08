import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  href?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  href,
}) => {
  const baseClasses = 'rounded-full font-light transition-all duration-500 inline-flex items-center justify-center tracking-wide';
  
  const variantClasses = {
    primary: 'bg-black hover:bg-black/80 text-white border border-black',
    secondary: 'bg-white/10 hover:bg-white/20 border border-white/30 text-black backdrop-blur-sm',
    outline: 'bg-transparent border border-black/30 text-black hover:bg-black/5 hover:border-black/50',
  };
  
  const sizeClasses = {
    sm: 'text-xs py-2 px-6 tracking-wider',
    md: 'text-sm py-3 px-8 tracking-wider',
    lg: 'text-base py-4 px-12 tracking-widest',
  };
  
  const allClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  if (href) {
    return (
      <a href={href} className={allClasses}>
        {children}
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={allClasses}>
      {children}
    </button>
  );
};

export default Button;