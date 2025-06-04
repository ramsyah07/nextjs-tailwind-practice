import React from 'react';

// Enhanced Card Component
function Card({ title, description, image, features, color }) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden max-w-sm group hover:scale-105">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-white text-sm font-medium ${color}`}>
          Popular
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-800 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <button className={`w-full py-2 px-4 rounded-lg text-white font-medium transition-colors duration-200 ${color} hover:opacity-90`}>
          Learn More
        </button>
      </div>
    </div>
  );
}

export default function CardDemo() {
  const cards = [
    {
      title: "Next.js",
      description: "The React framework for production-ready applications. Built by Vercel, Next.js enables you to create full-stack web applications with powerful features like server-side rendering, static site generation, and API routes.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      features: [
        "Server-side rendering (SSR)",
        "Static site generation (SSG)",
        "API routes built-in",
        "Automatic code splitting",
        "Image optimization"
      ],
      color: "bg-black"
    },
    {
      title: "Tailwind CSS",
      description: "A utility-first CSS framework for rapidly building modern websites. Instead of writing custom CSS, you compose your design using pre-built utility classes that can be applied directly in your HTML markup.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      features: [
        "Utility-first approach",
        "Responsive design system",
        "Dark mode support",
        "JIT compilation",
        "Customizable design tokens"
      ],
      color: "bg-cyan-500"
    },
    {
      title: "Framer Motion",
      description: "A powerful animation library for React that makes it easy to create smooth, interactive animations. From simple hover effects to complex page transitions, Framer Motion provides the tools to bring your interfaces to life.",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      features: [
        "Declarative animations",
        "Gesture recognition",
        "Layout animations",
        "Page transitions",
        "SVG path animations"
      ],
      color: "bg-purple-600"
    },
    {
      title: "TypeScript",
      description: "A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. TypeScript adds static type definitions to JavaScript, helping catch errors early and improve code quality.",
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1428&q=80",
      features: [
        "Static type checking",
        "Enhanced IDE support",
        "Modern JavaScript features",
        "Gradual adoption",
        "Rich ecosystem"
      ],
      color: "bg-blue-600"
    },
    {
      title: "React Query",
      description: "Powerful data synchronization for React applications. React Query makes fetching, caching, synchronizing and updating server state effortless with zero-config and highly customizable options.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80",
      features: [
        "Automatic caching",
        "Background updates",
        "Optimistic updates",
        "Error handling",
        "DevTools support"
      ],
      color: "bg-red-500"
    },
    {
      title: "Prisma",
      description: "Next-generation ORM for Node.js and TypeScript. Prisma provides a type-safe database client, intuitive data modeling, and powerful migration system for modern application development.",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1421&q=80",
      features: [
        "Type-safe database client",
        "Visual data modeling",
        "Auto-generated migrations",
        "Query optimization",
        "Multi-database support"
      ],
      color: "bg-green-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Modern Web Development Stack
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the essential tools and frameworks that power today's web applications. 
            Each technology offers unique capabilities to enhance your development workflow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-500">
            Click "Learn More" on any card to explore these technologies further
          </p>
        </div>
      </div>
    </div>
  );
}
