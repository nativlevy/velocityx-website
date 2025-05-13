import React, { useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';

function App() {
  useEffect(() => {
    document.title = 'Velocity^x | Investing at the nexus of AI, Data, and Security';
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;