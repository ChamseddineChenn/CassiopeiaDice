'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import MysticalSection from '@/components/MysticalSection';
import ProductCard from '@/components/ProductCard';
import HeroSection from '@/components/HeroSection';
import ValuesSection from '@/components/ValuesSection';
import { getFeaturedProducts, categories } from '@/data/products';

export default function Home() {
  const featured = getFeaturedProducts();

  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Categories */}
      <MysticalSection
        title="Arcane Collections"
        subtitle="Browse our mystical inventory, each category holding treasures beyond imagination."
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link href={`/products/${cat.slug}`}>
                  <motion.div
                    className="group relative p-8 rounded-xl border border-mystic-purple/15 bg-nebula/20 overflow-hidden cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Hover glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-mystic-purple/0 to-mystic-purple/0 group-hover:from-mystic-purple/10 group-hover:to-transparent transition-all duration-500" />

                    {/* Corner decoration */}
                    <div className="absolute top-0 right-0 w-16 h-16">
                      <div className="absolute top-3 right-3 w-8 h-[1px] bg-mystic-purple/30 group-hover:bg-mystic-gold/40 transition-colors" />
                      <div className="absolute top-3 right-3 w-[1px] h-8 bg-mystic-purple/30 group-hover:bg-mystic-gold/40 transition-colors" />
                    </div>

                    <div className="relative z-10">
                      <h3 className="font-heading text-lg tracking-[0.15em] text-starlight group-hover:text-mystic-cyan transition-colors duration-300">
                        {cat.name}
                      </h3>
                      <p className="mt-2 font-body text-base text-stardust/90 leading-relaxed">
                        {cat.description}
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-xs font-heading tracking-[0.2em] uppercase text-mystic-purple/70 group-hover:text-mystic-gold transition-colors duration-300">
                        <span>Discover</span>
                        <motion.span
                          className="inline-block"
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </MysticalSection>

      {/* Featured Products */}
      <MysticalSection
        title="Featured Artifacts"
        subtitle="Our most sought-after creations, chosen by adventurers and collectors alike."
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.slice(0, 8).map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link
              href="/products"
              className="px-10 py-3.5 font-heading text-sm tracking-[0.2em] uppercase border border-mystic-purple/30 text-mystic-purple rounded-lg hover:bg-mystic-purple/10 hover:border-mystic-purple/50 transition-all duration-500 inline-block"
            >
              View All Products
            </Link>
          </motion.div>
        </div>
      </MysticalSection>

      {/* Values Section */}
      <ValuesSection />

      {/* Testimonials */}
      <MysticalSection
        title="Whispers from Adventurers"
        subtitle="Hear what fellow seekers say about their Cassiopeia Dice."
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  'These dice feel like they were forged in another plane of existence. The nebula set is absolutely mesmerizing.',
                author: 'Lyra S.',
                title: 'DM, 8 years',
              },
              {
                quote:
                  "I've never rolled a nat 20 with more style. The quality is unreal, and the packaging felt like opening a treasure chest.",
                author: 'Dorian K.',
                title: 'Forever DM',
              },
              {
                quote:
                  'Commissioned a custom set for my druid character — they captured the essence perfectly. True artisan work.',
                author: 'Thalia M.',
                title: 'Dice Collector',
              },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                className="relative p-6 rounded-xl border border-mystic-purple/10 bg-nebula/15"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <span className="absolute -top-3 left-6 text-4xl text-mystic-purple/20 font-display">
                  &ldquo;
                </span>
                <p className="font-body text-lg text-stardust leading-relaxed italic mt-2">
                  {testimonial.quote}
                </p>
                <div className="mt-4 pt-4 border-t border-mystic-purple/10">
                  <p className="font-heading text-sm tracking-[0.15em] text-mystic-gold">
                    {testimonial.author}
                  </p>
                  <p className="font-body text-sm text-stardust mt-0.5">
                    {testimonial.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </MysticalSection>

      {/* CTA Banner */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-mystic-purple/5 via-mystic-purple/10 to-mystic-purple/5" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <motion.h2
            className="font-display text-3xl sm:text-4xl tracking-[0.1em] bg-gradient-to-r from-mystic-gold to-mystic-amber bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Forge Your Own Legend
          </motion.h2>
          <motion.p
            className="mt-4 font-body text-lg text-stardust"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Have a vision for your perfect dice set? Our artisans can bring it
            to life. Custom commissions available — from color palettes to
            embedded inclusions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link
              href="/commissions"
              className="mt-8 px-10 py-4 font-heading text-sm tracking-[0.2em] uppercase bg-gradient-to-r from-mystic-gold/90 to-mystic-amber/90 text-void rounded-lg hover:shadow-[0_0_30px_rgba(243,156,18,0.3)] transition-shadow duration-500 inline-block"
            >
              Start Your Commission
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
