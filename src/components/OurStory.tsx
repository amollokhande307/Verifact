import React from 'react';
import { AlertTriangle, Shield, Users } from 'lucide-react';

const OurStory: React.FC = () => {
  const timelineItems = [
    {
      icon: AlertTriangle,
      title: "We saw a friend's fake certificate get accepted",
      description: "A close friend got a job with a forged degree. This opened our eyes to how easy it was to fool the system.",
      color: "text-red-500 bg-red-100"
    },
    {
      icon: AlertTriangle,
      title: "One of us got scammed by deepfake news",
      description: "False news about a stock crash cost our team member significant savings. We realized misinformation has real consequences.",
      color: "text-orange-500 bg-orange-100"
    },
    {
      icon: Shield,
      title: "We built Verifact to fight back",
      description: "Determined to prevent others from facing the same deception, we combined AI and human expertise to create a truth engine.",
      color: "text-green-500 bg-green-100"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Story
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every great solution starts with a personal problem. Here's how we discovered the truth crisis.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-200 via-orange-200 to-green-200"></div>

          {timelineItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline dot */}
                <div className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 ${item.color.split(' ')[1]} border-4 border-white rounded-full shadow-lg z-10`}></div>

                {/* Content */}
                <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 text-lg mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Team Photos Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">The Team Behind Verifact</h3>
          <div className="flex justify-center items-center space-x-8">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="group relative">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-300 rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:shadow-xl group-hover:scale-105">
                  <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="absolute inset-0 rounded-full bg-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;