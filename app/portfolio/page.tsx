import { generateMetadata as genMeta } from '@/lib/seo-utils';
import PortfolioClient from './portfolio-client';

export const metadata = genMeta({
  title: 'Our Portfolio | AI Agents, Web Dev & App Projects | Solvix Core Canada',
  description: 'Explore Solvix Core\'s portfolio of successful projects: agentic AI systems, AI automation, custom websites, mobile apps, Shopify stores, CRM solutions, and digital transformations for Canadian businesses.',
  keywords: [
    'solvix core portfolio',
    'web development portfolio canada',
    'agentic ai projects canada',
    'ai automation projects canada',
    'ai agents portfolio canada',
    'mobile app portfolio canada',
    'shopify store examples canada',
    'crm development case studies',
    'tech agency portfolio canada',
    'software development projects canada',
    'digital transformation case studies',
    'client success stories canada',
    'web design portfolio canada',
    'app development examples',
    'ai solutions portfolio',
    'n8n automation examples',
    'langchain project examples',
    'rag pipeline examples',
    'multi-agent system examples',
    'ecommerce portfolio canada',
    'startup projects canada',
    'enterprise software portfolio',
  ],
  canonical: 'https://www.solvixcore.com/portfolio'
});

export default function PortfolioPage() {
  return <PortfolioClient />;
}
