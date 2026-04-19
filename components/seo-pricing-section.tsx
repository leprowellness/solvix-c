'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';
import { useCurrency } from '@/contexts/currency-context';

export default function SEOPricingSection() {
  const [isYearly, setIsYearly] = useState(false);
  const { convertPrice, selectedCountry } = useCurrency();

  const plans = [
    {
      name: 'Starter',
      subtitle: 'Best for small businesses getting started with SEO',
      monthlyPrice: 599,
      yearlyPrice: 5999,
      features: [
        'Google Analytics integration',
        'Google Search Console integration',
        'Keyword research (4-6 keywords per month)',
        'Technical SEO',
        'Schema markup optimization',
        'Canonical tags integration',
        'On-page SEO (up to 1 page)',
        'Title and description optimization',
        'XML sitemap creation',
        '4 blogs creation per month',
        '20 Backlinks Creation / Citations',
        'Internal Linking between blogs',
        'Initial Audit Report',
        'Monthly performance report',
        'SEO Support',
      ],
    },
    {
      name: 'Growth',
      subtitle: 'Ideal for scaling businesses and competitive niches',
      monthlyPrice: 999,
      yearlyPrice: 9999,
      features: [
        'Google Analytics integration',
        'Google Search Console integration',
        'Keyword research (12-15 keywords per month)',
        'Technical SEO',
        'Schema markup optimization',
        'Canonical tags integration',
        'On-page SEO (up to 6 pages)',
        'Title and description optimization',
        'XML sitemap creation',
        'Robots.txt creation',
        '6 blog posts per month',
        'Competitor analysis',
        '6 Article posting/submission',
        '2 Guest posting',
        '40 Backlinks Creation',
        'Initial Audit Report',
        'Monthly performance report',
        'SEO Support',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      subtitle: 'Built for high-competition, enterprise-level websites',
      monthlyPrice: 1799,
      monthlyPriceMax: 2499,
      yearlyPrice: 17999,
      yearlyPriceMax: 24999,
      features: [
        'Google Analytics integration',
        'Google Search Console integration',
        'Conversion tracking',
        'Keyword research (30-60 keywords)',
        'Technical SEO audit',
        'Product schema optimization',
        'Business schema optimization',
        'Canonical tags integration',
        'On-page SEO (up to 50 pages)',
        'Title and description optimization',
        'XML sitemap creation',
        'Robots.txt creation',
        '8 blog posts per month',
        'Competitor analysis',
        '8 Article posting/submission',
        '4 Guest posting',
        '60 Backlinks Creation',
        'Initial Audit Report',
        'Monthly performance report',
        'SEO Support',
      ],
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            SEO Pricing Plans
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto mb-8">
            Comprehensive SEO solutions to boost your search rankings and organic traffic
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
                Save 17%
              </span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const displayPrice = isYearly ? Math.floor(plan.yearlyPrice / 12) : plan.monthlyPrice;
            const displayPriceMax = plan.monthlyPriceMax ? (isYearly ? Math.floor(plan.yearlyPriceMax! / 12) : plan.monthlyPriceMax) : null;
            
            return (
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
                      {displayPriceMax 
                        ? `${convertPrice(displayPrice)}-${convertPrice(displayPriceMax)}`
                        : convertPrice(displayPrice)
                      }
                    </span>
                    <span className="text-foreground/60 text-lg">/mo</span>
                  </div>
                  {isYearly && (
                    <p className="text-sm text-primary mt-2 font-medium">
                      Billed {displayPriceMax 
                        ? `${convertPrice(plan.yearlyPrice)}-${convertPrice(plan.yearlyPriceMax!)}` 
                        : convertPrice(plan.yearlyPrice)
                      } yearly
                    </p>
                  )}
                </div>

                <div className="border-t border-border pt-6 mb-6">
                  <p className="text-foreground/70 font-semibold mb-4">Includes:</p>
                  <ul className="space-y-3 max-h-96 overflow-y-auto pr-2">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/70 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={`/contact?service=seo&plan=${encodeURIComponent(plan.name)}&price=${encodeURIComponent(convertPrice(displayPrice))}`}
                  className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${plan.popular
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
