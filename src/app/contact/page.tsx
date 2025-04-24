'use client';

import { useState } from "react";
import { Mail, MessageSquare, Phone } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="relative min-h-screen bg-[#0e0f23] text-white overflow-hidden">
        <div className="absolute top-1/4 -right-64 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl" />
      <Navbar />
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 flex justify-center">
            <span className="bg-gradient-to-r from-purple-800 via-purple-600 to-red-500 bg-clip-text text-transparent text-5xl">Get In Touch</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="glass p-8 rounded-2xl border-[.5px] border-white bg-white/15">
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Mail className="text-purple-600" />
                  <p>contact@kridum.ai</p>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-purple-600" />
                  <p>+91 12345-67890</p>
                </div>
                <div className="flex items-center gap-4">
                  <MessageSquare className="text-purple-600" />
                  <p>Live chat available 24/7</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="glass p-8 rounded-2xl space-y-6 bg-white/15 border-[.5px] border-white">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-bold">Name</label>
                <input
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-md bg-black/60 px-3 py-2 text-sm text-white font-bold focus:outline-none focus:ring-2"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-bold">Email</label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-md bg-black/60 px-3 py-2 text-sm text-white font-bold focus:outline-none focus:ring-2"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-bold">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-md bg-black/60 px-3 py-2 text-sm text-white font-bold focus:outline-none focus:ring-2"
                  placeholder="Your message..."
                  required
                />
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-purple-800 via-purple-600 to-red-500 py-2 px-4 rounded-md text-white font-semibold transition-all ">
                Send Message
              </button>
              {submitted && (
                <p className="text-green-400 text-center mt-2">Message sent! We&apos;ll get back to you soon.</p>
              )}
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
