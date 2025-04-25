'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const PaymentPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [plan, setPlan] = useState<any>(null);




  const [formData, setFormData] = useState({
    name: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Processing payment for ${plan.name} plan\nCard Holder: ${formData.name}`);
    router.push('/thank-you');
  };

  if (!plan) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">No Plan Selected</h1>
          <button
            onClick={() => router.push('/#pricing')}
            className="mt-2 px-4 py-2 bg-purple-600 text-white rounded-md cursor-pointer"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0e0f23] text-white px-4 py-24">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">Secure Checkout</h1>
          <p className="text-gray-400">
            You've selected the <strong>{plan.name}</strong> plan at <span className="text-purple-400">${plan.price}/month</span>.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 bg-white/5 p-8 rounded-2xl shadow-lg">
          {/* Plan Overview */}
          <div className="lg:w-1/2 bg-white/10 p-6 rounded-xl">
            <h2 className="text-2xl font-semibold mb-4">Plan Features</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {plan.features.map((feature: string, idx: number) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* Payment Form */}
          <form onSubmit={handleSubmit} className="lg:w-1/2 space-y-4">
            <h2 className="text-2xl font-semibold mb-4">Payment Details</h2>

            <div>
              <label className="block text-sm mb-1">Cardholder Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Card Number</label>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleInputChange}
                required
                maxLength={16}
                inputMode="numeric"
                className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="1234 5678 9012 3456"
              />
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm mb-1">Expiry</label>
                <input
                  type="text"
                  name="expiry"
                  value={formData.expiry}
                  onChange={handleInputChange}
                  required
                  placeholder="MM/YY"
                  maxLength={5}
                  className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm mb-1">CVV</label>
                <input
                  type="password"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleInputChange}
                  required
                  placeholder="123"
                  maxLength={4}
                  className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 mt-4 bg-gradient-to-r from-purple-700 to-purple-500 hover:from-purple-600 hover:to-purple-400 transition rounded-xl text-white font-semibold text-lg cursor-pointer"
            >
              Pay ${plan.price}/month
            </button>
          </form>
        </div>

        <div className="text-center">
          <button
            onClick={() => router.push('/#pricing')}
            className="mt-4 px-6 py-3 border border-white text-white rounded-full hover:bg-white/10 transition cursor-pointer"
          >
            Cancel and Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;