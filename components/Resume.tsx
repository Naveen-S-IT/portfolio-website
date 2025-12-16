import React from 'react';
import { Download, FileText, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Resume: React.FC = () => {
  return (
    <section id="resume" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-gradient-to-tl from-sky-100/40 to-transparent dark:from-slate-800/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 space-y-6"
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">Resume</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              I am currently open to full-time opportunities. Download my resume to view my full qualification details, including education and certifications.
            </p>
            
            <div className="flex flex-col space-y-4">
              <motion.a 
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="/resume.pdf" 
                download
                className="inline-flex justify-center items-center px-6 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-slate-900 dark:bg-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-sky-50 transition-all shadow-xl shadow-slate-900/10"
              >
                <Download className="mr-3 h-5 w-5" />
                Download PDF
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="/resume.pdf" 
                target="_blank"
                className="inline-flex justify-center items-center px-6 py-4 border border-slate-200 dark:border-slate-600 text-base font-medium rounded-xl text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800/80 hover:bg-sky-50 dark:hover:bg-slate-700/80 transition-all shadow-sm"
              >
                <ExternalLink className="mr-3 h-5 w-5" />
                View in New Tab
              </motion.a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50, rotate: 5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="lg:col-span-8 p-4 sm:p-8"
          >
            {/* Resume Preview Mockup */}
            <div className="text-slate-900 dark:text-slate-100 aspect-[8.5/11] w-full overflow-hidden relative group bg-white dark:bg-slate-800/60 rounded-lg shadow-2xl dark:shadow-slate-900/50 border border-slate-200 dark:border-slate-700 hover:shadow-3xl hover:shadow-sky-500/20 dark:hover:shadow-sky-500/10 transition-all duration-300">
              
              {/* Gradient overlay for interaction hint */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 via-sky-500/0 to-blue-500/0 group-hover:from-primary-500/5 group-hover:via-sky-500/3 group-hover:to-blue-500/5 transition-all pointer-events-none duration-500 rounded-lg"></div>
              
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-sky-400/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Mock Content */}
              <div className="p-8 sm:p-12 h-full flex flex-col">
                <div className="border-b-2 border-slate-900 dark:border-slate-600 pb-6 mb-6">
                   <h3 className="text-3xl font-bold uppercase tracking-widest mb-1">Naveen</h3>
                   <p className="text-slate-600 dark:text-slate-300 font-medium">Full-Stack Web Developer</p>
                </div>

                <div className="grid grid-cols-3 gap-8 flex-1">
                   <div className="col-span-2 space-y-6">
                      <div>
                        <h4 className="font-bold uppercase text-sm text-slate-500 dark:text-slate-400 mb-2">Profile</h4>
                        <div className="space-y-2">
                           <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded w-full"></div>
                           <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded w-11/12"></div>
                           <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded w-full"></div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-bold uppercase text-sm text-slate-500 dark:text-slate-400 mb-2">Experience</h4>
                        <div className="space-y-4">
                           <div>
                              <div className="h-3 bg-slate-200 dark:bg-slate-600 rounded w-1/3 mb-2"></div>
                              <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded w-full mb-1"></div>
                              <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded w-5/6"></div>
                           </div>
                           <div>
                              <div className="h-3 bg-slate-200 dark:bg-slate-600 rounded w-1/3 mb-2"></div>
                              <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded w-full mb-1"></div>
                              <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded w-4/6"></div>
                           </div>
                        </div>
                      </div>
                   </div>

                   <div className="col-span-1 space-y-6 border-l border-slate-100 dark:border-slate-700 pl-6">
                      <div>
                        <h4 className="font-bold uppercase text-sm text-slate-500 dark:text-slate-400 mb-2">Skills</h4>
                        <div className="flex flex-wrap gap-1">
                           <div className="h-5 w-12 bg-slate-100 dark:bg-slate-700 rounded"></div>
                           <div className="h-5 w-16 bg-slate-100 dark:bg-slate-700 rounded"></div>
                           <div className="h-5 w-10 bg-slate-100 dark:bg-slate-700 rounded"></div>
                           <div className="h-5 w-14 bg-slate-100 dark:bg-slate-700 rounded"></div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold uppercase text-sm text-slate-500 dark:text-slate-400 mb-2">Education</h4>
                        <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded w-full mb-1"></div>
                        <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded w-2/3"></div>
                      </div>
                   </div>
                </div>

                <div className="mt-auto pt-6 text-center text-slate-400 dark:text-slate-500 text-xs flex flex-col items-center">
                   <FileText className="w-8 h-8 mb-2 opacity-20" />
                   <p>Resume Preview</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Resume;
