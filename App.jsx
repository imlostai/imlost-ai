import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './index.css';

const headlines = [
  "We had a plan. Then the intern posted something better.",
  "Strategically directionless. Creatively undeniable.",
  "You're not paying us for direction. You're paying us for taste.",
  "We don’t have a roadmap. We have a machete."
];

const questions = [
  {
    question: "What does your brand *think* it is?",
    options: ["A lifestyle", "A movement", "A product", "A delusion with good design"]
  },
  {
    question: "What's your vibe?",
    options: ["Cult", "Chaos", "Corporate cosplay", "Hot mess express"]
  },
  {
    question: "How do you want people to feel?",
    options: ["Inspired", "Confused but loyal", "Afraid to unfollow", "Like they’ve joined something"]
  },
  {
    question: "What’s your ideal launch strategy?",
    options: ["A tweet", "A TikTok that makes no sense", "An NFT drop (jk?)", "We’ll figure it out"]
  }
];

function ServiceCard({ title, desc }) {
  return (
    <div className="bg-neutral-900 p-6 rounded-2xl shadow border border-neutral-700">
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-white/70">{desc}</p>
    </div>
  );
}

function CrisisQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  const handleAnswer = (answer) => {
    const updated = [...answers, answer];
    setAnswers(updated);
    if (step + 1 < questions.length) {
      setStep(step + 1);
    } else {
      generateResult(updated);
    }
  };

  const generateResult = (responses) => {
    const chaosScore = responses.filter(r => r.includes("chaos") || r.includes("mess") || r.includes("TikTok")).length;
    const cultScore = responses.filter(r => r.includes("Cult") || r.includes("joined") || r.includes("movement")).length;

    if (cultScore >= 2) {
      setResult("You’re building a brand cult. Congrats. Just don’t forget the merch.");
    } else if (chaosScore >= 2) {
      setResult("You’re fueled by chaos and TikTok trends. We respect the hustle (barely).");
    } else {
      setResult("You’re a wandering founder with good taste. You’ll be fine. Probably.");
    }
  };

  return (
    <section id="quiz" className="px-6 py-20 bg-black border-t border-neutral-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-white">Brand Identity Crisis Generator™</h2>
        <p className="text-white/70 text-lg mb-8">Answer a few chaotic questions and we’ll tell you who you *really* are. Maybe.</p>
        {result ? (
          <motion.div
            className="bg-neutral-900 p-6 rounded-2xl border border-neutral-700 text-white max-w-xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h3 className="text-2xl font-semibold mb-2">Crisis Profile:</h3>
            <p>{result}</p>
          </motion.div>
        ) : (
          <div>
            <h3 className="text-xl font-semibold text-orange-400 mb-4">{questions[step].question}</h3>
            <div className="flex flex-col gap-4">
              {questions[step].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(option)}
                  className="bg-neutral-800 hover:bg-orange-500 text-white px-4 py-3 rounded-xl transition-colors"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
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
      <nav className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 bg-black border-b border-neutral-800">
        <div className="text-2xl font-bold">
          <span className="text-pink-500">●</span> imlost<span className="text-orange-500">.ai</span>
        </div>
        <ul className="flex gap-6 text-sm font-medium text-orange-400">
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#quiz">Quiz</a></li>
          <li><a href="#cta">Contact</a></li>
        </ul>
      </nav>

      <CrisisQuiz />

      <section id="cta" className="text-center px-6 py-20 bg-black">
        <h2 className="text-4xl font-bold mb-4 text-orange-400">Ready to Un-Lose Yourself?</h2>
        <p className="text-lg text-white/80 max-w-xl mx-auto">
          We’re here to turn your chaos into clever, AI-assisted clarity. Or at least a prettier mess.
        </p>
        <button className="mt-8 bg-gradient-to-r from-pink-500 to-orange-500 text-black px-8 py-3 rounded-2xl shadow-lg font-semibold hover:scale-105 transition-transform">
          Hire Us (If You Dare)
        </button>
      </section>

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