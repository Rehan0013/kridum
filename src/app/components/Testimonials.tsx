'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const testimonials = [
  {
    content: "KridumAI has completely transformed how our team operates. The natural language capabilities and data analysis features have saved us countless hours every week.",
    author: "Sarah Johnson",
    position: "CTO, TechVision",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5
  },
  {
    content: "I was skeptical about AI tools, but KridumAI exceeded all my expectations. It's intuitive, powerful, and delivers consistent results. A game-changer for our content strategy.",
    author: "Michael Chen",
    position: "Marketing Director, GrowthLabs",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5
  },
  {
    content: "The customization options are incredible. We've integrated KridumAI across our entire workflow, and it adapts perfectly to each department's unique needs.",
    author: "Alex Rivera",
    position: "Operations Manager, Innovate Inc",
    avatar: "https://randomuser.me/api/portraits/women/63.jpg",
    rating: 4
  },
  {
    content: "The ROI we've seen since implementing KridumAI has been remarkable. It paid for itself within the first month and continues to drive efficiency across our organization.",
    author: "David Williams",
    position: "CEO, FutureTech",
    avatar: "https://randomuser.me/api/portraits/men/86.jpg",
    rating: 5
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <div className="glass p-8 rounded-xl h-full flex flex-col border bg-white/15">
    <div className="flex mb-6">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={18}
          className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-400"}
        />
      ))}
    </div>
    <p className="text-gray-300 mb-6 flex-grow italic">&ldquo;{testimonial.content}&rdquo;</p>
      <Image
        src={testimonial.avatar}
        alt={testimonial.author}
        width={48}
        height={48}
        className="rounded-full mr-4"
      />
      <div>
        <h4 className="font-bold">{testimonial.author}</h4>
        <p className="text-gray-400 text-sm">{testimonial.position}</p>
      </div>
    </div>
);

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonialsPerView = { mobile: 1, tablet: 2, desktop: 3 };
  const [itemsPerView, setItemsPerView] = useState(testimonialsPerView.desktop);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(testimonialsPerView.mobile);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(testimonialsPerView.tablet);
      } else {
        setItemsPerView(testimonialsPerView.desktop);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(testimonials.length / itemsPerView);

  const goToPrev = () => setActiveIndex((prev) => (prev > 0 ? prev - 1 : 0));
  const goToNext = () => setActiveIndex((prev) => (prev < totalSlides - 1 ? prev + 1 : prev));

  useEffect(() => {
    if (containerRef.current) {
      const scrollAmount = containerRef.current.scrollWidth / totalSlides * activeIndex;
      containerRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  }, [activeIndex, totalSlides]);

  return (
    <motion.section
      id="testimonials"
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="section-padding py-24 relative bg-[#0e0f23] px-12"
    >
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-purple-700/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-800 via-purple-600 to-red-500 bg-clip-text text-transparent text-5xl">
              What Our Users Say
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Trusted by companies and individuals worldwide
          </p>
        </div>

        <div className="relative">
          <div ref={containerRef} className="overflow-x-hidden">
            <div className="flex transition-all duration-500" style={{ width: `${100 * (testimonials.length / itemsPerView)}%` }}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="px-4" style={{ width: `${100 / testimonials.length}%` }}>
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-10 gap-4">
            <button onClick={goToPrev} disabled={activeIndex === 0}
              className="p-2 rounded-full bg-purple-900/60 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all cursor-pointer">
              <ChevronLeft size={24} />
            </button>
            <div className="flex space-x-2">
              {[...Array(totalSlides)].map((_, i) => (
                <button
                  key={i}
                  className={`w-3 h-3 rounded-full transition-all cursor-pointer ${i === activeIndex ? 'bg-purple-900/20' : 'bg-white/20'}`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
            <button onClick={goToNext} disabled={activeIndex === totalSlides - 1}
              className="p-2 rounded-full bg-purple-900/60 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all cursor-pointer">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
