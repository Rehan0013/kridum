'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const PaymentPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [plan, setPlan] = useState<any>(null);

  useEffect(() => {
    const planParam = searchParams.get('plan');
    if (planParam) {
      try {
        const parsed = JSON.parse(decodeURIComponent(planParam));
        setPlan(parsed);
      } catch (err) {
        console.error('Failed to parse plan:', err);
      }
    }
  }, [searchParams]);

  if (!plan) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">No Plan Selected</h1>
          <button
            onClick={() => router.push('/#pricing')}
            className="mt-2 px-4 py-2 bg-purple-600 text-white rounded-md"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 pt-24">
      <div className="max-w-xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">Checkout</h1>
        <p className="text-gray-400">You&apos;ve selected the <strong>{plan.name}</strong> plan for ${plan.price}/month.</p>
        
        <div className="bg-white/10 p-6 rounded-lg space-y-4">
          <h2 className="text-xl font-semibold">Plan Features</h2>
          <ul className="list-disc list-inside text-gray-300">
            {plan.features.map((feature: string, idx: number) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>

        <button
          onClick={() => alert(`Processing payment for: ${plan.name}`)}
          className="w-full py-3 bg-purple-600 hover:bg-purple-700 transition rounded-lg text-white font-semibold cursor-pointer"
        >
          Pay ${plan.price}/month
        </button>

        <button
          onClick={() => router.push('/#pricing')}
          className="w-full py-3 bg-transparent border border-white text-white rounded-lg hover:bg-white/10 transition cursor-pointer"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
