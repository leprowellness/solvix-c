import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import AppPricingSection from '@/components/app-pricing-section';
import Link from 'next/link';
import { ArrowRight, Smartphone, CheckCircle } from 'lucide-react';
import Image from 'next/image';

import { generateMetadata as genMeta, generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/seo-utils';
import { seoKeywords } from '@/lib/seo-keywords';

export const metadata = genMeta({
  title: 'Mobile App Development Canada | iOS & Android Apps | Solvix Core',
  description: 'Professional mobile app development company in Canada. Custom iOS, Android, and cross-platform app development. Native and hybrid mobile solutions for startups and enterprises across Canada.',
  keywords: [
    seoKeywords.canada.appDevelopment.primary,
    ...seoKeywords.canada.appDevelopment.secondary,
    ...seoKeywords.global.appDevelopment.secondary,
    ...seoKeywords.canada.appDevelopment.semantic,
    ...seoKeywords.global.appDevelopment.semantic
  ],
  canonical: 'https://solvixcore.com/services/app-dev'
});

export default function AppDevService() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://solvixcore.com' },
    { name: 'Services', url: 'https://solvixcore.com/services' },
    { name: 'App Development', url: 'https://solvixcore.com/services/app-dev' }
  ]);

  const serviceSchema = generateServiceSchema({
    name: 'Mobile App Development Services',
    description: 'Custom iOS, Android, and cross-platform mobile app development for businesses across Canada',
    url: 'https://solvixcore.com/services/app-dev'
  });

  const faqSchema = generateFAQSchema([
    {
      question: 'What mobile app development services do you offer?',
      answer: 'We offer native iOS development, Android app development, cross-platform solutions with React Native and Flutter, backend development, app maintenance, and app store publishing services.'
    },
    {
      question: 'How long does it take to develop a mobile app?',
      answer: 'Development time varies based on complexity. Simple apps take 2-3 months, while complex enterprise apps may take 6-12 months. We provide detailed timelines during consultation.'
    },
    {
      question: 'Do you develop apps for both iOS and Android?',
      answer: 'Yes, we develop native apps for both iOS and Android, as well as cross-platform solutions that work on both platforms from a single codebase.'
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
            src="/backgrounds/app development.webp"
            alt="App Development"
            fill
            className="object-cover brightness-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/50 to-background" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-down space-y-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/20 rounded-full mb-4">
              <Smartphone className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              <span className="text-primary">App</span> Development
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Native iOS and Android apps, plus cross-platform solutions. Build powerful mobile applications that your users will love.
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
              <h2 className="text-4xl font-bold text-foreground mb-6">Why Mobile Apps Matter?</h2>
              <div className="space-y-4">
                {[
                  'Reach users on the go with native performance',
                  'Offline functionality and enhanced user experience',
                  'Access to device features like GPS and camera',
                  'Cross-platform solutions for maximum reach',
                  'App store presence and discoverability',
                  'Push notifications for user engagement',
                  'Analytics and user behavior tracking',
                  'Monetization opportunities and revenue streams',
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
                src="/backgrounds/app development.webp"
                alt="App Development"
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
            <h2 className="text-4xl font-bold text-foreground mb-4">Our App Solutions</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'iOS Development',
                description: 'Native Swift applications for iPhone, iPad, and Apple Watch.',
              },
              {
                title: 'Android Development',
                description: 'High-performance Android apps for all devices and versions.',
              },
              {
                title: 'Cross-Platform Apps',
                description: 'Single codebase for iOS and Android with React Native or Flutter.',
              },
              {
                title: 'Backend Development',
                description: 'Robust server infrastructure and APIs powering your apps.',
              },
              {
                title: 'App Maintenance',
                description: 'Ongoing support, updates, and optimization for your applications.',
              },
              {
                title: 'App Publishing',
                description: 'App Store and Play Store submission and optimization services.',
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
            Launch Your Mobile App Today
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            Let{"'"}s build an app that users love and engage with daily.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-primary/50"
          >
            Start Development
          </Link>
        </div>
      </section>

      {/* App Pricing Section */}
      <AppPricingSection />

      <Footer />
    </div>
  );
}
