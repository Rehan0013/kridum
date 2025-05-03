'use client';

import { Check } from 'lucide-react';
import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const pricingPlans = [
  {
    name: 'Free',
    price: 0,
    description: 'Perfect for individuals and small projects',
    features: [
      'AI Assistant with basic capabilities',
      'Limited to 100 queries per day',
      'Email support',
      'Basic analytics',
      'Single user'
    ],
    isPopular: false,
    buttonText: 'Start Free'
  },
  {
    name: 'Professional',
    price: 79,
    description: 'Ideal for growing businesses and teams',
    features: [
      'Advanced AI capabilities',
      'Unlimited queries',
      'Priority support',
      'Advanced analytics & reporting',
      'Up to 5 team members',
      'Custom integrations',
      'Training & onboarding'
    ],
    isPopular: true,
    buttonText: 'Get Started'
  },
  {
    name: 'Enterprise',
    price: 199,
    description: 'For large organizations with complex needs',
    features: [
      'Custom AI model training',
      'Unlimited everything',
      'Dedicated account manager',
      'Enterprise-grade security',
      'Unlimited team members',
      'API access',
      'Custom development',
      'SLA guarantees'
    ],
    isPopular: false,
    buttonText: 'Contact Sales'
  }
];

const PricingCard = ({ plan }: { plan: typeof pricingPlans[0] }) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const router = useRouter();

  const handleClick = () => {
    const encodedPlan = encodeURIComponent(JSON.stringify(plan));
    router.push(`/payment?plan=${encodedPlan}`);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`glass p-8 rounded-xl h-full flex flex-col relative transition-all duration-300 bg-white/50 dark:bg-white/10 ${
          plan.isPopular
            ? 'border-[.7px] border-purple-500 shadow-[4px_4px_14px_#d445f53f]'
            : 'border border-gray-700/15 dark:border-white/40'
        } ${isHovered ? 'transform scale-105' : ''}`}
      >
        {plan.isPopular && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-800 to-purple-500 text-white text-sm font-medium px-4 py-1 rounded-full">
            Most Popular
          </div>
        )}

        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
        <p className="text-gray-500 dark:text-gray-400 mb-6">{plan.description}</p>

        <div className="mb-6">
          <span className="text-3xl font-bold">${plan.price}</span>
          <span className="text-gray-500 dark:text-gray-400">/month</span>
        </div>

        <ul className="space-y-3 mb-8 flex-grow">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check size={18} className="text-purple-600 mt-1 mr-2 shrink-0" />
              <span className="text-gray-600 dark:text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>

        <button
          onClick={handleClick}
          className={`w-full py-3 rounded-lg font-medium transition-all cursor-pointer ${
            plan.isPopular ? 'bg-gradient-to-r from-purple-700 to-purple-500 text-white' : 'bg-gray-900/10 text-gray-700 dark:bg-white/10 dark:text-white'
          }`}
        >
          {plan.buttonText}
        </button>
      </div>
    </motion.div>
  );
};

const PricingSection = () => {
  return (
    <section id="pricing" className="section-padding py-24 relative bg-gray-300 dark:bg-[#0e0f23] text-black dark:text-white px-12">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400 dark:bg-purple-900/50 rounded-full blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-800 via-purple-600 to-red-500 bg-clip-text text-transparent text-5xl">
              Flexible Pricing
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Choose the plan that works best for you and your team
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-7">Need a custom plan for your organization?</p>
          <Link
            href="/contact"
            className="border-[.5px] border-gray-900/20 dark:border-white/20 p-4 w-56 rounded-full bg-gray-800/20 dark:bg-white/10 hover:bg-gray-800/25 dark:hover:bg-white/15 cursor-pointer transition-all duration-300"
          >
            Contact Our Sales Team
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
