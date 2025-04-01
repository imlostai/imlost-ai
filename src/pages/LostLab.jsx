import React from 'react';
import { motion } from 'framer-motion';

const tools = [
  { name: 'Caption Generator', desc: 'Crafts captions that could start a cult.' },
  { name: 'Prompt Remixr', desc: 'Turns boring prompts into viral chaos.' },
  { name: 'Brand Tone Filter', desc: 'Injects your content with your voice. Or ours.' },
  { name: 'Meme Alchemist', desc: 'Input: Idea. Output: Shareable sarcasm.' },
  { name: 'Name Generator', desc: 'Because “Untitled Final_v6” isn’t a brand.' },
  { name: 'AI Roast My Website', desc: 'Self-explanatory and brutal.' },
  { name: 'Strategy Spinner', desc: 'For when “pivot” becomes a lifestyle.' },
  { name: '???', desc: 'Something glitchy. Don’t click it. (Click it).' }
];

export default function LostLab() {
  return (
    <div className="min-h-screen bg-black text-white px-8 py-20">
      <motion.h2
        className="text-4xl md:text-6xl font-extrabold text-center text-orange-500 mb-10"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Lost Lab™
      </motion.h2>

      <motion.p
        className="text-white/70 text-center max-w-2xl mx-auto mb-14"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Welcome to the experimental zone. These aren’t tools. They’re glitches in the creative matrix.
        Built to spark ideas, fuel campaigns, and possibly cause minor existential crises.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {tools.map((tool, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-lg p-6 shadow-md backdrop-blur hover:scale-105 transition-transform duration-300 cursor-pointer hover:shadow-pink-500/30"
            whileHover={{ scale: 1.06 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <h3 className="text-xl font-semibold text-pink-400 mb-2">{tool.name}</h3>
            <p className="text-white/70 text-sm">{tool.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}