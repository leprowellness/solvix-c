'use client';

import AIPricingSection from "@/components/ai-pricing-section"
import AppPricingSection from "@/components/app-pricing-section"
import AutomationPricingSection from "@/components/automation-pricing-section"
import CRMPricingSection from "@/components/crm-pricing-section"
import Footer from "@/components/footer"
import LangChainPricingSection from "@/components/langchain-pricing-section"
import Navbar from "@/components/navbar"
import OpenAIPricingSection from "@/components/openai-pricing-section"
import POSPricingSection from "@/components/pos-pricing-section"
import PricingSection from "@/components/pricing-section"
import SEOPricingSection from "@/components/seo-pricing-section"
import ShopifyPricingSection from "@/components/shopify-pricing-section"
import VideoPricingSection from "@/components/video-pricing-section"
import WebsitePricingSection from "@/components/website-pricing-section"
import { CheckCircle } from "lucide-react"

export default function PricingClient(){
  return (
    <>
      <Navbar />

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/20">
        <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Pricing</span> and Plans
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Transparent, competitive pricing for all our services. Choose the plan that fits your needs and budget. All prices are in Canadian Dollars (CAD) and 35% below market rates.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-lg">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="text-foreground/80 font-medium">No Hidden Fees</span>
            </div>
            <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-lg">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="text-foreground/80 font-medium">Flexible Plans</span>
            </div>
            <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-lg">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="text-foreground/80 font-medium">35% Below Market</span>
            </div>
          </div>
        </div>
      </section>

      <SEOPricingSection />

      {/* Social Media Marketing Pricing Section */}
      <PricingSection />

      {/* Video Editing Pricing Section */}
      <VideoPricingSection />

      {/* Website Development Pricing Section */}
      <WebsitePricingSection />

      {/* AI Solutions Pricing Section */}
      <AIPricingSection />

      {/* App Development Pricing Section */}
      <AppPricingSection />

      {/* Shopify Store Pricing Section */}
      <ShopifyPricingSection />

      {/* CRM Solutions Pricing Section */}
      <CRMPricingSection />

      {/* n8n Automation Pricing Section */}
      <AutomationPricingSection />

      {/* LangChain Integration Pricing Section */}
      <LangChainPricingSection />

      {/* OpenAI Integration Pricing Section */}
      <OpenAIPricingSection />

      {/* Point of Sale Pricing Section */}
      <POSPricingSection />
      
      <Footer />
    </>
  )
}
