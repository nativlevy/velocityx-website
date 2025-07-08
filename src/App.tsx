import React, { useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';

function App() {
  useEffect(() => {
    document.title = 'Velocity^x | Investing at the nexus of AI, Data, and Security';
    
    // Optimize for mobile scrolling
    document.body.classList.add('touch-scroll', 'mobile-optimize');
    
    // Prevent zoom on double tap (iOS)
    const preventZoom = (e: TouchEvent) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    };
    
    document.addEventListener('touchstart', preventZoom, { passive: false });
    
    return () => {
      document.removeEventListener('touchstart', preventZoom);
      document.body.classList.remove('touch-scroll', 'mobile-optimize');
    };
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden relative">
      <Header />
      <main className="relative">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;