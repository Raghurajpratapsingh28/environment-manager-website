'use client';

import { motion } from 'framer-motion';
import FeatureCard from './FeatureCard';
import { Database, Edit3, Lock, Monitor } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Database,
      title: 'Form-Based Management',
      description: 'Intuitive form interface for adding, editing, and organizing your environment variables with ease.',
    },
    {
      icon: Edit3,
      title: 'Effortless Editing',
      description: 'Quickly modify or delete variables with our streamlined interface. No command line required.',
    },
    {
      icon: Lock,
      title: 'Secure Local Storage',
      description: 'Your environment variables are stored securely in encrypted JSON files on your local machine.',
    },
    {
      icon: Monitor,
      title: 'Cross-Platform Support',
      description: 'Works seamlessly on Windows, macOS, and Linux. One app, all your environments.',
    },
  ];

  return (
    <section id="features" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Powerful <span className="text-gradient">Features</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Everything you need to manage environment variables efficiently and securely
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="glass-card p-8 rounded-3xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Built for Developers, by Developer
            </h3>
            <p className="text-white/70 leading-relaxed">
              Environment Manager was created to solve the common problem of managing environment variables 
              across different projects and environments. With its clean interface and robust security, 
              it's the perfect tool for developers who want to stay organized and secure.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;