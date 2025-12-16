import React from 'react';
import { SkillCategory } from '../types';
import { Code2, Server, Database, Settings } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend",
      skills: ["Next.js","Nuxt 3", "Angular", "Tailwind CSS", "Bootstrap", "TypeScript"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "NestJS", "RESTful APIs"]
    },
    {
      title: "Database",
      skills: ["MySQL", "PostgreSQL", "TypeORM"]
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "Bitbucket", "Docker", "GCP", "Redis", "LangGraph", "CI/CD" ,
      "Cursor" , "Wibe Coding"
      ]
    },
  ];

  const getIcon = (title: string) => {
    switch (title) {
      case 'Frontend': return <Code2 className="w-6 h-6 text-sky-500" />;
      case 'Backend': return <Server className="w-6 h-6 text-primary-500" />;
      case 'Database': return <Database className="w-6 h-6 text-blue-500" />;
      default: return <Settings className="w-6 h-6 text-cyan-500" />;
    }
  };

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">Technical Skills</h2>
          <div className="h-1 w-20 bg-sky-400 mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            A comprehensive toolkit for building modern web applications.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              variants={item}
              whileHover={{ 
                y: -8, 
                scale: 1.02
              }}
              className="p-6 bg-white/60 dark:bg-slate-800/40 rounded-2xl border border-slate-200/50 dark:border-slate-700/50 shadow-md dark:shadow-slate-900/30 hover:shadow-xl hover:shadow-sky-500/20 dark:hover:shadow-sky-500/10 hover:border-sky-300 dark:hover:border-sky-500/50 transition-all duration-300 group backdrop-blur-sm relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-sky-50/0 to-primary-50/0 dark:from-sky-900/0 dark:to-primary-900/0 group-hover:from-sky-50/30 group-hover:to-primary-50/20 dark:group-hover:from-sky-900/20 dark:group-hover:to-primary-900/10 rounded-2xl transition-all duration-300 pointer-events-none"></div>
              <div className="flex items-center mb-6 relative z-10">
                <div className="p-3 mr-4 rounded-xl bg-gradient-to-br from-sky-100 to-primary-100 dark:from-slate-700 dark:to-slate-600 text-sky-500 dark:text-sky-400 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-sm">
                  {getIcon(category.title)}
                </div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors relative z-10">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2 relative z-10">
                {category.skills.map((skill, i) => (
                  <motion.span 
                    key={skill}
                    whileHover={{ scale: 1.08, y: -2 }} 
                    className="px-3 py-1.5 text-sm font-medium rounded-full text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-700/60 hover:bg-sky-100 dark:hover:bg-slate-600/80 transition-all duration-200 cursor-default border border-slate-200 dark:border-slate-600 hover:border-sky-300 dark:hover:border-sky-500 shadow-sm hover:shadow-md"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;