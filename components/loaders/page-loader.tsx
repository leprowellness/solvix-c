'use client';

import Image from 'next/image';

interface PageLoaderProps {
  isVisible?: boolean;
  message?: string;
}

export default function PageLoader({ isVisible = false, message = 'Loading...' }: PageLoaderProps) {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9998] bg-background/95 backdrop-blur-sm flex items-center justify-center">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-primary/4 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center gap-6">
        {/* Logo with Modern Rotating Ring */}
        <div className="relative w-28 h-28 flex items-center justify-center">
          {/* Animated Rotating Border */}
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary border-r-primary/60 animate-spin-slow" />
          
          {/* Subtle Pulsing Ring */}
          <div className="absolute inset-0 rounded-full border border-primary/15 animate-pulse" />
          
          {/* Inner Soft Glow */}
          <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary/5 to-transparent blur-md" />
          
          {/* Logo */}
          <div className="relative z-10">
            <Image
              src="/logo/logo.PNG"
              alt="Loading"
              width={70}
              height={70}
              className="drop-shadow-md"
              priority
            />
          </div>
        </div>

        {/* Loading Text */}
        <p className="text-foreground/60 text-sm font-medium tracking-wide">{message}</p>

        {/* Elegant Loading Progress Bar */}
        <div className="w-56 h-0.5 bg-foreground/8 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"
            style={{
              animation: 'shimmer 2s ease-in-out infinite',
            }}
          />
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

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 2.5s linear infinite;
        }
      `}</style>
    </div>
  );
}
