import React, { useEffect, useRef } from 'react';
import Button from '../ui/Button';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const parallaxRef = useRef<HTMLVideoElement>(null);

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
    <div className="relative min-h-screen flex items-center bg-white overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100/30 to-gray-200/30 z-10"></div>
      
      {/* Animated circles */}
      <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] rounded-full bg-gray-300/20 blur-[100px] animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] rounded-full bg-gray-300/20 blur-[100px] animate-pulse-slow animation-delay-2000"></div>
      
      {/* Parallax background video */}
      <video
        ref={parallaxRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-20 filter grayscale"
        style={{
          transform: 'translateZ(0)', // for hardware acceleration
        }}
      >
        <source src="https://videos.pexels.com/video-files/2439510/2439510-hd_1920_1080_30fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-black mb-6 tracking-tight">
            From <span className="text-black bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700">day zero</span> to<br />
            <span className="text-black bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700">exponential growth</span>
          </h1>
          
          <p className="text-xl text-black/80 mb-10 max-w-2xl mx-auto leading-relaxed">
          Backing elite teams from inception-where AI, Data, and Security converge.
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
        <a href="#about" className="text-black/50 hover:text-black transition-colors">
          <ChevronDown size={32} />
        </a>
      </div>
    </div>
  );
};

export default Hero;