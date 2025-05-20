"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import { Sparkles, LayoutDashboard, FileImage, Wand2 } from 'lucide-react';

const navItems = [
  { name: "Home", href: "/" },
  { name: "Game", href: "/game" },
  { name: "Edit", href: "/edit-game" },
  { name: "Preview", href: "/preview" },
  { name: "Watch", href: "/watch" },
  { name: "Form", href: "/form" },
];

const handleClick = (e: React.FormEvent) => {
  e.preventDefault();
};

export default function GameGenerator() {
  const [activeTab, setActiveTab] = useState('concept');

  const renderForm = () => {
    const inputClass =
      "w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-purple-500";

    return {
      concept: (
        <form onSubmit={handleClick} className="space-y-5">
          <div>
            <label className="mb-1 font-semibold dark:text-white flex items-center gap-2">
              <Sparkles size={18} /> Topic
            </label>
            <input type="text" placeholder="e.g., jungle" className={inputClass} />
          </div>
          <div>
            <label className="mb-1 font-semibold dark:text-white flex items-center gap-2">
              <LayoutDashboard size={18} /> Description
            </label>
            <input type="text" placeholder="e.g., A wild adventure" className={inputClass} />
          </div>
          <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 rounded-lg hover:opacity-90 hover:scale-105 transition-transform">
            Generate Concept
          </button>
        </form>
      ),
      assets: (
        <form onSubmit={handleClick} className="space-y-5">
          <div>
            <label className="mb-1 font-semibold dark:text-white flex items-center gap-2">
              <FileImage size={18} /> Game Style
            </label>
            <input type="text" placeholder="e.g., pixel, 3D" className={inputClass} />
          </div>
          <div>
            <label className="mb-1 font-semibold dark:text-white flex items-center gap-2">
              <LayoutDashboard size={18} /> Description
            </label>
            <input type="text" placeholder="e.g., A wild adventure" className={inputClass} />
          </div>
          <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 rounded-lg hover:opacity-90 hover:scale-105 transition-transform">
            Generate Assets
          </button>
        </form>
      ),
      single: (
        <form onSubmit={handleClick} className="space-y-5">
          <div>
            <label className="mb-1 font-semibold dark:text-white flex items-center gap-2">
              <Wand2 size={18} /> Asset Name
            </label>
            <input type="text" placeholder="e.g., sword, spaceship" className={inputClass} />
          </div>
          <div>
            <label className="mb-1 font-semibold dark:text-white flex items-center gap-2">
              <LayoutDashboard size={18} /> Description
            </label>
            <input type="text" placeholder="e.g., A wild adventure" className={inputClass} />
          </div>
          <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 rounded-lg hover:opacity-90 hover:scale-105 transition-transform">
            Generate Single Asset
          </button>
        </form>
      ),
    }[activeTab];
  };

  return (
    <div className="min-h-screen relative overflow-hidden px-4 py-10 transition-colors duration-500 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white">
      <Navbar navLinks={navItems} />

      {/* Gradient Backgrounds */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-purple-400/30 dark:bg-purple-600/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-pink-400/30 dark:bg-pink-600/30 rounded-full blur-3xl animate-pulse" />

      <div className="relative z-10 max-w-3xl mx-auto text-center mt-20 px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-purple-800 via-purple-600 to-red-500 bg-clip-text text-transparent">
            Generate Game
          </span>
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {[
            { label: 'Generate Concept', value: 'concept' },
            { label: 'Generate Game Style', value: 'assets' },
            { label: 'Generate Single Asset', value: 'single' },
          ].map((tab) => (
            <button
              key={tab.value}
              className={`px-6 py-2 rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300 ${
                activeTab === tab.value
                  ? 'bg-purple-600 text-white scale-105'
                  : 'bg-white text-purple-700 dark:bg-gray-700 dark:text-white'
              }`}
              onClick={() => setActiveTab(tab.value)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Form Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mx-auto max-w-xl"
          >
            {renderForm()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
