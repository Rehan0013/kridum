"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import CursorFollower from "../components/CursorFollower";

const cards = [
  {
    id: "mcq",
    title: "MCQ",
    subtitle: "Multiple Choice Questions Games",
    color: "bg-orange-400",
  },
  {
    id: "taf",
    title: "T&F",
    subtitle: "True and False Games",
    color: "bg-blue-300",
  },
  {
    id: "other",
    title: "???",
    subtitle: "More Games",
    color: "bg-green-300",
  },
];

const navItems = [
    { name: "Home", href: "/" },
  { name: "Game", href: "/game" },
  { name: "Edit", href: "/edit-game" },
  { name: "Preview", href: "/preview" },
  { name: "Watch", href: "/watch" },
  { name: "Form", href: "/form" },
];

export default function Home() {
  const [selected, setSelected] = useState(0);
  const [videoUrl, setVideoUrl] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const extractVideoId = (url: string) => {
    const regex =
      /(?:youtube\.com\/(?:[^/]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/ ]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const videoId = extractVideoId(videoUrl);
      if (videoId) {
        setError("");
        router.push(`/watch?video=${encodeURIComponent(videoId)}`);
      } else {
        setError("The URL is invalid. Please enter a valid YouTube URL.");
      }
    }
  };

  const paginate = (dir: number) => {
    const newIndex = (selected + dir + cards.length) % cards.length;
    setSelected(newIndex);
  };

  const getTransform = (index: number) => {
    const offset = index - selected;
    if (offset === 0) {
      return { scale: 1, x: 0, zIndex: 10, opacity: 1 };
    } else if (offset === -1 || offset === cards.length - 1) {
      return { scale: 0.9, x: -150, zIndex: 5, opacity: 0.6 };
    } else if (offset === 1 || offset === -(cards.length - 1)) {
      return { scale: 0.9, x: 150, zIndex: 5, opacity: 0.6 };
    } else {
      return { scale: 0.8, x: 0, zIndex: 0, opacity: 0 };
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gray-200 dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-500">
      <Navbar navLinks={navItems} />
        <CursorFollower />

      {/* Background gradients */}
      <div className="absolute top-1 -right-64 w-96 h-96 bg-purple-400 dark:bg-purple-500/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-purple-400 dark:bg-purple-500/20 rounded-full blur-3xl" />

      <main className="px-6 md:px-12 py-36 container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          {/* Carousel */}
          <div className="relative w-full md:w-3/4 flex justify-center items-center h-96 overflow-hidden">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="absolute left-4 z-30 p-3 bg-gray-200 dark:bg-gray-700 rounded-full shadow-md"
              onClick={() => paginate(-1)}
            >
              <ArrowLeft />
            </motion.button>

            <div className="relative w-full h-80 flex items-center justify-center">
              {cards.map((card, index) => {
                const transform = getTransform(index);
                return (
                  <motion.div
                    key={card.id}
                    className={`absolute w-64 h-80 rounded-2xl shadow-xl flex items-center justify-center ${card.color}`}
                    style={{ zIndex: transform.zIndex }}
                    animate={{
                      scale: transform.scale,
                      x: transform.x,
                      opacity: transform.opacity,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="text-center text-white px-4">
                      <h2 className="text-xl font-semibold mb-2">
                        {card.title}
                      </h2>
                      <p className="text-sm">{card.subtitle}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="absolute right-4 z-30 p-3 bg-gray-200 dark:bg-gray-700 rounded-full shadow-md"
              onClick={() => paginate(1)}
            >
              <ArrowRight />
            </motion.button>
          </div>

          {/* Form */}
          <motion.div
            className="w-full md:w-1/2 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-4">
              Test Your <span className="text-purple-500">Knowledge</span>
            </h2>
            <p className="mb-6">Tap a category and let the adventure begin!</p>

            <form className="space-y-4">
              <div>
                <label className="block mb-1 font-medium dark:text-white">
                  Content Type
                </label>
                <select className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-700">
                  <option>YouTube</option>
                  <option>PDF</option>
                </select>
              </div>

              <div>
                <label className="block mb-1 font-medium dark:text-white">
                  Difficulty Level
                </label>
                <select className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-700">
                  <option>Easy</option>
                  <option>Medium</option>
                  <option>Hard</option>
                </select>
              </div>

              <div>
                <label className="block mb-1 font-medium dark:text-white">
                  YouTube URL
                </label>
                <input
                  type="url"
                  placeholder="Enter YouTube video URL"
                  value={videoUrl}
                  onChange={(e) => setVideoUrl(e.target.value)}
                  onKeyDown={handleKeyPress}
                  className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-700"
                />
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              </div>
            </form>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
