import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, FileCheck, Award, TrendingUp } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';
import { AnimatePresence } from 'framer-motion';

const Stats: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [userCount, setUserCount] = useState(1247);
  const [animatedValues, setAnimatedValues] = useState({
    documents: 0,
    partnerships: 0,
    accuracy: 0,
    uptime: 0
  });

  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, threshold: 0.3 });

  useEffect(() => {
    const interval = setInterval(() => {
      setUserCount(prev => prev + Math.floor(Math.random() * 3));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isStatsInView) {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      const animateValue = (start: number, end: number, setter: (value: number) => void) => {
        let current = start;
        const increment = (end - start) / steps;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= end) {
            current = end;
            clearInterval(timer);
          }
          setter(Math.floor(current));
        }, stepDuration);
      };

      animateValue(0, 50000, (value) => setAnimatedValues(prev => ({ ...prev, documents: value })));
      animateValue(0, 120, (value) => setAnimatedValues(prev => ({ ...prev, partnerships: value })));
      animateValue(0, 94.7, (value) => setAnimatedValues(prev => ({ ...prev, accuracy: value })));
      animateValue(0, 99.2, (value) => setAnimatedValues(prev => ({ ...prev, uptime: value })));
    }
  }, [isStatsInView]);

  const handleWaitlistSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const stats = [
    {
      icon: FileCheck,
      value: animatedValues.documents.toLocaleString() + '+',
      label: 'Documents Verified',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: Users,
      value: animatedValues.partnerships + '+',
      label: 'Active Partnerships',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: Award,
      value: animatedValues.accuracy.toFixed(1) + '%',
      label: 'Trust Score Accuracy',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      icon: TrendingUp,
      value: animatedValues.uptime.toFixed(1) + '%',
      label: 'Uptime Reliability',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
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

  const statVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
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
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <ScrollAnimation>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Truth Seekers Already Joined
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Join thousands of organizations and individuals who trust Verifact to verify their content.
            </motion.p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div 
            ref={statsRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
            variants={containerVariants}
            initial="hidden"
            animate={isStatsInView ? "visible" : "hidden"}
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div 
                  key={index} 
                  className="text-center group"
                  variants={statVariants}
                  whileHover={{ 
                    y: -5,
                    scale: 1.05
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className={`w-16 h-16 ${stat.bgColor} rounded-xl flex items-center justify-center mx-auto mb-4`}
                    variants={iconVariants}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <IconComponent className={`w-8 h-8 ${stat.color}`} />
                  </motion.div>
                  <motion.div 
                    className="font-bold text-2xl md:text-3xl text-gray-900 mb-2"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  >
                    {stat.value}
                  </motion.div>
                  <motion.div 
                    className="text-gray-600 font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                  >
                    {stat.label}
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Waitlist CTA */}
          <motion.div 
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ 
              y: -5,
              boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Be First to Access Advanced Features
              </h3>
              <p className="text-gray-600 text-lg">
                Join our exclusive waitlist for early access to enterprise features and API access.
              </p>
            </motion.div>

            {/* Animated user count */}
            <motion.div 
              className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-4 mb-8 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center justify-center space-x-2">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Users className="w-5 h-5 text-blue-600" />
                </motion.div>
                <span className="font-semibold text-gray-900">
                  {userCount.toLocaleString()} truth seekers already joined
                </span>
                <motion.div 
                  className="w-2 h-2 bg-green-500 rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </div>
            </motion.div>

            <AnimatePresence mode="wait">
              {!isSubscribed ? (
                <motion.form 
                  key="form"
                  onSubmit={handleWaitlistSignup} 
                  className="flex flex-col md:flex-row gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 px-6 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  />
                  <motion.button
                    type="submit"
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 10px 25px rgba(34, 197, 94, 0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    Join Waitlist
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.div 
                    className="flex items-center justify-center space-x-2 text-green-800"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.5 }}
                    >
                      <FileCheck className="w-6 h-6" />
                    </motion.div>
                    <span className="font-semibold text-lg">Welcome to the truth revolution!</span>
                  </motion.div>
                  <p className="text-green-700 mt-2">We'll notify you when advanced features are ready.</p>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.p 
              className="text-sm text-gray-500 text-center mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
            >
              No spam, just updates on fighting misinformation. Unsubscribe anytime.
            </motion.p>
          </motion.div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default Stats;