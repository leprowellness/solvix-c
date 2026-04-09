'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface SplashScreenProps {
  isVisible?: boolean;
  onComplete?: () => void;
}

export default function SplashScreen({ isVisible = true, onComplete }: SplashScreenProps) {
  const [show, setShow] = useState(isVisible);

  useEffect(() => {
    if (!isVisible) {
      setShow(false);
      return;
    }

    const timer = setTimeout(() => {
      setShow(false);
      onComplete?.();
    }, 3000);

    return () => clearTimeout(timer);
  }, [isVisible, onComplete]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-background flex items-center justify-center overflow-hidden">
      {/* Ambient Background Lighting */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/4 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/4 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-8">
        {/* Logo with Modern Rotating Ring */}
        <div className="relative w-40 h-40 flex items-center justify-center">
          {/* Outer Rotating Ring */}
          <div className="absolute inset-0 rounded-full border-3 border-transparent border-t-primary border-r-primary/60 animate-spin-slow" />
          
          {/* Inner Pulsing Ring */}
          <div className="absolute inset-0 rounded-full border border-primary/20 animate-pulse" />
          
          {/* Soft Glow */}
          <div className="absolute inset-6 rounded-full bg-gradient-to-br from-primary/8 to-transparent blur-md animate-fade-pulse" />

          {/* Logo */}
          <div className="relative z-10">
            <Image
              src="/logo/logo.PNG"
              alt="Solvix Core Logo"
              width={110}
              height={110}
              className="drop-shadow-lg"
              priority
            />
          </div>
        </div>

        {/* Brand Name with Fade In */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight animate-fade-in-up">
            SOLVIX CORE
          </h1>
          <p className="text-sm md:text-base text-foreground/50 animate-fade-in-up font-medium" style={{ animationDelay: '0.2s' }}>
            Building Your Digital Future
          </p>
        </div>

        {/* Elegant Loading Indicator */}
        <div className="flex items-center gap-2 mt-6">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: '0s' }} />
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: '0.2s' }} />
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: '0.4s' }} />
        </div>
      </div>

      {/* Styles */}
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
          animation: spin-slow 3s linear infinite;
        }

        .animate-fade-pulse {
          animation: fade-pulse 2.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
