'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';
import { useCurrency } from '@/contexts/currency-context';

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);
  const { convertPrice, selectedCountry } = useCurrency();

  const plans = [
    {
      name: 'Standard',
      monthlyPrice: 49,
      yearlyPrice: 499,
      subtitle: 'Perfect for small businesses',
      features: [
        '10 Posts per month',
        'Post Every 3 days',
        'Facebook & Instagram',
        'Tiktok & X (Twitter)',
        'Google My Business',
        'LinkedIn',
        'Custom-Tailored Content',
        'Captions & Hashtags',
        'Personal Dashboard',
        '2 Monthly Revisions',
        '9 - 5 Digital Support (EST)',
      ],
    },
    {
      name: 'Professional',
      monthlyPrice: 79,
      yearlyPrice: 799,
      subtitle: 'Most popular for growing brands',
      features: [
        '15 Posts per month',
        'Post Every 2 days',
        'Facebook & Instagram',
        'Tiktok & X (Twitter)',
        'Google My Business',
        'LinkedIn',
        'Custom-Tailored Content',
        'Captions & Hashtags',
        'Personal Dashboard',
        '2 Monthly Revisions',
        '9 - 5 Digital Support (EST)',
        'AI Content Creation',
      ],
      popular: true,
    },
    {
      name: 'Premium',
      monthlyPrice: 129,
      yearlyPrice: 1299,
      subtitle: 'Complete social media management',
      features: [
        '30 Posts per month',
        'Post Everyday',
        'Facebook & Instagram',
        'Tiktok & X (Twitter)',
        'Google My Business',
        'LinkedIn',
        'Custom-Tailored Content',
        'Captions & Hashtags',
        'Personal Dashboard',
        '2 Monthly Revisions',
        '9 - 5 Digital Support (EST)',
        'Weekly Social Media Videos',
        'AI Content Creation',
        'Access To Social Media Reports',
      ],
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Social Media Marketing Plans
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto mb-8">
            Comprehensive social media management to grow your brand and engage your audience
          </p>

          {/* Toggle Switch */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`text-sm font-semibold transition-colors ${!isYearly ? 'text-primary' : 'text-foreground/60'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-14 h-7 rounded-full transition-colors ${isYearly ? 'bg-primary' : 'bg-border'}`}
            >
              <div
                className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform duration-300 ${isYearly ? 'translate-x-7' : 'translate-x-0'}`}
              />
            </button>
            <span className={`text-sm font-semibold transition-colors ${isYearly ? 'text-primary' : 'text-foreground/60'}`}>
              Yearly
              <span className="ml-2 text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </span>
          </div>
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
                    {convertPrice(isYearly ? Math.floor(plan.yearlyPrice / 12) : plan.monthlyPrice)}
                  </span>
                  <span className="text-foreground/60 text-lg">/mo</span>
                </div>
                {isYearly && (
                  <p className="text-sm text-primary mt-2 font-medium">
                    Billed {convertPrice(plan.yearlyPrice)} yearly
                  </p>
                )}
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
                href={`/contact?service=marketing&plan=${encodeURIComponent(plan.name)}&price=${encodeURIComponent(convertPrice(isYearly ? Math.floor(plan.yearlyPrice / 12) : plan.monthlyPrice))}`}
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
