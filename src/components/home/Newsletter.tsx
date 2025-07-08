import React, { useEffect, useRef } from 'react';
import Section from '../ui/Section';

const Newsletter: React.FC = () => {
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
    <Section id="newsletter" className="bg-gray-50 relative">
      <div ref={sectionRef} className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-thin text-black mb-8 animate-on-scroll opacity-0 vintage-text">
            Stay <span className="font-normal text-black">Connected</span>
          </h2>
          <p className="text-black/80 max-w-2xl mx-auto leading-relaxed text-lg animate-on-scroll opacity-0 animation-delay-300">
          Notes from Avishag, the founding partner of Velocity<sup>x</sup>.
          </p>
        </div>
        
        <div className="animate-on-scroll opacity-0 animation-delay-600">
          <div className="flex justify-center">
            <div className="vintage-border vintage-shadow bg-white rounded-lg p-4 w-full max-w-[650px]">
              <iframe 
                src="https://avishagvelocityx.substack.com/embed" 
                width="100%" 
                height="400" 
                style={{
                  border: 'none',
                  background: 'white',
                  borderRadius: '8px',
                  minWidth: '100%',
                  width: '100%'
                }}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Newsletter; 