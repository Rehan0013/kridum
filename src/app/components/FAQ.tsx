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

  return (
    <div
      id="faq"
      ref={sectionRef}
      className="relative flex items-center justify-center bg-[#0e0f23] px-6 md:px-12 py-16"
    >
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400/25 rounded-full blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 70 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center w-full max-w-4xl z-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          <span className="bg-gradient-to-r from-purple-800 via-purple-600 to-red-500 bg-clip-text text-transparent text-5xl">
            Frequently Asked Questions
          </span>
        </h2>
        <p className="text-xl text-gray-400 mb-10">Your questions answered</p>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className="bg-white/10 rounded-lg overflow-hidden transition-all duration-500"
              >
                <button
                  className="w-full flex justify-between items-center text-left p-4 rounded-lg hover:bg-white/15 transition-colors duration-300 cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <h2 className="text-lg font-semibold text-white">{faq.question}</h2>
                  <span
                    className={`transform transition-transform duration-300 ${
                      isActive ? "rotate-45" : "rotate-0"
                    } text-white text-2xl`}
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
                  <p className="py-2 text-white">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
