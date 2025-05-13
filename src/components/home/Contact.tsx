import React from 'react';
import Section from '../ui/Section';
import { Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <Section id="contact" className="bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
              Get in <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Touch</span>
            </h2>
            <p className="text-white/80 mb-8 leading-relaxed">
              Whether you're a founder at day zero or already building, we'd love to hear from you.
              Connect with us to explore how we can help accelerate your journey.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start">
                <div className="bg-blue-600/20 p-3 rounded-lg mr-4">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl text-white mb-2">Email Us</h3>
                  <a className="text-white/70 hover:text-blue-400 transition-colors">
                    avishag at velocityx.vc
                  </a>
                  <p className="text-white/70 mt-1">
                    or itzik: ipolad at gmail.com (Data Master)
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-purple-600/20 p-3 rounded-lg mr-4">
                  <MapPin className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl text-white mb-2">Visit Our Space</h3>
                  <p className="text-white/70">
                    Our Founders Shack is located on the seafront in Tel Aviv, Israel.
                  </p>
                </div>
              </div>
            </div>
            
            <blockquote className="border-l-4 border-blue-500 pl-6 italic text-white/90">
              "We see what others don't, until they can't ignore it anymore."
            </blockquote>
          </div>
          
          <div className="relative">
            <img 
              src="/images/location.jpg"
              alt="Velocity X Location"
              className="rounded-xl w-full h-auto object-cover shadow-lg border border-white/10"
            />
            <div className="absolute -bottom-6 -right-6 bg-black/80 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <p className="text-white/90 text-sm">
                Join us at our seafront space where innovation meets inspiration
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;