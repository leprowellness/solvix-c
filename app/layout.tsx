import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Syne } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const syne = Syne({ subsets: ['latin'], variable: '--font-syne' })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#000000',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.solvixcore.com'),
  title: {
    default: 'Solvix Core - AI Automation, Web Development & Digital Services Canada',
    template: '%s | Solvix Core'
  },
  description: 'Leading Canadian tech agency specializing in AI automation services, custom web development, mobile app development, LangChain AI solutions, and digital marketing. Serving businesses across Canada and globally.',
  generator: 'Solvix Core',
  applicationName: 'Solvix Core',
  keywords: [
    // 2026 Trending AI & Agentic AI Keywords
    'agentic ai development canada',
    'ai agents for business canada',
    'multi-agent ai systems canada',
    'ai automation services canada',
    'generative ai development canada',
    'ai workflow automation canada',
    'langchain development canada',
    'openai agents sdk canada',
    'n8n automation canada',
    'custom ai solutions canada',
    'machine learning services canada',
    'rag development canada',
    'retrieval augmented generation canada',
    'context engineering canada',
    'ai agent orchestration canada',
    'autonomous ai systems canada',
    'ai voice agents canada',
    'multimodal ai development canada',
    // Web Development
    'web development company canada',
    'custom website development canada',
    'next.js development canada',
    'react development canada',
    'ecommerce website development canada',
    'web app development canada',
    'professional web design canada',
    'website development ottawa',
    // Mobile & Apps
    'mobile app development canada',
    'react native development canada',
    'flutter app development canada',
    'ios android app development canada',
    // SEO & GEO (2026 Trending)
    'seo services canada',
    'generative engine optimization canada',
    'geo optimization canada',
    'ai search optimization canada',
    'digital marketing agency canada',
    'local seo canada',
    'content marketing canada',
    // Other Services
    'shopify development canada',
    'crm development canada',
    'pos system canada',
    'video editing services canada',
    // High-intent buyer keywords
    'hire ai developer canada',
    'hire agentic ai developer canada',
    'hire web developer canada',
    'best tech agency canada',
    'affordable web development canada',
    'digital transformation canada',
    'tech company ottawa ontario',
    'software development company canada',
  ],
  authors: [{ name: 'Solvix Core', url: 'https://www.solvixcore.com' }],
  creator: 'Solvix Core',
  publisher: 'Solvix Core',
  category: 'Technology',
  classification: 'Web Development, AI, Digital Marketing',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://www.solvixcore.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    alternateLocale: ['en_US', 'fr_CA'],
    url: 'https://www.solvixcore.com',
    siteName: 'Solvix Core',
    title: 'Solvix Core - AI Automation & Web Development Services Canada',
    description: 'Transform your business with AI automation, custom web development, and digital solutions. Trusted Canadian tech partner for startups and enterprises.',
    images: [
      {
        url: '/favicon/Solvix.PNG',
        width: 1200,
        height: 630,
        alt: 'Solvix Core - Premium Tech Solutions',
        type: 'image/png',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solvix Core - AI Automation & Web Development Canada',
    description: 'Leading Canadian tech agency for AI automation, web development, and digital services.',
    images: ['/favicon/Solvix.PNG'],
    creator: '@SolvixCore',
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
  icons: {
    icon: '/favicon/Solvix.PNG',
    apple: '/favicon/Solvix.PNG',
    shortcut: '/favicon/Solvix.PNG',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Solvix Core',
  },
  manifest: '/manifest.json',
}

import { ThemeProvider } from "@/components/theme-provider"
import { CurrencyProvider } from '@/contexts/currency-context'
import { generateOrganizationSchema } from '@/lib/seo-utils'
import { Toaster } from "sonner"
import { Preloader } from "@/components/loaders"
import RootClientWrapper from "@/components/root-client-wrapper"
import { VercelAnalytics } from "@/components/analytics"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const organizationSchema = generateOrganizationSchema();

  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${syne.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <CurrencyProvider>
            <RootClientWrapper>
              {children}
            </RootClientWrapper>
          </CurrencyProvider>
          <Toaster position="bottom-right" richColors />
          <VercelAnalytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
