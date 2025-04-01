import React from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-black text-white">
      <motion.h1 className="text-5xl md:text-7xl font-bold text-orange-500 mb-4">
        Strategically directionless. Creatively undeniable.
      </motion.h1>
      <p className="text-white/70 text-lg max-w-xl">
        Welcome to the AI-powered brand cult you didn’t know you needed.
      </p>
    </section>
  );
}