import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import WebsitePricingSection from '@/components/website-pricing-section';
import Link from 'next/link';
import { ArrowRight, Code, CheckCircle } from 'lucide-react';
import Image from 'next/image';

import { generateMetadata as genMeta, generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/seo-utils';
import { seoKeywords } from '@/lib/seo-keywords';

export const metadata = genMeta({
  title: 'Web Development Services Canada | Custom Website Development | Solvix Core',
  description: 'Professional web development company in Canada. Custom website development, Next.js applications, ecommerce solutions, and progressive web apps. Serving Toronto, Vancouver, Montreal & across Canada.',
  keywords: [
    seoKeywords.canada.webDevelopment.primary,
    ...seoKeywords.canada.webDevelopment.secondary,
    ...seoKeywords.global.webDevelopment.secondary,
    ...seoKeywords.canada.webDevelopment.semantic,
    ...seoKeywords.global.webDevelopment.semantic
  ],
  canonical: 'https://solvixcore.com/services/web-development'
});

export default function WebDevService() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://solvixcore.com' },
    { name: 'Services', url: 'https://solvixcore.com/services' },
    { name: 'Web Development', url: 'https://solvixcore.com/services/web-development' }
  ]);

  const serviceSchema = generateServiceSchema({
    name: 'Custom Web Development Services',
    description: 'Professional custom website development, Next.js applications, ecommerce platforms, and progressive web apps for businesses across Canada',
    url: 'https://solvixcore.com/services/web-development'
  });

  const faqSchema = generateFAQSchema([
    {
      question: 'What web development services do you offer in Canada?',
      answer: 'We offer custom website development, Next.js web applications, ecommerce platforms, progressive web apps, corporate websites, and CMS integration services across Canada including Toronto, Vancouver, and Montreal.'
    },
    {
      question: 'How much does custom web development cost?',
      answer: 'Custom web development costs vary based on project complexity, features, and requirements. Contact us for a detailed quote tailored to your specific needs.'
    },
    {
      question: 'Do you provide ongoing website maintenance?',
      answer: 'Yes, we provide comprehensive ongoing maintenance, updates, security patches, and technical support for all websites we develop.'
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
            src="/backgrounds/Website Development.webp"
            alt="Web Development"
            fill
            className="object-cover brightness-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/50 to-background" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-down space-y-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/20 rounded-full mb-4">
              <Code className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              <span className="text-primary">Web</span> Development
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Custom websites and applications built with cutting-edge technology. Fast, secure, and scalable solutions that grow with your business.
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
              <h2 className="text-4xl font-bold text-foreground mb-6">Why Custom Web Solutions?</h2>
              <div className="space-y-4">
                {[
                  'Tailored to your specific business requirements',
                  'Built with modern, scalable technology stack',
                  'Lightning-fast performance and optimization',
                  'Fully responsive mobile-first design',
                  'SEO-optimized for search visibility',
                  'Secure and compliant with best practices',
                  'Easy to maintain and expand',
                  'Integration with your existing systems',
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
                src="/backgrounds/Website Development.webp"
                alt="Web Development"
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
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Web Solutions</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Corporate Websites',
                description: 'Professional websites that showcase your business and attract clients.',
              },
              {
                title: 'E-Commerce Platforms',
                description: 'Fully functional online stores with secure payment processing.',
              },
              {
                title: 'Web Applications',
                description: 'Complex, feature-rich applications for any business need.',
              },
              {
                title: 'Progressive Web Apps',
                description: 'App-like experiences with offline functionality and fast loading.',
              },
              {
                title: 'Portal & Dashboard',
                description: 'Custom dashboards and portals for data visualization and management.',
              },
              {
                title: 'CMS Integration',
                description: 'Easy-to-manage content systems for non-technical teams.',
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
            Ready to Build Your Dream Website?
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            Our expert developers are ready to bring your vision to life.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-primary/50"
          >
            Start Your Project
          </Link>
        </div>
      </section>

      {/* Website Pricing Section */}
      <WebsitePricingSection />

      <Footer />
    </div>
  );
}
