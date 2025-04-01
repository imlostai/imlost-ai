import './index.css'

function ServiceCard({ title, desc }) {
  return (
    <div className="bg-neutral-900 p-6 rounded-2xl shadow border border-neutral-700">
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-white/70">{desc}</p>
    </div>
  );
}

function App() {
  return (
    <main className="bg-black text-white font-sans">
      <nav className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 bg-black border-b border-neutral-800">
        <div className="text-2xl font-bold">
          <span className="text-pink-500">●</span> imlost<span className="text-orange-500">.ai</span>
        </div>
        <ul className="flex gap-6 text-sm font-medium text-orange-400">
          <li><a href="#services">Services</a></li>
          <li><a href="#quiz">Solutions</a></li>
          <li><a href="#cta">Resources</a></li>
        </ul>
      </nav>

      <section className="h-screen flex flex-col justify-center items-center text-center px-8 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-pink-500/20 to-orange-500/10 blur-3xl" />
        <h1 className="text-5xl md:text-7xl font-bold max-w-4xl text-orange-500 z-10">
          AI Solutions<br />Company
        </h1>
        <p className="mt-6 max-w-xl text-lg text-white/80 z-10">
          Transforming your business with artificial intelligence (and a bit of judgment).
        </p>
        <div className="mt-8 z-10">
          <button className="bg-gradient-to-r from-pink-500 to-orange-500 text-black px-6 py-3 rounded-2xl font-semibold shadow-lg hover:scale-105 transition-transform">
            Get Started
          </button>
        </div>
      </section>

      <section id="services" className="px-6 py-20 bg-black">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Our AI-Powered Shenanigans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard title="Brand Optimization" desc="We train the bots to understand your brand better than your CMO ever did." />
          <ServiceCard title="AI Image Generation" desc="Because stock photos are for people who gave up." />
          <ServiceCard title="Marketing Strategy" desc="Real strategies. Real sarcasm. Real results (probably)." />
          <ServiceCard title="Voice + Messaging" desc="Your brand voice, but smarter, sassier, and probably funnier than you." />
          <ServiceCard title="AI-Generated Content" desc="Auto-generated magic that sounds like you (on your best day)." />
          <ServiceCard title="Custom Tools" desc="Need something wild? We’ll build you a frankenstein AI monster that does it." />
        </div>
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
  )
}

export default App