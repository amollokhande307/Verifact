import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import Features from './components/Features';
import DemoTool from './components/DemoTool';
import Stats from './components/Stats';
import Blog from './components/Blog';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import LoadingScreen from './components/LoadingScreen';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const pageVariants = {
    initial: { opacity: 0 },
    in: { 
      opacity: 1,
      transition: {
        duration: isReducedMotion ? 0.3 : 0.6,
        ease: "easeOut"
      }
    },
    out: { 
      opacity: 0,
      transition: {
        duration: isReducedMotion ? 0.2 : 0.4,
        ease: "easeIn"
      }
    }
  };

  return (
    <AuthProvider>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" onComplete={handleLoadingComplete} />
        ) : (
          <motion.div 
            key="main"
            className="min-h-screen bg-gray-50"
            variants={pageVariants}
            initial="initial"
            animate="in"
            exit="out"
          >
            <Navbar />
            <Hero />
            <OurStory />
            <Features />
            <DemoTool />
            <Stats />
            <Blog />
            <Testimonial />
            <Footer />
            <Chatbot />
          </motion.div>
        )}
      </AnimatePresence>
    </AuthProvider>
  );
}

export default App;