'use client';

import { motion } from 'framer-motion';
import MysticalSection from '@/components/MysticalSection';

const steps = [
  {
    number: '01',
    title: 'Share Your Vision',
    description:
      'Fill out the commission form below with your ideas — color palette, theme, inclusions, character inspiration, or even just a feeling. The more detail, the better!',
  },
  {
    number: '02',
    title: 'Receive Your Quote',
    description:
      "We'll respond within 48 hours with a detailed quote, mockup description, and estimated timeline. We may ask clarifying questions to ensure perfection.",
  },
  {
    number: '03',
    title: 'Approve & Deposit',
    description:
      "Once you approve the concept, a 50% deposit secures your spot in our crafting queue. We'll begin forging your custom artifacts.",
  },
  {
    number: '04',
    title: 'Crafting & Updates',
    description:
      "We'll send progress photos during creation. Each die is hand-poured, cured, polished, and inked with meticulous care.",
  },
  {
    number: '05',
    title: 'Final Reveal & Shipping',
    description:
      "You'll receive final photos for approval. Pay the remaining balance, and your one-of-a-kind dice ship to your doorstep.",
  },
];

const pricingTiers = [
  {
    name: 'Single Die',
    price: 'From $25',
    features: [
      'One custom die (any shape)',
      'Custom color palette',
      'Up to 2 inclusion types',
      'Standard inking',
    ],
  },
  {
    name: 'Full Set (7pc)',
    price: 'From $120',
    features: [
      'Complete D4–D100 polyhedral set',
      'Custom color palette',
      'Up to 3 inclusion types',
      'Custom inking color',
      'Progress photos',
    ],
    featured: true,
  },
  {
    name: 'Deluxe Set',
    price: 'From $200',
    features: [
      'Full 7pc set + extra D20',
      'Complex multi-layer pours',
      'Unlimited inclusion types',
      'Gold/silver leaf inking',
      'Custom storage coffer',
      'Priority crafting',
    ],
  },
];

