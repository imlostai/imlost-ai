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
    <Router>
      <div className="min-h-screen bg-black text-white font-sans">
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
            <li><NavLink to="/" className={({ isActive }) => isActive ? 'text-pink-400' : 'hover:text-white'}>Home</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? 'text-pink-400' : 'hover:text-white'}>About</NavLink></li>
            <li><NavLink to="/services" className={({ isActive }) => isActive ? 'text-pink-400' : 'hover:text-white'}>Services</NavLink></li>
            <li><NavLink to="/quiz" className={({ isActive }) => isActive ? 'text-pink-400' : 'hover:text-white'}>Quiz</NavLink></li>
            <li><NavLink to="/lab" className={({ isActive }) => isActive ? 'text-pink-400' : 'hover:text-white'}>Lost Lab</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'text-pink-400' : 'hover:text-white'}>Contact</NavLink></li>
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
      </div>
    </Router>
  );
}
