'use client';

import { Check } from 'lucide-react';
import { useCurrency } from '@/contexts/currency-context';

export default function POSPricingSection() {
  const { convertPrice, selectedCountry } = useCurrency();

  const plans = [
    {
      name: 'Starter',
      price: 1499,
      subtitle: 'Perfect for small retail stores',
      features: [
        'Single terminal setup',
        'Basic inventory management',
        'Sales reporting & analytics',
        'Customer database',
        'Payment processing integration',
        'Email support',
        'Cloud-based system',
        'Mobile app access',
      ],
    },
    {
      name: 'Professional',
      price: 2999,
      subtitle: 'Ideal for growing businesses',
      features: [
        'Up to 5 terminals',
        'Advanced inventory management',
        'Multi-location support',
        'Employee management',
        'Custom reporting & analytics',
        'Loyalty program integration',
        'Priority support',
        'API access',
        'Barcode scanning',
        'Receipt customization',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 5999,
      priceLabel: 'Starting at',
      subtitle: 'For large-scale operations',
      features: [
        'Unlimited terminals',
        'Enterprise inventory system',
        'Multi-store management',
        'Advanced analytics & BI',
        'Custom integrations',
        'Dedicated account manager',
        '24/7 premium support',
        'Custom training',
        'White-label options',
        'Advanced security features',
        'Custom workflows',
        'API & webhook support',
      ],
    },
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-0" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Point of Sale Solutions
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Complete POS systems tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={`${plan.name}-${selectedCountry.code}`}
              className={`bg-card border rounded-xl p-8 transition-all duration-300 hover:shadow-xl relative ${
                plan.popular
                  ? 'border-primary shadow-lg shadow-primary/20 md:scale-105'
                  : 'border-border hover:border-primary/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-sm text-foreground/60 mb-4">{plan.subtitle}</p>
                <div className="mb-4">
                  {plan.priceLabel && (
                    <span className="text-sm text-foreground/60 block mb-1">
                      {plan.priceLabel}
                    </span>
                  )}
                  <span className="text-4xl font-bold text-foreground">
                    {convertPrice(plan.price)}
                  </span>
                  {plan.priceLabel && <span className="text-foreground/60">+</span>}
                </div>
              </div>

              <div className="border-t border-border pt-6 mb-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/70">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={`/contact?service=pos&plan=${encodeURIComponent(plan.name)}`}
                className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                  plan.popular
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
