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
        <nav className="flex justify-between items-center px-6 py-4 bg-black border-b border-neutral-800">
          <div className="text-2xl font-bold">
            <span className="text-pink-500">●</span> imlost<span className="text-orange-500">.ai</span>
          </div>
          <ul className="flex gap-6 text-sm font-medium text-orange-400">
            <li><NavLink to="/" className={({ isActive }) => isActive ? 'text-pink-400 underline' : ''}>Home</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? 'text-pink-400 underline' : ''}>About</NavLink></li>
            <li><NavLink to="/services" className={({ isActive }) => isActive ? 'text-pink-400 underline' : ''}>Services</NavLink></li>
            <li><NavLink to="/quiz" className={({ isActive }) => isActive ? 'text-pink-400 underline' : ''}>Quiz</NavLink></li>
          </ul>
        </nav>
        <AnimatedRoutes />
      </div>
    </Router>
  );
}