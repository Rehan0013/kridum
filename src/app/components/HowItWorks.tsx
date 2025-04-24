'use client';

import { useState, useEffect, useRef } from 'react';

const steps = [
  {
    number: '01',
    title: 'Sign Up',
    description: 'Create your account in seconds and get immediate access to the platform.'
  },
  {
    number: '02',
    title: 'Connect Your Data',
    description: 'Securely integrate your existing tools and data sources with our AI system.'
  },
  {
    number: '03',
    title: 'Customize',
    description: 'Fine-tune the AI to your specific needs and workflow requirements.'
  },
  {
    number: '04',
    title: 'Automate & Scale',
    description: 'Watch as NexusAI learns, automates tasks, and scales with your business.'
  }
];

const StepCard = ({ step, index }: { step: typeof steps[0], index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, index * 200);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [index]);

  return (
    <div
      ref={cardRef}
      className={`relative transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
      }`}
    >
      <div className="glass p-6 rounded-xl relative z-10 border-[.2px] border-white lg:h-60 bg-white/15 glass">
        <div className="text-4xl font-bold mb-4 opacity-80 text-purple-600">{step.number}</div>
        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
        <p className="text-gray-400">{step.description}</p>
      </div>

      {/* Connecting line */}
      {index < steps.length - 1 && (
        <div className="hidden lg:block absolute top-1/2 -right-6 w-6 border-t-2 border-dashed border-purple-700/90 z-0"></div>
      )}
    </div>
  );
};

const HowItWorks = () => {
  return (
    <section id='how-it-works' className="section-padding py-24 relative px-12 bg-[#0e0f23]">
 
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-700/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-800 via-purple-600 to-red-500 bg-clip-text text-transparent text-5xl">How It Works</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Our streamlined process makes it easy to integrate AI into your workflow
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="border border-purple-500 h-12 w-44 rounded-3xl bg-gradient-to-r from-purple-700 via-purple-600 to-purple-400 hover:bg-purple-700 cursor-pointer font-bold">
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
