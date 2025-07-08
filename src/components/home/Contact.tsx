import React, { useEffect, useRef } from 'react';
import Section from '../ui/Section';
import { Mail, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const childElements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    childElements?.forEach((el) => observer.observe(el));

    return () => {
      childElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <Section id="contact" className="bg-white relative py-20 md:py-28">
      <div ref={sectionRef} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-thin text-black mb-8 animate-on-scroll opacity-0 vintage-text">
            Get in <span className="font-normal text-black">Touch</span>
          </h2>
          <p className="text-black/80 mb-16 leading-relaxed max-w-2xl mx-auto text-lg animate-on-scroll opacity-0 animation-delay-300">
            Whether you're a founder at day zero or already building, we'd love to hear from you.
            Connect with us to explore how we can help accelerate your journey.
          </p>
        </div>
            
        <div className="mb-20">
          <div className="vintage-border vintage-shadow bg-white p-10 rounded-lg max-w-lg mx-auto animate-on-scroll opacity-0 animation-delay-600">
            <div className="space-y-10 mt-0">
              <div className="flex items-start">
                <div className="bg-black/5 p-3 rounded-full mr-4 shrink-0">
                  <Mail className="w-6 h-6 text-black/70" />
                </div>
                <div>
                  <h4 className="text-xl text-black mb-1 vintage-text">Avishag Bohbot</h4>
                  <a className="text-black/70 hover:text-black transition-colors block text-lg break-all vintage-text">
                    avishag [at] velocityx.vc
                  </a>
                  <p className="text-black/60 text-sm mt-2 leading-relaxed">
                    Reach out for general questions or partnership opportunities.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-black/5 p-3 rounded-full mr-4 shrink-0">
                  <Linkedin className="w-6 h-6 text-black/70" />
                </div>
                <div>
                  <h4 className="text-xl text-black mb-1 vintage-text">Itzik Polad <span className="text-sm text-black/60">(Data Master)</span></h4>
                  <a href="https://www.linkedin.com/in/itzik-polad/" target="_blank" rel="noopener noreferrer" className="text-black/70 hover:text-black transition-colors block text-lg vintage-text">
                    Connect on LinkedIn
                  </a>
                  <p className="text-black/60 text-sm mt-2 leading-relaxed">
                    For data-specific discussions and technical insights.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <blockquote className="border-l-2 border-black/30 pl-6 py-3 text-xl text-black/85 max-w-xl mx-auto animate-on-scroll opacity-0 animation-delay-900 vintage-text">
            "We're not <span className="text-black font-medium">riding</span> the wave. We're <span className="text-black font-medium">creating</span> it—with you, from <span className="text-black font-medium">day zero</span>."
          </blockquote>
        </div>
      </div>
    </Section>
  );
};

export default Contact;