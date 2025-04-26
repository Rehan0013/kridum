'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { useState } from 'react';

function PaymentPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const planParam = searchParams.get('plan');
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  if (!planParam) {
    return (
      <div className="flex items-center justify-center min-h-screen text-white">
        No plan selected. Please go back and select a plan.
      </div>
    );
  }

  const plan = JSON.parse(decodeURIComponent(planParam));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="min-h-screen flex items-center justify-center bg-[#0e0f23] px-6"
    >
      <div className="bg-[#16182d] rounded-2xl shadow-lg p-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
        
        {/* Features Section */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Plan Features</h2>
          <ul className="space-y-3 text-gray-400">
            {plan.features.map((feature: string, idx: number) => (
              <li key={idx} className="flex items-start">
                <span className="mr-2 text-purple-400">•</span> {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Payment Form Section */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Secure Checkout
          </h2>
          <p className="text-center text-gray-400 mb-8">
            You&apos;ve selected the <span className="font-semibold text-white">{plan.name}</span> plan at <span className="text-purple-400">${plan.price}/month</span>.
          </p>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Cardholder Name"
              className="w-full p-3 rounded-lg bg-[#1f2235] text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Card Number"
              className="w-full p-3 rounded-lg bg-[#1f2235] text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="MM/YY"
                className="w-1/2 p-3 rounded-lg bg-[#1f2235] text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
              />
              <input
                type="text"
                placeholder="CVV"
                className="w-1/2 p-3 rounded-lg bg-[#1f2235] text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
              />
            </div>
          </div>

          <button
            className="w-full mt-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white font-semibold text-lg transition-all cursor-pointer"
          >
            Pay ${plan.price}/month
          </button>

          <button
            onClick={() => router.back()}
            className="w-full mt-4 py-3 rounded-lg border border-white/30 text-gray-300 hover:bg-white/10 transition-all cursor-pointer"
          >
            Cancel and Go Back
          </button>
        </div>

      </div>
    </motion.div>
  );
}

export default PaymentPage;