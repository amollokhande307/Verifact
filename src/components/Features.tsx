import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Newspaper, GraduationCap, Bot } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

const Features: React.FC = () => {
  const features = [
    {
      icon: FileText,
      title: "Document Validator",
      description: "Verify authenticity of official documents, contracts, and certificates using AI-powered analysis.",
      color: "from-blue-500 to-blue-600",
      glowColor: "group-hover:shadow-blue-500/25"
    },
    {
      icon: Newspaper,
      title: "Fake News Detector",
      description: "Analyze news articles, social media posts, and online content for misinformation and bias.",
      color: "from-purple-500 to-purple-600",
      glowColor: "group-hover:shadow-purple-500/25"
    },
    {
      icon: GraduationCap,
      title: "Certificate Checker",
      description: "Validate educational certificates, professional licenses, and academic credentials instantly.",
      color: "from-green-500 to-green-600",
      glowColor: "group-hover:shadow-green-500/25"
    },
    {
      icon: Bot,
      title: "AI Trust Score",
      description: "Get a comprehensive trust score (0-100) with detailed analysis and confidence indicators.",
      color: "from-orange-500 to-orange-600",
      glowColor: "group-hover:shadow-orange-500/25"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: "backOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gray-50" id="features">
      <ScrollAnimation>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Powerful Features
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Advanced AI technology meets human expertise to deliver comprehensive truth verification.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div 
                  key={index} 
                  className={`group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl ${feature.glowColor} transition-all duration-300`}
                  variants={cardVariants}
                  whileHover={{ 
                    y: -8,
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6`}
                    variants={iconVariants}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <motion.h3 
                    className="font-bold text-xl text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {feature.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-gray-600 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {feature.description}
                  </motion.p>

                  {/* Trust Score Badge for AI Trust Score */}
                  {feature.title === "AI Trust Score" && (
                    <motion.div 
                      className="mt-4 flex items-center space-x-2"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <motion.div 
                        className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        92/100
                      </motion.div>
                      <motion.div 
                        className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        ⚠️ Medium
                      </motion.div>
                      <motion.div 
                        className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        ❌ Low
                      </motion.div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default Features;