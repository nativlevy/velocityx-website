import React, { useEffect, useRef } from 'react';
import Section from '../ui/Section';

const About: React.FC = () => {
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
    <Section id="about" className="bg-white relative">
      <div ref={sectionRef} className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-thin text-black mb-4 animate-on-scroll opacity-0 vintage-text">
            About Velocity<sup>x</sup>
          </h2>
          <p className="text-lg text-black/80 animate-on-scroll opacity-0 animation-delay-300">
            We back elite teams in data, AI and infra from inception.
          </p>
        </div>
        
        <div className="relative animate-on-scroll opacity-0 animation-delay-600 flex flex-col items-center px-4 sm:px-0">
          <div className="vintage-border vintage-shadow rounded-lg overflow-hidden w-full max-w-[30rem] mx-4 sm:mx-0">
            <img 
              src="/images/location.jpg" 
              alt="The Shack - where builders meet the sea, invite only, TLV."
              className="w-full h-auto object-cover filter grayscale contrast-110 brightness-95 hover:brightness-100 transition-all duration-700 ease-in-out"
            />
          </div>
          <div className="text-center mt-6">
            <p className="text-lg text-black/80 animate-on-scroll opacity-0 animation-delay-900">
              The Shack - where builders meet the sea, invite only, TLV.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;