'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { use } from 'react';
import MysticalSection from '@/components/MysticalSection';
import ProductCard from '@/components/ProductCard';
import { getProductsByCategory, categories } from '@/data/products';

export default function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = use(params);
  const cat = categories.find((c) => c.slug === category);
  if (!cat) return notFound();

  const catProducts = getProductsByCategory(category);

  return (
    <>
      {/* Page Header */}
      <section className="pt-8 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="flex items-center justify-center gap-2 mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/products"
              className="font-heading text-xs tracking-[0.2em] uppercase text-stardust/80 hover:text-mystic-cyan transition-colors"
            >
              Products
            </Link>
            <span className="text-stardust/50 text-xs">⟡</span>
            <span className="font-heading text-xs tracking-[0.2em] uppercase text-mystic-purple">
              {cat.name}
            </span>
          </motion.div>
          <motion.h1
            className="font-display text-4xl sm:text-5xl tracking-[0.1em] bg-gradient-to-b from-starlight to-moonbeam bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {cat.name}
          </motion.h1>
          <motion.p
            className="mt-4 font-body text-lg text-stardust/90 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {cat.description}
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
            <span className="px-5 py-2 text-xs font-heading tracking-[0.15em] uppercase border border-mystic-purple/20 text-stardust hover:border-mystic-purple/40 hover:text-mystic-cyan rounded-full cursor-pointer transition-all duration-300">
              All
            </span>
          </Link>
          {categories.map((c) => (
            <Link key={c.slug} href={`/products/${c.slug}`}>
              <span
                className={`px-5 py-2 text-xs font-heading tracking-[0.15em] uppercase rounded-full cursor-pointer transition-all duration-300 ${
                  c.slug === category
                    ? 'bg-mystic-purple/20 border border-mystic-purple/40 text-mystic-violet'
                    : 'border border-mystic-purple/20 text-stardust hover:border-mystic-purple/40 hover:text-mystic-cyan'
                }`}
              >
                {c.name}
              </span>
            </Link>
          ))}
        </motion.div>
      </div>

      {/* Products Grid */}
      <MysticalSection>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {catProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {catProducts.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="font-body text-lg text-stardust/50">
                No artifacts found in this realm... yet.
              </p>
            </div>
          )}
        </div>
      </MysticalSection>
    </>
  );
}
