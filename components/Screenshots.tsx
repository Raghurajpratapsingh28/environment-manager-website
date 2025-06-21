'use client';

import { motion } from 'framer-motion';
import ScreenshotCarousel from './ScreenshotCarousel';

const Screenshots = () => {
  return (
    <section id="screenshots" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            See It In <span className="text-gradient">Action</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Explore the clean, intuitive interface that makes managing environment variables a breeze
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="glass-card p-8 rounded-3xl"
        >
          <ScreenshotCarousel />
        </motion.div>

        {/* Feature Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-2">Clean UI</div>
            <p className="text-white/70">Intuitive interface designed for productivity</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-2">Fast Performance</div>
            <p className="text-white/70">Lightning-fast operations with minimal resource usage</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-2">Smart Organization</div>
            <p className="text-white/70">Intelligent categorization and search capabilities</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Screenshots;