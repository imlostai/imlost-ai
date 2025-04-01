import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import CrisisQuiz from '../components/CrisisQuiz';

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
      setCurrentHeadline(prev => {
        const index = (headlines.indexOf(prev) + 1) % headlines.length;
        return headlines[index];
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-black text-white font-sans overflow-x-hidden min-h-screen px-6 py-20 text-center">
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-orange-500 mb-6"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {currentHeadline}
      </motion.h1>
      <motion.p
        className="text-white/70 max-w-xl mx-auto mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        We’re not lost. Just exploring aggressively. imlost.ai is your sarcastic, strategic, and AI-fueled partner in brand rebellion.
      </motion.p>

      <CrisisQuiz />
    </main>
  );
}