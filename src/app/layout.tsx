// app/layout.tsx

import type { Metadata } from 'next'
import './globals.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      'Michael Garthwaite | Senior Full-Stack Developer & Technical Lead',
    template: '%s | Michael Garthwaite',
  },

  description:
    'Michael Garthwaite is a senior full-stack developer and technical lead specialising in Node.js, React, Next.js, AWS, AI, integrations and automation.',

  applicationName: 'Michael Garthwaite',

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
    siteName: 'Michael Garthwaite',
    title:
      'Michael Garthwaite | Senior Full-Stack Developer & Technical Lead',
    description:
      'Senior full-stack development, cloud systems, integrations, automation and AI-powered applications.',
    url: siteUrl,
  },

  twitter: {
    card: 'summary_large_image',
    title:
      'Michael Garthwaite | Senior Full-Stack Developer & Technical Lead',
    description:
      'Senior full-stack development, cloud systems, integrations, automation and AI-powered applications.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  )
}
