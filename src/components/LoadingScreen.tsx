import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900"
    >
      <div className="relative">
        {/* 3D Cube */}
        <div className="relative w-32 h-32">
          <div className="absolute inset-0 transform-style-preserve-3d animate-spin-slow">
            {/* Front face */}
            <div className="absolute w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 border-2 border-white/20 transform translate-z-16 rounded-lg shadow-2xl"></div>
            {/* Back face */}
            <div className="absolute w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 border-2 border-white/20 transform translate-z-neg-16 rotate-y-180 rounded-lg shadow-2xl"></div>
            {/* Right face */}
            <div className="absolute w-32 h-32 bg-gradient-to-br from-pink-400 to-red-500 border-2 border-white/20 transform translate-x-16 rotate-y-90 rounded-lg shadow-2xl"></div>
            {/* Left face */}
            <div className="absolute w-32 h-32 bg-gradient-to-br from-red-400 to-orange-500 border-2 border-white/20 transform translate-x-neg-16 rotate-y-neg-90 rounded-lg shadow-2xl"></div>
            {/* Top face */}
            <div className="absolute w-32 h-32 bg-gradient-to-br from-orange-400 to-yellow-500 border-2 border-white/20 transform translate-y-neg-16 rotate-x-90 rounded-lg shadow-2xl"></div>
            {/* Bottom face */}
            <div className="absolute w-32 h-32 bg-gradient-to-br from-yellow-400 to-green-500 border-2 border-white/20 transform translate-y-16 rotate-x-neg-90 rounded-lg shadow-2xl"></div>
          </div>
        </div>

        {/* Glowing effect */}
        <div className="absolute inset-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-xl animate-pulse"></div>

        {/* Welcome Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 text-center"
        >
          <h1 className="text-2xl font-bold text-white mb-2">Welcome to my portfolio</h1>
          <div className="flex space-x-1 justify-center">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0 }}
              className="w-2 h-2 bg-white rounded-full"
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
              className="w-2 h-2 bg-white rounded-full"
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
              className="w-2 h-2 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen; 