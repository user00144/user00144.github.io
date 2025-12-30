import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PHOTOS } from '../constants';
import { Photo } from '../types';
import { X, MapPin } from 'lucide-react';
import clsx from 'clsx';

const Gallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  return (
    <section id="gallery" className="py-24 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2">Through the Lens</h2>
            <p className="text-slate-400 text-sm">Moments captured during research travels.</p>
          </div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {PHOTOS.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedPhoto(photo)}
              className="relative group break-inside-avoid cursor-zoom-in overflow-hidden rounded-xl"
            >
              <img 
                src={photo.url} 
                alt={photo.location}
                className={clsx(
                  "w-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110",
                  photo.aspectRatio
                )}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-serif text-lg">{photo.location}</p>
                  <p className="text-neon-cyan text-xs font-mono">{photo.year}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-md"
          >
            <button className="absolute top-6 right-6 text-white/50 hover:text-white">
              <X size={32} />
            </button>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="max-w-5xl max-h-screen relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedPhoto.url} 
                alt={selectedPhoto.location} 
                className="max-h-[85vh] w-auto rounded shadow-2xl"
              />
              <div className="absolute -bottom-10 left-0 text-white flex items-center gap-2">
                <MapPin size={16} className="text-neon-cyan" />
                <span className="font-serif text-lg">{selectedPhoto.location}</span>
                <span className="text-slate-500 mx-2">|</span>
                <span className="font-mono text-sm text-slate-400">{selectedPhoto.year}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;