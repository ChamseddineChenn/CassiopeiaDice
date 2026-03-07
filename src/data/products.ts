export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: 'dice' | 'dice-sets' | 'molds-tools' | 'stickers' | 'potions';
  description: string;
  featured?: boolean;
  badge?: string;
}

export const products: Product[] = [
  // Dice (Individual)
  {
    id: 'd1',
    name: '60mm Chonk Master D20',
    price: 194.95,
    image: '/images/60mm-chonk-master-d20.webp',
    category: 'dice',
    description:
      'An absolute unit of a D20. 60mm of solid resin glory for the most dramatic rolls at your table.',
    featured: true,
    badge: 'Bestseller',
  },
  {
    id: 'd2',
    name: 'Black Opal 63mm Liquid Core D20',
    price: 274.95,
    image: '/images/black-opal-63mm-liquid-core-d20.webp',
    category: 'dice',
    description:
      'A mesmerizing 63mm liquid core D20 with deep black opal swirls that shift in the light.',
    featured: true,
    badge: 'Premium',
  },
  {
    id: 'd3',
    name: 'Inazuman Promise 33mm Chonk D20',
    price: 144.95,
    image: '/images/inazuman-promise-33mm-chonk-d20.webp',
    category: 'dice',
    description:
      'Inspired by storms and lightning, this 33mm chonk D20 crackles with electrifying energy.',
  },
  {
    id: 'd4',
    name: 'Iridescent Realm 33mm Chonk D20',
    price: 134.95,
    image: '/images/iridescent-realm-33mm-chonk-d20.webp',
    category: 'dice',
    description:
      'Shifting rainbow hues dance across this 33mm chonk D20 like light through a prism.',
    featured: true,
  },
  {
    id: 'd5',
    name: 'Pink Singularity 33mm Chonk D20',
    price: 134.95,
    image: '/images/pink-singularity-33mm-chonk-d20.webp',
    category: 'dice',
    description:
      'A gravitational pull of pink cosmic energy swirling into a single point within this 33mm chonk.',
  },
  {
    id: 'd6',
    name: 'Shadow Keeper 33mm Chonk D20',
    price: 134.95,
    image: '/images/shadow-keeper-33mm-chonk-d20.webp',
    category: 'dice',
    description:
      'Dark and mysterious, this 33mm chonk D20 holds shadows within its resin depths.',
  },
  {
    id: 'd7',
    name: 'Void Magnolia 33mm Chonk D20',
    price: 134.95,
    image: '/images/void-magnolia-33mm-chonk-d20.webp',
    category: 'dice',
    description:
      'Delicate magnolia petals suspended in the void — beauty and darkness in perfect balance.',
    featured: true,
  },
  // Dice Sets
  {
    id: 'ds1',
    name: 'Age of Gemini 7pc Set',
    price: 329.95,
    image: '/images/age-of-gemini-7pc-set.webp',
    category: 'dice-sets',
    description:
      'A celestial 7-piece set channeling the duality of Gemini. Dual-toned resin with cosmic inclusions.',
    featured: true,
    badge: 'Popular',
  },
  {
    id: 'ds2',
    name: 'Dichotomy 7pc Set',
    price: 299.95,
    image: '/images/dichotomy-7pc-set.webp',
    category: 'dice-sets',
    description:
      'Light and dark in perfect opposition — this 7-piece set embodies the balance of all things.',
  },
  {
    id: 'ds3',
    name: 'Golden Rose 7pc Set',
    price: 314.95,
    image: '/images/golden-rose-7pc-set.webp',
    category: 'dice-sets',
    description:
      'Elegant golden rose hues bloom through each die in this luxurious 7-piece polyhedral set.',
    featured: true,
  },
  {
    id: 'ds4',
    name: 'Starlit Feast Gemini 7pc Set',
    price: 324.95,
    image: '/images/starlit-feast-gemini-7pc-set.webp',
    category: 'dice-sets',
    description:
      'A feast of starlight captured in resin — twin colors swirl in celestial harmony across 7 dice.',
  },
  {
    id: 'ds5',
    name: 'Starlit Feast Moonflower 7pc Set',
    price: 324.95,
    image: '/images/starlit-feast-moonflower-7pc-set.webp',
    category: 'dice-sets',
    description:
      'Moonflower petals glow under starlit skies in this ethereal 7-piece set.',
    featured: true,
    badge: 'New',
  },
  {
    id: 'ds6',
    name: 'Stormstrider 7pc Set',
    price: 314.95,
    image: '/images/stormstrider-7pc-set.webp',
    category: 'dice-sets',
    description:
      'Channel the fury of the tempest with this storm-inspired 7-piece polyhedral set.',
  },
  // Molds & Tools
  {
    id: 'mt1',
    name: 'CassioMold ChonkJumbo D20 Mold Housing',
    price: 229.95,
    image: '/images/cassiomold-chonkjumbo-d20-mold-housing.webp',
    category: 'molds-tools',
    description:
      'Professional-grade mold housing for crafting your own jumbo chonk D20 dice at home.',
    featured: true,
  },
  {
    id: 'mt2',
    name: 'Circle Mold Housing Surprise Gradient',
    price: 164.95,
    image: '/images/circle-mold-housing-surprise-gradient.webp',
    category: 'molds-tools',
    description:
      'A circular mold housing with a surprise gradient finish — every cast is unique.',
  },
  {
    id: 'mt3',
    name: 'Pie-shaped Mold Housing',
    price: 149.95,
    image: '/images/pie-shaped-mold-housing.webp',
    category: 'molds-tools',
    description:
      'Innovative pie-shaped mold housing for creating sharp-edged dice with clean lines.',
  },
  {
    id: 'mt4',
    name: 'MoonKey Tool',
    price: 94.95,
    image: '/images/moonkey-tool.webp',
    category: 'molds-tools',
    description:
      'An essential multi-purpose tool for dice makers — pop, pry, and polish with lunar precision.',
  },
  // Stickers
  {
    id: 'st1',
    name: 'Strawberry Milk Stickers',
    price: 29.95,
    image: '/images/strawberry-milk-stickers.webp',
    category: 'stickers',
    description:
      'Adorable strawberry milk–themed vinyl stickers to deck out your dice trays, laptops, and journals.',
    featured: true,
  },
  // Potions
  {
    id: 'po1',
    name: 'Mystic Potion Bottle — Amethyst Elixir',
    price: 124.95,
    image: '/images/potion-amethyst-elixir.webp',
    category: 'potions',
    description:
      'A handcrafted potion bottle filled with shimmering amethyst elixir. Perfect desk companion for any adventurer.',
    featured: true,
    badge: 'New',
  },
  {
    id: 'po2',
    name: 'Mystic Potion Bottle — Starfire Draught',
    price: 124.95,
    image: '/images/potion-starfire-draught.webp',
    category: 'potions',
    description:
      'A glowing starfire draught sealed in an artisan potion bottle. Shake it and watch the cosmos swirl.',
  },
];

export const categories = [
  {
    slug: 'dice',
    name: 'Dice',
    description: 'Individual mystical dice, each one unique.',
  },
  {
    slug: 'dice-sets',
    name: 'Dice Sets',
    description: 'Complete polyhedral sets for every adventure.',
  },
  {
    slug: 'molds-tools',
    name: 'Molds & Tools',
    description: 'Create your own legendary dice.',
  },
  {
    slug: 'stickers',
    name: 'Stickers',
    description: 'Mystical stickers for your gear and journals.',
  },
  {
    slug: 'potions',
    name: 'Potions',
    description: 'Handcrafted potion bottles and mystical elixirs.',
  },
] as const;

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}
