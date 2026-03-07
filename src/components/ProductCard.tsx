'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/data/products';

export default function ProductCard({
  product,
  index = 0,
}: {
  product: Product;
  index?: number;
}) {
  return (
    <div className="group relative">
      <div className="relative overflow-hidden rounded-xl border border-mystic-purple/15 bg-nebula/30 transition-colors duration-300 hover:border-mystic-purple/40 hover:bg-nebula/50">
        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 z-10 px-3 py-1 text-[10px] font-heading tracking-[0.2em] uppercase bg-mystic-gold/90 text-void rounded-full">
            {product.badge}
          </div>
        )}

        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden bg-cosmic">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            quality={75}
            loading="lazy"
            className="object-cover will-change-transform transition-transform duration-300 group-hover:scale-105"
          />

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <Link
              href={`/products/${product.category}`}
              className="w-full py-2.5 text-xs font-heading tracking-[0.2em] uppercase text-starlight bg-mystic-purple/40 border border-mystic-purple/40 rounded-lg hover:bg-mystic-purple/60 transition-colors text-center block"
            >
              View Details
            </Link>
          </div>
        </div>

        {/* Info */}
        <div className="p-4">
          <h3 className="font-heading text-base tracking-wider text-starlight group-hover:text-mystic-cyan transition-colors duration-300 truncate">
            {product.name}
          </h3>
          <p className="mt-1 font-body text-base text-stardust line-clamp-2 leading-relaxed">
            {product.description}
          </p>
          <div className="mt-3 flex items-center justify-between">
            <span className="font-heading text-base text-mystic-gold">
              ${product.price.toFixed(2)}
            </span>
            <button className="px-3 py-1.5 text-[10px] font-heading tracking-[0.15em] uppercase border border-mystic-purple/30 rounded-md text-mystic-purple hover:bg-mystic-purple/10 hover:border-mystic-purple/50 transition-colors duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
