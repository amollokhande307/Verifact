import React from 'react';
import { Calendar, ArrowRight, Eye } from 'lucide-react';

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

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Truth Library
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Insights, research, and stories from the frontlines of the fight against misinformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{post.views}</span>
                    </div>
                  </div>
                  <span className="font-medium">{post.readTime}</span>
                </div>

                <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold group/btn">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;