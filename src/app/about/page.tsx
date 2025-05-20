import About from "../components/About";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/#features' },
    { name: 'Working', href: '/#how-it-works' },
    { name: 'Testimonials', href: '/#testimonials' },
    { name: 'Pricing', href: '/#pricing' },
    { name: 'FAQ', href: '/#faq' },
  ];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar navLinks={navItems}/>
      <About />
      <Footer />
    </div>
  );
}