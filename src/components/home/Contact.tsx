import React from 'react';
import Section from '../ui/Section';
import { Linkedin, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <Section id="contact" className="bg-gradient-to-b from-gray-100 to-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-light text-black mb-8">
            Get in <span className="font-semibold text-black">Touch</span>
          </h2>
          <p className="text-lg text-black/75 mb-12 leading-relaxed max-w-2xl mx-auto">
            Whether you're a founder at day zero or already building, we'd love to hear from you.
            Connect with us to explore how we can help accelerate your journey.
          </p>
        </div>
            
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16 items-stretch">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-black/5">
            <div className="flex items-center mb-4">
              <div className="bg-gray-500/10 p-3 rounded-lg mr-4 inline-flex">
                <Linkedin className="w-7 h-7 text-gray-600" />
              </div>
              <h3 className="text-2xl font-medium text-black">Connect on LinkedIn</h3>
            </div>
            <a href="https://www.linkedin.com/in/avishagbohbot/" target="_blank" rel="noopener noreferrer" className="text-black/80 hover:text-blue-600 transition-colors block mb-1 text-lg">
              Avishag Bohbot
            </a>
            <p className="text-black/60 text-sm">
              Connect with Avishag for general inquiries.
            </p>
            <a href="https://www.linkedin.com/in/itzik-polad/" target="_blank" rel="noopener noreferrer" className="text-black/80 hover:text-blue-600 transition-colors block mt-3 text-lg">
              Itzik Polad
            </a>
            <p className="text-black/60 text-sm">
              Connect with Itzik (Data Master) for data-specific questions.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg border border-black/5">
            <div className="flex items-center mb-4">
              <div className="bg-gray-500/10 p-3 rounded-lg mr-4 inline-flex">
                <MapPin className="w-7 h-7 text-gray-600" />
              </div>
              <h3 className="text-2xl font-medium text-black">Visit Our Space</h3>
            </div>
            <p className="text-lg text-black/80">
              Our Founders Shack is located on the seafront in Tel Aviv, Israel.
            </p>
            <p className="text-black/60 mt-2 text-sm">
              We'd love to welcome you for a coffee and a chat.
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <blockquote className="border-l-4 border-gray-600 pl-6 py-3 italic text-xl text-black/85 max-w-xl mx-auto">
            "We're not riding the wave. We're creating it-with you, from day zero."
          </blockquote>
        </div>
      </div>
    </Section>
  );
};

export default Contact;