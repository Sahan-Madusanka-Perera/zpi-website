// components/Navbar.tsx
"use client"
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetHeader,
} from '@/components/ui/sheet';
import { PhoneCall, Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from '@/context/theme-context';
import { smoothScrollTo } from '@/utils/smoothScroll';

// Animated hamburger button component
interface AnimatedHamburgerProps {
  isOpen: boolean;
  toggleOpen: () => void;
}

const AnimatedHamburger: React.FC<AnimatedHamburgerProps> = ({ isOpen, toggleOpen }) => {
  return (
    <button 
      onClick={toggleOpen}
      className="flex flex-col justify-center items-center w-8 h-8 relative overflow-hidden"
    >
      <div className="w-full h-full flex flex-col items-center justify-center gap-1.5">
        {/* Top line */}
        <motion.span 
          className="w-6 h-0.5 bg-current rounded-full block"
          animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        />
        {/* Middle line */}
        <motion.span 
          className="w-6 h-0.5 bg-current rounded-full block"
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.2 }}
        />
        {/* Bottom line */}
        <motion.span 
          className="w-6 h-0.5 bg-current rounded-full block"
          animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        />
      </div>
    </button>
  );
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Contact', href: '#contact' },
    { name: 'Companies', href: '#strength' }
  ];

  const MotionLink = motion(Link);

  // Handle smooth scrolling
  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only handle anchor links, not normal page navigation
    if (href.startsWith('#')) {
      const sectionId = href.substring(1);
      smoothScrollTo(e, sectionId);
      // Close mobile menu if open
      if (isOpen) setIsOpen(false);
    }
  };

  const toggleOpen = () => setIsOpen(!isOpen);

  // Use different logos based on theme and scroll position
  // Only use light logo when in light theme AND scrolled (white navbar background)
  const logoSrc = (theme === 'light' && scrolled) ? '/images/logo_for_light.png' : '/images/logo.png';

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-stone-50/95 dark:bg-black/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div 
            className="relative w-48 h-12"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="block relative w-full h-full">
              <div className="logo-container w-full h-full hover-glow">
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={logoSrc}
                    alt="Zeus Power International Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                  <div className="logo-fallback absolute inset-0 flex items-center justify-center">
                    <div className="flex items-center space-x-2">
                      <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-end"
                      >
                        <span style={{ fontFamily: 'var(--font-outfit)', fontWeight: 100, letterSpacing: '0.2em' }} className="text-3xl text-white">ZEUS</span>
                        <span style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 900, letterSpacing: '-0.01em' }} className="text-2xl bg-gradient-to-r from-[#ff4040] to-[#ff8585] bg-clip-text text-transparent">POWER</span>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
          
          {/* Desktop Navigation */}
          <motion.nav 
            className="hidden md:flex ml-auto mr-auto space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavLinkClick(e, item.href)}
                className="relative group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * (navItems.indexOf(item) + 1) }}
              >
                <span style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 500, letterSpacing: '0.15em' }} className={`text-sm uppercase ${scrolled ? 'text-gray-800 dark:text-gray-200' : 'text-white'} hover:text-red-600 transition-colors`}>
                  {item.name}
                </span>
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-[#ff4040]"></span>
              </motion.a>
            ))}
          </motion.nav>
          
          {/* Theme Toggle & Emergency Button (Desktop) */}
          <div className="flex items-center space-x-4">
            <motion.button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${scrolled ? 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200' : 'bg-white/20 text-white'} hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>

            <motion.a 
              href="tel:+123456789"
              className="hidden md:flex items-center ml-8 px-4 py-2 bg-[#ff4040] rounded-md hover:bg-[#ff6b6b] transition-colors"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <PhoneCall className="w-4 h-4 mr-2 text-white" />
              <span style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 500, letterSpacing: 'wider' }} className="hidden sm:inline text-sm uppercase text-white">Emergency Hotline</span>
              <span style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 500, letterSpacing: 'wider' }} className="sm:hidden text-sm uppercase text-white">Hotline</span>
            </motion.a>
          </div>
          
          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <motion.div
                  className={`p-2 ${scrolled ? 'text-gray-800 dark:text-gray-200' : 'text-white'}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <AnimatedHamburger isOpen={isOpen} toggleOpen={toggleOpen} />
                </motion.div>
              </SheetTrigger>
              <SheetContent side="right" className="bg-white dark:bg-black border-0 shadow-2xl p-0 overflow-hidden">
                {/* Use visually hidden title for accessibility */}
                <span className="sr-only">
                  <SheetTitle>Navigation Menu</SheetTitle>
                </span>
                
                {/* Background decorative elements */}
                <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-10 dark:opacity-20 pointer-events-none">
                  <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-red-500/30 to-red-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                  <div className="absolute bottom-0 left-0 w-60 h-60 bg-gradient-to-tr from-red-500/20 to-red-500/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/2"></div>
                </div>
                
                <div className="mt-16 px-6 relative z-10">
                  {/* Logo */}
                  <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-10 flex justify-center"
                  >
                    <div className="relative h-12 w-32">
                      <div className="logo-fallback flex items-center justify-center">
                        <div className="flex items-end">
                          <span style={{ fontFamily: 'var(--font-outfit)', fontWeight: 100, letterSpacing: '0.2em' }} className="text-2xl dark:text-white text-gray-900">ZEUS</span>
                          <span style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 900, letterSpacing: '-0.01em' }} className="text-xl bg-gradient-to-r from-[#ff4040] to-[#ff8585] bg-clip-text text-transparent">POWER</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex flex-col space-y-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    {navItems.map((item, index) => (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        onClick={(e) => handleNavLinkClick(e, item.href)}
                        className="group flex items-center"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <motion.div 
                          className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-red-500/10 to-red-500/5 mr-4"
                          whileHover={{ scale: 1.1, backgroundColor: "rgba(239, 68, 68, 0.2)" }}
                        >
                          <motion.span 
                            className="w-1.5 h-1.5 rounded-full bg-red-500"
                            whileHover={{ scale: 1.5 }}
                            transition={{ type: "spring", stiffness: 300, damping: 10 }}
                          />
                        </motion.div>
                        <span style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 600, letterSpacing: '0.05em' }} className="text-xl uppercase text-gray-800 dark:text-gray-200 hover:text-red-600 transition-colors">
                          {item.name}
                        </span>
                      </motion.a>
                    ))}
                  </motion.div>
                  
                  <motion.div 
                    className="mt-12 bg-gradient-to-r from-red-600 to-red-500 rounded-xl p-0.5 overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <motion.a
                      href="tel:+123456789"
                      className="flex items-center justify-center w-full px-4 py-4 bg-gradient-to-br from-red-600 to-red-500 rounded-xl text-white"
                      whileTap={{ scale: 0.97 }}
                    >
                      <PhoneCall className="w-5 h-5 mr-3" />
                      <span style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 600, letterSpacing: '0.05em' }} className="text-base uppercase">Emergency Hotline</span>
                    </motion.a>
                  </motion.div>
                  
                  <motion.div 
                    className="mt-8 flex justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <motion.button
                      onClick={toggleTheme}
                      className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {theme === 'dark' ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
                    </motion.button>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="mt-12 text-center text-xs text-gray-500 dark:text-gray-400"
                  >
                    <p>© {new Date().getFullYear()} Zeus Power International</p>
                  </motion.div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}