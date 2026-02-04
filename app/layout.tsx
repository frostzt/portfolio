import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { PageTransition } from './components/page-transition'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Sourav Singh Rawat',
    template: '%s | Sourav Singh Rawat',
  },
  description: 'Systems engineer writing about databases, distributed systems, and low-level programming. Building with C, Go, and Rust.',
  keywords: ['systems engineering', 'databases', 'distributed systems', 'C programming', 'Go', 'Rust', 'Redis', 'Valkey', 'software engineering'],
  authors: [{ name: 'Sourav Singh Rawat', url: baseUrl }],
  creator: 'Sourav Singh Rawat',
  openGraph: {
    title: 'Sourav Singh Rawat',
    description: 'Systems engineer writing about databases, distributed systems, and low-level programming.',
    url: baseUrl,
    siteName: 'Sourav Singh Rawat',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${baseUrl}/og?title=Sourav%20Singh%20Rawat`,
        width: 1200,
        height: 630,
        alt: 'Sourav Singh Rawat',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sourav Singh Rawat',
    description: 'Systems engineer writing about databases, distributed systems, and low-level programming.',
    creator: '@souravsrawat',
    images: [`${baseUrl}/og?title=Sourav%20Singh%20Rawat`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: baseUrl,
    types: {
      'application/rss+xml': `${baseUrl}/rss`,
    },
  },
  verification: {
    // Add these when you have them:
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
}

const cx = (...classes: string[]) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cx(GeistSans.variable, GeistMono.variable)}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme');
                if (theme === 'light') {
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <main className="min-w-0 flex flex-col">
          <Navbar />
          <PageTransition>
            {children}
          </PageTransition>
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
