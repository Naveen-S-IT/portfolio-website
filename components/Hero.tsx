import React from 'react';
import { ArrowRight, Download, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="about" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-sky-50/80 to-white dark:from-slate-950 dark:to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-3 py-1 rounded-full border border-sky-200 bg-sky-50/50 dark:bg-slate-800/80 dark:border-slate-700 text-sky-600 dark:text-sky-400 text-sm font-medium mb-6 shadow-sm backdrop-blur-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-sky-500 mr-2 animate-pulse"></span>
            Available for new projects
          </motion.div> */}
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6"
          >
            Hi, I'm Naveen. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-primary-500 to-blue-600 dark:from-sky-400 dark:to-blue-400 animate-gradient-x">
              Full-Stack Developer.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-2xl"
          >
            Full Stack Web Developer with 2.5+ years of experience building scalable web applications using Angular, Next.js, Nuxt.js, Nest.js, TypeScript and JavaScript. Experienced in developing admin dashboards, booking platforms, and AI-assisted features. Strong working knowledge of PostgreSQL, MySQL, Redis and deploying applications on Google Cloud Platform (GCP).
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.a 
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(14, 165, 233, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              href="#contact" 
              className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-sky-500 to-primary-600 hover:from-sky-600 hover:to-primary-700 transition-all shadow-lg shadow-sky-500/30"
            >
              Contact Me
              <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,1)' }}
              whileTap={{ scale: 0.95 }}
              href="#resume" 
              className="inline-flex justify-center items-center px-6 py-3 border border-sky-200 dark:border-slate-600 text-base font-medium rounded-lg text-slate-700 dark:text-slate-200 bg-white/50 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-700/80 transition-all backdrop-blur-sm"
            >
              Download Resume
              <Download className="ml-2 -mr-1 h-5 w-5" />
            </motion.a>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <a href="#skills" className="text-sky-400/70 hover:text-sky-500 transition-colors">
          <ChevronDown size={32} />
        </a>
      </motion.div>

      {/* Animated Background blobs - Enhanced */}
      <div className="absolute top-0 right-0 -z-10 opacity-60 dark:opacity-30 translate-x-1/3 -translate-y-1/4">
        <div className="absolute w-[600px] h-[600px] bg-sky-300 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-20 w-[500px] h-[500px] bg-primary-300 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-40 right-20 w-[500px] h-[500px] bg-blue-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="absolute bottom-0 left-0 -z-10 opacity-40 dark:opacity-20 translate-y-1/3 -translate-x-1/4">
          <div className="w-[500px] h-[500px] bg-sky-200 rounded-full filter blur-[80px] animate-blob"></div>
      </div>
    </section>
  );
};

export default Hero;