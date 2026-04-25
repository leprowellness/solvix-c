import { generateMetadata as genMeta, generateBreadcrumbSchema } from '@/lib/seo-utils';
import PricingClient from './pricing-client';

export const metadata = genMeta({
  title: 'Service Pricing Plans Canada | Transparent Quotes | Solvix Core',
  description: 'Transparent pricing for all our tech services in Canada. AI automation, web development, mobile apps, LangChain, SEO, and more. 35% below market rates. No hidden fees.',
  keywords: [
    'service pricing canada',
    'web development pricing',
    'app development cost',
    'ai solutions pricing',
    'crm development pricing',
    'seo services pricing',
    'digital services cost',
    'software development quotes',
    'canada tech services pricing',
    'affordable web development',
    'pricing plans canada'
  ],
  canonical: 'https://www.solvixcore.com/pricing'
});

export default function PricingPage() {
  return <PricingClient />;
}