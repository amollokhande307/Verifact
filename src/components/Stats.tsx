import React, { useState, useEffect } from 'react';
import { Users, FileCheck, Award, TrendingUp } from 'lucide-react';

const Stats: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [userCount, setUserCount] = useState(1247);

  useEffect(() => {
    const interval = setInterval(() => {
      setUserCount(prev => prev + Math.floor(Math.random() * 3));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

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
      value: '50,000+',
      label: 'Documents Verified',
      color: 'text-blue-600'
    },
    {
      icon: Users,
      value: '120+',
      label: 'Active Partnerships',
      color: 'text-green-600'
    },
    {
      icon: Award,
      value: '94.7%',
      label: 'Trust Score Accuracy',
      color: 'text-purple-600'
    },
    {
      icon: TrendingUp,
      value: '99.2%',
      label: 'Uptime Reliability',
      color: 'text-orange-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Truth Seekers Already Joined
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of organizations and individuals who trust Verifact to verify their content.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className={`w-16 h-16 ${stat.color.replace('text-', 'bg-').replace('-600', '-100')} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="font-bold text-2xl md:text-3xl text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Waitlist CTA */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Be First to Access Advanced Features
            </h3>
            <p className="text-gray-600 text-lg">
              Join our exclusive waitlist for early access to enterprise features and API access.
            </p>
          </div>

          {/* Animated user count */}
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-4 mb-8 text-center">
            <div className="flex items-center justify-center space-x-2">
              <Users className="w-5 h-5 text-blue-600" />
              <span className="font-semibold text-gray-900">
                {userCount.toLocaleString()} truth seekers already joined
              </span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>
          </div>

          {!isSubscribed ? (
            <form onSubmit={handleWaitlistSignup} className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-6 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              />
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 transform hover:scale-105"
              >
                Join Waitlist
              </button>
            </form>
          ) : (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
              <div className="flex items-center justify-center space-x-2 text-green-800">
                <FileCheck className="w-6 h-6" />
                <span className="font-semibold text-lg">Welcome to the truth revolution!</span>
              </div>
              <p className="text-green-700 mt-2">We'll notify you when advanced features are ready.</p>
            </div>
          )}

          <p className="text-sm text-gray-500 text-center mt-4">
            No spam, just updates on fighting misinformation. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stats;