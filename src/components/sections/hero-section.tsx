'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
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
      strings: ['Powering Your Future', 'Zeus Power International(Pvt) Ltd'],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background parallax effect */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y, opacity }}
      >
        <Image
          src="/images/hero-main.jpg"
          alt="Zeus Power International Emergency Services"
          fill
          priority
          className="object-cover"
          quality={75}
          loading="eager"
        />
        {/* Enhanced gradient overlay with animation */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80"
          initial={{ opacity: 0.6 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />
      </motion.div>

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-red-500/10 blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2] 
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        style={{ transform: 'translateZ(0)' }}
      />
      
      <motion.div
        className="absolute bottom-20 -left-40 h-96 w-96 rounded-full bg-red-500/10 blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.25, 0.1] 
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 2
        }}
        style={{ transform: 'translateZ(0)' }}
      />

      {/* Content with enhanced animations */}
      <div className="container mx-auto px-4 relative z-10 mt-32">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4"
          >
            <motion.div 
              className="inline-block px-4 py-1 rounded-full bg-red-600/20 backdrop-blur-sm border border-red-500/30 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-sm font-bold text-red-400 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">24/7 Emergency Services</span>
            </motion.div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="heading-1 text-gradient mb-12 relative leading-[1.2] py-2 drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]"
          >
            <motion.span 
              ref={el}
              className="inline-block"
              animate={{ 
                textShadow: [
                  "0 0 10px rgba(255, 64, 64, 0.5), 0 0 20px rgba(0, 0, 0, 0.8)",
                  "0 0 20px rgba(255, 64, 64, 0.7), 0 0 30px rgba(0, 0, 0, 0.8)",
                  "0 0 10px rgba(255, 64, 64, 0.5), 0 0 20px rgba(0, 0, 0, 0.8)"
                ] 
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            ></motion.span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="body-large text-white/90 max-w-2xl mx-auto mb-12 relative drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-medium"
          >
            Zeus Power International (pvt) Ltd is a Subsidiary company of Illukkumbura Industrial 
            Automation (pvt) Ltd. We handle all Emergency Breakdowns and Services in Electrical 
            Systems, Fire Detection/Protection and Air-Conditioning Systems.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="relative flex justify-center gap-4"
          >
            <Button
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-red-500/20"
            >
              <span className="relative z-10 flex items-center gap-3">
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Our Services
                </motion.span>
                <motion.div
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.div>
              </span>
            </Button>
            
            <motion.a
              href="#contact"
              className="hidden md:inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full border-2 border-white/30 hover:border-white/60 text-white font-medium transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Us
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 