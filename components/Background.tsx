import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Background: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 0.2, 0.4]);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-charcoal">
      {/* Mesh Gradients */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-neon-purple/20 rounded-full blur-[100px] mix-blend-screen"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '-30%']), opacity }}
        className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-neon-blue/10 rounded-full blur-[120px] mix-blend-screen"
        animate={{
          scale: [1, 1.1, 1],
          x: [0, -50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
    </div>
  );
};

export default Background;