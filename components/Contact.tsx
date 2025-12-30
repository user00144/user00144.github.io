import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8">Let's Collaborate</h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            Interested in discussing HCI, Mobile Computing, or Vision Language Models? 
            My inbox is always open.
          </p>
          
          <a 
            href="mailto:haun620@kyonggi.ac.kr" 
            className="inline-flex items-center gap-3 text-2xl md:text-3xl font-mono text-neon-cyan hover:text-white transition-colors border-b-2 border-neon-cyan/30 hover:border-neon-cyan pb-2 mb-16"
          >
            <Mail className="inline" /> haun620@kyonggi.ac.kr
          </a>

          <div className="flex justify-center gap-8">
            {[
              { icon: Github, label: 'GitHub', href: 'https://github.com/user00144' },
              { icon: Linkedin, label: 'LinkedIn', href: '#' },
              { icon: Twitter, label: 'Twitter', href: '#' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="group flex flex-col items-center gap-2"
              >
                <div className="p-4 rounded-full bg-white/5 border border-white/10 group-hover:bg-white/10 group-hover:scale-110 transition-all duration-300">
                  <social.icon size={24} className="text-slate-300 group-hover:text-white" />
                </div>
                <span className="text-xs text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  {social.label}
                </span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <footer className="text-center py-8 text-xs text-slate-600 font-mono">
        <p>© {new Date().getFullYear()} Seungeun Kang. Built with React & Gemini.</p>
      </footer>
    </section>
  );
};

export default Contact;