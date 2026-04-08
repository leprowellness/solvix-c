import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import OpenAIPricingSection from '@/components/openai-pricing-section';
import Link from 'next/link';
import { ArrowRight, Lightbulb, CheckCircle } from 'lucide-react';
import Image from 'next/image';

import { generateMetadata as genMeta, generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/seo-utils';
import { seoKeywords } from '@/lib/seo-keywords';

export const metadata = genMeta({
  title: 'OpenAI Agent SDK Development Canada | Custom GPT Chatbots | Solvix Core',
  description: 'Expert OpenAI Agent SDK development in Canada. Custom GPT chatbots, autonomous AI agents, intelligent automation, and OpenAI API integration. Build next-gen AI solutions.',
  keywords: [
    seoKeywords.canada.openai.primary,
    ...seoKeywords.canada.openai.secondary,
    ...seoKeywords.global.aiChatbots.secondary,
    'openai agent sdk canada',
    'gpt-4 development',
    'openai api integration',
    'autonomous ai agents',
    'custom gpt solutions canada'
  ],
  canonical: 'https://solvixcore.com/services/openai'
});

export default function OpenAIService() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://solvixcore.com' },
    { name: 'Services', url: 'https://solvixcore.com/services' },
    { name: 'OpenAI Agent SDK', url: 'https://solvixcore.com/services/openai' }
  ]);

  const serviceSchema = generateServiceSchema({
    name: 'OpenAI Agent SDK Development Services',
    description: 'Custom OpenAI agent development, GPT chatbots, autonomous AI systems, and intelligent automation for Canadian businesses',
    url: 'https://solvixcore.com/services/openai'
  });

  const faqSchema = generateFAQSchema([
    {
      question: 'What is OpenAI Agent SDK?',
      answer: 'OpenAI Agent SDK enables building autonomous AI agents that can reason, plan, and execute complex tasks using GPT-4 and other OpenAI models with advanced capabilities like function calling and tool use.'
    },
    {
      question: 'What can OpenAI agents do for my business?',
      answer: 'OpenAI agents can handle customer support, automate research, analyze data, generate content, process documents, and execute complex multi-step business workflows autonomously.'
    },
    {
      question: 'How much does OpenAI agent development cost?',
      answer: 'Costs vary based on complexity, features, and API usage. Contact us for a detailed quote tailored to your specific requirements and expected usage.'
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
            src="/backgrounds/open ai agent sdk.webp"
            alt="OpenAI Agent SDK"
            fill
            className="object-cover brightness-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/50 to-background" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-down space-y-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/20 rounded-full mb-4">
              <Lightbulb className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              <span className="text-primary">OpenAI Agent</span> SDK
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Create autonomous AI agents that can reason, plan, and execute complex tasks. Build next-generation intelligent systems with OpenAI{"'"}s cutting-edge models.
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
              <h2 className="text-4xl font-bold text-foreground mb-6">Why OpenAI Agents?</h2>
              <div className="space-y-4">
                {[
                  'Advanced reasoning and problem-solving capabilities',
                  'Autonomous task execution without constant supervision',
                  'Multi-step planning and decision-making',
                  'Real-time adaptation to changing conditions',
                  'Tool use and function calling integration',
                  'Context preservation across conversations',
                  'Cost-effective API-based solution',
                  'Scalable architecture for enterprise needs',
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
                src="/backgrounds/open ai agent sdk.webp"
                alt="OpenAI Agents"
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
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Agent Solutions</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Autonomous Agents',
                description: 'Self-directed agents that complete complex tasks independently.',
              },
              {
                title: 'Customer Support',
                description: 'Intelligent support agents that handle customer inquiries effectively.',
              },
              {
                title: 'Research Assistants',
                description: 'Agents that gather, analyze, and synthesize information at scale.',
              },
              {
                title: 'Data Analysis',
                description: 'Autonomous data exploration and insight generation systems.',
              },
              {
                title: 'Business Automation',
                description: 'Agents that automate complex business workflows and processes.',
              },
              {
                title: 'Content Systems',
                description: 'Automated content creation and curation at enterprise scale.',
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
            Build Intelligent Agents Today
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            Let our experts create custom agents that work 24/7 for your business.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-primary/50"
          >
            Schedule a Demo
          </Link>
        </div>
      </section>

      {/* OpenAI Pricing Section */}
      <OpenAIPricingSection />

      <Footer />
    </div>
  );
}
