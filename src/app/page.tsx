'use client';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import HowItWorks from './components/HowItWorks';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <Testimonials />
      <PricingSection />
      <FAQ />
      <Footer />
    </div>
  );
}
