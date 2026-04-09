'use client';

import Image from 'next/image';

interface FullscreenLoaderProps {
  isVisible: boolean;
  message?: string;
  progress?: number;
}

export default function FullscreenLoader({ 
  isVisible, 
  message = 'Processing...', 
  progress 
}: FullscreenLoaderProps) {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-background/98 backdrop-blur-sm flex items-center justify-center">
      {/* Ambient Light Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-primary/5 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-8 max-w-md mx-4">
        {/* Logo Section with Advanced Animation */}
        <div className="relative w-40 h-40 flex items-center justify-center">
          {/* Rotating Glow Ring */}
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary border-r-primary/60 animate-spin-slow opacity-80" />
          
          {/* Pulsing Outer Ring */}
          <div className="absolute inset-0 rounded-full border border-primary/20 animate-pulse" />
          
          {/* Soft Inner Glow */}
          <div className="absolute inset-6 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-lg animate-fade-pulse" />

          {/* Logo Container with Transparent Background */}
          <div className="relative z-10">
            <Image
              src="/logo/logo.PNG"
              alt="Loading"
              width={100}
              height={100}
              className="drop-shadow-lg"
              priority
            />
          </div>
        </div>

        {/* Message */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-foreground mb-2">{message}</h3>
          <p className="text-sm text-foreground/60">Please wait while we process your request...</p>
        </div>

        {/* Progress Bar with Glow */}
        {progress !== undefined && (
          <div className="w-full space-y-2">
            <div className="w-full h-2 bg-foreground/10 rounded-full overflow-hidden border border-primary/20">
              <div
                className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500 shadow-lg"
                style={{ 
                  width: `${progress}%`,
                  boxShadow: `0 0 20px rgba(0, 188, 212, 0.6)`,
                }}
              />
            </div>
            <p className="text-xs text-foreground/50 text-center font-medium">{progress}%</p>
          </div>
        )}

        {/* Pulsing Dots */}
        {progress === undefined && (
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-accent animate-pulse-dot" style={{ animationDelay: '0s', boxShadow: '0 0 10px rgba(0, 188, 212, 0.6)' }} />
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-accent to-primary animate-pulse-dot" style={{ animationDelay: '0.3s', boxShadow: '0 0 10px rgba(0, 188, 212, 0.6)' }} />
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-accent animate-pulse-dot" style={{ animationDelay: '0.6s', boxShadow: '0 0 10px rgba(0, 188, 212, 0.6)' }} />
          </div>
        )}
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
            opacity: 0.7;
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
