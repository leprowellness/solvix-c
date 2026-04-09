'use client';

import Image from 'next/image';

export default function Preloader() {
  return (
    <div className="fixed inset-0 z-[10000] bg-background flex items-center justify-center">
      {/* Ambient Background Lighting */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>
      
      {/* Logo Container with Modern Animation */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-8">
        {/* Logo with Elegant Rotating Ring */}
        <div className="relative w-36 h-36 flex items-center justify-center">
          {/* Outer Rotating Ring with Gradient */}
          <div className="absolute inset-0 rounded-full border-3 border-transparent border-t-primary border-r-primary/50 animate-spin-slow" />
          
          {/* Secondary Rotating Ring (Counter-clockwise slower) */}
          <div className="absolute inset-3 rounded-full border-2 border-transparent border-b-primary/40 animate-spin-reverse-slower opacity-60" />
          
          {/* Soft Pulsing Inner Glow */}
          <div className="absolute inset-8 rounded-full bg-gradient-to-br from-primary/8 to-transparent blur-md animate-fade-pulse" />

          {/* Logo */}
          <div className="relative z-10">
            <Image
              src="/logo/logo.PNG"
              alt="Preloader"
              width={90}
              height={90}
              className="drop-shadow-lg"
              priority
            />
          </div>
        </div>

        {/* Brand Name with Smooth Fade In */}
        <div className="text-center space-y-3 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            SOLVIX
          </h2>
          <p className="text-xs md:text-sm text-foreground/50 tracking-widest uppercase font-medium">
            Core Platform
          </p>
        </div>

        {/* Elegant Loading Indicator */}
        <div className="flex items-center gap-3 mt-4">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: '0s' }} />
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: '0.2s' }} />
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: '0.4s' }} />
        </div>
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

        @keyframes spin-reverse-slower {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
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

        .animate-spin-reverse-slower {
          animation: spin-reverse-slower 6s linear infinite;
        }

        .animate-fade-pulse {
          animation: fade-pulse 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
