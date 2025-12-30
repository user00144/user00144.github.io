
import React, { useRef, useState } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { HERO_STATEMENT, ABOUT_TEXT, PROFILE_IMAGE, NEWS_ITEMS } from '../constants';
import { Mail, Github, Linkedin, Twitter, Radio, ArrowUpRight } from 'lucide-react';

const Hero: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { left, top } = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  const background = useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(34, 211, 238, 0.15), transparent 80%)`;

  const socialLinks = [
    { icon: Mail, label: 'Email', href: 'mailto:haun620@kyonggi.ac.kr' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/user00144' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
  ];

  // Text highlighting logic
  const keywords = [
    "Undergraduate Researcher",
    "Purdue University",
    "Seoul National University",
    "ETRI",
    "LOTTE INNOVATE",
    "HCI",
    "Sensor Fusion",
    "Mobile Computing"
  ];

  const escapeRegExp = (string: string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  };

  const highlightContent = (text: string) => {
    const pattern = new RegExp(`(${keywords.map(escapeRegExp).join('|')})`, 'g');
    return text.split(pattern).map((part, index) => 
      keywords.includes(part) ? (
        <span key={index} className="text-neon-cyan font-semibold border-b border-neon-cyan/20">{part}</span>
      ) : (
        part
      )
    );
  };

  return (
    <section 
      id="about" 
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-20 py-20 overflow-hidden max-w-7xl mx-auto"
    >
      {/* Interactive Spotlight */}
      <motion.div 
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300"
        style={{ background, opacity: isHovering ? 1 : 0 }}
      />

      <div className="z-10 w-full grid md:grid-cols-[1.2fr_1fr] gap-12 items-center mb-24">
        {/* Left Column: Text */}
        <div className="order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-neon-cyan font-mono text-sm tracking-widest mb-4">SEUNGEUN KANG // AI RESEARCHER</h2>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight mb-8 mix-blend-overlay"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {HERO_STATEMENT.split(" ").map((word, i) => (
              <span key={i} className="inline-block mr-[0.2em] hover:text-neon-cyan transition-colors duration-300 cursor-default">
                {word}
              </span>
            ))}
          </motion.h1>

          <motion.p 
            className="text-lg text-slate-400 max-w-2xl leading-relaxed mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {ABOUT_TEXT.split('\n').map((paragraph, idx) => (
              <React.Fragment key={idx}>
                {highlightContent(paragraph)}
                <br /><br />
              </React.Fragment>
            ))}
          </motion.p>

          {/* Integrated Contact / Social Links */}
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {socialLinks.map((social) => (
              <a 
                key={social.label}
                href={social.href}
                className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-neon-cyan/30 transition-all duration-300"
              >
                <social.icon size={18} className="text-slate-400 group-hover:text-neon-cyan transition-colors" />
                <span className="text-sm font-medium text-slate-400 group-hover:text-white transition-colors">{social.label}</span>
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right Column: Image */}
        <motion.div 
          className="order-1 md:order-2 flex justify-center md:justify-end relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            {/* Glowing Backdrop */}
            <div className="absolute inset-0 bg-gradient-to-tr from-neon-purple to-neon-blue rounded-full blur-[40px] opacity-30 animate-pulse" />
            
            {/* Image Container */}
            <motion.div 
              className="relative w-full h-full rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
              animate={{ y: [0, -10, 0] }}
              // @ts-ignore
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            >
              <div className="absolute inset-0 bg-neon-blue/10 mix-blend-overlay z-10" />
              <img 
                src={PROFILE_IMAGE} 
                alt="Seungeun Kang" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Decorative Elements */}
            <motion.div 
              className="absolute -top-4 -right-4 w-12 h-12 border-t-2 border-r-2 border-neon-cyan rounded-tr-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
             <motion.div 
              className="absolute -bottom-4 -left-4 w-12 h-12 border-b-2 border-l-2 border-neon-purple rounded-bl-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            />
          </div>
        </motion.div>
      </div>

      {/* Integrated News Section - Modified to List View */}
      <div className="border-t border-white/10 pt-16">
        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-8"
        >
           <h3 className="text-xl font-mono text-neon-purple uppercase tracking-widest">Recent News</h3>
           <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20">
             <Radio size={12} className="text-red-500 animate-pulse" />
             <span className="text-[10px] font-medium text-red-400 uppercase tracking-wider">Live</span>
           </div>
        </motion.div>

        <div className="flex flex-col gap-4">
          {NEWS_ITEMS.slice(0, 3).map((item, index) => (
             <motion.div 
               key={item.id}
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.1 }}
               className="group relative bg-white/5 border border-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors flex flex-col md:flex-row gap-4 items-start md:items-center"
             >
               <div className="min-w-[100px] flex-shrink-0">
                 <span className="font-mono text-sm text-neon-blue block mb-1">{item.date}</span>
                 <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold border border-white/10 bg-white/5 text-slate-400 uppercase">
                    {item.category}
                 </span>
               </div>
               <div className="flex-1">
                 <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-lg font-medium text-white group-hover:text-neon-cyan transition-colors">{item.title}</h4>
                    <ArrowUpRight size={16} className="text-slate-500 group-hover:text-neon-cyan group-hover:rotate-45 transition-all opacity-0 group-hover:opacity-100" />
                 </div>
                 <p className="text-sm text-slate-400">{item.description}</p>
               </div>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
