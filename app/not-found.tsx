'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <div className="glass-card p-12 max-w-md mx-auto">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="mb-8"
          >
            <div className="text-8xl font-bold text-gradient mb-4">404</div>
            <h1 className="text-2xl font-semibold text-white mb-2">Page Not Found</h1>
            <p className="text-white/70 mb-8">
              Sorry, we couldn't find the page you're looking for.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 glass-button rounded-full text-white font-medium hover:scale-105 transition-transform"
            >
              <Home size={20} />
              Back to Home
            </Link>
            
            <div className="text-sm text-white/50">
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center gap-1 hover:text-white/70 transition-colors"
              >
                <ArrowLeft size={16} />
                Go back
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}