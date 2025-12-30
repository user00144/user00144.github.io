import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE, EDUCATION, SKILLS, AWARDS, TEACHING } from '../constants';
import { Download, Award as AwardIcon, BookOpen } from 'lucide-react';

const Resume: React.FC = () => {
  return (
    <section id="resume" className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2">Resume</h2>
          <p className="text-slate-400">Academic background, research experience, and achievements.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-white text-charcoal font-bold rounded-full hover:bg-slate-200 transition-colors w-fit">
          <Download size={18} /> Download CV
        </button>
      </div>

      <div className="grid lg:grid-cols-[1fr_2fr] gap-16">
        {/* Left Column */}
        <div className="space-y-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-sm font-mono text-neon-purple uppercase tracking-widest mb-6">Education</h3>
            <div className="space-y-8">
              {EDUCATION.map((edu) => (
                <div key={edu.id} className="relative pl-6 border-l border-white/10">
                  <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-charcoal border border-slate-600 rounded-full" />
                  <h4 className="text-white font-bold">{edu.school}</h4>
                  <p className="text-slate-300 text-sm mb-1">{edu.degree}</p>
                  <p className="text-xs text-slate-500 font-mono mb-2">{edu.year}</p>
                  {edu.details && <p className="text-xs text-slate-400">{edu.details}</p>}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-sm font-mono text-neon-purple uppercase tracking-widest mb-6">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((skill, i) => (
                <span 
                  key={i}
                  className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300 hover:border-neon-cyan/50 hover:text-white transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

           {/* Awards */}
           <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-sm font-mono text-neon-purple uppercase tracking-widest mb-6 flex items-center gap-2">
              <AwardIcon size={14} /> Awards & Certs
            </h3>
            <div className="space-y-4">
              {AWARDS.map((award) => (
                <div key={award.id} className="group">
                  <div className="flex justify-between items-start">
                    <h4 className="text-sm font-medium text-white group-hover:text-neon-cyan transition-colors">{award.title}</h4>
                    <span className="text-[10px] font-mono text-slate-500 whitespace-nowrap ml-2">{award.date}</span>
                  </div>
                  <p className="text-xs text-slate-400">{award.organization}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="space-y-12">
           {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-sm font-mono text-neon-purple uppercase tracking-widest mb-8">Research Experience</h3>
            <div className="space-y-12">
              {EXPERIENCE.map((exp, index) => (
                <div key={exp.id} className="group">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                    <h4 className="text-xl font-serif font-bold text-white group-hover:text-neon-cyan transition-colors">{exp.role}</h4>
                    <span className="font-mono text-xs text-slate-500">{exp.period}</span>
                  </div>
                  <p className="text-neon-blue text-sm font-medium mb-4">{exp.company}</p>
                  <ul className="space-y-2">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="text-slate-400 text-sm leading-relaxed flex gap-3">
                        <span className="text-neon-purple mt-1.5 text-[10px]">●</span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Teaching */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-sm font-mono text-neon-purple uppercase tracking-widest mb-8 flex items-center gap-2">
              <BookOpen size={16} /> Teaching & Volunteering
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {TEACHING.map((teach) => (
                <div key={teach.id} className="bg-white/5 border border-white/5 p-4 rounded-xl hover:bg-white/10 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-white font-medium">{teach.role}</h4>
                  </div>
                  <p className="text-xs text-neon-blue mb-2">{teach.institution}</p>
                  <p className="text-xs text-slate-500 font-mono mb-3">{teach.period}</p>
                  <p className="text-xs text-slate-400">{teach.description[0]}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;