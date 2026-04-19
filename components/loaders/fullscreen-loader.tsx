'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface FullscreenLoaderProps {
  isVisible?: boolean;
  message?: string;
  progress?: number;
}

export default function FullscreenLoader({ isVisible = false, message, progress }: FullscreenLoaderProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
        >
          {/* Animated grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

          <div className="relative z-10 flex flex-col items-center gap-6">
            {/* Main brand text with glow effect */}
            <motion.h1
              animate={{
                textShadow: [
                  '0 0 20px rgba(156, 163, 175, 0.5)',
                  '0 0 40px rgba(156, 163, 175, 0.8)',
                  '0 0 20px rgba(156, 163, 175, 0.5)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="text-5xl md:text-6xl font-bold text-gray-400 tracking-wider"
              style={{
                fontFamily: 'var(--font-syne), sans-serif',
              }}
            >
              SOLVIX CORE
            </motion.h1>

            {/* Optional message */}
            {message && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-gray-500 text-lg"
              >
                {message}
              </motion.p>
            )}

            {/* Loading dots */}
            <div className="flex gap-2 mt-4">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2.5 h-2.5 rounded-full bg-gray-500"
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

            {/* Optional progress bar */}
            {progress !== undefined && (
              <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden mt-4">
                <motion.div
                  className="h-full bg-gray-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
