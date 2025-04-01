import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-8 py-20">
      <motion.h2
        className="text-4xl md:text-6xl font-extrabold text-center text-orange-500 mb-6"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        We're Not Your Traditional Agency
      </motion.h2>

      <motion.p
        className="max-w-3xl text-center text-lg text-white/80 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        At imlost.ai, we don’t offer clarity — we offer beautifully controlled chaos, sharp instincts, and taste so good it hurts. Our job isn’t to color within the lines. It’s to redesign the box, light it on fire, and make something unforgettable from the ashes.
      </motion.p>

      <motion.div
        className="grid md:grid-cols-2 gap-8 max-w-4xl text-left"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
      >
        {[
          "Brand Therapy — You vent. We translate your identity crisis into aesthetic direction.",
          "Vibe Strategy — Because data without instinct is just noise.",
          "Creative WTF — We make work that scares your legal team and excites your audience.",
          "Sentient Social — Content with a pulse. Algorithms, meet personality."
        ].map((item, index) => (
          <motion.div
            key={index}
            className="bg-white/5 border border-white/10 p-6 rounded-lg shadow-lg hover:bg-white/10 transition-all"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {item}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}