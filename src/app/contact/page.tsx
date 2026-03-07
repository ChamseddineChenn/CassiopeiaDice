'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import MysticalSection from '@/components/MysticalSection';

const contactMethods = [
  {
    title: 'Send a Raven',
    subtitle: 'Email Us',
    value: 'cassiopeiadice@gmail.com',
    href: 'mailto:cassiopeiadice@gmail.com',
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <rect x="3" y="7" width="26" height="18" rx="2" />
        <path d="M3 7l13 10L29 7" />
      </svg>
    ),
    description:
      'Our guild checks scrolls daily. Expect a response within 24–48 hours.',
  },
  {
    title: 'Crystal Ball',
    subtitle: 'Instagram',
    value: '@cassiopeiadice',
    href: 'https://www.instagram.com/cassiopeiadice/',
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <rect x="4" y="4" width="24" height="24" rx="6" />
        <circle cx="16" cy="16" r="6" />
        <circle cx="23.5" cy="8.5" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
    description:
      'Peek into our workshop. DMs open for quick questions & dice previews.',
  },
  {
    title: 'Enchanted Mirror',
    subtitle: 'TikTok',
    value: '@cassiopeiadice',
    href: 'https://www.tiktok.com/@cassiopeiadice',
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <path d="M12 28V12c0-1 0-4 5-4 0 3 3 5 5 5v4c-2 0-4-1-5-2v9c0 4-3.5 6-6.5 6S4 27 6 24c2-3 6-2 6-2" />
      </svg>
    ),
    description:
      'Watch dice-making magic unfold. Comment or duet to connect with us.',
  },
  {
    title: 'The Tavern',
    subtitle: 'Discord',
    value: 'Join our server',
    href: '#',
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <path d="M12 22c-3-1-5-3-6-5s-1-6 0-8l3-2s3 0 5 1m0 0c1-1 3-1 4 0m-4 0v14m4-14c2-1 5-1 5-1l3 2c1 2 1 6 0 8s-3 4-6 5" />
        <circle cx="12" cy="18" r="2" fill="currentColor" stroke="none" />
        <circle cx="20" cy="18" r="2" fill="currentColor" stroke="none" />
      </svg>
    ),
    description:
      'Join fellow adventurers. Share rolls, builds, and custom dice inspo.',
  },
];

