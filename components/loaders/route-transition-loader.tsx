'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface RouteTransitionLoaderProps {
  show?: boolean;
}

export default function RouteTransitionLoader({ show = false }: RouteTransitionLoaderProps) {
  const [isVisible, setIsVisible] = useState(show);

  useEffect(() => {
    setIsVisible(show);
  }, [show]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9997] bg-background/95 backdrop-blur-md flex items-center justify-center pointer-events-none">
      {/* Subtle Background Lighting */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Logo with Modern Rotating Ring */}
        <div className="relative w-32 h-32 flex items-center justify-center">
          {/* Rotating Border */}
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary border-r-primary/60 animate-spin-slow" />
          
          {/* Pulsing Inner Ring */}
          <div className="absolute inset-0 rounded-full border border-primary/20 animate-pulse" />
          
          {/* Soft Glow */}
          <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary/6 to-transparent blur-md animate-fade-pulse" />
          
          {/* Logo */}
          <Image
            src="/logo/logo.PNG"
            alt="Route Transition"
            width={85}
            height={85}
            className="drop-shadow-md"
            priority
          />
        </div>

        {/* Loading Indicator */}
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: '0s' }} />
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: '0.2s' }} />
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: '0.4s' }} />
        </div>

        {/* Loading Text */}
        <p className="text-sm text-foreground/50 font-medium tracking-wide">Navigating...</p>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes fade-pulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.8;
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 2.5s linear infinite;
        }

        .animate-fade-pulse {
          animation: fade-pulse 2.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
