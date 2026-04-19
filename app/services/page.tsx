import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Link from 'next/link';
import { ArrowRight, Brain, Zap, Code, Palette, TrendingUp, Smartphone, Wand2, Store, Lightbulb } from 'lucide-react';
import Image from 'next/image';

import { generateMetadata as genMeta, generateBreadcrumbSchema } from '@/lib/seo-utils';
import { seoKeywords } from '@/lib/seo-keywords';

export const metadata = genMeta({
  title: 'Our Services | AI, Web Development & Digital Solutions Canada | Solvix Core',
  description: 'Comprehensive technology services in Canada: AI automation, web development, mobile apps, LangChain, SEO, content creation, and digital solutions. Expert tech services for businesses across Canada.',
  keywords: [
    ...seoKeywords.canada.aiAutomation.secondary.slice(0, 3),
    ...seoKeywords.canada.webDevelopment.secondary.slice(0, 3),
    ...seoKeywords.canada.seoMarketing.secondary.slice(0, 3),
    'technology services canada',
    'digital solutions provider',
    'tech agency canada',
    'software development services'
  ],
  canonical: 'https://solvixcore.com/services'
});

const AllServices = [
  {
    id: 'crm',
    title: 'Custom CRM Development',
    description: 'Tailored CRM solutions for your business needs',
    icon: <Wand2 className="w-10 h-10" />,
    color: 'from-violet-500 to-purple-500',
    image: '/backgrounds/crm.jpg'
  },
  {
    id: 'n8n',
    title: 'n8n Automation',
    description: 'Powerful workflow automation and integration platform',
    icon: <Zap className="w-10 h-10" />,
    color: 'from-blue-500 to-cyan-500',
    image: '/backgrounds/n8n-automate.webp'
  },
  {
    id: 'langchain',
    title: 'LangChain Integration',
    description: 'Advanced language model chains and AI workflows',
    icon: <Brain className="w-10 h-10" />,
    color: 'from-purple-500 to-pink-500',
    image: '/backgrounds/langchain.webp'
  },
  {
    id: 'openai',
    title: 'OpenAI Agent SDK',
    description: 'Intelligent agents powered by OpenAI models',
    icon: <Lightbulb className="w-10 h-10" />,
    color: 'from-green-500 to-emerald-500',
    image: '/backgrounds/open ai agent sdk.webp'
  },
  {
    id: 'content',
    title: 'Content Creation',
    description: 'Strategic content development for your brand',
    icon: <Palette className="w-10 h-10" />,
    color: 'from-orange-500 to-red-500',
    image: '/backgrounds/content creation.webp'
  },
  {
    id: 'web-development',
    title: 'Customized Websites',
    description: 'Tailored web solutions for your business',
    icon: <Code className="w-10 h-10" />,
    color: 'from-blue-500 to-indigo-500',
    image: '/backgrounds/Website Development.webp'
  },
  {
    id: 'app-dev',
    title: 'Application Development',
    description: 'Native and cross-platform mobile & web apps',
    icon: <Smartphone className="w-10 h-10" />,
    color: 'from-indigo-500 to-purple-500',
    image: '/backgrounds/app development.webp'
  },
  {
    id: 'ai-solutions',
    title: 'AI Solutions',
    description: 'Custom AI implementations and machine learning',
    icon: <Brain className="w-10 h-10" />,
    color: 'from-cyan-500 to-blue-500',
    image: '/backgrounds/services.webp'
  },
  {
    id: 'shopify',
    title: 'Shopify Store Design',
    description: 'Premium e-commerce store setup and customization',
    icon: <Store className="w-10 h-10" />,
    color: 'from-green-500 to-teal-500',
    image: '/backgrounds/shopify.webp'
  },
  {
    id: 'marketing-seo',
    title: 'Marketing & SEO',
    description: 'Data-driven marketing and search optimization',
    icon: <TrendingUp className="w-10 h-10" />,
    color: 'from-pink-500 to-rose-500',
    image: '/backgrounds/digital marketing and seo.webp'
  },
];

export default function Services() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://solvixcore.com' },
    { name: 'Services', url: 'https://solvixcore.com/services' }
  ]);

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 pt-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            suppressHydrationWarning={true}
            className="absolute inset-0 w-full h-full object-cover brightness-30"
          >
            <source src="/Videos/hero Section(1).mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="animate-fade-in-down space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
              Comprehensive technology solutions designed to drive your business forward.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {AllServices.map((service, index) => (
              <Link key={service.id} href={`/services/${service.id}`}>
                <div
                  className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary transition-all duration-300 group h-full cursor-pointer hover:shadow-2xl hover:shadow-primary/20 hover:scale-105 transform animate-fade-in-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                    <div className="absolute bottom-4 left-6 text-primary group-hover:scale-125 transition-transform duration-300">
                      {service.icon}
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                    <p className="text-foreground/70 mb-6">{service.description}</p>
                    <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all duration-300">
                      Learn More <ArrowRight size={18} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Process
            </h2>
            <p className="text-foreground/70 text-lg">
              How we deliver exceptional results for every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your vision and requirements in detail' },
              { step: '02', title: 'Planning', description: 'Strategic planning and technical architecture design' },
              { step: '03', title: 'Development', description: 'Expert implementation with premium quality standards' },
              { step: '04', title: 'Launch', description: 'Deployment and ongoing support for your success' },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 animate-fade-in-up relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl font-bold text-primary/40 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-foreground/70">{item.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                    <ArrowRight className="text-primary/30" size={32} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-accent/10 border-y border-border">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let{"'"}s Discuss Your Project
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            Ready to bring your ideas to life? Connect with our team for a free consultation.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-primary/50"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
