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
    <Section id="newsletter" className="bg-gradient-to-b from-white to-gray-100">
      <div ref={sectionRef} className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-black mb-6 animate-on-scroll opacity-0">
            Stay <span className="text-black bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700">Connected</span>
          </h2>
          <p className="text-black/80 max-w-2xl mx-auto leading-relaxed animate-on-scroll opacity-0 animation-delay-300">
            Get insights on AI, data, and startup trends directly from our investment experiences. 
            Join founders and operators who read our thoughts on what's next.
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-gray-100/20 to-transparent backdrop-blur-sm rounded-xl animate-on-scroll opacity-0 animation-delay-600">
          <div className="flex justify-center">
            <div className="bg-white rounded-lg shadow-lg p-3 border border-black/5 w-full max-w-[650px]">
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