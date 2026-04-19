import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import VideoPricingSection from '@/components/video-pricing-section';
import Link from 'next/link';
import { ArrowRight, Palette, CheckCircle } from 'lucide-react';
import Image from 'next/image';

import { generateMetadata as genMeta, generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/seo-utils';
import { seoKeywords } from '@/lib/seo-keywords';

export const metadata = genMeta({
  title: 'Content Creation Services Canada | SEO Content Writing | Solvix Core',
  description: 'Professional content creation services in Canada. SEO content writing, blog writing, copywriting, video content, and social media content. Strategic content marketing for Canadian businesses.',
  keywords: [
    seoKeywords.canada.contentCreation.primary,
    ...seoKeywords.canada.contentCreation.secondary,
    ...seoKeywords.global.contentCreation.secondary,
    ...seoKeywords.canada.contentCreation.semantic,
    ...seoKeywords.global.contentCreation.semantic
  ],
  canonical: 'https://solvixcore.com/services/content'
});

export default function ContentService() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://solvixcore.com' },
    { name: 'Services', url: 'https://solvixcore.com/services' },
    { name: 'Content Creation', url: 'https://solvixcore.com/services/content' }
  ]);

  const serviceSchema = generateServiceSchema({
    name: 'Content Creation & Marketing Services',
    description: 'Professional content creation, SEO writing, video production, and content strategy for Canadian businesses',
    url: 'https://solvixcore.com/services/content'
  });

  const faqSchema = generateFAQSchema([
    {
      question: 'What content creation services do you provide?',
      answer: 'We provide blog writing, video content production, social media content, copywriting, technical writing, and comprehensive content strategy services.'
    },
    {
      question: 'Is your content SEO-optimized?',
      answer: 'Yes, all our content is SEO-optimized with keyword research, proper structure, meta descriptions, and best practices to improve search rankings.'
    },
    {
      question: 'Can you create content in French for Quebec markets?',
      answer: 'Yes, we offer bilingual content creation services in both English and French for Canadian markets.'
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
            src="/backgrounds/content creation.webp"
            alt="Content Creation"
            fill
            className="object-cover brightness-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/50 to-background" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-down space-y-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/20 rounded-full mb-4">
              <Palette className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              <span className="text-primary">Content</span> Creation
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Compelling, strategic content that resonates with your audience and drives engagement. From blogs to videos, we create content that converts.
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
              <h2 className="text-4xl font-bold text-foreground mb-6">Why Quality Content Matters?</h2>
              <div className="space-y-4">
                {[
                  'Establish thought leadership in your industry',
                  'Build trust and credibility with your audience',
                  'Improve SEO rankings and organic visibility',
                  'Drive engagement and conversions',
                  'Create valuable resources for your customers',
                  'Enhance brand storytelling and messaging',
                  'Support sales and marketing initiatives',
                  'Establish consistent brand voice',
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
                src="/backgrounds/content creation.webp"
                alt="Content Creation"
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
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Content Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Blog Writing',
                description: 'SEO-optimized blog posts that attract and engage your target audience.',
              },
              {
                title: 'Video Content',
                description: 'Professional video production and scriptwriting for maximum impact.',
              },
              {
                title: 'Social Media',
                description: 'Engaging social media content and strategy across all platforms.',
              },
              {
                title: 'Copywriting',
                description: 'Compelling copy that converts visitors into customers.',
              },
              {
                title: 'Technical Writing',
                description: 'Clear documentation and technical content for complex products.',
              },
              {
                title: 'Content Strategy',
                description: 'Comprehensive content planning aligned with your business goals.',
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
            Tell Your Story with Impact
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            Let our creative team craft content that truly resonates with your audience.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-primary/50"
          >
            Start Your Content Journey
          </Link>
        </div>
      </section>

      {/* Video Editing Pricing Section */}
      <VideoPricingSection />

      <Footer />
    </div>
  );
}
