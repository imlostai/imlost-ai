import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

const headlines = [
  "We had a plan. Then the intern posted something better.",
  "Strategically directionless. Creatively undeniable.",
  "You're not paying us for direction. You're paying us for taste.",
  "We don’t have a roadmap. We have a machete."
];

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [headline, setHeadline] = useState(headlines[0]);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeadline((prev) => {
        const index = (headlines.indexOf(prev) + 1) % headlines.length;
        return headlines[index];
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden text-white font-sans">
      <AnimatePresence>
        {showIntro && (
          <motion.div
            className="absolute inset-0 z-50 flex items-center justify-center bg-black"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            {/* Glowing Logo Animation */}
            <motion.div
              className="relative flex justify-center items-center"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="absolute w-10 h-10 md:w-14 md:h-14 bg-pink-500 rounded-full blur-2xl opacity-60 z-0"
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                style={{ left: '-24px', top: '-15' }}
              />
              <motion.img
                src={logo}
                alt="imlost.ai logo"
                className="relative z-10 w-40 md:w-64"
                initial={{ scale: 0 }}
                animate={{ scale: 1.2 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ duration: 1 }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-pink-500/10 via-black to-orange-500/10 blur-3xl animate-pulse"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 2 }}
      />

      <motion.div
        className="relative z-10 flex flex-col justify-center items-center text-center px-6 h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: showIntro ? 0 : 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <motion.h1
          key={headline}
          className="text-4xl md:text-6xl font-extrabold text-orange-500 max-w-4xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {headline}
        </motion.h1>

        <motion.p
          className="mt-6 max-w-xl text-lg text-white/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          Welcome to the AI-powered creative cult you didn’t know you needed.
        </motion.p>

        <motion.a
          href="#quiz"
          className="mt-10 inline-block px-6 py-3 text-lg font-semibold bg-gradient-to-r from-pink-600 to-orange-500 text-white rounded-full shadow-lg hover:scale-105 transition-transform"
          whileHover={{ scale: 1.1 }}
        >
          Get Strategically Lost →
        </motion.a>
      </motion.div>
    </div>
  );
}