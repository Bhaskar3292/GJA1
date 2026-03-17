import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GJA Construction Inc | Petroleum Infrastructure Construction',
  description: 'Petroleum and fueling infrastructure contractor specializing in UST installation/removal, canopy construction, and compliance-oriented execution.',
  keywords: [
    'UST installation',
    'underground storage tank',
    'fuel station construction',
    'petroleum infrastructure',
    'canopy construction',
    'DNREC certified',
    'fuel station canopy',
    'tank removal',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
