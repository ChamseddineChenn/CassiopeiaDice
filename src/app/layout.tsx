import type { Metadata } from 'next';
import {
  Cinzel,
  Cinzel_Decorative,
  Cormorant_Garamond,
} from 'next/font/google';
import './globals.css';
import MysticalBackground from '@/components/MysticalBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import MouseTrail from '@/components/MouseTrail';

const cinzel = Cinzel({
  variable: '--font-cinzel',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

const cinzelDecorative = Cinzel_Decorative({
  variable: '--font-cinzel-decorative',
  subsets: ['latin'],
  weight: ['400', '700', '900'],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: '--font-cormorant-garamond',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Cassiopeia Dice — Mystical DnD Dice & Equipment',
  description:
    'Handcrafted mystical dice, sets, molds, and accessories for your next legendary adventure.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cinzel.variable} ${cinzelDecorative.variable} ${cormorantGaramond.variable} antialiased`}
      >
        <MysticalBackground />
        <MouseTrail />
        <ScrollToTop />
        <div className="relative z-10 min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
