import React from 'react';
import { Mail, Github, Linkedin, Instagram, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="relative z-10 bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center mb-16 space-y-8 md:space-y-0"
        >
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">Let's work together</h2>
            <p className="text-slate-400 max-w-md">
              Currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end space-y-4">
            <motion.a 
              whileHover={{ scale: 1.05, color: '#38bdf8' }}
              href="navinmails4u@gmail.com" 
              className="text-xl md:text-2xl font-bold hover:text-primary-400 transition-colors"
            >
              navinmails4u@gmail.com
            </motion.a>
            <div className="flex space-x-6">
               <motion.a whileHover={{ y: -3, color: '#fff' }} href="https://github.com/NN-Naveen-S" target="_blank" rel="noopener noreferrer" className="text-slate-400 transition-colors">
                 <span className="sr-only">GitHub</span>
                 <Github size={24} />
               </motion.a>
               <motion.a whileHover={{ y: -3, color: '#fff' }} href="#" className="text-slate-400 transition-colors">
                 <span className="sr-only">LinkedIn</span>
                 <Linkedin size={24} />
               </motion.a>
               <motion.a whileHover={{ y: -3, color: '#fff' }} href="#" target="_blank" rel="noopener noreferrer" className="text-slate-400 transition-colors">
                 <span className="sr-only">Instagram</span>
                 <Instagram size={24} />
               </motion.a>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-slate-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Naveen. All rights reserved. Built with Next.js & Tailwind.
          </p>
          
          <motion.a 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="#about" 
            className="p-3 hover:text-primary-400 transition-colors group"
            aria-label="Back to top"
          >
            <ArrowUp size={20} className="text-slate-400 group-hover:text-white" />
          </motion.a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Contact;
