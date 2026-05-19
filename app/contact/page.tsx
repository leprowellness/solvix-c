import { generateMetadata as genMeta } from '@/lib/seo-utils';
import ContactFormClient from './contact-form-client';

export const metadata = genMeta({
  title: 'Contact Solvix Core | Get a Free Quote | AI Agents & Web Dev Canada',
  description: 'Contact Solvix Core for agentic AI development, AI automation, web development, mobile apps, or any tech service. Get a free consultation and custom quote. Based in Ottawa, serving all of Canada.',
  keywords: [
    'contact solvix core',
    'get a free quote canada',
    'free tech consultation canada',
    'hire agentic ai developer canada',
    'hire ai agent developer canada',
    'web development contact canada',
    'ai solutions contact canada',
    'hire web developer canada',
    'hire ai developer canada',
    'tech support canada',
    'reach solvix core',
    'project inquiry form',
    'business contact ottawa',
    'tech service inquiry canada',
    'software development quote canada',
    'digital services consultation',
    'get started web development',
    'ai automation quote canada',
    'agentic ai quote canada',
    'multi-agent system quote canada',
    'mobile app development quote',
    'seo services quote canada',
    'geo optimization quote canada',
    'generative engine optimization canada',
    'ai search optimization quote',
  ],
  canonical: 'https://www.solvixcore.com/contact'
});

export default function Contact() {
  return <ContactFormClient />;
}
