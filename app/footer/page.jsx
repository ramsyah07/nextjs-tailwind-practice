"use client";

import React, { useState, useEffect } from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Github, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUp, 
  Heart,
  Send,
  ChevronRight,
  Star,
  Zap
} from 'lucide-react';

// Interactive Footer Component
function InteractiveFooter() {
  const [email, setEmail] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [likedSocial, setLikedSocial] = useState(null);
  const [newsletterStatus, setNewsletterStatus] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socialLinks = [
    { icon: Facebook, name: 'Facebook', color: 'hover:text-blue-600', bgColor: 'hover:bg-blue-50' },
    { icon: Twitter, name: 'Twitter', color: 'hover:text-sky-500', bgColor: 'hover:bg-sky-50' },
    { icon: Instagram, name: 'Instagram', color: 'hover:text-pink-600', bgColor: 'hover:bg-pink-50' },
    { icon: Linkedin, name: 'LinkedIn', color: 'hover:text-blue-700', bgColor: 'hover:bg-blue-50' },
    { icon: Github, name: 'GitHub', color: 'hover:text-gray-800', bgColor: 'hover:bg-gray-100' },
  ];

  const quickLinks = [
    'About Us', 'Services', 'Portfolio', 'Blog', 'Contact', 'Privacy Policy'
  ];

  const handleNewsletterSubmit = () => {
    if (email) {
      setNewsletterStatus('subscribed');
      setEmail('');
      setTimeout(() => setNewsletterStatus(''), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-pink-500 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div className="space-y-6">
            <div className="group">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                Your Company
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Creating amazing digital experiences with passion and innovation. Let's build something extraordinary together.
              </p>
            </div>
            
            {/* Contact Info with Icons */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 group cursor-pointer">
                <div className="p-2 bg-purple-600 rounded-lg group-hover:bg-purple-500 transition-colors duration-300">
                  <Mail size={16} />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">hello@company.com</span>
              </div>
              <div className="flex items-center space-x-3 group cursor-pointer">
                <div className="p-2 bg-blue-600 rounded-lg group-hover:bg-blue-500 transition-colors duration-300">
                  <Phone size={16} />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 group cursor-pointer">
                <div className="p-2 bg-green-600 rounded-lg group-hover:bg-green-500 transition-colors duration-300">
                  <MapPin size={16} />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">New York, NY</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="group flex items-center text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2"
                  >
                    <ChevronRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span>{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="lg:col-span-2">
            <h4 className="text-xl font-semibold mb-6 text-white flex items-center">
              <Zap className="mr-2 text-yellow-400" size={20} />
              Stay Updated
            </h4>
            <p className="text-gray-300 mb-6">Subscribe to our newsletter for the latest updates and exclusive content.</p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                />
              </div>
              <button
                onClick={handleNewsletterSubmit}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2"
              >
                <Send size={18} />
                <span>Subscribe</span>
              </button>
            </div>
            
            {newsletterStatus === 'subscribed' && (
              <div className="mt-4 p-3 bg-green-500/20 border border-green-500/30 rounded-lg text-green-300 animate-fadeIn">
                <div className="flex items-center space-x-2">
                  <Star size={16} />
                  <span>Thank you for subscribing!</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Social Media Links */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <button
                      key={index}
                      onClick={() => setLikedSocial(social.name)}
                      className={`group relative p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.bgColor} ${social.color}`}
                    >
                      <IconComponent size={20} className="transition-colors duration-300" />
                      
                      {/* Floating heart animation */}
                      {likedSocial === social.name && (
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                          <Heart size={16} className="text-red-500 fill-current" />
                        </div>
                      )}
                      
                      {/* Tooltip */}
                      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                        {social.name}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
            
            {/* Statistics */}
            <div className="flex space-x-8 text-center">
              <div className="group cursor-pointer">
                <div className="text-2xl font-bold text-purple-400 group-hover:text-purple-300 transition-colors duration-300">1000+</div>
                <div className="text-gray-400 text-sm">Happy Clients</div>
              </div>
              <div className="group cursor-pointer">
                <div className="text-2xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors duration-300">50+</div>
                <div className="text-gray-400 text-sm">Projects</div>
              </div>
              <div className="group cursor-pointer">
                <div className="text-2xl font-bold text-green-400 group-hover:text-green-300 transition-colors duration-300">5</div>
                <div className="text-gray-400 text-sm">Years</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-white/20 pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-gray-400 text-sm">
            © 2025 Your Company. Made with <Heart size={14} className="inline text-red-500 fill-current mx-1" /> by our team.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Cookies</a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </footer>
  );
}

// Main Demo Component
export default function InteractiveFooterDemo() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-gray-50 to-gray-100">
      <main className="flex-1 p-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Interactive Footer Demo
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            This page demonstrates a modern, interactive footer with animations, hover effects, and engaging elements.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="p-6 bg-white rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">✨ Interactive Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Animated background elements</li>
                <li>• Hover effects on social icons</li>
                <li>• Newsletter subscription form</li>
                <li>• Scroll-to-top button</li>
                <li>• Gradient backgrounds</li>
              </ul>
            </div>
            
            <div className="p-6 bg-white rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">🎨 Visual Enhancements</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Glassmorphism effects</li>
                <li>• Smooth transitions</li>
                <li>• Interactive statistics</li>
                <li>• Tooltips on hover</li>
                <li>• Responsive design</li>
              </ul>
            </div>
          </div>
          
          {/* Add some content to demonstrate scroll functionality */}
          <div className="space-y-8">
            {Array.from({ length: 5 }, (_, i) => (
              <div key={i} className="p-6 bg-white rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Section {i + 1}</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <InteractiveFooter />
    </div>
  );
}