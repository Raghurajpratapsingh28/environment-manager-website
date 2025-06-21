'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Download, Github, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl lg:text-7xl font-bold text-white mb-6"
            >
              Master Your{' '}
              <span className="text-gradient-high-contrast">Environment Variables</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl lg:text-2xl text-white-80-better mb-8 leading-relaxed"
            >
              Simple. Secure. Cross-Platform.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg text-white-70-better mb-12 max-w-2xl"
            >
              Environment Manager is a powerful desktop application that helps developers manage environment variables effortlessly. 
              Built with Electron.js for seamless cross-platform compatibility.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={() => document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  <Download size={24} />
                  Download Now
                </span>
              </button>
              
              <a
                href="https://github.com/Raghurajpratapsingh28/Environment--Manager"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 glass-button rounded-full text-white font-semibold text-lg hover:scale-105 transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  <Github size={24} />
                  View on GitHub
                </span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex items-center gap-4 mt-8 justify-center lg:justify-start"
            >
              {/* <div className="flex items-center gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div> */}
              {/* <span className="text-white/70">Loved by 10,000+ developers</span> */}
            </motion.div>
          </motion.div>

          {/* Right Column - App Screenshot */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="glass-card-enhanced p-8">
              <Image
                src="/screenshot.png"
                alt="Environment Manager Application Screenshot"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
                priority
              />
            </div>
            
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 glass-card-enhanced p-4 rounded-2xl"
            >
              <div className="text-white-better text-center">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm text-white-70-better">Variables Managed</div>
              </div>
            </motion.div>
            
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              className="absolute -bottom-4 -left-4 glass-card-enhanced p-4 rounded-2xl"
            >
              <div className="text-white-better text-center">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm text-white-70-better">Secure Storage</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;