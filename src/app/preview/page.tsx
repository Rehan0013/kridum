"use client";

import { motion } from "framer-motion";
import { Pencil, Eye } from "lucide-react";
import Navbar from "../components/Navbar";
import CursorFollower from "../components/CursorFollower";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Game", href: "/game" },
  { name: "Edit", href: "/edit-game" },
  { name: "Preview", href: "/preview" },
  { name: "Watch", href: "/watch" },
  { name: "Form", href: "/form" },
];

export default function PreviewGame() {
  return (
    <div className="relative overflow-hidden min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-zinc-900 dark:to-black transition-colors duration-300 text-gray-900 dark:text-white">
      <Navbar navLinks={navItems} />
      <CursorFollower />

      {/* Decorative Background Gradient Blobs */}
      <div className="absolute -top-32 -right-64 w-[500px] h-[500px] bg-purple-400/30 dark:bg-purple-700/20 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute top-1/2 -left-40 w-[500px] h-[500px] bg-pink-300/30 dark:bg-pink-600/20 rounded-full blur-[150px] animate-pulse" />

      <main className="flex flex-col items-center px-6 py-24 relative z-10">
        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <span className="bg-gradient-to-r from-purple-800 via-purple-600 to-red-500 bg-clip-text text-transparent">
            Game Preview
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-gray-600 dark:text-gray-300 text-center max-w-2xl mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Simulate game environments and actions. Preview your game design
          before publishing or editing.
        </motion.p>

        {/* Preview Box */}
        <motion.div
          className="relative w-full max-w-4xl h-[480px] bg-white/60 dark:bg-zinc-900/70 backdrop-blur-lg border border-zinc-300 dark:border-zinc-700 rounded-3xl flex items-center justify-center shadow-[10px_10px_100px_#f3cbf5] dark:shadow-[10px_10px_100px_#36022d]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Score Tag */}
          <div className="absolute top-4 left-4 text-xs font-semibold px-4 py-1 rounded-full bg-zinc-200 dark:bg-zinc-700 text-gray-800 dark:text-gray-200">
            Score: 0
          </div>

          {/* Preview Placeholder */}
          <div className="flex flex-col items-center justify-center text-gray-400 dark:text-gray-500">
            <Eye className="w-16 h-16 mb-4 animate-pulse" />
            <p className="text-lg font-medium">Game Preview will appear here</p>
          </div>

          {/* Edit Button */}
          <button
            type="button"
            className="absolute top-4 right-4 p-2 rounded-full bg-zinc-300 dark:bg-zinc-700 hover:bg-zinc-400 dark:hover:bg-zinc-600 transition"
            title="Edit Preview"
          >
            <Pencil className="w-5 h-5 text-gray-800 dark:text-white" />
          </button>
        </motion.div>
        {/* Action Buttons */}
        <motion.div
          className="mt-12 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {["Jump", "Prone", "Crouch", "Stay", "Hit", "Run", "Slide"].map((action) => (
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              key={action}
              type="button"
              className="px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 to-pink-700 text-white font-semibold shadow-md transition-all duration-300 hover:shadow-lg active:scale-95"
            >
              {action}
            </motion.button>
          ))}
        </motion.div>
      </main>
    </div>
  );
}
