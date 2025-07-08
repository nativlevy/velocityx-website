import React from 'react';
import Logo from '../ui/Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-black/70 py-16 vintage-border border-t relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="mb-8">
              <Logo size="sm" />
            </div>
            <p className="text-sm leading-relaxed mb-6 vintage-text">
              An operator-led venture group investing at the nexus of AI, Data, and Security.
              We back technical teams helping them validate, and build ventures from day 0.
            </p>
            <p className="text-sm vintage-text">&copy; 2025 Velocity<sup>x</sup>. All rights reserved.</p>
          </div>
          
          <div>
            <h3 className="text-black text-sm uppercase tracking-wider mb-6 vintage-text">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-sm hover:text-black transition-colors vintage-text">About Us</a></li>
              <li><a href="#philosophy" className="text-sm hover:text-black transition-colors vintage-text">Investment Philosophy</a></li>
              <li><a href="#portfolio" className="text-sm hover:text-black transition-colors vintage-text">Portfolio</a></li>
              <li><a href="#team" className="text-sm hover:text-black transition-colors vintage-text">Our Team</a></li>
              <li><a href="#newsletter" className="text-sm hover:text-black transition-colors vintage-text">Newsletter</a></li>
            </ul>
          </div>
          
          {/* <div>
            <h3 className="text-black text-sm uppercase tracking-wider mb-6 vintage-text">Contact</h3>
            <p className="text-sm mb-3 vintage-text">HaTachana, Ashkelon Street 14, Tel Aviv-Yafo</p>
            <p className="text-sm vintage-text">
              <a href="mailto:office@velocityx.vc" className="hover:text-black transition-colors">
                office@velocityx.vc
              </a>
            </p>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;