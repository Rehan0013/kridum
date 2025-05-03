'use client';

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function FAQ() {
  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We offer comprehensive AI solutions including machine learning integration, data analytics, and custom AI model development tailored to your business needs.",
    },
    {
      question: "How does your pricing work?",
      answer:
        "Our pricing is transparent and flexible, with different tiers to suit various business sizes. Contact us for a customized quote based on your specific requirements.",
    },
    {
      question: "Can I integrate your AI solutions with my existing systems?",
      answer:
        "Yes, our solutions are designed to be easily integrated with most existing systems and platforms. We provide full support during the integration process.",
    },
    {
      question: "How long does implementation typically take?",
      answer:
        "Implementation time varies depending on the complexity of the solution and your requirements. Most projects are completed within 2-8 weeks.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const contentRefs = useRef<Array<HTMLDivElement | null>>([]);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div
      id="faq"
      ref={sectionRef}
      className="relative flex items-center justify-center bg-gray-300 dark:bg-[#0e0f23] text-black dark:text-white px-6 md:px-12 py-16"
    >
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400 dark:bg-purple-900/50 rounded-full blur-3xl"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-center w-full max-w-4xl z-10"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          <span className="bg-gradient-to-r from-purple-800 via-purple-600 to-red-500 bg-clip-text text-transparent text-5xl">
            Frequently Asked Questions
          </span>
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-xl text-gray-600 dark:text-gray-400 mb-10"
        >
          Your questions answered
        </motion.p>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/50 dark:bg-white/10 rounded-lg overflow-hidden transition-all duration-500 border-[.5px] border-gray-700/15 dark:border-white/30"
              >
                <button
                  className="w-full flex justify-between items-center text-left p-4 rounded-lg hover:bg-gray-600/10 dark:hover:bg-white/15 transition-colors duration-300 cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <h2 className="text-lg font-semibold text-black dark:text-white">{faq.question}</h2>
                  <span
                    className={`transform transition-transform duration-300 ${
                      isActive ? "rotate-45" : "rotate-0"
                    } text-black dark:text-white text-2xl`}
                  >
                    +
                  </span>
                </button>

                <div
                  ref={(el) => {
                    contentRefs.current[index] = el;
                  }}
                  style={{
                    maxHeight: isActive
                      ? `${contentRefs.current[index]?.scrollHeight ?? 0}px`
                      : "0px",
                  }}
                  className="transition-[max-height] duration-500 ease-in-out overflow-hidden px-4"
                >
                  <p className="py-2 text-black dark:text-white">{faq.answer}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
