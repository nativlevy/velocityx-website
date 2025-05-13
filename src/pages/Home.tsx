import React from 'react';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Philosophy from '../components/home/Philosophy';
import Team from '../components/home/Team';
import Contact from '../components/home/Contact';

const Home: React.FC = () => {
  return (
    <div className="bg-black text-white">
      <Hero />
      <About />
      <Philosophy />
      <Team />
      <Contact />
    </div>
  );
};

export default Home;