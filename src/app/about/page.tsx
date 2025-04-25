import About from "../components/About";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CursorFollower from "../components/CursorFollower";

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
      <CursorFollower />
      <Navbar navLinks={navItems}/>
      <About />
      <Footer />
    </div>
  );
}