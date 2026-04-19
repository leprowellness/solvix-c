'use client';

import Link from 'next/link';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';
import { toast } from 'sonner';

const Footer = () => {
  return (
    <footer className="relative border-t border-cyan-400/20 mt-32 overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="space-y-4 group">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-cyan-500/20 border border-cyan-400/30 bg-background/80 p-1 animate-glow group-hover:animate-glow-pulse transition-all">
                  <Image
                    src="/logo/logo.PNG"
                    alt="Solvix Core Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Solvix Core</span>
              </div>
              <p className="text-foreground/70 text-sm leading-relaxed">Premium tech solutions for modern businesses. Transform your vision into reality with cutting-edge technology.</p>
              {/* Social Links */}
              <div className="flex gap-3 pt-4">
                <a href="#" className="w-10 h-10 rounded-lg glass-premium flex items-center justify-center text-foreground/70 hover:text-cyan-400 transition-all duration-300 hover:scale-110 border border-cyan-400/20 hover:border-cyan-400/50">
                  <Github size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg glass-premium flex items-center justify-center text-foreground/70 hover:text-cyan-400 transition-all duration-300 hover:scale-110 border border-cyan-400/20 hover:border-cyan-400/50">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg glass-premium flex items-center justify-center text-foreground/70 hover:text-cyan-400 transition-all duration-300 hover:scale-110 border border-cyan-400/20 hover:border-cyan-400/50">
                  <Twitter size={18} />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-bold text-foreground mb-6 text-lg">Services</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/services/n8n" className="text-foreground/70 hover:text-cyan-400 transition-colors duration-300 font-medium">
                    n8n Automation
                  </Link>
                </li>
                <li>
                  <Link href="/services/langchain" className="text-foreground/70 hover:text-cyan-400 transition-colors duration-300 font-medium">
                    LangChain Integration
                  </Link>
                </li>
                <li>
                  <Link href="/services/ai-solutions" className="text-foreground/70 hover:text-cyan-400 transition-colors duration-300 font-medium">
                    AI Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/services/web-development" className="text-foreground/70 hover:text-cyan-400 transition-colors duration-300 font-medium">
                    Web Development
                  </Link>
                </li>
              </ul>
            </div>

            {/* More Services */}
            <div>
              <h3 className="font-bold text-foreground mb-6 text-lg">More Services</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/services/shopify" className="text-foreground/70 hover:text-cyan-400 transition-colors duration-300 font-medium">
                    Shopify Design
                  </Link>
                </li>
                <li>
                  <Link href="/services/content" className="text-foreground/70 hover:text-cyan-400 transition-colors duration-300 font-medium">
                    Content Creation
                  </Link>
                </li>
                <li>
                  <Link href="/services/marketing-seo" className="text-foreground/70 hover:text-cyan-400 transition-colors duration-300 font-medium">
                    Marketing & SEO
                  </Link>
                </li>
                <li>
                  <Link href="/services/app-dev" className="text-foreground/70 hover:text-cyan-400 transition-colors duration-300 font-medium">
                    App Development
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-bold text-foreground mb-6 text-lg">Contact</h3>
              <div className="space-y-4 text-sm">
                <div
                  className="flex items-start space-x-3 cursor-pointer group/contact hover-lift p-3 rounded-lg transition-all"
                  onClick={() => {
                    navigator.clipboard.writeText('info@solvixcore.com');
                    toast.success('Email copied!');
                  }}
                >
                  <Mail size={18} className="text-cyan-400 mt-0.5 flex-shrink-0 group-hover/contact:scale-110 transition-transform" />
                  <div className="flex-1">
                    <div className="text-foreground/50 text-xs mb-1">Email</div>
                    <span className="text-foreground/70 group-hover/contact:text-cyan-400 transition-colors font-medium">info@solvixcore.com</span>
                  </div>
                </div>
                <div
                  className="flex items-start space-x-3 cursor-pointer group/phone hover-lift p-3 rounded-lg transition-all"
                  onClick={() => {
                    navigator.clipboard.writeText('+1 (437) 889-8265');
                    toast.success('Phone copied!');
                  }}
                >
                  <Phone size={18} className="text-cyan-400 mt-0.5 flex-shrink-0 group-hover/phone:scale-110 transition-transform" />
                  <div className="flex-1">
                    <div className="text-foreground/50 text-xs mb-1">Phone</div>
                    <span className="text-foreground/70 group-hover/phone:text-cyan-400 transition-colors font-medium">+1 (437) 889-8265</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 rounded-lg">
                  <MapPin size={18} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="text-foreground/50 text-xs mb-1">Location</div>
                    <p className="text-foreground/70 font-medium leading-relaxed">Suite 104 - 2 Gurdwara Road, Ottawa, ON K2E 1A2, Canada</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Divider */}
          <div className="border-t border-cyan-400/10 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-foreground/60 text-sm font-medium">&copy; 2024 Solvix Core. All rights reserved. | Crafted with precision technology</p>
              <div className="flex space-x-6 text-sm">
                <Link href="#" className="text-foreground/60 hover:text-cyan-400 transition-colors duration-300 font-medium">Privacy Policy</Link>
                <Link href="#" className="text-foreground/60 hover:text-cyan-400 transition-colors duration-300 font-medium">Terms of Service</Link>
                <Link href="#" className="text-foreground/60 hover:text-cyan-400 transition-colors duration-300 font-medium">Sitemap</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
