'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const steps = [
  {
    number: '01',
    title: 'Sign Up',
    description: 'Create your account in seconds and get immediate access to the platform.',
  },
  {
    number: '02',
    title: 'Connect Your Data',
    description: 'Securely integrate your existing tools and data sources with our AI system.',
  },
  {
    number: '03',
    title: 'Customize',
    description: 'Fine-tune the AI to your specific needs and workflow requirements.',
  },
  {
    number: '04',
    title: 'Automate & Scale',
    description: 'Watch as NexusAI learns, automates tasks, and scales with your business.',
  }
];

// Framer Motion variants
const cardVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: index * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const StepCard = ({ step, index }: { step: typeof steps[0], index: number }) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      custom={index}
      className="relative"
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
    </motion.div>
  );
};

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding py-24 relative px-12 bg-[#0e0f23]">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-700/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-800 via-purple-600 to-red-500 bg-clip-text text-transparent text-5xl">
              How It Works
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Our streamlined process makes it easy to integrate AI into your workflow
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-5xl mx-auto"
        >
          {steps.map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}
        </motion.div>

        <div className="mt-20 text-center">
          <Link href='/#pricing' className="border border-purple-500 p-3 h-12 w-44 rounded-full bg-gradient-to-r from-purple-700 via-purple-600 to-purple-400 hover:bg-purple-700 cursor-pointer font-bold">
            Start Your Journey
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
