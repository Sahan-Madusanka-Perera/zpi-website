'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { ArrowRight, Zap, Shield, Clock } from 'lucide-react';
import Image from 'next/image';
import Typed from 'typed.js';

export function HeroSection() {
  const containerRef = useRef(null);
  const el = useRef(null);
  
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

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
      {/* Enhanced Background with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y, opacity }}
      >
        <Image
          src="/images/hero-main.jpg"
          alt="Zeus Power International Emergency Services"
          fill
          priority
          className="object-cover scale-105"
          quality={90}
          loading="eager"
        />
        {/* Modern gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/75 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-red-900/20 via-transparent to-transparent" />
      </motion.div>

      {/* Floating Orbs with Modern Styling */}
      <motion.div
        className="absolute -top-40 -right-40 h-96 w-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255, 68, 68, 0.15) 0%, rgba(255, 68, 68, 0.05) 40%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        className="absolute bottom-20 -left-40 h-80 w-80 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255, 68, 68, 0.1) 0%, rgba(255, 68, 68, 0.03) 40%, transparent 70%)',
          filter: 'blur(30px)',
        }}
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          rotate: [360, 180, 0]
        }}
        transition={{ 
          duration: 25,
          repeat: Infinity,
          ease: "linear",
          delay: 5
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
            <motion.span 
              ref={el}
              className="gradient-text-primary inline-block"
              animate={{ 
                textShadow: [
                  "0 0 20px rgba(255, 68, 68, 0.5)",
                  "0 0 40px rgba(255, 68, 68, 0.8)",
                  "0 0 20px rgba(255, 68, 68, 0.5)"
                ] 
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
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
