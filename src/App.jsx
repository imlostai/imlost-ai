import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Quiz from './pages/Quiz';
import LostLab from './pages/LostLab';
import Contact from './pages/Contact';

export default function App() {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden text-white font-sans">
      <AnimatePresence>
        {showIntro && (
          <motion.div
            className="absolute inset-0 z-50 flex items-center justify-center bg-black"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            <motion.div
              className="relative flex justify-center items-center"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="absolute w-10 h-10 md:w-14 md:h-14 bg-pink-500 rounded-full blur-2xl opacity-60 z-0"
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                style={{ left: '-24px', top: '-15' }}
              />
              <motion.img
                src="/logo.png"
                alt="imlost.ai logo"
                className="h-20 w-auto relative z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
  
      <Router>
        <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-black border-b border-neutral-800">
          <NavLink to="/" className="flex items-center space-x-2">
            <motion.img
              src="/logo.png"
              alt="imlost.ai logo"
              className="h-8 w-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </NavLink>
          <ul className="flex gap-6 text-sm font-medium text-orange-400">
            <li><NavLink to="/" className={({ isActive }) => isActive ? 'text-pink-400' : 'hover:text-pink-400'}>Home</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? 'text-pink-400' : 'hover:text-pink-400'}>About</NavLink></li>
            <li><NavLink to="/services" className={({ isActive }) => isActive ? 'text-pink-400' : 'hover:text-pink-400'}>Services</NavLink></li>
            <li><NavLink to="/quiz" className={({ isActive }) => isActive ? 'text-pink-400' : 'hover:text-pink-400'}>Quiz</NavLink></li>
            <li><NavLink to="/lab" className={({ isActive }) => isActive ? 'text-pink-400' : 'hover:text-pink-400'}>Lost Lab</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'text-pink-400' : 'hover:text-pink-400'}>Contact</NavLink></li>
          </ul>
        </nav>
  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/lab" element={<LostLab />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );  
}
