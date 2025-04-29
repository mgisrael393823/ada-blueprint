import './globals.css';
import type { Metadata } from 'next';
import { Montserrat, Inconsolata } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['900'], // Black weight
  variable: '--font-montserrat',
});

const inconsolata = Inconsolata({
  subsets: ['latin'],
  weight: ['400'], // Regular weight
  variable: '--font-inconsolata',
});

export const metadata: Metadata = {
  title: '220 Ada – Lease-Up Strategy & Competitive Blueprint',
  description: 'Interactive web presentation for 220 N. Ada Street in Chicago\'s Fulton Market district',
  openGraph: {
    title: '220 ADA',
    description: 'THE BLUEPRINT',
    images: [
      {
        // Make sure image paths work with basePath
        url: '/220ada/220og-image.png',
        width: 1200,
        height: 630,
        alt: '220 ADA - The Blueprint',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '220 ADA',
    description: 'THE BLUEPRINT',
    images: ['/220ada/220og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${inconsolata.variable} font-body bg-white`}>{children}</body>
    </html>
  );
}
