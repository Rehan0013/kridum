"use client";

import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun, User } from "lucide-react";
import Link from "next/link";

const Navbar = ({
  navLinks,
}: {
  navLinks: { name: string; href: string }[];
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState<boolean | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  // Handle scroll shadow
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Theme on mount
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initialDark = storedTheme === "dark" || (!storedTheme && prefersDark);
    setDarkMode(initialDark);
    document.documentElement.classList.toggle("dark", initialDark);
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (darkMode === null) return;
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  if (!isMounted || darkMode === null) return null;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-black/80 shadow-md backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-800 via-purple-600 to-red-500 flex items-center justify-center">
              <span className="text-white font-bold text-lg">AI</span>
            </div>
            <span className="text-xl font-bold text-black dark:text-white font-space-grotesk">
              KridumAI
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-800 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/contact"
              className="px-5 py-2 rounded-full text-sm font-medium bg-purple-600/80 text-white hover:bg-purple-700 transition-all"
            >
              Get Started
            </Link>
          </div>

          {/* Right Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/login"
              className="text-gray-800 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition"
            >
              <User className="w-5 h-5" />
            </Link>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-white" />
              ) : (
                <Moon className="w-5 h-5 text-gray-800 dark:text-gray-200" />
              )}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-black dark:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-[80%] bg-white dark:bg-black z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } shadow-lg pt-20 px-6`}
      >
        <button
          className="absolute top-4 right-4 text-black dark:text-white"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close Menu"
        >
          <X size={24} />
        </button>

        <div className="space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block text-base font-medium text-gray-800 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/contact"
            className="block text-center px-5 py-2 rounded-full font-medium bg-purple-900/70 text-white hover:bg-purple-800 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Get Started
          </Link>
        </div>

        {/* Bottom row: Login + Theme toggle */}
        <div className="absolute bottom-4 left-0 w-full px-6 flex justify-between items-center">
          <Link
            href="/login"
            className="flex items-center gap-2 text-gray-800 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            <User className="w-5 h-5" />
          </Link>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-white" />
            ) : (
              <Moon className="w-5 h-5 text-gray-800 dark:text-gray-200" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
