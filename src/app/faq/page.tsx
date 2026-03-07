'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MysticalSection from '@/components/MysticalSection';

const faqSections = [
  {
    title: 'Orders & Shipping',
    id: 'shipping',
    items: [
      {
        q: 'How long does shipping take?',
        a: 'Domestic orders (US) typically arrive in 5-7 business days via USPS. International shipping takes 2-4 weeks depending on destination. All orders include tracking.',
      },
      {
        q: 'Do you ship internationally?',
        a: 'Yes! We ship worldwide. International shipping rates are calculated at checkout based on your location and order weight.',
      },
      {
        q: 'What is your return policy?',
        a: 'We accept returns within 14 days of delivery for unused items in original packaging. Custom/commissioned items are non-refundable. Contact us at cassiopeiadice@gmail.com to initiate a return.',
      },
      {
        q: 'My order arrived damaged — what do I do?',
        a: "We're sorry to hear that! Please email us within 48 hours of delivery with photos of the damage. We'll arrange a replacement or full refund at no additional cost.",
      },
    ],
  },
  {
    title: 'Products & Care',
    id: 'care',
    items: [
      {
        q: 'What are your dice made of?',
        a: 'Our dice are handcrafted from high-quality UV-resistant resin. Some special editions include real flower petals, metal flakes, or gemstone dust inclusions.',
      },
      {
        q: 'Are the dice balanced?',
        a: 'We take balance seriously. Each die is hand-inspected and undergoes a salt water float test. While handmade dice may have slight variance versus machine-made, our dice are well within fair-play tolerances.',
      },
      {
        q: 'How should I care for my resin dice?',
        a: 'Keep them out of prolonged direct sunlight and extreme heat. Store in a padded case or pouch (like our coffers!). Clean with a soft, slightly damp cloth. Avoid harsh chemicals.',
      },
      {
        q: 'Do you offer replacement dice for sets?',
        a: "We try to keep replacement singles available for popular sets. Contact us with your set name and the die you need, and we'll do our best to help.",
      },
    ],
  },
  {
    title: 'Commissions & Custom Orders',
    id: 'commissions',
    items: [
      {
        q: 'How do commissions work?',
        a: "Fill out our commission form with your vision — colors, inclusions, theme, etc. We'll respond within 48 hours with a quote and timeline. A 50% deposit is required to begin, with the balance due before shipping.",
      },
      {
        q: 'How long do custom orders take?',
        a: 'Most commissions are completed within 3-6 weeks, depending on complexity and current queue. Rush orders may be available for an additional fee.',
      },
      {
        q: 'Can I request a specific color combination?',
        a: "Absolutely! Color mixing is our specialty. You can provide hex codes, reference images, or even describe a feeling — we'll translate it into dice.",
      },
      {
        q: 'What inclusions are available?',
        a: "We offer dried flowers, metal leaf (gold, silver, copper), holographic glitter, gemstone dust, tiny gear/charm pieces, and more. We're always experimenting with new materials!",
      },
    ],
  },
  {
    title: 'General',
    items: [
      {
        q: 'Where are you based?',
        a: 'Cassiopeia Dice is a small artisan operation based in the US, crafting each piece by hand with love and a bit of cosmic magic.',
      },
      {
        q: 'Do you do wholesale or bulk orders?',
        a: 'We offer limited wholesale for select retailers and event organizers. Contact us at cassiopeiadice@gmail.com with details about your business.',
      },
      {
        q: 'How can I stay updated on new releases?',
        a: 'Follow us on Instagram and TikTok @cassiopeiadice, join our Discord community, or subscribe to our newsletter at the bottom of this page for first access to drops and exclusives.',
      },
    ],
  },
];

function FAQItem({
  item,
  index,
}: {
  item: { q: string; a: string };
  index: number;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="border border-mystic-purple/10 rounded-lg overflow-hidden bg-nebula/10 backdrop-blur-sm"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left group hover:bg-mystic-purple/5 transition-colors"
      >
        <span className="font-heading text-base tracking-wider text-starlight group-hover:text-mystic-cyan transition-colors">
          {item.q}
        </span>
        <motion.span
          className="text-mystic-purple/60 flex-shrink-0 text-lg"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          +
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-6 pb-5 border-t border-mystic-purple/5">
              <p className="pt-4 font-body text-lg text-stardust leading-relaxed">
                {item.a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-8 pb-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h1
            className="font-display text-4xl sm:text-5xl tracking-[0.1em] bg-gradient-to-b from-starlight to-moonbeam bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            className="mt-4 font-body text-lg text-stardust/90 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Answers to the most common inquiries from our fellow adventurers.
            Can&apos;t find what you&apos;re looking for? Reach out to us
            directly.
          </motion.p>
        </div>
      </section>

      {/* Quick links */}
      <div className="max-w-4xl mx-auto px-4 mb-12">
        <motion.div
          className="flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {faqSections.map((section) => (
            <a
              key={section.title}
              href={`#${section.id || section.title.toLowerCase().replace(/\s+/g, '-')}`}
              className="px-5 py-2 text-xs font-heading tracking-[0.15em] uppercase border border-mystic-purple/20 text-stardust hover:border-mystic-purple/40 hover:text-mystic-cyan rounded-full transition-all duration-300"
            >
              {section.title}
            </a>
          ))}
        </motion.div>
      </div>

      {/* FAQ Sections */}
      {faqSections.map((section) => (
        <MysticalSection
          key={section.title}
          title={section.title}
          id={section.id || section.title.toLowerCase().replace(/\s+/g, '-')}
        >
          <div className="max-w-3xl mx-auto px-4 space-y-3">
            {section.items.map((item, i) => (
              <FAQItem key={i} item={item} index={i} />
            ))}
          </div>
        </MysticalSection>
      ))}

      {/* Contact CTA */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-mystic-purple/5 to-transparent" />
        <div className="relative max-w-2xl mx-auto px-4 text-center">
          <motion.div
            className="p-10 rounded-2xl border border-mystic-purple/15 bg-nebula/20 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-2xl tracking-[0.1em] text-starlight">
              Still Have Questions?
            </h3>
            <p className="mt-3 font-body text-lg text-stardust">
              We&apos;re always happy to help. Reach out and we&apos;ll get back
              to you within 24 hours.
            </p>
            <a
              href="mailto:cassiopeiadice@gmail.com"
              className="inline-block mt-6 px-8 py-3 font-heading text-sm tracking-[0.2em] uppercase border border-mystic-purple/30 text-mystic-purple rounded-lg hover:bg-mystic-purple/10 transition-all duration-300"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
