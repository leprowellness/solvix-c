import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Link from 'next/link';
import { Target, Users, Award, Lightbulb, Heart, Zap, Shield, TrendingUp, CheckCircle, Rocket, Brain, Code } from 'lucide-react';
import Image from 'next/image';

export const metadata = {
  title: 'About Us - Solvix Core',
  description: 'Learn about Solvix Core - our mission, values, and the team behind innovative tech solutions.',
};

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 pt-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            suppressHydrationWarning={true}
            className="absolute inset-0 w-full h-full object-cover brightness-40"
          >
            <source src="/Videos/About Section.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="animate-fade-in-down space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              About <span className="text-primary">Solvix Core</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
              We're a team of passionate innovators dedicated to transforming businesses through cutting-edge technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-secondary/50 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 animate-fade-in-up">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-foreground/60 font-medium">Proudly Partnered With</p>
                <h3 className="text-xl md:text-2xl font-bold text-foreground">Lepro Trading Inc</h3>
              </div>
            </div>
            <div className="hidden md:block w-px h-12 bg-border"></div>
            <p className="text-center md:text-left text-foreground/70 max-w-md">
              Trusted partnership delivering excellence in technology solutions
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="animate-fade-in-left">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Mission</h2>
              </div>
              <p className="text-foreground/80 text-lg leading-relaxed mb-4">
                To empower businesses with innovative technology solutions that drive growth, efficiency, and success in the digital age.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                We believe in making advanced technology accessible and practical for businesses of all sizes, helping them stay competitive and achieve their goals.
              </p>
            </div>

            <div className="animate-fade-in-right">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-accent/20 rounded-lg">
                  <Lightbulb className="w-8 h-8 text-accent" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Vision</h2>
              </div>
              <p className="text-foreground/80 text-lg leading-relaxed mb-4">
                To be the leading provider of transformative tech solutions, recognized for innovation, quality, and exceptional client partnerships.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                We envision a future where every business can leverage the power of AI, automation, and modern web technologies to reach their full potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Story</h2>
            <p className="text-foreground/70 text-lg">
              From humble beginnings to industry leaders
            </p>
          </div>

          <div className="space-y-8 animate-fade-in-up">
            <div className="bg-card border border-border rounded-xl p-8 hover:border-primary transition-all duration-300">
              <p className="text-foreground/80 text-lg leading-relaxed mb-4">
                Solvix Core was founded with a simple yet powerful vision: to bridge the gap between cutting-edge technology and practical business solutions. What started as a small team of passionate developers has grown into a full-service technology partner for businesses worldwide.
              </p>
              <p className="text-foreground/70 leading-relaxed mb-4">
                Over the years, we've helped hundreds of companies transform their operations through AI integration, workflow automation, custom web applications, and e-commerce platforms. Our commitment to excellence and innovation has made us a trusted name in the industry.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                Today, we continue to push boundaries, explore new technologies, and deliver solutions that not only meet but exceed our clients' expectations. Every project is an opportunity to create something exceptional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: 'Innovation',
                description: 'We constantly explore new technologies and approaches to deliver cutting-edge solutions that keep our clients ahead of the curve.',
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: 'Excellence',
                description: 'We maintain the highest standards in everything we do, from code quality to customer service, ensuring exceptional results.',
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: 'Client Success',
                description: 'Your success is our success. We\'re committed to understanding your needs and delivering solutions that drive real results.',
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: 'Integrity',
                description: 'We build trust through transparency, honesty, and ethical practices in all our business relationships.',
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: 'Collaboration',
                description: 'We work closely with our clients as partners, fostering open communication and shared success.',
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: 'Growth',
                description: 'We\'re committed to continuous learning and improvement, both for ourselves and our clients.',
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-8 hover:border-primary transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-primary/10 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-primary mb-4 animate-float">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-foreground/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Talented professionals passionate about technology and your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {[
              {
                role: 'AI Specialists',
                count: '15+',
                description: 'Experts in machine learning, NLP, and AI integration',
              },
              {
                role: 'Developers',
                count: '25+',
                description: 'Full-stack engineers building robust solutions',
              },
              {
                role: 'Designers',
                count: '10+',
                description: 'Creative minds crafting beautiful experiences',
              },
              {
                role: 'Consultants',
                count: '8+',
                description: 'Strategic advisors guiding your digital journey',
              },
            ].map((team, index) => (
              <div
                key={index}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl font-bold text-primary mb-2">{team.count}</div>
                <h3 className="text-xl font-bold text-foreground mb-2">{team.role}</h3>
                <p className="text-foreground/70">{team.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-card border border-border rounded-xl p-8 text-center animate-scale-in">
            <p className="text-foreground/80 text-lg mb-6">
              Our diverse team brings together expertise from various fields including software engineering, AI research, design, and business strategy. We're united by our passion for technology and commitment to client success.
            </p>
            <p className="text-foreground/70">
              Every team member is dedicated to staying at the forefront of their field, ensuring we deliver the most advanced and effective solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Expertise
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Deep knowledge across multiple technology domains
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Brain className="w-8 h-8" />,
                title: 'Artificial Intelligence',
                points: [
                  'Custom AI model development and training',
                  'OpenAI and LangChain integration',
                  'Natural language processing solutions',
                  'Predictive analytics and machine learning',
                ],
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: 'Automation & Integration',
                points: [
                  'n8n workflow automation',
                  'API development and integration',
                  'Business process optimization',
                  'Third-party service connections',
                ],
              },
              {
                icon: <Code className="w-8 h-8" />,
                title: 'Web Development',
                points: [
                  'Modern React and Next.js applications',
                  'Progressive web apps (PWA)',
                  'Responsive and accessible design',
                  'Performance optimization',
                ],
              },
              {
                icon: <Rocket className="w-8 h-8" />,
                title: 'E-commerce Solutions',
                points: [
                  'Shopify store design and development',
                  'Custom e-commerce platforms',
                  'Payment gateway integration',
                  'Inventory and order management',
                ],
              },
            ].map((expertise, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-8 hover:border-primary transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-primary">{expertise.icon}</div>
                  <h3 className="text-2xl font-bold text-foreground">{expertise.title}</h3>
                </div>
                <ul className="space-y-3">
                  {expertise.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/70">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Impact
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Projects Completed' },
              { number: '200+', label: 'Happy Clients' },
              { number: '50+', label: 'Team Members' },
              { number: '15+', label: 'Countries Served' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '24/7', label: 'Support Available' },
              { number: '10+', label: 'Years Experience' },
              { number: '100%', label: 'Commitment' },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center animate-scale-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Choose Solvix Core?
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              What sets us apart from the competition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Proven Track Record',
                description: 'With hundreds of successful projects across various industries, we have the experience and expertise to handle any challenge.',
              },
              {
                title: 'Cutting-Edge Technology',
                description: 'We stay ahead of the curve, constantly learning and implementing the latest technologies to give you a competitive advantage.',
              },
              {
                title: 'Personalized Approach',
                description: 'Every business is unique. We take the time to understand your specific needs and create tailored solutions that fit perfectly.',
              },
              {
                title: 'End-to-End Service',
                description: 'From initial consultation to post-launch support, we\'re with you every step of the way, ensuring your success.',
              },
              {
                title: 'Transparent Communication',
                description: 'We believe in keeping you informed throughout the project with regular updates and open channels of communication.',
              },
              {
                title: 'Scalable Solutions',
                description: 'Our solutions are built to grow with your business, ensuring long-term value and adaptability to changing needs.',
              },
            ].map((reason, index) => (
              <div
                key={index}
                className="flex gap-4 animate-fade-in-left"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{reason.title}</h3>
                  <p className="text-foreground/70">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20">
        <div className="max-w-4xl mx-auto text-center animate-scale-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with innovative technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 rounded-lg font-bold text-lg inline-flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-primary/50"
            >
              Explore Our Services
            </Link>
            <a
              href="mailto:info@solvixcore.com"
              className="border border-primary text-primary hover:bg-primary/10 px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
