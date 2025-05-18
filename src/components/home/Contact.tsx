import React from 'react';
import Section from '../ui/Section';
import { Mail, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <Section id="contact" className="bg-gradient-to-b from-gray-100 to-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-light text-black mb-8">
            Get in <span className="font-semibold text-black bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700">Touch</span>
          </h2>
          <p className="text-lg text-black/75 mb-12 leading-relaxed max-w-2xl mx-auto">
            Whether you're a founder at day zero or already building, we'd love to hear from you.
            Connect with us to explore how we can help accelerate your journey.
          </p>
        </div>
            
        <div className="mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-black/5 max-w-lg mx-auto">
            <div className="space-y-8 mt-0">
              <div className="flex items-start">
                <div className="bg-blue-500/10 p-3 rounded-lg mr-4 shrink-0">
                  <Mail className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h4 className="text-xl text-black mb-1">Avishag Bohbot</h4>
                  <a className="text-blue-600 hover:text-blue-700 transition-colors block text-lg break-all">
                    avishag [at] velocityx.vc
                  </a>
                  <p className="text-black/70 text-sm mt-1">
                    Reach out for general questions or partnership opportunities.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-purple-500/10 p-3 rounded-lg mr-4 shrink-0">
                  <Linkedin className="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <h4 className="text-xl text-black mb-1">Itzik Polad <span className="text-sm text-black/60">(Data Master)</span></h4>
                  <a href="https://www.linkedin.com/in/itzik-polad/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 transition-colors block text-lg">
                    Connect on LinkedIn
                  </a>
                  <p className="text-black/70 text-sm mt-1">
                    For data-specific discussions and technical insights.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <blockquote className="border-l-4 border-gray-600 pl-6 py-3 italic text-xl text-black/85 max-w-xl mx-auto">
            "We're not <span className="text-blue-600 not-italic font-medium">riding</span> the wave. We're <span className="text-blue-600 not-italic font-medium">creating</span> it-with you, from <span className="text-blue-600 not-italic font-medium">day zero</span>."
          </blockquote>
        </div>
      </div>
    </Section>
  );
};

export default Contact;