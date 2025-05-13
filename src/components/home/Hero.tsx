import React, { useEffect, useRef } from 'react';
import Button from '../ui/Button';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollY = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrollY * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center bg-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black/80 z-10"></div>
      
      {/* Animated circles */}
      <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] rounded-full bg-purple-700/10 blur-[100px] animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] rounded-full bg-blue-700/10 blur-[100px] animate-pulse-slow animation-delay-2000"></div>
      
      {/* Parallax element */}
      <div 
        className="absolute inset-0 z-0 opacity-40" 
        ref={parallaxRef}
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center bg-white/5 backdrop-blur-sm px-4 py-1 rounded-full text-white/80 text-sm mb-6 border border-white/10">
            <span>Investing at the nexus of AI, Data, and Security</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6 tracking-tight">
            From <span className="text-blue-400">0-day</span> to<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">exponential growth</span>
          </h1>
          
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            An operator-led venture group backing exceptional technical teams,
            helping them validate and build ventures from inception.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" size="lg" href="#philosophy">
              Our Investment Philosophy
            </Button>
            <Button variant="outline" size="lg" href="#team">
              Meet the Team
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-20 animate-bounce">
        <a href="#about" className="text-white/50 hover:text-white transition-colors">
          <ChevronDown size={32} />
        </a>
      </div>
    </div>
  );
};

export default Hero;