// SEO Utility Functions
import { Metadata } from 'next';

interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  canonical?: string;
  ogImage?: string;
  noindex?: boolean;
}

export function generateMetadata(config: SEOConfig): Metadata {
  const {
    title,
    description,
    keywords,
    canonical = 'https://solvixcore.com',
    ogImage = '/favicon/Solvix.PNG',
    noindex = false
  } = config;

  return {
    title,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: 'Solvix Core' }],
    creator: 'Solvix Core',
    publisher: 'Solvix Core',
    robots: noindex ? 'noindex, nofollow' : 'index, follow',
    alternates: {
      canonical
    },
    openGraph: {
      type: 'website',
      locale: 'en_CA',
      alternateLocale: ['en_US', 'fr_CA'],
      url: canonical,
      title,
      description,
      siteName: 'Solvix Core',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage]
    }
  };
}

// Generate JSON-LD structured data
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Solvix Core',
    url: 'https://solvixcore.com',
    logo: 'https://solvixcore.com/logo/logo.PNG',
    description: 'Premium technology solutions including AI, automation, web development, and digital services',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'CA',
      addressRegion: 'Canada'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'info@solvixcore.com',
      contactType: 'Customer Service',
      areaServed: ['CA', 'US'],
      availableLanguage: ['English', 'French']
    },
    sameAs: [
      'https://www.linkedin.com/company/solvixcore',
      'https://twitter.com/solvixcore'
    ]
  };
}

export function generateServiceSchema(service: {
  name: string;
  description: string;
  url: string;
  provider?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: service.provider || 'Solvix Core',
      url: 'https://solvixcore.com'
    },
    areaServed: {
      '@type': 'Country',
      name: 'Canada'
    },
    url: service.url
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

export function generateLocalBusinessSchema(location: {
  name: string;
  city: string;
  province: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Solvix Core - ${location.city}`,
    image: 'https://solvixcore.com/logo/logo.PNG',
    '@id': `https://solvixcore.com/locations/${location.city.toLowerCase()}`,
    url: `https://solvixcore.com/locations/${location.city.toLowerCase()}`,
    telephone: '+1-XXX-XXX-XXXX',
    address: {
      '@type': 'PostalAddress',
      addressLocality: location.city,
      addressRegion: location.province,
      addressCountry: 'CA'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 0,
      longitude: 0
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00'
    },
    sameAs: [
      'https://www.linkedin.com/company/solvixcore'
    ]
  };
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}
