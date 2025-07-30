import React from 'react';
import { Quote } from 'lucide-react';

const Testimonial: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-transparent"></div>
      <div className="absolute top-10 right-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Quote className="w-16 h-16 text-blue-400 mx-auto mb-8 opacity-80" />
        
        <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light text-white leading-relaxed mb-8">
          "We built Verifact because{' '}
          <span className="font-semibold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            we got scammed too
          </span>
          . Now, we protect others from the same deception that once fooled us."
        </blockquote>

        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">AT</span>
            </div>
            <div className="text-left">
              <p className="text-white font-semibold text-lg">Amol & Team</p>
              <p className="text-blue-300">Founders, Verifact</p>
            </div>
          </div>

          {/* Hand-signed signature effect */}
          <div className="mt-6">
            <svg 
              width="200" 
              height="60" 
              viewBox="0 0 200 60" 
              className="text-blue-400 opacity-80"
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M10 40 Q 30 20, 50 35 T 90 30 Q 120 25, 140 35 T 180 40" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round"
                className="animate-pulse"
              />
              <path 
                d="M20 45 Q 40 25, 60 40 T 100 35 Q 130 30, 150 40 T 190 45" 
                stroke="currentColor" 
                strokeWidth="1" 
                strokeLinecap="round"
                opacity="0.6"
              />
            </svg>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="mt-12 flex justify-center space-x-8 opacity-60">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;