'use client';

import { useSearchParams } from 'next/navigation';

export default function PaymentPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-4">Payment Page</h1>
      {id ? (
        <p className="text-lg">Payment ID: <span className="font-semibold">{id}</span></p>
      ) : (
        <p className="text-lg text-red-500">No Payment ID provided.</p>
      )}
    </div>
  );
}
