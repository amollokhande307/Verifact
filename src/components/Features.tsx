import React from 'react';
import { FileText, Newspaper, GraduationCap, Bot } from 'lucide-react';

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

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Advanced AI technology meets human expertise to deliver comprehensive truth verification.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className={`group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl ${feature.glowColor} transition-all duration-300 transform hover:-translate-y-2`}>
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Trust Score Badge for AI Trust Score */}
                {feature.title === "AI Trust Score" && (
                  <div className="mt-4 flex items-center space-x-2">
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      92/100
                    </div>
                    <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
                      ⚠️ Medium
                    </div>
                    <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                      ❌ Low
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;