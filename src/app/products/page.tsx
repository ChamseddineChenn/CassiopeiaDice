'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import MysticalSection from '@/components/MysticalSection';
import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/data/products';

export default function ProductsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-8 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            className="font-heading text-xs tracking-[0.4em] uppercase text-mystic-purple mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Our Collection
          </motion.p>
          <motion.h1
            className="font-display text-4xl sm:text-5xl tracking-[0.1em] bg-gradient-to-b from-starlight to-moonbeam bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            All Products
          </motion.h1>
          <motion.p
            className="mt-4 font-body text-lg text-stardust/90 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Explore every mystical artifact in our inventory — from individual
            dice to complete sets, crafting tools, and beyond.
          </motion.p>
        </div>
      </section>

      {/* Category Pills */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          className="flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Link href="/products">
            <span className="px-5 py-2 text-xs font-heading tracking-[0.15em] uppercase bg-mystic-purple/20 border border-mystic-purple/40 text-mystic-violet rounded-full cursor-pointer">
              All
            </span>
          </Link>
          {categories.map((cat) => (
            <Link key={cat.slug} href={`/products/${cat.slug}`}>
              <span className="px-5 py-2 text-xs font-heading tracking-[0.15em] uppercase border border-mystic-purple/20 text-stardust hover:border-mystic-purple/40 hover:text-mystic-cyan rounded-full cursor-pointer transition-all duration-300">
                {cat.name}
              </span>
            </Link>
          ))}
        </motion.div>
      </div>

      {/* Products by Category */}
      {categories.map((cat) => {
        const catProducts = products.filter((p) => p.category === cat.slug);
        return (
          <MysticalSection
            key={cat.slug}
            title={cat.name}
            subtitle={cat.description}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {catProducts.map((product, i) => (
                  <ProductCard key={product.id} product={product} index={i} />
                ))}
              </div>
            </div>
          </MysticalSection>
        );
      })}
    </>
  );
}
