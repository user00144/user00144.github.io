
import React from 'react';
import { motion } from 'framer-motion';
import { SectionId } from '../types';
import { User, FolderGit2, BookOpen, FileText } from 'lucide-react';
import clsx from 'clsx';

interface NavigationProps {
  activeSection: SectionId;
  onNavigate: (id: SectionId) => void;
}

const navItems = [
  { id: SectionId.ABOUT, icon: User, label: 'About' },
  { id: SectionId.PROJECTS, icon: FolderGit2, label: 'Projects' },
  { id: SectionId.PUBLICATIONS, icon: BookOpen, label: 'Papers' },
  { id: SectionId.RESUME, icon: FileText, label: 'Resume' },
];

const Navigation: React.FC<NavigationProps> = ({ activeSection, onNavigate }) => {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 w-full md:w-auto overflow-x-auto md:overflow-visible no-scrollbar">
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: 'spring' }}
        className="flex items-center gap-1 p-2 rounded-2xl bg-charcoal/80 backdrop-blur-xl border border-white/10 shadow-2xl min-w-fit mx-auto"
      >
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={clsx(
                "relative flex flex-col items-center justify-center w-16 md:w-20 h-14 rounded-xl transition-all duration-300 group",
                isActive ? "bg-white/10 text-neon-cyan" : "text-slate-400 hover:text-white hover:bg-white/5"
              )}
            >
              <item.icon size={20} strokeWidth={isActive ? 2.5 : 2} className="mb-1" />
              
              <span className={clsx(
                "text-[10px] font-medium transition-colors",
                isActive ? "text-neon-cyan" : "text-slate-500 group-hover:text-slate-300"
              )}>
                {item.label}
              </span>
              
              {/* Active Indicator */}
              {isActive && (
                <motion.div 
                  layoutId="nav-pill"
                  className="absolute inset-0 border border-neon-cyan/30 rounded-xl"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Navigation;
