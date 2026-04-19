'use client';

import { Check } from 'lucide-react';
import { useCurrency } from '@/contexts/currency-context';

export default function CRMPricingSection() {
  const { convertPrice, selectedCountry } = useCurrency();
  
  const plans = [
    {
      name: 'Starter CRM',
      price: 1999,
      subtitle: 'Perfect for small businesses starting with CRM',
      features: [
        'Basic contact management',
        'Lead tracking system',
        'Email integration',
        'Simple reporting dashboard',
        'Up to 3 users',
        'Mobile responsive',
        'Basic automation (5 workflows)',
        '30 days support',
      ],
    },
    {
      name: 'Professional CRM',
      price: 4999,
      subtitle: 'Advanced CRM for growing businesses',
      features: [
        'Everything in Starter',
        'Advanced contact management',
        'Sales pipeline management',
        'Custom fields & modules',
        'Up to 10 users',
        'Advanced reporting & analytics',
        'Workflow automation (20 workflows)',
        'Email marketing integration',
        'Calendar & task management',
        'Document management',
        'API access',
        '90 days support',
      ],
      popular: true,
    },
    {
      name: 'Enterprise CRM',
      price: 9999,
      subtitle: 'Complete CRM solution for large organizations',
      features: [
        'Everything in Professional',
        'Unlimited users',
        'Custom module development',
        'Advanced AI automation',
        'Multi-department workflows',
        'Custom integrations (unlimited)',
        'Advanced security & permissions',
        'White-label options',
        'Custom reporting engine',
        'Dedicated account manager',
        'Priority support (24/7)',
        '1 year support & maintenance',
        'Training sessions included',
      ],
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            CRM Development Pricing
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto mb-8">
            Custom CRM solutions tailored to your business needs. One-time investment, lifetime value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={`${index}-${selectedCountry.code}`}
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
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-sm text-foreground/60 mb-4">{plan.subtitle}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-foreground">
                    {convertPrice(plan.price)}
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
                href={`/contact?service=crm&plan=${encodeURIComponent(plan.name)}&price=${encodeURIComponent(convertPrice(plan.price))}`}
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
