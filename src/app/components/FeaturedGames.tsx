"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { mcq, puzzle, gameEditor, gameGenerator } from "@/app/assets";

const featuredGames = [
  {
    title: "MCQ Game",
    image: mcq,
    href: "/form",
  },
  {
    title: "Puzzle Game",
    image: puzzle,
    href: "/watch?video=W6NZfCO5SIk",
  },
  {
    title: "Game Generator",
    image: gameGenerator,
    href: "/game",
  },
  {
    title: "Game Editor",
    image: gameEditor,
    href: "/edit-game",
  },
];

// Smooth spring animation for cards
const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      type: "spring",
      stiffness: 70,
      damping: 14,
    },
  }),
};

export default function FeaturedGames() {
  return (
    <section className="relative overflow-hidden w-full px-4 sm:px-6 lg:px-24 py-24 bg-gray-300 dark:bg-[#0e0f23] transition-colors duration-500">
      <div className="absolute top-1 -right-64 w-96 h-96 bg-purple-400 dark:bg-purple-500/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-purple-300 dark:bg-purple-300/20 rounded-full blur-3xl"></div>
      <motion.div
        className="max-w-7xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 60, damping: 12 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-purple-800 via-purple-600 to-red-500 bg-clip-text text-transparent">
            Featured Games
          </span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-base sm:text-lg">
          Explore our top picks and dive into thrilling adventures.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {featuredGames.map((game, index) => (
          <motion.div
            key={game.title}
            custom={index}
            variants={cardVariants}
            className="group rounded-2xl overflow-hidden shadow-xl bg-white/20 dark:bg-white/10 border border-white/30 backdrop-blur-2xl transition-all"
            whileHover={{
              scale: 1.04,
              rotateZ: 0.2,
              transition: { type: "spring", stiffness: 100, damping: 10 },
            }}
            layout
          >
            <Link href={game.href} className="block h-full">
              <div className="relative w-full h-52 sm:h-60 lg:h-72">
                <Image
                  src={game.image}
                  alt={game.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>
              <div className="p-5 text-center text-gray-900 dark:text-white">
                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">
                  {game.title}
                </h3>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
