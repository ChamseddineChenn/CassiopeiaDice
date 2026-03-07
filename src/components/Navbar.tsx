'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { categories } from '@/data/products';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products', hasDropdown: true },
  { name: 'Commissions', href: '/commissions' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
];

function isLinkActive(href: string, pathname: string) {
  if (href === '/') return pathname === '/';
  return pathname.startsWith(href);
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  return (
    <nav className="relative z-50 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo + Brand Name — centered at top */}
        <div className="hidden md:flex flex-col items-center">
          <Link href="/" className="flex flex-col items-center group">
            <div className="w-28 h-28">
              <Image
                src="/Cassiopeia Dice Logo.png"
                alt="Cassiopeia Dice"
                width={112}
                height={112}
                className="w-full h-full object-contain drop-shadow-[0_0_12px_rgba(168,85,199,0.4)]"
              />
            </div>
            <h1 className="font-display text-4xl sm:text-5xl mt-3 bg-gradient-to-b from-mystic-gold via-mystic-amber to-mystic-gold/70 bg-clip-text text-transparent">
              Cassiopeia Dice
            </h1>
          </Link>

          {/* Decorative divider */}
          <div className="flex items-center gap-3 my-4">
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-mystic-purple/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-mystic-gold/60" />
            <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-mystic-purple/40" />
          </div>

          {/* Navigation links row */}
          <div className="flex items-center gap-10">
            {navLinks.map((link) => {
              const active = isLinkActive(link.href, pathname);
              return link.hasDropdown ? (
                <div key={link.name} className="relative" ref={dropdownRef}>
                  <Link
                    href={link.href}
                    onMouseEnter={() => setDropdownOpen(true)}
                    className={`relative font-heading text-sm tracking-[0.2em] uppercase transition-colors duration-300 flex items-center gap-1.5 pb-2 cursor-pointer ${
                      active
                        ? 'text-mystic-gold'
                        : 'text-starlight hover:text-white'
                    }`}
                  >
                    {link.name}
                    {active && (
                      <motion.span
                        layoutId="activeNavDot"
                        className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-mystic-gold"
                        transition={{
                          type: 'spring',
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>

                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 12, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 12, scale: 0.96 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        onMouseLeave={() => setDropdownOpen(false)}
                        className="absolute top-full mt-4 left-1/2 -translate-x-1/2 w-[480px] rounded-xl border border-mystic-purple/20 bg-abyss/98 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.6),0_0_40px_rgba(139,63,160,0.08)]"
                      >
                        {/* Triangle pointer */}
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 bg-abyss border-l border-t border-mystic-purple/20 z-20" />

                        <div className="relative z-10 p-5">
                          <div className="grid grid-cols-2 gap-2">
                            {categories.map((cat) => (
                              <Link
                                key={cat.slug}
                                href={`/products/${cat.slug}`}
                                className="group/cat flex flex-col gap-1 p-3 rounded-lg hover:bg-mystic-purple/8 transition-all duration-300"
                                onClick={() => setDropdownOpen(false)}
                              >
                                <span className="font-heading text-sm tracking-[0.12em] uppercase text-starlight group-hover/cat:text-mystic-gold transition-colors duration-300">
                                  {cat.name}
                                </span>
                                <span className="font-body text-xs text-stardust leading-snug">
                                  {cat.description}
                                </span>
                              </Link>
                            ))}
                          </div>

                          <div className="mt-4 pt-3 border-t border-mystic-purple/10 text-center">
                            <Link
                              href="/products"
                              className="font-heading text-xs tracking-[0.25em] uppercase text-mystic-gold hover:text-mystic-gold/80 transition-colors cursor-pointer"
                              onClick={() => setDropdownOpen(false)}
                            >
                              Browse All Products
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative font-heading text-sm tracking-[0.2em] uppercase transition-colors duration-300 pb-2 ${
                    active
                      ? 'text-mystic-gold'
                      : 'text-starlight hover:text-white'
                  }`}
                >
                  {link.name}
                  {active && (
                    <motion.span
                      layoutId="activeNavDot"
                      className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-mystic-gold"
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Mobile header */}
        <div className="md:hidden flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/Cassiopeia Dice Logo.png"
              alt="Cassiopeia Dice"
              width={32}
              height={32}
              className="w-8 h-8 object-contain"
            />
            <span className="font-display text-lg bg-gradient-to-b from-mystic-gold to-mystic-amber bg-clip-text text-transparent">
              Cassiopeia Dice
            </span>
          </Link>

          <button
            className="flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              className="w-6 h-[1.5px] bg-stardust block"
              animate={
                mobileOpen ? { rotate: 45, y: 5.5 } : { rotate: 0, y: 0 }
              }
            />
            <motion.span
              className="w-6 h-[1.5px] bg-stardust block"
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            />
            <motion.span
              className="w-6 h-[1.5px] bg-stardust block"
              animate={
                mobileOpen ? { rotate: -45, y: -5.5 } : { rotate: 0, y: 0 }
              }
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-mystic-purple/15 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => {
                const active = isLinkActive(link.href, pathname);
                return (
                  <div key={link.name}>
                    <Link
                      href={link.href}
                      className={`flex items-center gap-2 py-3 font-heading text-sm tracking-[0.15em] uppercase ${
                        active ? 'text-mystic-gold' : 'text-stardust'
                      }`}
                    >
                      {active && (
                        <span className="w-1.5 h-1.5 rounded-full bg-mystic-gold" />
                      )}
                      {link.name}
                    </Link>
                    {link.hasDropdown && (
                      <div className="pl-4 space-y-1">
                        {categories.map((cat) => (
                          <Link
                            key={cat.slug}
                            href={`/products/${cat.slug}`}
                            className="block py-2 font-heading text-xs tracking-[0.12em] uppercase text-stardust/70 hover:text-starlight"
                          >
                            {cat.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
