import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { blogPosts } from '../data/blogPosts';

const { FiArrowLeft, FiUser, FiClock, FiCalendar, FiTag, FiShare2 } = FiIcons;

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
          <Link
            to="/"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  // Convert content to paragraphs for better display
  const formatContent = (content) => {
    return content.split('\n').map((paragraph, index) => {
      if (paragraph.trim() === '') return null;
      
      if (paragraph.startsWith('# ')) {
        return (
          <h1 key={index} className="text-4xl font-bold text-gray-900 mb-6 mt-8">
            {paragraph.replace('# ', '')}
          </h1>
        );
      }
      
      if (paragraph.startsWith('## ')) {
        return (
          <h2 key={index} className="text-3xl font-bold text-gray-900 mb-4 mt-8">
            {paragraph.replace('## ', '')}
          </h2>
        );
      }
      
      if (paragraph.startsWith('### ')) {
        return (
          <h3 key={index} className="text-2xl font-bold text-gray-900 mb-3 mt-6">
            {paragraph.replace('### ', '')}
          </h3>
        );
      }
      
      if (paragraph.startsWith('#### ')) {
        return (
          <h4 key={index} className="text-xl font-bold text-gray-900 mb-2 mt-4">
            {paragraph.replace('#### ', '')}
          </h4>
        );
      }
      
      if (paragraph.startsWith('- ')) {
        return (
          <li key={index} className="text-gray-700 mb-2">
            {paragraph.replace('- ', '')}
          </li>
        );
      }
      
      if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
        return (
          <p key={index} className="text-gray-700 mb-4 font-bold">
            {paragraph.replace(/\*\*/g, '')}
          </p>
        );
      }
      
      return (
        <p key={index} className="text-gray-700 mb-4 leading-relaxed">
          {paragraph}
        </p>
      );
    }).filter(Boolean);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-blue-200 hover:text-white mb-6 transition-colors"
          >
            <SafeIcon icon={FiArrowLeft} className="h-5 w-5" />
            <span>Back to Home</span>
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
              {post.category}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {post.title}
            </h1>
            <p className="text-xl text-blue-100 mb-6 leading-relaxed">
              {post.excerpt}
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-blue-200">
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiUser} className="h-5 w-5" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiCalendar} className="h-5 w-5" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiClock} className="h-5 w-5" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Featured Image */}
          <div className="relative h-64 md:h-80">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Content */}
          <div className="p-8 md:p-12">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            {/* Article Body */}
            <div className="prose prose-lg max-w-none">
              {formatContent(post.content)}
            </div>
            
            {/* Share Section */}
            <div className="border-t border-gray-200 pt-8 mt-12">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiShare2} className="h-5 w-5 text-gray-600" />
                  <span className="text-gray-600 font-medium">Share this article</span>
                </div>
                <div className="flex space-x-4">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Twitter
                  </button>
                  <button className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors">
                    Facebook
                  </button>
                  <button className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors">
                    LinkedIn
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;