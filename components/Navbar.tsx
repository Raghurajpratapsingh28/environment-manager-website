'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Menu, X, Settings, Github } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'Features', href: '#features' },
    { name: 'Screenshots', href: '#screenshots' },
    { name: 'Download', href: '#download' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleGitHubClick = () => {
    // Replace with your actual GitHub repository URL
    window.open('https://github.com/Raghurajpratapsingh28/Environment--Manager', '_blank');
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass backdrop-blur-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Settings className="h-8 w-8 text-white" />
            <span className="text-xl font-bold text-white">Environment Manager</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-white/80 hover:text-white transition-colors duration-200 font-medium"
              >
                {item.name}
              </button>
            ))}
            
            {/* GitHub Star Button */}
            <button
              onClick={handleGitHubClick}
              className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-all duration-200 font-medium backdrop-blur-sm border border-white/20"
            >
              <Github size={18} />
              <span>Star on GitHub</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden glass backdrop-blur-lg"
        >
          <div className="px-4 py-2 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-3 py-2 text-white/80 hover:text-white transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
            
            {/* Mobile GitHub Star Button */}
            <button
              onClick={handleGitHubClick}
              className="flex items-center space-x-2 w-full text-left px-3 py-2 text-white/80 hover:text-white transition-colors duration-200"
            >
              <Github size={18} />
              <span>Star on GitHub</span>
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;