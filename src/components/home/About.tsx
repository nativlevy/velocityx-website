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
    <Section id="about" className="bg-gradient-to-b from-white to-gray-100">
      <div ref={sectionRef} className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-light text-black mb-6 animate-on-scroll opacity-0">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                About Velocity<sup>x</sup>
              </span>
            </h2>
            <p className="text-black/80 mb-8 leading-relaxed animate-on-scroll opacity-0 animation-delay-300">
              We are you.
              Operators, data execs, and post-exit founders with deep roots in AI, data, and infra.
              The kind we wish we had when we started-early, hands-on, and all-in.
              We move fast, build conviction early, and bring velocity where it matters most. 
            </p>
            
            <div className="space-y-6 animate-on-scroll opacity-0 animation-delay-600">
              <div className="flex items-start">
                <div className="bg-blue-500/10 p-3 rounded-lg mr-4">
                  <Building2 className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl text-black mb-2">Our Founders Shack | TLV</h3>
                  <p className="text-black/70">
                    An invite-only seafront space in Tel Aviv where founders build, connect, and surf when waves are good.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-purple-500/10 p-3 rounded-lg mr-4">
                  <TrendingUp className="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <h3 className="text-xl text-black mb-2">0-Day Stage</h3>
                  <p className="text-black/70">
                    As early as it gets. We partner before the pitch deck-at inception, when it's just a problem, a person, or a prototype.
                    Our first checks range from $250K to $1M. 
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-on-scroll opacity-0 animation-delay-900">
            <div className="rounded-2xl overflow-hidden border border-black/10">
              <img 
                src="/images/location.jpg" 
                alt="Velocity Team Collaboration"
                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
              />
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white/80 backdrop-blur-sm border border-black/10 rounded-xl p-6 w-64">
              <div className="flex items-center mb-4">
                <Users className="w-5 h-5 text-blue-500 mr-2" />
                <h4 className="text-black text-sm">TEAM EXPERTISE</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-500/20 text-blue-600 text-xs px-2 py-1 rounded-full">AI & ML</span>
                <span className="bg-purple-500/20 text-purple-600 text-xs px-2 py-1 rounded-full">Data</span>
                <span className="bg-green-500/20 text-green-600 text-xs px-2 py-1 rounded-full">Security</span>
                <span className="bg-orange-500/20 text-orange-600 text-xs px-2 py-1 rounded-full">Scaling</span>
              </div>
            </div>
            
            <div className="absolute -top-6 -left-6 bg-black/5 backdrop-blur-sm border border-black/10 rounded-xl p-6">
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