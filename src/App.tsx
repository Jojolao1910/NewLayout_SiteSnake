import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { ChatbotFeatures } from './components/ChatbotFeatures';
import { UseCases } from './components/UseCases';
import { Analytics } from './components/Analytics';
import { HowItWorks } from './components/HowItWorks';
import { Pricing } from './components/Pricing';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { particlesConfig } from './utils/particles';
import './index.css';

function App() {
  useEffect(() => {
    // Initialize particles.js
    if ((window as any).particlesJS) {
      (window as any).particlesJS('particles-js', particlesConfig);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <div id="particles-js" className="fixed inset-0 pointer-events-none"></div>
      <Navbar />
      <Hero />
      <Features />
      <ChatbotFeatures />
      <UseCases />
      <Analytics />
      <HowItWorks />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;