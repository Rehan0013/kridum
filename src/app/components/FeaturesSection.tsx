'use client';

import { motion } from 'framer-motion';
import {
  Brain,
  Cpu,
  Lock,
  MessageSquare,
  Rocket,
  Wand
} from 'lucide-react';

const features = [
  {
    icon: <Brain className="w-6 h-6 text-ai-purple" />,
    title: 'Advanced ML Models',
    description: 'Powered by state-of-the-art machine learning models trained on diverse datasets.',
  },
  {
    icon: <MessageSquare className="w-6 h-6 text-ai-purple" />,
    title: 'Natural Conversations',
    description: 'Engage in fluid, context-aware conversations that feel remarkably human-like.',
  },
  {
    icon: <Cpu className="w-6 h-6 text-ai-purple" />,
    title: 'High Performance',
    description: 'Optimized infrastructure ensures fast response times and minimal latency.',
  },
  {
    icon: <Lock className="w-6 h-6 text-ai-purple" />,
    title: 'Enterprise Security',
    description: 'Your data stays protected with end-to-end encryption and privacy controls.',
  },
  {
    icon: <Wand className="w-6 h-6 text-ai-purple" />,
    title: 'Creative Assistance',
    description: 'Generate ideas, content, and creative solutions to complex problems.',
  },
  {
    icon: <Rocket className="w-6 h-6 text-ai-purple" />,
    title: 'Continuous Learning',
    description: 'Our AI improves over time, adapting to your needs and preferences.',
  },
];

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.15,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const FeatureCard = ({
  feature,
  index,
}: {
  feature: typeof features[0];
  index: number;
}) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      custom={index}
      className="relative glass p-6 rounded-xl border-[.5px] bg-white/50 dark:bg-white/15 glass border-gray-700/15 dark:border-white before:p-[2px] before:rounded-xl before:-z-10 z-0 shadow-xl"
    >
      <div className="p-3 rounded-lg w-fit mb-4 text-purple-800 dark:text-purple-500 bg-purple-500/20 glass">
        {feature.icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-[#0e0f23] dark:text-white">{feature.title}</h3>
      <p className="text-gray-500 dark:text-gray-400">{feature.description}</p>
    </motion.div>
  );
};

const FeaturesSection = () => {
  return (
    <section id='features' className="section-padding py-24 relative bg-gray-300 dark:bg-[#0e0f23] text-black dark:text-white px-12">
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-purple-400 dark:bg-purple-900/50 rounded-full blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-800 via-purple-600 to-red-500 bg-clip-text text-transparent text-5xl">
              Powerful Features
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Our AI assistant comes with a comprehensive set of features designed to transform your workflow
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
