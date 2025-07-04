import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import BlogCard from '../components/BlogCard';
import { blogPosts } from '../data/blogPosts';

const { FiBookOpen, FiTrendingUp, FiUsers, FiTarget } = FiIcons;

const Category = () => {
  const { category } = useParams();
  const categoryName = category.toUpperCase();
  
  const filteredPosts = blogPosts.filter(
    post => post.category.toLowerCase() === category.toLowerCase()
  );

  const categoryInfo = {
    sat: {
      name: 'SAT',
      description: 'Comprehensive SAT preparation strategies and tips',
      color: 'from-blue-500 to-blue-600',
      icon: FiTarget,
      stats: [
        { label: 'Average Score Improvement', value: '150+ points' },
        { label: 'Success Rate', value: '95%' },
        { label: 'Students Helped', value: '15,000+' }
      ]
    },
    act: {
      name: 'ACT',
      description: 'Expert ACT test preparation and scoring strategies',
      color: 'from-green-500 to-green-600',
      icon: FiBookOpen,
      stats: [
        { label: 'Average Score Improvement', value: '4+ points' },
        { label: 'Success Rate', value: '92%' },
        { label: 'Students Helped', value: '12,000+' }
      ]
    },
    gre: {
      name: 'GRE',
      description: 'Graduate school admission test preparation',
      color: 'from-purple-500 to-purple-600',
      icon: FiTrendingUp,
      stats: [
        { label: 'Average Score Improvement', value: '10+ points' },
        { label: 'Success Rate', value: '88%' },
        { label: 'Students Helped', value: '8,000+' }
      ]
    },
    gmat: {
      name: 'GMAT',
      description: 'Business school test preparation excellence',
      color: 'from-red-500 to-red-600',
      icon: FiUsers,
      stats: [
        { label: 'Average Score Improvement', value: '80+ points' },
        { label: 'Success Rate', value: '90%' },
        { label: 'Students Helped', value: '6,000+' }
      ]
    },
    lsat: {
      name: 'LSAT',
      description: 'Law school admission test mastery',
      color: 'from-indigo-500 to-indigo-600',
      icon: FiBookOpen,
      stats: [
        { label: 'Average Score Improvement', value: '8+ points' },
        { label: 'Success Rate', value: '85%' },
        { label: 'Students Helped', value: '4,000+' }
      ]
    },
    mcat: {
      name: 'MCAT',
      description: 'Medical school test preparation guide',
      color: 'from-pink-500 to-pink-600',
      icon: FiTarget,
      stats: [
        { label: 'Average Score Improvement', value: '12+ points' },
        { label: 'Success Rate', value: '87%' },
        { label: 'Students Helped', value: '3,000+' }
      ]
    }
  };

  const info = categoryInfo[category.toLowerCase()] || {
    name: categoryName,
    description: 'Test preparation resources and strategies',
    color: 'from-gray-500 to-gray-600',
    icon: FiBookOpen,
    stats: []
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className={`bg-gradient-to-r ${info.color} text-white py-20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-white bg-opacity-20 p-4 rounded-full">
                <SafeIcon icon={info.icon} className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {info.name} Test Prep
            </h1>
            <p className="text-xl md:text-2xl text-white text-opacity-90 mb-8 max-w-3xl mx-auto">
              {info.description}
            </p>
            <div className="bg-white bg-opacity-10 rounded-lg p-2 inline-block">
              <span className="text-white font-medium">
                {filteredPosts.length} Expert Articles Available
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      {info.stats.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {info.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Articles Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {info.name} Preparation Articles
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Expert strategies and comprehensive guides to help you excel in your {info.name} preparation
            </p>
          </div>

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <BlogCard post={post} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
                <SafeIcon icon={FiBookOpen} className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  No Articles Yet
                </h3>
                <p className="text-gray-600">
                  We're working on adding more {info.name} preparation content. Check back soon!
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Category;