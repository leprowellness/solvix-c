'use client';

import React, { useState } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2, Globe } from 'lucide-react';
import Image from 'next/image';
import { toast } from 'sonner';
import { useLoader } from '@/hooks/use-loader';
import { FullscreenLoader } from '@/components/loaders';
import { getCountries, getCurrencySymbol } from '@/lib/countryCurrencyMap';

function ContactForm() {
  const { show: showLoader, hide: hideLoader, isVisible, message, progress } = useLoader();
  const countries = getCountries();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
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
    country: '',
    whatsappNumber: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [currencySymbol, setCurrencySymbol] = useState('$');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Update currency symbol when country changes
    if (name === 'country') {
      setCurrencySymbol(getCurrencySymbol(value));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    showLoader('Submitting your inquiry...');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        hideLoader();
        setSubmitted(true);
        toast.success('Project inquiry submitted successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
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
          country: '',
          whatsappNumber: '',
        });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        hideLoader();
        toast.error(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      hideLoader();
      console.error('Error submitting form:', error);
      toast.error('An error occurred. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <section className="py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-6 flex justify-center">
              <CheckCircle2 className="w-16 h-16 text-green-500 animate-bounce" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Thank You! 🎉
            </h1>
            <p className="text-lg text-foreground/70 mb-6">
              We've received your project inquiry successfully. Our team will review your details and contact you within 24 hours.
            </p>
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6 mb-8">
              <p className="text-foreground/80">
                <strong>What happens next:</strong><br/>
                ✓ Our team reviews your project requirements<br/>
                ✓ We'll reach out via email or phone to discuss details<br/>
                ✓ We'll provide a customized proposal and timeline
              </p>
            </div>
            <a
              href="/"
              className="inline-block px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-bold transition-all"
            >
              Back to Home
            </a>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 pt-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-contact.jpg"
            alt=""
            fill
            className="object-cover brightness-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="animate-fade-in-down space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Start Your <span className="text-primary">Project Today</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
              Tell us about your vision. We'll transform it into reality with cutting-edge technology and expert guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Mail className="w-8 h-8" />,
                title: 'Email',
                content: 'info@solvixcore.com',
              },
              {
                icon: <Phone className="w-8 h-8" />,
                title: 'WhatsApp',
                content: '+1 (437) 889-8265',
              },
              {
                icon: <MapPin className="w-8 h-8" />,
                title: 'Address',
                content: 'Suite 104 - 2 Gurdwara Road, Ottawa, ON K2E 1A2, Canada',
              },
            ].map((info, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-8 hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-primary mb-4">{info.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-2">{info.title}</h3>
                <p className="text-foreground/70">{info.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-foreground mb-4">Project Inquiry Form</h2>
            <p className="text-foreground/70 text-lg">
              Help us understand your project better so we can provide the best solution.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-card border border-border rounded-2xl p-8 md:p-12 animate-fade-in-up space-y-8"
          >
            {/* Section 1: Basic Information */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6 pb-3 border-b border-border/30">
                Basic Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-foreground font-semibold mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary transition-colors duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-foreground font-semibold mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-foreground font-semibold mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary transition-colors duration-300"
                    placeholder="+1 (437) 889-8265"
                  />
                </div>
                <div>
                  <label className="block text-foreground font-semibold mb-2">
                    Company Name (Optional)
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary transition-colors duration-300"
                    placeholder="Your Company Inc."
                  />
                </div>
              </div>

              {/* Section 2: Country & WhatsApp */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6 pb-3 border-b border-border/30">
                  Location & Messaging
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-foreground font-semibold mb-2">
                      Country <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors duration-300"
                    >
                      <option value="">Select your country</option>
                      {countries.map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-foreground font-semibold mb-2">
                      WhatsApp Number (Optional)
                    </label>
                    <input
                      type="tel"
                      name="whatsappNumber"
                      value={formData.whatsappNumber}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary transition-colors duration-300"
                      placeholder="+1 (437) 889-8265"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: Project Details */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6 pb-3 border-b border-border/30">
                Project Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-foreground font-semibold mb-2">
                    Service Interested In <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors duration-300"
                  >
                    <option value="">Select a service</option>
                    <option value="web">Website Development</option>
                    <option value="app">Mobile App Development</option>
                    <option value="ai">AI Solutions & Integration</option>
                    <option value="n8n">Workflow Automation (n8n)</option>
                    <option value="seo">SEO Services</option>
                    <option value="marketing">Digital Marketing</option>
                    <option value="content">Content Creation</option>
                    <option value="video">Video Editing</option>
                    <option value="shopify">Shopify Store Design</option>
                    <option value="langchain">LangChain Integration</option>
                    <option value="openai">OpenAI Agent SDK</option>
                    <option value="crm">CRM Solutions</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Dynamic Service-Specific Fields */}
                {formData.service === 'web' && (
                  <div className="md:col-span-2 bg-primary/5 border border-primary/20 rounded-lg p-4">
                    <label className="block text-foreground font-semibold mb-3">Website Development Specifics</label>
                    <p className="text-sm text-foreground/70 mb-3">We'll need to know about your website requirements, design preferences, and functionality needs.</p>
                  </div>
                )}

                {formData.service === 'app' && (
                  <div className="md:col-span-2 bg-primary/5 border border-primary/20 rounded-lg p-4">
                    <label className="block text-foreground font-semibold mb-3">Mobile App Development Specifics</label>
                    <p className="text-sm text-foreground/70 mb-3">Tell us about your app concept, target platforms (iOS/Android), and key features you need.</p>
                  </div>
                )}

                {formData.service === 'ai' && (
                  <div className="md:col-span-2 bg-primary/5 border border-primary/20 rounded-lg p-4">
                    <label className="block text-foreground font-semibold mb-3">AI Solutions & Integration</label>
                    <p className="text-sm text-foreground/70 mb-3">Share your specific AI/ML needs, what problems you're solving, and your current data/infrastructure.</p>
                  </div>
                )}

                {formData.service === 'n8n' && (
                  <div className="md:col-span-2 bg-primary/5 border border-primary/20 rounded-lg p-4">
                    <label className="block text-foreground font-semibold mb-3">Workflow Automation (n8n)</label>
                    <p className="text-sm text-foreground/70 mb-3">Describe the workflows you want to automate, which tools you use, and your desired outcomes.</p>
                  </div>
                )}

                {formData.service === 'seo' && (
                  <div className="md:col-span-2 bg-primary/5 border border-primary/20 rounded-lg p-4">
                    <label className="block text-foreground font-semibold mb-3">SEO Services</label>
                    <p className="text-sm text-foreground/70 mb-3">Let us know your target keywords, current rankings, and what SEO goals you want to achieve.</p>
                  </div>
                )}

                {formData.service === 'marketing' && (
                  <div className="md:col-span-2 bg-primary/5 border border-primary/20 rounded-lg p-4">
                    <label className="block text-foreground font-semibold mb-3">Digital Marketing</label>
                    <p className="text-sm text-foreground/70 mb-3">Share your marketing goals, target audience, current metrics, and preferred platforms.</p>
                  </div>
                )}

                {formData.service === 'shopify' && (
                  <div className="md:col-span-2 bg-primary/5 border border-primary/20 rounded-lg p-4">
                    <label className="block text-foreground font-semibold mb-3">Shopify Store Design</label>
                    <p className="text-sm text-foreground/70 mb-3">Tell us about your products, design style preferences, and e-commerce requirements.</p>
                  </div>
                )}

                {formData.service === 'crm' && (
                  <div className="md:col-span-2 bg-primary/5 border border-primary/20 rounded-lg p-4">
                    <label className="block text-foreground font-semibold mb-3">CRM Solutions</label>
                    <p className="text-sm text-foreground/70 mb-3">Describe your customer management needs, team size, and integration requirements.</p>
                  </div>
                )}

                {formData.service && !['web', 'app', 'ai', 'n8n', 'seo', 'marketing', 'shopify', 'crm'].includes(formData.service) && (
                  <div className="md:col-span-2 bg-primary/5 border border-primary/20 rounded-lg p-4">
                    <label className="block text-foreground font-semibold mb-3">Service Details</label>
                    <p className="text-sm text-foreground/70 mb-3">Please provide detailed information about your project requirements in the description section below.</p>
                  </div>
                )}

                <div className="md:col-span-2">
                  <label className="block text-foreground font-semibold mb-2">
                    What type of project do you need? <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary transition-colors duration-300"
                    placeholder="e.g., E-commerce Platform, SaaS Application, Mobile Game, etc."
                  />
                </div>
              </div>
            </div>

            {/* Section 3: Project Description */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6 pb-3 border-b border-border/30">
                Project Description
              </h3>
              <div>
                <label className="block text-foreground font-semibold mb-2">
                  What do you want to build? <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="projectDescription"
                  value={formData.projectDescription}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary transition-colors duration-300 resize-none"
                  placeholder="Describe your project in detail. Include main features, goals, target audience, and any specific requirements..."
                />
              </div>
            </div>

            {/* Section 4: Project Scope */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6 pb-3 border-b border-border/30">
                Project Scope & Timeline
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-foreground font-semibold mb-2">
                    Budget <span className="text-primary">{currencySymbol}</span> <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors duration-300"
                  >
                    <option value="">Select budget range</option>
                    <option value={`${currencySymbol || '$'}5k-${currencySymbol || '$'}10k`}>{currencySymbol || '$'}5,000 - {currencySymbol || '$'}10,000</option>
                    <option value={`${currencySymbol || '$'}10k-${currencySymbol || '$'}25k`}>{currencySymbol || '$'}10,000 - {currencySymbol || '$'}25,000</option>
                    <option value={`${currencySymbol || '$'}25k-${currencySymbol || '$'}50k`}>{currencySymbol || '$'}25,000 - {currencySymbol || '$'}50,000</option>
                    <option value={`${currencySymbol || '$'}50k-${currencySymbol || '$'}100k`}>{currencySymbol || '$'}50,000 - {currencySymbol || '$'}100,000</option>
                    <option value={`${currencySymbol || '$'}100k+`}>{currencySymbol || '$'}100,000+</option>
                    <option value="Not Sure">Not Sure</option>
                  </select>
                </div>
                <div>
                  <label className="block text-foreground font-semibold mb-2">
                    Desired Timeline <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors duration-300"
                  >
                    <option value="">Select timeline</option>
                    <option value="ASAP (1-2 weeks)">ASAP (1-2 weeks)</option>
                    <option value="Soon (1 month)">Soon (1 month)</option>
                    <option value="Flexible (2-3 months)">Flexible (2-3 months)</option>
                    <option value="3-6 months">3-6 months</option>
                    <option value="6+ months">6+ months</option>
                    <option value="Not Sure">Not Sure</option>
                  </select>
                </div>
                <div>
                  <label className="block text-foreground font-semibold mb-2">
                    Project Stage <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="projectStage"
                    value={formData.projectStage}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors duration-300"
                  >
                    <option value="">Select stage</option>
                    <option value="Idea Phase">Idea Phase</option>
                    <option value="Early Stage">Early Stage (Started)</option>
                    <option value="MVP Ready">MVP Ready</option>
                    <option value="Scaling">Scaling</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Section 5: Additional Information */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6 pb-3 border-b border-border/30">
                Additional Information (Optional)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-foreground font-semibold mb-2">
                    Preferred Technologies
                  </label>
                  <input
                    type="text"
                    name="technologies"
                    value={formData.technologies}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary transition-colors duration-300"
                    placeholder="e.g., React, Python, AI/ML, etc."
                  />
                </div>
                <div>
                  <label className="block text-foreground font-semibold mb-2">
                    Team Size / Number of Users
                  </label>
                  <input
                    type="text"
                    name="teamSize"
                    value={formData.teamSize}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary transition-colors duration-300"
                    placeholder="e.g., 5 team members, 1000+ users"
                  />
                </div>
              </div>
              <div className="mt-6">
                <label className="block text-foreground font-semibold mb-2">
                  Additional Notes
                </label>
                <textarea
                  name="additionalNotes"
                  value={formData.additionalNotes}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary transition-colors duration-300 resize-none"
                  placeholder="Any additional information, competitors, inspirations, or special requirements?"
                />
              </div>
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-foreground font-semibold mb-2">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary transition-colors duration-300 resize-none"
                placeholder="Any other details you'd like to share with our team?"
              />
            </div>

            {/* Submit Button */}
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-8">
              <p className="text-sm text-foreground/70">
                <strong>Note:</strong> By submitting this form, you agree to be contacted by Solvix Core regarding your project inquiry. We respect your privacy and will never share your information.
              </p>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg inline-flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-primary/50 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  Submitting... <Loader2 className="animate-spin" size={20} />
                </>
              ) : (
                <>
                  Submit Project Inquiry <Send size={20} />
                </>
              )}
            </button>
          </form>
        </div>
      </section>

      <Footer />
      <FullscreenLoader isVisible={isVisible} message={message} progress={progress} />
    </div>
  );
}

export default function Contact() {
  return <ContactForm />;
}
