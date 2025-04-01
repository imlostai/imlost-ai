import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Quiz from './pages/Quiz';
import './index.css';
import './cursor.css';

function Cursor() {
  useEffect(() => {
    const dot = document.querySelector(".cursor-dot");
    const move = (e) => {
      dot.style.top = e.clientY + "px";
      dot.style.left = e.clientX + "px";
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return <div className="cursor-dot"></div>;
}

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
};

const pageTransition = { duration: 0.4 };

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><Home /></motion.div>} />
        <Route path="/about" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><About /></motion.div>} />
        <Route path="/services" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><Services /></motion.div>} />
        <Route path="/quiz" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><Quiz /></motion.div>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <Cursor />
      <div className="bg-black text-white font-sans min-h-screen">
        <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/70 border-b border-neutral-800 shadow-md">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-2xl font-extrabold tracking-tight">
              <span className="text-pink-500">●</span> imlost<span className="text-orange-500">.ai</span>
            </div>
            <ul className="flex gap-8 text-sm font-medium">
              <li><NavLink to="/" className={({ isActive }) => \`relative pb-1 transition-all duration-300 ease-in-out \${isActive ? 'text-pink-400' : 'text-orange-400 hover:text-white'} group\`}>Home<span className="absolute left-0 bottom-0 h-0.5 w-full scale-x-0 group-hover:scale-x-100 transition-transform bg-pink-500 origin-left"></span></NavLink></li>
              <li><NavLink to="/about" className={({ isActive }) => \`relative pb-1 transition-all duration-300 ease-in-out \${isActive ? 'text-pink-400' : 'text-orange-400 hover:text-white'} group\`}>About<span className="absolute left-0 bottom-0 h-0.5 w-full scale-x-0 group-hover:scale-x-100 transition-transform bg-pink-500 origin-left"></span></NavLink></li>
              <li><NavLink to="/services" className={({ isActive }) => \`relative pb-1 transition-all duration-300 ease-in-out \${isActive ? 'text-pink-400' : 'text-orange-400 hover:text-white'} group\`}>Services<span className="absolute left-0 bottom-0 h-0.5 w-full scale-x-0 group-hover:scale-x-100 transition-transform bg-pink-500 origin-left"></span></NavLink></li>
              <li><NavLink to="/quiz" className={({ isActive }) => \`relative pb-1 transition-all duration-300 ease-in-out \${isActive ? 'text-pink-400' : 'text-orange-400 hover:text-white'} group\`}>Quiz<span className="absolute left-0 bottom-0 h-0.5 w-full scale-x-0 group-hover:scale-x-100 transition-transform bg-pink-500 origin-left"></span></NavLink></li>
            </ul>
          </div>
        </nav>
        <AnimatedRoutes />
      </div>
    </Router>
  );
}