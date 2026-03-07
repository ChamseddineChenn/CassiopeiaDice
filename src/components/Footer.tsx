'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const footerLinks = {
  shop: [
    { name: 'All Products', href: '/products' },
    { name: 'Dice', href: '/products/dice' },
    { name: 'Dice Sets', href: '/products/dice-sets' },
    { name: 'Molds & Tools', href: '/products/molds-tools' },
    { name: 'Stickers', href: '/products/stickers' },
    { name: 'Potions', href: '/products/potions' },
  ],
  info: [
    { name: 'FAQ', href: '/faq' },
    { name: 'Commissions', href: '/commissions' },
    { name: 'Contact', href: '/contact' },
    { name: 'Shipping & Returns', href: '/faq#shipping' },
    { name: 'Care Guide', href: '/faq#care' },
  ],
  social: [
    { name: 'Instagram', href: 'https://www.instagram.com/cassiopeiadice/' },
    { name: 'TikTok', href: 'https://www.tiktok.com/@cassiopeiadice' },
    { name: 'Discord', href: '#' },
    { name: 'Email', href: 'mailto:cassiopeiadice@gmail.com' },
  ],
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Footer() {
  return (
    <footer className="relative mt-20">
      {/* Top divider */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-mystic-purple/40 to-transparent" />

      {/* Subtle transition space */}
      <div className="h-8" />

      <div className="bg-abyss/50">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand Column */}
            <motion.div variants={itemVariants} className="md:col-span-1">
              <div className="flex mb-3 ml-16">
                <div className="w-20 h-20">
                  <Image
                    src="/Cassiopeia Dice Logo.png"
                    alt="Cassiopeia Dice"
                    width={80}
                    height={80}
                    className="w-full h-full object-contain drop-shadow-[0_0_10px_rgba(168,85,199,0.3)]"
                  />
                </div>
              </div>
              <h3 className="font-display text-2xl bg-gradient-to-b from-mystic-gold to-mystic-amber bg-clip-text text-transparent text-left mb-4">
                Cassiopeia Dice
              </h3>
              <p className="font-body text-stardust text-base leading-relaxed mb-6">
                Handcrafted mystical dice forged with cosmic energy and artisan
                care. Every roll tells a story written in the stars.
              </p>
              <div className="flex gap-3">
                {footerLinks.social.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={
                      link.href.startsWith('http')
                        ? 'noopener noreferrer'
                        : undefined
                    }
                    className="w-9 h-9 rounded-full border border-mystic-purple/30 flex items-center justify-center text-stardust hover:text-mystic-cyan hover:border-mystic-cyan/50 transition-all duration-300 text-xs font-heading"
                    title={link.name}
                  >
                    {link.name[0]}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Shop Column */}
            <motion.div variants={itemVariants}>
              <h4 className="font-heading text-sm tracking-[0.3em] uppercase text-mystic-purple mb-6">
                Shop
              </h4>
              <ul className="space-y-3">
                {footerLinks.shop.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="font-body text-base text-stardust hover:text-mystic-cyan transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-[1px] bg-mystic-cyan transition-all duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Info Column */}
            <motion.div variants={itemVariants}>
              <h4 className="font-heading text-sm tracking-[0.3em] uppercase text-mystic-purple mb-6">
                Information
              </h4>
              <ul className="space-y-3">
                {footerLinks.info.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="font-body text-base text-stardust hover:text-mystic-cyan transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-[1px] bg-mystic-cyan transition-all duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter Column */}
            <motion.div variants={itemVariants}>
              <h4 className="font-heading text-sm tracking-[0.3em] uppercase text-mystic-purple mb-6">
                Arcane Updates
              </h4>
              <p className="font-body text-base text-stardust mb-4">
                Subscribe to receive mystical updates and exclusive offers.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-2.5 bg-nebula/50 border border-mystic-purple/20 rounded-lg text-sm text-starlight placeholder:text-stardust/50 focus:outline-none focus:border-mystic-purple/50 font-body transition-colors"
                />
                <button className="px-4 py-2.5 bg-mystic-purple/20 border border-mystic-purple/30 rounded-lg text-sm text-mystic-purple hover:bg-mystic-purple/30 hover:text-mystic-violet transition-all duration-300 font-heading tracking-wider">
                  Join
                </button>
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            variants={itemVariants}
            className="mt-16 pt-8 border-t border-mystic-purple/10 flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <p className="font-body text-sm text-stardust">
              © 2024 Cassiopeia Dice. All rights reserved. Forged in starlight.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/faq"
                className="font-body text-sm text-stardust hover:text-mystic-cyan transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/faq"
                className="font-body text-sm text-stardust hover:text-mystic-cyan transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
