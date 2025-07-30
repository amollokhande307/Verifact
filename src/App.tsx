import React from 'react';
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
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-50">
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
      </div>
    </AuthProvider>
  );
}

export default App;