import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-md py-4 shadow-lg'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <Logo size="md" />
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-white/80 hover:text-white transition-colors text-sm uppercase tracking-widest">
            About
          </a>
          <a href="#philosophy" className="text-white/80 hover:text-white transition-colors text-sm uppercase tracking-widest">
            Philosophy
          </a>
          <a href="#team" className="text-white/80 hover:text-white transition-colors text-sm uppercase tracking-widest">
            Team
          </a>
          <a href="#contact" className="bg-white/10 hover:bg-white/20 border border-white/30 text-white py-2 px-4 rounded-full text-sm transition-all duration-300 flex items-center group">
            <span>Contact Us</span>
            <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </a>
        </nav>

        <button
          className="md:hidden text-white p-1"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="container mx-auto px-4 py-6 flex flex-col space-y-6">
          <a
            href="#about"
            className="text-white/80 hover:text-white transition-colors text-lg"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#philosophy"
            className="text-white/80 hover:text-white transition-colors text-lg"
            onClick={() => setMobileMenuOpen(false)}
          >
            Philosophy
          </a>
          <a
            href="#team"
            className="text-white/80 hover:text-white transition-colors text-lg"
            onClick={() => setMobileMenuOpen(false)}
          >
            Team
          </a>
          <a
            href="#contact"
            className="bg-white/10 hover:bg-white/20 border border-white/30 text-white py-3 px-6 rounded-full text-center transition-all duration-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;