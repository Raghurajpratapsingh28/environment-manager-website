'use client';

import { motion } from 'framer-motion';
import { Download as DownloadIcon, Apple, Monitor, Github, Star, Users } from 'lucide-react';

const Download = () => {
  const stats = [
    { icon: Users, label: 'Active Users', value: '3+' },
    { icon: Star, label: 'GitHub Stars', value: '4+' },
    { icon: DownloadIcon, label: 'Downloads', value: '5+' },
  ];

  return (
    <section id="download" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Get <span className="text-gradient">Environment Manager</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Download Environment Manager today and start managing your environment variables like a pro. 
            Available for all major platforms.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="glass-card p-6 rounded-2xl text-center">
              <stat.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-white/70">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Download Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row gap-8 justify-center items-center"
        >
          {/* Windows Download */}
          <motion.a
            href="https://github.com/Raghurajpratapsingh28/Environment--Manager/releases/download/desktop/Environment.Manager.exe"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group glass-card p-8 rounded-3xl hover:shadow-2xl transition-all duration-300 w-full max-w-sm"
          >
            <div className="flex items-center justify-center mb-6">
              <Monitor className="w-16 h-16 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Windows</h3>
            <p className="text-white/70 mb-6">Compatible with Windows 10 and 11</p>
            <div className="flex items-center justify-center gap-2 text-blue-400 font-semibold">
              <DownloadIcon size={20} />
              Download .exe
            </div>
          </motion.a>

          {/* macOS Download */}
          <motion.a
            href="https://github.com/Raghurajpratapsingh28/Environment--Manager/releases/download/desktop/Environment.Manager-1.0.0-arm64.dmg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group glass-card p-8 rounded-3xl hover:shadow-2xl transition-all duration-300 w-full max-w-sm"
          >
            <div className="flex items-center justify-center mb-6">
              <Apple className="w-16 h-16 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">macOS</h3>
            <p className="text-white/70 mb-6">Compatible with macOS 10.14+</p>
            <div className="flex items-center justify-center gap-2 text-blue-400 font-semibold">
              <DownloadIcon size={20} />
              Download .dmg
            </div>
          </motion.a>

          {/* GitHub Link */}
          <motion.a
            href="https://github.com/Raghurajpratapsingh28/Environment--Manager/archive/refs/tags/desktop.zip"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group glass-card p-8 rounded-3xl hover:shadow-2xl transition-all duration-300 w-full max-w-sm"
          >
            <div className="flex items-center justify-center mb-6">
              <Github className="w-16 h-16 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Source Code</h3>
            <p className="text-white/70 mb-6">Download the source code in zip format</p>
            <div className="flex items-center justify-center gap-2 text-blue-400 font-semibold">
              <Github size={20} />
              View Repository
            </div>
          </motion.a>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass-card p-8 rounded-3xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">System Requirements</h3>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Windows</h4>
                <ul className="text-white/70 space-y-1">
                  <li>• Windows 10 or later</li>
                  <li>• 4GB RAM minimum</li>
                  <li>• 100MB free disk space</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">macOS</h4>
                <ul className="text-white/70 space-y-1">
                  <li>• macOS 10.14 or later</li>
                  <li>• 4GB RAM minimum</li>
                  <li>• 100MB free disk space</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Download;