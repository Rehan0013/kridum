import { Book } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="relative min-h-screen bg-[#0e0f23] text-white pt-24 overflow-hidden">
        <div className="absolute top-1/4 -right-64 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl"></div>
    <Navbar />
      <div className="mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center justify-center p-2 bg-purple-700/30 rounded-full mb-4">
            <Book className="w-6 h-6 text-purple-700" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-800 via-purple-600 to-red-500 bg-clip-text text-transparent text-5xl">About Kridum.AI</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            We&apos;re on a mission to revolutionize the way people interact with AI,
            making it more accessible, intuitive, and powerful than ever before.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-white/10 border-[0.5px] p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-white/60">
              To create an AI ecosystem where innovation meets simplicity,
              empowering individuals and businesses to achieve more through
              intuitive AI interactions.
            </p>
          </div>
          <div className="bg-white/10 border-[.5px] p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-white/60">
              To develop cutting-edge AI solutions that are not only powerful but
              also accessible and user-friendly, helping our users transform their
              ideas into reality.
            </p>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-white/60">
                Pushing boundaries and exploring new possibilities in AI technology
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Collaboration</h3>
              <p className="text-white/60">
                Working together to create better AI solutions for everyone
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Simplicity</h3>
              <p className="text-white/60">
                Making complex AI technology accessible and easy to use
              </p>
            </div>
          </div>
        </div>
      </div>
        <Footer />
    </div>
  );
};

export default About;