import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import LangChainPricingSection from '@/components/langchain-pricing-section';
import Link from 'next/link';
import { ArrowRight, Brain, CheckCircle } from 'lucide-react';
import Image from 'next/image';

import { generateMetadata as genMeta, generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/seo-utils';
import { seoKeywords } from '@/lib/seo-keywords';

export const metadata = genMeta({
  title: 'LangChain Development Services Canada | LLM Application Development | Solvix Core',
  description: 'Expert LangChain development services in Canada. Custom LLM applications, AI chatbot development, RAG systems, and conversational AI solutions. Build intelligent AI agents with LangChain.',
  keywords: [
    seoKeywords.canada.langchain.primary,
    ...seoKeywords.canada.langchain.secondary,
    ...seoKeywords.global.langchain.secondary,
    ...seoKeywords.canada.langchain.semantic,
    ...seoKeywords.global.langchain.semantic
  ],
  canonical: 'https://solvixcore.com/services/langchain'
});

export default function LangChainService() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://solvixcore.com' },
    { name: 'Services', url: 'https://solvixcore.com/services' },
    { name: 'LangChain Integration', url: 'https://solvixcore.com/services/langchain' }
  ]);

  const serviceSchema = generateServiceSchema({
    name: 'LangChain Development & Integration Services',
    description: 'Professional LangChain development, LLM application development, AI chatbots, and RAG systems for Canadian businesses',
    url: 'https://solvixcore.com/services/langchain'
  });

  const faqSchema = generateFAQSchema([
    {
      question: 'What is LangChain and why should I use it?',
      answer: 'LangChain is a framework for building applications with large language models. It enables complex AI workflows, context-aware responses, and integration with multiple LLM providers for sophisticated AI applications.'
    },
    {
      question: 'What LangChain services do you offer?',
      answer: 'We offer RAG system development, AI chatbot creation, custom chain development, knowledge base implementation, text analysis, and content generation solutions using LangChain.'
    },
    {
      question: 'Can you integrate LangChain with our existing systems?',
      answer: 'Yes, we specialize in integrating LangChain applications with existing business systems, databases, APIs, and workflows for seamless AI-powered automation.'
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
            src="/backgrounds/langchain.webp"
            alt="LangChain"
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
              <span className="text-primary">LangChain</span> Integration
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Build sophisticated AI applications with advanced language model chains. Create intelligent systems that understand context and deliver meaningful results.
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
              <h2 className="text-4xl font-bold text-foreground mb-6">Why LangChain?</h2>
              <div className="space-y-4">
                {[
                  'Build complex language model applications with ease',
                  'Connect multiple language models in sophisticated chains',
                  'Process and understand large volumes of text',
                  'Create context-aware AI systems',
                  'Integrate with multiple LLM providers',
                  'Advanced prompt engineering and optimization',
                  'Memory management for conversational AI',
                  'Document processing and retrieval',
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
                src="/backgrounds/langchain.webp"
                alt="LangChain"
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
            <h2 className="text-4xl font-bold text-foreground mb-4">Our LangChain Solutions</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'RAG Systems',
                description: 'Retrieval-Augmented Generation for accurate, context-aware responses.',
              },
              {
                title: 'Chatbots & Agents',
                description: 'Intelligent conversational agents that learn and adapt to user needs.',
              },
              {
                title: 'Text Analysis',
                description: 'Deep text processing, sentiment analysis, and document understanding.',
              },
              {
                title: 'Knowledge Bases',
                description: 'Build intelligent knowledge systems with semantic search capabilities.',
              },
              {
                title: 'Content Generation',
                description: 'Automated content creation and summarization at scale.',
              },
              {
                title: 'Custom Chains',
                description: 'Tailored language model workflows for your specific use cases.',
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
            Ready to Harness the Power of LangChain?
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            Let{"'"}s build intelligent AI systems that drive real results for your business.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-primary/50"
          >
            Start Your AI Journey
          </Link>
        </div>
      </section>

      {/* LangChain Pricing Section */}
      <LangChainPricingSection />

      <Footer />
    </div>
  );
}
