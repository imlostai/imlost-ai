import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const headlines = [
  "We had a plan. Then the intern posted something better.",
  "Strategically directionless. Creatively undeniable.",
  "You're not paying us for direction. You're paying us for taste.",
  "We don’t have a roadmap. We have a machete."
];

export default function Home() {
  const [currentHeadline, setCurrentHeadline] = useState(headlines[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadline((prev) => {
        const index = (headlines.indexOf(prev) + 1) % headlines.length;
        return headlines[index];
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
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
    </section>
  );
}