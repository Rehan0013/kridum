import { Suspense } from "react";
import PaymentPage from "../components/PaymentPage";

function PaymentSkeleton() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0e0f23] px-6">
      <div className="bg-[#16182d] rounded-2xl shadow-lg p-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full animate-pulse">
        
        {/* Left: Features Skeleton */}
        <div className="space-y-4">
          <div className="h-8 bg-gray-700 rounded w-1/2"></div>
          <div className="space-y-2 mt-6">
            {[...Array(5)].map((_, idx) => (
              <div key={idx} className="h-4 bg-gray-800 rounded w-3/4"></div>
            ))}
          </div>
        </div>

        {/* Right: Form Skeleton */}
        <div className="space-y-6">
          <div className="h-8 bg-gray-700 rounded w-2/3 mx-auto"></div>
          <div className="h-4 bg-gray-600 rounded w-2/3 mx-auto mb-8"></div>

          <div className="space-y-4">
            <div className="h-10 bg-gray-800 rounded"></div>
            <div className="h-10 bg-gray-800 rounded"></div>
            <div className="flex gap-4">
              <div className="h-10 bg-gray-800 rounded w-1/2"></div>
              <div className="h-10 bg-gray-800 rounded w-1/2"></div>
            </div>
          </div>

          <div className="h-12 bg-purple-700/60 rounded mt-8"></div>
          <div className="h-12 bg-gray-700 rounded"></div>
        </div>

      </div>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<PaymentSkeleton />}>
      <PaymentPage />
    </Suspense>
  );
}
