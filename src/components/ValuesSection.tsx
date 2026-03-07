'use client';

import { motion } from 'framer-motion';

const values = [
  {
    title: 'Ethical',
    description:
      'Responsibly sourced materials and sustainable crafting practices.',
    // Waning Crescent — mostly dark, slim crescent of light on the right side
    moon: (
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="wcCorona" cx="50%" cy="50%" r="50%">
            <stop offset="75%" stopColor="transparent" />
            <stop offset="90%" stopColor="rgba(168,85,199,0.08)" />
            <stop offset="100%" stopColor="rgba(168,85,199,0.18)" />
          </radialGradient>
          <radialGradient id="wcDark" cx="40%" cy="35%">
            <stop offset="0%" stopColor="rgba(25,22,38,1)" />
            <stop offset="100%" stopColor="rgba(8,8,15,1)" />
          </radialGradient>
          <linearGradient id="wcLit" x1="0.7" y1="0.2" x2="1" y2="0.8">
            <stop offset="0%" stopColor="rgba(200,192,220,0.9)" />
            <stop offset="50%" stopColor="rgba(230,225,240,1)" />
            <stop offset="100%" stopColor="rgba(210,200,225,0.85)" />
          </linearGradient>
        </defs>
        {/* Corona glow */}
        <circle cx="60" cy="60" r="56" fill="url(#wcCorona)" />
        {/* Outer ring */}
        <circle
          cx="60"
          cy="60"
          r="48"
          stroke="rgba(168,85,199,0.5)"
          strokeWidth="1.5"
          fill="none"
        />
        {/* Dark moon body */}
        <circle cx="60" cy="60" r="46" fill="url(#wcDark)" />
        {/* Lit crescent on right side */}
        <path
          d="M60,14 A46,46 0 0,1 60,106 A34,46 0 0,0 60,14 Z"
          fill="url(#wcLit)"
        />
        {/* Crescent surface details */}
        <circle
          cx="100"
          cy="55"
          r="3"
          fill="rgba(168,85,199,0.06)"
          stroke="rgba(168,85,199,0.08)"
          strokeWidth="0.5"
        />
        <circle cx="98" cy="68" r="2.5" fill="rgba(168,85,199,0.05)" />
        <circle cx="101" cy="44" r="2" fill="rgba(168,85,199,0.05)" />
        {/* Dark side faint crater hints */}
        <circle cx="45" cy="50" r="8" fill="rgba(168,85,199,0.03)" />
        <circle cx="55" cy="72" r="5" fill="rgba(168,85,199,0.02)" />
        <circle cx="38" cy="65" r="4" fill="rgba(168,85,199,0.02)" />
        <circle cx="68" cy="44" r="6" fill="rgba(168,85,199,0.02)" />
        {/* Inner ring */}
        <circle
          cx="60"
          cy="60"
          r="46"
          stroke="rgba(168,85,199,0.12)"
          strokeWidth="0.5"
          fill="none"
        />
      </svg>
    ),
  },
  {
    title: 'USA Based',
    description: 'Handcrafted with care from our studio in the United States.',
    // First Quarter — right half illuminated with detailed terminator and craters
    moon: (
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="halfMoonLit" x1="0.6" y1="0.2" x2="1" y2="0.8">
            <stop offset="0%" stopColor="rgba(200,190,220,0.95)" />
            <stop offset="40%" stopColor="rgba(230,225,240,1)" />
            <stop offset="100%" stopColor="rgba(210,200,225,0.9)" />
          </linearGradient>
          <radialGradient id="halfMoonDark" cx="30%" cy="40%">
            <stop offset="0%" stopColor="rgba(20,18,30,1)" />
            <stop offset="100%" stopColor="rgba(8,8,15,1)" />
          </radialGradient>
          <linearGradient id="terminator" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(8,8,15,0)" />
            <stop offset="40%" stopColor="rgba(80,60,100,0.3)" />
            <stop offset="60%" stopColor="rgba(160,140,180,0.5)" />
            <stop offset="100%" stopColor="rgba(200,190,220,0)" />
          </linearGradient>
        </defs>
        {/* Outer ring */}
        <circle
          cx="60"
          cy="60"
          r="48"
          stroke="rgba(168,85,199,0.5)"
          strokeWidth="1.5"
          fill="none"
        />
        {/* Dark half (left) */}
        <clipPath id="leftHalf">
          <rect x="0" y="0" width="60" height="120" />
        </clipPath>
        <circle
          cx="60"
          cy="60"
          r="46"
          fill="url(#halfMoonDark)"
          clipPath="url(#leftHalf)"
        />
        {/* Lit half (right) */}
        <clipPath id="rightHalf">
          <rect x="60" y="0" width="60" height="120" />
        </clipPath>
        <circle
          cx="60"
          cy="60"
          r="46"
          fill="url(#halfMoonLit)"
          clipPath="url(#rightHalf)"
        />
        {/* Terminator line — the shadow edge */}
        <line
          x1="60"
          y1="14"
          x2="60"
          y2="106"
          stroke="rgba(100,80,130,0.6)"
          strokeWidth="2"
        />
        {/* Terminator glow */}
        <line
          x1="60"
          y1="14"
          x2="60"
          y2="106"
          stroke="rgba(168,85,199,0.15)"
          strokeWidth="6"
        />
        {/* Craters on lit side */}
        <circle
          cx="78"
          cy="48"
          r="7"
          fill="rgba(168,85,199,0.06)"
          stroke="rgba(168,85,199,0.08)"
          strokeWidth="0.5"
        />
        <circle
          cx="88"
          cy="65"
          r="9"
          fill="rgba(168,85,199,0.05)"
          stroke="rgba(168,85,199,0.07)"
          strokeWidth="0.5"
        />
        <circle
          cx="72"
          cy="78"
          r="5"
          fill="rgba(168,85,199,0.06)"
          stroke="rgba(168,85,199,0.08)"
          strokeWidth="0.5"
        />
        <circle cx="82" cy="38" r="4" fill="rgba(168,85,199,0.05)" />
        <circle cx="68" cy="55" r="3" fill="rgba(168,85,199,0.04)" />
        {/* Crater shadow details on lit side */}
        <path
          d="M73,45 Q78,42 83,47"
          stroke="rgba(168,85,199,0.06)"
          strokeWidth="0.5"
          fill="none"
        />
        <path
          d="M82,60 Q90,62 92,70"
          stroke="rgba(168,85,199,0.05)"
          strokeWidth="0.5"
          fill="none"
        />
        {/* Dark side faint craters */}
        <circle cx="42" cy="52" r="6" fill="rgba(168,85,199,0.02)" />
        <circle cx="35" cy="70" r="4" fill="rgba(168,85,199,0.02)" />
        {/* Inner ring */}
        <circle
          cx="60"
          cy="60"
          r="46"
          stroke="rgba(168,85,199,0.1)"
          strokeWidth="0.5"
          fill="none"
        />
      </svg>
    ),
  },
  {
    title: 'World-Wide Shipping',
    description:
      'Delivering mystical artifacts to adventurers across the globe.',
    // Waxing Crescent — mostly dark, crescent of light on the left side
    moon: (
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="xwcCorona" cx="50%" cy="50%" r="50%">
            <stop offset="75%" stopColor="transparent" />
            <stop offset="90%" stopColor="rgba(168,85,199,0.08)" />
            <stop offset="100%" stopColor="rgba(168,85,199,0.18)" />
          </radialGradient>
          <radialGradient id="xwcDark" cx="60%" cy="35%">
            <stop offset="0%" stopColor="rgba(25,22,38,1)" />
            <stop offset="100%" stopColor="rgba(8,8,15,1)" />
          </radialGradient>
          <linearGradient id="xwcLit" x1="0" y1="0.2" x2="0.3" y2="0.8">
            <stop offset="0%" stopColor="rgba(210,200,225,0.85)" />
            <stop offset="50%" stopColor="rgba(230,225,240,1)" />
            <stop offset="100%" stopColor="rgba(200,192,220,0.9)" />
          </linearGradient>
        </defs>
        {/* Corona glow */}
        <circle cx="60" cy="60" r="56" fill="url(#xwcCorona)" />
        {/* Outer ring */}
        <circle
          cx="60"
          cy="60"
          r="48"
          stroke="rgba(168,85,199,0.5)"
          strokeWidth="1.5"
          fill="none"
        />
        {/* Dark moon body */}
        <circle cx="60" cy="60" r="46" fill="url(#xwcDark)" />
        {/* Lit crescent on left side */}
        <path
          d="M60,14 A46,46 0 0,0 60,106 A34,46 0 0,1 60,14 Z"
          fill="url(#xwcLit)"
        />
        {/* Crescent surface details */}
        <circle
          cx="20"
          cy="55"
          r="3"
          fill="rgba(168,85,199,0.06)"
          stroke="rgba(168,85,199,0.08)"
          strokeWidth="0.5"
        />
        <circle cx="22" cy="68" r="2.5" fill="rgba(168,85,199,0.05)" />
        <circle cx="19" cy="44" r="2" fill="rgba(168,85,199,0.05)" />
        {/* Dark side faint crater hints */}
        <circle cx="75" cy="50" r="8" fill="rgba(168,85,199,0.03)" />
        <circle cx="65" cy="72" r="5" fill="rgba(168,85,199,0.02)" />
        <circle cx="82" cy="65" r="4" fill="rgba(168,85,199,0.02)" />
        <circle cx="52" cy="44" r="6" fill="rgba(168,85,199,0.02)" />
        {/* Inner ring */}
        <circle
          cx="60"
          cy="60"
          r="46"
          stroke="rgba(168,85,199,0.12)"
          strokeWidth="0.5"
          fill="none"
        />
      </svg>
    ),
  },
];

export default function ValuesSection() {
  return (
    <section className="relative py-20">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-mystic-purple/[0.02] to-transparent pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4">
        {/* Top line divider */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-mystic-purple/30" />
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-mystic-purple/50"
            animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-mystic-purple/30" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              {/* Moon phase icon */}
              <motion.div
                className="mb-5"
                animate={{ y: [0, -4, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: 'easeInOut',
                }}
              >
                <div className="relative">
                  {value.moon}
                  {/* Ambient glow behind moon */}
                  <div
                    className="absolute inset-0 blur-xl opacity-30"
                    style={{
                      background:
                        'radial-gradient(circle, rgba(168,85,199,0.4), transparent 70%)',
                    }}
                  />
                </div>
              </motion.div>

              {/* Title */}
              <h3 className="font-heading text-base tracking-[0.25em] uppercase text-starlight mb-2">
                {value.title}
              </h3>

              {/* Description */}
              <p className="font-body text-base text-stardust leading-relaxed max-w-[220px]">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom line divider */}
        <div className="flex items-center justify-center gap-4 mt-16">
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-mystic-purple/30" />
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-mystic-purple/50"
            animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
          />
          <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-mystic-purple/30" />
        </div>
      </div>
    </section>
  );
}
