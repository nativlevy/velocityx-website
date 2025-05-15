import React from 'react';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Philosophy from '../components/home/Philosophy';
import Portfolio from '../components/home/Portfolio';
import Team from '../components/home/Team';
import Contact from '../components/home/Contact';

const Home: React.FC = () => {
  return (
    <div className="bg-white text-black overflow-x-hidden">
      <Hero />
      <About />
      <Philosophy />
      <Portfolio />
      <Team />
      <Contact />
    </div>
  );
};

export default Home;