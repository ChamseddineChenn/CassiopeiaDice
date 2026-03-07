'use client';

import { motion } from 'framer-motion';

export default function MysticalTitle() {
  const title = 'Cassiopeia Dice';
  const letters = title.split('');

  return (
    <div className="flex flex-col items-center justify-center select-none">
      {/* Constellation lines above */}
      <motion.div
        className="w-48 h-[1px] mb-4 bg-gradient-to-r from-transparent via-mystic-purple/60 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      />

      {/* Main Title */}
      <h1 className="relative font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[0.15em] text-center">
        {letters.map((letter, i) => (
          <motion.span
            key={i}
            className="inline-block bg-gradient-to-b from-mystic-gold via-mystic-amber to-mystic-gold/60 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30, rotateX: 90 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.1 + i * 0.06,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            whileHover={{
              scale: 1.15,
              textShadow: '0 0 20px rgba(243, 156, 18, 0.8)',
              transition: { duration: 0.2 },
            }}
            style={{ textShadow: '0 0 40px rgba(243, 156, 18, 0.3)' }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}

        {/* Shimmer overlay */}
        <motion.span
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent bg-[length:200%_100%] bg-clip-text"
          animate={{ backgroundPosition: ['200% center', '-200% center'] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatDelay: 3,
            ease: 'linear',
          }}
          style={{ WebkitBackgroundClip: 'text', mixBlendMode: 'overlay' }}
        />
      </h1>

      {/* Subtitle */}
      <motion.p
        className="mt-3 font-heading text-xs sm:text-sm tracking-[0.5em] uppercase text-mystic-purple/80"
        initial={{ opacity: 0, letterSpacing: '0.8em' }}
        animate={{ opacity: 1, letterSpacing: '0.5em' }}
        transition={{ duration: 1.2, delay: 1.2 }}
      >
        Forge Your Destiny
      </motion.p>

      {/* Constellation lines below */}
      <motion.div
        className="w-48 h-[1px] mt-4 bg-gradient-to-r from-transparent via-mystic-purple/60 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }}
      />

      {/* Decorative stars around title */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-mystic-gold"
          style={{
            left: `${20 + i * 15}%`,
            top: `${10 + (i % 3) * 30}%`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 2 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.4,
          }}
        />
      ))}
    </div>
  );
}
