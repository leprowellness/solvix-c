import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import SEOPricingSection from '@/components/seo-pricing-section';
import PricingSection from '@/components/pricing-section';
import VideoPricingSection from '@/components/video-pricing-section';
import WebsitePricingSection from '@/components/website-pricing-section';
import AIPricingSection from '@/components/ai-pricing-section';
import AppPricingSection from '@/components/app-pricing-section';
import ShopifyPricingSection from '@/components/shopify-pricing-section';
import AutomationPricingSection from '@/components/automation-pricing-section';
import LangChainPricingSection from '@/components/langchain-pricing-section';
import OpenAIPricingSection from '@/components/openai-pricing-section';
import Link from 'next/link';
import { ArrowRight, Zap, Brain, Code, Palette, TrendingUp, Smartphone, CheckCircle, Users, Award, Target, Rocket, Shield, Database } from 'lucide-react';
import Image from 'next/image';

import { generateMetadata as genMeta, generateServiceSchema, generateBreadcrumbSchema } from '@/lib/seo-utils';
import { seoKeywords } from '@/lib/seo-keywords';

export const metadata = genMeta({
  title: 'AI Agents & Web Development Services Canada | Solvix Core',
  description: 'Leading Canadian tech agency offering agentic AI development, AI automation, custom web development, mobile apps, LangChain AI, n8n workflows, Shopify stores, SEO & GEO optimization. Ottawa-based, serving businesses globally.',
  keywords: [
    // 2026 Trending AI & Agentic AI
    'agentic ai development canada',
    'ai agents for business canada',
    'multi-agent ai systems canada',
    'ai automation services canada',
    'generative ai development canada',
    'ai workflow automation canada',
    'langchain development canada',
    'openai agents sdk canada',
    'n8n automation canada',
    'custom ai solutions canada',
    'machine learning services canada',
    'rag pipeline development canada',
    'retrieval augmented generation canada',
    'context engineering canada',
    'ai agent orchestration canada',
    'autonomous ai systems canada',
    'ai voice agents canada',
    'multimodal ai development canada',
    // Web Development
    'web development company canada',
    'custom website development canada',
    'next.js development canada',
    'react development canada',
    'ecommerce website development canada',
    'web app development canada',
    'professional web design canada',
    'website development ottawa',
    // Mobile & Apps
    'mobile app development canada',
    'react native development canada',
    'flutter app development canada',
    'ios android app development canada',
    // SEO & GEO (2026 Trending)
    'seo services canada',
    'generative engine optimization canada',
    'geo optimization canada',
    'ai search optimization canada',
    'digital marketing agency canada',
    'local seo canada',
    'content marketing canada',
    // Other Services
    'shopify development canada',
    'crm development canada',
    'pos system canada',
    'video editing services canada',
    // High-intent buyer keywords
    'hire ai developer canada',
    'hire agentic ai developer canada',
    'hire web developer canada',
    'best tech agency canada',
    'affordable web development canada',
    'digital transformation canada',
    'tech company ottawa ontario',
    'software development company canada',
  ],
  canonical: 'https://www.solvixcore.com'
});

