'use client';

import { Check } from 'lucide-react';

export default function VideoPricingSection() {
  const plans = [
    {
      name: 'Video Editing',
      price: '$750/month',
      subtitle: '10 high-quality short videos (up to 30 seconds each)',
      features: [
        'Optimized for Instagram Reels, TikTok, YouTube Shorts',
        'Extra videos: $150 per video',
        'Videos over 30 seconds will be counted as 2 videos',
        'Smooth cuts',
        'Captions & basic motion',
        'Platform-ready formats',
      ],
    },
    {
      name: 'Advanced Editing',
      price: '$188 – $900/video',
      subtitle: '(Upto 5 mins video)',
      description: 'Videos up to 5 minutes',
      features: [
        'Ideal for ads, brand videos, YouTube content, promos',
        'Premium editing with transitions, effects, and sound design',
        'Custom Motion Graphics',
      ],
      popular: true,
    },
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/backgrounds/video editing (2).webp"
          alt="Video Editing background"
          className="w-full h-full object-cover brightness-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Video Editing Pricing
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto mb-8">
            Professional video editing services to elevate your content and engage your audience
          </p>
          <p className="text-primary font-semibold text-sm mb-8">All prices in CAD (Canadian Dollars)</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-card border rounded-xl p-8 transition-all duration-300 hover:shadow-xl animate-scale-in relative ${plan.popular
                  ? 'border-primary shadow-lg shadow-primary/20 md:scale-105'
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
                <div className="mb-3">
                  <span className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                </div>
                <p className="text-sm text-foreground/70 font-medium mb-2">{plan.subtitle}</p>
                {plan.description && (
                  <p className="text-sm text-foreground/60">{plan.description}</p>
                )}
              </div>

              <div className="border-t border-border pt-6 mb-6">
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
                href={`/contact?service=video&plan=${encodeURIComponent(plan.name)}&price=${encodeURIComponent(plan.price)}`}
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
