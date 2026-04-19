'use client';

import { ReactNode, useState } from 'react';

interface AnimatedServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  href: string;
}

export default function AnimatedServiceCard({
  title,
  description,
  icon,
  href,
}: AnimatedServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isHovered) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <div
      className="relative group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Animated background glow - enhanced */}
      <div
        className={`absolute -inset-1 bg-gradient-to-br from-cyan-500/20 via-purple-500/10 to-cyan-500/20 rounded-2xl blur-2xl transition-all duration-500 ${
          isHovered ? 'opacity-100 scale-110' : 'opacity-0'
        }`}
      />

      {/* Premium card with glassmorphism */}
      <div
        className={`relative h-full bg-gradient-to-br from-card/80 via-card/60 to-card/40 border transition-all duration-300 rounded-2xl p-8 backdrop-blur-xl ${
          isHovered
            ? 'border-cyan-400/40 shadow-2xl shadow-cyan-500/20 transform scale-105'
            : 'border-border/30 shadow-lg'
        }`}
      >
        {/* Radial gradient follow mouse effect */}
        {isHovered && (
          <div
            className="absolute inset-0 rounded-2xl opacity-20 transition-opacity duration-300"
            style={{
              background: `radial-gradient(400px at ${mousePos.x}% ${mousePos.y}%, rgba(0, 255, 255, 0.15), transparent 80%)`,
            }}
          />
        )}

        {/* Icon with premium animation */}
        <div
          className={`mb-4 transition-all duration-300 text-cyan-400 ${
            isHovered ? 'scale-125 animate-float-x' : 'scale-100'
          }`}
        >
          {icon}
        </div>

        {/* Title with premium styling */}
        <h3
          className={`text-2xl font-bold transition-all duration-300 mb-3 ${
            isHovered
              ? 'text-cyan-300 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent'
              : 'text-foreground'
          }`}
        >
          {title}
        </h3>

        {/* Description with better text hierarchy */}
        <p
          className={`transition-all duration-300 font-normal leading-relaxed mb-6 ${
            isHovered
              ? 'text-foreground/90'
              : 'text-foreground/60'
          }`}
        >
          {description}
        </p>

        {/* Premium link with enhanced animation */}
        <div
          className={`inline-flex items-center gap-2 font-semibold transition-all duration-300 group/link text-cyan-400 hover:text-cyan-300 ${
            isHovered ? 'gap-4' : ''
          }`}
        >
          <span className="relative">
            Learn More
            <span
              className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover/link:w-full transition-all duration-300`}
            />
          </span>
          <span
            className={`transition-all duration-300 text-lg ${
              isHovered ? 'translate-x-2 drop-shadow-lg' : ''
            }`}
          >
            →
          </span>
        </div>
      </div>
    </div>
  );
}
