'use client';

import { Check } from 'lucide-react';
import { useCurrency } from '@/contexts/currency-context';

export default function AppPricingSection() {
  const { convertPrice, selectedCountry } = useCurrency();
  
  const plans = [
    {
      name: 'Mobile App MVP',
      price: 2999,
      subtitle: 'Launch your app idea quickly',
      features: [
        'iOS or Android (single platform)',
        'Up to 5 core features',
        'Basic UI/UX design',
        'API integration',
        'App store deployment',
        '60 days support',
      ],
    },
    {
      name: 'Cross-Platform App',
      price: 5499,
      subtitle: 'Reach both iOS & Android users',
      features: [
        'iOS & Android apps',
        'Up to 10 features',
        'Custom UI/UX design',
        'Backend development',
        'Push notifications',
        'Analytics integration',
        'App store deployment',
        '90 days support',
      ],
      popular: true,
    },
    {
      name: 'Enterprise App',
      price: 9999,
      priceLabel: '+',
      subtitle: 'Full-featured enterprise solution',
      features: [
        'iOS & Android apps',
        'Unlimited features',
        'Premium UI/UX design',
        'Advanced backend & APIs',
        'Real-time features',
        'Third-party integrations',
        'Admin dashboard',
        'App store optimization',
        '1 year support & maintenance',
      ],
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            App Development Pricing
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto mb-8">
            Professional mobile apps at 35% below market rates
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={`${index}-${selectedCountry.code}`}
              className={`bg-card border rounded-xl p-8 transition-all duration-300 hover:shadow-xl animate-scale-in relative ${plan.popular
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
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-sm text-foreground/60 mb-4">{plan.subtitle}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-foreground">
                    {convertPrice(plan.price)}{plan.priceLabel || ''}
                  </span>
                </div>
                <p className="text-sm text-foreground/60 mt-2">One-time investment</p>
              </div>

              <div className="border-t border-border pt-6 mb-6">
                <p className="text-foreground/70 font-semibold mb-4">Includes:</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/70">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={`/contact?service=app&plan=${encodeURIComponent(plan.name)}&price=${encodeURIComponent(convertPrice(plan.price))}`}
                className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${plan.popular
                    ? 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl hover:shadow-primary/50'
                    : 'bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30'
                  }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
