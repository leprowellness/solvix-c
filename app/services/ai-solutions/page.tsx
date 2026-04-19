import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import AIPricingSection from '@/components/ai-pricing-section';
import Link from 'next/link';
import { ArrowRight, Brain, CheckCircle } from 'lucide-react';
import Image from 'next/image';

import { generateMetadata as genMeta, generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/seo-utils';
import { seoKeywords } from '@/lib/seo-keywords';

export const metadata = genMeta({
  title: 'AI Automation Services Canada | Custom AI Development | Solvix Core',
  description: 'Leading AI automation services in Canada. Custom AI development, machine learning solutions, business process automation, and AI integration. Transform your business with intelligent automation.',
  keywords: [
    seoKeywords.canada.aiAutomation.primary,
    ...seoKeywords.canada.aiAutomation.secondary,
    ...seoKeywords.global.aiAutomation.secondary,
    ...seoKeywords.canada.aiAutomation.semantic,
    ...seoKeywords.global.aiAutomation.semantic
  ],
  canonical: 'https://solvixcore.com/services/ai-solutions'
});

export default function AISolutionsService() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://solvixcore.com' },
    { name: 'Services', url: 'https://solvixcore.com/services' },
    { name: 'AI Solutions', url: 'https://solvixcore.com/services/ai-solutions' }
  ]);

  const serviceSchema = generateServiceSchema({
    name: 'AI Automation & Machine Learning Services',
    description: 'Custom AI automation services, machine learning solutions, predictive analytics, and intelligent business process automation for Canadian businesses',
    url: 'https://solvixcore.com/services/ai-solutions'
  });

  const faqSchema = generateFAQSchema([
    {
      question: 'What AI automation services do you provide?',
      answer: 'We provide custom AI development, machine learning solutions, predictive analytics, computer vision, natural language processing, recommendation systems, and intelligent business process automation.'
    },
    {
      question: 'How can AI automation benefit my business?',
      answer: 'AI automation reduces operational costs, improves decision-making with data insights, enhances customer experiences, automates repetitive tasks, and provides competitive advantages through intelligent systems.'
    },
    {
      question: 'Do you work with businesses across Canada?',
      answer: 'Yes, we serve businesses across Canada including Toronto, Vancouver, Montreal, Calgary, and other major cities, as well as international clients.'
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
            src="/backgrounds/services.webp"
            alt="AI Solutions"
            fill
            className="object-cover brightness-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/50 to-background" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-down space-y-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/20 rounded-full mb-4">
              <Brain className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              <span className="text-primary">AI</span> Solutions
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Custom artificial intelligence implementations powered by cutting-edge machine learning. Transform your business with intelligent automation.
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
              <h2 className="text-4xl font-bold text-foreground mb-6">Why AI Solutions?</h2>
              <div className="space-y-4">
                {[
                  'Automate complex tasks with intelligent systems',
                  'Extract valuable insights from your data',
                  'Improve decision-making with predictive analytics',
                  'Enhance customer experiences with personalization',
                  'Reduce operational costs through automation',
                  'Identify patterns and opportunities in your data',
                  'Scale operations without proportional cost increase',
                  'Competitive advantage through AI-powered innovation',
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
                src="/backgrounds/services.webp"
                alt="AI Solutions"
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
            <h2 className="text-4xl font-bold text-foreground mb-4">Our AI Capabilities</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Predictive Analytics',
                description: 'Forecast trends, customer behavior, and market movements.',
              },
              {
                title: 'Computer Vision',
                description: 'Image recognition, object detection, and visual analysis.',
              },
              {
                title: 'Natural Language Processing',
                description: 'Text analysis, sentiment analysis, and language understanding.',
              },
              {
                title: 'Recommendation Systems',
                description: 'Personalized recommendations based on user behavior and preferences.',
              },
              {
                title: 'Anomaly Detection',
                description: 'Identify unusual patterns and potential fraud or issues.',
              },
              {
                title: 'Data Analysis & Insights',
                description: 'Deep data analytics to uncover hidden business opportunities.',
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
            Unlock the Power of AI for Your Business
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            Let's explore how AI can transform your operations and drive growth.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-primary/50"
          >
            Schedule Consultation
          </Link>
        </div>
      </section>

      {/* AI Pricing Section */}
      <AIPricingSection />

      <Footer />
    </div>
  );
}
