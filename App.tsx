import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import { motion, useScroll, useSpring } from 'framer-motion';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Initialize theme based on system preference
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="bg-white dark:bg-slate-950 min-h-screen text-slate-900 dark:text-slate-100 transition-colors duration-300 relative">
        
        {/* Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 to-primary-600 origin-left z-[100]"
          style={{ scaleX }}
        />

        {/* Global Grid Pattern */}
        <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.4] dark:opacity-[0.15] bg-grid-slate-100 dark:bg-grid-slate-900 mask-image-gradient" />

        <Header darkMode={darkMode} toggleTheme={toggleTheme} />
        
        <main className="relative z-10">
          <Hero />
          <Skills />
          <Experience />
          <Projects />
          <Resume />
        </main>

        <Contact />
      </div>
    </div>
  );
}

export default App;