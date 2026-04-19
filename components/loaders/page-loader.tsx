'use client';

import { motion } from 'framer-motion';

export default function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="relative">
        {/* Hexagon loader */}
        <svg width="100" height="100" viewBox="0 0 100 100" className="relative">
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
          
          {[...Array(6)].map((_, i) => (
            <motion.line
              key={i}
              x1="50"
              y1="50"
              x2={50 + 40 * Math.cos((i * Math.PI) / 3)}
              y2={50 + 40 * Math.sin((i * Math.PI) / 3)}
              stroke="url(#gradient1)"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: 'easeInOut',
              }}
            />
          ))}
        </svg>

        {/* Center pulsing dot */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500"
          style={{ transform: 'translate(-50%, -50%)' }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </div>

      {/* Loading text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute mt-32 text-purple-400 text-sm font-medium"
      >
        Loading content...
      </motion.p>
    </div>
  );
}
