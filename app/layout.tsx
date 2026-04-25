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
    // AI & Automation - High Volume
    'ai automation services canada',
    'ai solutions for businesses',
    'langchain development services',
    'ai chatbot development canada',
    'custom ai development',
    'machine learning solutions',
    'business process automation ai',
    'ai implementation services canada',
    // Web Development - Premium Keywords
    'web development company canada',
    'custom website development canada',
    'next.js web development',
    'ecommerce website development canada',
    'progressive web apps',
    'enterprise web development',
    'professional web design canada',
    // Mobile Apps
    'mobile app development canada',
    'ios app development company',
    'android app developers',
    'cross platform app development',
    'react native development',
    'flutter app development',
    // SEO & Marketing  
    'seo services canada',
    'digital marketing agency canada',
    'local seo company canada',
    'technical seo services',
    'seo optimization canada',
    'keyword research services',
    'content marketing services',
    // Other Premium Services
    'crm development canada',
    'crm automation services',
    'content creation services',
    'video editing services canada',
    'shopify development',
    'startup software development',
    'saas development services'
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
    languages: {
      'en-CA': 'https://www.solvixcore.com',
      'en-US': 'https://www.solvixcore.com/en-us',
      'fr-CA': 'https://www.solvixcore.com/fr-ca',
    },
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
    // Add your verification codes here
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
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
