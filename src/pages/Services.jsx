import React from 'react';

function ServiceCard({ title, desc }) {
  return (
    <div className="bg-neutral-900 p-6 rounded-2xl shadow border border-neutral-700">
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-white/70">{desc}</p>
    </div>
  );
}

export default function Services() {
  return (
    <section className="px-6 py-20 bg-black text-white">
      <h2 className="text-4xl font-bold text-center mb-12">Our AI-Powered Shenanigans</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ServiceCard title="Brand Optimization" desc="Bots that know you better than your ex." />
        <ServiceCard title="AI Image Generation" desc="Because stock photos are for quitters." />
        <ServiceCard title="Marketing Strategy" desc="Real strategies. Real sarcasm. Probably real results." />
      </div>
    </section>
  );
}