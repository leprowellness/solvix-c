import { generateMetadata as genMeta } from '@/lib/seo-utils';
import PortfolioClient from './portfolio-client';

export const metadata = genMeta({
  title: 'Our Portfolio | Projects & Case Studies | Solvix Core',
  description: 'Explore Solvix Core portfolio showcasing our successful projects in web development, AI automation, mobile apps, and digital solutions. See how we transform businesses.',
  keywords: [
    'solvix core portfolio',
    'web development projects',
    'case studies',
    'successful projects',
    'ai project examples',
    'development portfolio',
    'client projects',
    'case studies canada',
    'technology projects',
    'portfolio showcase'
  ],
  canonical: 'https://www.solvixcore.com/portfolio'
});

export default function PortfolioPage() {
  return <PortfolioClient />;
}
