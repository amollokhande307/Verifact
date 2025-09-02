import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, Play } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px rgba(34, 197, 94, 0.3)",
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.98
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-gray-50 pt-20 pb-16 overflow-hidden">
      {/* Enhanced Background with Particles */}
      <ParticleBackground />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      
      <motion.div 
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <motion.div className="space-y-4" variants={itemVariants}>
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight"
                variants={itemVariants}
              >
                Truth Shouldn't Be a{' '}
                <motion.span 
                  className="text-blue-600 relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  Mystery
                  <motion.div 
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-green-500"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
                  />
                </motion.span>
              </motion.h1>
              <motion.p 
                className="text-lg md:text-xl text-gray-600 italic font-medium"
                variants={itemVariants}
              >
                "Sach Ki Pehchaan, Ab AI Ke Naam."
              </motion.p>
              <motion.p 
                className="text-lg text-gray-700 leading-relaxed"
                variants={itemVariants}
              >
                Powered by AI to detect misinformation, verify documents, and build trust in our digital world.
              </motion.p>
            </motion.div>

            {/* Floating verification badges */}
            <motion.div 
              className="flex flex-wrap gap-4"
              variants={itemVariants}
            >
              <motion.div 
                className="flex items-center space-x-2 bg-green-50 border border-green-200 px-4 py-2 rounded-full"
                whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(34, 197, 94, 0.2)" }}
                transition={{ duration: 0.2 }}
              >
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-green-700 font-medium">AI Verified</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-2 bg-blue-50 border border-blue-200 px-4 py-2 rounded-full"
                whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(59, 130, 246, 0.2)" }}
                transition={{ duration: 0.2 }}
              >
                <Shield className="w-5 h-5 text-blue-600" />
                <span className="text-blue-700 font-medium">Trusted Source</span>
              </motion.div>
            </motion.div>

            {/* CTA Button */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <motion.button 
                className="group bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Play className="w-5 h-5 group-hover:animate-pulse" />
                <span>Try Demo</span>
              </motion.button>
              <motion.button 
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
                whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(59, 130, 246, 0.2)" }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right side - Enhanced Animated Scanner Visual */}
          <motion.div 
            className="relative"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-auto"
              whileHover={{ 
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
                y: -5
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Document mockup */}
              <div className="space-y-4">
                <motion.div 
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  <motion.div 
                    className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <Shield className="w-4 h-4 text-blue-600" />
                  </motion.div>
                  <h3 className="font-semibold text-gray-900">Document Verification</h3>
                </motion.div>
                
                {/* Enhanced scanning animation */}
                <motion.div 
                  className="relative bg-gray-50 rounded-lg p-4 border-2 border-dashed border-gray-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                >
                  <div className="h-24 bg-gradient-to-r from-gray-100 to-gray-200 rounded flex items-center justify-center">
                    <div className="text-gray-500 text-sm">Sample Document</div>
                  </div>
                  
                  {/* Enhanced scanner line animation */}
                  <div className="absolute inset-0 overflow-hidden rounded-lg">
                    <motion.div 
                      className="w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                      animate={{ 
                        y: [0, 96, 0],
                        opacity: [0, 1, 0]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </div>
                </motion.div>

                {/* Enhanced verification result */}
                <motion.div 
                  className="bg-green-50 border-l-4 border-green-500 p-4 rounded"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                >
                  <div className="flex items-center space-x-2">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </motion.div>
                    <div>
                      <p className="font-semibold text-green-800">VERIFIED</p>
                      <p className="text-green-700 text-sm">Trust Score: 95/100</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;