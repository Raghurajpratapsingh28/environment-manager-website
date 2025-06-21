'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Settings, Github, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'About', href: '#about' },
    { name: 'Features', href: '#features' },
    { name: 'Screenshots', href: '#screenshots' },
    { name: 'Download', href: '#download' },
  ];

  const socialLinks = [
    { 
      name: 'GitHub', 
      href: 'https://github.com/Raghurajpratapsingh28/Environment--Manager',
      icon: Github 
    },
    {   
      name: 'Contact', 
      href: 'mailto:raghurajpratap2810@gmail.com',
      icon: Mail 
    },
  ];

  return (
    <footer className="py-16 px-4 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-12 mb-12"
        >
          {/* Logo and Description */}
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <Settings className="h-8 w-8 text-white" />
              <span className="text-2xl font-bold text-white">Environment Manager</span>
            </Link>
            <p className="text-white/70 leading-relaxed mb-6">
              The ultimate desktop application for managing environment variables. 
              Simple, secure, and cross-platform.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="glass-button p-3 rounded-full hover:scale-110 transition-transform"
                  aria-label={link.name}
                >
                  <link.icon size={20} className="text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter/Updates */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Stay Updated</h3>
            <p className="text-white/70 mb-6">
              Get notified about new releases and updates.
            </p>
            <a
              href="https://github.com/Raghurajpratapsingh28/Environment--Manager/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block glass-button px-6 py-3 rounded-full text-white font-medium hover:scale-105 transition-transform"
            >
              Watch Releases
            </a>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-white/70">
              <span>© {currentYear} Environment Manager. Made with</span>
              <Heart size={18} className="text-red-400 fill-current" />
              <span>by Raghuraj Pratap Singh</span>
            </div>
            
            {/* <div className="flex items-center gap-6 text-sm text-white/70">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>License: MIT</span>
            </div> */}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;