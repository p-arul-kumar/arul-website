import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import './globals.css'

const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
})

const body = Jost({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'P. Arul Kumar — Advocate | Pastor | Author | Publisher | Social Worker',
  description:
    'Justice with Integrity. Faith with Compassion. Legal service to society, Christian ministry, social welfare and community service by P. Arul Kumar — Advocate, Pastor, Author, Publisher and Social Worker.',
  generator: 'v0.app',
  keywords: [
    'P. Arul Kumar',
    'Advocate',
    'Pastor',
    'Social Worker',
    'Social Welfare',
    'Community Service',
    'Legal Consultation',
    'Prayer Request',
    'Law Today',
    'Because He Lives',
    'Nugarvor Nanban',
  ],
  openGraph: {
    title: 'P. Arul Kumar — Advocate | Pastor | Author | Publisher | Social Worker',
    description: 'Justice with Integrity. Faith with Compassion.',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#111a2e',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`bg-background ${display.variable} ${body.variable}`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
