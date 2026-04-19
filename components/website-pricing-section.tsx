'use client';

import { Check } from 'lucide-react';
import { useCurrency } from '@/contexts/currency-context';

const plans = [
  {
    name: 'Landing Page',
    tiers: [
      {
        label: 'Basic',
        price: 399,
        scope: 'Up to 3 sections',
      },
      {
        label: 'Standard',
        price: 799,
        scope: 'Up to 6 sections',
      },
    ],
    features: [
      'Conversion-focused layout',
      'Mobile-responsive & fast loading',
      '6 Months Maintenance Support',
    ],
  },
  {
    name: 'Business Website',
    tiers: [
      {
        label: 'Standard',
        price: 599,
        scope: 'Up to 10 pages',
      },
      {
        label: 'Advanced',
        price: 1199,
        scope: 'Up to 13 pages',
      },
    ],
    features: [
      'Custom design with clean UI',
      'SEO-friendly structure',
      'Mobile-responsive & optimized',
       '6 Months Maintenance Support',
    ],
    popular: true,
  },
  {
    name: 'E-Commerce Website',
    tiers: [
      {
        label: 'Starter Store',
        price: 799,
        scope: 'Up to 50 products',
      },
      {
        label: 'Growth Store',
        price: 1199,
        scope: 'Up to 100 products',
      },
    ],
    features: [
      'Secure checkout & payment integration',
      'Shopping cart setup',
      'Product management setup',
      'Basic SEO optimization',
      'Mobile-responsive & fast loading',
       '6 Months Maintenance Support',
    ],
  },
];

export default function WebsitePricingSection() {
  const { convertPrice, selectedCountry } = useCurrency();
  
  console.log('WebsitePricingSection rendering with country:', selectedCountry.currency); // Debug log
  
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Custom Website Development</h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto mb-8">
            One-time investment for professional website solutions tailored to your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const minPrice = Math.min(...plan.tiers.map(t => t.price));
            const maxPrice = Math.max(...plan.tiers.map(t => t.price));
            const priceRange = `${convertPrice(minPrice)} - ${convertPrice(maxPrice)}`;
            
            return (
              <div
                key={`${plan.name}-${selectedCountry.code}`}
                className={`bg-card border rounded-xl p-8 transition-all duration-300 hover:shadow-xl animate-scale-in relative ${
                  plan.popular
                    ? 'border-primary shadow-lg shadow-primary/20 scale-105'
                    : 'border-border hover:border-primary/50'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-4">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-foreground">{priceRange}</span>
                  </div>
                  <p className="text-sm text-foreground/60 mt-2">One-time payment</p>
                </div>

                <div className="border-t border-border pt-6 mb-6">
                  <p className="text-foreground/70 font-semibold mb-4">Packages:</p>
                  <ul className="space-y-3 mb-6">
                    {plan.tiers.map((tier) => (
                      <li key={`${plan.name}-${tier.label}`} className="rounded-lg border border-border/60 bg-secondary/20 p-3">
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-foreground font-semibold">{tier.label}</span>
                          <span className="text-primary font-semibold">{convertPrice(tier.price)}</span>
                        </div>
                        <p className="text-sm text-foreground/60 mt-1">{tier.scope}</p>
                      </li>
                    ))}
                  </ul>

                  <p className="text-foreground/70 font-semibold mb-4">Includes:</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={`${plan.name}-${feature}`} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/70">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={`/contact?service=web&plan=${encodeURIComponent(plan.name)}&price=${encodeURIComponent(priceRange)}`}
                  className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                    plan.popular
                      ? 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl hover:shadow-primary/50'
                      : 'bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30'
                  }`}
                >
                  Get Started
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
