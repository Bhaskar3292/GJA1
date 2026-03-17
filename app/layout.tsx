import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/sonner';

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
  authors: [{ name: 'GJA Construction Inc' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gjaconstruction.com',
    siteName: 'GJA Construction Inc',
    title: 'GJA Construction Inc | Petroleum Infrastructure Construction',
    description: 'Petroleum and fueling infrastructure contractor specializing in UST installation/removal, canopy construction, and compliance-oriented execution.',
    images: [
      {
        url: '/logo.svg',
        width: 200,
        height: 60,
        alt: 'GJA Construction Inc Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GJA Construction Inc | Petroleum Infrastructure Construction',
    description: 'Petroleum and fueling infrastructure contractor specializing in UST installation/removal, canopy construction, and compliance-oriented execution.',
    images: ['/logo.svg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/logo.svg',
  },
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
        <Toaster />
      </body>
    </html>
  );
}
