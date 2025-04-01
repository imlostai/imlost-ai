import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

import Home from './pages/Home';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.6
};

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-black border-b border-white/10">
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
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={
          <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
            <Home />
          </motion.div>
        } />
      </Routes>
    </div>
  );
}