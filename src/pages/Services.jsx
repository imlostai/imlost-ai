import React from 'react';
import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      title: "Brand Breakdown",
      desc: "AI-enhanced archetypes, tone of voice, logo, and your brand’s digital DNA. We basically scan your soul and turn it into a brand system."
    },
    {
      title: "Lost Launch™",
      desc: "Framer site. Campaign kit. GPT content engine. The full-blown identity drop — built for speed, edge, and a bit of chaos."
    },
    {
      title: "Muted Package",
      desc: "We rebuild your voice from the inside out. Internal comms. Prompt libraries. Brand tone so sharp it could stab someone in a comment section."
    },
    {
      title: "VibeOS",
      desc: "A monthly creative content system powered by templates, prompts, and AI agents that don’t sleep. Scale your identity while you scroll."
    },
    {
      title: "The Spiral",
      desc: "Retainer for scaling chaos with intention. Strategy, memes, momentum, and monitoring what works. No fluff. No babysitting."
    },
    {
      title: "Lost Lab™",
      desc: "Experimental AI tools, brand agents, utilities you probably shouldn’t trust — but will anyway. Pure innovation with a risk warning."
    },
    {
      title: "The Black Box (Coming Soon)",
      desc: "Private operating system for elite brands. It’s not a deliverable. It’s a digital brain built to run your identity in stealth mode."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white px-8 py-20 flex flex-col items-center justify-center">
      <motion.h2
        className="text-4xl md:text-6xl font-extrabold text-orange-500 mb-10 text-center"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Services, Sort Of
      </motion.h2>

      <motion.p
        className="text-white/80 max-w-3xl text-center text-lg mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        We don't offer packages. We offer controlled creative infrastructure. These are the 
        modules we use to build your transformation.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
        {services.map((item, index) => (
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