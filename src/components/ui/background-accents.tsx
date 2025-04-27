'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface BackgroundAccentsProps {
  children?: ReactNode;
  orbCount?: number;
  variant?: 'default' | 'subtle' | 'vibrant';
  className?: string;
}

export function BackgroundAccents({
  children,
  orbCount = 3,
  variant = 'default',
  className = '',
}: BackgroundAccentsProps) {
  // Generate the right number of orbs
  const orbs = Array.from({ length: orbCount }, (_, i) => {
    // Create random position and size values
    const size = 30 + Math.random() * 80; // Size between 30 and 110
    const top = Math.random() * 100; // Position from 0% to 100%
    const left = Math.random() * 100;
    const delay = Math.random() * 5; // Animation delay up to 5s
    const duration = 10 + Math.random() * 15; // Animation duration 10-25s
    
    // Different opacity based on variant
    let opacity = 0.4;
    if (variant === 'subtle') opacity = 0.2;
    if (variant === 'vibrant') opacity = 0.6;
    
    return {
      size,
      style: {
        width: `${size}%`,
        height: `${size}%`,
        top: `${top}%`,
        left: `${left}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        opacity: opacity
      }
    };
  });

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* The actual content */}
      {children}
      
      {/* Background elements (only visible in light mode) */}
      <div className="absolute inset-0 pointer-events-none hidden dark:hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-red-500/[0.01] opacity-30 mix-blend-multiply" 
             style={{
               backgroundImage: `radial-gradient(circle at 30% 40%, rgba(255,64,64,0.03) 0%, transparent 50%),
                                radial-gradient(circle at 70% 70%, rgba(255,64,64,0.03) 0%, transparent 30%)`
             }} 
        />
        
        {/* Floating orbs */}
        {orbs.map((orb, index) => (
          <div
            key={index}
            className="light-accent-orb absolute"
            style={orb.style}
          />
        ))}
        
        {/* Optional animated gradient line */}
        {variant === 'vibrant' && (
          <motion.div 
            className="absolute h-px w-full top-1/3 bg-gradient-to-r from-transparent via-red-400/10 to-transparent"
            animate={{
              y: [0, 10, 0],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )}
      </div>
    </div>
  );
} 