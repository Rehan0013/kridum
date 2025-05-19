'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { hero } from '../assets';

const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'The Future of AI Assistant';
  const typingSpeed = 100;

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id='home' className="pt-20 md:pt-20 pb-20 bg-gray-300 dark:bg-[#0e0f23] text-black dark:text-white relative overflow-hidden lg:h-screen">
      
      {/* Background gradients */}
      <div className="absolute top-1/4 -right-64 w-96 h-96 bg-purple-400 dark:bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-purple-300 dark:bg-purple-300/10 rounded-full blur-3xl animate-pulse" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 px-6">
        
        {/* Left Side (Text) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <div className="inline-block px-6 py-2 rounded-full border border-purple-500 text-purple-800 dark:text-purple-200 bg-purple-500/10 dark:bg-purple-500/20 mb-6 text-sm font-medium">
            Introducing KridumAI
          </div>

          <h1 className="text-6xl lg:text-7xl font-extrabold bg-gradient-to-b from-purple-900 via-purple-600 to-red-500 bg-clip-text text-transparent mb-6 leading-snug tracking-tight md:text-center lg:text-start">
            {typedText}
            <span className="text-black dark:text-white font-bold animate-pulse">|</span>
          </h1>

          <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-2xl mx-auto md:mx-0 mb-10">
            Empower your workflow with our revolutionary AI platform. Automate tasks,
            generate content, and unlock insights with state-of-the-art artificial intelligence.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-800 via-purple-500 to-red-500 text-white py-3 px-8 rounded-full flex items-center justify-center gap-2 cursor-pointer hover:gap-3 transition-all duration-300 border-[.5px] border-purple-500"
            >
              Get Started
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/about"
              className="bg-gray-800/20 dark:bg-gray-700 hover:bg-gray-800/25 dark:hover:bg-gray-600 text-black dark:text-white font-medium border border-gray-900/20 dark:border-gray-700 py-3 px-8 rounded-full transition duration-300 cursor-pointer"
            >
              Learn More
            </Link>
          </div>
        </motion.div>

        {/* Right Side (Image) */}
        <motion.div
          initial={{ opacity: 0, y: -30, scale: .95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          className="w-full md:w-1/2 flex justify-center md:justify-end"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="relative w-[90%] sm:w-4/5 md:w-full max-w-[600px]"
          >
            <Image
              src={hero}
              alt="KridumAI Hero Image"
              width={600}
              height={600}
              className="rounded-xl drop-shadow-2xl object-contain"
              priority
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-gray-900/30 dark:border-white/20 flex justify-center p-1">
          <div className="w-1 h-2 bg-gray-900/50 dark:bg-white/40 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
