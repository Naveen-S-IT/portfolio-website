import React from 'react';
import { Project } from '../types';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "CrewPass",
      description: "Angular-based application to manage document uploads, verification, and candidate status tracking.Implemented notification workflows based on document review status.",
      tags: ["Angular", "TypeScript" , "Bootstrap" , "RESTful APIs"],
      imageUrl: "https://picsum.photos/seed/ai/800/600"
    },
    {
      id: 2,
      title: "Course Booking Platform",
      description: "Next.js-based booking engine with real-time availability and waitlist management.",
      tags: ["Next.js", "TypeScript" , "Tailwind" , "RESTful APIs"],
      imageUrl: "https://picsum.photos/seed/course/800/600"
    },
    {
      id: 3,
      title: "Waiting List Management System",
      description: "A golf course based booking with waiting list management system.",
      tags: ["Next.js", "TypeScript" , "Tailwind", "PostgreSQL"],
      imageUrl: "https://picsum.photos/seed/waiting/800/600"
    },
    {
      id: 4,
      title: "A full stack web application used to manage documents.",
      description: "Built a full-stack KB management system with Redis vector search for document storage and retrieval. Implemented origin whitelisting and similarity-based search , managed data using PostgreSQL.",
      tags: ["Next.js", "TypeScript" , "Tailwind", "PostgreSQL", "Docker" , "NestJS" , "Redis"],
      imageUrl: "https://picsum.photos/seed/chat/800/600"
    },
    {
      id: 5,
      title: "Courserev assistant chat",
      description: "Built an AI agent workflow using LangGraph with Redis-based KNN vector search for relevant document retrieval.Developed a user interface to capture inputs and orchestrate LLM-driven conversational responses.",
      tags: ["Next.js", "TypeScript" , "Tailwind" , "Redis" , "LangGraph" , "PostgreSQL"],
      imageUrl: "https://picsum.photos/seed/ai/800/600"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">Featured Projects</h2>
          <div className="h-1 w-20 bg-primary-500 mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            A selection of recent works.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              // whileHover={{ 
              //   y: -12, 
              //   boxShadow: "0 20px 40px -5px rgba(14, 165, 233, 0.15)",
              //   borderColor: "rgba(56, 189, 248, 0.4)"
              // }}
              className="group bg-white dark:bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-lg dark:shadow-slate-900/50 hover:shadow-2xl hover:shadow-sky-500/20 dark:hover:shadow-sky-500/10 transition-all duration-300 flex flex-col backdrop-blur-sm"
            >
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-sky-100 to-blue-100 dark:from-slate-700 dark:to-slate-800">
                <div className="absolute inset-0 bg-gradient-to-t from-sky-900/20 via-transparent to-transparent group-hover:from-sky-900/5 transition-all duration-300 z-10"></div>
                <div className="absolute inset-0 bg-sky-500/5 dark:bg-sky-400/5 group-hover:bg-transparent transition-colors z-10"></div>
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform origin-center"
                />
                <div className="absolute top-4 right-4 z-20">
                  <div className="w-3 h-3 rounded-full bg-green-400 dark:bg-green-500 shadow-lg animate-pulse"></div>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col relative z-20 bg-gradient-to-b from-white/50 to-white dark:from-slate-800/50 dark:to-slate-800/80">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary-500 dark:group-hover:text-sky-400 transition-colors flex-1">
                    {project.title}
                  </h3>
                  {/* <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-400 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ExternalLink className="w-4 h-4 text-white" />
                  </div> */}
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-6 flex-1 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1.5 text-xs font-medium text-sky-700 dark:text-sky-300 bg-sky-50 dark:bg-slate-700/60 hover:bg-sky-100 dark:hover:bg-slate-600/60 rounded-full transition-all duration-200 border border-sky-200 dark:border-slate-600 hover:border-sky-300 dark:hover:border-sky-500 hover:scale-105"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700">
                  <motion.a 
                    whileHover={{ scale: 1.05, x: 2 }}
                    whileTap={{ scale: 0.95 }}
                    href="#" 
                    className="flex items-center text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.05, x: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href="#" 
                    className="flex items-center text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 transition-colors"
                  >
                    Live Demo
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </motion.a>
                </div> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;