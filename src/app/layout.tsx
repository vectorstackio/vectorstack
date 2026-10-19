// app/layout.tsx

import type { Metadata } from 'next'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

import './globals.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      'Michael Garthwaite | Senior Full-Stack Developer & Technical Lead',
    template: '%s | ReasonStack',
  },

  description:
    'Michael Garthwaite is a senior full-stack developer and technical lead specialising in Node.js, React, Next.js, AWS, AI, integrations and automation.',

  applicationName: 'ReasonStack',

  authors: [
    {
      name: 'Michael Garthwaite',
    },
  ],

  creator: 'Michael Garthwaite',

  keywords: [
    'Senior Full-Stack Developer',
    'Freelance Developer',
    'Node.js Developer',
    'React Developer',
    'Next.js Developer',
    'AWS Developer',
    'AI Developer',
    'AI Applications',
    'API Integration',
    'Salesforce Integration',
    'Software Architecture',
    'Technical Lead',
    'West Yorkshire',
    'UK',
  ],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'ReasonStack',
    title:
      'Michael Garthwaite | Senior Full-Stack Developer & Technical Lead',
    description:
      'Senior full-stack development, cloud systems, integrations, automation and AI-powered applications.',
    url: siteUrl,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Michael Garthwaite - Senior Full-Stack Developer & Technical Lead',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title:
      'Michael Garthwaite | Senior Full-Stack Developer & Technical Lead',
    description:
      'Senior full-stack development, cloud systems, integrations, automation and AI-powered applications.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-GB">
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-slate-900 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
