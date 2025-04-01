import React, { useState } from 'react';

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
    question: "Ideal launch strategy?",
    options: ["A tweet", "A TikTok that makes no sense", "An NFT drop (jk?)", "We’ll figure it out"]
  }
];

export default function Quiz() {
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
    <section className="px-6 py-20 bg-black text-white text-center">
      <h2 className="text-4xl font-bold mb-6">Brand Identity Crisis Generator™</h2>
      {result ? (
        <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-700 max-w-xl mx-auto">
          <h3 className="text-2xl mb-2">Crisis Profile:</h3>
          <p>{result}</p>
        </div>
      ) : (
        <>
          <h3 className="text-xl text-orange-400 mb-4">{questions[step].question}</h3>
          <div className="flex flex-col gap-4 max-w-md mx-auto">
            {questions[step].options.map((option, idx) => (
              <button key={idx} onClick={() => handleAnswer(option)} className="bg-neutral-800 hover:bg-orange-500 px-4 py-3 rounded-xl transition-colors">
                {option}
              </button>
            ))}
          </div>
        </>
      )}
    </section>
  );
}