import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Eye } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      title: "🎭 Deepfake Scams in 2025",
      excerpt: "How AI-generated content is fooling millions and what you can do to protect yourself from sophisticated deepfake attacks.",
      date: "March 15, 2025",
      readTime: "5 min read",
      views: "2.1k",
      category: "AI Security",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "📜 Forged Certificates in India",
      excerpt: "An in-depth analysis of the certificate forgery crisis in Indian educational and professional sectors.",
      date: "March 12, 2025",
      readTime: "8 min read",
      views: "1.8k",
      category: "Document Security",
      image: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "🤖 How AI Detects Misinformation",
      excerpt: "Behind the scenes: The machine learning algorithms and techniques powering modern fact-checking systems.",
      date: "March 10, 2025",
      readTime: "6 min read",
      views: "3.2k",
      category: "Technology",
      image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -15,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gray-50" id="blog">
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
              The Truth Library
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Insights, research, and stories from the frontlines of the fight against misinformation.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {blogPosts.map((post, index) => (
              <motion.article 
                key={index} 
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 perspective-1000"
                variants={cardVariants}
                whileHover={{ 
                  y: -10,
                  rotateY: 5,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="relative overflow-hidden"
                  variants={imageVariants}
                  whileHover="hover"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <motion.div 
                    className="absolute top-4 left-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </motion.div>
                </motion.div>

                <div className="p-6">
                  <motion.h3 
                    className="font-bold text-xl text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {post.title}
                  </motion.h3>

                  <motion.p 
                    className="text-gray-600 mb-4 line-clamp-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {post.excerpt}
                  </motion.p>

                  <motion.div 
                    className="flex items-center justify-between text-sm text-gray-500 mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center space-x-4">
                      <motion.div 
                        className="flex items-center space-x-1"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </motion.div>
                      <motion.div 
                        className="flex items-center space-x-1"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Eye className="w-4 h-4" />
                        <span>{post.views}</span>
                      </motion.div>
                    </div>
                    <span className="font-medium">{post.readTime}</span>
                  </motion.div>

                  <motion.button 
                    className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold group/btn"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span>Read More</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </motion.button>
                </div>
              </motion.article>
            ))}
          </motion.div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              View All Articles
            </motion.button>
          </motion.div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default Blog;