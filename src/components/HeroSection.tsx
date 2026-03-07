'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import OrnateFrame from './OrnateFrame';

const carouselItems = [
  { label: 'Mystic Potions', image: '/images/carousel-potion.png' },
  { label: 'Polyhedral Sets', image: '/images/carousel-dice.png' },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 15000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-12">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-abyss/80 pointer-events-none z-10" />

      <div className="relative z-20 max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr_1fr] gap-8 lg:gap-6 items-center">
          {/* LEFT — Large gothic ornate frame (artisan/owner) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="flex justify-center order-2 lg:order-1"
          >
            <OrnateFrame variant="gothic" className="w-full max-w-[560px]">
              <div className="aspect-[3/4] mx-10 mt-7 relative overflow-hidden">
                <Image
                  src="/images/owner.png"
                  alt="The Artisan"
                  fill
                  className="object-cover"
                  sizes="560px"
                  priority
                />
              </div>
            </OrnateFrame>
          </motion.div>

          {/* CENTER — Call to action & hero text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-center order-1 lg:order-2 flex flex-col items-center"
          >
            <motion.p
              className="font-heading text-base tracking-[0.3em] uppercase text-mystic-purple mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              The Artisan Dice Forge
            </motion.p>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-tight bg-gradient-to-b from-starlight via-moonbeam to-stardust bg-clip-text text-transparent">
              Roll Your
              <br />
              Destiny
            </h1>

            <motion.p
              className="mt-6 font-body text-lg text-stardust leading-relaxed max-w-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Handcrafted mystical dice infused with cosmic energy. Each piece
              is a unique artifact, forged for adventurers who believe every
              roll shapes fate.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Link
                href="/products"
                className="px-8 py-3.5 font-heading text-sm tracking-[0.2em] uppercase bg-gradient-to-r from-mystic-purple to-mystic-violet text-white rounded-lg hover:shadow-[0_0_30px_rgba(168,85,199,0.3)] transition-shadow duration-500"
              >
                Shop Collection
              </Link>
              <Link
                href="/commissions"
                className="px-8 py-3.5 font-heading text-sm tracking-[0.2em] uppercase border border-mystic-purple/30 text-mystic-purple rounded-lg hover:bg-mystic-purple/10 hover:border-mystic-purple/50 transition-all duration-500"
              >
                Custom Orders
              </Link>
            </motion.div>

            {/* Decorative element under CTAs */}
            <motion.div
              className="mt-10 flex items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-mystic-purple/30" />
              <motion.div
                className="w-1.5 h-1.5 rounded-full bg-mystic-gold/50"
                animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-mystic-purple/30" />
            </motion.div>
          </motion.div>

          {/* RIGHT — Smaller mirror frame with carousel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="flex justify-center order-3"
          >
            <OrnateFrame variant="mirror" className="w-full max-w-[280px]">
              <div className="aspect-[3/4] bg-gradient-to-br from-cosmic via-nebula to-abyss flex flex-col items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-mystic-purple/10 via-transparent to-mystic-blue/10" />

                {/* Carousel content */}
                <div className="relative w-full h-full flex flex-col items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={carouselItems[currentSlide].image}
                        alt={carouselItems[currentSlide].label}
                        fill
                        className="object-cover"
                        sizes="240px"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-abyss/80 to-transparent pt-8 pb-16 px-4">
                        <p className="font-heading text-xs tracking-[0.2em] uppercase text-starlight text-center">
                          {carouselItems[currentSlide].label}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Slide indicators */}
                  <div className="absolute bottom-10 z-10 flex gap-2">
                    {carouselItems.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentSlide(i)}
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                          i === currentSlide
                            ? 'bg-mystic-gold w-4'
                            : 'bg-stardust/30 hover:bg-stardust/50'
                        }`}
                        aria-label={`Go to slide ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </OrnateFrame>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
