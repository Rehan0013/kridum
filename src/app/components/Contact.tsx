'use client';

import { useState } from "react";
import { Mail, MessageSquare, Phone } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

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
      <div className="absolute top-1/4 -right-64 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-16 flex justify-center"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-gradient-to-r from-purple-800 via-purple-600 to-red-500 bg-clip-text text-transparent text-5xl">
              Get In Touch
            </span>
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2 gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >

            <motion.div className="flex flex-col gap-8" variants={itemVariants}>
              <div className="p-8 rounded-2xl border-[0.5px] border-white/20 bg-white/10 backdrop-blur-md">
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

              <div className="p-4 rounded-2xl border-[0.5px] border-white/20 bg-white/10 backdrop-blur-md overflow-hidden h-[300px] flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.015606837177!2d-122.42067928468195!3d37.77851997975966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808b71ef6c8d%3A0xf09f8a7d3189464e!2sTwitter%20HQ!5e0!3m2!1sen!2sus!4v1616450255014!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: "none" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl"
                ></iframe>
              </div>
            </motion.div>

            <motion.form
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl space-y-6 bg-white/10 border-[.5px] border-white/20 backdrop-blur-md"
              variants={itemVariants}
            >
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-bold">Name</label>
                <input
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-md bg-black/60 px-3 py-2 text-sm text-white font-bold focus:outline-none focus:ring-2 focus:ring-purple-500"
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
                  className="w-full rounded-md bg-black/60 px-3 py-2 text-sm text-white font-bold focus:outline-none focus:ring-2 focus:ring-purple-500"
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
                  className="w-full h-59 rounded-md bg-black/60 px-3 py-2 text-sm text-white font-bold focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Your message..."
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-800 via-purple-600 to-red-500 py-2 px-4 rounded-md text-white font-semibold transition-all cursor-pointer"
              >
                Send Message
              </button>
              {submitted && (
                <p className="text-green-400 text-center mt-2">
                  Message sent! We&apos;ll get back to you soon.
                </p>
              )}
            </motion.form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
