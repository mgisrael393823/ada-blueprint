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
