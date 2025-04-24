'use client';

import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

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
    <section id='home' className="pt-24 md:pt-40 lg:pt-42 sm:pt-20 pb-50 bg-[#0e0f23] text-white relative overflow-hidden">

      <div className="absolute top-1/4 -right-64 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="inline-block px-6 py-2 rounded-full border border-purple-500 text-purple-300 bg-purple-500/10 mb-6">
          Introducing kridum.ai
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-purple-900 via-purple-600 to-red-500 bg-clip-text text-transparent mb-6 leading-snug tracking-tight">
          {typedText} 
          <span className="text-white font-bold animate-pulse">|</span>
        </h1>

        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Empower your workflow with our revolutionary AI platform. Automate tasks,
          generate content, and unlock insights with state-of-the-art artificial intelligence.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link className="bg-gradient-to-r from-purple-900 to-purple-600 text-white py-3 px-8 rounded-full flex items-center justify-center gap-2 cursor-pointer hover:gap-3 transition-all duration-300" href="/contact">
            Get Started
            <ArrowRight size={18} />
          </Link>
          
          <Link href="/about" className="bg-gray-800 hover:bg-gray-700 text-white font-medium border border-white/20 py-3 px-8 rounded-full transition duration-300 cursor-pointer">
            Learn More
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center p-1">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