const inquiryTypes = [
  'General Question',
  'Custom Commission Inquiry',
  'Order Status',
  'Wholesale / Collaboration',
  'Press / Media',
  'Other Arcane Matter',
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Contact Methods */}
      <MysticalSection
        title="Ways to Reach Us"
        subtitle="Choose the channel that suits your quest."
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactMethods.map((method, i) => (
              <motion.a
                key={method.title}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={
                  method.href.startsWith('http')
                    ? 'noopener noreferrer'
                    : undefined
                }
                className="group relative p-6 rounded-xl border border-mystic-purple/15 bg-nebula/20 backdrop-blur-sm overflow-hidden block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-mystic-purple/0 to-mystic-purple/0 group-hover:from-mystic-purple/8 group-hover:to-transparent transition-all duration-500" />

                <div className="relative z-10 flex items-start gap-5">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl border border-mystic-purple/20 bg-mystic-purple/5 flex items-center justify-center text-mystic-purple/70 group-hover:text-mystic-violet group-hover:border-mystic-purple/40 transition-all duration-300">
                    {method.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-heading text-xs tracking-[0.2em] uppercase text-mystic-purple/60 mb-1">
                      {method.title}
                    </p>
                    <h3 className="font-heading text-base tracking-[0.1em] text-starlight group-hover:text-mystic-cyan transition-colors duration-300">
                      {method.subtitle}
                    </h3>
                    <p className="mt-1 font-body text-base text-mystic-violet/80">
                      {method.value}
                    </p>
                    <p className="mt-2 font-body text-base text-stardust leading-relaxed">
                      {method.description}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </MysticalSection>

      {/* Contact Form */}
      <MysticalSection
        title="Inscribe Your Message"
        subtitle="Fill the scroll below and we shall respond with haste."
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Success sigil */}
              <motion.div
                className="mx-auto w-20 h-20 rounded-full border border-mystic-purple/30 flex items-center justify-center mb-6"
                animate={{
                  boxShadow: [
                    '0 0 0px rgba(168,85,199,0)',
                    '0 0 30px rgba(168,85,199,0.3)',
                    '0 0 0px rgba(168,85,199,0)',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgba(168,85,199,0.8)"
                  strokeWidth="1.5"
                >
                  <path
                    d="M20 6L9 17l-5-5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
              <h3 className="font-display text-2xl tracking-[0.1em] text-starlight mb-3">
                Message Sent
              </h3>
              <p className="font-body text-lg text-stardust">
                Your scroll has been dispatched through the astral plane.
              </p>
              <p className="font-body text-sm text-stardust/80 mt-2">
                We typically respond within 24–48 hours.
              </p>
              <motion.button
                className="mt-8 px-8 py-3 font-heading text-sm tracking-[0.2em] uppercase border border-mystic-purple/30 text-mystic-purple rounded-lg hover:bg-mystic-purple/10 transition-all duration-300"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    name: '',
                    email: '',
                    inquiryType: '',
                    subject: '',
                    message: '',
                  });
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Send Another
              </motion.button>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Name & Email row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-heading text-sm tracking-[0.2em] uppercase text-stardust mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Elara Moonshadow"
                    className="w-full px-4 py-3 bg-cosmic/80 border border-mystic-purple/30 rounded-lg text-base text-starlight placeholder:text-stardust/50 focus:outline-none focus:border-mystic-purple/50 focus:shadow-[0_0_15px_rgba(139,63,160,0.1)] font-body transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block font-heading text-sm tracking-[0.2em] uppercase text-stardust mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="elara@adventurers-guild.com"
                    className="w-full px-4 py-3 bg-cosmic/80 border border-mystic-purple/30 rounded-lg text-base text-starlight placeholder:text-stardust/50 focus:outline-none focus:border-mystic-purple/50 focus:shadow-[0_0_15px_rgba(139,63,160,0.1)] font-body transition-all duration-300"
                  />
                </div>
              </div>

              {/* Inquiry Type */}
              <div>
                <label className="block font-heading text-sm tracking-[0.2em] uppercase text-stardust mb-2">
                  Nature of Inquiry
                </label>
                <select
                  required
                  value={formData.inquiryType}
                  onChange={(e) =>
                    setFormData({ ...formData, inquiryType: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-cosmic/80 border border-mystic-purple/30 rounded-lg text-base text-starlight focus:outline-none focus:border-mystic-purple/50 focus:shadow-[0_0_15px_rgba(139,63,160,0.1)] font-body transition-all duration-300 appearance-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M2 4l4 4 4-4' stroke='%238b3fa0' stroke-width='1.5' fill='none'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 16px center',
                  }}
                >
                  <option value="" disabled className="bg-void text-stardust">
                    Select your quest type...
                  </option>
                  {inquiryTypes.map((type) => (
                    <option
                      key={type}
                      value={type}
                      className="bg-void text-starlight"
                    >
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Subject */}
              <div>
                <label className="block font-heading text-sm tracking-[0.2em] uppercase text-stardust mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  placeholder="Regarding my enchanted commission..."
                  className="w-full px-4 py-3 bg-cosmic/80 border border-mystic-purple/30 rounded-lg text-base text-starlight placeholder:text-stardust/50 focus:outline-none focus:border-mystic-purple/50 focus:shadow-[0_0_15px_rgba(139,63,160,0.1)] font-body transition-all duration-300"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block font-heading text-sm tracking-[0.2em] uppercase text-stardust mb-2">
                  Your Message
                </label>
                <textarea
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Speak your mind, adventurer. Describe what you seek, and we shall do our best to aid your quest..."
                  className="w-full px-4 py-3 bg-cosmic/80 border border-mystic-purple/30 rounded-lg text-base text-starlight placeholder:text-stardust/50 focus:outline-none focus:border-mystic-purple/50 focus:shadow-[0_0_15px_rgba(139,63,160,0.1)] font-body transition-all duration-300 resize-none"
                />
              </div>

              {/* Submit */}
              <div className="pt-2">
                <motion.button
                  type="submit"
                  className="w-full sm:w-auto px-10 py-3.5 font-heading text-base tracking-[0.2em] uppercase bg-gradient-to-r from-mystic-purple to-mystic-violet text-white rounded-lg hover:shadow-[0_0_30px_rgba(168,85,199,0.3)] transition-shadow duration-500"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Send Your Message
                </motion.button>
              </div>
            </motion.form>
          )}
        </div>
      </MysticalSection>

      {/* FAQ quick link */}
      <section className="relative py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-body text-lg text-stardust/70 mb-4">
              Many questions have already been answered in the ancient tomes.
            </p>
            <motion.a
              href="/faq"
              className="inline-block px-8 py-3 font-heading text-sm tracking-[0.2em] uppercase border border-mystic-purple/25 text-mystic-purple rounded-lg hover:bg-mystic-purple/8 hover:border-mystic-purple/40 transition-all duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Visit the FAQ Scrolls
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
