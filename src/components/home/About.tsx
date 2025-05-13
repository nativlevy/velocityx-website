import React, { useEffect, useRef } from 'react';
import Section from '../ui/Section';
import { Building2, TrendingUp, Users, Briefcase } from 'lucide-react';

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
    <Section id="about" className="bg-gradient-to-b from-black to-gray-900">
      <div ref={sectionRef} className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6 animate-on-scroll opacity-0">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                About Velocity<sup>x</sup>
              </span>
            </h2>
            <p className="text-white/80 mb-8 leading-relaxed animate-on-scroll opacity-0 animation-delay-300">
              We are operators, data executives, and post-exit founders with deep expertise 
              in data, AI, and cybersecurity. Our unique approach combines hands-on operational 
              experience with strategic capital to help founders build exceptional companies.
            </p>
            
            <div className="space-y-6 animate-on-scroll opacity-0 animation-delay-600">
              <div className="flex items-start">
                <div className="bg-blue-600/20 p-3 rounded-lg mr-4">
                  <Building2 className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl text-white mb-2">Our Founders Shack | TLV</h3>
                  <p className="text-white/70">
                    An invite-only seafront space in Tel Aviv where founders build, connect, and surf when waves are good.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-purple-600/20 p-3 rounded-lg mr-4">
                  <TrendingUp className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl text-white mb-2">Stage</h3>
                  <p className="text-white/70">
                    As early as it gets. We invest from inception [pre-seed] with checks ranging from $250K to $1M.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-on-scroll opacity-0 animation-delay-900">
            <div className="rounded-2xl overflow-hidden border border-white/10">
              <img 
                src="/images/location.jpg" 
                alt="Velocity Team Collaboration"
                className="w-full h-auto object-cover"
              />
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-black/80 backdrop-blur-sm border border-white/10 rounded-xl p-6 w-64">
              <div className="flex items-center mb-4">
                <Users className="w-5 h-5 text-blue-400 mr-2" />
                <h4 className="text-white text-sm">TEAM EXPERTISE</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-600/30 text-blue-400 text-xs px-2 py-1 rounded-full">AI & ML</span>
                <span className="bg-purple-600/30 text-purple-400 text-xs px-2 py-1 rounded-full">Data</span>
                <span className="bg-green-600/30 text-green-400 text-xs px-2 py-1 rounded-full">Security</span>
                <span className="bg-orange-600/30 text-orange-400 text-xs px-2 py-1 rounded-full">Scaling</span>
              </div>
            </div>
            
            <div className="absolute -top-6 -left-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="flex items-center">
                <Briefcase className="w-5 h-5 text-white mr-2" />
                <h4 className="text-white">90%</h4>
              </div>
              <p className="text-white/70 text-sm">of our investments start at day zero</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;