'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Preloader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
      >
        {/* Animated grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

        <div className="relative z-10 flex flex-col items-center gap-8">
          {/* Main brand text with glow effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center"
          >
            <motion.h1
              animate={{
                textShadow: [
                  '0 0 20px rgba(156, 163, 175, 0.5)',
                  '0 0 40px rgba(156, 163, 175, 0.8)',
                  '0 0 20px rgba(156, 163, 175, 0.5)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="text-7xl md:text-8xl font-bold text-gray-400 tracking-wider mb-4"
              style={{
                fontFamily: 'var(--font-syne), sans-serif',
              }}
            >
              SOLVIX CORE
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
              className="text-xl md:text-2xl text-gray-500 tracking-wide"
              style={{
                textShadow: '0 0 10px rgba(107, 114, 128, 0.5)',
              }}
            >
              Premium Tech Solutions
            </motion.p>
          </motion.div>

          {/* Progress bar */}
          <div className="w-64 h-1.5 bg-gray-800 rounded-full overflow-hidden mt-8">
            <motion.div
              className="h-full bg-gradient-to-r from-gray-600 via-gray-400 to-gray-600"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
              style={{
                boxShadow: '0 0 10px rgba(156, 163, 175, 0.5)',
              }}
            />
          </div>

          {/* Progress percentage */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gray-500 text-lg font-semibold"
          >
            {progress}%
          </motion.p>

          {/* Loading dots */}
          <div className="flex gap-2 mt-4">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-gray-500"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
                style={{
                  boxShadow: '0 0 10px rgba(107, 114, 128, 0.5)',
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
