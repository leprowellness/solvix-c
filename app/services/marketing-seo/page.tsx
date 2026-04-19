import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import SEOPricingSection from '@/components/seo-pricing-section';
import PricingSection from '@/components/pricing-section';
import Link from 'next/link';
import { ArrowRight, TrendingUp, CheckCircle } from 'lucide-react';
import Image from 'next/image';

import { generateMetadata as genMeta, generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/seo-utils';
import { seoKeywords } from '@/lib/seo-keywords';

export const metadata = genMeta({
  title: 'SEO Services Canada | Digital Marketing Agency | Solvix Core',
  description: 'Top-rated SEO agency in Canada. Local SEO services, technical SEO, digital marketing, content marketing, and search engine optimization for businesses across Toronto, Vancouver, Montreal & Canada.',
  keywords: [
    seoKeywords.canada.seoMarketing.primary,
    ...seoKeywords.canada.seoMarketing.secondary,
    ...seoKeywords.global.seoMarketing.secondary,
    ...seoKeywords.canada.seoMarketing.semantic,
    ...seoKeywords.global.seoMarketing.semantic
  ],
  canonical: 'https://solvixcore.com/services/marketing-seo'
});

export default function MarketingSEOService() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://solvixcore.com' },
    { name: 'Services', url: 'https://solvixcore.com/services' },
    { name: 'Marketing & SEO', url: 'https://solvixcore.com/services/marketing-seo' }
  ]);

  const serviceSchema = generateServiceSchema({
    name: 'SEO & Digital Marketing Services',
    description: 'Professional SEO services, local SEO, technical SEO optimization, digital marketing strategies, and content marketing for Canadian businesses',
    url: 'https://solvixcore.com/services/marketing-seo'
  });

  const faqSchema = generateFAQSchema([
    {
      question: 'What SEO services do you offer in Canada?',
      answer: 'We offer comprehensive SEO services including local SEO, technical SEO, on-page optimization, link building, content marketing, keyword research, SEO audits, and ongoing optimization for businesses across Canada.'
    },
    {
      question: 'How long does it take to see SEO results?',
      answer: 'SEO is a long-term strategy. Most businesses see initial improvements in 3-6 months, with significant results typically appearing within 6-12 months depending on competition and current website status.'
    },
    {
      question: 'Do you provide local SEO for Canadian cities?',
      answer: 'Yes, we specialize in local SEO for Canadian businesses in Toronto, Vancouver, Montreal, Calgary, Ottawa, and other cities across Canada.'
    }
  ]);

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/backgrounds/digital marketing and seo.webp"
            alt="Marketing & SEO"
            fill
            className="object-cover brightness-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/50 to-background" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-down space-y-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/20 rounded-full mb-4">
              <TrendingUp className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              <span className="text-primary">Marketing</span> & SEO
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Strategic marketing and SEO to drive traffic, leads, and revenue. Data-driven campaigns that deliver measurable results.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-primary/50"
            >
              Get Started <ArrowRight className="inline ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-4xl font-bold text-foreground mb-6">Why SEO & Marketing?</h2>
              <div className="space-y-4">
                {[
                  'Increase organic traffic and visibility',
                  'Higher quality leads with lower cost per acquisition',
                  'Improved brand authority and credibility',
                  'Better user experience and conversion rates',
                  'Long-term sustainable growth strategy',
                  'Competitive advantage in your industry',
                  'Measurable ROI on marketing investments',
                  'Multi-channel marketing integration',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span className="text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-fade-in-right">
              <Image
                src="/backgrounds/digital marketing and seo.webp"
                alt="Marketing"
                width={500}
                height={400}
                className="rounded-xl shadow-2xl shadow-primary/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'SEO Strategy',
                description: 'Comprehensive SEO audits and long-term optimization strategy.',
              },
              {
                title: 'Technical SEO',
                description: 'Site speed, indexing, and technical optimization for search.',
              },
              {
                title: 'Content Marketing',
                description: 'High-quality content designed to rank and convert.',
              },
              {
                title: 'Link Building',
                description: 'Ethical backlink strategies to improve domain authority.',
              },
              {
                title: 'PPC Campaigns',
                description: 'Google Ads and social media paid campaigns for quick results.',
              },
              {
                title: 'Analytics & Reporting',
                description: 'Detailed analytics and monthly performance reports.',
              },
            ].map((solution, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-8 hover:border-primary transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <h3 className="text-xl font-bold text-foreground mb-3">{solution.title}</h3>
                <p className="text-foreground/70">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-accent/10 border-y border-border">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Grow Your Business Through Strategic Marketing
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            Let's develop a winning marketing strategy that drives real business results.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-primary/50"
          >
            Start Your Growth
          </Link>
        </div>
      </section>

      {/* SEO Pricing Section */}
      <SEOPricingSection />

      {/* Social Media Marketing Pricing Section */}
      <PricingSection />

      <Footer />
    </div>
  );
}
