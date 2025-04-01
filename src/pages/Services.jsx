import React from 'react';
import { motion } from 'framer-motion';

export default function Services() {
  return (
    <div className="min-h-screen bg-black text-white px-8 py-20 flex flex-col items-center justify-center">
      <motion.h2
        className="text-4xl md:text-6xl font-extrabold text-orange-500 mb-10 text-center"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Our Services (If You Can Call Them That)
      </motion.h2>

      <motion.p
        className="text-white/80 max-w-3xl text-center text-lg mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        You want deliverables? We offer controlled chaos disguised as services. Real strategy is dead. 
        Gut instinct and cultural obsession are all that matter now — and we've got both, in excess.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
        {[
          {
            title: "Creative Cartography",
            desc: "We don’t follow maps. We draw them as we go — badly at first, then brilliantly."
          },
          {
            title: "Existential Packaging",
            desc: "We don’t design logos. We wrap your brand’s identity crisis in couture."
          },
          {
            title: "Digital Personality Crises",
            desc: "Social media that swings between genius and breakdown — just like your audience."
          },
          {
            title: "Throwing Stuff Until It Works™",
            desc: "You call it 'performance marketing.' We call it 'testing until something sticks and then pretending it was intentional.'"
          }
        ].map((item, index) => (
          <motion.div
            key={index}
            className="bg-white/5 border border-white/10 p-6 rounded-lg hover:bg-white/10 transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <h3 className="text-xl font-semibold text-pink-400 mb-2">{item.title}</h3>
            <p className="text-white/80 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}