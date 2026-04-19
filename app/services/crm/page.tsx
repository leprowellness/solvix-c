import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import CRMPricingSection from '@/components/crm-pricing-section';
import Link from 'next/link';
import { ArrowRight, Database, CheckCircle } from 'lucide-react';
import Image from 'next/image';

import { generateMetadata as genMeta, generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/seo-utils';
import { seoKeywords } from '@/lib/seo-keywords';

export const metadata = genMeta({
  title: 'Custom CRM Development Canada | CRM Solutions & Automation | Solvix Core',
  description: 'Professional custom CRM development in Canada. Tailored CRM solutions, sales automation, customer management systems, and CRM integration services. Build the perfect CRM for your business.',
  keywords: [
    seoKeywords.canada.crmAutomation.primary,
    ...seoKeywords.canada.crmAutomation.secondary,
    ...seoKeywords.global.crmAutomation.secondary,
    ...seoKeywords.canada.crmAutomation.semantic,
    ...seoKeywords.global.crmAutomation.semantic,
    'custom crm development',
    'crm software development',
    'sales crm solutions',
    'customer management system',
    'crm consulting services'
  ],
  canonical: 'https://solvixcore.com/services/crm'
});

export default function CRMService() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://solvixcore.com' },
    { name: 'Services', url: 'https://solvixcore.com/services' },
    { name: 'CRM Development', url: 'https://solvixcore.com/services/crm' }
  ]);

  const serviceSchema = generateServiceSchema({
    name: 'Custom CRM Development & Automation Services',
    description: 'Professional custom CRM development, sales automation, customer management systems, and CRM integration for Canadian businesses',
    url: 'https://solvixcore.com/services/crm'
  });

  const faqSchema = generateFAQSchema([
    {
      question: 'What is custom CRM development?',
      answer: 'Custom CRM development involves building a customer relationship management system tailored specifically to your business processes, workflows, and requirements, rather than using off-the-shelf solutions.'
    },
    {
      question: 'How long does it take to develop a custom CRM?',
      answer: 'Development time varies based on complexity. A basic CRM takes 2-3 months, while enterprise solutions with advanced features may take 4-6 months. We provide detailed timelines during consultation.'
    },
    {
      question: 'Can you integrate the CRM with our existing tools?',
      answer: 'Yes, we specialize in integrating custom CRMs with existing business tools including email platforms, accounting software, marketing automation, e-commerce systems, and third-party APIs.'
    },
    {
      question: 'What are the benefits of custom CRM vs off-the-shelf solutions?',
      answer: 'Custom CRMs offer perfect alignment with your workflows, no unnecessary features, better scalability, complete data ownership, lower long-term costs, and competitive advantages through unique features.'
    },
    {
      question: 'Do you provide training and support after development?',
      answer: 'Yes, we provide comprehensive training for your team, detailed documentation, ongoing technical support, and maintenance services to ensure your CRM continues to meet your evolving needs.'
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
            src="/backgrounds/crm.jpg"
            alt="CRM Development"
            fill
            className="object-cover brightness-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/50 to-background" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-down space-y-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/20 rounded-full mb-4">
              <Database className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              Custom <span className="text-primary">CRM</span> Development
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Build the perfect CRM system tailored to your business. Streamline sales, automate workflows, and manage customer relationships with a solution designed specifically for you.
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
              <h2 className="text-4xl font-bold text-foreground mb-6">Why Custom CRM?</h2>
              <div className="space-y-4">
                {[
                  'Perfectly aligned with your business processes',
                  'No paying for features you don\'t need',
                  'Complete control over your customer data',
                  'Seamless integration with existing tools',
                  'Scalable to grow with your business',
                  'Competitive advantage through unique features',
                  'Lower long-term costs vs subscription CRMs',
                  'Custom reporting and analytics',
                  'Enhanced security and compliance',
                  'Dedicated support and maintenance',
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
                src="/backgrounds/crm.jpg"
                alt="CRM Development"
                width={500}
                height={400}
                className="rounded-xl shadow-2xl shadow-primary/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-foreground mb-4">CRM Features We Build</h2>
            <p className="text-foreground/70 text-lg">
              Comprehensive features tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Contact Management',
                description: 'Centralized database for all customer information, interactions, and history.',
              },
              {
                title: 'Sales Pipeline',
                description: 'Visual sales pipeline with drag-and-drop stages and deal tracking.',
              },
              {
                title: 'Lead Management',
                description: 'Capture, qualify, and nurture leads through automated workflows.',
              },
              {
                title: 'Task & Calendar',
                description: 'Integrated task management and calendar for team coordination.',
              },
              {
                title: 'Email Integration',
                description: 'Two-way email sync with templates and automated campaigns.',
              },
              {
                title: 'Reporting & Analytics',
                description: 'Custom dashboards and reports for data-driven decisions.',
              },
              {
                title: 'Workflow Automation',
                description: 'Automate repetitive tasks and business processes.',
              },
              {
                title: 'Mobile Access',
                description: 'Responsive design for access on any device, anywhere.',
              },
              {
                title: 'Document Management',
                description: 'Store and organize documents, contracts, and files.',
              },
              {
                title: 'Custom Fields',
                description: 'Add unlimited custom fields to track what matters to you.',
              },
              {
                title: 'API & Integrations',
                description: 'Connect with third-party tools and services via API.',
              },
              {
                title: 'User Permissions',
                description: 'Role-based access control for security and privacy.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-8 hover:border-primary transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-foreground mb-4">Perfect For</h2>
            <p className="text-foreground/70 text-lg">
              Industries and businesses that benefit from custom CRM
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'B2B Sales Teams',
                description: 'Manage complex sales cycles, multiple stakeholders, and long-term relationships.',
              },
              {
                title: 'Real Estate',
                description: 'Track properties, clients, showings, and transactions in one place.',
              },
              {
                title: 'Professional Services',
                description: 'Manage clients, projects, billing, and service delivery.',
              },
              {
                title: 'E-commerce',
                description: 'Customer data, order history, and personalized marketing.',
              },
              {
                title: 'Healthcare',
                description: 'Patient management, appointments, and HIPAA-compliant records.',
              },
              {
                title: 'Financial Services',
                description: 'Client portfolios, compliance tracking, and secure communications.',
              },
            ].map((useCase, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <h3 className="text-lg font-bold text-foreground mb-3">{useCase.title}</h3>
                <p className="text-foreground/70 text-sm">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Development Process</h2>
            <p className="text-foreground/70 text-lg">
              From concept to deployment, we guide you every step
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'We analyze your workflows, pain points, and requirements in detail.',
              },
              {
                step: '02',
                title: 'Design',
                description: 'Create wireframes and prototypes for your approval before development.',
              },
              {
                step: '03',
                title: 'Development',
                description: 'Build your CRM with regular updates and feedback sessions.',
              },
              {
                step: '04',
                title: 'Launch',
                description: 'Deploy, train your team, and provide ongoing support.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-primary/10">
                  <div className="text-3xl font-bold text-primary/30 mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-foreground/70">{item.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-accent/10 border-y border-border">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Build Your Perfect CRM?
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            Let's discuss your requirements and create a CRM that transforms your business.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-primary/50"
          >
            Schedule Consultation
          </Link>
        </div>
      </section>

      {/* CRM Pricing Section */}
      <CRMPricingSection />

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: 'What is custom CRM development?',
                answer: 'Custom CRM development involves building a customer relationship management system tailored specifically to your business processes, workflows, and requirements, rather than using off-the-shelf solutions.',
              },
              {
                question: 'How long does it take to develop a custom CRM?',
                answer: 'Development time varies based on complexity. A basic CRM takes 2-3 months, while enterprise solutions with advanced features may take 4-6 months. We provide detailed timelines during consultation.',
              },
              {
                question: 'Can you integrate the CRM with our existing tools?',
                answer: 'Yes, we specialize in integrating custom CRMs with existing business tools including email platforms, accounting software, marketing automation, e-commerce systems, and third-party APIs.',
              },
              {
                question: 'What are the benefits of custom CRM vs off-the-shelf solutions?',
                answer: 'Custom CRMs offer perfect alignment with your workflows, no unnecessary features, better scalability, complete data ownership, lower long-term costs, and competitive advantages through unique features.',
              },
              {
                question: 'Do you provide training and support after development?',
                answer: 'Yes, we provide comprehensive training for your team, detailed documentation, ongoing technical support, and maintenance services to ensure your CRM continues to meet your evolving needs.',
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <h3 className="text-lg font-bold text-foreground mb-3">{faq.question}</h3>
                <p className="text-foreground/70">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
