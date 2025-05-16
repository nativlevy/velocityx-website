import React, { useEffect, useRef, useState } from 'react';
import Section from '../ui/Section';
import { Lightbulb, Zap, Users, BookOpen } from 'lucide-react';
import Modal from '../ui/Modal';
import InvestmentBlueprint from './InvestmentBlueprint';

const Philosophy: React.FC = () => {
  const [showBlueprint, setShowBlueprint] = useState(false);
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
    <>
      <Section id="philosophy" className="bg-gradient-to-b from-gray-100 to-white">
        <div ref={sectionRef} className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-black mb-6 animate-on-scroll opacity-0">
              The <span className="text-black">X</span> | Investment Philosophy
            </h2>
            <p className="text-black/80 max-w-3xl mx-auto leading-relaxed animate-on-scroll opacity-0 animation-delay-300">
              It starts with trust, not traction.
              From day zero at the Shack- co-building with founders, validating with real AI leaders. The X is showing up early-building with you before the world pays attention.
            </p>
            <button
              onClick={() => setShowBlueprint(true)}
              className="mt-6 inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-300 animate-on-scroll opacity-0 animation-delay-300"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Read Our Investment Blueprint
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-100/20 to-transparent backdrop-blur-sm border border-black/10 rounded-xl p-8 group hover:border-black/30 transition-all duration-300 animate-on-scroll opacity-0">
              <div className="bg-gray-500/10 w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:bg-gray-500/20 transition-all duration-300">
                <Lightbulb className="w-7 h-7 text-gray-500" />
              </div>
              <h3 className="text-xl text-black mb-4">Day Zero Investments</h3>
              <p className="text-black/70 leading-relaxed mb-6">
                90% of our investments start at day zero-shaping ideas, de-risking, and building alongside founders from inception.
              </p>
              <div className="w-16 h-1 bg-gray-500/50 rounded"></div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-100/20 to-transparent backdrop-blur-sm border border-black/10 rounded-xl p-8 group hover:border-black/30 transition-all duration-300 animate-on-scroll opacity-0 animation-delay-300">
              <div className="bg-gray-500/10 w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:bg-gray-500/20 transition-all duration-300">
                <Zap className="w-7 h-7 text-gray-500" />
              </div>
              <h3 className="text-xl text-black mb-4">Classic VC Model</h3>
              <p className="text-black/70 leading-relaxed mb-6">
                10% of our investments follow a classic VC model. Straightforward, fast, and familiar for teams that are already up and running.
              </p>
              <div className="w-16 h-1 bg-gray-500/50 rounded"></div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-100/20 to-transparent backdrop-blur-sm border border-black/10 rounded-xl p-8 group hover:border-black/30 transition-all duration-300 animate-on-scroll opacity-0 animation-delay-600">
              <div className="bg-gray-500/10 w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:bg-gray-500/20 transition-all duration-300">
                <Users className="w-7 h-7 text-gray-500" />
              </div>
              <h3 className="text-xl text-black mb-4">Co-investment Network</h3>
              <p className="text-black/70 leading-relaxed mb-6">
              When possible, we invite top AI & data angels to co-invest- enhancing expertise, GTM, and outcomes.
              </p>
              <div className="w-16 h-1 bg-gray-500/50 rounded"></div>
            </div>
          </div>
          
          <div className="mt-20 bg-black/5 backdrop-blur-sm border border-black/10 rounded-xl p-8 md:p-12 animate-on-scroll opacity-0 animation-delay-900">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl text-black mb-6">Core Investment Themes</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-gray-500/10 p-1 rounded mr-3 mt-1">
                      <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                    </div>
                    <span className="text-black/80">AI, ML, and LLM Optimization</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-gray-500/10 p-1 rounded mr-3 mt-1">
                      <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                    </div>
                    <span className="text-black/80">Data Engineering & Infrastructure</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-gray-500/10 p-1 rounded mr-3 mt-1">
                      <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                    </div>
                    <span className="text-black/80">User-Centric Data Solutions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-gray-500/10 p-1 rounded mr-3 mt-1">
                      <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                    </div>
                    <span className="text-black/80">Data Operations & Governance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-gray-500/10 p-1 rounded mr-3 mt-1">
                      <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                    </div>
                    <span className="text-black/80">Data Observability</span>
                  </li>
                </ul>
              </div>
              
              <div>
                
                <blockquote className="border-l-4 border-gray-500 pl-6 italic text-black/90 text-xl leading-relaxed">
                  "We partner with founders at the <span className="text-black not-italic font-medium">inception</span> stage, supporting them relentlessly until the world sees <span className="text-black not-italic font-medium">what we see</span>."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Modal
        isOpen={showBlueprint}
        onClose={() => setShowBlueprint(false)}
        title="Our Investment Blueprint Explained"
      >
        <InvestmentBlueprint />
      </Modal>
    </>
  );
};

export default Philosophy;