"use client";

import React, { useState, useEffect } from 'react';
import { ChevronUp, ArrowUp, Rocket } from 'lucide-react';

// ScrollToTop Component
function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    
    setScrollProgress(scrollPercent);
    setIsVisible(scrollTop > 300);
  };

  // Set the top coordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isVisible && (
        <div className="relative group">
          {/* Progress Ring */}
          <svg className="w-14 h-14 transform -rotate-90 absolute inset-0">
            <circle
              cx="28"
              cy="28"
              r="24"
              stroke="currentColor"
              strokeWidth="3"
              fill="transparent"
              className="text-gray-300"
            />
            <circle
              cx="28"
              cy="28"
              r="24"
              stroke="currentColor"
              strokeWidth="3"
              fill="transparent"
              strokeDasharray={`${2 * Math.PI * 24}`}
              strokeDashoffset={`${2 * Math.PI * 24 * (1 - scrollProgress / 100)}`}
              className="text-blue-500 transition-all duration-300"
              strokeLinecap="round"
            />
          </svg>
          
          {/* Button */}
          <button
            onClick={scrollToTop}
            className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 active:scale-95 flex items-center justify-center group-hover:animate-bounce"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6" />
          </button>
          
          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <div className="bg-gray-800 text-white text-sm px-2 py-1 rounded whitespace-nowrap">
              Back to top
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Demo Content Component
function DemoSection({ title, children, bgColor = "bg-white" }) {
  return (
    <section className={`${bgColor} py-16 px-6`}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          {title}
        </h2>
        <div className="text-gray-600 leading-relaxed space-y-4">
          {children}
        </div>
      </div>
    </section>
  );
}

// Main Demo Component
export default function ScrollTopDemo() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            🚀 Scroll to Top Demo
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Scroll down to see the magic scroll-to-top button in action!
          </p>
          <div className="animate-bounce">
            <ChevronUp className="w-8 h-8 mx-auto rotate-180" />
          </div>
        </div>
      </section>

      {/* Demo Sections */}
      <DemoSection title="📖 About This Demo" bgColor="bg-gray-50">
        <p>
          This demo showcases a beautiful scroll-to-top button with several advanced features:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><strong>Progressive Circle:</strong> Shows scroll progress with a circular indicator</li>
          <li><strong>Smooth Animation:</strong> Appears/disappears with elegant transitions</li>
          <li><strong>Hover Effects:</strong> Interactive hover states with scaling and bounce</li>
          <li><strong>Accessibility:</strong> Proper ARIA labels and keyboard navigation</li>
          <li><strong>Smart Visibility:</strong> Only shows after scrolling down 300px</li>
        </ul>
      </DemoSection>

      <DemoSection title="🎨 Design Features">
        <p>
          The scroll-to-top button includes modern design elements that make it both functional and visually appealing:
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="font-bold text-blue-800 mb-3">🌈 Visual Appeal</h3>
            <p>Gradient backgrounds, smooth shadows, and modern rounded design that fits any website aesthetic.</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="font-bold text-purple-800 mb-3">📊 Progress Indicator</h3>
            <p>Circular progress ring that shows exactly how much of the page has been scrolled.</p>
          </div>
          <div className="bg-pink-50 p-6 rounded-lg">
            <h3 className="font-bold text-pink-800 mb-3">🎯 User Experience</h3>
            <p>Tooltip on hover, smooth scrolling behavior, and perfect positioning for optimal usability.</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="font-bold text-green-800 mb-3">⚡ Performance</h3>
            <p>Optimized scroll event handling with proper cleanup to prevent memory leaks.</p>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="💻 Implementation Details" bgColor="bg-gray-50">
        <p>
          The component uses React hooks for state management and includes several technical optimizations:
        </p>
        <div className="bg-gray-800 text-green-400 p-6 rounded-lg font-mono text-sm mt-6 overflow-x-auto">
          <div className="text-gray-300">// Key features implemented:</div>
          <div>• useState for visibility and progress tracking</div>
          <div>• useEffect for scroll event listeners</div>
          <div>• Smooth scrolling with behavior: 'smooth'</div>
          <div>• SVG circle for progress visualization</div>
          <div>• Tailwind CSS for responsive styling</div>
          <div>• Event cleanup to prevent memory leaks</div>
        </div>
      </DemoSection>

      <DemoSection title="🎪 More Content to Scroll Through">
        <p>
          Keep scrolling to test the button functionality! This section demonstrates how the button behaves with more content on the page.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-gradient-to-br from-gray-100 to-gray-200 p-6 rounded-lg">
              <h3 className="font-bold mb-3">Content Block {i + 1}</h3>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
              </p>
            </div>
          ))}
        </div>
      </DemoSection>

      <DemoSection title="🌟 Final Section" bgColor="bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="text-center">
          <p className="text-lg mb-8">
            You've reached the bottom! Now try clicking the scroll-to-top button to return to the beginning.
          </p>
          <div className="flex justify-center items-center space-x-4">
            <Rocket className="w-8 h-8 text-blue-500" />
            <span className="text-2xl">🎉</span>
            <Rocket className="w-8 h-8 text-purple-500" />
          </div>
        </div>
      </DemoSection>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}