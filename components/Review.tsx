'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Star, User, CheckCircle, MessageSquare, Send, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

interface Review {
  id: string;
  name: string;
  email: string;
  rating: number;
  title: string;
  content: string;
  avatar?: string;
  verified: boolean;
  createdAt: string;
}

export default function Review() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 5,
    title: '',
    content: '',
  });
  const { toast } = useToast();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchReviews();
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const cardWidth = 400; // Approximate card width including gap
      const scrollLeft = container.scrollLeft;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setCurrentIndex(Math.max(0, Math.min(newIndex, reviews.length - 1)));
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [reviews.length]);

  const fetchReviews = async () => {
    try {
      const response = await fetch('/api/reviews');
      if (response.ok) {
        const data = await response.json();
        setReviews(data);
      }
    } catch (error) {
      console.error('Error fetching reviews:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      console.log('Submitting form data:', formData);
      
      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('Response status:', response.status);

      if (response.ok) {
        const newReview = await response.json();
        setReviews([newReview, ...reviews]);
        setFormData({
          name: '',
          email: '',
          rating: 5,
          title: '',
          content: '',
        });
        toast({
          title: 'Review submitted!',
          description: 'Thank you for your review.',
        });
      } else {
        const errorData = await response.json();
        console.error('Error response:', errorData);
        
        let errorMessage = 'Failed to submit review';
        if (errorData.error === 'Validation error' && errorData.details) {
          errorMessage = errorData.details.map((err: any) => `${err.field}: ${err.message}`).join(', ');
        } else if (errorData.error) {
          errorMessage = errorData.error;
        }
        
        toast({
          title: 'Error',
          description: errorMessage,
          variant: 'destructive',
        });
      }
    } catch (error) {
      console.error('Network error:', error);
      toast({
        title: 'Error',
        description: 'Failed to submit review. Please check your connection and try again.',
        variant: 'destructive',
      });
    } finally {
      setSubmitting(false);
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-white/30'
        }`}
      />
    ));
  };

  const scrollToReview = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = 400; // Approximate card width including gap
      const scrollPosition = index * cardWidth;
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  };

  const scrollLeft = () => {
    if (currentIndex > 0) {
      scrollToReview(currentIndex - 1);
    }
  };

  const scrollRight = () => {
    if (currentIndex < reviews.length - 1) {
      scrollToReview(currentIndex + 1);
    }
  };

  return (
    <section id="reviews" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            What Our <span className="text-gradient">Users Say</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied developers who have transformed their environment management experience
          </p>
        </motion.div>

        {/* Reviews Carousel Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
              <p className="text-white/70">Loading reviews...</p>
            </div>
          ) : reviews.length === 0 ? (
            <div className="text-center py-12">
              <div className="glass-card p-8 rounded-3xl">
                <MessageSquare className="w-16 h-16 text-white/50 mx-auto mb-4" />
                <p className="text-white/70 text-lg">No reviews yet. Be the first to review!</p>
              </div>
            </div>
          ) : (
            <div className="relative">
              {/* Horizontal Scrolling Reviews Container */}
              <div className="overflow-hidden">
                <div className="flex gap-6 pb-4 scroll-container scroll-smooth overflow-x-auto" ref={scrollContainerRef}>
                  {reviews.map((review, index) => (
                    <motion.div
                      key={review.id}
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="glass-card p-6 rounded-2xl hover:shadow-2xl transition-all duration-300 min-w-[350px] max-w-[400px] flex-shrink-0"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                            <User className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-semibold text-white text-lg">{review.name}</h4>
                              {review.verified && (
                                <CheckCircle className="w-5 h-5 text-green-400" />
                              )}
                            </div>
                            <div className="flex items-center gap-3 mt-1">
                              <div className="flex gap-1">
                                {renderStars(review.rating)}
                              </div>
                              <span className="text-sm text-white/50">
                                {new Date(review.createdAt).toLocaleDateString()}
                              </span>
                            </div>
                          </div>
                        </div>
                        {review.verified && (
                          <div className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full">
                            <span className="text-green-400 text-sm font-medium">Verified</span>
                          </div>
                        )}
                      </div>
                      
                      <h5 className="font-semibold text-white text-lg mb-3">{review.title}</h5>
                      <p className="text-white/70 leading-relaxed line-clamp-4">{review.content}</p>
                      
                      <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-4 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Scroll Indicators */}
              <div className="flex justify-center items-center mt-8 gap-4">
                <button
                  onClick={scrollLeft}
                  disabled={currentIndex === 0}
                  className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center backdrop-blur-md border border-white/30"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>
                
                <div className="flex gap-2">
                  {reviews.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => scrollToReview(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentIndex 
                          ? 'bg-gradient-to-r from-blue-500 to-purple-600' 
                          : 'bg-white/30 hover:bg-white/50'
                      }`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={scrollRight}
                  disabled={currentIndex === reviews.length - 1}
                  className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center backdrop-blur-md border border-white/30"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          )}
        </motion.div>

        {/* Review Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-card p-8 rounded-3xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Write a Review</h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Name
                  </label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="glass bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-white/40"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="glass bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-white/40"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Rating
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormData({ ...formData, rating: star })}
                      className="focus:outline-none hover:scale-110 transition-transform duration-200"
                    >
                      <Star
                        className={`w-8 h-8 ${
                          star <= formData.rating
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-white/30'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Title
                </label>
                <Input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                  className="glass bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-white/40"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Review
                </label>
                <Textarea
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  rows={4}
                  required
                  className="glass bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-white/40 resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={submitting}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  {submitting ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                  {submitting ? 'Submitting...' : 'Submit Review'}
                </span>
              </Button>
            </form>
          </div>
        </motion.div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="glass-card p-8 rounded-3xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Join Our Community
            </h3>
            <p className="text-white/70 leading-relaxed">
              Share your experience with Environment Manager and help other developers discover the best way to manage their environment variables. 
              Your feedback helps us improve and build better tools for the developer community.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 