import { Metadata } from 'next';
import { generateMetadata as genMeta, generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/seo-utils';
import POSPricingSection from '@/components/pos-pricing-section';
import { Store, BarChart3, Users, CreditCard, Package, Shield } from 'lucide-react';

export const metadata = genMeta({
  title: 'Point of Sale (POS) Solutions Canada | AI-Powered Retail & Restaurant POS | Solvix Core',
  description: 'Custom AI-powered POS systems for retail, restaurant and hospitality businesses in Canada. Cloud-based POS, inventory management, payment processing, multi-store management, and real-time analytics.',
  keywords: [
    'pos system canada',
    'point of sale software canada',
    'retail pos system canada',
    'restaurant pos system canada',
    'cloud pos system',
    'ai powered pos system canada',
    'hospitality pos solution',
    'pos software development canada',
    'multi-store pos management',
    'payment processing pos canada',
    'inventory management system canada',
    'retail management software canada',
    'pos system development',
    'custom pos solution',
    'ipad pos system canada',
    'pos integration services',
    'small business pos canada',
    'enterprise pos system',
    'pos analytics dashboard',
    'smart pos system 2026',
  ],
  canonical: 'https://www.solvixcore.com/services/pos'
});

export default function POSPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.solvixcore.com' },
    { name: 'Services', url: 'https://www.solvixcore.com/services' },
    { name: 'POS Solutions', url: 'https://www.solvixcore.com/services/pos' }
  ]);

  const serviceSchema = generateServiceSchema({
    name: 'Point of Sale (POS) Systems & Solutions',
    description: 'Professional POS system development, multi-store management, inventory tracking, and payment processing for retail and hospitality businesses',
    url: 'https://www.solvixcore.com/services/pos'
  });

  const faqSchema = generateFAQSchema([
    {
      question: 'What is a Point of Sale (POS) system?',
      answer: 'A POS system is software and hardware that processes sales transactions, manages inventory, tracks customer data, and generates business analytics for retail and hospitality businesses.'
    },
    {
      question: 'Can your POS system handle multiple store locations?',
      answer: 'Yes, our POS systems support multi-store management with real-time synchronization of inventory, sales data, and reporting across all locations from a single dashboard.'
    },
    {
      question: 'What payment methods does your POS system accept?',
      answer: 'Our POS systems accept all major payment methods including credit cards, debit cards, mobile payments, contactless payments, cash, and gift cards.'
    }
  ]);
  const features = [
    {
      icon: Store,
      title: 'Multi-Store Management',
      description: 'Manage multiple locations from a single dashboard with real-time synchronization.',
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Get detailed insights into sales, inventory, and customer behavior.',
    },
    {
      icon: Users,
      title: 'Customer Management',
      description: 'Build customer profiles, track purchase history, and run loyalty programs.',
    },
    {
      icon: CreditCard,
      title: 'Payment Processing',
      description: 'Accept all major payment methods including cards, mobile payments, and contactless.',
    },
    {
      icon: Package,
      title: 'Inventory Control',
      description: 'Track stock levels, automate reordering, and manage suppliers efficiently.',
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with cloud backup and 99.9% uptime guarantee.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Point of Sale Solutions
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto mb-8">
            Transform your retail or hospitality business with our comprehensive POS systems. 
            Streamline operations, boost sales, and deliver exceptional customer experiences.
          </p>
          <a
            href="/contact?service=pos"
            className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Get Started Today
          </a>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Everything You Need to Run Your Business
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Our POS solutions come packed with features designed to help you succeed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-foreground/70">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Why Choose Our POS System?
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Easy to Use</h3>
                    <p className="text-foreground/70">Intuitive interface that your staff can learn in minutes</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Cloud-Based</h3>
                    <p className="text-foreground/70">Access your data anywhere, anytime with automatic backups</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Scalable</h3>
                    <p className="text-foreground/70">Grows with your business from single store to enterprise</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">24/7 Support</h3>
                    <p className="text-foreground/70">Expert support team ready to help whenever you need</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Perfect For:</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-foreground/70">Retail Stores</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-foreground/70">Restaurants & Cafes</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-foreground/70">Salons & Spas</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-foreground/70">Grocery Stores</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-foreground/70">Fashion Boutiques</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-foreground/70">Electronics Stores</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <POSPricingSection />

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Upgrade Your Business?
          </h2>
          <p className="text-xl text-foreground/70 mb-8">
            Join thousands of businesses that trust our POS solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact?service=pos"
              className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Request a Demo
            </a>
            <a
              href="/contact"
              className="inline-block bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              View All Pricing
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
