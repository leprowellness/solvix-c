import { ReactNode } from 'react';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  animate?: boolean;
  variant?: 'default' | 'cyber' | 'premium';
}

export default function GradientText({ 
  children, 
  className = '',
  animate = false,
  variant = 'default'
}: GradientTextProps) {
  const getGradient = () => {
    switch (variant) {
      case 'cyber':
        return 'bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent';
      case 'premium':
        return 'bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent';
      default:
        return 'bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent';
    }
  };

  const animationClass = animate ? 'animate-rotate-gradient' : '';

  return (
    <span className={`${getGradient()} ${animationClass} ${className}`}>
      {children}
    </span>
  );
}