export default function CommissionsPage() {
  return (
    <>
      {/* How It Works */}
      <MysticalSection
        title="The Forging Process"
        subtitle="From vision to reality in five enchanted steps."
      >
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-[27px] top-8 bottom-8 w-[1px] bg-gradient-to-b from-mystic-purple/30 via-mystic-purple/20 to-mystic-purple/30 hidden md:block" />

            <div className="space-y-8">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  className="flex gap-6 items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  {/* Step number */}
                  <div className="flex-shrink-0 relative">
                    <div className="w-14 h-14 rounded-full border border-mystic-purple/30 flex items-center justify-center bg-abyss/80 backdrop-blur-sm">
                      <span className="font-heading text-sm tracking-wider text-mystic-gold">
                        {step.number}
                      </span>
                    </div>
                    <motion.div
                      className="absolute inset-0 rounded-full border border-mystic-purple/20"
                      animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="pt-2">
                    <h3 className="font-heading text-lg tracking-[0.15em] text-starlight">
                      {step.title}
                    </h3>
                    <p className="mt-2 font-body text-base text-stardust leading-relaxed max-w-xl">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </MysticalSection>

      {/* Pricing */}
      <MysticalSection
        title="Commission Tiers"
        subtitle="Starting prices — complexity and materials may affect final cost."
      >
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingTiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                className={`relative p-8 rounded-xl border backdrop-blur-sm flex flex-col ${
                  tier.featured
                    ? 'border-mystic-gold/30 bg-nebula/30'
                    : 'border-mystic-purple/15 bg-nebula/15'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                {tier.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-[10px] font-heading tracking-[0.2em] uppercase bg-mystic-gold/90 text-void rounded-full">
                    Most Popular
                  </div>
                )}

                {/* Top glow for featured */}
                {tier.featured && (
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-mystic-gold/40 to-transparent" />
                )}

                <h3 className="font-heading text-lg tracking-[0.15em] text-starlight text-center">
                  {tier.name}
                </h3>
                <p
                  className={`mt-2 text-center font-display text-2xl ${
                    tier.featured ? 'text-mystic-gold' : 'text-mystic-purple'
                  }`}
                >
                  {tier.price}
                </p>

                <ul className="mt-6 space-y-3 flex-1">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 font-body text-sm text-stardust"
                    >
                      <span
                        className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                          tier.featured
                            ? 'bg-mystic-gold/60'
                            : 'bg-mystic-purple/40'
                        }`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.button
                  className={`mt-8 w-full py-3 font-heading text-xs tracking-[0.2em] uppercase rounded-lg transition-all duration-300 ${
                    tier.featured
                      ? 'bg-gradient-to-r from-mystic-gold/80 to-mystic-amber/80 text-void hover:shadow-[0_0_20px_rgba(243,156,18,0.3)]'
                      : 'border border-mystic-purple/30 text-mystic-purple hover:bg-mystic-purple/10'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </MysticalSection>

      {/* Commission Form */}
      <MysticalSection
        title="Begin Your Commission"
        subtitle="Tell us about your dream dice. We'll take it from there."
      >
        <div className="max-w-2xl mx-auto px-4">
          <motion.form
            className="space-y-6 p-8 rounded-2xl border border-mystic-purple/25 bg-cosmic/40 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block font-heading text-sm tracking-[0.15em] uppercase text-stardust mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-cosmic/80 border border-mystic-purple/30 rounded-lg text-base text-starlight placeholder:text-stardust/50 focus:outline-none focus:border-mystic-purple/50 focus:shadow-[0_0_15px_rgba(139,63,160,0.1)] font-body transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block font-heading text-sm tracking-[0.15em] uppercase text-stardust mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-cosmic/80 border border-mystic-purple/30 rounded-lg text-base text-starlight placeholder:text-stardust/50 focus:outline-none focus:border-mystic-purple/50 focus:shadow-[0_0_15px_rgba(139,63,160,0.1)] font-body transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block font-heading text-sm tracking-[0.15em] uppercase text-stardust mb-2">
                Commission Type
              </label>
              <select className="w-full px-4 py-3 bg-cosmic/80 border border-mystic-purple/30 rounded-lg text-base text-starlight focus:outline-none focus:border-mystic-purple/50 focus:shadow-[0_0_15px_rgba(139,63,160,0.1)] font-body transition-colors">
                <option value="">Select a tier...</option>
                <option value="single">Single Die — From $25</option>
                <option value="set">Full Set (7pc) — From $120</option>
                <option value="deluxe">Deluxe Set — From $200</option>
              </select>
            </div>

            <div>
              <label className="block font-heading text-sm tracking-[0.15em] uppercase text-stardust mb-2">
                Color Palette & Theme
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-cosmic/80 border border-mystic-purple/30 rounded-lg text-base text-starlight placeholder:text-stardust/50 focus:outline-none focus:border-mystic-purple/50 focus:shadow-[0_0_15px_rgba(139,63,160,0.1)] font-body transition-colors"
                placeholder="e.g., Deep ocean blue with gold flecks, inspired by a sea elf wizard"
              />
            </div>

            <div>
              <label className="block font-heading text-sm tracking-[0.15em] uppercase text-stardust mb-2">
                Describe Your Vision
              </label>
              <textarea
                rows={5}
                className="w-full px-4 py-3 bg-cosmic/80 border border-mystic-purple/30 rounded-lg text-base text-starlight placeholder:text-stardust/50 focus:outline-none focus:border-mystic-purple/50 focus:shadow-[0_0_15px_rgba(139,63,160,0.1)] font-body transition-colors resize-none"
                placeholder="Tell us everything — character backstory, campaign setting, specific inclusions, reference images (links welcome), or anything that inspires the vibe you want..."
              />
            </div>

            <div>
              <label className="block font-heading text-sm tracking-[0.15em] uppercase text-stardust mb-2">
                Reference Images (Optional)
              </label>
              <div className="w-full px-4 py-8 bg-cosmic/50 border border-dashed border-mystic-purple/20 rounded-lg text-center">
                <p className="font-body text-base text-stardust/60">
                  Drag & drop images here or paste links in the description
                  above
                </p>
              </div>
            </div>

            <motion.button
              type="submit"
              className="w-full py-4 font-heading text-base tracking-[0.2em] uppercase bg-gradient-to-r from-mystic-purple to-mystic-violet text-starlight rounded-lg hover:shadow-[0_0_30px_rgba(155,89,182,0.3)] transition-shadow duration-500"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              Submit Commission Request
            </motion.button>

            <p className="text-center font-body text-sm text-stardust/60">
              We&apos;ll respond within 48 hours. No payment required until you
              approve the quote.
            </p>
          </motion.form>
        </div>
      </MysticalSection>
    </>
  );
}