export default function Home() {
  // Structured data for homepage
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.solvixcore.com' }
  ]);

  const servicesOffered = [
    {
      name: 'AI Automation Services',
      description: 'Custom AI implementations and intelligent automation solutions',
      url: 'https://www.solvixcore.com/services/ai-solutions'
    },
    {
      name: 'Web Development Services',
      description: 'Custom websites and web applications built with Next.js',
      url: 'https://www.solvixcore.com/services/web-development'
    },
    {
      name: 'SEO & Digital Marketing',
      description: 'Data-driven marketing strategies and search optimization',
      url: 'https://www.solvixcore.com/services/marketing-seo'
    }
  ];

  const servicesSchema = servicesOffered.map(service => generateServiceSchema(service));

  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI Solutions',
      description: 'Custom AI implementations powered by OpenAI, LangChain, and advanced ML models.',
      image: '/backgrounds/open ai agent sdk.webp',
      link: '/services/ai-solutions'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Custom CRM',
      description: 'Tailored CRM solutions designed specifically for your business workflows.',
      image: '/backgrounds/crm.jpg',
      link: '/services/crm'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'n8n Automation',
      description: 'Workflow automation and integration platform for seamless business processes.',
      image: '/backgrounds/n8n-automate.webp',
      link: '/services/n8n'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Web Development',
      description: 'Custom websites and applications built with modern tech stack.',
      image: '/backgrounds/Website Development.webp',
      link: '/services/web-development'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Content Creation',
      description: 'High-quality content strategy and creation for your brand.',
      image: '/backgrounds/content creation.webp',
      link: '/services/content'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Marketing & SEO',
      description: 'Data-driven marketing strategies and SEO optimization.',
      image: '/backgrounds/digital marketing and seo.webp',
      link: '/services/marketing-seo'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'App Development',
      description: 'Native and cross-platform mobile applications.',
      image: '/backgrounds/app development.webp',
      link: '/services/app-dev'
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {servicesSchema.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0">
          {/* Background gradient effects */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl opacity-0 md:opacity-100" />
          <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          
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
          {/* Premium overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-down space-y-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="block mb-4 silver-gradient">
                Transform Your Business
              </span>
              <span className="block text-foreground">
                with Premium Tech Solutions
              </span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed font-medium">
              Cutting-edge technology solutions including AI, automation, web development, and e-commerce platforms. Let{"'"}s build the future together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <a
                href="/contact"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 rounded-lg font-semibold text-lg inline-flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-primary/50"
              >
                Get Started
                <ArrowRight size={20} />
              </a>
              <Link
                href="/services"
                className="bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Explore Services
              </Link>
            </div>
          </div>

          {/* Floating premium elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-500/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/15 rounded-full blur-3xl animate-bounce-smooth" />
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 animate-fade-in-up glass-premium p-8 md:p-12 rounded-2xl border border-cyan-400/30 shadow-2xl shadow-cyan-500/10 hover:shadow-cyan-500/20 transition-all duration-500">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center border border-cyan-400/30">
                <Shield className="w-7 h-7 text-cyan-400" />
              </div>
              <div className="text-left">
                <p className="text-xs text-foreground/60 font-semibold tracking-wide">Proudly Partnered With</p>
                <h3 className="text-xl md:text-2xl font-bold text-foreground">Lepro Trading Inc</h3>
              </div>
            </div>
            <div className="hidden md:block w-px h-12 bg-cyan-400/20"></div>
            <p className="text-center md:text-left text-foreground/70 max-w-md font-medium">
              Trusted partnership delivering excellence in technology solutions and digital transformation
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 animate-fade-in-up">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 silver-gradient leading-tight">
              Why Choose Solvix Core?
            </h2>
            <p className="text-foreground/50 text-xl max-w-2xl mx-auto leading-relaxed">
              We deliver exceptional results through innovation, expertise, and a commitment to your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: '01',
                title: 'Expert Team',
                description: 'Seasoned professionals with years of experience in cutting-edge technologies.',
              },
              {
                number: '02',
                title: 'Custom Solutions',
                description: 'Tailored services designed specifically for your business needs and goals.',
              },
              {
                number: '03',
                title: 'Premium Quality',
                description: 'Highest standards of code quality, design, and user experience in every project.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="obsidian-card rounded-[--radius] p-8 hover:border-primary/40 transition-all duration-500 transform hover:-translate-y-2 group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl font-black text-primary/20 mb-6 group-hover:text-primary/10 transition-colors duration-500">{item.number}</div>
                <h3 className="text-2xl font-bold text-foreground mb-4 silver-gradient">{item.title}</h3>
                <p className="text-foreground/60 leading-relaxed group-hover:text-foreground/80 transition-colors">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/backgrounds/services.webp"
            alt="Services background"
            fill
            className="object-cover brightness-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 silver-gradient">
              Our Services
            </h2>
            <p className="text-foreground/50 text-xl max-w-2xl mx-auto">
              Comprehensive solutions across all aspects of modern technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="liquid-glass rounded-[--radius] overflow-hidden hover:bg-white/5 transition-all duration-500 group cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                  <div className="absolute bottom-4 left-6 text-primary group-hover:scale-110 transition-transform duration-500 filter drop-shadow-[0_0_8px_rgba(var(--primary),0.3)]">
                    {service.icon}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-foreground/60 mb-6 line-clamp-2">{service.description}</p>
                  <Link
                    href={service.link}
                    className="inline-flex items-center gap-2 text-primary/80 hover:text-primary hover:gap-4 transition-all duration-300 font-bold"
                  >
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-primary/50"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-accent/10 border-y border-border">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            Connect with our team today and discover how we can help you achieve your goals.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-primary/50"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Projects Delivered', icon: <Rocket className="w-8 h-8" /> },
              { number: '98%', label: 'Client Satisfaction', icon: <Award className="w-8 h-8" /> },
              { number: '50+', label: 'Expert Team Members', icon: <Users className="w-8 h-8" /> },
              { number: '24/7', label: 'Support Available', icon: <Shield className="w-8 h-8" /> },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center mb-4 text-primary animate-float">
                  {stat.icon}
                </div>
                <div className="text-5xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Process
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              A proven methodology that ensures success from concept to delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'We analyze your needs, goals, and challenges to create a tailored strategy.',
                icon: <Target className="w-6 h-6" />,
              },
              {
                step: '02',
                title: 'Design',
                description: 'Our team crafts intuitive designs and architectures for optimal user experience.',
                icon: <Palette className="w-6 h-6" />,
              },
              {
                step: '03',
                title: 'Development',
                description: 'We build robust, scalable solutions using cutting-edge technologies.',
                icon: <Code className="w-6 h-6" />,
              },
              {
                step: '04',
                title: 'Delivery',
                description: 'Launch with confidence and ongoing support to ensure continued success.',
                icon: <Rocket className="w-6 h-6" />,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-card border border-border rounded-xl p-8 hover:border-primary transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-primary/10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-primary">{item.icon}</div>
                    <div className="text-3xl font-bold text-primary/30">{item.step}</div>
                  </div>
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

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Technologies We Master
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Leveraging the latest and most powerful tools to build exceptional solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              'Next.js', 'React', 'TypeScript', 'Node.js', 'Python', 'OpenAI',
              'LangChain', 'n8n', 'Shopify', 'Tailwind', 'PostgreSQL', 'MongoDB'
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:shadow-primary/10 animate-scale-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="text-foreground font-semibold">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              What You Get
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Every project comes with our commitment to excellence and your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Scalable Architecture',
                description: 'Built to grow with your business, handling increased demand effortlessly.',
              },
              {
                title: 'Security First',
                description: 'Industry-standard security practices to protect your data and users.',
              },
              {
                title: 'Performance Optimized',
                description: 'Lightning-fast load times and smooth user experiences across all devices.',
              },
              {
                title: 'SEO Ready',
                description: 'Optimized for search engines to maximize your online visibility.',
              },
              {
                title: 'Responsive Design',
                description: 'Perfect experience on desktop, tablet, and mobile devices.',
              },
              {
                title: 'Ongoing Support',
                description: 'Continuous maintenance and updates to keep your solution running smoothly.',
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="flex gap-4 animate-fade-in-left"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-foreground/70">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Pricing and Plans Header */}

      {/* SEO Pricing Section */}


      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20">
        <div className="max-w-4xl mx-auto text-center animate-scale-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Whether you're starting from scratch or looking to enhance your existing platform, we're here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@solvixcore.com"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 rounded-lg font-bold text-lg inline-flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-primary/50"
            >
              Start Your Project <ArrowRight size={20} />
            </a>
            <Link
              href="/about"
              className="border border-primary text-primary hover:bg-primary/10 px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Refund Policy Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Refund Policy
            </h2>
            <p className="text-foreground/70 text-lg">
              Your satisfaction is our priority
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-8 md:p-12 animate-fade-in-up space-y-6">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <p className="text-foreground/80 leading-relaxed">
                    You may request a refund within <span className="font-semibold text-foreground">7 days period</span> of your purchase. To request a refund, contact our support team at{' '}
                    <a
                      href="mailto:refund@advanceproff.com"
                      className="text-primary hover:text-primary/80 font-semibold underline transition-colors duration-300"
                    >
                      info@solvixcore.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <p className="text-foreground/80 leading-relaxed">
                    Refunds are granted at our discretion and may be subject to review. Refunds will be issued via the same method used for the original payment, unless otherwise specified.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <p className="text-foreground/80 leading-relaxed">
                    Certain products or services may not be eligible for refunds. Please email us at{' '}
                    <a
                      href="mailto:refund@advanceproff.com"
                      className="text-primary hover:text-primary/80 font-semibold underline transition-colors duration-300"
                    >
                      info@solvixcore.com
                    </a>
                    {' '}for specific exclusions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <p className="text-foreground/80 leading-relaxed">
                    <span className="font-semibold text-foreground">The processing time:</span> Refunds may take 30-day refund period.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <p className="text-foreground/80 leading-relaxed">
                    If you have questions or need assistance, please contact us at{' '}
                    <a
                      href="mailto:info@advanceproff.com"
                      className="text-primary hover:text-primary/80 font-semibold underline transition-colors duration-300"
                    >
                      info@solvixcore.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
