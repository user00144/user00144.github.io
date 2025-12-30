
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Background from './components/Background';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Resume from './components/Resume';
import { SectionId } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionId>(SectionId.ABOUT);

  const handleNavigate = (id: SectionId) => {
    setActiveSection(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderSection = () => {
    switch (activeSection) {
      case SectionId.ABOUT: return <Hero />;
      case SectionId.PROJECTS: return <Projects />;
      case SectionId.PUBLICATIONS: return <Publications />;
      case SectionId.RESUME: return <Resume />;
      default: return <Hero />;
    }
  };

  return (
    <div className="relative min-h-screen text-slate-200 selection:bg-neon-cyan/30 selection:text-white">
      <Background />
      
      <main className="min-h-screen w-full pb-32 md:pb-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full"
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />
    </div>
  );
};

export default App;
