"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  ClipboardCopy,
  ClipboardCheck,
  ClipboardEdit,
  Crop,
  ImageIcon,
  FlipVertical,
  FlipHorizontal,
  Rotate3D,
} from "lucide-react";
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

export default function GameGenerator() {
  const [step, setStep] = useState(0);
  const [prompt, setPrompt] = useState("");
  const [copied, setCopied] = useState(false);

  const [monochrome, setMonochrome] = useState(false);
  const [crop, setCrop] = useState(false);
  const [flipX, setFlipX] = useState(false);
  const [flipY, setFlipY] = useState(false);
  const [rotateX, setRotateX] = useState(false);
  const [rotateY, setRotateY] = useState(false);

  const steps = [
    {
      title: "Hero Character",
      description: "Create your game's main character",
      placeholder: "e.g., Pixel warrior with a sword",
      image:
        "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2F0fGVufDB8fDB8fHww",
    },
    {
      title: "Obstacle",
      description: "Design obstacles for your game",
      placeholder: "e.g., spiky pit, moving snake",
      image:
        "https://images.unsplash.com/photo-1746311499999-f23b2fea0fb7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Background",
      description: "Set your game's environment",
      placeholder: "e.g., mystical forest, desert ruins",
      image:
        "https://images.unsplash.com/photo-1487088678257-3a541e6e3922?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D",
    },
  ];

  const current = steps[step];

  const handleNext = () => {
    if (step < steps.length - 1) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Final Generate Game:", prompt);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const handlePaste = async () => {
    const text = await navigator.clipboard.readText();
    setPrompt(text);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-100 to-white dark:from-zinc-900 dark:to-zinc-950 text-gray-900 dark:text-white transition-colors">
      <div className="absolute top-1 -right-60 w-96 h-96 bg-purple-500/30 dark:bg-purple-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-purple-500/30 dark:bg-purple-400/10 rounded-full blur-3xl animate-pulse" />
      <Navbar navLinks={navItems} />
      <CursorFollower />

      <main className="flex flex-col items-center px-6 py-24 z-10 relative">
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="bg-gradient-to-r from-purple-800 via-purple-600 to-red-500 bg-clip-text text-transparent">
            Customize Your Game
          </span>
        </motion.h2>
        <motion.p
          className="mb-12 text-center max-w-xl text-lg text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Craft, preview, and fine-tune every element of your game in seconds.
        </motion.p>

        <motion.div
          key={step}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white/80 dark:bg-zinc-800/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl w-full max-w-2xl border border-gray-200 dark:border-zinc-700"
        >
          <h2 className="text-2xl font-bold mb-1">{current.title}</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            {current.description}
          </p>

          <div className="flex justify-center mb-6">
            <img
              src={current.image}
              alt={current.title}
              className={`rounded-xl bg-gray-100 dark:bg-zinc-700 p-2 shadow-lg transition-all duration-500
                ${monochrome ? "grayscale" : ""}
                ${crop ? "w-24 h-24 object-center" : "w-44 h-44 object-cover"}
                ${flipX ? "scale-x-[-1]" : ""}
                ${flipY ? "scale-y-[-1]" : ""}
            `}
              style={{
                transform: `rotateX(${rotateX ? 180 : 0}deg) rotateY(${
                  rotateY ? 180 : 0
                }deg)`,
                transformStyle: "preserve-3d",
              }}
            />
          </div>

          <form onSubmit={handleGenerate} className="space-y-4">
            <div className="flex gap-2 items-center">
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder={current.placeholder}
                className="flex-1 p-4 rounded-xl bg-white dark:bg-zinc-700 border dark:border-zinc-600 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none shadow-inner transition"
              />
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 transition px-4 py-2 rounded-xl text-white"
              >
                <Sparkles className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-3 mt-2 text-gray-500 dark:text-gray-400">
              {/* Copy & Paste */}
              <button
                type="button"
                onClick={handleCopy}
                className="hover:text-purple-500"
              >
                {copied ? (
                  <ClipboardCheck className="w-5 h-5" />
                ) : (
                  <ClipboardCopy className="w-5 h-5" />
                )}
              </button>
              <button
                type="button"
                onClick={handlePaste}
                className="hover:text-purple-500"
              >
                <ClipboardEdit className="w-5 h-5" />
              </button>

              {/* Image Transform Buttons */}
              <button
                type="button"
                onClick={() => setCrop(!crop)}
                className="hover:text-purple-500"
              >
                <Crop className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => setMonochrome(!monochrome)}
                className="hover:text-purple-500"
              >
                <ImageIcon className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => setFlipX(!flipX)}
                className="hover:text-purple-500"
              >
                <FlipHorizontal className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => setFlipY(!flipY)}
                className="hover:text-purple-500"
              >
                <FlipVertical className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => setRotateX(!rotateX)}
                className="hover:text-purple-500"
              >
                <Rotate3D className="w-5 h-5 rotate-90" />
              </button>
              <button
                type="button"
                onClick={() => setRotateY(!rotateY)}
                className="hover:text-purple-500"
              >
                <Rotate3D className="w-5 h-5" />
              </button>

              {/* Clear */}
              <button
                type="button"
                onClick={() => setPrompt("")}
                className="ml-auto text-sm flex items-center gap-1 hover:text-red-500"
              >
                <RotateCcw className="w-4 h-4" />
                Clear
              </button>
            </div>

            <div className="flex justify-between items-center mt-6 gap-2">
              {step > 0 && (
                <button
                  type="button"
                  onClick={handlePrev}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-300 dark:bg-zinc-700 hover:bg-zinc-400 dark:hover:bg-zinc-600 transition"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Previous
                </button>
              )}

              {step < steps.length - 1 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="ml-auto flex items-center gap-2 px-5 py-2 rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-300 transition"
                >
                  Next: {steps[step + 1].title}
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="ml-auto flex items-center gap-2 px-6 py-2 rounded-xl bg-green-600 hover:bg-green-700 text-white transition"
                >
                  <Sparkles className="w-4 h-4" />
                  Generate Game
                </button>
              )}
            </div>
          </form>
        </motion.div>
      </main>
    </div>
  );
}
