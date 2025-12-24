import React from 'react';
import { Experience as ExperienceType } from '../types';
import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  const experiences: ExperienceType[] = [
    {
      id: 1,
      role: "Frontend Developer",
      company: "Nano Nino",
      period: "Aug 2023 – Apr 2025",
      description: "Developed responsive frontend applications using Angular, Nuxt.js, and Next.js. Built reusable UI components and integrated REST APIs. Improved usability and performance through clean code and responsive design practices."
    },
    {
      id: 1,
      role: "Full-Stack Developer",
      company: "CourseRev",
      period: "Apr 2025 – Nov 2025",
      description: "Developed and maintained full-stack applications using Nest.js and relational database MySql. Built REST APIs and handled frontend–backend integration. Deployed and managed applications on GCP & Netlify."
    },
    {
      id: 3,
      role: "AI Assistant Chat Developer",
      company: "CourseRev",
      period: "Nov 2025 – Present",
      description: "Developed AI chat assistant modules using LangGraph workflows. Integrated Redis vector search (KNN) to retrieve relevant documents for conversational responses."
    }
  ];
  
 

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute left-0 top-1/4 w-96 h-96 bg-sky-100/50 dark:bg-slate-800/20 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">Work Experience</h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-primary-500 to-sky-400 mt-4 rounded-full"
          ></motion.div>
        </motion.div>

        <div className="relative border-l-2 border-sky-200 dark:border-slate-600 ml-3 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id} 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline dot */}
              <span className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary-500 dark:bg-sky-400 border-4 border-white dark:border-slate-950 shadow-md"></span>
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {exp.role}
                </h3>
                <span className="text-sm font-medium text-primary-600 dark:text-primary-400 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">
                  {exp.period}
                </span>
              </div>
              
              <div className="text-lg font-medium text-slate-700 dark:text-slate-200 mb-4 flex items-center">
                <Briefcase className="w-4 h-4 mr-2 text-primary-500" />
                {exp.company}
              </div>
              
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
