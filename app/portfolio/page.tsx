'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { ExternalLink, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface PortfolioItem {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  liveLink: string;
  category: string;
  technologies: string[];
  featured: boolean;
  createdAt: string;
}

const PortfolioPage = () => {
  const [portfolios, setPortfolios] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPortfolios();
  }, []);

  const fetchPortfolios = async () => {
    try {
      const res = await fetch('/api/admin/portfolio');
      if (res.ok) {
        const data = await res.json();
        setPortfolios(data.data);
      }
    } catch (error) {
      console.error('Error fetching portfolios:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Premium Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center pt-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-1/3 w-96 h-96 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-3xl opacity-60 animate-pulse-slow" />
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-3xl opacity-50" />
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-l from-primary/20 rounded-full blur-3xl opacity-40" />
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] opacity-50" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Subtitle Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8 backdrop-blur-sm">
            <Sparkles size={16} className="text-primary" />
            <span className="text-sm font-semibold text-primary">Showcase of Excellence</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-none mb-6">
            <span className="block text-foreground">Our Premium</span>
            <span className="block text-foreground">Portfolio</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed font-medium mb-8">
            Explore our collection of cutting-edge projects. Each project represents our commitment to excellence, innovation, and delivering transformative digital solutions for our clients.
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-8 md:gap-12">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary">{portfolios.length}</p>
              <p className="text-foreground/60 text-sm">Projects Delivered</p>
            </div>
            <div className="w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary">100%</p>
              <p className="text-foreground/60 text-sm">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Portfolio Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="flex justify-center items-center py-32">
              <div className="w-16 h-16 relative">
                <div className="absolute inset-0 rounded-full border-2 border-foreground/10" />
                <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-cyan-400 border-r-cyan-400 animate-spin" />
              </div>
            </div>
          ) : portfolios.length === 0 ? (
            <div className="text-center py-32">
              <p className="text-foreground/60 text-lg">No portfolio items available yet</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolios.map((item, index) => (
                <div
                  key={item._id}
                  className="group relative"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                  }}
                >
                  {/* Premium Card Container */}
                  <div className="h-full rounded-2xl overflow-hidden bg-gradient-to-b from-foreground/5 to-transparent border border-primary/20 hover:border-primary/50 transition-all duration-500 backdrop-blur-sm hover:backdrop-blur-md">
                    {/* Image Container */}
                    <div className="relative w-full h-56 overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                      {item.imageUrl ? (
                        <Image
                          src={item.imageUrl}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-125 transition-transform duration-700 ease-out"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-foreground/40">
                          <Sparkles size={48} />
                        </div>
                      )}
                      
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                      {/* Category Badge */}
                      <div className="absolute top-4 right-4">
                        <span className="inline-block px-4 py-2 bg-gradient-to-r from-primary/90 to-secondary/90 text-primary-foreground text-xs font-bold rounded-lg backdrop-blur-sm shadow-lg shadow-primary/30 group-hover:shadow-primary/50 transition-all">
                          {item.category}
                        </span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 space-y-4">
                      {/* Title */}
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-foreground/70 text-sm leading-relaxed line-clamp-2">
                        {item.description}
                      </p>

                      {/* Technologies */}
                      {item.technologies && item.technologies.length > 0 && (
                        <div className="space-y-2">
                          <p className="text-xs font-semibold text-foreground/60 uppercase tracking-wider">Tech Stack</p>
                          <div className="flex flex-wrap gap-2">
                            {item.technologies.slice(0, 4).map((tech, idx) => (
                              <span
                                key={idx}
                                className="text-xs font-medium bg-gradient-to-r from-primary/10 to-secondary/10 text-primary px-3 py-1.5 rounded-full border border-primary/30 hover:border-primary/60 transition-all cursor-default"
                              >
                                {tech}
                              </span>
                            ))}
                            {item.technologies.length > 4 && (
                              <span className="text-xs font-medium text-foreground/50 px-3 py-1.5">
                                +{item.technologies.length - 4} more
                              </span>
                            )}
                          </div>
                        </div>
                      )}

                      {/* CTA Button */}
                      {item.liveLink && (
                        <a
                          href={item.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-primary/20 to-secondary/20 hover:from-primary/40 hover:to-secondary/40 text-primary font-semibold rounded-lg transition-all duration-300 border border-primary/30 hover:border-primary/60 group/btn mt-2"
                        >
                          View Project
                          <ExternalLink size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <style jsx>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </section>

      {/* Premium CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-primary/15 to-secondary/15 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8 backdrop-blur-sm">
            <Sparkles size={16} className="text-primary" />
            <span className="text-sm font-semibold text-primary">Let's Create Together</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            <span className="block text-foreground">
              Ready to Transform
            </span>
            <span className="block text-foreground">Your Vision?</span>
          </h2>

          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed mb-10">
            Let's collaborate to bring your next big idea to life. Whether it's a website, application, or digital solution, we're here to deliver excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground font-bold rounded-xl transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/50"
            >
              Start a Project
              <ExternalLink size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 bg-foreground/5 hover:bg-foreground/10 text-foreground font-bold rounded-xl transition-all duration-300 border border-primary/30 hover:border-primary/60"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PortfolioPage;
