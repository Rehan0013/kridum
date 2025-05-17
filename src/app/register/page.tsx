"use client";

import { Github, Facebook, Linkedin, Globe } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Features', href: '/#features' },
  { name: 'Working', href: '/#how-it-works' },
  { name: 'Testimonials', href: '/#testimonials' },
  { name: 'Pricing', href: '/#pricing' },
  { name: 'FAQ', href: '/#faq' },
];

export default function RegisterPage() {
  const router = useRouter();

  const handleRegister = () => {
    router.push("/form");
  };

  return (
    <div className="relative overflow-hidden min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-purple-100 to-purple-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-4">
        <Navbar navLinks={navItems} />
    
        {/* Background gradients */}
        <div className="absolute top-1 -right-64 w-96 h-96 bg-purple-400 dark:bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-purple-400/60 dark:bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        
      <div className="relative w-full max-w-md p-8 sm:p-10 backdrop-blur-xl bg-white/20 dark:bg-white/10 border border-white/30 rounded-2xl shadow-2xl text-gray-900 dark:text-white">
        <h2 className="text-3xl font-extrabold text-center mb-6">Create Account</h2>

        <div className="flex justify-center gap-4 mb-6">
          {[Github, Facebook, Linkedin, Globe].map((Icon, idx) => (
            <button key={idx} className="p-2 border border-white/20 rounded-lg hover:bg-white/10 transition">
              <Icon className="w-5 h-5" />
            </button>
          ))}
        </div>

        <p className="text-center text-sm text-gray-700 dark:text-gray-300 mb-4">
          or use your email to register
        </p>

        <form className="space-y-4">
          <div className="flex gap-4">
            <Input type="text" placeholder="First Name" />
            <Input type="text" placeholder="Last Name" />
          </div>
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Input type="password" placeholder="Confirm Password" />

          <button
            type="button"
            onClick={handleRegister}
            className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-purple-800 text-white font-semibold hover:from-purple-700 hover:to-purple-900 transition"
          >
            SIGN UP
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-700 dark:text-gray-300">
          Already have an account?{" "}
          <Link href="/login" className="text-purple-600 hover:underline">
            Sign in here
          </Link>
        </p>
      </div>
    </div>
  );
}

function Input({ type, placeholder }: { type: string; placeholder: string }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full px-4 py-3 rounded-lg bg-white/30 dark:bg-white/20 text-gray-900 dark:text-white placeholder-gray-600 dark:placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-600"
    />
  );
}
