import React from 'react';

const ParticleBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Multiple layers of particles for depth */}
      <div className="absolute inset-0">
        {/* Layer 1 - Small particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`particle-1-${i}`}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
        
        {/* Layer 2 - Medium particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`particle-2-${i}`}
            className="absolute w-2 h-2 bg-purple-400/20 rounded-full animate-float-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
            }}
          />
        ))}
        
        {/* Layer 3 - Large particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`particle-3-${i}`}
            className="absolute w-3 h-3 bg-indigo-400/15 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 2}s`,
            }}
          />
        ))}
        
        {/* Glowing orbs */}
        {[...Array(5)].map((_, i) => (
          <div
            key={`orb-${i}`}
            className="absolute w-4 h-4 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-sm animate-pulse-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
      
      {/* Interactive hover effect container */}
      <div className="absolute inset-0 group">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/10 to-purple-50/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
      </div>
    </div>
  );
};

export default ParticleBackground; 