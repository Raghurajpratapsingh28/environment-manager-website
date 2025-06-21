'use client';

import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ScreenshotCarousel = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const screenshots = [
    {
      src: '/screenshot1.png',
      alt: 'Environment Manager Main Interface',
      title: 'Main Dashboard',
      description: 'Clean and intuitive main interface for managing all your environment variables'
    },
    {
      src: '/screenshot2.png',
      alt: 'Environment Variable Editor',
      title: 'Environment Variable Editor',
      description: 'Powerful editor with syntax highlighting and validation'
    },
    {
      src: '/screenshot3.png',
      alt: 'Folder Structure',
      title: 'Folder Structure',
      description: 'View the folder structure of your environment variables'
    }
  ];

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <>
      <Carousel
        showArrows={true}
        showStatus={false}
        showIndicators={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        showThumbs={true}
        className="carousel-root"
        renderThumbs={() =>
          screenshots.map((screenshot, index) => (
            <div key={index} className="cursor-pointer">
              <Image
                src={screenshot.src}
                alt={screenshot.alt}
                width={120}
                height={80}
                className="rounded-lg"
              />
            </div>
          ))
        }
      >
        {screenshots.map((screenshot, index) => (
          <div key={index} className="relative group cursor-pointer">
            <div 
              className="relative rounded-2xl overflow-hidden"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={screenshot.src}
                alt={screenshot.alt}
                width={800}
                height={500}
                className="rounded-2xl transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="glass-button p-4 rounded-full">
                  <ZoomIn className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
            <div className="text-center mt-4">
              <h3 className="text-xl font-semibold text-white mb-2">{screenshot.title}</h3>
              <p className="text-white/70">{screenshot.description}</p>
            </div>
          </div>
        ))}
      </Carousel>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-6xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X size={32} />
              </button>
              
              <div className="glass-card p-4 rounded-2xl">
                <Image
                  src={screenshots[currentImage].src}
                  alt={screenshots[currentImage].alt}
                  width={1200}
                  height={800}
                  className="rounded-xl w-full h-auto"
                />
              </div>
              
              <div className="text-center mt-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {screenshots[currentImage].title}
                </h3>
                <p className="text-white/70 text-lg">
                  {screenshots[currentImage].description}
                </p>
              </div>
              
              {/* Navigation arrows */}
              <div className="absolute top-1/2 -translate-y-1/2 left-4">
                <button
                  onClick={() => setCurrentImage((prev) => (prev - 1 + screenshots.length) % screenshots.length)}
                  className="glass-button p-3 rounded-full hover:scale-110 transition-transform"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              </div>
              
              <div className="absolute top-1/2 -translate-y-1/2 right-4">
                <button
                  onClick={() => setCurrentImage((prev) => (prev + 1) % screenshots.length)}
                  className="glass-button p-3 rounded-full hover:scale-110 transition-transform"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ScreenshotCarousel;