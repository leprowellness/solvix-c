'use client';

import { useEffect, useRef } from 'react';

interface AnimatedHeroTextProps {
  text: string;
  className?: string;
}

export default function AnimatedHeroText({
  text,
  className = '',
}: AnimatedHeroTextProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const letters = ref.current.querySelectorAll('span');
    letters.forEach((letter, index) => {
      letter.style.animation = `fadeInUp 0.6s ease-out ${index * 30}ms forwards`;
      letter.style.opacity = '0';
    });
  }, []);

  // Split text into individual letters
  const letters = text.split('').map((letter, i) => (
    <span key={i} className="inline-block">
      {letter === ' ' ? '\u00A0' : letter}
    </span>
  ));

  return (
    <div ref={ref} className={className}>
      {letters}
    </div>
  );
}
