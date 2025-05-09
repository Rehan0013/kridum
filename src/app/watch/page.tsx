"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "../components/Navbar";
import { Lock, Play } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Game", href: "/game" },
  { name: "Edit", href: "/edit-game" },
  { name: "Preview", href: "/preview" },
  { name: "Watch", href: "/watch" },
  { name: "Form", href: "/form" },
];

export default function WatchPageWrapper() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-xl">Loading...</div>}>
      <WatchPage />
    </Suspense>
  );
}

function WatchPage() {
  const searchParams = useSearchParams();
  const videoId = searchParams.get("video");

  return (
    <>
      <Navbar navLinks={navItems} />

      <div className="min-h-screen relative overflow-hidden bg-gray-200 dark:bg-zinc-900 text-gray-800 dark:text-white py-32 px-4">
        {/* Background gradients */}
        <div className="absolute top-1 -right-64 w-96 h-96 bg-purple-400 dark:bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-purple-400/60 dark:bg-purple-500/20 rounded-full blur-3xl animate-pulse" />

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Video Section */}
          <div className="md:col-span-2">
            {videoId ? (
              <div className="rounded-2xl overflow-hidden shadow-lg aspect-video">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title="YouTube video"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="rounded-xl font-bold bg-red-300 dark:bg-red-400 text-red-700 p-6">
                No valid video provided. Please go back and enter a YouTube URL.
              </div>
            )}
          </div>

          {/* Sidebar / Unit Panel */}
          <div className="flex flex-col items-center gap-6 bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-2xl w-full">
            <h2 className="text-3xl font-bold text-violet-600 dark:text-violet-400">
              📘 Unit 1
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 text-center mb-2">
              Begin your journey with the basics
            </p>

            <button className="bg-purple-600 hover:bg-violet-600 text-white w-full py-3 rounded-xl text-lg font-semibold flex items-center justify-center gap-2 transition">
              <Play size={20} />
              Start Lesson
            </button>

            <div className="flex flex-col items-center gap-4 w-full mt-6">
              <div className="flex items-center gap-3 w-full bg-zinc-100 dark:bg-zinc-700 px-4 py-3 rounded-lg cursor-not-allowed">
                <Lock className="text-violet-400" />
                <span className="text-sm font-medium">
                  Intermediate (Locked)
                </span>
              </div>
              <div className="flex items-center gap-3 w-full bg-zinc-100 dark:bg-zinc-700 px-4 py-3 rounded-lg cursor-not-allowed">
                <Lock className="text-violet-400" />
                <span className="text-sm font-medium">Advanced (Locked)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
