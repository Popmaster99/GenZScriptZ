import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import VanGoghBackground from './components/VanGoghBackground';

function App() {
  return (
    <div className="relative min-h-screen">
      <VanGoghBackground />
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <Services />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}

export default App;