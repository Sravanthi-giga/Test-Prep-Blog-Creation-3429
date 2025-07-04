import React from 'react';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiBookOpen, FiMail, FiTwitter, FiFacebook, FiInstagram, FiLinkedin } = FiIcons;

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <SafeIcon icon={FiBookOpen} className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Test Prep Pundits</h3>
                <p className="text-sm text-gray-400">Your Success, Our Expertise</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Empowering students with expert test preparation strategies, comprehensive guides, 
              and proven techniques to excel in standardized tests.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <SafeIcon icon={FiTwitter} className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <SafeIcon icon={FiFacebook} className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <SafeIcon icon={FiInstagram} className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <SafeIcon icon={FiLinkedin} className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Test Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Test Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/category/sat" className="text-gray-400 hover:text-white transition-colors">
                  SAT Prep
                </Link>
              </li>
              <li>
                <Link to="/category/act" className="text-gray-400 hover:text-white transition-colors">
                  ACT Prep
                </Link>
              </li>
              <li>
                <Link to="/category/gre" className="text-gray-400 hover:text-white transition-colors">
                  GRE Prep
                </Link>
              </li>
              <li>
                <Link to="/category/gmat" className="text-gray-400 hover:text-white transition-colors">
                  GMAT Prep
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Test Prep Pundits. All rights reserved. Built with expertise and passion for education.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;