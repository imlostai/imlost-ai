import React from 'react';

export default function CrisisQuiz() {
  return (
    <div className="text-white mt-16 max-w-2xl mx-auto text-center">
      <h3 className="text-2xl font-bold mb-4">Brand Identity Crisis Generator™</h3>
      <p className="text-white/70 mb-4">
        Take our quiz to find out what type of mess your brand actually is.
      </p>
      <button className="mt-4 bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-600 transition">
        Begin Diagnosis
      </button>
    </div>
  );
}