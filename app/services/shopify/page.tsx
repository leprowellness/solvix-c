import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import ShopifyPricingSection from '@/components/shopify-pricing-section';
import Link from 'next/link';
import { ArrowRight, Store, CheckCircle } from 'lucide-react';
import Image from 'next/image';

import { generateMetadata as genMeta, generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/seo-utils';

export const metadata = genMeta({
  title: 'Shopify Store Development Canada | E-commerce Design | Solvix Core',
  description: 'Professional Shopify store development in Canada. Custom Shopify design, theme customization, e-commerce setup, and store optimization. Launch your online store with expert Shopify developers.',
  keywords: [
    'shopify development canada',
    'shopify store design',
    'ecommerce website development',
    'shopify theme customization',
    'shopify experts canada',
    'online store development',
    'shopify plus development',
    'custom shopify solutions',
    'shopify app integration',
    'ecommerce optimization'
  ],
  canonical: 'https://solvixcore.com/services/shopify'
});

export default function ShopifyService() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://solvixcore.com' },
    { name: 'Services', url: 'https://solvixcore.com/services' },
    { name: 'Shopify Store Design', url: 'https://solvixcore.com/services/shopify' }
  ]);

  const serviceSchema = generateServiceSchema({
    name: 'Shopify Store Development & Design Services',
    description: 'Professional Shopify store setup, custom theme development, e-commerce optimization, and ongoing support for Canadian businesses',
    url: 'https://solvixcore.com/services/shopify'
  });

  const faqSchema = generateFAQSchema([
    {
      question: 'How long does it take to build a Shopify store?',
      answer: 'A basic Shopify store can be set up in 2-4 weeks, while custom designs and complex integrations may take 6-12 weeks depending on requirements.'
    },
    {
      question: 'Do you provide ongoing Shopify support?',
      answer: 'Yes, we offer ongoing maintenance, updates, optimization, and technical support for all Shopify stores we develop.'
    },
    {
      question: 'Can you migrate my existing store to Shopify?',
      answer: 'Yes, we provide complete migration services from other platforms to Shopify, including product data, customer information, and order history.'
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
            src="/backgrounds/shopify.webp"
            alt="Shopify Design"
            fill
            className="object-cover brightness-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/50 to-background" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-down space-y-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/20 rounded-full mb-4">
              <Store className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              <span className="text-primary">Shopify</span> Store Design
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Beautiful, converting Shopify stores designed to maximize sales. From setup to optimization, we{"'"}ve got your e-commerce covered.
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
              <h2 className="text-4xl font-bold text-foreground mb-6">Why Shopify?</h2>
              <div className="space-y-4">
                {[
                  'All-in-one e-commerce platform solution',
                  'Easy to use without technical knowledge',
                  'Integrated payment processing and security',
                  'Scalable to grow with your business',
                  'Mobile-optimized for on-the-go shoppers',
                  'Hundreds of apps for extended functionality',
                  'Built-in marketing and SEO tools',
                  'Reliable hosting and technical support',
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
                src="/backgrounds/shopify.webp"
                alt="Shopify"
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
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Shopify Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Store Setup',
                description: 'Complete Shopify store setup from domain to first product.',
              },
              {
                title: 'Theme Customization',
                description: 'Custom theme development and design to match your brand.',
              },
              {
                title: 'Product Setup',
                description: 'Professional product photography, descriptions, and organization.',
              },
              {
                title: 'App Integration',
                description: 'Integration of marketing, analytics, and business tools.',
              },
              {
                title: 'Payment Processing',
                description: 'Secure payment gateway setup and multiple payment options.',
              },
              {
                title: 'Store Optimization',
                description: 'Conversion rate optimization and sales funnel analysis.',
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
            Launch Your E-Commerce Store
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            Start selling online with a beautiful, high-converting Shopify store.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-primary/50"
          >
            Start Your Store
          </Link>
        </div>
      </section>

      {/* Shopify Pricing Section */}
      <ShopifyPricingSection />

      <Footer />
    </div>
  );
}
