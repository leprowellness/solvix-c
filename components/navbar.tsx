'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight, Facebook, Instagram, Menu, MessageCircle, Moon, Sun, X } from 'lucide-react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import CountrySelector from './country-selector';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'About', href: '/about' },
    { label: 'Pricing', href: '/pricing' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'h-16 mt-4 mx-4' : 'h-20 bg-transparent'
        }`}
    >
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full transition-all duration-500 ${scrolled ? 'glass-premium rounded-2xl shadow-2xl shadow-cyan-500/10' : ''
        }`}>
        <div className="flex justify-between items-center h-full">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-10 h-10 transition-all duration-300 transform group-hover:scale-110 rounded-xl overflow-hidden shadow-lg shadow-cyan-500/30 border border-cyan-400/40 bg-background/80 p-1.5 animate-glow-pulse">
              <Image
                src="/logo/logo.PNG"
                alt="Solvix Core Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-xl font-bold text-foreground hidden sm:inline silver-gradient">
              Solvix Core
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-foreground/70 hover:text-primary transition-all duration-300 font-bold text-sm tracking-wide group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            <CountrySelector />
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2.5 rounded-xl glass-premium hover:shadow-glow text-foreground/70 hover:text-cyan-400 transition-all duration-300 border border-cyan-400/20 hover:border-cyan-400/40 hover:scale-110"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}
            <Link
              href="/contact"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-7 py-2.5 rounded-xl font-bold transition-all duration-500 shadow-lg hover:shadow-primary/40 hover:-translate-y-0.5"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center gap-3">
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border/40 liquid-glass text-foreground/90 transition hover:border-primary/40 shadow-xl"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            )}
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border/40 liquid-glass text-foreground/90 transition hover:border-primary/40 shadow-xl"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden animate-in fade-in duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Drawer Panel */}
      <div className={`md:hidden fixed top-[4.5rem] right-4 w-[75vw] max-w-[320px] z-50 transition-all duration-500 origin-top-right ${isOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-4 scale-95 pointer-events-none'
        }`}>
        <div className="liquid-glass rounded-[2rem] overflow-hidden shadow-[
-20px_-20px_60px_rgba(255,255,255,0.15),
-20px_20px_60px_rgba(255,255,255,0.12)
] border border-white/20 flex flex-col p-8 min-h-[85vh]">
          <div className="flex-1 flex flex-col pt-1">
            {[
              { label: 'Home', href: '/' },
              { label: 'About', href: '/about' },
              { label: 'Services', href: '/services' },
              { label: 'Portfolio', href: '/portfolio' },
              { label: 'Prices', href: '/pricing' },
              { label: 'Contact', href: '/contact' }
            ].map((item, index, array) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="flex justify-between items-center py-4 text-[clamp(0.9rem,3.5vw,1rem)] font-bold text-foreground/80 hover:text-primary transition-all duration-300 group"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="tracking-tight">{item.label}</span>
                  {item.label === 'Services' && <ArrowRight size={14} className="text-foreground/30 group-hover:text-primary transition-transform" />}
                </Link>
                {index < array.length - 1 && <div className="h-px bg-border/20 w-full" />}
              </div>
            ))}
          </div>

          <div className="pt-6 mt-auto border-t border-border/40 space-y-4">
            {/* Country Selector in Mobile Menu */}
            <div className="pb-4">
              <p className="text-[clamp(0.7rem,2.5vw,0.8rem)] font-bold uppercase tracking-[0.2em] text-foreground/30 mb-3">
                Select Country
              </p>
              <CountrySelector />
            </div>
            
            <p className="text-[clamp(0.7rem,2.5vw,0.8rem)] font-bold uppercase tracking-[0.2em] text-foreground/30">
              Follow Us
            </p>
            <div className="flex items-center space-x-6 pb-2">
              <a href="#" className="text-foreground/50 hover:text-primary transition-colors duration-300">
                <Facebook size={18} strokeWidth={2} />
              </a>
              <a href="#" className="text-foreground/50 hover:text-primary transition-colors duration-300">
                <Instagram size={18} strokeWidth={2} />
              </a>
              <a href="#" className="text-foreground/50 hover:text-primary transition-colors duration-300">
                <MessageCircle size={18} strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
