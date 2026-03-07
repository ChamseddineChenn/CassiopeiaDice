'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function MysticalSection({
  title,
  subtitle,
  children,
  className = '',
  id,
}: SectionProps) {
  return (
    <section id={id} className={`relative py-20 ${className}`}>
      {title && (
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-mystic-purple/50" />
            <motion.div
              className="w-2 h-2 rounded-full bg-mystic-purple/60"
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-mystic-purple/50" />
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-[0.1em] bg-gradient-to-b from-starlight via-moonbeam to-stardust bg-clip-text text-transparent">
            {title}
          </h2>

          {subtitle && (
            <p className="mt-4 max-w-2xl mx-auto font-body text-xl text-stardust leading-relaxed">
              {subtitle}
            </p>
          )}

          {/* Bottom decorative line */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="w-20 h-[1px] bg-gradient-to-r from-transparent to-mystic-purple/30" />
            <div className="w-1 h-1 rounded-full bg-mystic-gold/40" />
            <div className="w-20 h-[1px] bg-gradient-to-l from-transparent to-mystic-purple/30" />
          </div>
        </motion.div>
      )}
      {children}
    </section>
  );
}
