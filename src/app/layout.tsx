import './globals.css';
import './tailwind-fix.css';
import type { Metadata } from 'next';
import { Montserrat, Inconsolata } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { headers } from 'next/headers';
import AuthWrapper from '@/components/AuthWrapper';

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
  title: '220 ADA | THE BLUEPRINT',
  description: 'Interactive web presentation for 220 N. Ada Street in Chicago\'s Fulton Market district',
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' }
    ],
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: '220 ADA | THE BLUEPRINT',
    description: 'THE BLUEPRINT',
    images: [
      {
        url: '/220og-image.png',
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
    title: '220 ADA | THE BLUEPRINT',
    description: 'THE BLUEPRINT',
    images: ['/220og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Get auth required header from middleware (server-side only)
  const authRequired = headers().get('x-auth-required') === 'true';
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-QT4VEB75DR"></script>
        <script 
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-QT4VEB75DR');
            `
          }}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@900&family=Inconsolata:wght@400&display=swap"
          rel="stylesheet"
        />
        {/* Meta tag for authentication status */}
        <meta name="x-auth-required" content={authRequired ? 'true' : 'false'} />
      </head>
      <body className={`${montserrat.variable} ${inconsolata.variable} font-body bg-white`}>
        <AuthWrapper>
          {children}
        </AuthWrapper>
        <Analytics />
      </body>
    </html>
  );
}
