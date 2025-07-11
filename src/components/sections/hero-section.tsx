'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { ArrowRight, Zap, Shield, Clock } from 'lucide-react';
import Image from 'next/image';
import Typed from 'typed.js';

export function HeroSection() {
  const containerRef = useRef(null);
  const el = useRef(null);
  const [mounted, setMounted] = useState(false);
  
  const { scrollY } = useScroll();

  // Fixed particle positions to avoid hydration mismatch
  const particlePositions = [
    { left: 15, top: 20, size: 3, color: 'rgba(255, 68, 68, 0.3)' },
    { left: 85, top: 30, size: 2, color: 'rgba(59, 130, 246, 0.2)' },
    { left: 25, top: 80, size: 4, color: 'rgba(34, 197, 94, 0.25)' },
    { left: 70, top: 15, size: 3, color: 'rgba(255, 68, 68, 0.3)' },
    { left: 45, top: 60, size: 2, color: 'rgba(59, 130, 246, 0.2)' },
    { left: 90, top: 75, size: 3, color: 'rgba(34, 197, 94, 0.25)' },
    { left: 10, top: 45, size: 4, color: 'rgba(168, 85, 247, 0.3)' },
    { left: 60, top: 85, size: 2, color: 'rgba(255, 68, 68, 0.3)' },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Powering Your Future', 'Zeus Power International'],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 3000,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const features = [
    { icon: Clock, text: "24/7 Emergency Response" },
    { icon: Shield, text: "Expert Technical Support" },
    { icon: Zap, text: "Minimal Downtime Solutions" }
  ];

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Revolutionary Multi-Layer Background */}
      <div className="absolute inset-0 z-0">
        {/* Base Gradient Foundation */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-black" />
        
        {/* Optimized Animated Grid - Reduced Complexity */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255, 68, 68, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 68, 68, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px',
            }}
            animate={{ 
              backgroundPosition: ['0px 0px', '80px 80px'],
            }}
            transition={{ 
              duration: 30,
              repeat: Infinity,
              ease: 'linear'
            }}
          />
        </div>

        {/* Optimized Static Background Image */}
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/HEM09771.jpg"
            alt="Zeus Power International"
            fill
            priority
            className="object-cover"
            quality={75}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-black/60" />
        </div>
      </div>

      {/* Optimized Floating Particles - Reduced Count */}
      {mounted && particlePositions.slice(0, 4).map((particle, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full will-change-transform"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: particle.color
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            delay: i * 1.5,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Simplified Geometric Elements - Reduced Count */}
      <motion.div
        className="absolute top-1/4 left-1/3 w-24 h-24 will-change-transform"
        style={{
          background: 'linear-gradient(45deg, rgba(255, 68, 68, 0.08), rgba(59, 130, 246, 0.08))',
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          filter: 'blur(1px)'
        }}
        animate={{ 
          rotate: [0, 360],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ 
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <motion.div
        className="absolute bottom-1/3 right-1/4 w-20 h-20 border border-red-400/20 rounded-full will-change-transform"
        style={{
          background: 'radial-gradient(circle, rgba(255, 68, 68, 0.03) 0%, transparent 70%)'
        }}
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Simplified Energy Pulse Rings */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <motion.div
          className="w-96 h-96 rounded-full border border-red-400/10"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.3, 0, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
        <motion.div
          className="absolute w-80 h-80 rounded-full border border-blue-400/15"
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeOut",
            delay: 4,
          }}
        />
      </motion.div>

      {/* Optimized Atmospheric Orbs - Reduced Count and Complexity */}
      <motion.div
        className="absolute -top-32 -right-32 h-80 w-80 rounded-full will-change-transform"
        style={{
          background: 'radial-gradient(circle, rgba(255, 68, 68, 0.08) 0%, rgba(255, 68, 68, 0.02) 50%, transparent 80%)',
          filter: 'blur(40px)',
        }}
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        className="absolute bottom-0 -left-32 h-64 w-64 rounded-full will-change-transform"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.06) 0%, rgba(34, 197, 94, 0.02) 50%, transparent 75%)',
          filter: 'blur(30px)',
        }}
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Simplified Additional Particles */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-2 h-2 rounded-full will-change-transform"
          style={{
            left: `${20 + i * 20}%`,
            top: `${30 + i * 15}%`,
            background: i % 2 === 0 ? 'rgba(255, 68, 68, 0.3)' : 'rgba(59, 130, 246, 0.2)',
            filter: 'blur(0.5px)'
          }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 6 + i * 2,
            repeat: Infinity,
            delay: i * 2,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Simplified Additional Geometric Elements */}
      <motion.div
        className="absolute top-1/2 right-1/5 w-12 h-12 will-change-transform"
        style={{
          background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(255, 68, 68, 0.08))',
          clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)',
        }}
        animate={{ 
          rotate: [0, 180, 360],
          opacity: [0.4, 0.6, 0.4]
        }}
        transition={{ 
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Main Content */}
      <div className="container-modern relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card border-red-500/30">
              <Zap className="h-4 w-4 text-red-400" />
              <span className="text-body-sm font-semibold text-red-400">24/7 Emergency Services</span>
            </div>
          </motion.div>
          
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 50 }}
            className="text-display-1 text-white mb-8 text-balance"
          >
            <span 
              ref={el}
              className="gradient-text-primary inline-block"
            />
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-body-lg text-white/90 max-w-3xl mx-auto mb-12 text-pretty"
          >
            Zeus Power International (Pvt) Ltd is a subsidiary company of Illukkumbura Industrial 
            Automation (Pvt) Ltd. We handle all emergency breakdowns and services in electrical 
            systems, fire detection/protection, and air-conditioning systems.
          </motion.p>
          
          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 1 + index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-full glass-card border-white/10"
              >
                <feature.icon className="h-4 w-4 text-red-400" />
                <span className="text-body-sm text-white/90">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.button
              className="btn-primary group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span>Explore Our Services</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </motion.button>
            
            <motion.button
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Emergency Support
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
