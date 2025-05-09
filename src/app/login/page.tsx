"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Facebook, Linkedin, Globe } from 'lucide-react';
import Navbar from '../components/Navbar';
import { useRouter } from 'next/navigation';
import CursorFollower from '../components/CursorFollower';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Features', href: '/#features' },
  { name: 'Working', href: '/#how-it-works' },
  { name: 'Testimonials', href: '/#testimonials' },
  { name: 'Pricing', href: '/#pricing' },
  { name: 'FAQ', href: '/#faq' },
];

export default function AuthPage() {
  const [isSignIn, setIsSignIn] = useState(true);
  const router = useRouter();

  const handleClick = () => {
    router.push('/form');
  };

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <>
      <Navbar navLinks={navItems} />
      <CursorFollower />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="min-h-screen flex items-center justify-center bg-gray-200 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4 sm:p-6 md:p-20 overflow-hidden relative"
      >

        {/* Background gradients */}
        <div className="absolute top-1 -right-64 w-96 h-96 bg-purple-400 dark:bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-purple-400 dark:bg-purple-500/20 rounded-full blur-3xl" />

        <div className="relative flex flex-col md:flex-row dark:bg-white/10 bg-white rounded-2xl shadow-lg overflow-hidden w-full max-w-[300px] sm:max-w-[500px] md:max-w-4xl h-[700px] md:h-[500px]">

          {/* Sliding Background */}
          <motion.div
            className="absolute top-0 h-1/2 md:h-full w-full md:w-1/2 bg-gradient-to-br from-purple-800 via-purple-600 to-red-500 z-10"
            initial={false}
            animate={{
              x: isSignIn ? '100%' : '0%',
              scale: isSignIn ? 1.05 : 1,
              opacity: isSignIn ? 0.95 : 1,
            }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <div className="h-full flex items-center justify-center text-white p-6 sm:p-8">
              <div className="text-center">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                  {isSignIn ? 'Hello, Friend!' : 'Welcome Back!'}
                </h2>
                <p className="text-sm sm:text-base md:text-lg mb-6">
                  {isSignIn
                    ? 'Register with your personal details to use all of site features'
                    : 'Enter your personal details to use all of site features'}
                </p>
                <button
                  onClick={toggleForm}
                  className="border border-white text-white dark:text-gray-200 px-4 sm:px-6 py-2 rounded-full hover:bg-purple-700 transition text-sm sm:text-base"
                >
                  {isSignIn ? 'SIGN UP' : 'SIGN IN'}
                </button>
              </div>
            </div>
          </motion.div>

          {/* Sign In Form */}
          <div className="w-full md:w-1/2 p-6 sm:p-8 flex items-center justify-center order-2 md:order-1">
            <AnimatePresence mode="wait">
              {isSignIn && (
                <motion.div
                  key="signin"
                  initial={{ opacity: 0, x: -40, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -40, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
                  className="w-full"
                >
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6">Sign In</h2>
                  <div className="flex justify-center gap-3 sm:gap-4 mb-6 text-gray-500">
                    <button className="p-2 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                      <Github size={20} className="sm:w-6 sm:h-6" />
                    </button>
                    <button className="p-2 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                      <Facebook size={20} className="sm:w-6 sm:h-6" />
                    </button>
                    <button className="p-2 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                      <Linkedin size={20} className="sm:w-6 sm:h-6" />
                    </button>
                    <button className="p-2 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                      <Globe size={20} className="sm:w-6 sm:h-6" />
                    </button>
                  </div>
                  <p className="text-center text-gray-500 dark:text-gray-400 mb-6 text-sm sm:text-base">
                    or use your email password
                  </p>
                  <div className="space-y-4">
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700 dark:focus:ring-purple-500 text-sm sm:text-base bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      className="w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700 dark:focus:ring-purple-500 text-sm sm:text-base bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                    />
                  </div>
                  <a
                    href="#"
                    className="block text-center text-purple-700 dark:text-purple-400 mt-4 hover:underline text-sm sm:text-base"
                  >
                    Forget Your Password?
                  </a>
                  <button
                    className="w-full mt-6 bg-purple-700 dark:bg-purple-500 text-white py-3 rounded-lg hover:bg-purple-800 dark:hover:bg-purple-600 transition text-sm sm:text-base"
                    onClick={handleClick}
                  >
                    SIGN IN
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Sign Up Form */}
          <div className="w-full md:w-1/2 p-6 sm:p-8 flex items-center justify-center order-1 md:order-2">
            <AnimatePresence mode="wait">
              {!isSignIn && (
                <motion.div
                  key="signup"
                  initial={{ opacity: 0, x: 40, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 40, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
                  className="w-full"
                >
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6">Create Account</h2>
                  <div className="flex justify-center gap-3 sm:gap-4 mb-6 text-gray-500">
                    <button className="p-2 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                      <Github size={20} className="sm:w-6 sm:h-6" />
                    </button>
                    <button className="p-2 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                      <Facebook size={20} className="sm:w-6 sm:h-6" />
                    </button>
                    <button className="p-2 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                      <Linkedin size={20} className="sm:w-6 sm:h-6" />
                    </button>
                    <button className="p-2 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                      <Globe size={20} className="sm:w-6 sm:h-6" />
                    </button>
                  </div>
                  <p className="text-center text-gray-500 dark:text-gray-400 mb-6 text-sm sm:text-base">
                    or use your email for registration
                  </p>
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700 dark:focus:ring-purple-500 text-sm sm:text-base bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700 dark:focus:ring-purple-500 text-sm sm:text-base bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      className="w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700 dark:focus:ring-purple-500 text-sm sm:text-base bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                    />
                  </div>
                  <button
                    className="w-full mt-6 bg-purple-700 dark:bg-purple-500 text-white py-3 rounded-lg hover:bg-purple-800 dark:hover:bg-purple-600 transition text-sm sm:text-base"
                    onClick={handleClick}
                  >
                    SIGN UP
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </>
  );
}
