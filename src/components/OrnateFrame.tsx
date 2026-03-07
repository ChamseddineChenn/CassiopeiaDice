'use client';

import { motion } from 'framer-motion';

interface OrnateFrameProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'arch' | 'gothic' | 'mirror';
}

export default function OrnateFrame({
  children,
  className = '',
  variant = 'arch',
}: OrnateFrameProps) {
  if (variant === 'gothic') {
    return (
      <div className={`relative ${className}`}>
        {/* ═══════════ GOTHIC ARCH — Mystical Doorway Frame ═══════════ */}
        <svg
          className="absolute inset-[-12px] w-[calc(100%+24px)] h-[calc(100%+24px)] pointer-events-none z-10"
          viewBox="0 0 340 480"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Primary frame gradient — violet to silver */}
            <linearGradient id="gf1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#d4b8e8" stopOpacity="0.95" />
              <stop offset="25%" stopColor="#a855c7" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#c9a0dc" stopOpacity="0.7" />
              <stop offset="75%" stopColor="#8b3fa0" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#6b2d8b" stopOpacity="0.5" />
            </linearGradient>
            {/* Inner frame gradient */}
            <linearGradient id="gf2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#c9a0dc" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#8b3fa0" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#6b2d8b" stopOpacity="0.2" />
            </linearGradient>
            {/* Radial glow for jewels */}
            <radialGradient id="jewel">
              <stop offset="0%" stopColor="#e0c0f0" stopOpacity="1" />
              <stop offset="50%" stopColor="#a855c7" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#6b2d8b" stopOpacity="0" />
            </radialGradient>
            {/* Ornament metallic gradient */}
            <linearGradient id="metalGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#e8d5f5" stopOpacity="0.9" />
              <stop offset="40%" stopColor="#a855c7" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#d4b8e8" stopOpacity="0.8" />
            </linearGradient>
            {/* Filter for glow effect */}
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3.5" />
            </filter>
          </defs>

          {/* ─── OUTER FRAME — thick architectural border ─── */}
          <path
            d="M28,478 L28,165 C28,80 70,32 170,16 C270,32 312,80 312,165 L312,478"
            stroke="url(#gf1)"
            strokeWidth="3.5"
          />
          {/* ─── INNER FRAME — thinner parallel line ─── */}
          <path
            d="M40,474 L40,170 C40,90 78,44 170,28 C262,44 300,90 300,170 L300,474"
            stroke="url(#gf2)"
            strokeWidth="1.5"
          />
          {/* ─── DECORATIVE MIDDLE TRACK — dashed mystical border ─── */}
          <path
            d="M34,476 L34,167 C34,85 74,38 170,22 C266,38 306,85 306,167 L306,476"
            stroke="rgba(168,85,199,0.25)"
            strokeWidth="0.7"
            strokeDasharray="8 4 2 4"
          />

          {/* ═══════ TOP CROWN — Pointed arch crest with spire ═══════ */}
          {/* Central spire */}
          <path
            d="M170,2 L166,14 L174,14 Z"
            fill="url(#metalGrad)"
            filter="url(#glow)"
          />
          {/* Spire orb */}
          <circle
            cx="170"
            cy="3"
            r="2.5"
            fill="url(#jewel)"
            filter="url(#glow)"
          />
          {/* Crown wings — left */}
          <path
            d="M166,14 C155,14 130,18 110,32 Q100,38 92,50"
            stroke="url(#metalGrad)"
            strokeWidth="1.2"
            fill="none"
          />
          {/* Crown wings — right */}
          <path
            d="M174,14 C185,14 210,18 230,32 Q240,38 248,50"
            stroke="url(#metalGrad)"
            strokeWidth="1.2"
            fill="none"
          />
          {/* Crown filigree curls — left */}
          <path
            d="M110,32 C106,28 98,30 100,36 C102,42 110,38 108,34"
            stroke="rgba(200,170,230,0.6)"
            strokeWidth="0.8"
            fill="none"
          />
          {/* Crown filigree curls — right */}
          <path
            d="M230,32 C234,28 242,30 240,36 C238,42 230,38 232,34"
            stroke="rgba(200,170,230,0.6)"
            strokeWidth="0.8"
            fill="none"
          />
          {/* Small crown gems */}
          <circle cx="130" cy="24" r="1.5" fill="rgba(200,170,230,0.7)" />
          <circle cx="210" cy="24" r="1.5" fill="rgba(200,170,230,0.7)" />

          {/* ═══════ ARCH KEYSTONE — Diamond shape at apex ═══════ */}
          <path
            d="M170,12 L176,20 L170,28 L164,20 Z"
            stroke="url(#metalGrad)"
            strokeWidth="1"
            fill="rgba(139,63,160,0.3)"
          />
          {/* Keystone inner diamond */}
          <path
            d="M170,15 L173,20 L170,25 L167,20 Z"
            fill="rgba(200,170,230,0.5)"
          />

          {/* ═══════ LEFT PILLAR — Ornate column details ═══════ */}
          {/* Pillar cap — left */}
          <rect
            x="22"
            y="158"
            width="24"
            height="3"
            rx="1"
            fill="url(#gf1)"
            opacity="0.7"
          />
          <rect
            x="24"
            y="163"
            width="20"
            height="2"
            rx="0.5"
            fill="url(#gf2)"
            opacity="0.5"
          />
          {/* Left capital scroll */}
          <path
            d="M26,158 C18,154 16,148 22,142 C28,136 32,140 30,146"
            stroke="url(#metalGrad)"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M46,158 C40,150 38,142 44,136 C48,132 50,138 46,142"
            stroke="rgba(200,170,230,0.4)"
            strokeWidth="0.7"
            fill="none"
          />
          {/* Pillar fluting lines — left */}
          <line
            x1="30"
            y1="170"
            x2="30"
            y2="470"
            stroke="rgba(168,85,199,0.12)"
            strokeWidth="0.5"
          />
          <line
            x1="36"
            y1="170"
            x2="36"
            y2="470"
            stroke="rgba(168,85,199,0.08)"
            strokeWidth="0.4"
          />
          {/* Left pillar rune marks */}
          <path
            d="M26,220 L34,220 M30,216 L30,224"
            stroke="rgba(168,85,199,0.3)"
            strokeWidth="0.7"
          />
          <path
            d="M26,300 L34,300 L30,308 Z"
            stroke="rgba(168,85,199,0.25)"
            strokeWidth="0.6"
            fill="none"
          />
          <path
            d="M28,380 C28,375 34,375 34,380 C34,385 28,385 28,380"
            stroke="rgba(168,85,199,0.2)"
            strokeWidth="0.6"
            fill="none"
          />
          {/* Left pillar base */}
          <rect
            x="22"
            y="468"
            width="24"
            height="3"
            rx="1"
            fill="url(#gf1)"
            opacity="0.5"
          />
          <path
            d="M20,474 L48,474 L46,478 L22,478 Z"
            fill="url(#gf1)"
            opacity="0.35"
          />

          {/* ═══════ RIGHT PILLAR — Mirror of left ═══════ */}
          {/* Pillar cap — right */}
          <rect
            x="294"
            y="158"
            width="24"
            height="3"
            rx="1"
            fill="url(#gf1)"
            opacity="0.7"
          />
          <rect
            x="296"
            y="163"
            width="20"
            height="2"
            rx="0.5"
            fill="url(#gf2)"
            opacity="0.5"
          />
          {/* Right capital scroll */}
          <path
            d="M314,158 C322,154 324,148 318,142 C312,136 308,140 310,146"
            stroke="url(#metalGrad)"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M294,158 C300,150 302,142 296,136 C292,132 290,138 294,142"
            stroke="rgba(200,170,230,0.4)"
            strokeWidth="0.7"
            fill="none"
          />
          {/* Pillar fluting lines — right */}
          <line
            x1="310"
            y1="170"
            x2="310"
            y2="470"
            stroke="rgba(168,85,199,0.12)"
            strokeWidth="0.5"
          />
          <line
            x1="304"
            y1="170"
            x2="304"
            y2="470"
            stroke="rgba(168,85,199,0.08)"
            strokeWidth="0.4"
          />
          {/* Right pillar rune marks */}
          <path
            d="M306,220 L314,220 M310,216 L310,224"
            stroke="rgba(168,85,199,0.3)"
            strokeWidth="0.7"
          />
          <path
            d="M306,300 L314,300 L310,308 Z"
            stroke="rgba(168,85,199,0.25)"
            strokeWidth="0.6"
            fill="none"
          />
          <path
            d="M308,380 C308,375 314,375 314,380 C314,385 308,385 308,380"
            stroke="rgba(168,85,199,0.2)"
            strokeWidth="0.6"
            fill="none"
          />
          {/* Right pillar base */}
          <rect
            x="294"
            y="468"
            width="24"
            height="3"
            rx="1"
            fill="url(#gf1)"
            opacity="0.5"
          />
          <path
            d="M292,474 L320,474 L318,478 L294,478 Z"
            fill="url(#gf1)"
            opacity="0.35"
          />

          {/* ═══════ SIDE JEWELS — Glowing gemstones flanking the arch ═══════ */}
          {/* Left jewel — upper */}
          <circle
            cx="24"
            cy="200"
            r="3.5"
            fill="url(#jewel)"
            filter="url(#glow)"
          />
          <circle
            cx="24"
            cy="200"
            r="5"
            fill="none"
            stroke="rgba(168,85,199,0.3)"
            strokeWidth="0.5"
          />
          {/* Left jewel — lower */}
          <circle
            cx="24"
            cy="340"
            r="3"
            fill="url(#jewel)"
            opacity="0.7"
            filter="url(#glow)"
          />
          {/* Right jewel — upper */}
          <circle
            cx="316"
            cy="200"
            r="3.5"
            fill="url(#jewel)"
            filter="url(#glow)"
          />
          <circle
            cx="316"
            cy="200"
            r="5"
            fill="none"
            stroke="rgba(168,85,199,0.3)"
            strokeWidth="0.5"
          />
          {/* Right jewel — lower */}
          <circle
            cx="316"
            cy="340"
            r="3"
            fill="url(#jewel)"
            opacity="0.7"
            filter="url(#glow)"
          />

          {/* ═══════ ARCH FILIGREE — Decorative vine tendrils along the arch ═══════ */}
          {/* Left arch vine */}
          <path
            d="M60,80 C55,72 48,78 54,84 C60,90 52,96 48,90"
            stroke="rgba(200,170,230,0.35)"
            strokeWidth="0.8"
            fill="none"
          />
          <path
            d="M80,55 C74,50 68,56 74,62 C80,68 72,72 68,66"
            stroke="rgba(200,170,230,0.3)"
            strokeWidth="0.7"
            fill="none"
          />
          {/* Right arch vine */}
          <path
            d="M280,80 C285,72 292,78 286,84 C280,90 288,96 292,90"
            stroke="rgba(200,170,230,0.35)"
            strokeWidth="0.8"
            fill="none"
          />
          <path
            d="M260,55 C266,50 272,56 266,62 C260,68 268,72 272,66"
            stroke="rgba(200,170,230,0.3)"
            strokeWidth="0.7"
            fill="none"
          />

          {/* ═══════ BOTTOM THRESHOLD BAR ═══════ */}
          <line
            x1="28"
            y1="478"
            x2="312"
            y2="478"
            stroke="url(#gf1)"
            strokeWidth="1.5"
          />
          <line
            x1="36"
            y1="475"
            x2="304"
            y2="475"
            stroke="url(#gf2)"
            strokeWidth="0.6"
          />
          {/* Bottom center ornament */}
          <path
            d="M155,478 L170,472 L185,478"
            stroke="url(#metalGrad)"
            strokeWidth="1"
            fill="none"
          />
          <circle
            cx="170"
            cy="472"
            r="2"
            fill="url(#jewel)"
            filter="url(#glow)"
          />

          {/* ═══════ MYSTIC RUNE CIRCLES along the arch curve ═══════ */}
          {/* These tiny circles + crosses create a "warded doorway" feel */}
          {[
            { x: 52, y: 100 },
            { x: 100, y: 42 },
            { x: 240, y: 42 },
            { x: 288, y: 100 },
          ].map((p, i) => (
            <g key={i} opacity="0.4">
              <circle
                cx={p.x}
                cy={p.y}
                r="4"
                stroke="rgba(168,85,199,0.5)"
                strokeWidth="0.5"
                fill="none"
              />
              <circle cx={p.x} cy={p.y} r="1" fill="rgba(200,170,230,0.6)" />
            </g>
          ))}
        </svg>

        {/* Ambient glow behind frame */}
        <motion.div
          className="absolute inset-[-16px] pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 50% 25%, rgba(139,63,160,0.15), transparent 70%)',
          }}
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Animated glow pulse on the frame jewels */}
        <motion.div
          className="absolute inset-[-12px] pointer-events-none z-10"
          style={{
            background:
              'radial-gradient(circle at 7% 45%, rgba(168,85,199,0.12) 0%, transparent 15%), radial-gradient(circle at 93% 45%, rgba(168,85,199,0.12) 0%, transparent 15%)',
          }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Content with gothic arch clip */}
        <div
          className="relative overflow-hidden"
          style={{
            clipPath:
              'polygon(0% 100%, 0% 38%, 2% 24%, 6% 15%, 14% 8%, 26% 4%, 50% 0%, 74% 4%, 86% 8%, 94% 15%, 98% 24%, 100% 38%, 100% 100%)',
          }}
        >
          {children}
        </div>
      </div>
    );
  }

  if (variant === 'mirror') {
    return (
      <div className={`relative ${className}`}>
        {/* ═══════════ MIRROR — Enchanted Scrying Glass ═══════════ */}
        <svg
          className="absolute inset-[-14px] w-[calc(100%+28px)] h-[calc(100%+28px)] pointer-events-none z-10"
          viewBox="0 0 240 310"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="mfGrad" x1="0.2" y1="0" x2="0.8" y2="1">
              <stop offset="0%" stopColor="#d4b8e8" stopOpacity="0.9" />
              <stop offset="30%" stopColor="#a855c7" stopOpacity="0.7" />
              <stop offset="60%" stopColor="#c9a0dc" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#8b3fa0" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="mfInner" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#c9a0dc" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#8b3fa0" stopOpacity="0.15" />
            </linearGradient>
            <radialGradient id="mJewel">
              <stop offset="0%" stopColor="#f0e0ff" stopOpacity="1" />
              <stop offset="50%" stopColor="#a855c7" stopOpacity="0.7" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
            <linearGradient id="mMetal" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#d4b8e8" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#a855c7" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#d4b8e8" stopOpacity="0.8" />
            </linearGradient>
            <filter id="mGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* ─── Outer oval frame ─── */}
          <ellipse
            cx="120"
            cy="155"
            rx="108"
            ry="142"
            stroke="url(#mfGrad)"
            strokeWidth="2.5"
          />
          {/* ─── Inner oval frame ─── */}
          <ellipse
            cx="120"
            cy="155"
            rx="100"
            ry="134"
            stroke="url(#mfInner)"
            strokeWidth="1"
          />
          {/* ─── Decorative dashed mid-track ─── */}
          <ellipse
            cx="120"
            cy="155"
            rx="104"
            ry="138"
            stroke="rgba(168,85,199,0.2)"
            strokeWidth="0.5"
            strokeDasharray="6 3 2 3"
          />

          {/* ═══════ TOP CREST — Crown ornament ═══════ */}
          {/* Central crown spire */}
          <path
            d="M120,2 L116,13 L124,13 Z"
            fill="url(#mMetal)"
            filter="url(#mGlow)"
          />
          <circle
            cx="120"
            cy="4"
            r="2"
            fill="url(#mJewel)"
            filter="url(#mGlow)"
          />
          {/* Crown wings */}
          <path
            d="M116,13 C108,13 90,16 78,24 C74,27 72,30 70,34"
            stroke="url(#mMetal)"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M124,13 C132,13 150,16 162,24 C166,27 168,30 170,34"
            stroke="url(#mMetal)"
            strokeWidth="1"
            fill="none"
          />
          {/* Crown curls */}
          <path
            d="M85,20 C82,17 76,19 78,23 C80,27 86,24 84,21"
            stroke="rgba(200,170,230,0.5)"
            strokeWidth="0.6"
            fill="none"
          />
          <path
            d="M155,20 C158,17 164,19 162,23 C160,27 154,24 156,21"
            stroke="rgba(200,170,230,0.5)"
            strokeWidth="0.6"
            fill="none"
          />
          {/* Crown gems */}
          <circle cx="98" cy="16" r="1.5" fill="rgba(200,170,230,0.6)" />
          <circle cx="142" cy="16" r="1.5" fill="rgba(200,170,230,0.6)" />

          {/* ═══════ BOTTOM PENDANT — Hanging ornament ═══════ */}
          <path
            d="M120,298 L115,308 L120,318 L125,308 Z"
            stroke="url(#mMetal)"
            strokeWidth="0.8"
            fill="rgba(139,63,160,0.25)"
          />
          <circle cx="120" cy="308" r="1.5" fill="rgba(200,170,230,0.5)" />
          {/* Pendant chain links */}
          <path
            d="M108,295 Q120,300 132,295"
            stroke="rgba(168,85,199,0.4)"
            strokeWidth="0.8"
            fill="none"
          />

          {/* ═══════ SIDE GEMS — Cardinal position jewels ═══════ */}
          {/* Left */}
          <circle
            cx="12"
            cy="155"
            r="3"
            fill="url(#mJewel)"
            filter="url(#mGlow)"
          />
          <circle
            cx="12"
            cy="155"
            r="5"
            stroke="rgba(168,85,199,0.25)"
            strokeWidth="0.5"
            fill="none"
          />
          {/* Right */}
          <circle
            cx="228"
            cy="155"
            r="3"
            fill="url(#mJewel)"
            filter="url(#mGlow)"
          />
          <circle
            cx="228"
            cy="155"
            r="5"
            stroke="rgba(168,85,199,0.25)"
            strokeWidth="0.5"
            fill="none"
          />

          {/* ═══════ COMPASS RUNE MARKS — Tiny mystical markers ═══════ */}
          {[
            { x: 40, y: 60 },
            { x: 200, y: 60 },
            { x: 25, y: 200 },
            { x: 215, y: 200 },
          ].map((p, i) => (
            <g key={i} opacity="0.35">
              <circle
                cx={p.x}
                cy={p.y}
                r="3"
                stroke="rgba(168,85,199,0.4)"
                strokeWidth="0.4"
                fill="none"
              />
              <line
                x1={p.x - 2}
                y1={p.y}
                x2={p.x + 2}
                y2={p.y}
                stroke="rgba(200,170,230,0.5)"
                strokeWidth="0.4"
              />
              <line
                x1={p.x}
                y1={p.y - 2}
                x2={p.x}
                y2={p.y + 2}
                stroke="rgba(200,170,230,0.5)"
                strokeWidth="0.4"
              />
            </g>
          ))}

          {/* ═══════ FILIGREE SCROLLWORK on sides ═══════ */}
          <path
            d="M28,100 C22,94 18,100 24,106 C30,112 22,116 18,110"
            stroke="rgba(200,170,230,0.25)"
            strokeWidth="0.6"
            fill="none"
          />
          <path
            d="M212,100 C218,94 222,100 216,106 C210,112 218,116 222,110"
            stroke="rgba(200,170,230,0.25)"
            strokeWidth="0.6"
            fill="none"
          />
          <path
            d="M28,210 C22,204 18,210 24,216 C30,222 22,226 18,220"
            stroke="rgba(200,170,230,0.2)"
            strokeWidth="0.6"
            fill="none"
          />
          <path
            d="M212,210 C218,204 222,210 216,216 C210,222 218,226 222,220"
            stroke="rgba(200,170,230,0.2)"
            strokeWidth="0.6"
            fill="none"
          />
        </svg>

        {/* Ambient scrying glow */}
        <motion.div
          className="absolute inset-[-8px] opacity-20 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse, rgba(139,63,160,0.35), transparent 65%)',
          }}
          animate={{ opacity: [0.12, 0.25, 0.12] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Side jewel glow pulse */}
        <motion.div
          className="absolute inset-[-14px] pointer-events-none z-10"
          style={{
            background:
              'radial-gradient(circle at 5% 50%, rgba(168,85,199,0.1) 0%, transparent 12%), radial-gradient(circle at 95% 50%, rgba(168,85,199,0.1) 0%, transparent 12%)',
          }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="relative overflow-hidden rounded-[55%/55%] m-5">
          {children}
        </div>
      </div>
    );
  }

  // ═══════════ DEFAULT "ARCH" — Classic Portal Archway ═══════════
  return (
    <div className={`relative ${className}`}>
      <svg
        className="absolute inset-[-10px] w-[calc(100%+20px)] h-[calc(100%+20px)] pointer-events-none z-10"
        viewBox="0 0 340 500"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="aGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#d4b8e8" stopOpacity="0.9" />
            <stop offset="30%" stopColor="#a855c7" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#6b2d8b" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="aGrad2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#c9a0dc" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#6b2d8b" stopOpacity="0.15" />
          </linearGradient>
          <radialGradient id="aJewel">
            <stop offset="0%" stopColor="#e0c0f0" />
            <stop offset="60%" stopColor="#a855c7" stopOpacity="0.6" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <linearGradient id="aMetal" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#e8d5f5" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#a855c7" stopOpacity="0.6" />
          </linearGradient>
          <filter id="aGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer arch */}
        <path
          d="M18,498 L18,170 C18,70 65,18 170,8 C275,18 322,70 322,170 L322,498"
          stroke="url(#aGrad)"
          strokeWidth="3"
        />
        {/* Inner arch */}
        <path
          d="M30,494 L30,175 C30,80 72,30 170,20 C268,30 310,80 310,175 L310,494"
          stroke="url(#aGrad2)"
          strokeWidth="1.2"
        />
        {/* Dashed trace */}
        <path
          d="M24,496 L24,172 C24,75 68,24 170,14 C272,24 316,75 316,172 L316,496"
          stroke="rgba(168,85,199,0.2)"
          strokeWidth="0.6"
          strokeDasharray="6 4 2 4"
        />

        {/* Keystone diamond */}
        <path
          d="M170,3 L178,14 L170,25 L162,14 Z"
          stroke="url(#aMetal)"
          strokeWidth="1"
          fill="rgba(139,63,160,0.2)"
        />
        <path
          d="M170,7 L174,14 L170,21 L166,14 Z"
          fill="rgba(200,170,230,0.4)"
        />
        <circle cx="170" cy="14" r="1.5" fill="rgba(240,220,255,0.8)" />

        {/* Left column details */}
        <rect
          x="14"
          y="165"
          width="20"
          height="3"
          rx="1"
          fill="url(#aGrad)"
          opacity="0.6"
        />
        <line
          x1="20"
          y1="175"
          x2="20"
          y2="490"
          stroke="rgba(168,85,199,0.1)"
          strokeWidth="0.5"
        />
        <circle
          cx="18"
          cy="250"
          r="2.5"
          fill="url(#aJewel)"
          filter="url(#aGlow)"
        />
        <circle cx="18" cy="380" r="2" fill="url(#aJewel)" opacity="0.6" />
        <rect
          x="14"
          y="488"
          width="20"
          height="3"
          rx="1"
          fill="url(#aGrad)"
          opacity="0.45"
        />

        {/* Right column details */}
        <rect
          x="306"
          y="165"
          width="20"
          height="3"
          rx="1"
          fill="url(#aGrad)"
          opacity="0.6"
        />
        <line
          x1="320"
          y1="175"
          x2="320"
          y2="490"
          stroke="rgba(168,85,199,0.1)"
          strokeWidth="0.5"
        />
        <circle
          cx="322"
          cy="250"
          r="2.5"
          fill="url(#aJewel)"
          filter="url(#aGlow)"
        />
        <circle cx="322" cy="380" r="2" fill="url(#aJewel)" opacity="0.6" />
        <rect
          x="306"
          y="488"
          width="20"
          height="3"
          rx="1"
          fill="url(#aGrad)"
          opacity="0.45"
        />

        {/* Bottom bar */}
        <line
          x1="18"
          y1="498"
          x2="322"
          y2="498"
          stroke="url(#aGrad)"
          strokeWidth="1.5"
        />
        <circle
          cx="170"
          cy="495"
          r="2"
          fill="url(#aJewel)"
          filter="url(#aGlow)"
        />
      </svg>

      <motion.div
        className="absolute inset-[-10px] rounded-t-[50%] opacity-15 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 20%, rgba(139,63,160,0.3), transparent 70%)',
        }}
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div
        className="relative overflow-hidden"
        style={{
          clipPath:
            'polygon(0% 100%, 0% 36%, 2% 22%, 7% 13%, 16% 6%, 30% 3%, 50% 0%, 70% 3%, 84% 6%, 93% 13%, 98% 22%, 100% 36%, 100% 100%)',
        }}
      >
        {children}
      </div>
    </div>
  );
}
