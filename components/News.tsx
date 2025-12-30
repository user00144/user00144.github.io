import React from 'react';
import { motion } from 'framer-motion';
import { NEWS_ITEMS } from '../constants';
import { Calendar, Radio } from 'lucide-react';

const News: React.FC = () => {
  return (
    <section id="news" className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">Recent News</h2>
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20">
          <Radio size={14} className="text-red-500 animate-pulse" />
          <span className="text-xs font-medium text-red-400 uppercase tracking-wider">Live Updates</span>
        </div>
      </div>

      <div className="relative border-l border-white/10 ml-4 md:ml-0 space-y-12">
        {NEWS_ITEMS.map((item, index) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-8 md:pl-12 group"
          >
            {/* Dot Indicator */}
            <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-slate-700 ring-4 ring-charcoal group-hover:bg-neon-purple transition-colors duration-300" />
            
            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-2">
              <span className="font-mono text-xs text-neon-purple uppercase tracking-widest">{item.date}</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold border border-white/10 bg-white/5 text-slate-300 uppercase w-fit">
                {item.category}
              </span>
            </div>

            <h3 className="text-xl font-medium text-slate-200 group-hover:text-white transition-colors">
              {item.title}
            </h3>
            
            <p className="mt-2 text-slate-400 font-light max-w-2xl">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default News;