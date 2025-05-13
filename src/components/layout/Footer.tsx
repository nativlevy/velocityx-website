import React from 'react';
import Logo from '../ui/Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white/70 py-12 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="mb-6">
              <Logo size="sm" />
            </div>
            <p className="text-sm leading-relaxed mb-4">
              An operator-led venture group investing at the nexus of AI, Data, and Security.
              We back technical teams helping them validate, and build ventures from 0 day.
            </p>
            <p className="text-sm">&copy; 2025 Velocity<sup>x</sup>. All rights reserved.</p>
          </div>
          
          <div>
            <h3 className="text-white text-sm uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-sm hover:text-white transition-colors">About Us</a></li>
              <li><a href="#philosophy" className="text-sm hover:text-white transition-colors">Investment Philosophy</a></li>
              <li><a href="#portfolio" className="text-sm hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#team" className="text-sm hover:text-white transition-colors">Our Team</a></li>
              <li><a href="#contact" className="text-sm hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-sm uppercase tracking-wider mb-4">Contact</h3>
            <p className="text-sm mb-2">Tel Aviv, Israel</p>
            <p className="text-sm">
              <a  className="hover:text-white transition-colors">
                avishag at velocityx.vc
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;