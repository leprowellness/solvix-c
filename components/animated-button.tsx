import Link from 'next/link';
import { ReactNode } from 'react';

interface AnimatedButtonProps {
  children: ReactNode;
  href: string;
  variant?: 'primary' | 'secondary' | 'premium';
  className?: string;
}

export default function AnimatedButton({
  children,
  href,
  variant = 'primary',
  className = '',
}: AnimatedButtonProps) {
  const getClasses = () => {
    const baseClasses =
      'font-bold text-lg inline-flex items-center justify-center gap-2 transition-all duration-300 transform rounded-xl px-8 py-4 relative overflow-hidden group';

    if (variant === 'primary') {
      return `${baseClasses} bg-gradient-to-r from-primary to-primary/80 hover:from-primary hover:to-accent text-primary-foreground shadow-lg hover:shadow-2xl hover:shadow-primary/40 hover:scale-105`;
    }

    if (variant === 'secondary') {
      return `${baseClasses} border-2 border-primary text-primary hover:bg-primary/10 hover:border-accent hover:scale-105`;
    }

    if (variant === 'premium') {
      return `${baseClasses} glass-premium text-foreground hover:shadow-glow hover:scale-105 hover:border-cyan-400/30`;
    }

    return baseClasses;
  };

  return (
    <Link href={href} className={`${getClasses()} ${className}`}>
      {/* Animated background */}
      <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Shimmer effect */}
      <span className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:left-full transition-all duration-500" />

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </Link>
  );
}
