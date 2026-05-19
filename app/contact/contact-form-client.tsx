'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { toast } from 'sonner';
import {
  Send, User, Mail, Phone, Building2, Globe, MessageSquare,
  Briefcase, DollarSign, Clock, Layers, Code2, Users, FileText,
  CheckCircle, ArrowRight, MapPin, Zap, Brain, Smartphone
} from 'lucide-react';

const services = [
  'AI Solutions',
  'Agentic AI Development',
  'LangChain Integration',
  'OpenAI Agent SDK',
  'n8n Automation',
  'Web Development',
  'App Development',
  'Shopify Store Design',
  'Marketing & SEO',
  'Custom CRM',
  'POS System',
  'Content Creation',
  'Other',
];

const projectTypes = [
  'New Project',
  'Existing Project Enhancement',
  'Consultation',
  'Maintenance & Support',
  'MVP Development',
  'Enterprise Solution',
];

const budgetRanges = [
  'Under $1,000',
  '$1,000 - $5,000',
  '$5,000 - $10,000',
  '$10,000 - $25,000',
  '$25,000 - $50,000',
  '$50,000+',
  'Not Sure Yet',
];

const timelines = [
  'ASAP (1-2 weeks)',
  'Soon (1 month)',
  'Flexible (2-3 months)',
  '3-6 months',
  '6+ months',
  'Not Sure',
];

const projectStages = [
  'Idea Phase',
  'Early Stage',
  'MVP Ready',
  'Scaling',
  'Other',
];

const teamSizes = [
  'Just Me',
  '2-5 people',
  '6-20 people',
  '21-50 people',
  '50+ people',
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  country: string;
  whatsappNumber: string;
  service: string;
  projectType: string;
  projectDescription: string;
  budget: string;
  timeline: string;
  projectStage: string;
  technologies: string;
  teamSize: string;
  additionalNotes: string;
  message: string;
}

const initialForm: FormData = {
  name: '',
  email: '',
  phone: '',
  company: '',
  country: '',
  whatsappNumber: '',
  service: '',
  projectType: '',
  projectDescription: '',
  budget: '',
  timeline: '',
  projectStage: '',
  technologies: '',
  teamSize: '',
  additionalNotes: '',
  message: '',
};

