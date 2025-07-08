import React, { useEffect, useRef } from 'react';
import Button from '../ui/Button';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const parallaxRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollY = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen-safe flex items-center justify-center bg-black overflow-hidden">
      {/* Vintage film grain overlay */}
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 z-20"></div>
      
      {/* Parallax background video - enhanced for vintage feel */}
      <video
        ref={parallaxRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 filter contrast-125 brightness-75"
        style={{
          transform: 'translateZ(0) scale(1.1)', // slight scale for movement
        }}
      >
        <source src="https://videos.pexels.com/video-files/2439510/2439510-hd_1920_1080_30fps.mp4" type="video/mp4" />
        <source src="https://videos.pexels.com/video-files/856356/856356-hd_1920_1080_25fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="w-full px-4 md:px-6 relative z-30">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center justify-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-thin text-white mb-6 md:mb-8 tracking-wider leading-tight">
            <span className="block mb-2 md:mb-4 opacity-90">Velocity<sup>x</sup></span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed font-light tracking-wide px-4">
          From day zero to breakout.
          </p>
          
          <div className="flex flex-col items-center justify-center gap-6 w-full">
            <Button variant="outline" size="lg" href="#about" className="border-white/40 text-white hover:bg-white/10 backdrop-blur-sm min-h-[44px] px-8">
              Explore Our Vision
            </Button>
          </div>
        </div>
      </div>

      {/* Minimalist scroll indicator */}
      <div className="absolute bottom-8 md:bottom-12 left-0 right-0 flex justify-center z-30">
        <a href="#about" className="text-white/60 hover:text-white transition-all duration-500 animate-bounce">
          <div className="w-6 h-10 border border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Hero;