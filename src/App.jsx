import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  in: {
    opacity: 1,
    y: 0
  },
  out: {
    opacity: 0,
    y: -20
  }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.6
};

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <nav className="flex justify-center space-x-6 py-6 border-b border-white/10">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `relative pb-1 transition-all duration-300 ease-in-out ${
              isActive ? 'text-pink-400' : 'text-orange-400 hover:text-white'
            } group`
          }
        >
          Home
          <span className="absolute left-0 bottom-0 h-0.5 w-full scale-x-0 group-hover:scale-x-100 transition-transform bg-pink-500 origin-left"></span>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `relative pb-1 transition-all duration-300 ease-in-out ${
              isActive ? 'text-pink-400' : 'text-orange-400 hover:text-white'
            } group`
          }
        >
          About
          <span className="absolute left-0 bottom-0 h-0.5 w-full scale-x-0 group-hover:scale-x-100 transition-transform bg-pink-500 origin-left"></span>
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            `relative pb-1 transition-all duration-300 ease-in-out ${
              isActive ? 'text-pink-400' : 'text-orange-400 hover:text-white'
            } group`
          }
        >
          Services
          <span className="absolute left-0 bottom-0 h-0.5 w-full scale-x-0 group-hover:scale-x-100 transition-transform bg-pink-500 origin-left"></span>
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={
          <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
            <Home />
          </motion.div>
        } />
        <Route path="/about" element={
          <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
            <About />
          </motion.div>
        } />
        <Route path="/services" element={
          <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
            <Services />
          </motion.div>
        } />
      </Routes>
    </div>
  );
}