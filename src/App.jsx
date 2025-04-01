// imlost.ai – Animated Hero Glow-Up + Sarcastic Secondary Section
// Powered by sarcasm, neon, and framer-motion

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './index.css';

const headlines = [
  "We had a plan. Then the intern posted something better.",
  "Strategically directionless. Creatively undeniable.",
  "You're not paying us for direction. You're paying us for taste.",
  "We don’t have a roadmap. We have a machete."
];

function ServiceCard({ title, desc }) {
  return (
    <div className="bg-neutral-900 p-6 rounded-2xl shadow border border-neutral-700">
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-white/70">{desc}</p>
    </div>
  );
}

function App() {
  const [currentHeadline, setCurrentHeadline] = useState(headlines[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadline(prev => {
        const index = (headlines.indexOf(prev) + 1) % headlines.length;
        return headlines[index];
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-black text-white font-sans overflow-x-hidden">
      {/* Sticky Nav */}
      <nav className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 bg-black border-b border-neutral-800">
        <div className="text-2xl font-bold">
          <span className="text-pink-500">●</span> imlost<span className="text-orange-500">.ai</span>
        </div>
        <ul className="flex gap-6 text-sm font-medium text-orange-400">
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#cta">Contact</a></li>
        </ul>
      </nav>

      {/* Animated Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center px-8">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-orange-500/10 blur-3xl animate-pulse"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        />
        <motion.h1
          key={currentHeadline}
          className="text-5xl md:text-7xl font-bold text-orange-500 max-w-4xl z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {currentHeadline}
        </motion.h1>
        <motion.p
          className="mt-6 max-w-xl text-lg text-white/80 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          Welcome to the AI-powered brand cult you didn’t know you needed.
        </motion.p>
        <motion.div className="mt-8 z-10 flex gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
          <button className="hover:scale-105 bg-gradient-to-r from-pink-500 to-orange-500 text-black px-6 py-3 rounded-2xl shadow transition-transform">
            Submit to Chaos
          </button>
          <button className="hover:border-white border border-orange-500 px-6 py-3 rounded-2xl transition-colors">
            Let's Get Lost
          </button>
        </motion.div>
      </section>

      {/* Sarcastic About Section */}
      <section id="about" className="px-6 py-20 bg-neutral-950 border-t border-neutral-800">
        <h2 className="text-4xl font-bold text-center mb-8 text-white">Who Are We? Great Question.</h2>
        <p className="max-w-3xl mx-auto text-center text-white/70 text-lg mb-12">
          We’re not here to give you clarity. We’re here to weaponize your brand identity crisis. imlost.ai was designed for founders mid-spiral, startups mid-identity-crisis, and marketers mid-existential-breakdown.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <ServiceCard title="Brand Therapy" desc="You talk. We interpret your existential dread." />
          <ServiceCard title="Vibe Strategy™" desc="Because real strategy is too rigid for this economy." />
          <ServiceCard title="Creative WTF" desc="Ideas so weird, your legal team will spiral." />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-6 py-20 bg-black">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Our AI-Powered Shenanigans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard title="Brand Optimization" desc="We train the bots to understand your brand better than your CMO ever did." />
          <ServiceCard title="AI Image Generation" desc="Because stock photos are for people who gave up." />
          <ServiceCard title="Marketing Strategy" desc="Real strategies. Real sarcasm. Real results (probably)." />
          <ServiceCard title="Voice + Messaging" desc="Your brand voice, but smarter, sassier, and probably funnier than you." />
          <ServiceCard title="AI-Generated Content" desc="Auto-generated magic that sounds like you (on your best day)." />
          <ServiceCard title="Custom Tools" desc="Need something wild? We’ll build you a frankenstein AI monster that does it." />
        </div>
      </section>

      {/* Final CTA */}
      <section id="cta" className="text-center px-6 py-20 bg-black">
        <h2 className="text-4xl font-bold mb-4 text-orange-400">Ready to Un-Lose Yourself?</h2>
        <p className="text-lg text-white/80 max-w-xl mx-auto">
          We’re here to turn your chaos into clever, AI-assisted clarity. Or at least a prettier mess.
        </p>
        <button className="mt-8 bg-gradient-to-r from-pink-500 to-orange-500 text-black px-8 py-3 rounded-2xl shadow-lg font-semibold hover:scale-105 transition-transform">
          Hire Us (If You Dare)
        </button>
      </section>

      {/* Footer */}
      <footer className="px-6 py-10 bg-black text-white flex flex-col md:flex-row justify-between items-center text-sm border-t border-neutral-800">
        <p>&copy; imlost.ai {new Date().getFullYear()} – all rights reluctantly reserved.</p>
        <ul className="flex gap-4 mt-4 md:mt-0 text-orange-400">
          <li><a href="#">Instagram</a></li>
          <li><a href="#">LinkedIn</a></li>
          <li><a href="#">Email Us</a></li>
        </ul>
      </footer>
    </main>
  );
}

export default App;
