import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { X, ArrowUpRight, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Selected Projects</h2>
        <p className="text-slate-400 max-w-2xl">
          Experiments in code, perception, and interaction design.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            layoutId={`project-${project.id}`}
            onClick={() => setSelectedProject(project)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden cursor-pointer hover:border-neon-cyan/50 transition-colors duration-300"
          >
            <div className="aspect-video overflow-hidden">
              <motion.img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-white group-hover:text-neon-cyan transition-colors">{project.title}</h3>
                <ArrowUpRight size={18} className="text-slate-500 group-hover:text-neon-cyan group-hover:rotate-45 transition-all" />
              </div>
              <p className="text-slate-400 text-sm mb-4 line-clamp-2">{project.tagline}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 3).map(tag => (
                  <span key={tag} className="text-xs font-mono text-slate-500 bg-white/5 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                layoutId={`project-${selectedProject.id}`}
                className="bg-charcoal border border-white/10 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors z-10"
                >
                  <X size={20} className="text-white" />
                </button>

                <div className="h-64 md:h-80 w-full relative">
                   <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal to-transparent" />
                  <div className="absolute bottom-6 left-6 md:left-10">
                    <h2 className="text-4xl font-serif font-bold text-white mb-2">{selectedProject.title}</h2>
                    <p className="text-xl text-slate-300 font-light">{selectedProject.tagline}</p>
                  </div>
                </div>

                <div className="p-6 md:p-10 grid md:grid-cols-[2fr_1fr] gap-10">
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-sm font-mono text-neon-purple uppercase tracking-widest mb-2">The Problem</h4>
                      <p className="text-slate-300 leading-relaxed">{selectedProject.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-mono text-neon-purple uppercase tracking-widest mb-2">Approach</h4>
                      <p className="text-slate-300 leading-relaxed">{selectedProject.approach}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-mono text-neon-purple uppercase tracking-widest mb-2">Outcome</h4>
                      <p className="text-slate-300 leading-relaxed">{selectedProject.outcome}</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                      <h4 className="text-white font-medium mb-4">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map(tag => (
                          <span key={tag} className="text-sm text-slate-300 bg-white/10 px-3 py-1.5 rounded-full border border-white/5">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-3">
                      <button className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white text-charcoal font-bold hover:bg-slate-200 transition-colors">
                        <ArrowUpRight size={18} /> View Live Demo
                      </button>
                      <button className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/5 text-white font-medium border border-white/10 hover:bg-white/10 transition-colors">
                        <Github size={18} /> View Source
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;