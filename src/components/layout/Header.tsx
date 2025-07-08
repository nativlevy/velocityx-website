import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../ui/Logo';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-sm py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Empty space for balance */}
        <div className="w-8"></div>

        {/* Hamburger menu navigation */}
        <div className="flex items-center">
          <button
            className={`p-3 rounded-lg transition-all duration-300 group hover:bg-white/10 ${
              isScrolled ? 'text-black/80 hover:text-black' : 'text-white hover:text-white/80'
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open menu"
          >
            <Menu size={24} className="transition-transform duration-300 group-hover:scale-110" />
          </button>
        </div>
      </div>

      {/* Full screen menu overlay */}
      <div
        className={`fixed inset-0 bg-white/95 backdrop-blur-md transition-all duration-500 z-50 h-screen-safe ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="h-full min-h-screen-safe flex flex-col items-center justify-center relative px-4">
          {/* Close button */}
          <button
            className="absolute top-6 right-6 md:top-8 md:right-8 text-black/60 hover:text-black transition-colors p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X size={24} />
          </button>

          {/* Logo */}
          <div className="mb-12 md:mb-16 flex items-center justify-center">
            <Logo size="lg" />
          </div>

          {/* Navigation */}
          <nav className="flex flex-col items-center justify-center space-y-6 md:space-y-8 text-center w-full max-w-sm">
            <a
              href="#about"
              className="text-black/70 hover:text-black transition-colors text-xl md:text-2xl font-light tracking-widest uppercase min-h-[44px] flex items-center justify-center w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#philosophy"
              className="text-black/70 hover:text-black transition-colors text-xl md:text-2xl font-light tracking-widest uppercase min-h-[44px] flex items-center justify-center w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              Philosophy
            </a>
            <a
              href="#team"
              className="text-black/70 hover:text-black transition-colors text-xl md:text-2xl font-light tracking-widest uppercase min-h-[44px] flex items-center justify-center w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              Team
            </a>
            <a
              href="#portfolio"
              className="text-black/70 hover:text-black transition-colors text-xl md:text-2xl font-light tracking-widest uppercase min-h-[44px] flex items-center justify-center w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              Portfolio
            </a>
            <a
              href="#newsletter"
              className="text-black/70 hover:text-black transition-colors text-xl md:text-2xl font-light tracking-widest uppercase min-h-[44px] flex items-center justify-center w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              Newsletter
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;