export default function ContactFormClient() {
  const searchParams = useSearchParams();
  const [form, setForm] = useState<FormData>(initialForm);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Auto-fill service from URL param (e.g. /contact?service=ai-solutions)
  useEffect(() => {
    const serviceParam = searchParams.get('service');
    if (serviceParam) {
      const match = services.find(
        (s) => s.toLowerCase().replace(/\s+/g, '-') === serviceParam.toLowerCase()
      );
      if (match) setForm((prev) => ({ ...prev, service: match }));
    }

    // Auto-fill country from localStorage
    const stored = localStorage.getItem('selectedCountry');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (parsed?.name) setForm((prev) => ({ ...prev, country: parsed.name }));
      } catch {}
    }
  }, [searchParams]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setSubmitted(true);
        setForm(initialForm);
        toast.success('Message sent! We\'ll get back to you within 24 hours.');
      } else {
        toast.error(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      toast.error('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    'w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary transition-colors duration-200';
  const selectClass =
    'w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors duration-200 appearance-none cursor-pointer';
  const labelClass = 'block text-sm font-semibold text-foreground/80 mb-2';

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-purple-500/8 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-down space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm text-primary font-medium mb-4">
              <Zap className="w-4 h-4" />
              Free Consultation — No Commitment
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Let&apos;s Build Something{' '}
              <span className="silver-gradient">Amazing</span>
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Tell us about your project and we&apos;ll get back to you within 24 hours with a custom plan.
            </p>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 max-w-lg mx-auto">
            {[
              { icon: <CheckCircle className="w-5 h-5" />, label: '24hr Response' },
              { icon: <Brain className="w-5 h-5" />, label: 'Free Consultation' },
              { icon: <Smartphone className="w-5 h-5" />, label: '500+ Projects' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2 text-primary/80">
                {item.icon}
                <span className="text-xs font-medium text-foreground/60">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="obsidian-card rounded-[--radius] p-6 border border-border">
              <h3 className="text-lg font-bold text-foreground mb-4">Contact Info</h3>
              <div className="space-y-4">
                <a
                  href="mailto:info@solvixcore.com"
                  className="flex items-center gap-3 text-foreground/70 hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm">info@solvixcore.com</span>
                </a>
                <div className="flex items-center gap-3 text-foreground/70">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm">Ottawa, Ontario, Canada</span>
                </div>
                <div className="flex items-center gap-3 text-foreground/70">
                  <Globe className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm">Serving clients globally</span>
                </div>
              </div>
            </div>

            <div className="obsidian-card rounded-[--radius] p-6 border border-border">
              <h3 className="text-lg font-bold text-foreground mb-4">What We Offer</h3>
              <div className="space-y-3">
                {[
                  { icon: <Brain className="w-4 h-4" />, label: 'Agentic AI Development' },
                  { icon: <Zap className="w-4 h-4" />, label: 'n8n Automation' },
                  { icon: <Code2 className="w-4 h-4" />, label: 'Web Development' },
                  { icon: <Smartphone className="w-4 h-4" />, label: 'App Development' },
                  { icon: <Briefcase className="w-4 h-4" />, label: 'Custom CRM & POS' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-foreground/70">
                    <span className="text-primary">{item.icon}</span>
                    <span className="text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="obsidian-card rounded-[--radius] p-6 border border-primary/20 bg-primary/5">
              <h3 className="text-lg font-bold text-foreground mb-2">Response Time</h3>
              <p className="text-foreground/60 text-sm">
                We respond to all inquiries within <span className="text-primary font-semibold">24 hours</span>. For urgent projects, mention it in your message.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="obsidian-card rounded-[--radius] p-12 border border-primary/30 text-center animate-scale-in">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Message Sent!</h2>
                <p className="text-foreground/70 text-lg mb-8">
                  Thanks for reaching out. We&apos;ll review your project details and get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Send Another Message <ArrowRight size={18} />
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="obsidian-card rounded-[--radius] p-8 border border-border space-y-8">

                {/* Section 1: Basic Info */}
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <User className="w-5 h-5 text-primary" />
                    Your Information
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        required
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        required
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        required
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>WhatsApp Number</label>
                      <input
                        type="tel"
                        name="whatsappNumber"
                        value={form.whatsappNumber}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Company / Organization</label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Acme Inc."
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Country *</label>
                      <input
                        type="text"
                        name="country"
                        value={form.country}
                        onChange={handleChange}
                        placeholder="Canada"
                        required
                        className={inputClass}
                      />
                    </div>
                  </div>
                </div>

                {/* Section 2: Project Details */}
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-primary" />
                    Project Details
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>Service Needed *</label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        required
                        className={selectClass}
                      >
                        <option value="">Select a service...</option>
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Project Type *</label>
                      <select
                        name="projectType"
                        value={form.projectType}
                        onChange={handleChange}
                        required
                        className={selectClass}
                      >
                        <option value="">Select type...</option>
                        {projectTypes.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Project Stage *</label>
                      <select
                        name="projectStage"
                        value={form.projectStage}
                        onChange={handleChange}
                        required
                        className={selectClass}
                      >
                        <option value="">Select stage...</option>
                        {projectStages.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Team Size</label>
                      <select
                        name="teamSize"
                        value={form.teamSize}
                        onChange={handleChange}
                        className={selectClass}
                      >
                        <option value="">Select team size...</option>
                        {teamSizes.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label className={labelClass}>Project Description *</label>
                      <textarea
                        name="projectDescription"
                        value={form.projectDescription}
                        onChange={handleChange}
                        placeholder="Describe your project — what it does, who it's for, and what problem it solves..."
                        required
                        rows={4}
                        className={inputClass}
                      />
                    </div>
                  </div>
                </div>

                {/* Section 3: Scope & Budget */}
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-primary" />
                    Scope & Budget
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>Budget Range *</label>
                      <select
                        name="budget"
                        value={form.budget}
                        onChange={handleChange}
                        required
                        className={selectClass}
                      >
                        <option value="">Select budget...</option>
                        {budgetRanges.map((b) => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Timeline *</label>
                      <select
                        name="timeline"
                        value={form.timeline}
                        onChange={handleChange}
                        required
                        className={selectClass}
                      >
                        <option value="">Select timeline...</option>
                        {timelines.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label className={labelClass}>Technologies / Preferences</label>
                      <input
                        type="text"
                        name="technologies"
                        value={form.technologies}
                        onChange={handleChange}
                        placeholder="e.g. React, Next.js, OpenAI, n8n, Python..."
                        className={inputClass}
                      />
                    </div>
                  </div>
                </div>

                {/* Section 4: Message */}
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-primary" />
                    Your Message
                  </h2>
                  <div className="space-y-5">
                    <div>
                      <label className={labelClass}>Message *</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Anything else you'd like us to know? Goals, challenges, inspiration..."
                        required
                        rows={4}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Additional Notes</label>
                      <textarea
                        name="additionalNotes"
                        value={form.additionalNotes}
                        onChange={handleChange}
                        placeholder="References, links, special requirements..."
                        rows={3}
                        className={inputClass}
                      />
                    </div>
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg inline-flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.02] shadow-xl hover:shadow-2xl hover:shadow-primary/40"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={20} />
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-foreground/40">
                  By submitting this form you agree to our privacy policy. We never share your data.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
