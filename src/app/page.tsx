'use client';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import HowItWorks from './components/HowItWorks';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FeaturedGames from './components/FeaturedGames';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Featured Game', href: '#featured-game' },
  { name: 'About', href: '/about' },
  { name: 'contact', href: '/contact' },
];

export default function Home() {
  return (
    <div className="relative min-h-screen dark:bg-black text-white overflow-x-hidden">
      <Navbar navLinks={navItems} />
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <Testimonials />
      <FeaturedGames />
      <PricingSection />
      <FAQ />
      <Footer />
    </div>
  );
}
