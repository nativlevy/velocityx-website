import React, { useEffect, useRef, useState } from 'react';
import Section from '../ui/Section';
import { BookOpen } from 'lucide-react';
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
      <Section id="philosophy" className="bg-gray-50 relative">
        <div ref={sectionRef} className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-thin text-black mb-8 animate-on-scroll opacity-0 vintage-text">
              The <span className="font-normal">X</span> | Investment Philosophy
            </h2>
            <p className="text-black/80 max-w-3xl mx-auto leading-relaxed text-lg animate-on-scroll opacity-0 animation-delay-300">
            Breakouts aren’t lucky bets - they’re earned builds. 
            We build with you. 
            </p>
            <button
              onClick={() => setShowBlueprint(true)}
              className="mt-8 inline-flex items-center px-8 py-3 bg-black hover:bg-black/80 text-white rounded-full transition-all duration-500 animate-on-scroll opacity-0 animation-delay-500 vintage-text tracking-wider"
            >
              <BookOpen className="w-5 h-5 mr-3" />
              Read Our Investment Blueprint
            </button>
          </div>

          <div className="flex flex-col items-center">
            <img src="/images/build.png" alt="Build" className="w-full max-w-2xl" />
            <p className="text-black/60 text-sm mt-4 italic">Image credit: Visualize Value</p>
          </div>
          
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="vintage-border vintage-shadow bg-white rounded-lg p-8 group hover:shadow-lg transition-all duration-500 animate-on-scroll opacity-0">
              <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center mb-6 group-hover:bg-black/10 transition-all duration-500">
                <div className="w-4 h-4 bg-black/60 rounded-full"></div>
              </div>
              <h3 className="text-xl text-black mb-4 vintage-text">Day Zero Investments</h3>
              <p className="text-black/70 leading-relaxed mb-6">
                90% of our investments start at day zero—shaping ideas, de-risking, and building alongside founders from inception.
              </p>
              <div className="w-16 h-px bg-black/30"></div>
            </div>
            
            <div className="vintage-border vintage-shadow bg-white rounded-lg p-8 group hover:shadow-lg transition-all duration-500 animate-on-scroll opacity-0 animation-delay-300">
              <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center mb-6 group-hover:bg-black/10 transition-all duration-500">
                <div className="w-4 h-4 bg-black/60 rounded-full"></div>
              </div>
              <h3 className="text-xl text-black mb-4 vintage-text">Classic VC Model</h3>
              <p className="text-black/70 leading-relaxed mb-6">
                10% of our investments follow a classic VC model. Straightforward, fast, and familiar for teams that are already up and running.
              </p>
              <div className="w-16 h-px bg-black/30"></div>
            </div>
            
            <div className="vintage-border vintage-shadow bg-white rounded-lg p-8 group hover:shadow-lg transition-all duration-500 animate-on-scroll opacity-0 animation-delay-600">
              <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center mb-6 group-hover:bg-black/10 transition-all duration-500">
                <div className="w-4 h-4 bg-black/60 rounded-full"></div>
              </div>
              <h3 className="text-xl text-black mb-4 vintage-text">Co-investment Network</h3>
              <p className="text-black/70 leading-relaxed mb-6">
                When possible, we invite top AI & data angels to co-invest—enhancing expertise, GTM, and outcomes.
              </p>
              <div className="w-16 h-px bg-black/30"></div>
            </div>
          </div> */}
          
          <div className="mt-20 flex justify-center">
            <div className="vintage-border vintage-shadow bg-white rounded-lg p-10 md:p-12 animate-on-scroll opacity-0 animation-delay-900 w-fit max-w-lg">
              <div className="text-center">
                <h3 className="text-2xl text-black mb-8 vintage-text">Core Investment Themes</h3>
                <ul className="space-y-4 text-left">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-black/60 rounded-full mr-4 flex-shrink-0"></div>
                    <span className="text-black/80">AI, ML, and LLM Optimization</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-black/60 rounded-full mr-4 flex-shrink-0"></div>
                    <span className="text-black/80">Data Engineering & Infrastructure</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-black/60 rounded-full mr-4 flex-shrink-0"></div>
                    <span className="text-black/80">User-Centric Data Solutions</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-black/60 rounded-full mr-4 flex-shrink-0"></div>
                    <span className="text-black/80">Data Operations & Governance</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-black/60 rounded-full mr-4 flex-shrink-0"></div>
                    <span className="text-black/80">Data Observability</span>
                  </li>
                </ul>
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