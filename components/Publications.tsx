import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PUBLICATIONS } from '../constants';
import { Publication } from '../types';
import { FileText, ChevronDown } from 'lucide-react';
import clsx from 'clsx';

const PublicationGroup: React.FC<{ title: string, pubs: Publication[] }> = ({ title, pubs }) => (
  <div className="mb-12">
    <h3 className="text-sm font-mono text-slate-500 uppercase tracking-widest mb-6 border-b border-white/10 pb-2">{title}</h3>
    <div className="space-y-4">
      {pubs.map((pub) => (
        <PublicationItem key={pub.id} pub={pub} />
      ))}
    </div>
  </div>
);

const PublicationItem: React.FC<{ pub: Publication }> = ({ pub }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      initial={false}
      className="border border-white/5 bg-white/[0.02] rounded-lg overflow-hidden hover:bg-white/[0.05] transition-colors"
    >
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 md:p-6 cursor-pointer flex justify-between items-start gap-4"
      >
        <div className="flex-1">
          <h4 className="text-lg font-medium text-slate-200 mb-2">{pub.title}</h4>
          <p className="text-sm text-slate-400 font-light">
            {pub.authors.map((author, i) => (
              <span key={i} className={clsx(author.includes("Chen") && "text-neon-cyan font-medium", "mr-1")}>
                {author}{i < pub.authors.length - 1 ? "," : ""}
              </span>
            ))}
          </p>
          <div className="flex items-center gap-4 mt-2">
            <span className="text-xs font-mono text-neon-purple bg-neon-purple/10 px-2 py-0.5 rounded">
              {pub.venue} {pub.year}
            </span>
          </div>
        </div>
        <ChevronDown 
          className={clsx("text-slate-500 transition-transform duration-300 mt-1", isOpen && "rotate-180")} 
          size={20} 
        />
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-6 pt-0 border-t border-white/5 mt-2">
              <div className="flex gap-3 pt-4">
                {pub.links.map((link) => (
                  <a 
                    key={link.label} 
                    href={link.url}
                    className="flex items-center gap-2 text-xs font-bold text-white bg-slate-800 px-3 py-1.5 rounded hover:bg-slate-700 transition-colors"
                  >
                    <FileText size={14} /> {link.label}
                  </a>
                ))}
                <button className="text-xs text-slate-400 hover:text-white transition-colors ml-auto">
                  Copy Citation
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Publications: React.FC = () => {
  const international = PUBLICATIONS.filter(p => p.type === 'International');
  const domestic = PUBLICATIONS.filter(p => p.type === 'Domestic');

  return (
    <section id="publications" className="py-24 px-6 md:px-20 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Publications</h2>
        <p className="text-slate-400">Selected research papers and conference proceedings.</p>
      </motion.div>

      <PublicationGroup title="International Conferences" pubs={international} />
      {domestic.length > 0 && <PublicationGroup title="Domestic & Workshops" pubs={domestic} />}
    </section>
  );
};

export default Publications;